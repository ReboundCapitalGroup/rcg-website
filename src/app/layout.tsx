import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rebound Capital Group | Surplus Funds & Unclaimed Property Recovery Nationwide',
  description: 'Rebound Capital Group recovers foreclosure surplus funds, tax deed overages, excess proceeds, and unclaimed property in all 50 states. No upfront fees. 100% contingency.',
  keywords: 'surplus funds recovery, foreclosure surplus, tax deed overages, excess proceeds, unclaimed property, asset recovery',
  metadataBase: new URL('https://reboundcapitalgroup.com'),
  openGraph: {
    title: 'Rebound Capital Group | Nationwide Surplus Funds Recovery',
    description: 'We recover foreclosure surplus, tax deed overages, and unclaimed property in all 50 states. Zero upfront fees.',
    url: 'https://reboundcapitalgroup.com',
    siteName: 'Rebound Capital Group',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
