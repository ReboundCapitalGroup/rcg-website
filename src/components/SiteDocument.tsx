import type { ReactNode } from 'react'
import AttributionTracker from '@/components/AttributionTracker'
import Analytics from '@/components/Analytics'
import MobileCallBar from '@/components/MobileCallBar'
import HomeHeader from '@/components/home/HomeHeader'
import HomeFooter from '@/components/home/HomeFooter'
import type { Lang } from '@/lib/i18n'
import Hreflang from '@/components/Hreflang'

const organizationSchema = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': 'https://reboundcapitalgroup.com/#organization',
  name: 'Rebound Capital Group LLC',
  legalName: 'Rebound Capital Group LLC',
  url: 'https://reboundcapitalgroup.com',
  logo: 'https://reboundcapitalgroup.com/rcg-logo.png',
  description: lang === 'es'
    ? 'Rebound Capital Group ayuda a propietarios en todo el país. Los reclamos se presentan a través de nuestra red de abogados con licencia en el estado donde se encuentran los fondos.'
    : 'Rebound Capital Group serves homeowners nationwide. Claims are filed through our network of licensed attorneys in the state where the funds are held.',
  telephone: '+1-305-563-4920',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miami Beach',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-305-563-4920',
    contactType: 'customer service',
    url: lang === 'es' ? 'https://reboundcapitalgroup.com/es/contacto' : 'https://reboundcapitalgroup.com/contact',
    availableLanguage: ['English', 'Spanish'],
    areaServed: 'US',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.instagram.com/Reboundcapitalgroup/',
    'https://m.facebook.com/61563151283466/',
    'https://www.linkedin.com/company/reboundcapitalgroup',
    'https://x.com/reboundcapitalg',
    'https://www.tiktok.com/@reboundcapitalgroup',
    'https://www.reddit.com/user/ReboundCapitalGroup/',
    'https://www.bbb.org/us/fl/miami-beach/profile/financial-consultants/rebound-capital-group-0633-92041559',
  ],
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: [
    'Surplus Funds Recovery',
    'Foreclosure Surplus Recovery',
    'Tax Deed Overage Recovery',
    'Unclaimed Property Recovery',
    'Estate Recovery',
    'Excess Proceeds Recovery',
  ],
})

const websiteSchema = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://reboundcapitalgroup.com/#website',
  url: 'https://reboundcapitalgroup.com',
  name: 'Rebound Capital Group',
  description: lang === 'es' ? 'Ayuda con ejecución hipotecaria y recuperación de fondos excedentes en todo el país' : 'Foreclosure help and surplus funds recovery nationwide',
  publisher: {
    '@id': 'https://reboundcapitalgroup.com/#organization',
  },
  inLanguage: lang === 'es' ? 'es-US' : 'en-US',
})


/** The shared html/body for both language root layouts. */
export default function SiteDocument({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang}>
      <head>
        <meta name="theme-color" content="#0d1322" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Michroma&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema(lang)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema(lang)) }} />
      </head>
      <body>
        <Hreflang />
        <AttributionTracker />
        <Analytics />
        <HomeHeader />
        <main>{children}</main>
        <HomeFooter lang={lang} />
        <MobileCallBar lang={lang} />
      </body>
    </html>
  )
}
