import Link from 'next/link'

const stats = [
  { val: '$0', label: 'Upfront Cost — Ever' },
  { val: '1,000+', label: 'County Systems Monitored' },
  { val: 'A+', label: 'BBB Accredited Rating' },
  { val: '5→50', label: 'States Active & Expanding' },
]

const values = [
  { n: '01', title: 'No Recovery, No Fee', desc: 'Pure contingency. We absorb every cost, handle all filings, and coordinate licensed attorneys on your behalf. You pay nothing unless we put money in your hands.', highlight: true },
  { n: '02', title: 'We Find You First', desc: 'Most clients had no idea money existed until we called. Our system monitors over 1,000 county court systems daily and identifies surplus before deadlines close.', highlight: false },
  { n: '03', title: 'Licensed at Every Step', desc: 'Every claim runs through licensed Florida attorneys and licensed private investigators. RCG coordinates the process — we do not practice law, and we never cut corners.', highlight: false },
  { n: '04', title: 'Deadline-Driven Execution', desc: 'Some claim windows close in 60 days. We track every deadline across every active county and have never missed a filing date on a signed case.', highlight: true },
]

const team = [
  { name: 'Raul Ibanez', title: 'Founder & President', note: 'Raul manages multiple residential and commercial real estate portfolios across South Florida, bringing deep transactional experience to every recovery case. His background in technology — including building proprietary skip tracing systems, automated court monitoring infrastructure, and data pipelines tracking surplus funds across 1,000+ county systems — gives RCG a significant operational edge over traditional recovery firms.', tags: ['Real Estate Portfolios', 'Skip Trace Systems', 'Court Data Infrastructure'] },
]

export default function AboutPage() {
  return (
    <main>
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,60px) clamp(56px,7vw,88px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.16) 0%, transparent 68%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '28px', padding: '6px 16px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.08)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Miami Beach, FL · Est. 2023 · BBB A+ Rated</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(36px,5.5vw,68px)', color: '#fff', letterSpacing: '-2px', lineHeight: 1.02, margin: '0 0 20px' }}>Rebound Capital Group</h1>
          <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: '#6a80b0', lineHeight: 1.75, maxWidth: '540px', margin: '0 auto', fontWeight: 400 }}>We find surplus funds that courts and state agencies are holding in your name — and we recover them on a pure contingency basis. Over $2 million returned to clients since 2023.</p>
        </div>
      </section>

      <div style={{ background: '#080d1a', borderBottom: '1px solid rgba(30,40,127,0.12)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="about-stats-bar">
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < 3 ? '1px solid rgba(74,95,212,0.1)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(24px,3vw,36px)', color: '#4a7fd4', letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '8px' }}>{s.val}</div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#3a4f7a' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(48px,6vw,88px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '108px' }}>
            <span className="section-tag">// Our Story</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.5vw,46px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '14px 0 20px' }}>Built to Fix<br /><span style={{ color: 'var(--dim)' }}>a Broken System.</span></h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Contingency Only — Always', 'Licensed Attorneys on Every Claim', 'Active in FL · AZ · CO · OH · MI'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, fontWeight: 400, margin: 0 }}>Rebound Capital Group was founded by professionals with a deep background in real estate who spent years watching what happened to people after foreclosure and tax sales. The money was often still there — sitting in courthouses, in state treasury accounts, legally owed to the former owner. Most people never knew it existed.</p>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, fontWeight: 400, margin: 0 }}>We saw the gap clearly. Homeowners walking away from funds they were entitled to — not because they gave up, but because nobody told them the money was there. Third parties were exploiting that confusion. We built RCG to close the gap and put the money back where it belongs.</p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px', paddingTop: '4px', paddingBottom: '4px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>Our job is simple: find the funds, handle every filing, work with licensed attorneys at every step, and only get paid when you do. No upfront costs. No fine print. No exceptions.</p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-tag">// How We Operate</span>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.5vw,46px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '14px 0 0' }}>What Sets Us Apart.</h2>
            </div>
            <p style={{ fontSize: '13px', color: '#4a5f80', lineHeight: 1.7, maxWidth: '280px', fontFamily: "'Space Mono',monospace", letterSpacing: '0.5px' }}>Four commitments we make to every client — and have never broken.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2px' }} className="about-values-grid">
            {values.map((v) => (
              <div key={v.n} style={{ background: v.highlight ? 'rgba(20,32,80,0.6)' : '#0a0f1a', border: `1px solid ${v.highlight ? 'rgba(74,95,212,0.25)' : 'rgba(74,95,212,0.08)'}`, padding: 'clamp(28px,3vw,40px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: v.highlight ? 'linear-gradient(90deg,#1E287F,rgba(74,95,212,0.2))' : 'linear-gradient(90deg,rgba(30,40,127,0.3),transparent)' }} />
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: v.highlight ? '#4a6fd4' : '#2a3a60', marginBottom: '20px' }}>{v.n}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(17px,2vw,22px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 14px', lineHeight: 1.2 }}>{v.title}</h3>
                <p style={{ fontSize: '14px', color: v.highlight ? '#8090b8' : '#506080', lineHeight: 1.9, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <span className="section-tag">// Leadership</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.5vw,46px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '14px 0 48px' }}>The Team Behind RCG.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px', alignItems: 'start' }} className="about-story-grid">
            {team.map((m) => (
              <div key={m.name} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '36px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ width: '52px', height: '52px', background: 'linear-gradient(135deg,#1a2860,#0f1a40)', border: '1px solid rgba(74,127,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '18px', color: '#4a7fd4' }}>{m.name.split(' ').map((w: string) => w[0]).join('')}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '18px', color: '#fff', marginBottom: '4px' }}>{m.name}</div>
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a6fd4' }}>{m.title}</div>
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: '#6a80b0', lineHeight: 1.9, margin: '0 0 24px' }}>{m.note}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {m.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a5080', border: '1px solid rgba(74,95,212,0.15)', padding: '5px 10px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '32px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#3a4f7a', marginBottom: '16px' }}>// BBB Accreditation</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '52px', color: '#4a7fd4', letterSpacing: '-2px', lineHeight: 1 }}>A+</div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '14px', color: '#c8d8ff' }}>BBB Accredited</div>
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', color: '#4a5f94', letterSpacing: '1px', textTransform: 'uppercase' }}>Since 2023</div>
                  </div>
                </div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', color: '#3a4f6a', lineHeight: 2, textTransform: 'uppercase' }}>Miami Beach, FL<br />Licensed · Compliant · Verified</div>
              </div>
              <div style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.1)', padding: '28px' }}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#3a4f7a', marginBottom: '20px' }}>// By The Numbers</div>
                {[
                  { val: '$2M+', label: 'Recovered for clients' },
                  { val: '1,000+', label: 'County systems monitored' },
                  { val: '5 States', label: 'Active — expanding to 50' },
                  { val: '30d', label: 'Avg. claim turnaround' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 3 ? '1px solid rgba(74,95,212,0.07)' : 'none' }}>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f6a' }}>{item.label}</span>
                    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '15px', color: '#4a7fd4', letterSpacing: '-0.5px' }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Work With Us</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,50px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>You Do Not Need to Figure This Out Alone.</h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '40px' }}>We have done this hundreds of times. If there are funds owed to you — from a foreclosure, a tax sale, or a state treasury — we will find them, file for them, and recover them. You pay nothing unless we succeed.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Start a Free Claim Review</Link>
            <Link href="/resources/how-it-works" className="btn-secondary">See How It Works</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
