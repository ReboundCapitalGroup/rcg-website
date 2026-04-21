import Link from 'next/link'

export default function ExcessProceedsPage() {
  return (
    <main>
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Court-Held Overages · No Upfront Cost</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Excess Proceeds </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>and Overages</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto', fontWeight: 400 }}>
            When any court-ordered property sale generates more than the amount owed to creditors, the excess belongs to the former owner. These funds are held by the court until claimed — or until the deadline passes.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(48px,6vw,88px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '108px' }}>
            <span className="section-tag">// What Are Excess Proceeds</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 20px' }}>
              Any Court Sale<br /><span style={{ color: 'var(--dim)' }}>Can Generate Overages.</span>
            </h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            {['Foreclosure Sales', 'Tax Deed Auctions', 'HOA Foreclosures', 'Partition and Probate Sales', 'Judgment Lien Sales'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>Excess proceeds is a broad term covering any situation where a court-ordered or government-initiated property sale generates more money than is needed to satisfy the debts that triggered the sale. The most common sources are foreclosure auctions and tax deed sales, but excess proceeds can also arise from HOA foreclosures, partition sales ordered by probate courts, and sales resulting from judgment liens.</p>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>In all of these cases, the excess after debts are satisfied belongs to the former property owner by law. The funds are deposited with the clerk of court or the applicable agency and held until a valid claim is filed — or until the statutory deadline passes and the funds are absorbed by the state.</p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>RCG identifies and recovers excess proceeds across all sale types through licensed attorneys. If a court-ordered sale of any kind was connected to a property you owned, funds may be waiting in your name.</p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <span className="section-tag" style={{ margin: 0 }}>// Sale Types We Cover</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.2),transparent)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2px' }} className="about-values-grid">
            {[
              { title: 'Foreclosure Surplus', desc: 'Mortgage foreclosure auctions are the most common source of excess proceeds. When the winning bid exceeds the mortgage balance and any junior liens, the surplus belongs to the former homeowner.', accent: true },
              { title: 'Tax Deed Overages', desc: 'When a county sells a tax-delinquent property for more than the taxes owed, the overage is held by the county clerk and owed to the former owner.', accent: false },
              { title: 'HOA Foreclosure Surplus', desc: 'Homeowners associations can foreclose on properties for unpaid dues. When the HOA sale generates more than the amount owed, excess proceeds are owed to the former owner.', accent: false },
              { title: 'Partition and Probate Sales', desc: 'Court-ordered sales of jointly owned or estate property sometimes generate excess proceeds that are deposited with the court and held for the former owners or their heirs.', accent: true },
            ].map((s, i) => (
              <div key={i} style={{ background: s.accent ? 'rgba(18,28,72,0.5)' : '#0a0f1a', border: `1px solid ${s.accent ? 'rgba(74,95,212,0.25)' : 'rgba(74,95,212,0.08)'}`, padding: 'clamp(24px,3vw,36px)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: s.accent ? 'linear-gradient(90deg,#1E287F,rgba(74,95,212,0.2))' : 'linear-gradient(90deg,rgba(30,40,127,0.3),transparent)' }} />
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(15px,2vw,19px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 12px', lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: s.accent ? '#8090b8' : '#506080', lineHeight: 1.9, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// No cost to start</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>Was Your Property Sold by a Court?</h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>If any court-ordered or government-initiated sale was connected to a property you owned, excess proceeds may be waiting in your name. We search for free and only get paid when we recover.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Free Claim Review</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
        </div>
      </section>
    </main>
  )
}
