import Link from 'next/link'

const situations = [
  { n: '01', title: 'Claim Deadline Is Approaching', desc: 'Surplus fund claim windows can close in as few as 60 days. When a deadline is imminent and the estate is not yet in order, our attorneys can file for a time extension to preserve the right to claim.', accent: true },
  { n: '02', title: 'Estate Has Not Been Opened', desc: 'If the former owner passed without a will or formal estate, probate may need to be initiated before a claim can be filed. Our attorneys can open the estate and proceed with the claim simultaneously.', accent: false },
  { n: '03', title: 'Probate Is Already Pending', desc: 'If probate is already open but moving slowly, we coordinate directly with the estate attorney to ensure the surplus claim is filed and protected within the active case.', accent: false },
  { n: '04', title: 'Multiple Heirs or Disputed Estate', desc: 'When multiple heirs are involved or the estate structure is unclear, our attorneys navigate the probate process, establish proper standing, and ensure the claim is filed correctly on behalf of all parties.', accent: true },
]

export default function ProbateTimeExtensionsPage() {
  return (
    <main>
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Licensed Attorney Services · Estate and Probate</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Probate and </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Time Extensions</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto', fontWeight: 400 }}>
            When claim deadlines are approaching and an estate is not yet in order, our licensed attorneys can initiate probate, file for time extensions, and protect your right to recover funds before the window closes.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(48px,6vw,88px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '108px' }}>
            <span className="section-tag">// Why This Matters</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 20px' }}>
              Deadlines Do Not<br /><span style={{ color: 'var(--dim)' }}>Wait for Estates.</span>
            </h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            {['Licensed Florida Attorneys', 'Probate Initiation', 'Time Extension Filings', 'Coordinated Claim Recovery'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>Surplus funds from foreclosure and tax deed sales must be claimed within strict statutory deadlines. In Florida, some windows close within 60 days of the certificate of title. When the former owner has passed and no estate is open, that deadline can pass before any heir even knows the funds exist.</p>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>Our licensed attorneys can file emergency time extension motions with the court to preserve the claim, initiate summary or formal probate where required, and coordinate the estate and the surplus claim simultaneously so nothing falls through the cracks.</p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>If a deadline is approaching, contact us immediately. Time extensions are not guaranteed but acting quickly significantly improves the outcome.</p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '56px' }}>
            <span className="section-tag" style={{ margin: 0 }}>// Common Situations</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.2),transparent)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2px' }} className="about-values-grid">
            {situations.map((s) => (
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

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Act immediately</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>Is a Deadline Approaching?</h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>Do not wait. If a claim deadline is close and the estate is not in order, contact us immediately. Our attorneys can evaluate the situation and determine whether a time extension is possible.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Contact Us Now</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
        </div>
      </section>
    </main>
  )
}
