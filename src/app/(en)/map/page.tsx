import type { Metadata } from 'next'
import MapView from '@/components/map/MapView'

export const metadata: Metadata = {
  title: 'Unclaimed Funds & Property Map by State | Rebound Capital Group',
  description: 'About $70 billion in unclaimed property is held by U.S. states. See what your state holds and get a free claim check from Rebound Capital Group. $0 upfront.',
}

export default function MapPage() {
  return <MapView lang="en" />
}
