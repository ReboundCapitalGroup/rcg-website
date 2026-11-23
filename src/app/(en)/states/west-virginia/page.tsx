import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/west-virginia.json'

export const metadata: Metadata = {
  title: "West Virginia Foreclosure Surplus: You May Be Owed Money | RCG",
  description: "Did your West Virginia home sell at a trustee sale? You may be owed money from the sale. Free check, $0 upfront, call or text 24/7.",
}


export default function WestVirginiaPage() {
  return <StatePage {...data} />
}
