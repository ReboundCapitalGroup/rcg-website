import Link from 'next/link'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import s from './state.module.css'
import CountyList from './CountyList'
import ReviewsStrip from '@/components/ReviewsStrip'
import { PhotoBand, TrustRow, ScrollCue } from '@/components/ui/blocks'
import { L, type Lang } from '@/lib/i18n'

const REGION: Record<string, string> = {
  gulf: 'florida louisiana mississippi alabama texas',
  southeast: 'georgia south-carolina north-carolina tennessee virginia kentucky arkansas oklahoma hawaii',
  west: 'arizona nevada utah new-mexico california colorado oregon washington idaho montana wyoming alaska',
}
const regionImage = (slug: string) => {
  if (REGION.gulf.split(' ').includes(slug)) return { src: '/img/aerial-gulf-coast.webp', pos: '50% 55%' }
  if (REGION.southeast.split(' ').includes(slug)) return { src: '/img/aerial-suburb-lakes.webp', pos: '50% 50%' }
  if (REGION.west.split(' ').includes(slug)) return { src: '/img/aerial-suburb-lakes.webp', pos: '50% 35%' }
  return { src: '/img/aerial-small-town.webp', pos: '50% 50%' }
}

/**
 * Shared layout for the 50 state pages (redesign v4).
 * Emits BreadcrumbList and FAQPage JSON-LD.
 * Copy rules: no em dashes, RCG is never "licensed", no attorney names,
 * claims go "through our network of licensed attorneys".
 */

export type StateList = { title: string; intro: string; unit: string; items: string[] }

export type StatePageProps = {
  slug: string
  name: string
  badge: string
  h1Lead: string
  h1Accent: string
  intro: string
  stats: { val: string; label: string }[]
  body: { tag: string; title: string; points?: string[]; paragraphs: string[]; callout?: string }
  claimTypes?: { title: string; desc: string; href: string }[]
  steps?: { title: string; intro?: string; items: { title: string; body: string }[] }
  faqs?: { q: string; a: string }[]
  faqTitle?: string
  lists: StateList[]
  footerLine?: string
  ctaTitle: string
  ctaText: string
  /** Page language. Links are written as English paths and localized here. */
  lang?: Lang
  /** County guide pages for this state, shown as links. */
  countyPages?: { name: string; slug: string; blurb?: string }[]
}

const SITE = 'https://reboundcapitalgroup.com'

const ES_UNITS: Record<string, [string, string]> = {
  County: ['condado', 'condados'], Parish: ['parroquia', 'parroquias'], Borough: ['distrito', 'distritos'],
  City: ['ciudad', 'ciudades'], Town: ['municipio', 'municipios'], '': ['condado', 'condados'],
}

