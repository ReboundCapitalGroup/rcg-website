import Link from 'next/link'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import s from './state.module.css'
import CountyList from './CountyList'
import ReviewsStrip from '@/components/ReviewsStrip'
import { PhotoBand, TrustRow, ScrollCue } from '@/components/ui/blocks'

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
}

const SITE = 'https://reboundcapitalgroup.com'

const genericFaqs = (n: string) => [
  { q: `Who holds foreclosure surplus in ${n}?`, a: `It depends on how the property was sold. The money is usually held by the court or county clerk, the sheriff, or the trustee who ran the sale until a claim is approved. Money left unclaimed long enough can be turned over to the ${n} unclaimed property program, where it can still be claimed.` },
  { q: 'Is there a deadline to claim it?', a: 'Usually, yes. Deadlines depend on the type of sale, and they can be short. The sooner you reach out, the more options you have.' },
  { q: 'Do I pay anything upfront?', a: 'No. Our fee comes only from what we recover. If we recover nothing, you owe nothing.' },
  { q: 'What if the owner passed away?', a: 'Heirs can usually still claim the money. We identify the heirs and coordinate probate if the court requires it.' },
]

export default function StatePage(p: StatePageProps) {
  const url = `${SITE}/states/${p.slug}`
  const faqs = p.faqs || genericFaqs(p.name)
  const main = p.lists[0]
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'States', item: `${SITE}/states` },
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
  const countLabel = main.unit === 'County' ? 'counties' : unitPlural

  return (
    <div className={h.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={sv.crumbs}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <Link href="/states">States</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>{p.name}</span>
        </div>
        <div className={sv.heroGrid}>
          <div className={sv.heroText}>
            <div className={h.eyebrow}>{p.badge}</div>
            <h1 className={sv.h1}>{p.h1Lead} <em className={h.gradText}>{p.h1Accent}</em></h1>
            <p className={sv.answer}>{p.intro}</p>
            <div className={h.btnRow}>
              <Link href="/free-review" className={`${h.btnPrimary} ${h.btnLg}`}>Check my {p.name} property <span aria-hidden="true">→</span></Link>
              <Link href="/services/foreclosure-solutions" className={`${h.btnOutline} ${h.btnLg}`}>Facing foreclosure?</Link>
            </div>
            <TrustRow />
          </div>
          <div className={sv.glance}>
            <div className={sv.glanceLabel}>{p.name} at a glance</div>
            <div className={s.glanceBig}><span className={s.glanceNum}>{main.items.length}</span><span>{countLabel}<br />monitored</span></div>
            {p.stats.filter((x) => x.val !== String(main.items.length)).slice(0, 3).map((x) => (
              <div key={x.label} className={sv.glanceRow}><span>{x.label}</span><b>{x.val}</b></div>
            ))}
          </div>
        </div>
      </div>

      <ScrollCue to="more" />

      <div id="more" style={{ scrollMarginTop: 100 }} />
      {/* WHERE ARE YOU */}
      <div className={`${h.wrap} ${s.block}`}>
        <h2 className={`${sv.h2} ${sv.mb}`}>Where are you in the process?</h2>
        <div className={s.paths}>
          <div className={s.path}>
            <div className={sv.tag}>Before the auction</div>
            <div className={s.pathTitle}>Your sale is coming up</div>
            <p>You may still have time to keep the home or protect your equity.</p>
            <Link href="/services/foreclosure-solutions">Foreclosure Help <span aria-hidden="true">→</span></Link>
            <Link href="/services/time-extensions">Time Extensions <span aria-hidden="true">→</span></Link>
            <Link href="/services/cash-offer">Cash Offer <span aria-hidden="true">→</span></Link>
          </div>
          <div className={`${s.path} ${s.pathDark}`}>
            <div className={sv.tag}>After the auction</div>
            <div className={s.pathTitle}>Your home already sold</div>
            <p>If the sale brought in more than what was owed, the extra may be yours.</p>
            <Link href="/services/foreclosure-surplus">Surplus Funds <span aria-hidden="true">→</span></Link>
            <Link href="/services/tax-deed-surplus">Tax Deed Overages <span aria-hidden="true">→</span></Link>
            <Link href="/services/probate-assistance">Probate Help for Heirs <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>

      <PhotoBand src={regionImage(p.slug).src} position={regionImage(p.slug).pos} eyebrow={`${p.name} · Every county`} title={`Homeowners in ${p.name} are owed money they never heard about.`} text="Surplus from foreclosure and tax sales sits with courts and counties until someone claims it. We find it and file the claim." />

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
          <h2 className={`${sv.h2} ${sv.mb}`}>What we recover in {p.name}.</h2>
          <div className={sv.cards}>
            {p.claimTypes.map((c, i) => (
              <Link key={c.title} href={c.href} className={i % 2 === 0 ? `${sv.card} ${sv.cardDark}` : sv.card}>
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
              <div className={sv.tag}>{l.unit === 'City' ? 'Independent cities' : 'Coverage'}</div>
              <h2 className={sv.h2}>{l.title}</h2>
              <p className={s.listIntro}>{l.intro}</p>
            </div>
            <CountyList items={l.items} unit={l.unit} placeholder={`Find your ${l.unit ? l.unit.toLowerCase() : 'county'}`} />
          </div>
        </div>
      ))}
      {p.footerLine && <div className={`${h.wrap} ${s.footerLine}`}>{p.footerLine}</div>}

      {/* FAQ */}
      <div className={`${h.wrap} ${s.block}`}>
        <div className={sv.faqGrid}>
          <div>
            <div className={sv.tag}>{p.name} questions</div>
            <h2 className={sv.h2}>{p.faqTitle || 'Common questions.'}</h2>
            <Link href="/resources/faqs" className={sv.more}>All FAQs →</Link>
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

      <ReviewsStrip />

      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>{p.ctaTitle}</h2>
          <p>{p.ctaText}</p>
          <div className={h.btnRow}>
            <Link href="/free-review" className={`${h.btnPrimary} ${h.btnLg}`}>Get a free review <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
