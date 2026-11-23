import Link from 'next/link'
import type { ReactNode } from 'react'
import h from '@/components/home/home.module.css'
import s from './service.module.css'

/**
 * Shared layout for every service page (redesign v4).
 * One component = one place to restyle.
 * Emits Service, BreadcrumbList and (when there are FAQs) FAQPage JSON-LD.
 *
 * Copy rules: no em dashes, RCG is never "licensed", no attorney names,
 * claims go "through our network of licensed attorneys".
 */

export type Section = {
  id?: string
  tag: string
  title: string
  body: ReactNode
  points?: string[]
}

export type Faq = { q: string; a: string }

export type Card = { tag?: string; title: string; desc: string; href?: string; linkLabel?: string }

export type ServicePageProps = {
  slug: string
  serviceName: string
  badge: string
  h1Lead: string
  h1Accent: string
  answer: string
  sections: Section[]
  cards?: { tag: string; title: string; items: Card[] }
  steps?: { title: string; desc: string }[]
  stepsTitle?: string
  faqs?: Faq[]
  related: { href: string; label: string; desc: string }[]
  ctaTitle: string
  ctaText: string
  ctaHref?: string
  ctaLabel?: string
}

const SITE = 'https://reboundcapitalgroup.com'

export default function ServicePage(p: ServicePageProps) {
  const url = `${SITE}/services/${p.slug}`
  const faqs = p.faqs || []
  const schema: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: p.serviceName,
      serviceType: p.serviceName,
      url,
      description: p.answer,
      areaServed: { '@type': 'Country', name: 'United States' },
      provider: { '@id': `${SITE}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
        { '@type': 'ListItem', position: 3, name: p.serviceName, item: url },
      ],
    },
  ]
  if (faqs.length) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    })
  }

  return (
    <div className={h.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <div className={`${h.wrap} ${s.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={s.crumbs}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <Link href="/services">Services</Link> <span aria-hidden="true">/</span> <span className={s.crumbNow}>{p.serviceName}</span>
        </div>
        <div className={s.heroGrid}>
          <div className={s.heroText}>
            <div className={h.eyebrow}>{p.badge}</div>
            <h1 className={s.h1}>{p.h1Lead} <em className={h.gradText}>{p.h1Accent}</em></h1>
            {/* Answer block: the short summary search and AI engines quote */}
            <p className={s.answer}>{p.answer}</p>
            <div className={h.btnRow}>
              <Link href={p.ctaHref || '/contact'} className={`${h.btnPrimary} ${h.btnLg}`}>{p.ctaLabel || 'Get a Free Review'} <span aria-hidden="true">→</span></Link>
              <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call or text 24/7</a>
            </div>
          </div>
          <div className={s.glance}>
            <div className={s.glanceLabel}>How we work</div>
            {[
              ['First review', 'Free, no obligation'],
              ['Availability', 'Call or text 24/7'],
              ['Coverage', 'Nationwide'],
              ['Rating', 'A+ with the BBB'],
            ].map(([k, v]) => (
              <div key={k} className={s.glanceRow}><span>{k}</span><b>{v}</b></div>
            ))}
            <a href="tel:+13055634920" className={s.glancePhone}>305-563-4920</a>
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <div className={`${h.wrap} ${s.sections}`}>
        {p.sections.map((sec) => (
          <div key={sec.title} id={sec.id} className={s.section}>
            <div>
              <div className={s.tag}>{sec.tag}</div>
              <h2 className={s.h2}>{sec.title}</h2>
              {sec.points && (
                <ul className={s.points}>
                  {sec.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              )}
            </div>
            <div className={s.prose}>{sec.body}</div>
          </div>
        ))}
      </div>

      {/* CARDS */}
      {p.cards && (
        <div className={`${h.wrap} ${s.block}`}>
          <div className={s.tag}>{p.cards.tag}</div>
          <h2 className={`${s.h2} ${s.mb}`}>{p.cards.title}</h2>
          <div className={s.cards}>
            {p.cards.items.map((c, i) => {
              const cls = i % 2 === 0 ? `${s.card} ${s.cardDark}` : s.card
              const inner = (
                <>
                  {c.tag && <span className={s.cardTag}>{c.tag}</span>}
                  <span className={s.cardTitle}>{c.title}{c.href && <span aria-hidden="true" className={s.cardArrow}>→</span>}</span>
                  <span className={s.cardDesc}>{c.desc}</span>
                  {c.href && c.linkLabel && <span className={s.cardLink}>{c.linkLabel}</span>}
                </>
              )
              return c.href
                ? <Link key={c.title} href={c.href} className={cls}>{inner}</Link>
                : <div key={c.title} className={cls}>{inner}</div>
            })}
          </div>
        </div>
      )}

      {/* STEPS */}
      {p.steps && (
        <div className={`${h.wrap} ${s.block}`}>
          <h2 className={`${s.h2} ${s.mb}`}>{p.stepsTitle || 'How it works'}</h2>
          <ol className={s.steps} style={{ ['--n' as string]: p.steps.length }}>
            {p.steps.map((st, i) => (
              <li key={st.title} className={s.step}>
                <span className={s.stepDot} aria-hidden="true">{i + 1}</span>
                <div className={s.stepTitle}>{st.title}</div>
                <div className={s.stepDesc}>{st.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <div className={`${h.wrap} ${s.block}`}>
          <div className={s.faqGrid}>
            <div>
              <div className={s.tag}>Common questions</div>
              <h2 className={s.h2}>Questions people ask.</h2>
              <Link href="/resources/faqs" className={s.more}>All FAQs →</Link>
            </div>
            <div className={s.faqs}>
              {faqs.map((f, i) => (
                <details key={f.q} className={s.faq} open={i === 0}>
                  <summary>{f.q}<span aria-hidden="true" className={s.faqSign} /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* RELATED */}
      <div className={`${h.wrap} ${s.block}`}>
        <div className={s.tag}>Related help</div>
        <div className={s.related}>
          {p.related.map((r) => (
            <Link key={r.href} href={r.href} className={s.relatedItem}>
              <span className={s.relatedTitle}>{r.label} <span aria-hidden="true">→</span></span>
              <span className={s.relatedDesc}>{r.desc}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* CLOSING */}
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>{p.ctaTitle}</h2>
          <p>{p.ctaText}</p>
          <div className={h.btnRow}>
            <Link href={p.ctaHref || '/contact'} className={`${h.btnPrimary} ${h.btnLg}`}>{p.ctaLabel || 'Get a Free Review'} <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
