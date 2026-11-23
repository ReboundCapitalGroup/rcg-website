import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import h from '@/components/home/home.module.css'
import b from './blocks.module.css'
import { L, type Lang } from '@/lib/i18n'

/**
 * Shared section layouts for the redesign. Different shapes so pages
 * don't all repeat the same boxes. No scroll animations (fast on purpose).
 */

/** Full-width photo with a short line of text over it. */
export function PhotoBand({ src, alt = '', eyebrow, title, text, position = '50% 50%', children }: {
  src: string; alt?: string; eyebrow?: string; title: ReactNode; text?: ReactNode; position?: string; children?: ReactNode
}) {
  return (
    <section className={b.band}>
      <Image src={src} alt={alt} fill sizes="100vw" className={b.bandImg} style={{ objectPosition: position }} />
      <div className={b.bandShade} aria-hidden="true" />
      <div className={`${h.wrap} ${b.bandInner}`}>
        {eyebrow && <div className={b.bandEyebrow}>{eyebrow}</div>}
        <h2 className={b.bandTitle}>{title}</h2>
        {text && <p className={b.bandText}>{text}</p>}
        {children}
      </div>
    </section>
  )
}

/** Photo on one side, text on the other. */
export function Split({ src, alt = '', reverse, tall, eyebrow, title, children, position = '50% 50%' }: {
  src: string; alt?: string; reverse?: boolean; tall?: boolean; eyebrow?: string; title: ReactNode; children: ReactNode; position?: string
}) {
  return (
    <div className={`${h.wrap} ${b.split} ${reverse ? b.splitRev : ''}`}>
      <div className={`${b.splitMedia} ${tall ? b.splitTall : ''}`}>
        <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: position }} />
      </div>
      <div className={b.splitText}>
        {eyebrow && <div className={b.eyebrow}>{eyebrow}</div>}
        <h2 className={b.h2}>{title}</h2>
        {children}
      </div>
    </div>
  )
}

/** Vertical timeline with numbered dots. */
export function Timeline({ items }: { items: { title: string; text: string; tag?: string }[] }) {
  return (
    <ol className={b.timeline}>
      {items.map((it, i) => (
        <li key={it.title} className={b.tlItem}>
          <span className={b.tlDot} aria-hidden="true">{i + 1}</span>
          {it.tag && <span className={b.tlTag}>{it.tag}</span>}
          <span className={b.tlTitle}>{it.title}</span>
          <span className={b.tlText}>{it.text}</span>
        </li>
      ))}
    </ol>
  )
}

/** Big pull quote. */
export function QuoteBand({ quote, by, href }: { quote: string; by: string; href?: string }) {
  return (
    <figure className={`${h.wrap} ${b.quote}`}>
      <span className={b.quoteMark} aria-hidden="true">&ldquo;</span>
      <blockquote>{quote}</blockquote>
      <figcaption>{href ? <a href={href} target="_blank" rel="noopener noreferrer">{by}</a> : by}</figcaption>
    </figure>
  )
}

/** Small trust line: Google rating + BBB. */
export function TrustRow({ lang = 'en' }: { lang?: Lang }) {
  const es = lang === 'es'
  return (
    <div className={b.trust}>
      <Link href={L(lang, '/resources/results')} className={b.trustItem}><b>5.0 ★★★★★</b><span>{es ? 'Reseñas en Google' : 'Google reviews'}</span></Link>
      <a href="https://www.bbb.org/us/fl/miami-beach/profile/financial-consultants/rebound-capital-group-0633-92041559" target="_blank" rel="noopener noreferrer" className={b.trustItem}><b>A+</b><span>{es ? 'Calificación del BBB' : 'Rated by the BBB'}</span></a>
      <span className={b.trustItem}><b>$0</b><span>{es ? 'Por adelantado' : 'Upfront, ever'}</span></span>
    </div>
  )
}

/** Down arrow that jumps to the next section. */
export function ScrollCue({ to, lang = 'en' }: { to: string; lang?: Lang }) {
  return (
    <div className={b.cueRow}>
      <a href={`#${to}`} className={b.cue} aria-label={lang === 'es' ? 'Ir a la siguiente sección' : 'Scroll to next section'}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
      </a>
    </div>
  )
}
