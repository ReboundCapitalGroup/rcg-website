'use client'
import { usePathname } from 'next/navigation'
import { isEs, toEn, toEs } from '@/lib/i18n'

const SITE = 'https://reboundcapitalgroup.com'
const abs = (p: string) => SITE + (p === '/' ? '' : p)

/**
 * hreflang links pairing each English page with its Spanish twin.
 * React hoists these <link> tags into <head>. The sitemap carries the same pairs.
 */
export default function Hreflang() {
  const path = usePathname() || '/'
  const en = isEs(path) ? toEn(path) : path
  const es = isEs(path) ? path : toEs(path)
  return (
    <>
      <link rel="alternate" hrefLang="en" href={abs(en)} />
      <link rel="alternate" hrefLang="es" href={abs(es)} />
      <link rel="alternate" hrefLang="x-default" href={abs(en)} />
    </>
  )
}
