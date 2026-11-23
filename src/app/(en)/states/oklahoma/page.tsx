import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/oklahoma.json'

export const metadata: Metadata = {
  title: "Oklahoma Surplus Funds: Are You Owed Money? | Free Search",
  description: "Oklahoma district courts and county treasurer resales leave surplus funds unclaimed, along with mineral royalties held by the state. We search all 77 counties at no cost.",
  openGraph: {
    title: 'Oklahoma Surplus Funds Recovery | Rebound Capital Group',
    description: 'Unclaimed foreclosure surplus, resale tax deed excess, and state-held funds across all 77 Oklahoma counties. Free search, no upfront cost.',
    url: 'https://reboundcapitalgroup.com/states/oklahoma',
    type: 'website',
  },
}


export default function OklahomaPage() {
  return <StatePage {...data} />
}
