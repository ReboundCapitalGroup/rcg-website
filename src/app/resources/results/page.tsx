import Link from 'next/link'

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

const typeColors: Record<string, string> = {
  'Foreclosure Surplus': '#1E287F',
  'Tax Deed Overage': '#1a3a6a',
  'Unclaimed Property': '#162e54',
  'Estate Recovery': '#1a2a50',
}

export default function ClientResultsPage() {
  return (
    <main>

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Real Cases · Verified Recoveries</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Client </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Results</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '460px', margin: '0 auto', fontWeight: 400 }}>
            A sample of recoveries completed for clients across our active states. Names and identifying details are not disclosed to protect client privacy.
          </p>
        </div>
      </section>

      {/* TOTAL RECOVERED */}
      <div style={{ background: '#080d1a', borderBottom: '1px solid rgba(30,40,127,0.12)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }} className="about-stats-bar">
          {[
            { val: '$2M+', label: 'Total Recovered for Clients' },
            { val: '100%', label: 'Contingency — No Upfront Cost' },
            { val: 'FL · AZ · CO · OH · MI', label: 'Active Recovery States' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < 2 ? '1px solid rgba(74,95,212,0.1)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,30px)', color: '#4a7fd4', letterSpacing: '-1px', lineHeight: 1, marginBottom: '8px' }}>{s.val}</div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#3a4f7a' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RESULTS GRID */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <span className="section-tag" style={{ margin: 0 }}>// Recovery Log</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.2),transparent)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2px' }}>
            {results.map((r, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.1)', padding: 'clamp(24px,3vw,36px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg,${typeColors[r.type] || '#1E287F'},transparent)` }} />

                {/* Amount */}
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3vw,40px)', color: '#fff', letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '8px' }}>{r.amount}</div>

                {/* Type + location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a6fd4', border: '1px solid rgba(74,95,212,0.2)', padding: '3px 8px' }}>{r.type}</span>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f6a' }}>{r.county} · {r.state}</span>
                </div>

                <p style={{ fontSize: '13px', color: '#506080', lineHeight: 1.85, margin: 0 }}>{r.detail}</p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2a3a60', textAlign: 'center', marginTop: '40px', lineHeight: 2 }}>
            Results shown are representative of completed recoveries. Individual outcomes vary based on claim type, jurisdiction, and case complexity.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* CTA */}
      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Your funds may be next</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>
            Find Out What You Are Owed.
          </h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>
            A free search takes minutes. If funds exist in your name, we will find them and handle the full recovery at no cost to you.
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
