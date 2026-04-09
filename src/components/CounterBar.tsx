'use client'
import { useEffect, useState } from 'react'

function Counter({ target }: { target: number }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const dur = 1200
    const step = target / (dur / 16)
    let v = 0
    const t = setInterval(() => {
      v = Math.min(v + step, target)
      setVal(Math.round(v))
      if (v >= target) clearInterval(t)
    }, 16)
    return () => clearInterval(t)
  }, [target])
  return <>{val}</>
}

const stats = [
  { label: 'Upfront Cost to You', prefix: '$', value: 0, suffix: '', sub: 'Zero exceptions. Always.', tag: 'CONTINGENCY' },
  { label: 'States We Operate In', prefix: '', value: 5, suffix: ' active', sub: 'Expanding to all 50', tag: 'NATIONWIDE' },
  { label: 'Counties Monitored', prefix: '', value: 81, suffix: '+', sub: 'Daily court scrapes. Live data.', tag: 'LIVE' },
  { label: 'Min. Claim Window', prefix: '', value: 60, suffix: ' days', sub: 'Act fast — deadlines are real', tag: 'URGENT' },
]

export default function CounterBar() {
  return (
    <div className="counter-bar">
      {stats.map((s) => (
        <div key={s.label} className="counter-block">
          <div className="counter-label">{s.label}</div>
          <div className="counter-value">
            {s.prefix && <span style={{ fontSize:'0.52em', color:'var(--rcg2)', verticalAlign:'super', fontWeight:600 }}>{s.prefix}</span>}
            <Counter target={s.value} />
            {s.suffix && <span style={{ fontSize:'0.4em', color:'var(--mid)', fontWeight:500 }}>{s.suffix}</span>}
          </div>
          <div style={{ fontSize:'11px', color:'var(--dim)', marginTop:'5px' }}>{s.sub}</div>
          <div className="counter-tag">{s.tag}</div>
        </div>
      ))}
    </div>
  )
}
