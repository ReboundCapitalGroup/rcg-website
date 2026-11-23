import Link from 'next/link'
import type { Metadata } from 'next'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'

export const metadata: Metadata = {
  title: 'Surplus Recovery Results & Case Wins | RCG',
  description: 'Real surplus funds recovery results and case wins from Rebound Capital Group. See how we have recovered foreclosure surplus and excess proceeds for former owners.',
}

const results = [
  { amount: '$48,200', type: 'Foreclosure Surplus', state: 'FL', county: 'Miami-Dade County', detail: 'Former homeowner contacted after property sold at foreclosure. Surplus identified, claim filed, funds recovered within 44 days.' },
  { amount: '$31,750', type: 'Tax Deed Overage', state: 'FL', county: 'Hillsborough County', detail: 'Tax deed sale generated excess proceeds held by the county. Former owner unaware funds existed. Full recovery completed.' },
  { amount: '$112,400', type: 'Foreclosure Surplus', state: 'OH', county: 'Cuyahoga County', detail: 'Large surplus from bank-ordered foreclosure sale. Multiple lien review completed by attorneys. Net recovery disbursed to former owner.' },
  { amount: '$22,900', type: 'Unclaimed Property', state: 'FL', county: 'State Treasury', detail: 'Dormant accounts and uncashed insurance proceeds identified in state records. Full amount recovered on behalf of rightful owner.' },
  { amount: '$67,500', type: 'Foreclosure Surplus', state: 'AZ', county: 'Maricopa County', detail: 'Surplus from trustee sale identified through county records. Owner relocated out of state and unaware of funds. Recovery completed in 61 days.' },
  { amount: '$19,300', type: 'Estate Recovery', state: 'FL', county: 'Broward County', detail: 'Heir to deceased former homeowner entitled to surplus funds. Probate documentation coordinated and claim filed on behalf of estate.' },
  { amount: '$84,100', type: 'Foreclosure Surplus', state: 'CO', county: 'Denver County', detail: 'High-value surplus from commercial property foreclosure. Complex lien structure resolved by licensed attorneys. Full disbursement completed.' },
  { amount: '$26,600', type: 'Tax Deed Overage', state: 'OH', county: 'Franklin County', detail: 'Excess proceeds from county tax sale. Deadline was approaching when client was identified. Claim filed and recovery completed before window closed.' },
]

export default function ClientResultsPage() {
  return (
    <div className={h.page}>
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={sv.crumbs}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>Results</span>
        </div>
        <div className={sv.heroGrid}>
          <div className={sv.heroText}>
            <div className={h.eyebrow}>Real cases · Verified recoveries</div>
            <h1 className={sv.h1}>Client <em className={h.gradText}>results.</em></h1>
            <p className={sv.answer}>A sample of recoveries completed for clients across our active states. Names and identifying details are not shared, to protect client privacy.</p>
          </div>
          <div className={sv.glance}>
            <div className={sv.glanceLabel}>By the numbers</div>
            {[['Total recovered for clients', '$2M+'], ['Fee model', '100% contingency'], ['Coverage', 'Nationwide']].map(([k, v]) => (
              <div key={k} className={sv.glanceRow}><span>{k}</span><b>{v}</b></div>
            ))}
          </div>
        </div>
      </div>

      <div className={h.wrap}>
        <div className={sv.cards} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' }}>
          {results.map((r, i) => (
            <div key={r.amount + r.county} className={i % 2 === 0 ? `${sv.card} ${sv.cardDark}` : sv.card}>
              <span className={sv.cardTag}>{r.type} · {r.county}, {r.state}</span>
              <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 48, lineHeight: 1 }}>{r.amount}</span>
              <span className={sv.cardDesc}>{r.detail}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: '#6b7390', marginTop: 18 }}>Results shown are representative of completed recoveries. Individual outcomes vary based on claim type, jurisdiction and case complexity.</p>
      </div>

      <div style={{ height: 72 }} />
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>Find out what you are owed.</h2>
          <p>A free search takes minutes. If funds exist in your name, we find them and handle the full recovery at no cost to you.</p>
          <div className={h.btnRow}>
            <Link href="/contact" className={`${h.btnPrimary} ${h.btnLg}`}>Get a free review <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
