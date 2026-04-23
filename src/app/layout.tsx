import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rebound Capital Group | Surplus Funds & Unclaimed Property Recovery Nationwide',
  description: 'Rebound Capital Group recovers foreclosure surplus funds, tax deed overages, excess proceeds, and unclaimed property in all 50 states. No upfront fees. 100% contingency.',
  keywords: 'surplus funds recovery, foreclosure surplus, tax deed overages, excess proceeds, unclaimed property, asset recovery',
  metadataBase: new URL('https://reboundcapitalgroup.com'),

  authors: [{ name: 'Rebound Capital Group LLC' }],
  creator: 'Rebound Capital Group LLC',
  publisher: 'Rebound Capital Group LLC',

  openGraph: {
    title: 'Rebound Capital Group | Nationwide Surplus Funds Recovery',
    description: 'We recover foreclosure surplus, tax deed overages, and unclaimed property in all 50 states. Zero upfront fees.',
    url: 'https://reboundcapitalgroup.com',
    siteName: 'Rebound Capital Group',
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@reboundcapitalg',
    creator: '@reboundcapitalg',
    title: 'Rebound Capital Group | Nationwide Surplus Funds Recovery',
    description: 'We recover foreclosure surplus, tax deed overages, and unclaimed property in all 50 states. Zero upfront fees.',
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
    canonical: 'https://reboundcapitalgroup.com',
  },

  category: 'Finance',

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': 'https://reboundcapitalgroup.com/#organization',
  name: 'Rebound Capital Group LLC',
  legalName: 'Rebound Capital Group LLC',
  url: 'https://reboundcapitalgroup.com',
  logo: 'https://reboundcapitalgroup.com/rcg-logo.png',
  description: 'Nationwide surplus funds and unclaimed property recovery firm serving all 50 states.',
  telephone: '+1-305-563-4920',
  email: 'contact@reboundcapitalgroup.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '407 Lincoln Road Suite 6H',
    addressLocality: 'Miami Beach',
    addressRegion: 'FL',
    postalCode: '33139',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-305-563-4920',
    contactType: 'customer service',
    email: 'contact@reboundcapitalgroup.com',
    availableLanguage: ['English', 'Spanish'],
    areaServed: 'US',
  },
  sameAs: [
    'https://www.instagram.com/Reboundcapitalgroup/',
    'https://m.facebook.com/61563151283466/',
    'https://www.linkedin.com/company/reboundcapitalgroup',
    'https://x.com/reboundcapitalg',
    'https://www.tiktok.com/@reboundcapitalgroup',
    'https://www.reddit.com/user/ReboundCapitalGroup/',
  ],
  areaServed: [
    { '@type': 'State', name: 'Florida' },
    { '@type': 'State', name: 'Arizona' },
    { '@type': 'State', name: 'Colorado' },
    { '@type': 'State', name: 'Ohio' },
    { '@type': 'State', name: 'Michigan' },
    { '@type': 'Country', name: 'United States' },
  ],
  serviceType: [
    'Surplus Funds Recovery',
    'Foreclosure Surplus Recovery',
    'Tax Deed Overage Recovery',
    'Unclaimed Property Recovery',
    'Estate Recovery',
    'Excess Proceeds Recovery',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://reboundcapitalgroup.com/#website',
  url: 'https://reboundcapitalgroup.com',
  name: 'Rebound Capital Group',
  description: 'Surplus funds recovery across all 50 states',
  publisher: {
    '@id': 'https://reboundcapitalgroup.com/#organization',
  },
  inLanguage: 'en-US',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0e1a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
