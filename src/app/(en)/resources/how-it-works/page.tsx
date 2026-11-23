import type { Metadata } from 'next'
import HowItWorksView from '@/components/views/HowItWorksView'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'How Surplus Funds Recovery Works | RCG',
  description: 'How surplus funds recovery works: we find money owed to you, file through our network of licensed attorneys, and you get paid. No upfront cost. We only get paid when you do.',
}

export default function HowItWorksPage() {
  return <HowItWorksView lang="en" />
}
