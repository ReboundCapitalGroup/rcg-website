import Link from 'next/link'

export default function ProbateTimeExtensionsPage() {
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
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Licensed Attorney Services · Post-Foreclosure Assistance</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Probate and </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Time Extensions</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto', fontWeight: 400 }}>
            Two distinct situations — both handled by our licensed attorneys. Whether you need probate opened to recover funds on behalf of an estate, or additional time in your home after a foreclosure sale, we have the legal support to help.
          </p>
        </div>
      </section>

      {/* TWO SERVICE BLOCKS */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2px' }}>

          {/* PROBATE */}
          <div style={{ background: 'rgba(18,28,72,0.4)', border: '1px solid rgba(74,95,212,0.2)', padding: 'clamp(36px,4vw,56px)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'start' }} className="about-story-grid">
              <div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a6fd4', marginBottom: '16px' }}>// Service 01</div>
                <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,3vw,34px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '0 0 20px' }}>Probate Assistance</h2>
                <div style={{ width: '28px', height: '2px', background: '#1E287F', marginBottom: '24px' }} />
                {['Estate Opening', 'Summary and Formal Probate', 'Heir Identification', 'Coordinated Claim Filing'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>
                  When a former property owner passes before claiming surplus funds or unclaimed property they were owed, those funds do not disappear. Rightful heirs retain the legal right to recover them — but doing so requires the estate to be properly opened through probate first.
                </p>
                <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>
                  Our licensed attorneys handle the full probate process on behalf of heirs and estate representatives. Whether a summary administration or formal probate is required, we open the estate, identify rightful heirs, and coordinate the surplus or unclaimed property claim simultaneously so nothing falls through the cracks and no deadlines are missed.
                </p>
                <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '20px' }}>
                  <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>
                    If a claim deadline is approaching and the estate is not yet open, contact us immediately. Acting quickly is critical to preserving the right to recover.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TIME EXTENSIONS */}
          <div style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.1)', padding: 'clamp(36px,4vw,56px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(40px,5vw,72px)', alignItems: 'start' }} className="about-story-grid">
              <div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a6fd4', marginBottom: '16px' }}>// Service 02</div>
                <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,3vw,34px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '0 0 20px' }}>Occupancy Time Extensions</h2>
                <div style={{ width: '28px', height: '2px', background: '#1E287F', marginBottom: '24px' }} />
                {['Writ of Possession Defense', 'Negotiated Move-Out Timeline', 'Direct Lender Negotiation', 'Dignified Transition Support'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>
                  After a foreclosure sale completes and the certificate of title transfers to the new owner, the former occupant may be served with a writ of possession — a court order requiring immediate vacation of the property. For many families, the timeline is impossible to meet without proper notice and time to arrange alternative housing.
                </p>
                <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>
                  Our licensed attorneys can contest the writ of possession, negotiate directly with the new owner or their counsel for a voluntary occupancy extension, and work to give you a reasonable, realistic timeline to relocate properly. The goal is a dignified, organized transition — not a forced removal.
                </p>
                <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '20px' }}>
                  <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>
                    If you have been served with a writ of possession or received a notice to vacate, contact us immediately. The sooner we respond, the more options are available.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* SURPLUS NOTE */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(48px,6vw,72px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', background: 'rgba(18,28,72,0.4)', border: '1px solid rgba(74,95,212,0.2)', padding: 'clamp(28px,4vw,40px)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a6fd4', marginBottom: '14px' }}>// Did the foreclosure generate surplus funds?</div>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(17px,2.5vw,22px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 12px' }}>You May Be Owed Money From the Sale.</h3>
          <p style={{ fontSize: '14px', color: '#8090b8', lineHeight: 1.9, margin: '0 0 18px' }}>If the foreclosure auction generated more than what was owed on the mortgage, surplus funds may be waiting in the clerk of court's office in your name. We handle time extensions and surplus recovery simultaneously — so you do not miss either opportunity.</p>
          <Link href="/services/foreclosure-surplus" style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a6fd4', textDecoration: 'none' }}>Learn about surplus recovery →</Link>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* CTA */}
      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Act immediately</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>Time Is Critical in Both Situations.</h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>Whether you need probate opened to protect a claim deadline or an attorney to respond to a writ of possession, contact us now. Our licensed attorneys are ready to evaluate your situation and move quickly.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Contact Us Now</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
        </div>
      </section>
    </main>
  )
}
