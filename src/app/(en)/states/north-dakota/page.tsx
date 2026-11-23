import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/north-dakota.json'

export const metadata: Metadata = {
  title: "North Dakota Foreclosure Surplus: You May Be Owed Money | RCG",
  description: "Did your North Dakota home sell at foreclosure? You may be owed money from the sale. Free check, $0 upfront, call or text 24/7.",
}


export default function NorthDakotaPage() {
  return <StatePage {...data} />
}
