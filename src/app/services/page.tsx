import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import ReviewsStrip from '@/components/ReviewsStrip'
import { TrustRow, ScrollCue } from '@/components/ui/blocks'
import s from './services.module.css'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Foreclosure Help, Surplus Funds & Unclaimed Property Services | RCG',
  description: 'Foreclosure help before the auction, and recovery of surplus funds, tax deed overages, unclaimed property and estate assets after it. Claims are filed through our network of licensed attorneys. $0 upfront.',
}

const groups: { tag: string; title: string; blurb: string; img: string; pos: string; services: [string, string, string][] }[] = [
  {
    tag: 'Before the auction', title: 'Still in the foreclosure process?', img: '/img/front-door.webp', pos: '50% 60%',
    blurb: 'Options to keep the home or protect your equity before the sale. The sooner you reach out, the more paths are open.',
    services: [
      ['Foreclosure Help & Options', '/services/foreclosure-solutions', 'Every option before the auction in one place.'],
      ['Time Extensions', '/services/time-extensions', 'Postpone the sale, or get more time before eviction.'],
      ['Mortgage Assumptions', '/services/mortgage-assumptions', 'A qualified buyer takes over your existing loan.'],
      ['Cash Offer on Property', '/services/cash-offer', 'Sell as-is before the auction and keep your equity.'],
    ],
  },
  {
    tag: 'After the auction', title: 'The home sold. Was money left over?', img: '/img/aerial-gulf-coast.webp', pos: '40% 60%',
    blurb: 'When a property sells for more than was owed, the extra belongs to the former owner. We find it and file the claim.',
    services: [
      ['Foreclosure Surplus Funds', '/services/foreclosure-surplus', 'Money left after a foreclosure sale, held by the court.'],
      ['Tax Deed Overages', '/services/tax-deed-surplus', 'Money left after a tax deed sale, held by the county.'],
    ],
  },
  {
    tag: 'Estates, trusts & businesses', title: 'Money owed to someone who is gone.', img: '/img/desk-files.webp', pos: '50% 60%',
    blurb: 'Heirs, trustees and former business owners are often owed money they never knew existed.',
    services: [
      ['Estate & Heir Recovery', '/services/estate-recovery', 'Claim money owed to a family member who passed.'],
      ['Probate Help for Heirs', '/services/probate-assistance', 'When the court requires probate, we coordinate it.'],
      ['Trust Asset Recovery', '/services/trust-recovery', 'Money held in a trust’s name, for the beneficiaries.'],
      ['LLC & Business Assets', '/services/business-asset-recovery', 'Money held by dissolved companies.'],
    ],
  },
  {
    tag: 'Unclaimed property', title: 'Money the state is holding for you.', img: '/img/aerial-miami.webp', pos: '50% 60%',
    blurb: 'Dormant accounts, uncashed checks and deposits turned over to the state. We search every state and file the claim.',
    services: [
      ['Unclaimed Property', '/services/unclaimed-property', 'Accounts, insurance, refunds and deposits.'],
      ['State-Held Funds', '/services/state-unclaimed-funds', 'Money held by courts, counties and state agencies.'],
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className={h.page}>
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={`${sv.crumbs} ${sv.crumbsCenter}`}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>Services</span>
        </div>
        <div className={`${sv.heroText} ${sv.heroCenter}`}>
          <div className={h.eyebrow}>Every claim type · One firm · $0 upfront</div>
          <h1 className={sv.h1}>Help before the auction. <em className={h.gradText}>Recovery after it.</em></h1>
          <p className={sv.answer}>Pick where you are in the process. Every service is free to start, and on recoveries you pay nothing unless we get you paid.</p>
          <TrustRow />
        </div>
      </div>

      <ScrollCue to="more" />

      <div id="more" className={h.wrap} style={{ scrollMarginTop: 100 }}>
        <div className={s.grid}>
          {groups.map((g) => (
            <section key={g.tag} className={s.card}>
              <div className={s.media}>
                <Image src={g.img} alt="" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover', objectPosition: g.pos }} />
                <span className={s.mediaTag}>{g.tag}</span>
              </div>
              <div className={s.body}>
                <h2 className={s.title}>{g.title}</h2>
                <p className={s.blurb}>{g.blurb}</p>
                <ul className={s.list}>
                  {g.services.map(([t, href, d]) => (
                    <li key={href}>
                      <Link href={href} className={s.link}>
                        <span><b>{t}</b><span>{d}</span></span>
                        <span aria-hidden="true" className={s.arrow}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>

      <ReviewsStrip />

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
