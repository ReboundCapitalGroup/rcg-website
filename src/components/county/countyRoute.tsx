import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CountyPage from './CountyPage'
import { COUNTIES, COUNTY_STATE_NAMES, getCounty } from '@/content/counties'
import { L, type Lang } from '@/lib/i18n'

type Params = { county: string }

/** Shared helpers for the per-state English county routes and the Spanish route. */
export const countyParams = (state: string): Params[] => (COUNTIES[state] ?? []).map((c) => ({ county: c.slug }))

export function countyMetadata(state: string, slug: string, lang: Lang): Metadata {
  const k = getCounty(state, slug)
  if (!k) return {}
  const path = `/states/${state}/${slug}`
  return {
    title: { absolute: k.meta.title[lang] },
    description: k.meta.description[lang],
    alternates: { canonical: L(lang, path) },
  }
}

export function renderCounty(state: string, slug: string, lang: Lang) {
  const k = getCounty(state, slug)
  if (!k) notFound()
  const others = (COUNTIES[state] ?? []).filter((c) => c.slug !== slug)
  return <CountyPage county={k} stateName={COUNTY_STATE_NAMES[state]} others={others} lang={lang} />
}
