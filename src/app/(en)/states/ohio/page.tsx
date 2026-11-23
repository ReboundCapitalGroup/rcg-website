import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'
import data from '@/content/states/en/ohio.json'

export const metadata: Metadata = {
  title: "Ohio Foreclosure Help & Excess Proceeds | ORC 2329.44 | RCG",
  description: "Did your Ohio home sell at a sheriff's sale? Excess proceeds may be owed to you under ORC 2329.44. Claims filed through our network of licensed Ohio attorneys. Free check, $0 upfront.",
}


export default function OhioPage() {
  return <StatePage {...data} />
}
