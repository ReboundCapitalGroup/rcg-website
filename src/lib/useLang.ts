'use client'
import { usePathname } from 'next/navigation'
import { isEs, type Lang } from './i18n'

/** Language of the current page, for client components. */
export function useLang(): Lang {
  const p = usePathname() || '/'
  return isEs(p) ? 'es' : 'en'
}
