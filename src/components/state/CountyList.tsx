'use client'
import { useState } from 'react'
import s from './state.module.css'

/** Searchable list of counties (or parishes, boroughs, cities). */
export default function CountyList({ items, unit, placeholder }: { items: string[]; unit: string; placeholder: string }) {
  const [q, setQ] = useState('')
  const needle = q.trim().toLowerCase()
  const shown = needle ? items.filter((c) => c.toLowerCase().includes(needle)) : items
  return (
    <div>
      <label className={s.search}>
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={placeholder} aria-label={placeholder} />
      </label>
      <ul className={s.counties}>
        {shown.map((c) => <li key={c}>{c}{unit && !c.includes('City') ? ` ${unit}` : ''}</li>)}
      </ul>
      {shown.length === 0 && <p className={s.noMatch}>We cover every one. Call or text 24/7 and we will check yours.</p>}
    </div>
  )
}
