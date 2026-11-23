import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/indiana.json'

export const metadata: Metadata = {
  title: "Indiana Surplus Funds & Foreclosure Help | $0 Upfront | RCG",
  description: "Did your Indiana home sell at a sheriff's sale? You may be owed the surplus. Free check in every Indiana county, $0 upfront, call or text 24/7.",
}


export default function IndianaPage() {
  return <StatePage {...data} />
}
