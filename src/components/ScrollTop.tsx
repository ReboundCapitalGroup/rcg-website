'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Always start a new page at the top. Next.js sometimes keeps the old scroll
 * position (sticky header, smooth scrolling, phones), so we reset it ourselves.
 * Anchor links (#section) and the browser Back/Forward buttons are left alone,
 * so Back still returns to where you were.
 */
let fromHistory = false
if (typeof window !== 'undefined') window.addEventListener('popstate', () => { fromHistory = true })

export default function ScrollTop() {
  const pathname = usePathname()
  useEffect(() => {
    if (fromHistory) { fromHistory = false; return }
    if (window.location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}
