import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/nebraska.json'

export const metadata: Metadata = {
  title: "Nebraska Surplus Funds: Are You Owed Money? | Free Search",
  description: "Nebraska district courts and the State Treasurer hold unclaimed foreclosure surplus and sale overages. We search all 93 counties at no cost. No fee unless we recover.",
  openGraph: {
    title: 'Nebraska Surplus Funds Recovery | Rebound Capital Group',
    description: 'Unclaimed foreclosure surplus, sheriff sale overages, and state-held funds across all 93 Nebraska counties. Free search, no upfront cost.',
    url: 'https://reboundcapitalgroup.com/states/nebraska',
    type: 'website',
  },
}


export default function NebraskaPage() {
  return <StatePage {...data} />
}
