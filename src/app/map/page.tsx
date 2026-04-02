export const metadata = { title: 'Unclaimed Funds Map — All 50 States | Rebound Capital Group', description: 'Interactive map of surplus funds laws, deadlines, and claim processes for all 50 states. Click any state for county-level guides.' }
export default function MapPage() {
  return (
    <div style={{ background:'var(--bg)', minHeight:'100vh', padding:'80px 40px' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="section-tag">// unclaimed funds map</div>
        <h1 className="section-title mb-3">All 50 States.<br /><span style={{ color:'var(--dim)' }}>Every County. Every Law.</span></h1>
        <p className="text-[14px] leading-relaxed mt-3 mb-10" style={{ color:'var(--mid)' }}>Click any state to see surplus fund laws, claim deadlines, the full filing process, and county-level guides for every courthouse in that state.</p>
        <div className="text-[12px] px-5 py-4 mb-8" style={{ border:'1px solid var(--rcgline)', background:'var(--bg2)', color:'var(--mid)', fontFamily:'var(--mono)' }}>
          // Interactive 50-state map coming in next build — state pages live below
        </div>
        <div className="grid gap-1" style={{ gridTemplateColumns:'repeat(8,1fr)', background:'var(--rcgline)' }}>
          {['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'].map(s => (
            <a key={s} href={`/states/${s.toLowerCase().replace(/\s+/g,'-')}`} className="block px-2 py-2.5 text-center text-[8px] font-bold tracking-wide uppercase transition-all hover:bg-[var(--rcgfade)] cursor-pointer no-underline" style={{ background:'var(--bg)', color:'var(--dim)', fontFamily:'var(--mono)' }}>
              {s.length > 10 ? s.slice(0,8)+'.' : s}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
