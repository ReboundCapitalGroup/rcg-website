import Link from 'next/link'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import st from '@/components/state/state.module.css'
import c from './county.module.css'
import ReviewsStrip from '@/components/ReviewsStrip'
import { TrustRow, ScrollCue } from '@/components/ui/blocks'
import { L, type Lang } from '@/lib/i18n'
import { stateEs } from '@/lib/stateNames'
import type { County } from '@/content/counties/types'
import { countyTitle } from '@/content/counties'

const SITE = 'https://reboundcapitalgroup.com'

const UI = {
  en: {
    home: 'Home', states: 'States', crumbs: 'Breadcrumb', guide: 'County guide', reviewed: 'Facts reviewed',
    notSold: 'My home has not sold yet', sold: 'My home already sold', glance: 'At a glance',
    sale: 'Sale type', holder: 'Who holds the money', auction: 'Where sales happen', cities: 'Main cities',
    questions: 'Questions owners ask', faqH: (n: string) => `${n} questions.`, all: 'All FAQs →',
    sourcesTag: 'Sources', sourcesH: 'Where these facts come from.',
    sourcesP: (m: string) => `We checked these facts against the official county and state sources below in ${m}. Rules change, so the court or office in your case always has the final word.`,
    more: 'More county guides', stateGuide: (s: string) => `${s} state guide`, stateGuideP: 'Statewide rules, every county and common questions.',
    closeH: (n: string) => `Lost a home in ${n}?`, closeP: 'Tell us the address or the owner’s name. We check court and county records for free and tell you what we find. You pay nothing unless we recover.',
    review: 'Get a free review', call: 'Call 305-563-4920',
    disclaimer: 'This guide is general information, not legal advice. Rebound Capital Group is not a law firm. Claims are filed through our network of licensed attorneys.',
  },
  es: {
    home: 'Inicio', states: 'Estados', crumbs: 'Ruta de navegación', guide: 'Guía del condado', reviewed: 'Datos revisados',
    notSold: 'Mi casa todavía no se vende', sold: 'Mi casa ya se vendió', glance: 'En resumen',
    sale: 'Tipo de venta', holder: 'Quién guarda el dinero', auction: 'Dónde son las ventas', cities: 'Ciudades principales',
    questions: 'Lo que preguntan los dueños', faqH: (n: string) => `Preguntas sobre ${n}.`, all: 'Todas las preguntas →',
    sourcesTag: 'Fuentes', sourcesH: 'De dónde vienen estos datos.',
    sourcesP: (m: string) => `Revisamos estos datos con las fuentes oficiales del condado y del estado que aparecen abajo en ${m}. Las reglas cambian, así que el tribunal u oficina de su caso siempre tiene la última palabra.`,
    more: 'Más guías por condado', stateGuide: (s: string) => `Guía de ${s}`, stateGuideP: 'Reglas del estado, todos los condados y preguntas comunes.',
    closeH: (n: string) => `¿Perdió una casa en ${n}?`, closeP: 'Díganos la dirección o el nombre del dueño. Revisamos gratis los registros judiciales y del condado y le decimos lo que encontramos. No paga nada a menos que recuperemos.',
    review: 'Revisión gratis', call: 'Llame al 305-563-4920',
    disclaimer: 'Esta guía es información general, no asesoría legal. Rebound Capital Group no es un bufete de abogados. Los reclamos se presentan a través de nuestra red de abogados con licencia.',
  },
}