const UI = {
  en: {
    home: 'Home', states: 'States', crumbs: 'Breadcrumb', check: (n: string) => `Check my ${n} property`, facing: 'Facing foreclosure?',
    glance: (n: string) => `${n} at a glance`, monitored: 'monitored', where: 'Where are you in the process?',
    before: 'Before the auction', beforeTitle: 'Your sale is coming up', beforeText: 'You may still have time to keep the home or protect your equity.',
    after: 'After the auction', afterTitle: 'Your home already sold', afterText: 'If the sale brought in more than what was owed, the extra may be yours.',
    links: [['Foreclosure Help', '/services/foreclosure-solutions'], ['Time Extensions', '/services/time-extensions'], ['Cash Offer', '/services/cash-offer'], ['Surplus Funds', '/services/foreclosure-surplus'], ['Tax Deed Overages', '/services/tax-deed-surplus'], ['Probate Help for Heirs', '/services/probate-assistance']],
    bandEyebrow: (n: string) => `${n} · Every county`, bandTitle: (n: string) => `Homeowners in ${n} are owed money they never heard about.`,
    bandText: 'Surplus from foreclosure and tax sales sits with courts and counties until someone claims it. We find it and file the claim.',
    recover: (n: string) => `What we recover in ${n}.`, independent: 'Independent cities', coverage: 'Coverage', find: (u: string) => `Find your ${u}`,
    questions: (n: string) => `${n} questions`, common: 'Common questions.', all: 'All FAQs →', review: 'Get a free review', call: 'Call 305-563-4920',
    guides: 'County guides', guidesTitle: (n: string) => `Local guides for ${n}.`, guidesText: 'Who holds the money, how sales work there, and how to claim it.', open: 'Open guide',
  },
  es: {
    home: 'Inicio', states: 'Estados', crumbs: 'Ruta de navegación', check: (n: string) => `Revisar mi propiedad en ${n}`, facing: '¿Enfrenta una ejecución?',
    glance: (n: string) => `${n} en resumen`, monitored: 'vigilados', where: '¿En qué etapa se encuentra?',
    before: 'Antes de la subasta', beforeTitle: 'Su venta se acerca', beforeText: 'Puede que todavía tenga tiempo de conservar la casa o proteger su capital.',
    after: 'Después de la subasta', afterTitle: 'Su casa ya se vendió', afterText: 'Si la venta dejó más de lo que se debía, el sobrante puede ser suyo.',
    links: [['Ayuda con ejecución', '/services/foreclosure-solutions'], ['Extensión de tiempo', '/services/time-extensions'], ['Oferta en efectivo', '/services/cash-offer'], ['Fondos excedentes', '/services/foreclosure-surplus'], ['Excedentes por impuestos', '/services/tax-deed-surplus'], ['Ayuda para herederos', '/services/probate-assistance']],
    bandEyebrow: (n: string) => `${n} · Todos los condados`, bandTitle: (n: string) => `En ${n} hay propietarios a quienes se les debe dinero y no lo saben.`,
    bandText: 'Los sobrantes de ejecuciones y ventas por impuestos se quedan en tribunales y condados hasta que alguien los reclama. Nosotros los encontramos y presentamos el reclamo.',
    recover: (n: string) => `Lo que recuperamos en ${n}.`, independent: 'Ciudades independientes', coverage: 'Cobertura', find: (u: string) => `Busque su ${u}`,
    questions: (n: string) => `Preguntas sobre ${n}`, common: 'Preguntas comunes.', all: 'Todas las preguntas →', review: 'Revisión gratis', call: 'Llame al 305-563-4920',
    guides: 'Guías por condado', guidesTitle: (n: string) => `Guías locales de ${n}.`, guidesText: 'Quién guarda el dinero, cómo funcionan las ventas allí y cómo reclamarlo.', open: 'Ver guía',
  },
}

const genericFaqsEs = (n: string) => [
  { q: `¿Quién guarda los fondos excedentes de ejecuciones en ${n}?`, a: `Depende de cómo se vendió la propiedad. Por lo general el dinero lo guarda el tribunal o el secretario del condado, el sheriff o el fideicomisario que hizo la venta, hasta que se aprueba un reclamo. Si nadie lo reclama por suficiente tiempo, puede pasar al programa de propiedad no reclamada de ${n}, donde todavía se puede reclamar.` },
  { q: '¿Hay una fecha límite para reclamarlo?', a: 'Por lo general, sí. Los plazos dependen del tipo de venta y pueden ser cortos. Mientras antes nos contacte, más opciones tiene.' },
  { q: '¿Tengo que pagar algo por adelantado?', a: 'No. Nuestros honorarios salen solo de lo que recuperamos. Si no recuperamos nada, usted no debe nada.' },
  { q: '¿Qué pasa si el dueño falleció?', a: 'Por lo general los herederos todavía pueden reclamar el dinero. Identificamos a los herederos y coordinamos la sucesión si el tribunal la exige.' },
]

const genericFaqs = (n: string) => [
  { q: `Who holds foreclosure surplus in ${n}?`, a: `It depends on how the property was sold. The money is usually held by the court or county clerk, the sheriff, or the trustee who ran the sale until a claim is approved. Money left unclaimed long enough can be turned over to the ${n} unclaimed property program, where it can still be claimed.` },
  { q: 'Is there a deadline to claim it?', a: 'Usually, yes. Deadlines depend on the type of sale, and they can be short. The sooner you reach out, the more options you have.' },
  { q: 'Do I pay anything upfront?', a: 'No. Our fee comes only from what we recover. If we recover nothing, you owe nothing.' },
  { q: 'What if the owner passed away?', a: 'Heirs can usually still claim the money. We identify the heirs and coordinate probate if the court requires it.' },
]

