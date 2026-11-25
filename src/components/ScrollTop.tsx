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
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => { fromHistory = true })
  // Before a refresh or leaving, tell the browser not to restore the old position, so a refresh opens at the top.
  window.addEventListener('pagehide', () => { history.scrollRestoration = 'manual' })
}

export default function ScrollTop() {
  const pathname = usePathname()
  // A refresh should start at the top too (phones otherwise jump back to where you were, often the bottom).
  useEffect(() => {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    if (nav?.type !== 'reload' || window.location.hash) return
    history.scrollRestoration = 'manual'
    const top = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
    top()
    if (document.readyState !== 'complete') window.addEventListener('load', top, { once: true })
    const t = setTimeout(() => { history.scrollRestoration = 'auto' }, 1000)
    return () => { clearTimeout(t); window.removeEventListener('load', top) }
  }, [])
  useEffect(() => {
    if (fromHistory) { fromHistory = false; return }
    if (window.location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}
