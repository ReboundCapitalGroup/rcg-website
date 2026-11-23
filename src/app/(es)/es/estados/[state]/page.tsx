import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import StatePage, { type StatePageProps } from '@/components/state/StatePage'
import { STATES_ES } from '@/content/states/es'

type Params = { state: string }
type EsState = StatePageProps & { meta: { title: string; description: string } }
const get = (slug: string) => (STATES_ES as Record<string, unknown>)[slug] as EsState | undefined

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return Object.keys(STATES_ES).map((state) => ({ state }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { state } = await params
  const d = get(state)
  if (!d) return {}
  return { title: d.meta.title, description: d.meta.description, alternates: { canonical: `/es/estados/${state}` } }
}

export default async function EstadoPage({ params }: { params: Promise<Params> }) {
  const { state } = await params
  const d = get(state)
  if (!d) notFound()
  const { meta: _meta, ...data } = d
  void _meta
  return <StatePage {...data} lang="es" />
}
