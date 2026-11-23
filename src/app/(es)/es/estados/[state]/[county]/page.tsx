import { countyMetadata, renderCounty } from '@/components/county/countyRoute'
import { ALL_COUNTIES } from '@/content/counties'

type Params = { state: string; county: string }

export const dynamicParams = false
export const generateStaticParams = (): Params[] => ALL_COUNTIES.map((c) => ({ state: c.state, county: c.slug }))

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { state, county } = await params
  return countyMetadata(state, county, 'es')
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { state, county } = await params
  return renderCounty(state, county, 'es')
}
