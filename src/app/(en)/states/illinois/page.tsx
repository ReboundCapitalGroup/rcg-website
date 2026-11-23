import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/illinois.json'

export const metadata: Metadata = {
  title: "Illinois Foreclosure Help & Surplus Funds | $0 Upfront | RCG",
  description: "Did your Illinois home sell at a foreclosure sale? The surplus may be yours. Cook County and every Illinois county. Free check, $0 upfront, call or text 24/7.",
}


export default function IllinoisPage() {
  return <StatePage {...data} />
}
