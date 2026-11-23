import Link from 'next/link'
import { L, type Lang } from '@/lib/i18n'

/**
 * Sticky bottom bar on phones only (hidden above 768px via globals.css).
 * Two always-visible actions: call (tracked by Analytics as phone_call_click)
 * and the free claim check form.
 */
export default function MobileCallBar({ lang = 'en' }: { lang?: Lang }) {
  const es = lang === 'es'
  return (
    <div className="mobile-call-bar" role="navigation" aria-label={es ? 'Contacto rápido' : 'Quick contact'}>
      <a href="tel:+13055634920" className="mobile-call-bar-call" aria-label={es ? 'Llame a Rebound Capital Group 24/7 al 305-563-4920' : 'Call Rebound Capital Group 24/7 at 305-563-4920'}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        {es ? 'Llame 24/7' : 'Call 24/7'}
      </a>
      <Link href={L(lang, '/free-review')} className="mobile-call-bar-check">{es ? 'Revisión gratis' : 'Free Review'}</Link>
    </div>
  )
}
