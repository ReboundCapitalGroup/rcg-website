'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import s from './home.module.css'
import { L } from '@/lib/i18n'
import { useLang } from '@/lib/useLang'

const CASES = {
  en: [
    { label: 'Foreclosure', sale: 412000, debt: 318450, debtLabel: 'Debt and costs' },
    { label: 'Tax sale', sale: 186500, debt: 9820, debtLabel: 'Taxes and costs' },
    { label: 'Inherited home', sale: 295000, debt: 241300, debtLabel: 'Debt and costs' },
  ],
  es: [
    { label: 'Ejecución', sale: 412000, debt: 318450, debtLabel: 'Deuda y costos' },
    { label: 'Venta por impuestos', sale: 186500, debt: 9820, debtLabel: 'Impuestos y costos' },
    { label: 'Casa heredada', sale: 295000, debt: 241300, debtLabel: 'Deuda y costos' },
  ],
}
const TXT = {
  en: { lead1: 'The house sold. The debt was paid.', lead2: 'This was left over:', text: 'That money belongs to the former owner. Most people never hear about it. We find it and file the claim.', cta: 'Check my property, free', try: 'Try an example', ex: 'Example', sale: 'Sale price', left: 'Left over for you', note: 'Example figures, not a real case. Liens and costs can lower the amount.' },
  es: { lead1: 'La casa se vendió. La deuda se pagó.', lead2: 'Esto fue lo que sobró:', text: 'Ese dinero le pertenece al antiguo dueño. La mayoría nunca se entera. Nosotros lo encontramos y presentamos el reclamo.', cta: 'Revisar mi propiedad gratis', try: 'Pruebe un ejemplo', ex: 'Ejemplo', sale: 'Precio de venta', left: 'Lo que le sobra a usted', note: 'Cifras de ejemplo, no es un caso real. Los gravámenes y costos pueden reducir el monto.' },
}
const fmt = (n: number) => '$' + n.toLocaleString('en-US')

export default function MoneyExample() {
  const lang = useLang()
  const cases = CASES[lang]
  const T = TXT[lang]
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
        <p className={s.moneyLead}>{T.lead1}<br className={s.brSm} /> {T.lead2}</p>
        <div className={s.moneyCounter} aria-live="polite">{shown}</div>
        <p className={s.moneyText}>{T.text}</p>
        <Link href={L(lang, '/free-review?type=foreclosure')} className={`${s.btnWhite} ${s.hideSm}`}>{T.cta} <span aria-hidden="true">→</span></Link>
      </div>
      <div className={s.exampleBox}>
        <div className={s.exampleLabel}>{T.try}</div>
        <div role="tablist" aria-label={T.ex} className={s.exampleTabs}>
          {cases.map((x, i) => (
            <button key={x.label} type="button" role="tab" aria-selected={i === tab} onClick={() => setTab(i)} className={i === tab ? `${s.exampleTab} ${s.exampleTabOn}` : s.exampleTab}>{x.label}</button>
          ))}
        </div>
        <div className={s.bar}>
          <div className={s.barDebt} style={{ width: `${Math.round((c.debt / c.sale) * 100)}%` }} />
          <div className={s.barLeft} style={{ width: `${Math.round((left / c.sale) * 100)}%` }} />
        </div>
        <div className={s.exampleRows}>
          <div><div className={s.exampleKey}>{T.sale}</div><div className={s.exampleVal}>{fmt(c.sale)}</div></div>
          <div><div className={s.exampleKey}>{c.debtLabel}</div><div className={s.exampleVal}>{fmt(c.debt)}</div></div>
          <div><div className={`${s.exampleKey} ${s.accent}`}>{T.left}</div><div className={`${s.exampleVal} ${s.accent}`}>{fmt(left)}</div></div>
        </div>
        <div className={s.exampleNote}>{T.note}</div>
      </div>
      <Link href={L(lang, '/free-review?type=foreclosure')} className={`${s.btnWhite} ${s.showSm}`}>{T.cta} <span aria-hidden="true">→</span></Link>
    </div>
  )
}
