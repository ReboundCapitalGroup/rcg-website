export default function Ticker() {
  const items = ['SURPLUS FUNDS RECOVERY','TAX DEED OVERAGES','EXCESS PROCEEDS','UNCLAIMED PROPERTY','FORECLOSURE SURPLUS','ESTATE RECOVERY','EXPANDING TO ALL 50 STATES','ZERO UPFRONT FEES','100% CONTINGENCY','COURT-HELD FUNDS','STATE UNCLAIMED FUNDS','ASSET RECOVERY']
  const doubled = [...items, ...items]
  return (
    <div className="ticker-strip">
      <div className="ticker-track ticker-animate">
        {doubled.map((item, i) => (
          <div key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
