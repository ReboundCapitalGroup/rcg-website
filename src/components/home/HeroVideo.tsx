'use client'
import { useEffect, useRef } from 'react'

/**
 * Hero background video, started only after the page has finished loading.
 * The still image underneath (hero-poster) shows until then, so the first
 * screen paints fast and the video doesn't compete with it for bandwidth.
 * Phones get the 720p file, larger screens the 1080p file.
 */
export default function HeroVideo({ className }: { className: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    let cancelled = false
    const start = () => {
      if (cancelled) return
      v.src = window.matchMedia('(max-width: 900px)').matches ? '/home/hero-720.mp4' : '/home/hero-1080.mp4'
      v.play().catch(() => {}) // blocked (e.g. Low Power Mode): the still image stays
    }
    const later = () => setTimeout(start, 1500)
    if (document.readyState === 'complete') later()
    else window.addEventListener('load', later, { once: true })
    return () => { cancelled = true; window.removeEventListener('load', later) }
  }, [])
  return <video ref={ref} className={className} muted loop playsInline preload="none" aria-hidden="true" />
}
