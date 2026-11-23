import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/montana.json'

export const metadata: Metadata = {
  title: "Montana Foreclosure Surplus: You May Be Owed Money | RCG",
  description: "Did your Montana home sell at a trustee or sheriff's sale? You may be owed money from the sale. Free check, $0 upfront, call or text 24/7.",
  openGraph: {
    title: 'Montana Surplus Funds Recovery | Rebound Capital Group',
    description: 'Unclaimed foreclosure surplus, trustee sale overages, and state-held funds across all 56 Montana counties. Free search, no upfront cost.',
    url: 'https://reboundcapitalgroup.com/states/montana',
    type: 'website',
  },
}


export default function MontanaPage() {
  return <StatePage {...data} />
}
