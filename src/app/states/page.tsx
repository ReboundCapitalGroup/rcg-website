export const metadata = { title: 'Surplus Funds Recovery — All 50 States | Rebound Capital Group', description: 'State-by-state surplus funds recovery guides. Learn the laws, deadlines, and claim process for foreclosure surplus and unclaimed property in every state.' }
export default function StatesIndex() {
  const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  const active = ['Florida','Arizona','Colorado']
  return (
    <div style={{ background:'var(--bg)', minHeight:'100vh', padding:'80px 40px' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="section-tag">// all states</div>
        <h1 className="section-title mb-3">Surplus Recovery<br /><span style={{ color:'var(--dim)' }}>In Every State.</span></h1>
        <p className="text-[14px] leading-relaxed mt-3 mb-10 max-w-[560px]" style={{ color:'var(--mid)' }}>Select your state for local surplus fund laws, claim deadlines, filing process, and county-level guides.</p>
        <div className="grid gap-1" style={{ gridTemplateColumns:'repeat(5,1fr)', background:'var(--rcgline)' }}>
          {states.map(s => (
            <a key={s} href={`/states/${s.toLowerCase().replace(/\s+/g,'-')}`} className="block px-4 py-4 no-underline transition-all hover:opacity-90" style={{ background: active.includes(s) ? 'var(--rcg3)' : 'var(--bg2)' }}>
              <div className="text-[12px] font-bold" style={{ color: active.includes(s) ? 'var(--rcglt)' : 'var(--mid)' }}>{s}</div>
              {active.includes(s) && <div className="text-[9px] mt-0.5" style={{ fontFamily:'var(--mono)', color:'var(--rcg2)' }}>ACTIVE</div>}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
