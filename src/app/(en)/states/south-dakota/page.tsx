import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/south-dakota.json'

export const metadata: Metadata = {
  title: "South Dakota Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in South Dakota. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}


export default function SouthDakotaPage() {
  return <StatePage {...data} />
}
