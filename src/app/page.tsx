import Link from 'next/link'
import Ticker from '@/components/Ticker'
import CounterBar from '@/components/CounterBar'

const services = [
  { id:'01', cat:'Foreclosure', title:'Foreclosure Surplus Funds', desc:'Your home sold for more than the debt owed. That overage is yours by law. We file, fight, and pull it from the court.', href:'/services/foreclosure-surplus' },
  { id:'02', cat:'Tax Deed', title:'Tax Deed Surplus & Overages', desc:'Tax sales generate excess proceeds every day. Most former owners never know. We find it before it escheats to the state.', href:'/services/tax-deed-surplus' },
  { id:'03', cat:'Proceeds', title:'Excess Proceeds Recovery', desc:'Any forced-sale overage belongs to the owner of record. We manage the entire legal process with strict deadline enforcement.', href:'/services/excess-proceeds' },
  { id:'04', cat:'Unclaimed', title:'Unclaimed Property Recovery', desc:'Billions held in state divisions. Bank accounts, insurance policies, wages. We locate and recover them nationwide.', href:'/services/unclaimed-property' },
  { id:'05', cat:'Estate', title:'Estate & Heir Recovery', desc:'Heirs of foreclosed homeowners are entitled to surplus. We handle probate coordination, heir ID, and claim filing.', href:'/services/estate-recovery' },
  { id:'06', cat:'Solutions', title:'Foreclosure Solutions', desc:'Still in the process? We may be able to preserve equity or explore alternatives before the auction date. Call now.', href:'/services/foreclosure-solutions' },
]

const whyUs = [
  { n:'01', title:'Zero Upfront — Ever', desc:'100% contingency. We only get paid when you get paid. No retainers, no risk, no catch.' },
  { n:'02', title:'We Find You First', desc:'We identify surplus before it escheats to the state. Most clients never knew money existed until we called.' },
  { n:'03', title:'Deadline-Driven Execution', desc:'Claim windows can be as short as 60 days. We track every case clock and never miss a filing date.' },
  { n:'04', title:'All 50 States. All Claim Types.', desc:'Foreclosure, tax deed, unclaimed property, estate. One firm. Nationwide. Total coverage.' },
]

const firmStats = [
  { val:'$0', desc:'Upfront cost to any client — ever. Pure contingency model.' },
  { val:'81+', desc:'County court systems actively monitored and scraped daily.' },
  { val:'50', desc:'States we recover funds in across all claim categories.' },
  { val:'FL · AZ · CO', desc:'Core active states expanding to GA, OH, NJ and beyond.', small: true },
  { val:'A+', desc:'BBB Accredited — Miami Beach, FL. Licensed & compliant.', blue: true },
]

const allStates = ['Florida','Arizona','Colorado','Georgia','Ohio','New Jersey','Texas','California','New York','Illinois','Pennsylvania','Michigan','N. Carolina','Virginia','Washington','Nevada','Tennessee','Indiana','Missouri','Maryland','Wisconsin','Minnesota','S. Carolina','Alabama']
const activeStates = ['Florida','Arizona','Colorado']

