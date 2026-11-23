import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Surplus Funds Claim Review | Rebound Capital Group',
  description: 'Get a free surplus funds claim review from Rebound Capital Group. We search for money owed to you and file through our network of licensed attorneys. No upfront cost, ever.',
  alternates: { canonical: '/free-review' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}