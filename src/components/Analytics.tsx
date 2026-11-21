'use client'

import Script from 'next/script'
import { useEffect } from 'react'

/**
 * Google Analytics 4 (property G-MNLHGDZ9GF, owned by contact@reboundcapitalgroup.com).
 *
 * Loads gtag.js after the page is interactive so it doesn't slow first paint.
 * Also records a "phone_call_click" event whenever a visitor taps any tel: link,
 * anywhere on the site. Form submissions are recorded as "generate_lead" from
 * the contact page (see trackLead below).
 *
 * In GA4, mark "generate_lead" and "phone_call_click" as key events
 * (Admin > Events) so they show up as conversions.
 */
export const GA_ID = 'G-MNLHGDZ9GF'

type Gtag = (...args: unknown[]) => void

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (typeof gtag === 'function') gtag('event', name, params)
}

export function trackLead(params: Record<string, unknown> = {}) {
  trackEvent('generate_lead', params)
}

export default function Analytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null
      const link = target?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!link) return
      trackEvent('phone_call_click', {
        link_url: link.getAttribute('href'),
        page_path: window.location.pathname,
      })
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  )
}