export default function Home() {
  return (
    <>
      <Ticker />

      {/* HERO */}
      <section style={{ minHeight:'calc(100vh - 96px)', background:'var(--bg)', display:'flex', flexDirection:'column', justifyContent:'center', padding:'64px 40px 52px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize:'52px 52px', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'5%', left:'-8%', width:'55%', height:'90%', background:'radial-gradient(ellipse 55% 65% at 15% 50%,rgba(30,40,127,0.15) 0%,transparent 70%)', pointerEvents:'none' }} />
        <div className="scan-animate" style={{ position:'absolute', left:0, right:0, height:'1px', background:'linear-gradient(90deg,transparent 0%,rgba(74,95,212,0.7) 50%,transparent 100%)', pointerEvents:'none' }} />

        <div style={{ position:'relative', zIndex:2, maxWidth:'1200px', width:'100%', margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'14px', marginBottom:'36px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'8px', padding:'5px 14px', border:'1px solid rgba(74,95,212,0.3)', background:'rgba(30,40,127,0.1)', fontFamily:"'Space Mono',monospace", fontSize:'9px', letterSpacing:'1.5px', textTransform:'uppercase', color:'#8fa3f0' }}>
              <span className="pulse-animate" style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--rcg2)', display:'inline-block' }} />
              Nationwide Surplus & Unclaimed Funds Recovery
            </div>
            <div style={{ width:'32px', height:'1px', background:'rgba(74,95,212,0.3)' }} />
            <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', letterSpacing:'1px', textTransform:'uppercase', color:'var(--dim)' }}>Miami Beach, FL — Licensed · BBB A+</div>
          </div>

          <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(50px,7vw,92px)', lineHeight:0.9, color:'#fff', letterSpacing:'-3px', marginBottom:'28px', maxWidth:'820px' }}>
            The Court Is<br />
            <span style={{ color:'var(--rcg2)' }}>Holding</span><br />
            <span style={{ WebkitTextStroke:'1px rgba(232,237,248,0.3)', color:'transparent' }}>Your Money.</span>
          </h1>

          <p style={{ fontSize:'16px', color:'var(--mid)', lineHeight:1.75, maxWidth:'500px', marginBottom:'40px' }}>
            Foreclosure. Tax sale. Unclaimed property. If funds were left behind after the forced sale of your home — <strong style={{ color:'#e8edf8', fontWeight:600 }}>that money is legally yours.</strong> We recover it in all 50 states. Zero upfront cost. Ever.
          </p>

          <div style={{ display:'flex', alignItems:'center', gap:'16px', flexWrap:'wrap' }}>
            <Link href="/contact" className="btn-primary">Check If You&apos;re Owed Money — Free</Link>
            <Link href="/resources/how-it-works" className="btn-secondary">See How It Works</Link>
            <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', letterSpacing:'0.8px', textTransform:'uppercase', color:'var(--dim)' }}>// No fees until we recover</span>
          </div>
        </div>
      </section>

      <CounterBar />

      {/* SERVICES */}
      <div style={{ background:'var(--bg)', padding:'80px 40px' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'40px', marginBottom:'48px', flexWrap:'wrap' }}>
            <div>
              <span className="section-tag">// what we recover</span>
              <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(30px,4vw,50px)', color:'#fff', letterSpacing:'-1.5px', lineHeight:0.95 }}>
                Every Dollar.<br /><span style={{ color:'var(--dim)' }}>Every Claim.</span>
              </h2>
            </div>
            <p style={{ fontSize:'14px', color:'var(--mid)', lineHeight:1.7, maxWidth:'480px', paddingTop:'8px' }}>
              Every category of courthouse-held and state-held funds — all claim types, all 50 states, 100% contingency. No exceptions.
            </p>
          </div>
          <div className="service-grid">
            {services.map(s => (
              <Link key={s.id} href={s.href} className="service-card">
                <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'8px', letterSpacing:'1.5px', textTransform:'uppercase', color:'var(--dim)', marginBottom:'14px' }}>{s.id} / {s.cat}</div>
                <div style={{ fontSize:'12px', fontWeight:700, letterSpacing:'0.8px', textTransform:'uppercase', color:'#fff', marginBottom:'8px', lineHeight:1.3 }}>{s.title}</div>
                <div style={{ fontSize:'12px', color:'var(--mid)', lineHeight:1.6 }}>{s.desc}</div>
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'var(--rcg2)', marginTop:'14px', display:'block', letterSpacing:'0.5px' }}>LEARN MORE →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* WHY US */}
      <div style={{ background:'var(--bg2)', borderTop:'1px solid rgba(74,95,212,0.3)', borderBottom:'1px solid rgba(74,95,212,0.3)', padding:'80px 40px' }}>
        <div className="why-grid">
          <div>
            <span className="section-tag">// why rebound capital group</span>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(30px,4vw,50px)', color:'#fff', letterSpacing:'-1.5px', lineHeight:0.95 }}>
              We Outwork<br />Every<br /><span style={{ color:'var(--dim)' }}>Competitor.</span>
            </h2>
            <div style={{ marginTop:'28px' }}>
              {whyUs.map((w, i) => (
                <div key={w.n} style={{ display:'grid', gridTemplateColumns:'36px 1fr', gap:'14px', padding:'18px 0', borderBottom:'1px solid rgba(74,95,212,0.3)', borderTop: i===0 ? '1px solid rgba(74,95,212,0.3)' : undefined }}>
                  <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color:'var(--rcg2)', paddingTop:'2px' }}>{w.n}</div>
                  <div>
                    <div style={{ fontSize:'12px', fontWeight:700, letterSpacing:'0.8px', textTransform:'uppercase', color:'#fff', marginBottom:'4px' }}>{w.title}</div>
                    <div style={{ fontSize:'12px', color:'var(--mid)', lineHeight:1.5 }}>{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="stats-panel">
            <div style={{ background:'var(--rcg3)', padding:'14px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(74,95,212,0.3)' }}>
              <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'var(--rcglt)' }}>FIRM STATISTICS</span>
              <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'8px', color:'var(--rcglt)', opacity:0.5 }}>LIVE DATA</span>
            </div>
            {firmStats.map((s, i) => (
              <div key={i} className="stats-row">
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize: s.small ? '15px' : '26px', minWidth:'80px', letterSpacing: s.small ? '0.5px' : '-1px', lineHeight:1, color: s.blue ? 'var(--rcg2)' : '#fff' }}>{s.val}</div>
                <div style={{ fontSize:'11px', color:'var(--mid)', lineHeight:1.4 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATES */}
      <div style={{ padding:'80px 40px', maxWidth:'1200px', margin:'0 auto' }}>
        <span className="section-tag">// coverage</span>
        <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(30px,4vw,50px)', color:'#fff', letterSpacing:'-1.5px', lineHeight:0.95 }}>
          All 50 States.<br /><span style={{ color:'var(--dim)' }}>Every County.</span>
        </h2>
        <p style={{ fontSize:'14px', color:'var(--mid)', lineHeight:1.7, marginTop:'12px', maxWidth:'480px' }}>Click any state to see local laws, deadlines, the full claim process, and county-level guides.</p>
        <div className="states-grid">
          {allStates.map(s => (
            <Link key={s} href={`/states/${s.toLowerCase().replace(/\s+/g,'-').replace('.','-')}`} className={`state-pill${activeStates.includes(s) ? ' active' : ''}`}>{s}</Link>
          ))}
        </div>
        <div style={{ marginTop:'10px', textAlign:'right', fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'var(--dim)' }}>
          + 26 more — <Link href="/map" style={{ color:'var(--rcg2)', textDecoration:'none' }}>View Full Interactive Unclaimed Funds Map →</Link>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-band">
        <div style={{ padding:'52px 56px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'40px', flexWrap:'wrap' }}>
          <div>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(24px,3.5vw,44px)', letterSpacing:'-1.5px', color:'#fff', marginBottom:'10px' }}>
              Money Was Left Behind<br />After Your <span style={{ color:'var(--rcg2)' }}>Foreclosure.</span>
            </h2>
            <p style={{ fontSize:'13px', color:'var(--mid)', maxWidth:'460px', lineHeight:1.6 }}>
              Surplus funds have hard legal deadlines — in many states as short as 60 days. Don&apos;t lose what&apos;s already yours. Free review, no obligation, zero upfront cost.
            </p>
          </div>
          <div style={{ display:'flex', gap:'12px', flexShrink:0 }}>
            <Link href="/contact" className="btn-primary">Free Claim Review</Link>
            <Link href="tel:+13058001234" className="btn-secondary">Call Us Now</Link>
          </div>
        </div>
      </div>
    </>
  )
}
