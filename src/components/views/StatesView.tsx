import Link from 'next/link'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import s from './states.module.css'
import { ScrollCue } from '@/components/ui/blocks'
import { L, type Lang } from '@/lib/i18n'
import { stateEs } from '@/lib/stateNames'

const STATES: [string, string][] = [
  ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'], ['CA', 'California'], ['CO', 'Colorado'],
  ['CT', 'Connecticut'], ['DE', 'Delaware'], ['FL', 'Florida'], ['GA', 'Georgia'], ['HI', 'Hawaii'], ['ID', 'Idaho'],
  ['IL', 'Illinois'], ['IN', 'Indiana'], ['IA', 'Iowa'], ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'],
  ['ME', 'Maine'], ['MD', 'Maryland'], ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'], ['MS', 'Mississippi'],
  ['MO', 'Missouri'], ['MT', 'Montana'], ['NE', 'Nebraska'], ['NV', 'Nevada'], ['NH', 'New Hampshire'], ['NJ', 'New Jersey'],
  ['NM', 'New Mexico'], ['NY', 'New York'], ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'], ['OK', 'Oklahoma'],
  ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'], ['SC', 'South Carolina'], ['SD', 'South Dakota'], ['TN', 'Tennessee'],
  ['TX', 'Texas'], ['UT', 'Utah'], ['VT', 'Vermont'], ['VA', 'Virginia'], ['WA', 'Washington'], ['WV', 'West Virginia'],
  ['WI', 'Wisconsin'], ['WY', 'Wyoming'],
]
const slug = (n: string) => n.toLowerCase().replace(/ /g, '-')

const COPY = {
  en: {
    home: 'Home', crumb: 'States', crumbs: 'Breadcrumb', eyebrow: 'Nationwide · All 50 states · $0 upfront', h1a: 'Help in', h1b: 'every state.',
    intro: 'Pick your state for local surplus fund rules, how claims work there, and the counties we cover. Foreclosure help, surplus funds, tax deed overages and unclaimed property, nationwide.',
    stats: [['1,000+', 'County systems monitored'], ['All 50', 'States covered'], ['24/7', 'Call or text any time'], ['$0', 'Upfront cost, ever']],
    all: 'All states', closeH: 'Not sure where to start?', closeP: 'Get a free, no-obligation review. We work in every state and can tell you within 24 hours if money is owed to you.',
    review: 'Get a free review', call: 'Call 305-563-4920',
  },
  es: {
    home: 'Inicio', crumb: 'Estados', crumbs: 'Ruta de navegación', eyebrow: 'Todo el país · Los 50 estados · $0 por adelantado', h1a: 'Ayuda en', h1b: 'cada estado.',
    intro: 'Elija su estado para ver las reglas locales sobre fondos excedentes, cómo funcionan los reclamos allí y los condados que cubrimos. Ayuda con ejecuciones, fondos excedentes, sobrantes por impuestos y propiedad no reclamada, en todo el país.',
    stats: [['1,000+', 'Sistemas de condados vigilados'], ['Los 50', 'Estados cubiertos'], ['24/7', 'Llame o escriba a cualquier hora'], ['$0', 'Costo por adelantado']],
    all: 'Todos los estados', closeH: '¿No sabe por dónde empezar?', closeP: 'Pida una revisión gratis y sin compromiso. Trabajamos en todos los estados y en 24 horas le decimos si se le debe dinero.',
    review: 'Revisión gratis', call: 'Llame al 305-563-4920',
  },
}

export default function StatesView({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  const to = (href: string) => L(lang, href)
  const nameOf = (n: string) => (lang === 'es' ? stateEs(n) : n)
  return (
    <div className={h.page}>
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label={t.crumbs} className={sv.crumbs}>
          <Link href={to('/')}>{t.home}</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>{t.crumb}</span>
        </div>
        <div className={`${sv.heroText} ${sv.heroCenter}`}>
          <div className={h.eyebrow}>{t.eyebrow}</div>
          <h1 className={sv.h1}>{t.h1a} <em className={h.gradText}>{t.h1b}</em></h1>
          <p className={sv.answer}>{t.intro}</p>
        </div>
      </div>

      <ScrollCue to="more" lang={lang} />

      <div id="more" className={h.wrap} style={{ scrollMarginTop: 100 }}>
        <div className={s.live}>
          {t.stats.map(([v, l]) => (
            <div key={l} className={s.liveCard}>
              <span className={s.name}>{v}</span>
              <span className={s.meta}>{l}</span>
            </div>
          ))}
        </div>

        <div className={sv.tag} style={{ marginTop: 48 }}>{t.all}</div>
        <div className={s.grid}>
          {STATES.map(([c, n]) => (
            <Link key={c} href={to(`/states/${slug(n)}`)} className={s.card}>
              <span className={s.code}>{c}</span>
              <span className={s.cardName}>{nameOf(n)}</span>
              <span aria-hidden="true" className={s.arrow}>→</span>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ height: 72 }} />
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>{t.closeH}</h2>
          <p>{t.closeP}</p>
          <div className={h.btnRow}>
            <Link href={to('/free-review')} className={`${h.btnPrimary} ${h.btnLg}`}>{t.review} <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>{t.call}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
