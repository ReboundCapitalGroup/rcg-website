import Link from 'next/link'
import type { Metadata } from 'next'
import MoneyExample from '@/components/home/MoneyExample'
import s from '@/components/home/home.module.css'

export const metadata: Metadata = {
  title: 'Foreclosure Help & Surplus Funds Recovery Nationwide | $0 Upfront | RCG',
  description: 'Facing foreclosure or already lost your home at auction? Rebound Capital Group helps homeowners nationwide with options before the sale and surplus funds after it. $0 upfront. Call or text 24/7.',
}

const BBB = 'https://www.bbb.org/us/fl/miami-beach/profile/financial-consultants/rebound-capital-group-0633-92041559'

const steps = [
  { title: 'Free check', desc: 'Tell us the property or the person. We search court and county records at no cost.' },
  { title: 'We handle the claim', desc: 'Claims are filed through our network of licensed attorneys in the state where the funds are held.' },
  { title: 'You get paid', desc: 'Funds are released to you. Our fee comes only from what we recover. $0 upfront, ever.' },
]

const services: [string, string, string, string][] = [
  ['Before the auction', 'Foreclosure Help & Options', 'Still in the process? Preserve equity, explore a mortgage assumption, or a cash offer before the sale.', '/services/foreclosure-solutions'],
  ['After the auction', 'Foreclosure Surplus Funds', 'When a home sells for more than the debt, the extra belongs to the former owner. We find it and file.', '/services/foreclosure-surplus'],
  ['Heirs & estates', 'Estate & Heir Recovery', 'Heirs are often owed money they never knew existed. We identify heirs and manage the claim.', '/services/estate-recovery'],
  ['Before the auction', 'Time Extensions', 'More time before the sale, or before you have to move out.', '/services/time-extensions'],
  ['After the auction', 'Tax Deed Overages', 'Tax sales leave excess proceeds most owners never hear about. We file before the deadline.', '/services/tax-deed-surplus'],
  ['Heirs & estates', 'Probate Help for Heirs', 'When the court requires probate, we coordinate it with the claim.', '/services/probate-assistance'],
  ['Before the auction', 'Cash Offer on Property', 'Sell before the auction and walk away with your equity.', '/services/cash-offer'],
  ['Nationwide', 'Unclaimed Funds', 'Dormant accounts, uncashed checks and deposits held by the state. We search and recover nationwide.', '/services/unclaimed-property'],
  ['Businesses & trusts', 'LLC, Trust & Business Assets', 'Funds held under dissolved companies, closed corporations and inactive trusts.', '/services/business-asset-recovery'],
]

const why = [
  { n: '01', title: 'Zero upfront. Ever.', desc: '100% contingency. We only get paid when you get paid. No retainers, no risk, no catch.' },
  { n: '02', title: 'Deadline-driven', desc: 'Claim windows can be short. We track every case deadline from the first call to the payout.' },
  { n: '03', title: 'Nationwide. Every claim type.', desc: 'Foreclosure, tax deed, unclaimed funds, estates. One firm, with claims filed through our network of licensed attorneys in the state where the funds are held.' },
]

const HouseIcon = () => (
  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V10l7-5 7 5v11" /><path d="M9 21v-6h6v6" /></svg>
)

