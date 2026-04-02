'use client'
import { useEffect, useState } from 'react'

function Counter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
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
  return <span>{prefix}{val}{suffix}</span>
}

const stats = [
  { label: 'Upfront Cost to You', prefix: '$', value: 0, suffix: '', sub: 'Zero exceptions. Always.', tag: 'CONTINGENCY' },
  { label: 'States We Operate In', prefix: '', value: 50, suffix: ' states', sub: 'All claim types covered', tag: 'NATIONWIDE' },
  { label: 'Counties Monitored', prefix: '', value: 81, suffix: '+', sub: 'Daily court scrapes. Live data.', tag: 'LIVE' },
  { label: 'Min. Claim Window', prefix: '', value: 60, suffix: ' days', sub: 'Act fast — deadlines are real', tag: 'URGENT' },
]

export default function CounterBar() {
  return (
    <div className="flex border-t border-b" style={{ borderColor: 'var(--rcgline)', background: 'var(--bg2)' }}>
      {stats.map((s, i) => (
        <div key={s.label} className="flex-1 px-8 py-5 relative" style={{ borderRight: i < stats.length - 1 ? '1px solid var(--rcgline)' : 'none' }}>
          <div className="text-[9px] font-bold tracking-[1.8px] uppercase mb-2" style={{ fontFamily: 'var(--mono)', color: 'var(--mid)' }}>{s.label}</div>
          <div className="font-bold leading-none" style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(24px,3vw,40px)', color: 'var(--bright)', letterSpacing: '-1px' }}>
            {s.prefix && <span className="text-[0.52em] font-semibold align-super" style={{ color: 'var(--rcg2)' }}>{s.prefix}</span>}
            <Counter target={s.value} />
            {s.suffix && <span className="text-[0.4em] font-medium" style={{ color: 'var(--mid)' }}>{s.suffix}</span>}
          </div>
          <div className="text-[11px] mt-1" style={{ color: 'var(--dim)' }}>{s.sub}</div>
          <div className="absolute top-3 right-3 text-[8px] tracking-[1px] uppercase" style={{ fontFamily: 'var(--mono)', color: 'var(--rcg2)' }}>{s.tag}</div>
        </div>
      ))}
    </div>
  )
}
