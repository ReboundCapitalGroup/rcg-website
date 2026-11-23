import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/colorado.json'

export const metadata: Metadata = {
  title: "Colorado Surplus Funds Recovery | Rebound Capital Group",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Colorado. Rebound Capital Group files through our network of licensed attorneys at no upfront cost.",
}


export default function ColoradoPage() {
  return <StatePage {...data} />
}
