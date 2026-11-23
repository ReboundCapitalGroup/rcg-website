import type { Metadata } from 'next'
import HomeView from '@/components/views/HomeView'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Foreclosure Help & Surplus Funds Recovery Nationwide | $0 Upfront | RCG',
  description: 'Facing foreclosure or already lost your home at auction? Rebound Capital Group helps homeowners nationwide with options before the sale and surplus funds after it. $0 upfront. Call or text 24/7.',
}

export default function Home() {
  return <HomeView lang="en" />
}
