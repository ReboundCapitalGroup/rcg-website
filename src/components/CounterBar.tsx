'use client'
import { useEffect, useRef, useState } from 'react'

function Counter({ target }: { target: number }) {
  // Seeded with the real value so the server renders the real number.
  // Client hydrates to the same value, so there's no mismatch.
  const [val, setVal] = useState(target)
  const ref = useRef<HTMLSpanElement>(null)
  const played = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced-motion — leave the number as-is.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let timer: ReturnType<typeof setInterval> | undefined

    const run = () => {
      if (played.current) return
      played.current = true
      const dur = 1200
      const step = target / (dur / 16)
      let v = 0
      setVal(0)
      timer = setInterval(() => {
        v = Math.min(v + step, target)
        setVal(Math.round(v))
        if (v >= target && timer) clearInterval(timer)
      }, 16)
    }

    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          run()
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)

    return () => {
      io.disconnect()
      if (timer) clearInterval(timer)
    }
  }, [target])

  return <span ref={ref}>{val.toLocaleString()}</span>
}

const stats = [
  { label: 'Upfront Cost to You', prefix: '$', value: 0, suffix: '', sub: 'Zero exceptions. Always.', tag: 'CONTINGENCY' },
  { label: 'States We Operate In', prefix: '', value: 5, suffix: ' active', sub: 'Expanding to all 50', tag: 'NATIONWIDE' },
  { label: 'Counties Monitored', prefix: '', value: 1000, suffix: '+', sub: 'Daily court scrapes. Live data.', tag: 'LIVE' },
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
