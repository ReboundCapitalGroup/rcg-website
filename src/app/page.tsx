import Link from 'next/link'
import Ticker from '@/components/Ticker'
import CounterBar from '@/components/CounterBar'

const services = [
  { id:'01', cat:'Foreclosure Recovery', title:'Foreclosure Surplus & Overages', desc:'When a property sells for more than the debt owed, the overage belongs to the former owner by law. We file and recover courthouse-held surplus funds across all active states.', href:'/services/foreclosure-surplus', tag: 'Core Service' },
  { id:'02', cat:'Tax Deed Recovery', title:'Tax Deed & Excess Proceeds', desc:'Tax sales generate excess proceeds daily. Most former owners never know the money exists. We locate it, file before deadlines, and pull every dollar before it escheats to the state.', href:'/services/tax-deed-surplus', tag: 'Core Service' },
  { id:'03', cat:'Unclaimed Property', title:'State-Held & Unclaimed Assets', desc:'Dormant bank accounts, uncashed checks, insurance payouts, utility deposits. Billions sit in state treasury divisions. We search, locate, and recover on your behalf — nationwide.', href:'/services/unclaimed-property', tag: 'Nationwide' },
  { id:'04', cat:'Estate & Heir Recovery', title:'Probate, Heirs & Estate Claims', desc:'Heirs and estates are often entitled to surplus funds they never knew existed. We coordinate probate documentation, identify rightful heirs, and manage the full claim process.', href:'/services/estate-recovery', tag: 'Specialized' },
  { id:'05', cat:'Business & Trust Recovery', title:'LLC, Trust & Business Assets', desc:'Unclaimed property held under business names, dissolved entities, or trust accounts. We recover assets from dormant LLCs, closed corporations, and inactive trusts.', href:'/services/business-asset-recovery', tag: 'Specialized' },
  { id:'06', cat:'Foreclosure Solutions', title:'Pre-Sale & Property Options', desc:'Still in the foreclosure process? We may be able to preserve equity, explore mortgage assumptions, connect you with buyers, or structure a cash offer before the auction date.', href:'/services/cash-offer', tag: 'Pre-Foreclosure' },
]

const whyUs = [
  { n:'01', title:'Zero Upfront — Ever', desc:'100% contingency. We only get paid when you get paid. No retainers, no risk, no catch.' },
  { n:'02', title:'We Find You First', desc:'We identify surplus before it escheats to the state. Most clients never knew money existed until we called.' },
  { n:'03', title:'Deadline-Driven Execution', desc:'Claim windows can be as short as 60 days. We track every case clock and never miss a filing date.' },
  { n:'04', title:'All 50 States. All Claim Types.', desc:'Foreclosure, tax deed, unclaimed property, estate. One firm. Nationwide. Total coverage.' },
]

const firmStats = [
  { val:'$0', desc:'Upfront cost to any client — ever. Pure contingency model.' },
  { val:'1,000+', desc:'County court systems actively monitored and scraped daily.' },
  { val:'5 → 50', desc:'Active states now. FL, AZ, CO, OH, MI live today.', small: true },
  { val:'5 States', desc:'FL · AZ · CO · OH · MI — live court monitoring. Expanding nationwide.', small: true },
  { val:'A+', desc:'BBB Accredited — Miami Beach, FL. Licensed & compliant.', blue: true },
]

const allStates = ['Florida','Arizona','Colorado','Georgia','Ohio','New Jersey','Texas','California','New York','Illinois','Pennsylvania','Michigan','N. Carolina','Virginia','Washington','Nevada','Tennessee','Indiana','Missouri','Maryland','Wisconsin','Minnesota','S. Carolina','Alabama']
const activeStates = ['Florida','Arizona','Colorado','Ohio','Michigan']

const heroStyle: React.CSSProperties = {
  background: 'var(--bg)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 24px',
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'center',
  minHeight: 'calc(100vh - 88px)',
}

