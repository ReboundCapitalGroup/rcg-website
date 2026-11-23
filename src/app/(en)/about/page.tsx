import type { Metadata } from 'next'
import AboutView from '@/components/views/AboutView'

export const metadata: Metadata = {
  title: 'About Rebound Capital Group | Foreclosure Help & Surplus Recovery',
  description: 'Rebound Capital Group helps homeowners facing foreclosure and recovers foreclosure surplus, tax deed overages and unclaimed property for former owners and heirs. Miami Beach, FL. No upfront cost.',
}

export default function AboutPage() {
  return <AboutView lang="en" />
}
