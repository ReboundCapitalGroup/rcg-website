import { NextRequest, NextResponse } from 'next/server'

// Rate limiting: simple in-memory store (resets on deployment)
const submissionTracker = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX = 3 // max 3 submissions per IP per hour

const VALID_CLAIM_TYPES = ['foreclosure', 'tax_deed', 'unclaimed_property', 'estate', 'unsure']

const CLAIM_TYPE_LABELS: Record<string, string> = {
  foreclosure: 'Foreclosure Surplus',
  tax_deed: 'Tax Deed / Excess Proceeds',
  unclaimed_property: 'Unclaimed Property',
  estate: 'Estate Recovery',
  unsure: 'Not Sure',
}

// States RCG actively operates in — used only to label the email, not to filter.
const IN_FOOTPRINT = ['Florida', 'Ohio', 'Arizona', 'Colorado', 'Michigan']

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const timestamps = submissionTracker.get(ip) || []
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  if (recent.length >= RATE_LIMIT_MAX) return false
  recent.push(now)
  submissionTracker.set(ip, recent)
  return true
}

function sanitize(input: string | undefined | null): string {
  if (!input) return ''
  return String(input)
    .trim()
    .replace(/<[^>]*>/g, '') // strip HTML tags
    .replace(/[\x00-\x1F\x7F]/g, '') // strip control chars
    .slice(0, 5000) // max length
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 15
}

/**
 * Real NANP numbers never have 0 or 1 as the first digit of the area code
 * or the exchange. Catches fabricated numbers like (187) 026-6254.
 */
function hasImplausiblePhone(phone: string): boolean {
  const d = phone.replace(/\D/g, '')
  const ten = d.length === 11 && d.startsWith('1') ? d.slice(1) : d
  if (ten.length !== 10) return false
  if (/[01]/.test(ten[0]) || /[01]/.test(ten[3])) return true
  if (/^(\d)\1{9}$/.test(ten)) return true          // 1111111111
  if (/0123456789|1234567890|2345678999/.test(ten)) return true
  return false
}

/**
 * Scores likely-junk submissions. NEVER blocks — everything is inserted.
 * The score exists so you can sort the inbox, not so a machine can reject
 * someone with a real six-figure claim.
 */