export default function CountyPage({ county: k, stateName, others, lang = 'en' }: {
  county: County
  /** English state name, e.g. "Florida" */
  stateName: string
  /** Other county guides in the same state */
  others: County[]
  lang?: Lang
}) {
  const t = UI[lang]
  const to = (href: string) => L(lang, href)
  const S = lang === 'es' ? stateEs(stateName) : stateName
  const name = k.name[lang]
  const stateHref = `/states/${k.state}`
  const url = `${SITE}${to(`${stateHref}/${k.slug}`)}`
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.home, item: `${SITE}${to('/')}` },
        { '@type': 'ListItem', position: 2, name: t.states, item: `${SITE}${to('/states')}` },
        { '@type': 'ListItem', position: 3, name: S, item: `${SITE}${to(stateHref)}` },
        { '@type': 'ListItem', position: 4, name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: k.faqs.map((f) => ({ '@type': 'Question', name: f.q[lang], acceptedAnswer: { '@type': 'Answer', text: f.a[lang] } })),
    },
  ]

  return (
    <div className={h.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />

      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label={t.crumbs} className={sv.crumbs}>
          <Link href={to('/')}>{t.home}</Link> <span aria-hidden="true">/</span> <Link href={to('/states')}>{t.states}</Link> <span aria-hidden="true">/</span> <Link href={to(stateHref)}>{S}</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>{k.short}</span>
        </div>
        <div className={sv.heroGrid}>
          <div className={sv.heroText}>
            <div className={h.eyebrow}>{S} · {t.guide} · {t.reviewed} {k.checked[lang]}</div>
            <h1 className={sv.h1}>{lang === 'es' ? <>Fondos excedentes en <em className={h.gradText}>{name}.</em></> : <>Surplus funds in <em className={h.gradText}>{name}.</em></>}</h1>
            <p className={sv.answer}>{k.intro[lang]}</p>
            <div className={h.btnRow}>
              <Link href={to('/free-review?type=foreclosure')} className={`${h.btnPrimary} ${h.btnLg}`}>{t.sold} <span aria-hidden="true">→</span></Link>
              <Link href={to('/free-review?type=pre_foreclosure')} className={`${h.btnOutline} ${h.btnLg}`}>{t.notSold}</Link>
            </div>
            <TrustRow lang={lang} />
          </div>
          <div className={sv.glance}>
            <div className={sv.glanceLabel}>{t.glance}</div>
            <div className={c.glanceRow}><span>{t.sale}</span><b>{k.glance.sale[lang]}</b></div>
            <div className={c.glanceRow}><span>{t.holder}</span><b>{k.glance.holder[lang]}</b></div>
            <div className={c.glanceRow}><span>{t.auction}</span><b>{k.glance.auction[lang]}</b></div>
            <div className={c.glanceRow}><span>{t.cities}</span><b>{k.cities.join(', ')}</b></div>
          </div>
        </div>
      </div>

      <ScrollCue to="more" lang={lang} />
      <div id="more" style={{ scrollMarginTop: 100 }} />

      <div className={`${h.wrap} ${c.sections}`}>
        {k.sections.map((s) => (
          <section key={s.title.en} className={c.section}>
            <h2 className={c.h2}>{s.title[lang]}</h2>
            <div className={sv.prose}>{s.body.map((p) => <p key={p.en.slice(0, 40)}>{p[lang]}</p>)}</div>
          </section>
        ))}
        {k.note && <p className={c.note}>{k.note[lang]}</p>}
      </div>

      <div className={`${h.wrap} ${sv.block}`}>
        <div className={sv.faqGrid}>
          <div>
            <div className={sv.tag}>{t.questions}</div>
            <h2 className={sv.h2}>{t.faqH(k.short)}</h2>
            <Link href={to('/resources/faqs')} className={sv.more}>{t.all}</Link>
          </div>
          <div className={sv.faqs}>
            {k.faqs.map((f, i) => (
              <details key={f.q.en} className={sv.faq} open={i === 0}>
                <summary>{f.q[lang]}<span aria-hidden="true" className={sv.faqSign} /></summary>
                <p>{f.a[lang]}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className={`${h.wrap} ${sv.block}`}>
        <div className={sv.tag}>{t.more}</div>
        <div className={st.guides}>
          <Link href={to(stateHref)} className={`${st.guide} ${c.stateCard}`}>
            <span className={st.guideName}>{t.stateGuide(S)}</span>
            <span className={st.guideBlurb}>{t.stateGuideP}</span>
            <span className={st.guideOpen}>→</span>
          </Link>
          {others.map((o) => (
            <Link key={o.slug} href={to(`/states/${o.state}/${o.slug}`)} className={st.guide}>
              <span className={st.guideName}>{countyTitle(o, lang)}</span>
              <span className={st.guideBlurb}>{o.blurb[lang]}</span>
              <span className={st.guideOpen}>→</span>
            </Link>
          ))}
        </div>
      </div>

      <div className={`${h.wrap} ${sv.block}`}>
        <div className={c.sources}>
          <div className={sv.tag}>{t.sourcesTag}</div>
          <h2 className={c.h2}>{t.sourcesH}</h2>
          <p>{t.sourcesP(k.checked[lang])}</p>
          <ul>
            {k.sources.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
          </ul>
          <p className={c.disclaimer}>{t.disclaimer}</p>
        </div>
      </div>

      <ReviewsStrip lang={lang} />

      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>{t.closeH(k.short)}</h2>
          <p>{t.closeP}</p>
          <div className={h.btnRow}>
            <Link href={to('/free-review?type=foreclosure')} className={`${h.btnPrimary} ${h.btnLg}`}>{t.review} <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>{t.call}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