export default function StatePage(p: StatePageProps) {
  const lang: Lang = p.lang || 'en'
  const es = lang === 'es'
  const t = UI[lang]
  const to = (href: string) => L(lang, href)
  const url = `${SITE}${to(`/states/${p.slug}`)}`
  const faqs = p.faqs || (es ? genericFaqsEs(p.name) : genericFaqs(p.name))
  const main = p.lists[0]
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.home, item: `${SITE}${to('/')}` },
        { '@type': 'ListItem', position: 2, name: t.states, item: `${SITE}${to('/states')}` },
        { '@type': 'ListItem', position: 3, name: p.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ]
  const unitPlural = main.unit ? main.unit.toLowerCase() + (main.unit.endsWith('h') ? 'es' : 's') : 'counties'
  const countLabel = es ? (ES_UNITS[main.unit] || ES_UNITS.County)[1] : main.unit === 'County' ? 'counties' : unitPlural

  return (
    <div className={h.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label={t.crumbs} className={sv.crumbs}>
          <Link href={to('/')}>{t.home}</Link> <span aria-hidden="true">/</span> <Link href={to('/states')}>{t.states}</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>{p.name}</span>
        </div>
        <div className={sv.heroGrid}>
          <div className={sv.heroText}>
            <div className={h.eyebrow}>{p.badge}</div>
            <h1 className={sv.h1}>{p.h1Lead} <em className={h.gradText}>{p.h1Accent}</em></h1>
            <p className={sv.answer}>{p.intro}</p>
            <div className={h.btnRow}>
              <Link href={to('/free-review')} className={`${h.btnPrimary} ${h.btnLg}`}>{t.check(p.name)} <span aria-hidden="true">→</span></Link>
              <Link href={to('/services/foreclosure-solutions')} className={`${h.btnOutline} ${h.btnLg}`}>{t.facing}</Link>
            </div>
            <TrustRow lang={lang} />
          </div>
          <div className={sv.glance}>
            <div className={sv.glanceLabel}>{t.glance(p.name)}</div>
            <div className={s.glanceBig}><span className={s.glanceNum}>{main.items.length}</span><span>{countLabel}<br />{t.monitored}</span></div>
            {p.stats.filter((x) => x.val !== String(main.items.length)).slice(0, 3).map((x) => (
              <div key={x.label} className={sv.glanceRow}><span>{x.label}</span><b>{x.val}</b></div>
            ))}
          </div>
        </div>
      </div>

      <ScrollCue to="more" lang={lang} />

      <div id="more" style={{ scrollMarginTop: 100 }} />
      {/* WHERE ARE YOU */}
      <div className={`${h.wrap} ${s.block}`}>
        <h2 className={`${sv.h2} ${sv.mb}`}>{t.where}</h2>
        <div className={s.paths}>
          <div className={s.path}>
            <div className={sv.tag}>{t.before}</div>
            <div className={s.pathTitle}>{t.beforeTitle}</div>
            <p>{t.beforeText}</p>
            {t.links.slice(0, 3).map(([l, href]) => <Link key={href} href={to(href)}>{l} <span aria-hidden="true">→</span></Link>)}
          </div>
          <div className={`${s.path} ${s.pathDark}`}>
            <div className={sv.tag}>{t.after}</div>
            <div className={s.pathTitle}>{t.afterTitle}</div>
            <p>{t.afterText}</p>
            {t.links.slice(3).map(([l, href]) => <Link key={href} href={to(href)}>{l} <span aria-hidden="true">→</span></Link>)}
          </div>
        </div>
      </div>

      <PhotoBand src={regionImage(p.slug).src} position={regionImage(p.slug).pos} eyebrow={t.bandEyebrow(p.name)} title={t.bandTitle(p.name)} text={t.bandText} />

      {/* COUNTY GUIDES */}
      {p.countyPages && p.countyPages.length > 0 && (
        <div className={`${h.wrap} ${s.block}`}>
          <div className={sv.tag}>{t.guides}</div>
          <h2 className={sv.h2}>{t.guidesTitle(p.name)}</h2>
          <p className={s.listIntro}>{t.guidesText}</p>
          <div className={s.guides}>
            {p.countyPages.map((c) => (
              <Link key={c.slug} href={to(`/states/${p.slug}/${c.slug}`)} className={s.guide}>
                <span className={s.guideName}>{c.name}</span>
                {c.blurb && <span className={s.guideBlurb}>{c.blurb}</span>}
                <span className={s.guideOpen}>{t.open} <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* BODY */}
      <div className={`${h.wrap} ${s.block}`}>
        <div className={sv.section}>
          <div>
            <div className={sv.tag}>{p.body.tag}</div>
            <h2 className={sv.h2}>{p.body.title}</h2>
            {p.body.points && (
              <ul className={sv.points}>{p.body.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            )}
          </div>
          <div className={sv.prose}>
            {p.body.paragraphs.map((t) => <p key={t.slice(0, 40)}>{t}</p>)}
            {p.body.callout && <p className={s.callout}>{p.body.callout}</p>}
          </div>
        </div>
      </div>

      {/* CLAIM TYPES */}
      {p.claimTypes && (
        <div className={`${h.wrap} ${s.block}`}>
          <h2 className={`${sv.h2} ${sv.mb}`}>{t.recover(p.name)}</h2>
          <div className={sv.cards}>
            {p.claimTypes.map((c, i) => (
              <Link key={c.title} href={to(c.href)} className={i % 2 === 0 ? `${sv.card} ${sv.cardDark}` : sv.card}>
                <span className={sv.cardTitle}>{c.title}<span aria-hidden="true" className={sv.cardArrow}>→</span></span>
                <span className={sv.cardDesc}>{c.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* STEPS */}
      {p.steps && (
        <div className={`${h.wrap} ${s.block}`}>
          <h2 className={sv.h2}>{p.steps.title}</h2>
          {p.steps.intro && <p className={`${sv.answer} ${s.stepsIntro}`}>{p.steps.intro}</p>}
          <ol className={sv.steps} style={{ ['--n' as string]: p.steps.items.length }}>
            {p.steps.items.map((st, i) => (
              <li key={st.title} className={sv.step}>
                <span className={sv.stepDot} aria-hidden="true">{i + 1}</span>
                <div className={sv.stepTitle}>{st.title}</div>
                <div className={sv.stepDesc}>{st.body}</div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* COUNTIES */}
      {p.lists.map((l) => (
        <div key={l.title} className={`${h.wrap} ${s.block}`}>
          <div className={sv.faqGrid}>
            <div>
              <div className={sv.tag}>{l.unit === 'City' ? t.independent : t.coverage}</div>
              <h2 className={sv.h2}>{l.title}</h2>
              <p className={s.listIntro}>{l.intro}</p>
            </div>
            <CountyList items={l.items} unit={l.unit} placeholder={t.find(es ? (ES_UNITS[l.unit] || ES_UNITS.County)[0] : l.unit ? l.unit.toLowerCase() : 'county')} />
          </div>
        </div>
      ))}
      {p.footerLine && <div className={`${h.wrap} ${s.footerLine}`}>{p.footerLine}</div>}

      {/* FAQ */}
      <div className={`${h.wrap} ${s.block}`}>
        <div className={sv.faqGrid}>
          <div>
            <div className={sv.tag}>{t.questions(p.name)}</div>
            <h2 className={sv.h2}>{p.faqTitle || t.common}</h2>
            <Link href={to('/resources/faqs')} className={sv.more}>{t.all}</Link>
          </div>
          <div className={sv.faqs}>
            {faqs.map((f, i) => (
              <details key={f.q} className={sv.faq} open={i === 0}>
                <summary>{f.q}<span aria-hidden="true" className={sv.faqSign} /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <ReviewsStrip lang={lang} />

      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>{p.ctaTitle}</h2>
          <p>{p.ctaText}</p>
          <div className={h.btnRow}>
            <Link href={to('/free-review')} className={`${h.btnPrimary} ${h.btnLg}`}>{t.review} <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>{t.call}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
