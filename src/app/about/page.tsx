import Link from 'next/link'


const stats = [
  { val: '$0', label: 'Upfront Cost — Ever' },
  { val: '1,000+', label: 'County Systems Monitored' },
  { val: 'A+', label: 'BBB Accredited Rating' },
  { val: '5→50', label: 'States Active & Expanding' },
]

const values = [
  { n: '01', title: 'No Recovery, No Fee', desc: 'Every engagement is 100% contingency. We absorb all costs, file all paperwork, and coordinate with attorneys — you pay nothing unless we deliver.' },
  { n: '02', title: 'We Come to You', desc: 'Most clients never knew money existed until we reached out. Our scraper monitors over 1,000 county court systems daily, identifying surplus before it escheats to the state.' },
  { n: '03', title: 'Licensed & Compliant', desc: 'Every claim is processed in partnership with licensed Florida attorneys and licensed private investigators. RCG does not practice law — we coordinate it.' },
  { n: '04', title: 'Deadline-Driven Execution', desc: 'Claim windows can close in as few as 60 days. We track every case clock across every active county and never miss a filing deadline.' },
]

const team = [
  { name: 'Raul Ibanez', title: 'Founder & President', note: 'Raul manages multiple residential and commercial real estate portfolios across South Florida, bringing deep transactional experience to every recovery case. His background in technology — including building proprietary skip tracing systems, automated court monitoring infrastructure, and data pipelines that track surplus funds across 1,000+ county systems — gives RCG a significant operational edge over traditional recovery firms.' },
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.2)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px) clamp(48px,6vw,80px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto' }}>
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#3a4f7a', display: 'block', marginBottom: '20px' }}>// Who We Are</span>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,5vw,64px)', color: '#fff', letterSpacing: 'clamp(-1.5px,-0.02em,-2.5px)', lineHeight: 1.05, margin: '0 0 12px' }}>Rebound Capital Group</h1>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 400, fontSize: 'clamp(15px,2vw,18px)', color: '#5878a8', letterSpacing: '0.5px', margin: '0 0 16px' }}>Established 2023 &mdash; Recovered Over $2 Million Returned to Clients</p>
          <p style={{ fontSize: 'clamp(13px,1.8vw,15px)', color: '#3a4f7a', lineHeight: 1.9, maxWidth: '520px', margin: '0 auto', fontWeight: 400, fontFamily: "'Space Mono',monospace", letterSpacing: '1px', textTransform: 'uppercase' as const }}>Miami Beach, FL &middot; Licensed &middot; BBB A+ Rated &middot; Contingency Only</p>
        </div>
      </section>

      <div style={{ background: '#0a0f1a', borderBottom: '1px solid rgba(30,40,127,0.15)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="about-stats-bar">
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '28px 24px', borderRight: i < 3 ? '1px solid rgba(74,95,212,0.12)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,3vw,32px)', color: '#4a7fd4', letterSpacing: '-1px', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a5f94', marginTop: '6px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ background: 'var(--bg)', padding: 'clamp(60px,7vw,100px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '100px' }}>
            <span className="section-tag">// Our Story</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,44px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '12px 0 24px' }}>Built From the<br /><span style={{ color: 'var(--dim)' }}>Ground Up.</span></h2>
            <div style={{ width: '40px', height: '2px', background: '#1E287F', marginBottom: '24px' }} />
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#3a4f7a', lineHeight: 2 }}>Miami Beach, FL<br />Est. Rebound Capital Group LLC<br />BBB Accredited &mdash; A+ Rating</p>
          </div>
          <div>
            <p style={{ fontSize: 'clamp(15px,1.8vw,17px)', color: '#a0b8d8', lineHeight: 1.95, marginBottom: '28px', fontWeight: 400 }}>Rebound Capital Group was founded by professionals with a deep background in real estate who spent years watching what happened to people after foreclosure and tax sales. The money was often still there. Sitting in courthouses. In state treasury accounts. Owed to the former owner by law. Most people never knew it existed and had no way to find it on their own.</p>
            <p style={{ fontSize: 'clamp(15px,1.8vw,17px)', color: '#a0b8d8', lineHeight: 1.95, marginBottom: '28px', fontWeight: 400 }}>We saw the gap clearly. Homeowners walking away from funds they were legally entitled to, not because they gave up, but because nobody told them the money was there. Third parties were swooping in to take advantage of that confusion. We built RCG to close that gap and put the money back where it belongs.</p>
            <p style={{ fontSize: 'clamp(15px,1.8vw,17px)', color: '#a0b8d8', lineHeight: 1.95, marginBottom: '28px', fontWeight: 400 }}>Our job is straightforward. We find the funds, we handle the filing, we work with licensed attorneys every step of the way, and we only get paid when you do. No upfront costs. No risk to the client. No fine print.</p>
            <p style={{ fontSize: 'clamp(15px,1.8vw,17px)', color: '#c8d8ff', lineHeight: 1.95, fontWeight: 500, borderLeft: '2px solid #1E287F', paddingLeft: '20px', marginBottom: '0' }}>Today RCG monitors over 1,000 county court systems, operates across five active states, and is expanding nationwide. Pure contingency. Always.</p>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.2),transparent)' }} />

      <section style={{ background: 'var(--bg)', padding: 'clamp(60px,7vw,100px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <span className="section-tag">// How We Operate</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,44px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '12px 0 0' }}>What Sets Us Apart.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2px' }} className="about-values-grid">
            {values.map((v) => (
              <div key={v.n} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.1)', padding: 'clamp(24px,3vw,36px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', color: '#2a3a60', marginBottom: '16px' }}>{v.n}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(16px,2vw,20px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 12px' }}>{v.title}</h3>
                <p style={{ fontSize: '14px', color: '#6a80b0', lineHeight: 1.85, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.2),transparent)' }} />

      <section style={{ background: 'var(--bg)', padding: 'clamp(60px,7vw,100px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="section-tag">// Leadership</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,44px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '12px 0 48px' }}>The Team Behind RCG.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px' }}>
            {team.map((m) => (
              <div key={m.name} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '32px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg,#1a2860,#0f1a40)', border: '1px solid rgba(74,127,212,0.3)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '20px', color: '#4a7fd4' }}>{m.name.split(' ').map((w: string) => w[0]).join('')}</span>
                </div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '18px', color: '#fff', marginBottom: '4px' }}>{m.name}</div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a6fd4', marginBottom: '16px' }}>{m.title}</div>
                <p style={{ fontSize: '13px', color: '#6a80b0', lineHeight: 1.85, margin: 0 }}>{m.note}</p>
              </div>
            ))}
            <div style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#3a4f7a', marginBottom: '16px' }}>// Accreditation</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '48px', color: '#4a7fd4', letterSpacing: '-2px', lineHeight: 1, marginBottom: '8px' }}>A+</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '15px', color: '#c8d8ff', marginBottom: '8px' }}>BBB Accredited Business</div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', color: '#4a5f94', lineHeight: 1.8 }}>Miami Beach, FL<br />Licensed &middot; Compliant &middot; Verified</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.2),transparent)' }} />

      <section style={{ background: '#000', padding: 'clamp(60px,7vw,100px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// No upfront cost. Ever.</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '16px 0 16px' }}>Think Money Was Left Behind?</h2>
          <p style={{ fontSize: '15px', color: '#6a80b0', lineHeight: 1.85, marginBottom: '36px' }}>We run a free search on your name and property. If there&apos;s a claim, we recover it. If there&apos;s nothing there, you owe us nothing.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Free Claim Review</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
