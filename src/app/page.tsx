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
  { val:'FL·AZ·CO', desc:'Core active states expanding to GA, OH, NJ and beyond.', small: true },
  { val:'A+', desc:'BBB Accredited — Miami Beach, FL. Licensed & compliant.', blue: true },
]

const allStates = ['Florida','Arizona','Colorado','Georgia','Ohio','New Jersey','Texas','California','New York','Illinois','Pennsylvania','Michigan','N. Carolina','Virginia','Washington','Nevada','Tennessee','Indiana','Missouri','Maryland','Wisconsin','Minnesota','S. Carolina','Alabama']
const activeStates = ['Florida','Arizona','Colorado']

export default function Home() {
  return (
    <>
      <Ticker />

      {/* HERO */}
      <section className="relative overflow-hidden flex flex-col justify-center" style={{ minHeight: 'calc(100vh - 96px)', background: 'var(--bg)', padding: '64px 40px 52px' }}>
        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px' }} />
        {/* Glow */}
        <div className="absolute pointer-events-none" style={{ top:'5%',left:'-8%',width:'55%',height:'90%',background:'radial-gradient(ellipse 55% 65% at 15% 50%,rgba(30,40,127,0.15) 0%,transparent 70%)' }} />
        {/* Scan */}
        <div className="absolute left-0 right-0 h-px pointer-events-none animate-scan" style={{ background: 'linear-gradient(90deg,transparent 0%,rgba(74,95,212,0.7) 50%,transparent 100%)' }} />

        <div className="relative z-10 max-w-[1200px] w-full mx-auto">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-9">
            <div className="flex items-center gap-2 px-3 py-1.5 text-[9px] tracking-[1.5px] uppercase border" style={{ fontFamily:'var(--mono)', color:'var(--rcglt)', borderColor:'var(--rcgline)', background:'rgba(30,40,127,0.1)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulsedot" style={{ background:'var(--rcg2)' }} />
              Nationwide Surplus & Unclaimed Funds Recovery
            </div>
            <div className="w-8 h-px" style={{ background:'var(--rcgline)' }} />
            <div className="text-[9px] tracking-[1px] uppercase" style={{ fontFamily:'var(--mono)', color:'var(--dim)' }}>Miami Beach, FL — Licensed · BBB A+</div>
          </div>

          {/* H1 */}
          <h1 className="font-bold mb-7" style={{ fontFamily:'var(--sans)', fontSize:'clamp(50px,7vw,92px)', lineHeight:0.9, color:'var(--bright)', letterSpacing:'-3px', maxWidth:'820px' }}>
            The Court Is<br />
            <span style={{ color:'var(--rcg2)' }}>Holding</span><br />
            <span style={{ WebkitTextStroke:'1px rgba(232,237,248,0.3)', color:'transparent' }}>Your Money.</span>
          </h1>

          <p className="mb-10" style={{ fontSize:'16px', color:'var(--mid)', lineHeight:1.75, maxWidth:'500px' }}>
            Foreclosure. Tax sale. Unclaimed property. If funds were left behind after the forced sale of your home — <strong style={{ color:'#e8edf8', fontWeight:600 }}>that money is legally yours.</strong> We recover it in all 50 states. Zero upfront cost. Ever.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/contact" className="btn-metal text-white font-bold tracking-wide uppercase px-9 py-4 cursor-pointer" style={{ fontFamily:'var(--sans)', fontSize:'13px', letterSpacing:'0.8px' }}>
              Check If You&apos;re Owed Money — Free
            </Link>
            <Link href="/resources/how-it-works" className="btn-ghost font-semibold tracking-wide uppercase px-6 py-4 cursor-pointer" style={{ fontFamily:'var(--sans)', fontSize:'12px', letterSpacing:'0.8px' }}>
              See How It Works
            </Link>
            <span className="text-[9px] tracking-[0.8px] uppercase" style={{ fontFamily:'var(--mono)', color:'var(--dim)' }}>// No fees until we recover</span>
          </div>
        </div>
      </section>

      <CounterBar />

      {/* SERVICES */}
      <div style={{ background:'var(--bg)' }}>
        <div className="max-w-[1200px] mx-auto px-10 py-20">
          <div className="flex items-start justify-between gap-10 mb-12 flex-wrap">
            <div>
              <div className="section-tag">// what we recover</div>
              <h2 className="section-title">Every Dollar.<br /><span className="fade" style={{ color:'var(--dim)' }}>Every Claim.</span></h2>
            </div>
            <p className="text-[14px] leading-relaxed max-w-[480px] mt-2" style={{ color:'var(--mid)' }}>
              Every category of courthouse-held and state-held funds — all claim types, all 50 states, 100% contingency. No exceptions.
            </p>
          </div>
          <div className="service-grid">
            {services.map(s => (
              <Link key={s.id} href={s.href} className="scard block px-7 py-8 no-underline">
                <div className="text-[8px] tracking-[1.5px] uppercase mb-3.5" style={{ fontFamily:'var(--mono)', color:'var(--dim)' }}>{s.id} / {s.cat}</div>
                <div className="text-[12px] font-bold tracking-[0.8px] uppercase mb-2 leading-snug" style={{ color:'var(--bright)' }}>{s.title}</div>
                <div className="text-[12px] leading-relaxed" style={{ color:'var(--mid)' }}>{s.desc}</div>
                <span className="text-[9px] mt-3.5 block tracking-[0.5px]" style={{ fontFamily:'var(--mono)', color:'var(--rcg2)' }}>LEARN MORE →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* WHY US */}
      <div style={{ background:'var(--bg2)', borderTop:'1px solid var(--rcgline)', borderBottom:'1px solid var(--rcgline)', padding:'80px 40px' }}>
        <div className="max-w-[1200px] mx-auto grid gap-18" style={{ gridTemplateColumns:'1fr 1fr', gap:'72px', alignItems:'start' }}>
          <div>
            <div className="section-tag">// why rebound capital group</div>
            <h2 className="section-title">We Outwork<br />Every<br /><span style={{ color:'var(--dim)' }}>Competitor.</span></h2>
            <div className="mt-7">
              {whyUs.map((w,i) => (
                <div key={w.n} className="grid py-4.5" style={{ gridTemplateColumns:'36px 1fr', gap:'14px', padding:'18px 0', borderBottom:'1px solid var(--rcgline)', borderTop: i===0 ? '1px solid var(--rcgline)' : undefined }}>
                  <div className="text-[10px] pt-0.5" style={{ fontFamily:'var(--mono)', color:'var(--rcg2)' }}>{w.n}</div>
                  <div>
                    <div className="text-[12px] font-bold tracking-[0.8px] uppercase mb-1" style={{ color:'var(--bright)' }}>{w.title}</div>
                    <div className="text-[12px] leading-snug" style={{ color:'var(--mid)' }}>{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ border:'1px solid var(--rcgline)' }}>
            <div className="flex items-center justify-between px-5 py-3.5" style={{ background:'var(--rcg3)', borderBottom:'1px solid var(--rcgline)' }}>
              <span className="text-[9px] font-bold tracking-[2px] uppercase" style={{ fontFamily:'var(--mono)', color:'var(--rcglt)' }}>FIRM STATISTICS</span>
              <span className="text-[8px] opacity-50" style={{ fontFamily:'var(--mono)', color:'var(--rcglt)' }}>LIVE DATA</span>
            </div>
            {firmStats.map((s,i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--rcgglow)]" style={{ borderBottom: i < firmStats.length-1 ? '1px solid var(--rcgline)' : 'none' }}>
                <div className="font-bold min-w-[80px] leading-none" style={{ fontFamily:'var(--sans)', fontSize: s.small ? '15px' : '26px', letterSpacing: s.small ? '0.5px' : '-1px', color: s.blue ? 'var(--rcg2)' : 'var(--bright)' }}>{s.val}</div>
                <div className="text-[11px] leading-snug" style={{ color:'var(--mid)' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATES */}
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="section-tag">// coverage</div>
        <h2 className="section-title">All 50 States.<br /><span style={{ color:'var(--dim)' }}>Every County.</span></h2>
        <p className="text-[14px] leading-relaxed mt-3 max-w-[480px]" style={{ color:'var(--mid)' }}>Click any state to see local laws, deadlines, the full claim process, and county-level guides.</p>
        <div className="grid mt-7" style={{ gridTemplateColumns:'repeat(8,1fr)', gap:'4px' }}>
          {allStates.map(s => (
            <Link key={s} href={`/states/${s.toLowerCase().replace(/\s+/g,'-').replace('.','-')}`}
              className={`state-pill block no-underline ${activeStates.includes(s) ? 'active' : ''}`}>
              {s}
            </Link>
          ))}
        </div>
        <div className="mt-2.5 text-right text-[9px]" style={{ fontFamily:'var(--mono)', color:'var(--dim)' }}>
          + 26 more — <Link href="/map" style={{ color:'var(--rcg2)', textDecoration:'none' }}>View Full Interactive Unclaimed Funds Map →</Link>
        </div>
      </div>

      {/* CTA BAND */}
      <div className="mx-10 mb-20 relative overflow-hidden" style={{ border:'1px solid var(--rcgline)', background:'var(--bg2)' }}>
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background:'var(--rcg2)' }} />
        <div className="flex items-center justify-between gap-10 px-14 py-14 flex-wrap">
          <div>
            <h2 className="font-bold mb-2.5" style={{ fontFamily:'var(--sans)', fontSize:'clamp(24px,3.5vw,44px)', letterSpacing:'-1.5px', color:'var(--bright)' }}>
              Money Was Left Behind<br />After Your <span style={{ color:'var(--rcg2)' }}>Foreclosure.</span>
            </h2>
            <p className="text-[13px] leading-relaxed max-w-[460px]" style={{ color:'var(--mid)' }}>
              Surplus funds have hard legal deadlines — in many states as short as 60 days. Don&apos;t lose what&apos;s already yours. Free review, no obligation, zero upfront cost.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/contact" className="btn-metal text-white font-bold tracking-wide uppercase px-8 py-4 cursor-pointer" style={{ fontFamily:'var(--sans)', fontSize:'13px' }}>
              Free Claim Review
            </Link>
            <Link href="tel:+13058001234" className="btn-ghost font-semibold tracking-wide uppercase px-6 py-4 cursor-pointer" style={{ fontFamily:'var(--sans)', fontSize:'12px' }}>
              Call Us Now
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
