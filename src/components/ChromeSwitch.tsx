'use client'
import { usePathname } from 'next/navigation'

/**
 * Pages that use the new design render their own header and footer.
 * Every other page keeps the current Nav and Footer until it is redesigned.
 */
const isRedesigned = (p: string) => p === '/' || p === '/services' || p.startsWith('/services/') || p.startsWith('/states/')

export default function ChromeSwitch({ legacy, redesigned }: { legacy: React.ReactNode; redesigned: React.ReactNode }) {
  const path = usePathname() || '/'
  return <>{isRedesigned(path) ? redesigned : legacy}</>
}
