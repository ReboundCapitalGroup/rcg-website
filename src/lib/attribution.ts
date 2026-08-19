// lib/attribution.ts
//
// Captures where a visitor ACTUALLY came from, on their first page view,
// and holds it until they submit the form.
//
// The current bug: the form reads document.referrer at POST time. By then
// the visitor is on /contact and the last navigation was internal, so every
// row records "https://reboundcapitalgroup.com/contact". First-touch capture
// fixes that.

const KEY = 'rcg_attribution'

export interface Attribution {
  referrer: string | null        // true external referrer, null if direct
  landing_page: string           // first page they hit
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  utm_term: string | null
  utm_content: string | null
  gclid: string | null           // Google Ads click id, for later
  first_seen: string             // ISO timestamp
  time_on_site_ms?: number       // filled in at submit
}

/**
 * Call once, as early as possible, on every page load.
 * Only writes on the FIRST page of the session, so internal navigation
 * never overwrites the original source.
 */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return

  try {
    if (sessionStorage.getItem(KEY)) return // already captured this session

    const params = new URLSearchParams(window.location.search)
    const ref = document.referrer || ''

    // Treat same-origin referrers as direct: an internal link is not a source.
    let externalReferrer: string | null = null
    if (ref) {
      try {
        if (new URL(ref).hostname !== window.location.hostname) {
          externalReferrer = ref
        }
      } catch {
        externalReferrer = null
      }
    }

    const data: Attribution = {
      referrer: externalReferrer,
      landing_page: window.location.pathname + window.location.search,
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_term: params.get('utm_term'),
      utm_content: params.get('utm_content'),
      gclid: params.get('gclid'),
      first_seen: new Date().toISOString(),
    }

    sessionStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    // sessionStorage can throw in private mode. Attribution is nice to have,
    // never worth breaking the page for.
  }
}

/**
 * Call when building the form submission payload.
 */
export function getAttribution(): Attribution | null {
  if (typeof window === 'undefined') return null

  try {
    const raw = sessionStorage.getItem(KEY)
    if (!raw) return null

    const data = JSON.parse(raw) as Attribution
    data.time_on_site_ms = Date.now() - new Date(data.first_seen).getTime()
    return data
  } catch {
    return null
  }
}

/**
 * Human-readable channel, derived from the raw attribution.
 * Saves you writing CASE statements in SQL later.
 */
export function deriveChannel(a: Attribution | null): string {
  if (!a) return 'unknown'
  if (a.gclid || a.utm_medium === 'cpc') return 'paid_search'
  if (a.utm_source) return `campaign:${a.utm_source}`
  if (!a.referrer) return 'direct'

  let host = ''
  try {
    host = new URL(a.referrer).hostname.replace(/^www\./, '')
  } catch {
    return 'unknown'
  }

  if (/google\./.test(host)) return 'organic_google'
  if (/bing\./.test(host)) return 'organic_bing'
  if (/duckduckgo\./.test(host)) return 'organic_ddg'
  if (/(chatgpt|openai)\./.test(host)) return 'ai_chatgpt'
  if (/(claude|anthropic)\./.test(host)) return 'ai_claude'
  if (/perplexity\./.test(host)) return 'ai_perplexity'
  if (/gemini\.google/.test(host)) return 'ai_gemini'
  if (/(facebook|instagram|linkedin|twitter|x\.com|tiktok|reddit)\./.test(host)) {
    return `social:${host.split('.')[0]}`
  }
  return `referral:${host}`
}
