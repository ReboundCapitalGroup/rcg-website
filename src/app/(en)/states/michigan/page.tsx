import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/michigan.json'

export const metadata: Metadata = {
  title: "Michigan Foreclosure Surplus Recovery | RCG",
  description: "Recover foreclosure surplus funds and excess proceeds in Michigan. Rebound Capital Group files through our network of licensed attorneys at no upfront cost to you.",
}


export default function MichiganPage() {
  return <StatePage {...data} />
}
