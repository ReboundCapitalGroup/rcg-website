import Link from 'next/link'

const categories = [
  {
    label: 'Insurance',
    code: 'IN',
    items: ['Individual Policy Benefits', 'Group Policy Benefits', 'Death Benefits', 'Matured Annuities', 'Insurance Premium Refunds', 'Other Amounts Due Under Policy'],
  },
  {
    label: 'Banking',
    code: 'AC',
    items: ['Checking Accounts', 'Savings Accounts', 'Matured CDs', 'Cashiers Checks', 'Vendor Checks'],
  },
  {
    label: 'Securities',
    code: 'SC',
    items: ['Unclaimed Dividends', 'Equity Payments', 'Shares of Stock', 'Demutualization Cash'],
  },
  {
    label: 'Retirement',
    code: 'IR',
    items: ['Traditional IRA', 'Roth IRA', 'Pension and Profit Sharing'],
  },
  {
    label: 'Miscellaneous',
    code: 'MS',
    items: ['Credit Balances', 'Refunds', 'Miscellaneous Checks', 'Escheated Funds'],
  },
  {
    label: 'Court and Tax',
    code: 'CT',
    items: ['Surplus from Foreclosure', 'Tax Certificates and Tax Deeds'],
  },
]

const steps = [
  { n: '01', title: 'We Search State Records', desc: 'We search unclaimed property databases across all 50 states using your name, prior addresses, and any connected entities. Florida alone holds over $2 billion in unclaimed funds across every category above.' },
  { n: '02', title: 'We Confirm the Claim', desc: 'When we identify funds connected to your name, we verify the match, confirm the amount, and identify which state agency is holding the funds before reaching out to you.' },
  { n: '03', title: 'We File on Your Behalf', desc: 'Our team prepares and submits the claim through the appropriate state process, coordinating any required documentation, identity verification, and supporting paperwork.' },
  { n: '04', title: 'State Releases the Funds', desc: 'Once the state approves the claim, funds are released and disbursed directly to you. Most claims resolve within 60 to 120 days depending on the state and claim type.' },
]

export default function UnclaimedPropertyPage() {
  return (
    <main>

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>All 50 States · No Upfront Cost</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Unclaimed </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Property</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto', fontWeight: 400 }}>
            State agencies are holding billions in unclaimed funds across dozens of property types. Bank accounts, insurance proceeds, dividends, retirement funds, and more. Your name may already be in the system.
          </p>
        </div>
      </section>

      {/* STAT BAR */}
      <div style={{ background: '#080d1a', borderBottom: '1px solid rgba(30,40,127,0.12)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }} className="about-stats-bar">
          {[
            { val: '$70B+', label: 'Held by US states' },
            { val: '1 in 10', label: 'Americans have unclaimed funds' },
            { val: 'All 50', label: 'States searchable' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < 2 ? '1px solid rgba(74,95,212,0.1)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,2.5vw,32px)', color: '#4a7fd4', letterSpacing: '-1px', lineHeight: 1, marginBottom: '8px' }}>{s.val}</div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#3a4f7a' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROPERTY TYPES */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ marginBottom: '56px' }}>
            <span className="section-tag">// Florida Unclaimed Property Types</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 12px' }}>
              Every Type of Fund We Recover.
            </h2>
            <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.8, maxWidth: '560px' }}>
              Florida and all other states hold unclaimed funds across a wide range of categories. Below is the full list of property types we search and recover.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px' }} className="about-values-grid">
            {categories.map((cat, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.08)', padding: 'clamp(22px,2.5vw,32px)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,rgba(30,40,127,0.6),transparent)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', color: '#4a6fd4', border: '1px solid rgba(74,95,212,0.2)', padding: '3px 8px', textTransform: 'uppercase' }}>{cat.code}</span>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '14px', color: '#c8d8ff', letterSpacing: '-0.2px' }}>{cat.label}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {cat.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ width: '3px', height: '3px', background: '#1E287F', flexShrink: 0, marginTop: '6px' }} />
                      <span style={{ fontSize: '13px', color: '#506080', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* PROCESS */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '56px' }}>
            <span className="section-tag" style={{ margin: 0 }}>// The Recovery Process</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.2),transparent)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', background: i % 2 === 0 ? 'rgba(18,28,72,0.4)' : '#0a0f1a', border: `1px solid ${i % 2 === 0 ? 'rgba(74,95,212,0.2)' : 'rgba(74,95,212,0.07)'}`, position: 'relative' }}>
                {i % 2 === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />}
                <div style={{ padding: 'clamp(20px,2.5vw,32px)', borderRight: `1px solid ${i % 2 === 0 ? 'rgba(74,95,212,0.15)' : 'rgba(74,95,212,0.06)'}`, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 'clamp(24px,3vw,36px)' }}>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', fontWeight: 700, color: i % 2 === 0 ? '#4a7fd4' : '#2a3a60', letterSpacing: '1px' }}>{s.n}</span>
                </div>
                <div style={{ padding: 'clamp(20px,2.5vw,32px)' }}>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(16px,2vw,20px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 10px' }}>{s.title}</h3>
                  <p style={{ fontSize: '14px', color: i % 2 === 0 ? '#8090b8' : '#506080', lineHeight: 1.9, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* CTA */}
      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Free search · all 50 states</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>
            Your Name May Already Be in the System.
          </h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>
            We search state databases across all 50 states at no cost. If funds exist in your name across any of these categories, we file the claim and recover them on a pure contingency basis.
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
