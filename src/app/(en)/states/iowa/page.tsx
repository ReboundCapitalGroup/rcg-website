import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/iowa.json'

export const metadata: Metadata = {
  title: "Iowa Foreclosure Surplus: You May Be Owed Money | RCG",
  description: "Did your Iowa home sell at foreclosure? You may be owed money from the sale. Free check, $0 upfront, call or text 24/7.",
  openGraph: {
    title: 'Iowa Surplus Funds Recovery | Rebound Capital Group',
    description: 'Unclaimed foreclosure surplus, sheriff sale overages, and state-held funds across all 99 Iowa counties. Free search, no upfront cost.',
    url: 'https://reboundcapitalgroup.com/states/iowa',
    type: 'website',
  },
}


export default function IowaPage() {
  return <StatePage {...data} />
}
