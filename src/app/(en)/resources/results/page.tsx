import type { Metadata } from 'next'
import ResultsView from '@/components/views/ResultsView'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Client Reviews & Results | Rebound Capital Group',
  description: 'What clients say about Rebound Capital Group. Google reviews from homeowners and heirs we helped recover foreclosure surplus and other funds. Over $2M recovered.',
}

export default function ClientResultsPage() {
  return <ResultsView lang="en" />
}
