import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/utah.json'

export const metadata: Metadata = {
  title: "Utah Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Utah. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}


export default function UtahPage() {
  return <StatePage {...data} />
}
