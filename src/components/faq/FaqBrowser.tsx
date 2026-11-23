'use client'
import { useMemo, useState } from 'react'
import s from './faq.module.css'
import { useLang } from '@/lib/useLang'

type Cat = { label: string; items: { q: string; a: string }[] }
const slugify = (t: string) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

/** FAQ list: sticky category menu on the left, search, answers that open and close. */
export default function FaqBrowser({ categories }: { categories: Cat[] }) {
  const [q, setQ] = useState('')
  const es = useLang() === 'es'
  const needle = q.trim().toLowerCase()
  const shown = useMemo(
    () => categories
      .map((c) => ({ ...c, items: needle ? c.items.filter((i) => (i.q + ' ' + i.a).toLowerCase().includes(needle)) : c.items }))
      .filter((c) => c.items.length),
    [categories, needle],
  )
  const total = shown.reduce((n, c) => n + c.items.length, 0)

  return (
    <div className={s.layout}>
      <aside className={s.side}>
        <label className={s.search}>
          <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={es ? 'Buscar preguntas' : 'Search questions'} aria-label={es ? 'Buscar preguntas' : 'Search questions'} />
        </label>
        <div role="navigation" aria-label={es ? 'Temas' : 'FAQ topics'} className={s.nav}>
          {categories.map((c) => (
            <a key={c.label} href={`#${slugify(c.label)}`}>{c.label}<span>{c.items.length}</span></a>
          ))}
        </div>
        <a href="tel:+13055634920" className={s.call}><span>{es ? '¿Todavía tiene una pregunta?' : 'Still have a question?'}</span><b>{es ? 'Llame o escriba 24/7' : 'Call or text 24/7'}</b><b className={s.callNum}>305-563-4920</b></a>
      </aside>

      <div className={s.main}>
        {needle && <p className={s.count}>{es ? <>{total} {total === 1 ? 'respuesta' : 'respuestas'} para &ldquo;{q}&rdquo;</> : <>{total} {total === 1 ? 'answer' : 'answers'} for &ldquo;{q}&rdquo;</>}</p>}
        {shown.length === 0 && <p className={s.count}>{es ? 'Sin resultados. Llame o escríbanos 24/7 y le respondemos directamente.' : 'No matches. Call or text us 24/7 and we will answer it directly.'}</p>}
        {shown.map((c) => (
          <section key={c.label} id={slugify(c.label)} className={s.group}>
            <h2 className={s.groupTitle}>{c.label}</h2>
            {c.items.map((f) => (
              <details key={f.q} className={s.item} open={Boolean(needle)}>
                <summary>{f.q}<span aria-hidden="true" className={s.sign} /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
