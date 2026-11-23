import type { Metadata } from 'next'
import '../globals.css'
import SiteDocument from '@/components/SiteDocument'

export const metadata: Metadata = {
  title: 'Rebound Capital Group | Ayuda con Ejecución Hipotecaria y Fondos Excedentes',
  description: 'Rebound Capital Group ayuda a propietarios que enfrentan una ejecución hipotecaria y recupera fondos excedentes, sobrantes de ventas por impuestos y propiedad no reclamada en todo el país. Sin costo por adelantado.',
  metadataBase: new URL('https://reboundcapitalgroup.com'),
  authors: [{ name: 'Rebound Capital Group LLC' }],
  creator: 'Rebound Capital Group LLC',
  publisher: 'Rebound Capital Group LLC',
  openGraph: {
    title: 'Rebound Capital Group | Ayuda con Ejecución Hipotecaria y Fondos Excedentes',
    description: 'Le ayudamos antes y después de la subasta. Sin costo por adelantado. Hablamos español, 24/7.',
    url: 'https://reboundcapitalgroup.com/es',
    siteName: 'Rebound Capital Group',
    type: 'website',
    locale: 'es_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rebound Capital Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@reboundcapitalg',
    creator: '@reboundcapitalg',
    title: 'Rebound Capital Group | Ayuda con Ejecución Hipotecaria y Fondos Excedentes',
    description: 'Le ayudamos antes y después de la subasta. Sin costo por adelantado.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: './' },
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
}

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="es">{children}</SiteDocument>
}
