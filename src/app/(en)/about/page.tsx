import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import { Timeline, ScrollCue, TrustRow } from '@/components/ui/blocks'
import s from './about.module.css'

export const metadata: Metadata = {
  title: 'About Rebound Capital Group | Foreclosure Help & Surplus Recovery',
  description: 'Rebound Capital Group helps homeowners facing foreclosure and recovers foreclosure surplus, tax deed overages and unclaimed property for former owners and heirs. Miami Beach, FL. No upfront cost.',
}


const story = [
  { tag: 'The problem', title: 'Money left behind, owners never told', text: 'Years in real estate showed the same pattern: after a foreclosure or tax sale, money was often still sitting in a courthouse or state account, legally owed to the former owner. Most never heard about it.' },
  { tag: '2023', title: 'Rebound Capital Group is founded', text: 'Built in Miami Beach to close that gap: find the funds, handle every filing through attorneys in our network, and only get paid when the client does.' },
  { tag: 'Today', title: 'Over $2 million recovered', text: 'Homeowners and families across the country, every claim type, on a pure contingency basis. Rated A+ by the BBB and 5.0 on Google.' },
]

export default function AboutPage() {
  return (
    <div className={h.page}>
      {/* HERO: our story */}
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={sv.crumbs}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>About</span>
        </div>
        <div className={s.story}>
          <div className={sv.heroText}>
            <div className={h.eyebrow}>Our story · Miami Beach, FL · Est. 2023</div>
            <h1 className={sv.h1}>Why we <em className={h.gradText}>started.</em></h1>
            <p className={sv.answer}>We saw homeowners walk away from money they were owed, not because they gave up, but because nobody told them it was there. Third parties were exploiting that confusion. We built Rebound Capital Group to put the money back where it belongs.</p>
          </div>
          <Timeline items={story} />
        </div>
      </div>

      {/* MISSION */}
      <ScrollCue to="mission" />
      <section id="mission" className={s.mission}>
        <div className={`${h.wrap} ${s.missionInner}`}>
          <div>
            <div className={s.missionEyebrow}>What we do</div>
            <h2 className={s.missionTitle}>Built to return what <em>belongs to you.</em></h2>
            <p className={s.missionText}>Rebound Capital Group helps homeowners facing foreclosure, and recovers money left behind in court and state systems for former owners and their families. Since 2023, over $2 million has been recovered for clients, on a pure contingency basis.</p>
          </div>
          <div className={s.missionStats}>
            {[['$2M+', 'Recovered for clients'], ['5.0', 'Google rating'], ['A+', 'BBB rating'], ['$0', 'Upfront, ever']].map(([v, l]) => (
              <div key={l}><b>{v}</b><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <div className={`${h.wrap} ${s.founder}`}>
        <figure className={s.portrait}>
          <div className={s.photoWrap}>
            <Image src="/raul-headshot.webp" alt="Raul Ibañez, Founder and President of Rebound Capital Group" width={640} height={640} className={s.photo} sizes="340px" />
          </div>
          <figcaption>
            <span className={s.photoName}>Raul Ibañez</span>
            <span className={s.photoRole}>Founder &amp; President</span>
            <a href="https://www.linkedin.com/in/raulibanez305" target="_blank" rel="noopener noreferrer" className={s.linkedin} aria-label="Raul Ibañez on LinkedIn">
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3zM5.3 7.4a2.1 2.1 0 110-4.1 2.1 2.1 0 010 4.1zM7.1 20.5H3.6V9h3.5v11.5z" /></svg>
              Connect on LinkedIn
            </a>
          </figcaption>
        </figure>
        <div className={s.founderText}>
          <div className={sv.tag}>Leadership</div>
          <h2 className={sv.h2}>Raul grew up around real estate in Miami.</h2>
          <div className={sv.prose}>
            <p>Born and raised in Miami, Raul learned early how property, ownership and financial claims intersect in the real world. Bilingual in English and Spanish, he works closely with clients, attorneys and investigators across the country.</p>
            <p>Over the years he built hands-on experience across real estate transactions, recovery matters and claim-related work, on cases ranging from local disputes to complex national matters. That experience shapes how RCG works: grounded, informed, and built to recover what rightfully belongs to the client.</p>
          </div>
          <TrustRow />
        </div>
      </div>

      <div style={{ height: 80 }} />
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>You do not need to figure this out alone.</h2>
          <p>If money is owed to you from a foreclosure, a tax sale or a state treasury, we will find it, file for it and recover it. You pay nothing unless we succeed.</p>
          <div className={h.btnRow}>
            <Link href="/free-review" className={`${h.btnPrimary} ${h.btnLg}`}>Start a free review <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
