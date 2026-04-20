import Link from 'next/link'

const stats = [
  { val: '$0', label: 'Upfront Cost Ever' },
  { val: '1,000+', label: 'County Systems Monitored' },
  { val: 'A+', label: 'BBB Accredited Rating' },
  { val: '5→50', label: 'States Active & Expanding' },
]

const values = [
  { n: '01', title: 'No Recovery, No Fee', desc: 'Pure contingency. We absorb every cost, handle all filings, and coordinate licensed attorneys on your behalf. You pay nothing unless we put money in your hands.', highlight: true },
  { n: '02', title: 'We Find You First', desc: 'Most clients had no idea money existed until we called. Our system monitors over 1,000 county court systems daily and identifies surplus before deadlines close.', highlight: false },
  { n: '03', title: 'Licensed at Every Step', desc: 'Every claim runs through licensed Florida attorneys and licensed private investigators. RCG coordinates the process we do not practice law, and we never cut corners.', highlight: false },
  { n: '04', title: 'Deadline-Driven Execution', desc: 'Some claim windows close in 60 days. We track every deadline across every active county and have never missed a filing date on a signed case.', highlight: true },
]

export default function AboutPage() {
  return (
    <main>

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.22) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '36px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Miami Beach, FL · Est. 2023 · BBB A+ Rated</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,76px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rebound Capital </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Group</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '460px', margin: '0 auto', fontWeight: 400 }}>
            We recover funds left behind in court and state systems and return them to the people they belong to. Since 2023, over $2 million has been recovered for clients on a pure contingency basis.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
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

      {/* OUR STORY */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(48px,6vw,88px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '108px' }}>
            <span className="section-tag">// Our Story</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.5vw,46px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '14px 0 20px' }}>
              Built From the<br /><span style={{ color: 'var(--dim)' }}>Ground Up.</span>
            </h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Contingency Only Always', 'Licensed Attorneys on Every Claim', 'Active in FL · AZ · CO · OH · MI'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, fontWeight: 400, margin: 0 }}>
              Rebound Capital Group was founded by professionals with a deep background in real estate who spent years watching what happened to people after foreclosure and tax sales. The money was often still there sitting in courthouses, in state treasury accounts, legally owed to the former owner. Most people never knew it existed.
            </p>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, fontWeight: 400, margin: 0 }}>
              We saw the gap clearly. Homeowners walking away from funds they were entitled to not because they gave up, but because nobody told them the money was there. Third parties were exploiting that confusion. We built RCG to close the gap and put the money back where it belongs.
            </p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px', paddingTop: '4px', paddingBottom: '4px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>
                Our job is simple: find the funds, handle every filing, work with licensed attorneys at every step, and only get paid when you do. No upfront costs. No fine print. No exceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* WHAT SETS US APART */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-tag">// How We Operate</span>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.5vw,46px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '14px 0 0' }}>What Sets Us Apart.</h2>
            </div>
            <p style={{ fontSize: '13px', color: '#4a5f80', lineHeight: 1.7, maxWidth: '260px', fontFamily: "'Space Mono',monospace", letterSpacing: '0.5px' }}>Four commitments we make to every client and have never broken.</p>
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

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* LEADERSHIP */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <span className="section-tag">// Leadership</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.5vw,46px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '14px 0 48px' }}>The Team Behind RCG.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px', alignItems: 'start' }} className="about-story-grid">

            {/* Founder card */}
            <div style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.18)', padding: '40px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,rgba(74,95,212,0.15))' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '28px' }}>
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg,#1a2860,#0f1a40)', border: '1px solid rgba(74,127,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '20px', color: '#4a7fd4' }}>RI</span>
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '20px', color: '#fff', marginBottom: '5px' }}>Raul Ibanez</div>
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a6fd4' }}>Founder &amp; President</div>
                </div>
              </div>

              <p style={{ fontSize: '14px', color: '#6a80b0', lineHeight: 1.95, margin: '0 0 20px' }}>
                Born and raised in Miami, Florida, Raul grew up around real estate and learned early how property, ownership, and financial claims intersect in the real world. Being bilingual in both English and Spanish, he developed the ability to work closely with a wide range of clients, professionals, and communities.
              </p>
              <p style={{ fontSize: '14px', color: '#6a80b0', lineHeight: 1.95, margin: '0 0 20px' }}>
                Over the years, he built hands-on experience across real estate transactions, recovery matters, and claim-related work, collaborating directly with respected attorneys and private investigators on cases ranging from local disputes to more complex national and international matters.
              </p>
              <p style={{ fontSize: '14px', color: '#6a80b0', lineHeight: 1.95, margin: '0 0 24px' }}>
                That background gave him a practical understanding of how different forms of unclaimed funds are identified, pursued, and recovered from foreclosure surplus and tax deed overages to state-held property, estate claims, and other asset recovery matters.
              </p>

              <div style={{ borderLeft: '2px solid rgba(74,95,212,0.3)', paddingLeft: '18px', marginBottom: '28px' }}>
                <p style={{ fontSize: '14px', color: '#a0b8d8', lineHeight: 1.9, margin: 0, fontStyle: 'italic' }}>
                  &ldquo;Today, that experience shapes how RCG operates: grounded, informed, and built to recover what rightfully belongs to the client.&rdquo;
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Foreclosure Surplus', 'Tax Deed Overages', 'Estate & Heir Recovery', 'Unclaimed Property', 'Licensed Attorney Relations', 'Bilingual EN · ES'].map((tag) => (
                  <span key={tag} style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a5080', border: '1px solid rgba(74,95,212,0.15)', padding: '5px 10px' }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '32px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#3a4f7a', marginBottom: '16px' }}>// BBB Accreditation</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '56px', color: '#4a7fd4', letterSpacing: '-2px', lineHeight: 1 }}>A+</div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '14px', color: '#c8d8ff' }}>BBB Accredited</div>
                    <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', color: '#4a5f94', letterSpacing: '1px', textTransform: 'uppercase' }}>Since 2023</div>
                  </div>
                </div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', color: '#3a4f6a', lineHeight: 2, textTransform: 'uppercase' }}>
                  Miami Beach, FL<br />Licensed · Compliant · Verified
                </div>
              </div>

              <div style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.1)', padding: '28px' }}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#3a4f7a', marginBottom: '20px' }}>// Firm Stats</div>
                {[
                  { val: '$2M+', label: 'Recovered for clients' },
                  { val: '1,000+', label: 'County systems monitored' },
                  { val: '5 States', label: 'Active expanding to 50' },
                  { val: '30d', label: 'Avg. claim turnaround' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: i < 3 ? '1px solid rgba(74,95,212,0.07)' : 'none' }}>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f6a' }}>{item.label}</span>
                    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '15px', color: '#4a7fd4', letterSpacing: '-0.5px' }}>{item.val}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(20,32,80,0.4)', border: '1px solid rgba(74,95,212,0.15)', padding: '24px' }}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#3a4f7a', marginBottom: '14px' }}>// Claim Types We Handle</div>
                {['Foreclosure Surplus Funds', 'Tax Deed Overages', 'State-Held Unclaimed Property', 'Estate & Heir Recovery', 'Excess Proceeds', 'Business Asset Recovery'].map((type, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', borderBottom: i < 5 ? '1px solid rgba(74,95,212,0.06)' : 'none' }}>
                    <div style={{ width: '3px', height: '3px', background: '#1E287F', flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', color: '#6a80b0' }}>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* CTA */}
      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Work With Us</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,50px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>
            You Do Not Need to Figure This Out Alone.
          </h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '40px' }}>
            We have done this hundreds of times. If there are funds owed to you from a foreclosure, a tax sale, or a state treasury we will find them, file for them, and recover them. You pay nothing unless we succeed.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Start a Free Claim Review</Link>
            <Link href="/resources/how-it-works" className="btn-secondary">See How It Works</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
