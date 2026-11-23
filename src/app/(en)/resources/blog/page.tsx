import type { Metadata } from 'next'
import BlogView from '@/components/views/BlogView'

export const metadata: Metadata = {
  title: 'Surplus Funds Recovery Blog | Rebound Capital Group',
  description: 'Plain-language guides on foreclosure, surplus funds and claims. Coming soon from Rebound Capital Group.',
  // Hidden from Google until real posts exist (thin "coming soon" page).
  robots: { index: false, follow: true },
}

export default function BlogPage() {
  return <BlogView lang="en" />
}
