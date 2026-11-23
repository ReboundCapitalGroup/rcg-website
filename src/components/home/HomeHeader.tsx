'use client'
import { useState, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import s from './home.module.css'

const PhoneIcon = ({ size = 13 }: { size?: number }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const links: [string, string][] = [
  ['Services', '/services'],
  ['States', '/states'],
]

const ICONS: Record<string, ReactNode> = {
  steps: <path d="M4 6h10M4 12h16M4 18h7" />,
  faq: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14" /><path d="M12 17.5h.01" /></>,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  map: <><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z" /><path d="M9 4v14M15 6v14" /></>,
}

const resources: [string, string, string, string][] = [
  ['How It Works', '/resources/how-it-works', 'Six steps, from free search to payout', 'steps'],
  ['FAQs', '/resources/faqs', 'Straight answers, no fine print', 'faq'],
  ['Client Reviews', '/resources/results', '5.0 on Google from real clients', 'star'],
  ['Unclaimed Funds Map', '/map', 'What every state is holding', 'map'],
]

const Chevron = () => (
  <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
)

function ResourcesMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className={s.dd} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" className={s.ddBtn} aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(!open)}>
        Resources <span className={s.ddCaret}><Chevron /></span>
      </button>
      {open && (
        <div className={s.ddMenu} role="menu">
          <div className={s.ddList}>
            {resources.map(([l, href, d, icon]) => (
              <Link key={href} href={href} role="menuitem" className={s.ddItem} onClick={() => setOpen(false)}>
                <span className={s.ddIcon}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[icon]}</svg></span>
                <span className={s.ddText}><b>{l}</b><span>{d}</span></span>
              </Link>
            ))}
          </div>
          <Link href="/contact" className={s.ddFeature} onClick={() => setOpen(false)}>
            <span className={s.ddFeatureTag}>Free, no obligation</span>
            <span className={s.ddFeatureTitle}>Find out what you&apos;re owed.</span>
            <span className={s.ddFeatureMeta}>5.0 ★ on Google · A+ BBB</span>
            <span className={s.ddFeatureCta}>Start a free review →</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default function HomeHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className={s.header}>
      <div className={s.headerInner}>
        <Link href="/" aria-label="Rebound Capital Group home" className={s.logoLink}>
          <Image src="/rcg-logo.png" alt="Rebound Capital Group" width={150} height={90} className={s.logo} priority />
        </Link>
        <div role="navigation" aria-label="Main" className={s.navLinks}>
          {links.slice(0, 2).map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}
          <Link href="/map" className={s.navPill}>Unclaimed Funds Map</Link>
          <ResourcesMenu />
          <Link href="/about">About</Link>
        </div>
        <div className={s.headerRight}>
          <a href="tel:+13055634920" className={`${s.btnPrimary} ${s.headerPhone}`} aria-label="Call or text 24/7: 305-563-4920">
            <PhoneIcon /> <span className={s.headerPhoneText}>305-563-4920</span>
          </a>
          <button type="button" className={s.menuBtn} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="home-menu" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open && (
        <div id="home-menu" className={s.mobileMenu}>
          {menu.map((g) => (
            <div key={g.label} className={s.mobileMenuGroup}>
              <div className={s.eyebrowSm}>{g.label}</div>
              {g.items.map(([l, h]) => <Link key={l} href={h} onClick={() => setOpen(false)}>{l}</Link>)}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
