import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/new-york.json'

export const metadata: Metadata = {
  title: "New York Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in New York. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}


export default function NewYorkPage() {
  return <StatePage {...data} />
}