function scoreSpam(input: {
  fullName: string
  message: string
  phone: string
  fillTimeMs: number
  assetDesc: string
  county: string
}): { score: number; reasons: string[] } {
  const reasons: string[] = []
  let score = 0

  if (input.fillTimeMs > 0 && input.fillTimeMs < 3000) {
    score += 40
    reasons.push('submitted_under_3s')
  } else if (input.fillTimeMs > 0 && input.fillTimeMs < 8000) {
    score += 15
    reasons.push('submitted_under_8s')
  }

  const name = input.fullName.trim()
  if (name.length < 3 || /^n\.?\/?a\.?$/i.test(name) || /^(test|asdf|none)$/i.test(name)) {
    score += 30
    reasons.push('placeholder_name')
  }

  if (hasImplausiblePhone(input.phone)) {
    score += 30
    reasons.push('implausible_phone')
  }

  // Outreach/solicitation language — VA agencies, lead sellers, SEO pitches
  const solicit = /(virtual assistant|our services|we specialize|we offer|partnership opportunity|increase your (leads|revenue)|outsourc|cold call|appointment setting|lead generation service|digital marketing|seo services|guest post|backlink)/i
  if (solicit.test(input.message) || solicit.test(input.assetDesc)) {
    score += 45
    reasons.push('solicitation_language')
  }

  // No detail at all anywhere
  if (!input.message && !input.assetDesc && !input.county) {
    score += 10
    reasons.push('no_detail_provided')
  }

  return { score: Math.min(score, 100), reasons }
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Honeypot: if the hidden field is filled, it's a bot. Fake success so it
    // doesn't learn anything and doesn't retry.
    if (body.website_url && body.website_url.length > 0) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Sanitize all inputs
    const claimType = VALID_CLAIM_TYPES.includes(body.claimType) ? body.claimType : 'unsure'
    const fullName = sanitize(body.fullName)
    const email = sanitize(body.email).toLowerCase()
    const phone = sanitize(body.phone)
    const state = sanitize(body.state)
    const county = sanitize(body.county)
    const saleDateApprox = sanitize(body.saleDateApprox)
    const propertyAddress = sanitize(body.propertyAddress)
    const assetDesc = sanitize(body.assetDesc)
    const priorAddress = sanitize(body.priorAddress)
    const message = sanitize(body.message)

    // Validate required fields
    if (!fullName || fullName.length < 2) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 })
    }
    if (!phone || !isValidPhone(phone)) {
      return NextResponse.json({ error: 'Valid phone number is required.' }, { status: 400 })
    }
    if (!state) {
      return NextResponse.json({ error: 'Please select a state.' }, { status: 400 })
    }

    // --- ATTRIBUTION (first-touch, sent from the client) --------------------
    // The old code read request.headers.get('referer'), which is ALWAYS
    // /contact because that is the page the fetch originates from. The real
    // source is captured on the visitor's first page view and passed here.
    const attr = body.attribution || {}
    const trueReferrer = sanitize(attr.referrer) || null
    const landingPage = sanitize(attr.landing_page) || null
    const utmSource = sanitize(attr.utm_source) || null
    const utmMedium = sanitize(attr.utm_medium) || null
    const utmCampaign = sanitize(attr.utm_campaign) || null
    const gclid = sanitize(attr.gclid) || null
    const timeOnSiteMs =
      typeof attr.time_on_site_ms === 'number' ? Math.round(attr.time_on_site_ms) : null

    // Channel, derived server-side so it is consistent even if the client lies
    let channel = 'unknown'
    if (gclid || utmMedium === 'cpc') channel = 'paid_search'
    else if (utmSource) channel = `campaign:${utmSource}`
    else if (!trueReferrer && landingPage) channel = 'direct'
    else if (trueReferrer) {
      try {
        const host = new URL(trueReferrer).hostname.replace(/^www\./, '')
        if (/google\./.test(host)) channel = 'organic_google'
        else if (/bing\./.test(host)) channel = 'organic_bing'
        else if (/duckduckgo\./.test(host)) channel = 'organic_ddg'
        else if (/(chatgpt|openai)\./.test(host)) channel = 'ai_chatgpt'
        else if (/(claude|anthropic)\./.test(host)) channel = 'ai_claude'
        else if (/perplexity\./.test(host)) channel = 'ai_perplexity'
        else if (/gemini\.google/.test(host)) channel = 'ai_gemini'
        else if (/(facebook|instagram|linkedin|twitter|x\.com|tiktok|reddit)\./.test(host))
          channel = `social:${host.split('.')[0]}`
        else channel = `referral:${host}`
      } catch {
        channel = 'unknown'
      }
    }

    // --- SPAM SCORING (scores, never blocks) --------------------------------
    const fillTimeMs = typeof body.fillTimeMs === 'number' ? body.fillTimeMs : 0
    const { score: spamScore, reasons: spamReasons } = scoreSpam({
      fullName,
      message,
      phone,
      fillTimeMs,
      assetDesc,
      county,
    })

    const userAgent = sanitize(request.headers.get('user-agent') || '')

    // --- INSERT -------------------------------------------------------------
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase env vars not configured')
      return NextResponse.json(
        { error: 'Server configuration error. Please try again or call us directly.' },
        { status: 500 }
      )
    }

    const submissionData = {
      claim_type: claimType,
      full_name: fullName,
      email,
      phone,
      state: state || null,
      county: county || null,
      sale_date_approx: saleDateApprox || null,
      property_address: propertyAddress || null,
      asset_desc: assetDesc || null,
      prior_address: priorAddress || null,
      message: message || null,
      status: 'new',
      ip_address: ip,
      user_agent: userAgent || null,
      referrer: trueReferrer,
      landing_page: landingPage,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      gclid,
      channel,
      time_on_site_ms: timeOnSiteMs,
      spam_score: spamScore,
      spam_reasons: spamReasons.length ? spamReasons : null,
    }

    const supabaseRes = await fetch(`${supabaseUrl}/rest/v1/website_submissions`, {
      method: 'POST',
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(submissionData),
    })

    if (!supabaseRes.ok) {
      const errorText = await supabaseRes.text()
      console.error('Supabase insert failed:', errorText)
      return NextResponse.json(
        { error: 'Could not save submission. Please try again or call us directly.' },
        { status: 500 }
      )
    }

    // --- EMAIL VIA POSTMARK -------------------------------------------------
    const postmarkToken = process.env.POSTMARK_SERVER_TOKEN
    const fromEmail = process.env.FROM_EMAIL || 'contact@reboundcapitalgroup.com'
    const notifyEmail = process.env.NOTIFY_EMAIL || 'contact@reboundcapitalgroup.com'

    if (postmarkToken) {
      try {
        const inFootprint = IN_FOOTPRINT.includes(state)
        const claimLabel = CLAIM_TYPE_LABELS[claimType] || claimType

        // Claim-type-specific detail block
        let detailBlock = ''
        if (claimType === 'foreclosure' || claimType === 'tax_deed') {
          detailBlock = [
            `COUNTY:     ${county || '(not provided)'}`,
            `SALE DATE:  ${saleDateApprox || '(not provided)'}`,
            `ADDRESS:    ${propertyAddress || '(not provided)'}`,
          ].join('\n')
        } else if (claimType === 'unclaimed_property') {
          detailBlock = [
            `ASSET:      ${assetDesc || '(not provided)'}`,
            `PRIOR ADDR: ${priorAddress || '(not provided)'}`,
          ].join('\n')
        } else if (claimType === 'estate') {
          detailBlock = [
            `RELATION:   ${assetDesc || '(not provided)'}`,
            `LAST ADDR:  ${priorAddress || '(not provided)'}`,
          ].join('\n')
        }

        const flagLine = spamScore >= 40
          ? `\n!! REVIEW FLAG — spam score ${spamScore} (${spamReasons.join(', ')})\n`
          : ''

        const emailBody = `
${inFootprint ? '>> IN FOOTPRINT <<' : '>> OUT OF FOOTPRINT — referral candidate <<'}

CLAIM TYPE: ${claimLabel}
${flagLine}
─────────────────────────────────────
NAME:       ${fullName}
EMAIL:      ${email}
PHONE:      ${phone}
STATE:      ${state}
${detailBlock}
─────────────────────────────────────

MESSAGE:
${message || '(no message)'}

─────────────────────────────────────
SOURCE:     ${channel}
REFERRER:   ${trueReferrer || '(direct)'}
LANDED ON:  ${landingPage || '(unknown)'}
ON SITE:    ${timeOnSiteMs ? Math.round(timeOnSiteMs / 1000) + 's' : '(unknown)'}
FILL TIME:  ${fillTimeMs ? Math.round(fillTimeMs / 1000) + 's' : '(unknown)'}
SPAM SCORE: ${spamScore}
─────────────────────────────────────
Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
IP:        ${ip}

Review and promote this lead in the CRM:
https://crm.reboundcapitalgroup.com/website-inbox
        `.trim()

        const postmarkRes = await fetch('https://api.postmarkapp.com/email', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Postmark-Server-Token': postmarkToken,
          },
          body: JSON.stringify({
            From: `RCG Website <${fromEmail}>`,
            To: notifyEmail,
            ReplyTo: email,
            Subject: `${inFootprint ? '[IN FOOTPRINT] ' : ''}${claimLabel} — ${fullName} (${state})${spamScore >= 40 ? ' [FLAGGED]' : ''}`,
            TextBody: emailBody,
            MessageStream: 'outbound',
          }),
        })

        if (!postmarkRes.ok) {
          const errorText = await postmarkRes.text()
          console.error('Postmark send failed:', errorText)
        }
      } catch (emailErr) {
        console.error('Email notification failed:', emailErr)
      }
    } else {
      console.error('Postmark token not configured')
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly at 305-563-4920.' },
      { status: 500 }
    )
  }
}

// Block all other methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