export default function Home() {
  return (
    <div className={s.page}>
      {/* HERO */}
      <section className={s.hero}>
        <video className={s.heroVideo} autoPlay muted loop playsInline preload="metadata" poster="/home/hero-poster.webp" aria-hidden="true">
          <source src="/home/hero-720.mp4" type="video/mp4" media="(max-width: 900px)" />
          <source src="/home/hero-1080.mp4" type="video/mp4" />
        </video>
        <div className={s.heroFade} aria-hidden="true" />
        <div className={s.heroInner}>
          <div className={s.heroContent}>
            <div className={s.eyebrow}>Nationwide · $0 Upfront · <span className={s.hideSm}>Call or text </span>24/7</div>
            <h1 className={s.h1}>
              <span className={s.line}>Turning Forgotten<span className={s.hideSm}> Funds</span></span>
              <span className={`${s.line} ${s.showSm}`}>Funds Into</span>
              <span className={s.line}><span className={s.hideSm}>Into </span><em className={s.gradText}>Future Opportunities.</em></span>
            </h1>
            <p className={s.heroSub}>Facing foreclosure, or <span className={s.hideSm}>already </span>lost your home at auction? <span className={s.hideSm}>If money was left behind, it belongs to you.</span><span className={s.showSmInline}>Money left behind belongs to you.</span></p>
            <div className={s.btnRow}>
              <Link href="/contact" className={`${s.btnPrimary} ${s.btnLg}`}>Check if you&apos;re owed money <span aria-hidden="true">→</span></Link>
              <Link href="/services/foreclosure-solutions" className={`${s.btnOutline} ${s.btnLg}`}>Facing foreclosure?</Link>
            </div>
            <div className={s.trust}>Free check · No obligation · <a href={BBB} target="_blank" rel="noopener noreferrer">A+ rating with the BBB</a></div>
          </div>
        </div>
      </section>

      {/* NOT ABOUT A HOME */}
      <div className={s.unclaimedWrap}>
        <Link href="/map" className={s.unclaimed}>
          <span className={s.unclaimedIcon}><HouseIcon /></span>
          <span className={s.unclaimedText}><b>Not about a home?</b> The state may be holding money in your name.</span>
          <span className={s.unclaimedCta}><span className={s.hideSm}>Check now </span>→</span>
        </Link>
      </div>

      {/* MONEY BAND */}
      <section className={s.money}>
        <div className={s.wrap}>
          <MoneyExample />
        </div>
      </section>

      {/* STEPS */}
      <section className={s.block}>
        <div className={s.wrap}>
          <h2 className={`${s.h2} ${s.mb48}`}>Three steps.<br className={s.brSm} /> You never pay <span className={s.hideSm}>a dollar </span>upfront.</h2>
          <ol className={s.steps}>
            {steps.map((x) => (
              <li key={x.title} className={s.step}>
                <span className={s.stepDot} aria-hidden="true"><span /></span>
                <div className={s.stepTitle}>{x.title}</div>
                <div className={s.stepDesc}>{x.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* $2M BAND */}
      <section className={s.proof}>
        <div className={`${s.wrap} ${s.proofGrid}`}>
          <div className={s.proofLeft}>
            <span className={s.proofBig}>$2M+</span>
            <span className={s.proofSmall}>recovered for clients,<br className={s.hideSm} /> and counting.</span>
          </div>
          <div className={s.proofRight}>
            <h2 className={s.proofH}>Money people didn&apos;t<br className={s.brSm} /> know they had.</h2>
            <p>Foreclosure surplus, tax deed overages, estates and unclaimed funds.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={s.block}>
        <div className={s.wrap}>
          <div className={s.blockHead}>
            <h2 className={s.h2}>Full recovery.<br className={s.brSm} /> Every claim type.</h2>
            <p>Every dollar we recover is on a pure contingency basis. Nothing out of pocket, ever.</p>
          </div>
          <div className={s.svcGrid}>
            {services.map(([tag, title, desc, href], i) => (
              <Link key={title} href={href} className={i % 2 === 0 ? `${s.svc} ${s.svcDark}` : s.svc}>
                <span className={s.svcTag}>{tag}</span>
                <span className={s.svcTitle}><span>{title}</span><span className={s.svcArrow} aria-hidden="true">→</span></span>
                <span className={s.svcDesc}>{desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className={s.blockWhy}>
        <div className={s.wrap}>
          <div className={s.why}>
            <div>
              <div className={s.eyebrowLight}>Why Rebound Capital Group</div>
              <h2 className={s.whyH}>We outwork<br />every competitor.</h2>
            </div>
            <div>
              {why.map((y) => (
                <div key={y.n} className={s.whyRow}>
                  <span className={s.whyN}>{y.n}</span>
                  <span className={s.whyBody}><span className={s.whyTitle}>{y.title}</span><span className={s.whyDesc}>{y.desc}</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className={s.closing}>
        <div className={s.closingFade} aria-hidden="true" />
        <div className={`${s.wrap} ${s.closingInner}`}>
          <h2 className={s.closingH}>Talk to a person, any time.</h2>
          <p>Call or text 24/7. A real person answers, in English or Spanish. The check is free and there&apos;s no obligation.</p>
          <div className={s.btnRow}>
            <Link href="/contact" className={`${s.btnPrimary} ${s.btnLg}`}>Check if you&apos;re owed money <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${s.btnOutline} ${s.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
