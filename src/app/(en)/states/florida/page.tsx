import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/florida.json'

export const metadata: Metadata = {
  title: "Florida Foreclosure & Tax Deed Surplus Claims | RCG",
  description: "Did your Florida home sell at a foreclosure or tax deed sale? The surplus may be yours. Miami-Dade, Broward, Palm Beach and all 67 counties. Free check, call or text 24/7.",
}


export default function FloridaPage() {
  return <StatePage {...data} />
}
