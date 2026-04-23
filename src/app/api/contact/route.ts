import { NextRequest, NextResponse } from 'next/server'

// Rate limiting: simple in-memory store (resets on deployment)
const submissionTracker = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX = 3 // max 3 submissions per IP per hour

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

    // Honeypot: if the hidden field is filled, it's a bot
    if (body.website_url && body.website_url.length > 0) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Sanitize all inputs
    const fullName = sanitize(body.fullName)
    const email = sanitize(body.email).toLowerCase()
    const phone = sanitize(body.phone)
    const state = sanitize(body.state)
    const propertyAddress = sanitize(body.propertyAddress)
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

    const userAgent = sanitize(request.headers.get('user-agent') || '')
    const referrer = sanitize(request.headers.get('referer') || '')

    // Insert into Supabase website_submissions table
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
      full_name: fullName,
      email,
      phone,
      state: state || null,
      property_address: propertyAddress || null,
      message: message || null,
      status: 'new',
      ip_address: ip,
      user_agent: userAgent || null,
      referrer: referrer || null,
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

    // ========================================
    // EMAIL VIA POSTMARK
    // ========================================
    const postmarkToken = process.env.POSTMARK_SERVER_TOKEN
    const fromEmail = process.env.FROM_EMAIL || 'contact@reboundcapitalgroup.com'
    const notifyEmail = process.env.NOTIFY_EMAIL || 'contact@reboundcapitalgroup.com'

    if (postmarkToken) {
      try {
        const emailBody = `
New contact form submission received on reboundcapitalgroup.com

─────────────────────────────────────
NAME:     ${fullName}
EMAIL:    ${email}
PHONE:    ${phone}
STATE:    ${state || '(not provided)'}
ADDRESS:  ${propertyAddress || '(not provided)'}
─────────────────────────────────────

MESSAGE:
${message || '(no message)'}

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
            Subject: `New Inquiry from ${fullName} (${state || 'Unknown'})`,
            TextBody: emailBody,
            MessageStream: 'outbound',
          }),
        })

        if (!postmarkRes.ok) {
          const errorText = await postmarkRes.text()
          console.error('Postmark send failed:', errorText)
        }
      } catch (emailErr) {
        // Log but don't fail the submission if email fails
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
