import { countyMetadata, countyParams, renderCounty } from '@/components/county/countyRoute'

type Params = { county: string }
const STATE = 'arizona'

export const dynamicParams = false
export const generateStaticParams = () => countyParams(STATE)

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  return countyMetadata(STATE, (await params).county, 'en')
}

export default async function Page({ params }: { params: Promise<Params> }) {
  return renderCounty(STATE, (await params).county, 'en')
}
