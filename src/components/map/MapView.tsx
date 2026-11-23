import Link from 'next/link'
import USAMap from './USAMap'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import s from './map.module.css'
import { L, type Lang } from '@/lib/i18n'
import { stateEs } from '@/lib/stateNames'

const allStateFunds = [
  { name: 'California', funds: '$15B' }, { name: 'New York', funds: '$13B' },
  { name: 'Texas', funds: '$10.5B' }, { name: 'Ohio', funds: '$4.8B' },
  { name: 'Pennsylvania', funds: '$4.5B' }, { name: 'Illinois', funds: '$3.2B' },
  { name: 'New Jersey', funds: '$2.8B' }, { name: 'Florida', funds: '$2.4B' },
  { name: 'Massachusetts', funds: '$2.4B' }, { name: 'Arizona', funds: '$1.8B' },
  { name: 'Georgia', funds: '$1.6B' }, { name: 'Virginia', funds: '$1.5B' },
  { name: 'Washington', funds: '$1.4B' }, { name: 'North Carolina', funds: '$1.3B' },
  { name: 'Michigan', funds: '$1.2B' }, { name: 'Maryland', funds: '$1.1B' },
  { name: 'Minnesota', funds: '$1.0B' }, { name: 'Colorado', funds: '$980M' },
  { name: 'Tennessee', funds: '$980M' }, { name: 'Wisconsin', funds: '$890M' },
]

const slugOf = (n: string) => n.toLowerCase().replace(/ /g, '-')

const COPY = {
  en: {
    eyebrow: 'Unclaimed Funds Map', h1a: 'Your money', h1b: 'is out there.',
    sub: 'Banks, insurers, courts and employers send billions in unclaimed money to state governments every year. Most people never know it exists.',
    counterLabel: 'Estimated unclaimed property held by U.S. states', src: 'Sources: NAUPA and state unclaimed property offices, updated Nov 2026',
    hintDesk: 'All 50 states · Hover a state to see what it holds · Click to open its page', hintPhone: 'Tap a state to open its page',
    stats: [['1,000+', 'County systems monitored'], ['All 50', 'States covered'], ['24/7', 'Call or text any time'], ['30-90d', 'Typical claim turnaround']],
    covTag: 'Nationwide coverage', covH: 'Every state. Every county.',
    covP: 'Every state holds unclaimed money, and every county can have surplus from a foreclosure or tax sale. Our system monitors over 1,000 county court and auction systems, and we search state unclaimed property records nationwide.',
    find: 'Find your state →', topTag: 'Top states', topH: 'Unclaimed funds held.',
    closeH: 'See what your state is holding.', closeP: 'We search state records and court systems at no cost. If money is waiting in your name, we file the claim. Claims are filed through our network of licensed attorneys. RCG does not practice law.',
    check: 'Get a free check', call: 'Call 305-563-4920',
  },
  es: {
    eyebrow: 'Mapa de fondos no reclamados', h1a: 'Su dinero', h1b: 'está ahí afuera.',
    sub: 'Bancos, aseguradoras, tribunales y empleadores envían cada año miles de millones en dinero no reclamado a los gobiernos estatales. La mayoría de la gente nunca se entera.',
    counterLabel: 'Propiedad no reclamada estimada en manos de los estados', src: 'Fuentes: NAUPA y oficinas estatales de propiedad no reclamada, actualizado nov. 2026',
    hintDesk: 'Los 50 estados · Pase el cursor sobre un estado para ver lo que guarda · Haga clic para abrir su página', hintPhone: 'Toque un estado para abrir su página',
    stats: [['1,000+', 'Sistemas de condados vigilados'], ['Los 50', 'Estados cubiertos'], ['24/7', 'Llame o escriba a cualquier hora'], ['30-90 días', 'Tiempo típico del reclamo']],
    covTag: 'Cobertura nacional', covH: 'Cada estado. Cada condado.',
    covP: 'Todos los estados guardan dinero no reclamado, y en cualquier condado puede haber sobrantes de una ejecución o venta por impuestos. Nuestro sistema vigila más de 1,000 sistemas de tribunales y subastas de condados, y buscamos en los registros estatales de propiedad no reclamada en todo el país.',
    find: 'Busque su estado →', topTag: 'Estados principales', topH: 'Fondos no reclamados.',
    closeH: 'Vea lo que guarda su estado.', closeP: 'Buscamos en registros estatales y sistemas judiciales sin costo. Si hay dinero esperando a su nombre, presentamos el reclamo. Los reclamos se presentan a través de nuestra red de abogados con licencia. RCG no ejerce la abogacía.',
    check: 'Revisión gratis', call: 'Llame al 305-563-4920',
  },
}

export default function MapView({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  const to = (href: string) => L(lang, href)
  const nameOf = (n: string) => (lang === 'es' ? stateEs(n) : n)
  return (
    <div className={h.page}>
      {/* HERO */}
      <div className={`${h.wrap} ${s.hero}`}>
        <div className={h.eyebrow}>{t.eyebrow}</div>
        <h1 className={s.h1}>{t.h1a} <em className={h.gradText}>{t.h1b}</em></h1>
        <p className={s.sub}>{t.sub}</p>
        <div className={s.counter}>
          <div className={s.counterLabel}>{t.counterLabel}</div>
          <div className={s.counterNum}>$70,847,000,000+</div>
          <div className={s.counterSrc}>{t.src}</div>
        </div>
      </div>

      {/* MAP */}
      <div className={h.wrap}>
        <div className={s.mapCard}>
          <div className={s.mapHint}><span className={s.hintDesk}>{t.hintDesk}</span><span className={s.hintPhone}>{t.hintPhone}</span></div>
          <USAMap />
        </div>
        <div className={s.stats}>
          {t.stats.map(([v, l]) => (
            <div key={l} className={s.stat}><span className={s.statVal}>{v}</span><span>{l}</span></div>
          ))}
        </div>
      </div>

      {/* EVERY STATE + TOP STATES */}
      <div className={`${h.wrap} ${s.lists}`}>
        <div>
          <div className={sv.tag}>{t.covTag}</div>
          <h2 className={sv.h2}>{t.covH}</h2>
          <p className={s.activeIntro}>{t.covP}</p>
          <Link href={to('/states')} className={sv.more}>{t.find}</Link>
        </div>
        <div>
          <div className={sv.tag}>{t.topTag}</div>
          <h2 className={sv.h2}>{t.topH}</h2>
          <ul className={s.top}>
            {allStateFunds.map((x, i) => (
              <li key={x.name}>
                <Link href={to(`/states/${slugOf(x.name)}`)}><span className={s.rank}>{String(i + 1).padStart(2, '0')}</span>{nameOf(x.name)}<b>{x.funds}</b></Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ height: 72 }} />
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>{t.closeH}</h2>
          <p>{t.closeP}</p>
          <div className={h.btnRow}>
            <Link href={to('/free-review?type=unclaimed_property')} className={`${h.btnPrimary} ${h.btnLg}`}>{t.check} <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>{t.call}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
