import type { Metadata } from 'next'
import Link from 'next/link'
import USAMap from './USAMap'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import s from './map.module.css'

export const metadata: Metadata = {
  title: 'Unclaimed Funds & Property Map by State | Rebound Capital Group',
  description: 'About $70 billion in unclaimed property is held by U.S. states. See what your state holds and get a free claim check from Rebound Capital Group. $0 upfront.',
}

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

export default function MapPage() {
  return (
    <div className={h.page}>
      {/* HERO */}
      <div className={`${h.wrap} ${s.hero}`}>
        <div className={h.eyebrow}>Unclaimed Funds Map</div>
        <h1 className={s.h1}>Your money <em className={h.gradText}>is out there.</em></h1>
        <p className={s.sub}>Banks, insurers, courts and employers send billions in unclaimed money to state governments every year. Most people never know it exists.</p>
        <div className={s.counter}>
          <div className={s.counterLabel}>Estimated unclaimed property held by U.S. states</div>
          <div className={s.counterNum}>$70,847,000,000+</div>
          <div className={s.counterSrc}>Sources: NAUPA and state unclaimed property offices, updated Nov 2026</div>
        </div>
      </div>

      {/* MAP */}
      <div className={h.wrap}>
        <div className={s.mapCard}>
          <div className={s.mapHint}>All 50 states · Hover a state to see what it holds · Tap to open its page</div>
          <USAMap />
        </div>
        <div className={s.stats}>
          {[['1,000+', 'County systems monitored'], ['All 50', 'States covered'], ['24/7', 'Call or text any time'], ['30-90d', 'Typical claim turnaround']].map(([v, l]) => (
            <div key={l} className={s.stat}><span className={s.statVal}>{v}</span><span>{l}</span></div>
          ))}
        </div>
      </div>

      {/* EVERY STATE + TOP STATES */}
      <div className={`${h.wrap} ${s.lists}`}>
        <div>
          <div className={sv.tag}>Nationwide coverage</div>
          <h2 className={sv.h2}>Every state. Every county.</h2>
          <p className={s.activeIntro}>Every state holds unclaimed money, and every county can have surplus from a foreclosure or tax sale. Our system monitors over 1,000 county court and auction systems, and we search state unclaimed property records nationwide.</p>
          <Link href="/states" className={sv.more}>Find your state →</Link>
        </div>
        <div>
          <div className={sv.tag}>Top states</div>
          <h2 className={sv.h2}>Unclaimed funds held.</h2>
          <ul className={s.top}>
            {allStateFunds.map((x, i) => (
              <li key={x.name}>
                <Link href={`/states/${slugOf(x.name)}`}><span className={s.rank}>{String(i + 1).padStart(2, '0')}</span>{x.name}<b>{x.funds}</b></Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ height: 72 }} />
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>See what your state is holding.</h2>
          <p>We search state records and court systems at no cost. If money is waiting in your name, we file the claim. Claims are filed through our network of licensed attorneys. RCG does not practice law.</p>
          <div className={h.btnRow}>
            <Link href="/free-review?type=unclaimed_property" className={`${h.btnPrimary} ${h.btnLg}`}>Get a free check <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
