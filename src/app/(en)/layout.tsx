import type { Metadata } from 'next'
import '../fonts.css'
import '../globals.css'
import SiteDocument from '@/components/SiteDocument'

export const metadata: Metadata = {
  title: 'Rebound Capital Group | Surplus Funds & Unclaimed Property Recovery Nationwide',
  description: 'Rebound Capital Group recovers foreclosure surplus funds, tax deed overages, excess proceeds, and unclaimed property nationwide. No upfront fees. 100% contingency.',
  keywords: 'surplus funds recovery, foreclosure surplus, tax deed overages, excess proceeds, unclaimed property, asset recovery',
  metadataBase: new URL('https://reboundcapitalgroup.com'),

  authors: [{ name: 'Rebound Capital Group LLC' }],
  creator: 'Rebound Capital Group LLC',
  publisher: 'Rebound Capital Group LLC',

  openGraph: {
    title: 'Rebound Capital Group | Nationwide Surplus Funds Recovery',
    description: 'We recover foreclosure surplus, tax deed overages, and unclaimed property nationwide. Zero upfront fees.',
    url: 'https://reboundcapitalgroup.com',
    siteName: 'Rebound Capital Group',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rebound Capital Group - Nationwide Surplus Funds Recovery',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@reboundcapitalg',
    creator: '@reboundcapitalg',
    title: 'Rebound Capital Group | Nationwide Surplus Funds Recovery',
    description: 'We recover foreclosure surplus, tax deed overages, and unclaimed property nationwide. Zero upfront fees.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: './',
  },

  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  manifest: '/site.webmanifest',

  category: 'Finance',

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>
}
