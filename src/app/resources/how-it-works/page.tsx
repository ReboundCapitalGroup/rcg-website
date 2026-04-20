import Link from 'next/link'

const steps = [
  {
    n: '01',
    title: 'We Find You',
    sub: 'No searching required',
    desc: 'Our system monitors over 1,000 county court systems daily. When surplus funds are identified with your name attached, we reach out directly. Most clients had no idea money existed until we called.',
  },
  {
    n: '02',
    title: 'Free Claim Review',
    sub: 'Zero cost to start',
    desc: 'We verify the claim, confirm the amount, and explain exactly what the recovery process looks like for your specific case. No pressure, no commitment. If there is nothing to recover, we tell you upfront.',
  },
  {
    n: '03',
    title: 'You Sign One Agreement',
    sub: 'Simple contingency contract',
    desc: 'One document. It outlines our fee taken only from the recovered amount and authorizes us to work on your behalf. No upfront payment. No out-of-pocket costs at any point in the process.',
  },
  {
    n: '04',
    title: 'We Handle Everything',
    sub: 'Attorneys, filings, court dates',
    desc: 'Our licensed attorneys file the claim, handle all court correspondence, respond to any objections, and track every deadline. You do not need to appear in court or manage any paperwork.',
  },
  {
    n: '05',
    title: 'Funds Are Released',
    sub: 'Court-ordered disbursement',
    desc: 'Once approved by the court or agency, funds are released and disbursed. The process typically takes 30 to 90 days depending on the county, claim type, and whether any liens or competing claims exist.',
  },
  {
    n: '06',
    title: 'You Get Paid',
    sub: 'Net amount direct to you',
    desc: 'You receive your share of the recovered funds directly. Our fee is deducted from the recovery never from your pocket. If we do not recover, you owe us nothing.',
  },
]

const faqs = [
  { q: 'How do you get paid?', a: 'Strictly contingency. We take a percentage of what we recover. If nothing is recovered, you pay nothing.' },
  { q: 'How long does the process take?', a: 'Most claims resolve in 30 to 90 days. Complex cases involving probate, competing liens, or deceased claimants may take longer.' },
  { q: 'Do I need to hire my own attorney?', a: 'No. Licensed attorneys are included in our process. You do not need to retain separate counsel.' },
  { q: 'What if I already tried to claim my funds?', a: 'Contact us anyway. Prior failed attempts do not disqualify a claim in most cases.' },
  { q: 'Is there a deadline to claim my funds?', a: 'Yes and it varies by state and claim type. Some windows are as short as 60 days. Contact us immediately if you have been notified of surplus funds.' },
  { q: 'What states do you operate in?', a: 'Currently active in Florida, Arizona, Colorado, Ohio, and Michigan. Expanding nationwide.' },
]

export default function HowItWorksPage() {
  return (
    <main>

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.2)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#3a4f7a', display: 'block', marginBottom: '20px' }}>// The Process</span>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,5vw,60px)', color: '#fff', letterSpacing: 'clamp(-1.5px,-0.02em,-2.5px)', lineHeight: 1.05, margin: '0 0 20px' }}>
            How It Works
          </h1>
          <p style={{ fontSize: 'clamp(14px,2vw,17px)', color: '#6a80b0', lineHeight: 1.9, maxWidth: '540px', margin: '0 auto' }}>
            From identification to payment. Six steps, zero upfront costs, and one simple agreement. Here is exactly what happens when you work with RCG.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(60px,7vw,100px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '32px', marginBottom: i < steps.length - 1 ? '0' : '0', position: 'relative' }}>
              {/* Left number + line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg,#1a2860,#0f1a40)', border: '1px solid rgba(74,127,212,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', fontWeight: 700, color: '#4a7fd4' }}>{s.n}</span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: '1px', flex: 1, minHeight: '48px', background: 'linear-gradient(180deg,rgba(74,95,212,0.3),rgba(74,95,212,0.05))', margin: '8px 0' }} />
                )}
              </div>
              {/* Right content */}
              <div style={{ paddingBottom: i < steps.length - 1 ? '48px' : '0' }}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a6fd4', marginBottom: '8px' }}>{s.sub}</div>
                <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(18px,2.5vw,24px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 12px' }}>{s.title}</h2>
                <p style={{ fontSize: '15px', color: '#6a80b0', lineHeight: 1.9, margin: 0 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.2),transparent)' }} />

      {/* FAQ */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(60px,7vw,100px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span className="section-tag">// Common Questions</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,44px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '12px 0 48px' }}>
            Straight Answers.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.1)', padding: '28px 32px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.3),transparent)' }} />
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '15px', color: '#c8d8ff', marginBottom: '10px' }}>{f.q}</div>
                <div style={{ fontSize: '14px', color: '#6a80b0', lineHeight: 1.85 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.2),transparent)' }} />

      {/* CTA */}
      <section style={{ background: '#000', padding: 'clamp(60px,7vw,100px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// No cost to start</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '16px 0 16px' }}>
            Ready to Find Out What You Are Owed?
          </h2>
          <p style={{ fontSize: '15px', color: '#6a80b0', lineHeight: 1.85, marginBottom: '36px' }}>
            Start with a free claim review. We search your name and property, confirm what exists, and walk you through next steps. No obligation.
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
