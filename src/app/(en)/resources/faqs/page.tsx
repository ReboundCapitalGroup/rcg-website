import type { Metadata } from 'next'
import FaqsView from '@/components/views/FaqsView'

export const metadata: Metadata = {
  title: 'Surplus Funds Recovery FAQs | Rebound Capital Group',
  description: 'Answers about surplus funds recovery: deadlines, eligibility, fees, and how the claim process works. Rebound Capital Group is paid only if funds are recovered.',
  openGraph: {
    title: 'Surplus Funds Recovery FAQs | Rebound Capital Group',
    description: 'Answers about surplus funds recovery: deadlines, eligibility, fees, and how the claim process works. Rebound Capital Group is paid only if funds are recovered.',
    url: 'https://reboundcapitalgroup.com/resources/faqs',
    type: 'website',
  },
}

export default function FAQsPage() {
  return <FaqsView lang="en" />
}
