import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/arizona.json'

export const metadata: Metadata = {
  title: "Arizona Surplus Funds & Excess Proceeds Recovery | RCG",
  description: "Recover foreclosure surplus funds and tax deed excess proceeds in Arizona. Rebound Capital Group files through our network of licensed attorneys at no upfront cost to you.",
}


export default function ArizonaPage() {
  return <StatePage {...data} />
}
