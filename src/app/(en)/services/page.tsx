import type { Metadata } from 'next'
import ServicesView from '@/components/views/ServicesView'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Foreclosure Help, Surplus Funds & Unclaimed Property Services | RCG',
  description: 'Foreclosure help before the auction, and recovery of surplus funds, tax deed overages, unclaimed property and estate assets after it. Claims are filed through our network of licensed attorneys. $0 upfront.',
}

export default function ServicesPage() {
  return <ServicesView lang="en" />
}