export default function Home() {
  return (
    <>
      <Ticker />

      {/* HERO */}
      <section style={heroStyle}>
        {/* Grid */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(74,95,212,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.05) 1px,transparent 1px)', backgroundSize:'52px 52px', pointerEvents:'none' }} />
        {/* Center glow */}
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'700px', height:'500px', background:'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 70%)', pointerEvents:'none' }} />
        {/* Scan line */}
        <div className="scan-animate" style={{ position:'absolute', left:0, right:0, height:'1px', background:'linear-gradient(90deg,transparent,rgba(74,95,212,0.6),transparent)', pointerEvents:'none' }} />

        <div style={{ position:'relative', zIndex:2, width:'100%', maxWidth:'780px' }}>
          {/* Badge */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', marginBottom:'24px', flexWrap:'wrap' }}>
            <span className="pulse-animate" style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#1E287F', display:'inline-block', flexShrink:0 }} />
            <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'8px', letterSpacing:'1.5px', textTransform:'uppercase', color:'#5a6890', whiteSpace:'nowrap' as const }}>FL · AZ · CO · OH · MI · Expanding Nationwide · BBB A+</span>
          </div>

          {/* Headline — two clean lines */}
          <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(28px,5vw,60px)', lineHeight:1.08, color:'#fff', letterSpacing:'clamp(-1px,-0.15em,-2px)', margin:'0 0 20px', textAlign:'center' }}>
            Turning <span style={{ color:'#ffffff' }}>Forgotten Funds</span>
            <br />
            <span style={{ whiteSpace:'nowrap' as const }}>Into <span style={{ color:'#344f8a', letterSpacing:'-0.5px', fontWeight:600 }}>Future Opportunities.</span></span>
          </h1>

          {/* Subtext — 3 clean lines matching notepad layout */}
          <p style={{ fontSize:'clamp(14px,3.5vw,15px)', color:'#a8bedd', lineHeight:1.85, maxWidth:'600px', width:'100%', margin:'0 auto 28px', fontWeight:400, textAlign:'center', padding:'0 4px' }}>
            Foreclosure surplus. Tax deed overages. Unclaimed property. State&#8209;held funds. If money was left behind, <strong style={{ color:'#ffffff', fontWeight:700 }}>it legally belongs to you.</strong> We recover it across FL, AZ, CO, OH, MI and expanding. <strong style={{ color:'#ffffff', fontWeight:700 }}>Zero upfront cost. Ever.</strong>
          </p>

          {/* CTAs */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'14px', flexWrap:'wrap' }}>
            <Link href="/contact" className="btn-primary hero-cta-main" style={{ background:'linear-gradient(180deg,#1a2860 0%,#0f1a40 100%)', border:'1px solid rgba(74,127,212,0.35)', boxShadow:'0 0 24px rgba(20,35,100,0.5), 0 4px 0 rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07)', letterSpacing:'1px', padding:'16px 32px', whiteSpace:'nowrap' as const }}>Check If You&apos;re Owed Money — Free</Link>
            <Link href="/resources/how-it-works" className="btn-secondary" style={{ background:'linear-gradient(180deg,#1a1f2e 0%,#0f1218 100%)', border:'1px solid rgba(74,127,212,0.2)', color:'#7090c0', boxShadow:'0 4px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)', letterSpacing:'1px', padding:'16px 32px' }}>See How It Works</Link>
            <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', letterSpacing:'1px', textTransform:'uppercase', color:'#5a6890' }}>// No fees until we recover</span>
          </div>
        </div>
      </section>

      <CounterBar />

      {/* SERVICES */}
      <div style={{ background:'var(--bg)', padding:'clamp(40px,6vw,80px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'40px', marginBottom:'48px', flexWrap:'wrap' }}>
            <div>
              <span className="section-tag">// what we recover</span>
              <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(24px,4vw,50px)', color:'#fff', letterSpacing:'-1px', lineHeight:1.0 }}>
                Full Recovery.<br /><span style={{ color:'var(--dim)' }}>Every Claim Type.</span>
              </h2>
            </div>
            <p style={{ fontSize:'14px', color:'var(--mid)', lineHeight:1.7, maxWidth:'480px', paddingTop:'8px' }}>
              Foreclosure surplus. Tax deed overages. Unclaimed assets. Estate recovery. Business and trust claims. Every dollar we recover is on a pure contingency basis — nothing out of pocket, ever.
            </p>
          </div>
          <div className="service-grid">
            {services.map(s => (
              <Link key={s.id} href={s.href} className="service-card">
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'20px' }}>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'8px', letterSpacing:'2px', textTransform:'uppercase', color:'var(--dim)' }}>{s.id}</span>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'7px', letterSpacing:'1.5px', textTransform:'uppercase', color:'rgba(74,127,212,0.5)', border:'1px solid rgba(74,127,212,0.2)', padding:'2px 7px' }}>{(s as any).tag}</span>
                </div>
                <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'8px', letterSpacing:'2px', textTransform:'uppercase', color:'var(--rcg2)', marginBottom:'10px', opacity:0.7 }}>{s.cat}</div>
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'16px', fontWeight:700, letterSpacing:'-0.3px', color:'#fff', marginBottom:'12px', lineHeight:1.2 }}>{s.title}</div>
                <div style={{ fontSize:'13px', color:'var(--mid)', lineHeight:1.7, flexGrow:1 }}>{s.desc}</div>
                <div style={{ marginTop:'20px', display:'flex', alignItems:'center', gap:'8px' }}>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', letterSpacing:'1.5px', textTransform:'uppercase', color:'var(--rcg2)' }}>Explore</span>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'var(--rcg2)' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* WHY US */}
      <div style={{ background:'var(--bg2)', borderTop:'1px solid rgba(74,95,212,0.3)', borderBottom:'1px solid rgba(74,95,212,0.3)', padding:'clamp(40px,6vw,80px) clamp(16px,4vw,40px)' }}>
        <div className="why-grid">
          <div>
            <span className="section-tag">// why rebound capital group</span>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(24px,4vw,50px)', color:'#fff', letterSpacing:'-1px', lineHeight:1.0 }}>
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
        <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(24px,4vw,50px)', color:'#fff', letterSpacing:'-1px', lineHeight:1.0 }}>
          Coming to All 50 States.<br /><span style={{ color:'var(--dim)', whiteSpace:'nowrap' as const }}>FL · AZ · CO · OH · MI Active Now</span>
        </h2>
        <p style={{ fontSize:'14px', color:'var(--mid)', lineHeight:1.7, marginTop:'12px', maxWidth:'480px' }}>Currently active in Florida, Arizona, Colorado, Ohio, and Michigan with live court monitoring. Expanding to all 50 states.</p>
        <div className="states-grid">
          {allStates.map(s => (
            <Link key={s} href={`/states/${s.toLowerCase().replace(/\s+/g,'-').replace('.','-')}`} className={`state-pill${activeStates.includes(s) ? ' active' : ''}`}>{s}</Link>
          ))}
        </div>
        <div style={{ marginTop:'10px', textAlign:'right', fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'var(--dim)' }}>
          + 26 more — <Link href="/map" style={{ color:'#1E287F', textDecoration:'none' }}>View Full Interactive Unclaimed Funds Map →</Link>
        </div>
      </div>

      {/* CTA BAND */}
      <div className="cta-band">
        <div style={{ padding:'52px 56px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'40px', flexWrap:'wrap' }}>
          <div>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(24px,3.5vw,44px)', letterSpacing:'-1.5px', color:'#fff', marginBottom:'10px' }}>
              Money Was Left Behind<br />After Your <span style={{ color:'#1E287F' }}>Foreclosure.</span>
            </h2>
            <p style={{ fontSize:'13px', color:'var(--mid)', maxWidth:'460px', lineHeight:1.6 }}>
              Surplus funds have hard legal deadlines — in many states as short as 60 days. Don&apos;t lose what&apos;s already yours.
            </p>
          </div>
          <div style={{ display:'flex', gap:'12px', flexShrink:0 }}>
            <Link href="/contact" className="btn-primary" style={{ background:'linear-gradient(180deg,#1a2860 0%,#0f1a40 100%)', border:'1px solid rgba(74,127,212,0.35)', boxShadow:'0 0 24px rgba(20,35,100,0.5), 0 4px 0 rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07)', letterSpacing:'1.2px', padding:'16px 40px' }}>Free Claim Review</Link>
            <Link href="tel:+13058001234" className="btn-secondary" style={{ background:'linear-gradient(180deg,#1a1f2e 0%,#0f1218 100%)', border:'1px solid rgba(74,127,212,0.2)', color:'#7090c0', boxShadow:'0 4px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)', letterSpacing:'1px', padding:'16px 32px' }}>Call Us Now</Link>
          </div>
        </div>
      </div>
    </>
  )
}
