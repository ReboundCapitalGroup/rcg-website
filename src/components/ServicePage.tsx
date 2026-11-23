import Link from 'next/link'
import Image from 'next/image'
import ReviewsStrip from '@/components/ReviewsStrip'
import { TrustRow, PhotoBand, ScrollCue } from '@/components/ui/blocks'
import type { ReactNode } from 'react'
import h from '@/components/home/home.module.css'
import s from './service.module.css'
import { L, type Lang } from '@/lib/i18n'
import { ALL_COUNTIES } from '@/content/counties'

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
  stats?: { val: string; label: string }[]
  cards?: { tag: string; title: string; items: Card[] }
  steps?: { title: string; desc: string }[]
  stepsTitle?: string
  faqs?: Faq[]
  related: { href: string; label: string; desc: string }[]
  ctaTitle: string
  ctaText: string
  ctaHref?: string
  ctaLabel?: string
  /** Hero photo (in /public/img) */
  image?: string
  imagePos?: string
  /** Optional full-width photo band after the main section */
  band?: { src: string; title: string; text?: string; position?: string }
  /** Page language. Links in the data are written as English paths and localized here. */
  lang?: Lang
}

const SITE = 'https://reboundcapitalgroup.com'

/** Service pages that link down to the county guides. */
const COUNTY_LINK_SERVICES = ['foreclosure-surplus', 'tax-deed-surplus', 'estate-recovery', 'probate-assistance']
const ABBR: Record<string, string> = {
  florida: 'FL', ohio: 'OH', colorado: 'CO', arizona: 'AZ', illinois: 'IL', maryland: 'MD',
  pennsylvania: 'PA', tennessee: 'TN', california: 'CA', texas: 'TX', nevada: 'NV', michigan: 'MI',
}
const COUNTY_UI = {
  en: { tag: 'County guides', h: 'How it works in your county.', p: 'Who holds the money, how sales work and how to claim, county by county.', all: 'All states →' },
  es: { tag: 'Guías por condado', h: 'Cómo funciona en su condado.', p: 'Quién guarda el dinero, cómo son las ventas y cómo reclamar, condado por condado.', all: 'Todos los estados →' },
}

const UI = {
  en: { home: 'Home', services: 'Services', cta: 'Get a Free Review', call24: 'Call or text 24/7', how: 'How it works', common: 'Common questions', ask: 'Questions people ask.', all: 'All FAQs →', related: 'Related help', call: 'Call 305-563-4920', crumbs: 'Breadcrumb' },
  es: { home: 'Inicio', services: 'Servicios', cta: 'Revisión gratis', call24: 'Llame o escriba 24/7', how: 'Cómo funciona', common: 'Preguntas comunes', ask: 'Lo que la gente pregunta.', all: 'Todas las preguntas →', related: 'Ayuda relacionada', call: 'Llame al 305-563-4920', crumbs: 'Ruta de navegación' },
}

export default function ServicePage(p: ServicePageProps) {
  const lang: Lang = p.lang || 'en'
  const t = UI[lang]
  const to = (href: string) => L(lang, href)
  const url = `${SITE}${to(`/services/${p.slug}`)}`
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
      inLanguage: lang === 'es' ? 'es-US' : 'en-US',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.home, item: `${SITE}${to('/')}` },
        { '@type': 'ListItem', position: 2, name: t.services, item: `${SITE}${to('/services')}` },
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
        <div role="navigation" aria-label={t.crumbs} className={s.crumbs}>
          <Link href={to('/')}>{t.home}</Link> <span aria-hidden="true">/</span> <Link href={to('/services')}>{t.services}</Link> <span aria-hidden="true">/</span> <span className={s.crumbNow}>{p.serviceName}</span>
        </div>
        <div className={s.heroGrid}>
          <div className={s.heroText}>
            <div className={h.eyebrow}>{p.badge}</div>
            <h1 className={s.h1}>{p.h1Lead} <em className={h.gradText}>{p.h1Accent}</em></h1>
            {/* Answer block: the short summary search and AI engines quote */}
            <p className={s.answer}>{p.answer}</p>
            <div className={h.btnRow}>
              <Link href={to(p.ctaHref || '/free-review')} className={`${h.btnPrimary} ${h.btnLg}`}>{p.ctaLabel || t.cta} <span aria-hidden="true">→</span></Link>
              <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>{t.call24}</a>
            </div>
            <TrustRow lang={lang} />
          </div>
          <div className={s.heroMedia}>
            <Image src={p.image || '/img/home-miami-beach.webp'} alt="" fill priority sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: 'cover', objectPosition: p.imagePos || '50% 50%' }} />
            <a href="tel:+13055634920" className={s.heroBadge}><span>{t.call24}</span><b>305-563-4920</b></a>
          </div>
        </div>
      </div>

      <ScrollCue to="more" lang={lang} />

      <div id="more" style={{ scrollMarginTop: 100 }} />
      {/* STATS */}
      {p.stats && (
        <div className={`${h.wrap} ${s.statsWrap}`}>
          <div className={s.stats}>
            {p.stats.map((st) => (
              <div key={st.label} className={s.stat}><span className={s.statVal}>{st.val}</span><span className={s.statLabel}>{st.label}</span></div>
            ))}
          </div>
        </div>
      )}

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

      {p.band && <PhotoBand src={p.band.src} title={p.band.title} text={p.band.text} position={p.band.position} />}

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
                ? <Link key={c.title} href={to(c.href)} className={cls}>{inner}</Link>
                : <div key={c.title} className={cls}>{inner}</div>
            })}
          </div>
        </div>
      )}

      {/* STEPS */}
      {p.steps && (
        <div className={`${h.wrap} ${s.block}`}>
          <h2 className={`${s.h2} ${s.mb}`}>{p.stepsTitle || t.how}</h2>
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
              <div className={s.tag}>{t.common}</div>
              <h2 className={s.h2}>{t.ask}</h2>
              <Link href={to('/resources/faqs')} className={s.more}>{t.all}</Link>
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

      {COUNTY_LINK_SERVICES.includes(p.slug) && (
        <div className={`${h.wrap} ${s.block}`}>
          <div className={s.tag}>{COUNTY_UI[lang].tag}</div>
          <h2 className={s.h2}>{COUNTY_UI[lang].h}</h2>
          <p className={s.countyIntro}>{COUNTY_UI[lang].p}</p>
          <div className={s.countyLinks}>
            {ALL_COUNTIES.map((c) => (
              <Link key={`${c.state}-${c.slug}`} href={to(`/states/${c.state}/${c.slug}`)} className={s.countyLink}>
                {c.short}, {ABBR[c.state]}
              </Link>
            ))}
            <Link href={to('/states')} className={`${s.countyLink} ${s.countyAll}`}>{COUNTY_UI[lang].all}</Link>
          </div>
        </div>
      )}

      <ReviewsStrip lang={lang} />

      {/* RELATED */}
      <div className={`${h.wrap} ${s.block}`}>
        <div className={s.tag}>{t.related}</div>
        <div className={s.related}>
          {p.related.map((r) => (
            <Link key={r.href} href={to(r.href)} className={s.relatedItem}>
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
            <Link href={to(p.ctaHref || '/free-review')} className={`${h.btnPrimary} ${h.btnLg}`}>{p.ctaLabel || t.cta} <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>{t.call}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
