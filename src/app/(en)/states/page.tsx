import type { Metadata } from 'next'
import StatesView from '@/components/views/StatesView'

export const metadata: Metadata = {
  title: 'Foreclosure Help & Surplus Funds by State | Rebound Capital Group',
  description: 'Foreclosure help and surplus fund recovery nationwide. Select your state for local surplus fund laws, filing process and county coverage.',
}

export default function StatesPage() {
  return <StatesView lang="en" />
}
