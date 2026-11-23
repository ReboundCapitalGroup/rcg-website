import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import s from './about.module.css'

export const metadata: Metadata = {
  title: 'About Rebound Capital Group | Foreclosure Help & Surplus Recovery',
  description: 'Rebound Capital Group helps homeowners facing foreclosure and recovers foreclosure surplus, tax deed overages and unclaimed property for former owners and heirs. Miami Beach, FL. No upfront cost.',
}

const BBB = 'https://www.bbb.org/us/fl/miami-beach/profile/financial-consultants/rebound-capital-group-0633-92041559'

const values = [
  { title: 'No recovery, no fee', desc: 'Pure contingency. We absorb every cost, handle all filings, and coordinate with attorneys in our network on your behalf. You pay nothing unless we put money in your hands.' },
  { title: 'We find you first', desc: 'Most clients had no idea money existed until we called. Our system monitors over 1,000 county court systems daily and identifies surplus before deadlines close.' },
  { title: 'The right professionals at every step', desc: 'Claims are filed through our network of licensed attorneys in the state where the funds are held, with support from licensed private investigators. RCG coordinates the process. We do not practice law, and we never cut corners.' },
  { title: 'Deadline-driven', desc: 'Some claim windows are short. We track every deadline across every active county and have never missed a filing date on a signed case.' },
]

const firmStats: [string, string][] = [
  ['$2M+', 'Recovered for clients'],
  ['1,000+', 'County systems monitored'],
  ['50 states', 'Served nationwide'],
  ['30-90d', 'Typical claim turnaround'],
]

export default function AboutPage() {
  return (
    <div className={h.page}>
      {/* HERO */}
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={sv.crumbs}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>About</span>
        </div>
        <div className={s.heroGrid}>
          <div className={sv.heroText}>
            <div className={h.eyebrow}>Miami Beach, FL · Est. 2023 · A+ rating with the BBB</div>
            <h1 className={sv.h1}>Rebound Capital <em className={h.gradText}>Group.</em></h1>
            <p className={sv.answer}>We help homeowners facing foreclosure, and we recover money left behind in court and state systems and return it to the people it belongs to. Since 2023, over $2 million has been recovered for clients on a pure contingency basis.</p>
            <div className={h.btnRow}>
              <Link href="/contact" className={`${h.btnPrimary} ${h.btnLg}`}>Start a free review <span aria-hidden="true">→</span></Link>
              <Link href="/resources/how-it-works" className={`${h.btnOutline} ${h.btnLg}`}>How it works</Link>
            </div>
          </div>
          <div className={s.statsCard}>
            {firmStats.map(([v, l]) => (
              <div key={l} className={s.statItem}><span className={s.statVal}>{v}</span><span>{l}</span></div>
            ))}
          </div>
        </div>
      </div>

      {/* STORY */}
      <div className={`${h.wrap} ${s.block}`}>
        <div className={sv.section}>
          <div>
            <div className={sv.tag}>Our story</div>
            <h2 className={sv.h2}>Built from the ground up.</h2>
            <ul className={sv.points}>
              <li>Contingency only</li><li>Attorneys on every claim</li><li>Nationwide</li><li>Bilingual EN · ES</li>
            </ul>
          </div>
          <div className={sv.prose}>
            <p>Rebound Capital Group was founded by professionals with a deep background in real estate who spent years watching what happened to people after foreclosure and tax sales. The money was often still there, sitting in courthouses and state treasury accounts, legally owed to the former owner. Most people never knew it existed.</p>
            <p>We saw the gap clearly. Homeowners were walking away from money they were entitled to, not because they gave up, but because nobody told them it was there. Third parties were exploiting that confusion. We built RCG to close the gap and put the money back where it belongs.</p>
            <p className={s.callout}>Our job is simple: find the funds, handle every filing, work with attorneys in our network at every step, and only get paid when you do. No upfront costs. No fine print. No exceptions.</p>
          </div>
        </div>
      </div>

      {/* FOUNDER */}
      <div className={`${h.wrap} ${s.block}`}>
        <div className={s.founder}>
          <div className={s.photoWrap}>
            <Image src="/raul-headshot.webp" alt="Raul Ibañez, Founder and President of Rebound Capital Group" width={640} height={640} className={s.photo} sizes="(max-width: 900px) 100vw, 480px" priority />
            <div className={s.photoCaption}>
              <span className={s.photoName}>Raul Ibañez</span>
              <span className={s.photoRole}>Founder &amp; President</span>
            </div>
          </div>
          <div className={s.founderText}>
            <div className={sv.tag}>Leadership</div>
            <h2 className={sv.h2}>The person behind RCG.</h2>
            <div className={sv.prose}>
              <p>Born and raised in Miami, Florida, Raul grew up around real estate and learned early how property, ownership and financial claims intersect in the real world. Bilingual in English and Spanish, he works closely with a wide range of clients, professionals and communities.</p>
              <p>Over the years he built hands-on experience across real estate transactions, recovery matters and claim-related work, collaborating directly with respected attorneys and private investigators on cases ranging from local disputes to more complex national and international matters.</p>
              <p>That background gave him a practical understanding of how different forms of unclaimed funds are identified, pursued and recovered, from foreclosure surplus and tax deed overages to state-held property, estate claims and other asset recovery.</p>
            </div>
            <blockquote className={s.quote}>&ldquo;Today, that experience shapes how RCG operates: grounded, informed, and built to recover what rightfully belongs to the client.&rdquo;</blockquote>
            <a href={BBB} target="_blank" rel="noopener noreferrer" className={s.bbb}><b>A+</b><span>Rated by the BBB · View our profile →</span></a>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className={`${h.wrap} ${s.block}`}>
        <div className={sv.tag}>How we operate</div>
        <h2 className={`${sv.h2} ${sv.mb}`}>What sets us apart.</h2>
        <div className={`${sv.cards} ${s.cards2}`}>
          {values.map((v, i) => (
            <div key={v.title} className={i % 3 === 0 ? `${sv.card} ${sv.cardDark}` : sv.card}>
              <span className={sv.cardTag}>{String(i + 1).padStart(2, '0')}</span>
              <span className={sv.cardTitle}>{v.title}</span>
              <span className={sv.cardDesc}>{v.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 72 }} />
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>You do not need to figure this out alone.</h2>
          <p>We have done this hundreds of times. If money is owed to you from a foreclosure, a tax sale or a state treasury, we will find it, file for it and recover it. You pay nothing unless we succeed.</p>
          <div className={h.btnRow}>
            <Link href="/contact" className={`${h.btnPrimary} ${h.btnLg}`}>Start a free review <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
