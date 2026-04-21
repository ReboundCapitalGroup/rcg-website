import Link from 'next/link'

const steps = [
  { n: '01', title: 'Property Sold at Tax Sale', desc: 'When a property owner fails to pay property taxes, the county places the property for sale at a tax deed auction. The winning bidder pays off the delinquent taxes and takes title to the property.' },
  { n: '02', title: 'Overage Is Generated', desc: 'If the winning bid exceeds the amount of taxes owed plus fees, the difference is called the tax deed overage or excess proceeds. This amount belongs to the former owner by law.' },
  { n: '03', title: 'Funds Held by the County', desc: 'The overage is deposited with the county clerk and held until claimed. Deadlines vary but funds can be absorbed by the state if not claimed within the statutory window.' },
  { n: '04', title: 'We Identify and File', desc: 'RCG monitors tax deed sale records across active counties. When we identify an overage tied to your name, we contact you, verify the claim, and file through licensed attorneys.' },
  { n: '05', title: 'You Receive Your Funds', desc: 'After the county approves the claim, funds are released and disbursed to you. Our contingency fee is deducted only from the recovered amount.' },
]

const faqs = [
  { q: 'How is a tax deed overage different from foreclosure surplus?', a: 'Foreclosure surplus comes from a lender-initiated sale. Tax deed overages come from a government-initiated sale due to unpaid property taxes. Both result in excess funds legally owed to the former owner.' },
  { q: 'How long do I have to claim a tax deed overage?', a: 'Deadlines vary by state and county. In Florida, former owners typically have up to two years. Other states may have shorter windows. Contact us immediately if you believe an overage exists.' },
  { q: 'What if I owed back taxes on the property?', a: 'The back taxes are paid from the sale proceeds before any overage is calculated. The overage is what remains after all taxes and fees are satisfied, and that amount belongs to you.' },
  { q: 'Can heirs or estate representatives claim a tax deed overage?', a: 'Yes. If the former owner has passed, rightful heirs or estate representatives may be entitled to the overage. We work with estate attorneys to coordinate these claims.' },
]

export default function TaxDeedSurplusPage() {
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
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Tax Sale Recovery · No Upfront Cost</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tax Deed </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Overages</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto', fontWeight: 400 }}>
            When a property sells at a tax deed auction for more than the taxes owed, the surplus belongs to the former owner. Counties hold it until claimed. We find it and recover it.
          </p>
        </div>
      </section>

      {/* EXPLAINER */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(48px,6vw,88px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '108px' }}>
            <span className="section-tag">// What Is a Tax Deed Overage</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 20px' }}>
              Excess Proceeds<br /><span style={{ color: 'var(--dim)' }}>Owed to You.</span>
            </h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['County-Held Funds', 'Owed After Tax Satisfaction', 'Time-Sensitive Deadlines', 'Pure Contingency Recovery'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, fontWeight: 400, margin: 0 }}>
              When a county sells a property at a tax deed auction to recover unpaid property taxes, the bidding often exceeds what is actually owed. The back taxes, penalties, and fees are paid first. Whatever remains is called the overage or excess proceeds, and by law it belongs to the former property owner.
            </p>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, fontWeight: 400, margin: 0 }}>
              These funds are deposited with the county clerk and most former owners never receive adequate notice that money is waiting. Without a proper claim filed within the statutory deadline, the funds are absorbed by the state and the former owner loses their right to collect.
            </p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>
                RCG monitors tax deed sale records across all active counties. When we identify an overage tied to your name, we handle the entire claim process through licensed attorneys at no cost to you until we recover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* STEPS */}
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

      {/* FAQ */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(60px,7vw,88px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,3vw,32px)', color: '#fff', letterSpacing: '-0.5px', margin: 0 }}>Common Questions</h2>
            <Link href="/resources/faqs" style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#3a5080', textDecoration: 'none' }}>Full FAQ page →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.08)', padding: '24px 28px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: '100%', background: 'rgba(30,40,127,0.4)' }} />
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '14px', color: '#c8d8ff', marginBottom: '8px', paddingLeft: '4px' }}>{f.q}</div>
                <div style={{ fontSize: '13px', color: '#506080', lineHeight: 1.85, paddingLeft: '4px' }}>{f.a}</div>
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
            Was Your Property Sold at Tax Sale?
          </h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>
            If your property was sold at a tax deed auction, there may be overage funds waiting in your name. We search for free and only get paid when we recover.
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
