export default function Ticker() {
  const items = ['SURPLUS FUNDS RECOVERY','TAX DEED OVERAGES','EXCESS PROCEEDS','UNCLAIMED PROPERTY','FORECLOSURE SURPLUS','ESTATE RECOVERY','ALL 50 STATES','ZERO UPFRONT FEES','100% CONTINGENCY','COURT-HELD FUNDS','STATE UNCLAIMED FUNDS','ASSET RECOVERY']
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden h-8 flex items-center" style={{ background: 'var(--bg3)', borderBottom: '1px solid var(--rcgline)' }}>
      <div className="flex gap-0 animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 px-6 border-r text-[9px] tracking-[1.2px]" style={{ borderColor: 'var(--rcgline)', color: '#8fa3f0', fontFamily: 'var(--mono)' }}>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--rcg2)' }} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
