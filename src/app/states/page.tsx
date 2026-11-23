import type { Metadata } from 'next'
import Link from 'next/link'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import s from './states.module.css'
import { ScrollCue } from '@/components/ui/blocks'

export const metadata: Metadata = {
  title: 'Foreclosure Help & Surplus Funds by State | Rebound Capital Group',
  description: 'Foreclosure help and surplus fund recovery nationwide. Select your state for local surplus fund laws, filing process and county coverage.',
}

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

export default function StatesPage() {
  return (
    <div className={h.page}>
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={sv.crumbs}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>States</span>
        </div>
        <div className={sv.heroText}>
          <div className={h.eyebrow}>Nationwide · All 50 states · $0 upfront</div>
          <h1 className={sv.h1}>Help in <em className={h.gradText}>every state.</em></h1>
          <p className={sv.answer}>Pick your state for local surplus fund rules, how claims work there, and the counties we cover. Foreclosure help, surplus funds, tax deed overages and unclaimed property, nationwide.</p>
        </div>
      </div>

      <ScrollCue to="more" />

      <div id="more" className={h.wrap} style={{ scrollMarginTop: 100 }}>
        <div className={s.live}>
          {[['1,000+', 'County systems monitored'], ['All 50', 'States covered'], ['24/7', 'Call or text any time'], ['$0', 'Upfront cost, ever']].map(([v, l]) => (
            <div key={l} className={s.liveCard}>
              <span className={s.name}>{v}</span>
              <span className={s.meta}>{l}</span>
            </div>
          ))}
        </div>

        <div className={sv.tag} style={{ marginTop: 48 }}>All states</div>
        <div className={s.grid}>
          {STATES.map(([c, n]) => (
            <Link key={c} href={`/states/${slug(n)}`} className={s.card}>
              <span className={s.code}>{c}</span>
              <span className={s.cardName}>{n}</span>
              <span aria-hidden="true" className={s.arrow}>→</span>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ height: 72 }} />
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>Not sure where to start?</h2>
          <p>Get a free, no-obligation review. We work in every state and can tell you within 24 hours if money is owed to you.</p>
          <div className={h.btnRow}>
            <Link href="/contact" className={`${h.btnPrimary} ${h.btnLg}`}>Get a free review <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
