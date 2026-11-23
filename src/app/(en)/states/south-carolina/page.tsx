import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/south-carolina.json'

export const metadata: Metadata = {
  title: "South Carolina Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in South Carolina. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}


export default function SouthCarolinaPage() {
  return <StatePage {...data} />
}
