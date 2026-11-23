import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/rhode-island.json'

export const metadata: Metadata = {
  title: "Rhode Island Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Rhode Island. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}


export default function RhodeIslandPage() {
  return <StatePage {...data} />
}
