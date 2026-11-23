'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import s from './home.module.css'

const cases = [
  { label: 'Foreclosure', sale: 412000, debt: 318450, debtLabel: 'Debt and costs' },
  { label: 'Tax sale', sale: 186500, debt: 9820, debtLabel: 'Taxes and costs' },
  { label: 'Inherited home', sale: 295000, debt: 241300, debtLabel: 'Debt and costs' },
]
const fmt = (n: number) => '$' + n.toLocaleString('en-US')

export default function MoneyExample() {
  const [tab, setTab] = useState(0)
  const [p, setP] = useState(1) // count-up progress, 0..1
  const ref = useRef<HTMLDivElement>(null)

  // Count up once, the first time the band scrolls into view.
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const step = (t: number) => {
        const k = Math.min(1, (t - t0) / 1800)
        setP(1 - Math.pow(1 - k, 3))
        if (k < 1) raf = requestAnimationFrame(step)
      }
      setP(0)
      raf = requestAnimationFrame(step)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [])

  const c = cases[tab]
  const left = c.sale - c.debt
  const shown = fmt(Math.round(left * p))

  return (
    <div ref={ref} className={s.moneyGrid}>
      <div className={s.minW0}>
        <p className={s.moneyLead}>The house sold. The debt was paid.<br className={s.brSm} /> This was left over:</p>
        <div className={s.moneyCounter} aria-live="polite">{shown}</div>
        <p className={s.moneyText}>That money belongs to the former owner. Most people never hear about it. We find it and file the claim.</p>
        <Link href="/free-review?type=foreclosure" className={`${s.btnWhite} ${s.hideSm}`}>Check my property, free <span aria-hidden="true">→</span></Link>
      </div>
      <div className={s.exampleBox}>
        <div className={s.exampleLabel}>Try an example</div>
        <div role="tablist" aria-label="Example" className={s.exampleTabs}>
          {cases.map((x, i) => (
            <button key={x.label} type="button" role="tab" aria-selected={i === tab} onClick={() => setTab(i)} className={i === tab ? `${s.exampleTab} ${s.exampleTabOn}` : s.exampleTab}>{x.label}</button>
          ))}
        </div>
        <div className={s.bar}>
          <div className={s.barDebt} style={{ width: `${Math.round((c.debt / c.sale) * 100)}%` }} />
          <div className={s.barLeft} style={{ width: `${Math.round((left / c.sale) * 100)}%` }} />
        </div>
        <div className={s.exampleRows}>
          <div><div className={s.exampleKey}>Sale price</div><div className={s.exampleVal}>{fmt(c.sale)}</div></div>
          <div><div className={s.exampleKey}>{c.debtLabel}</div><div className={s.exampleVal}>{fmt(c.debt)}</div></div>
          <div><div className={`${s.exampleKey} ${s.accent}`}>Left over for you</div><div className={`${s.exampleVal} ${s.accent}`}>{fmt(left)}</div></div>
        </div>
        <div className={s.exampleNote}>Example figures, not a real case. Liens and costs can lower the amount.</div>
      </div>
      <Link href="/free-review?type=foreclosure" className={`${s.btnWhite} ${s.showSm}`}>Check my property, free <span aria-hidden="true">→</span></Link>
    </div>
  )
}
