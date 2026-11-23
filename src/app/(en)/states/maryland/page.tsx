import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/maryland.json'

export const metadata: Metadata = {
  title: "Maryland Foreclosure Help & Surplus Funds | $0 Upfront | RCG",
  description: "Did your Maryland home sell at foreclosure, or is a sale coming? You may have options, or be owed the surplus. Prince George's, Montgomery and every county. Free check, call or text 24/7.",
}


export default function MarylandPage() {
  return <StatePage {...data} />
}
