import Link from 'next/link'

const scenarios = [
  {
    n: '01',
    title: 'Dissolved or Inactive LLC',
    desc: 'When a business entity is dissolved, assets held in the company name do not automatically transfer to the owners. Surplus funds, unclaimed property, and court deposits tied to dissolved entities are recoverable by former members or officers.',
    accent: true,
  },
  {
    n: '02',
    title: 'Property Sold Under a Business Name',
    desc: 'Foreclosure surplus and tax deed overages generated from properties held in an LLC, corporation, or partnership name belong to that entity. When the entity is dissolved, the right to claim passes to the former principals.',
    accent: false,
  },
  {
    n: '03',
    title: 'Dormant Business Bank Accounts',
    desc: 'Business checking accounts, savings accounts, and merchant accounts that become dormant are escheated to the state under unclaimed property laws, just like personal accounts.',
    accent: false,
  },
  {
    n: '04',
    title: 'Uncashed Business Checks and Refunds',
    desc: 'Vendor refunds, utility deposits, insurance payouts, and other amounts issued to a business entity that were never collected are held by state agencies and can be claimed by the rightful principals.',
    accent: true,
  },
]

const steps = [
  { n: '01', title: 'We Identify the Asset', desc: 'We search court records and state databases under the business name, any registered variations, and associated officer or member names to identify funds or surplus tied to the entity.' },
  { n: '02', title: 'We Verify Entity Status', desc: 'Our team pulls state registration records to confirm the entity structure, dissolution status, and the identity of authorized principals who may have standing to file a claim.' },
  { n: '03', title: 'Attorneys Prepare and File', desc: 'Licensed attorneys prepare the claim documentation, establish standing for the filing party, and submit the claim to the appropriate court or state agency.' },
  { n: '04', title: 'Recovery Is Disbursed', desc: 'Approved funds are disbursed to the authorized former officer, member, or principal. Our fee is taken only from the recovered amount after successful disbursement.' },
]

export default function LLCBusinessRecoveryPage() {
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
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Business Entity Recovery · No Upfront Cost</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>LLC and Business </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Asset Recovery</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto', fontWeight: 400 }}>
            Dissolved LLCs, inactive corporations, and former business entities often leave funds behind in court systems and state databases. Former officers and members may still be entitled to recover them.
          </p>
        </div>
      </section>

      {/* EXPLAINER */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(48px,6vw,88px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '108px' }}>
            <span className="section-tag">// Who This Applies To</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 20px' }}>
              Dissolved Does Not<br /><span style={{ color: 'var(--dim)' }}>Mean Gone.</span>
            </h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Former LLC Members', 'Corporate Officers', 'Partnership Principals', 'Business Heirs and Successors'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, fontWeight: 400, margin: 0 }}>
              When a business entity is dissolved, administratively revoked, or simply stops operating, any assets held in that entity's name do not automatically transfer to the owners. Surplus funds from property sales, unclaimed business accounts, and other recoverable assets often sit in court systems or state databases long after the entity closes.
            </p>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, fontWeight: 400, margin: 0 }}>
              Former officers, members, and principals typically retain the right to claim these funds — but doing so requires establishing legal standing, documenting the entity structure, and filing through the correct process. Most people do not know this option exists or how to pursue it.
            </p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>
                RCG handles business asset recovery through licensed attorneys who understand entity law and the specific documentation required to file these claims successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* SCENARIOS */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '56px' }}>
            <span className="section-tag" style={{ margin: 0 }}>// Common Situations</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.2),transparent)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2px' }} className="about-values-grid">
            {scenarios.map((s) => (
              <div key={s.n} style={{ background: s.accent ? 'rgba(18,28,72,0.5)' : '#0a0f1a', border: `1px solid ${s.accent ? 'rgba(74,95,212,0.25)' : 'rgba(74,95,212,0.08)'}`, padding: 'clamp(24px,3vw,36px)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: s.accent ? 'linear-gradient(90deg,#1E287F,rgba(74,95,212,0.2))' : 'linear-gradient(90deg,rgba(30,40,127,0.3),transparent)' }} />
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: s.accent ? '#4a6fd4' : '#2a3a60', marginBottom: '16px' }}>{s.n}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(15px,2vw,19px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 12px', lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: s.accent ? '#8090b8' : '#506080', lineHeight: 1.9, margin: 0 }}>{s.desc}</p>
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
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// No cost to start</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>
            Did Your Business Leave Funds Behind?
          </h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>
            We search court records and state databases under your business entity name at no cost. If recoverable funds exist, we handle the entire process through licensed attorneys.
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
