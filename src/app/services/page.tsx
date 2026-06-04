import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foreclosure, Surplus & Unclaimed Property Recovery | RCG',
  description: 'Full-service recovery of foreclosure surplus, tax deed overages, unclaimed property, and estate assets. Rebound Capital Group files through licensed attorneys at no upfront cost.',
}

const categories = [
  {
    n: '01',
    label: 'Foreclosure Solutions',
    blurb: 'Still in the foreclosure process? Pre-sale options to preserve your equity before the auction.',
    services: [
      { title: 'Surplus Recovery', href: '/services/surplus-funds', desc: 'Recover the money left over when a forced sale brings in more than the debt owed. We identify court-held surplus and file before the deadline.' },
      { title: 'Probate & Time Extensions', href: '/services/probate-time-extensions', desc: 'When an estate or probate matter threatens a claim deadline, we coordinate documentation and pursue extensions to protect your right to recover.' },
      { title: 'Mortgage Assumptions', href: '/services/mortgage-assumptions', desc: 'In some cases a qualified buyer can assume your existing mortgage, preserving equity and stopping a forced sale at auction.' },
      { title: 'Cash Offer on Property', href: '/services/cash-offer', desc: 'Facing an auction date? We can structure a cash offer on your property before the sale, so you walk away with equity instead of a deficiency.' },
    ],
  },
  {
    n: '02',
    label: 'Surplus & Overage Recovery',
    blurb: 'When a property sells for more than is owed, the excess belongs to the former owner. We find it and file it.',
    services: [
      { title: 'Foreclosure Surplus Funds', href: '/services/foreclosure-surplus', desc: 'When a foreclosed property sells for more than the debt owed, the excess is legally yours. We file through licensed attorneys at no upfront cost.' },
      { title: 'Tax Deed Overages', href: '/services/tax-deed-surplus', desc: 'Tax deed and tax lien sales generate overages daily. We locate the excess tied to your former property and recover it before it escheats.' },
      { title: 'Excess Proceeds / Overages', href: '/services/excess-proceeds', desc: 'Excess proceeds from a forced sale — mortgage, tax, or HOA — are recoverable by the former owner. We track, file, and pursue every dollar.' },
    ],
  },
  {
    n: '03',
    label: 'Unclaimed Property',
    blurb: 'Billions sit dormant in bank accounts, deposits, and state treasuries. We search, locate, and recover what is yours.',
    services: [
      { title: 'Unclaimed Assets', href: '/services/unclaimed-property', desc: 'Dormant bank accounts, uncashed checks, insurance payouts, and utility deposits sit unclaimed in the billions. We search, locate, and recover.' },
      { title: 'State-Held Funds', href: '/services/state-unclaimed-funds', desc: 'Once property goes unclaimed long enough it escheats to the state treasury. We navigate state databases and reclaim funds held in your name.' },
    ],
  },
  {
    n: '04',
    label: 'Estate, Trust & Business Recovery',
    blurb: 'Heirs, trusts, and business entities are often owed funds they never knew existed. We trace and recover them.',
    services: [
      { title: 'Estate & Heir Recovery', href: '/services/estate-recovery', desc: 'Heirs are often entitled to surplus and unclaimed funds they never knew existed. We identify rightful heirs, coordinate probate, and manage the full claim.' },
      { title: 'Trust Asset Recovery', href: '/services/trust-recovery', desc: 'Assets held under trust accounts are easily overlooked and left unclaimed. We trace and recover funds tied to active and dormant trusts.' },
      { title: 'LLC & Business Asset Recovery', href: '/services/business-asset-recovery', desc: 'Unclaimed property held under business names, dissolved entities, or closed corporations is recoverable. We recover assets for LLCs, corporations, and inactive trusts.' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>All Recovery Types · One Firm · No Upfront Cost</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Everything We </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Recover</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto', fontWeight: 400 }}>
            Foreclosure surplus, tax deed overages, unclaimed property, estate and business assets — every claim type, on pure contingency. If money was left behind, we find it and recover it.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(56px,7vw,88px)' }}>
          {categories.map((cat) => (
            <div key={cat.n}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '8px' }}>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', fontWeight: 700, color: '#4a7fd4', letterSpacing: '1px' }}>{cat.n}</span>
                <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,3vw,34px)', color: '#fff', letterSpacing: '-0.8px', margin: 0 }}>{cat.label}</h2>
              </div>
              <p style={{ fontSize: '14px', color: '#6a80b0', lineHeight: 1.8, margin: '0 0 24px', maxWidth: '620px', paddingLeft: '27px' }}>{cat.blurb}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: '2px' }}>
                {cat.services.map((s, i) => (
                  <Link key={s.href} href={s.href} style={{ textDecoration: 'none', display: 'block', background: i % 2 === 0 ? 'rgba(18,28,72,0.4)' : '#0a0f1a', border: `1px solid ${i % 2 === 0 ? 'rgba(74,95,212,0.2)' : 'rgba(74,95,212,0.07)'}`, padding: 'clamp(22px,2.6vw,30px)', position: 'relative' }}>
                    {i % 2 === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />}
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(16px,2vw,19px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 10px' }}>{s.title}</h3>
                    <p style={{ fontSize: '13.5px', color: i % 2 === 0 ? '#8090b8' : '#506080', lineHeight: 1.85, margin: '0 0 16px' }}>{s.desc}</p>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a7fd4' }}>Explore →</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* CTA */}
      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// No cost to start</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>
            Not Sure Which Applies to You?
          </h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>
            Tell us your situation and we will identify every claim type connected to your name — foreclosure, tax deed, unclaimed, or estate. You pay nothing unless we recover.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Free Claim Review</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
        </div>
      </section>
    </main>
  )
}
