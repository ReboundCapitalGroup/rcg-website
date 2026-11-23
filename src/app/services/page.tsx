import Link from 'next/link'
import type { Metadata } from 'next'
import h from '@/components/home/home.module.css'
import s from '@/components/service.module.css'

export const metadata: Metadata = {
  title: 'Foreclosure Help, Surplus Funds & Unclaimed Property Services | RCG',
  description: 'Foreclosure help before the auction, and recovery of surplus funds, tax deed overages, unclaimed property and estate assets after it. Claims are filed through our network of licensed attorneys. $0 upfront.',
}

const categories: { label: string; blurb: string; services: [string, string, string][] }[] = [
  {
    label: 'Before the auction',
    blurb: 'Still in the foreclosure process? Options to keep the home or protect your equity before the sale.',
    services: [
      ['Foreclosure Help & Options', '/services/foreclosure-solutions', 'Every option before the auction in one place: more time, a cash offer, a mortgage assumption, or a plan that protects your equity.'],
      ['Time Extensions', '/services/time-extensions', 'Before the sale, an attorney may be able to postpone it. After the sale, you may still get more time before eviction.'],
      ['Mortgage Assumptions', '/services/mortgage-assumptions', 'In some cases a qualified buyer can take over your existing mortgage, so the home never goes to auction.'],
      ['Cash Offer on Property', '/services/cash-offer', 'Sell as-is before the auction and walk away with your equity.'],
    ],
  },
  {
    label: 'After the auction',
    blurb: 'When a property sells for more than was owed, the extra belongs to the former owner. We find it and file the claim.',
    services: [
      ['Foreclosure Surplus Funds', '/services/foreclosure-surplus', 'Money left over after a foreclosure sale, held by the court until claimed.'],
      ['Tax Deed Overages', '/services/tax-deed-surplus', 'Money left over after a tax deed sale, held by the county until claimed.'],
    ],
  },
  {
    label: 'Unclaimed property',
    blurb: 'Dormant accounts, uncashed checks and deposits held by the state. We search, locate and recover what is yours.',
    services: [
      ['Unclaimed Property', '/services/unclaimed-property', 'Bank accounts, insurance, refunds and deposits turned over to the state.'],
      ['State-Held Funds', '/services/state-unclaimed-funds', 'Money held by courts, counties and state agencies.'],
    ],
  },
  {
    label: 'Estates, trusts & businesses',
    blurb: 'Heirs, trusts and businesses are often owed money they never knew existed.',
    services: [
      ['Estate & Heir Recovery', '/services/estate-recovery', 'Heirs can usually still claim money owed to a family member who passed away.'],
      ['Probate Help for Heirs', '/services/probate-assistance', 'When the court requires probate, we coordinate it with the claim.'],
      ['Trust Asset Recovery', '/services/trust-recovery', 'Money held in a trust\'s name, recovered for the trustee and beneficiaries.'],
      ['LLC & Business Asset Recovery', '/services/business-asset-recovery', 'Money held by dissolved companies and closed corporations.'],
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className={h.page}>
      <div className={`${h.wrap} ${s.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={s.crumbs}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span className={s.crumbNow}>Services</span>
        </div>
        <div className={s.heroText}>
          <div className={h.eyebrow}>Every claim type · One firm · $0 upfront</div>
          <h1 className={s.h1}>Everything we <em className={h.gradText}>help with.</em></h1>
          <p className={s.answer}>Foreclosure help before the auction, and recovery after it: surplus funds, tax deed overages, unclaimed property, and money owed to estates, trusts and businesses. If money was left behind, we find it and file the claim.</p>
        </div>
      </div>

      {categories.map((cat) => (
        <div key={cat.label} className={`${h.wrap} ${s.block}`}>
          <div className={s.tag}>{cat.label}</div>
          <p className={`${s.answer} ${s.mb}`}>{cat.blurb}</p>
          <div className={s.cards}>
            {cat.services.map(([title, href, desc], i) => (
              <Link key={href} href={href} className={i % 2 === 0 ? `${s.card} ${s.cardDark}` : s.card}>
                <span className={s.cardTitle}>{title}<span aria-hidden="true" className={s.cardArrow}>→</span></span>
                <span className={s.cardDesc}>{desc}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div style={{ height: 72 }} />
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>Not sure which applies to you?</h2>
          <p>Tell us your situation and we will check every claim type connected to your name. You pay nothing unless we recover.</p>
          <div className={h.btnRow}>
            <Link href="/contact" className={`${h.btnPrimary} ${h.btnLg}`}>Get a free review <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
