'use client'

import { useEffect } from 'react'
import { captureAttribution } from '@/lib/attribution'

/**
 * Mount once in the root layout. Captures where the visitor came from on
 * their FIRST page view of the session, before any internal navigation
 * overwrites document.referrer.
 *
 * Renders nothing.
 */
export default function AttributionTracker() {
  useEffect(() => {
    captureAttribution()
  }, [])

  return null
}
