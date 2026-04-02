export const metadata = { title: 'About Rebound Capital Group | Nationwide Surplus Recovery', description: 'Learn about Rebound Capital Group — Miami-based surplus funds and unclaimed property recovery firm operating in all 50 states.' }
export default function About() {
  return (
    <div style={{ background:'var(--bg)', minHeight:'100vh', padding:'80px 40px' }}>
      <div className="max-w-[800px] mx-auto">
        <div className="section-tag">// about rcg</div>
        <h1 className="section-title mb-6">Built to Recover<br /><span style={{ color:'var(--dim)' }}>What&apos;s Yours.</span></h1>
        <p className="text-[15px] leading-relaxed mb-6" style={{ color:'var(--mid)' }}>Rebound Capital Group LLC was founded by professionals with a deep background in real estate who witnessed firsthand the significant gap between distressed property owners and the funds they are rightfully owed.</p>
        <p className="text-[15px] leading-relaxed mb-6" style={{ color:'var(--mid)' }}>Based in Miami Beach, Florida, we operate across all 50 states recovering surplus funds from foreclosures, tax deed sales, unclaimed property held by state agencies, and excess proceeds from any forced sale. Our model is simple: we only get paid when you do.</p>
        <div className="grid gap-1 mt-10" style={{ gridTemplateColumns:'repeat(2,1fr)', background:'var(--rcgline)' }}>
          {[['BBB A+ Rated','Miami Beach, FL'],['Licensed','Surplus Recovery Agents'],['All 50 States','Full Nationwide Coverage'],['100% Contingency','Zero Upfront Fees']].map(([a,b]) => (
            <div key={a} className="px-7 py-6" style={{ background:'var(--bg2)' }}>
              <div className="text-[22px] font-bold mb-1" style={{ fontFamily:'var(--sans)', color:'var(--bright)', letterSpacing:'-1px' }}>{a}</div>
              <div className="text-[11px]" style={{ color:'var(--mid)' }}>{b}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
