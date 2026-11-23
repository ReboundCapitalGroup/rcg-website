import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/kentucky.json'

export const metadata: Metadata = {
  title: "Kentucky Surplus Funds Recovery | All Counties | RCG",
  description: "Kentucky foreclosure surplus sits with Master Commissioners or the State Treasury. RCG files claims through licensed Kentucky attorneys at no upfront cost.",
  openGraph: {
    title: 'Kentucky Surplus Funds Recovery | All Counties | RCG',
    description: 'Kentucky foreclosure surplus sits with Master Commissioners or the State Treasury. RCG files claims through our network of licensed Kentucky attorneys at no upfront cost.',
    url: 'https://reboundcapitalgroup.com/states/kentucky',
    type: 'website',
  },
}


export default function KentuckyPage() {
  return <StatePage {...data} />
}
