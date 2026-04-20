import Link from 'next/link'

const steps = [
  {
    n: '01',
    title: 'We Start With the Search',
    sub: 'Proactive or on request',
    desc: 'Whether you come to us or we identify funds connected to your name first, every case starts the same way. We search court systems, state agencies, and county records to confirm what exists and what you may be entitled to.',
    accent: true,
  },
  {
    n: '02',
    title: 'Free Claim Review',
    sub: 'Zero cost, zero obligation',
    desc: 'We confirm the claim amount, walk you through the recovery process for your specific case, and answer every question you have. If there is nothing to recover, we tell you straight away.',
    accent: false,
  },
  {
    n: '03',
    title: 'One Simple Agreement',
    sub: 'Contingency only',
    desc: 'One document. It outlines our fee, taken only from the recovered amount, and authorizes us to act on your behalf. No upfront payment. No out-of-pocket costs at any point.',
    accent: false,
  },
  {
    n: '04',
    title: 'We Handle Everything',
    sub: 'Attorneys, filings, court dates',
    desc: 'Licensed attorneys file the claim, manage all court correspondence, respond to objections, and track every deadline. You do not need to appear in court or manage any paperwork.',
    accent: true,
  },
  {
    n: '05',
    title: 'Funds Are Released',
    sub: 'Court-ordered disbursement',
    desc: 'Once approved, funds are released by the court or agency and disbursed. Most claims resolve in 30 to 90 days. Complex cases involving probate or competing claims may take longer.',
    accent: false,
  },
  {
    n: '06',
    title: 'You Get Paid',
    sub: 'Net amount direct to you',
    desc: 'Your share of the recovered funds is delivered directly to you. Our fee comes out of the recovery. If we do not recover, you owe us nothing.',
    accent: false,
  },
]

const faqs = [
  { q: 'How do you get paid?', a: 'Strictly contingency. We take a percentage of what we recover. If nothing is recovered, you pay nothing.' },
  { q: 'How long does the process take?', a: 'Most claims resolve in 30 to 90 days. Complex cases involving probate or competing claims may take longer.' },
  { q: 'Do I need to hire my own attorney?', a: 'No. Licensed attorneys are part of our process on every claim. You do not need separate counsel.' },
  { q: 'Is there a deadline to claim?', a: 'Yes, and it varies by state and claim type. Some windows close in as few as 60 days. If you have been notified of surplus funds, contact us immediately.' },
]

export default function HowItWorksPage() {
  return (
    <main>

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.03) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Six Steps · Zero Upfront · One Agreement</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', color: '#fff', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 8px' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>How It </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Works</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '460px', margin: '32px auto 0', fontWeight: 400 }}>
            From the first search to the final payment. Every step is handled by our team, at no cost to you until we recover.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>

          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
            <span className="section-tag" style={{ margin: 0 }}>// The Process</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.2),transparent)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '0', background: s.accent ? 'rgba(18,28,72,0.5)' : '#0a0f1a', border: `1px solid ${s.accent ? 'rgba(74,95,212,0.2)' : 'rgba(74,95,212,0.07)'}`, position: 'relative', overflow: 'hidden' }}>
                {s.accent && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />}

                {/* Left — number block */}
                <div style={{ padding: 'clamp(28px,3vw,40px)', borderRight: `1px solid ${s.accent ? 'rgba(74,95,212,0.15)' : 'rgba(74,95,212,0.06)'}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', fontWeight: 700, color: s.accent ? '#4a7fd4' : '#2a3a60', letterSpacing: '2px', marginBottom: '12px' }}>{s.n}</div>
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: s.accent ? '#4a6090' : '#243050', lineHeight: 1.6 }}>{s.sub}</div>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: '1px', height: '24px', background: 'linear-gradient(180deg,rgba(74,95,212,0.2),transparent)', marginTop: '20px' }} />
                  )}
                </div>

                {/* Right — content */}
                <div style={{ padding: 'clamp(28px,3vw,40px)' }}>
                  <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(18px,2.2vw,24px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 14px', lineHeight: 1.15 }}>{s.title}</h2>
                  <p style={{ fontSize: '14px', color: s.accent ? '#8090b8' : '#506080', lineHeight: 1.9, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* FAQ — lean, supportive */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(60px,7vw,88px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,3vw,32px)', color: '#fff', letterSpacing: '-0.5px', margin: 0 }}>Common Questions</h2>
            <Link href="/resources/faqs" style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#3a5080', textDecoration: 'none' }}>Full FAQ page →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.08)', padding: '24px 28px' }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '14px', color: '#c8d8ff', marginBottom: '8px' }}>{f.q}</div>
                <div style={{ fontSize: '13px', color: '#506080', lineHeight: 1.85 }}>{f.a}</div>
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
            Ready to Find Out What You Are Owed?
          </h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>
            Start with a free search. We confirm what exists, walk you through the process, and handle everything from there.
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
