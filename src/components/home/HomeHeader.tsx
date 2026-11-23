'use client'
import { useState } from 'react'
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
  ['Resources', '/resources/how-it-works'],
  ['About', '/about'],
]

const menu: { label: string; items: [string, string][] }[] = [
  { label: 'Before the auction', items: [['Foreclosure Help', '/services/foreclosure-solutions'], ['Time Extensions', '/services/time-extensions'], ['Mortgage Assumptions', '/services/mortgage-assumptions'], ['Cash Offer', '/services/cash-offer']] },
  { label: 'After the auction', items: [['Surplus Funds', '/services/foreclosure-surplus'], ['Tax Deed Overages', '/services/tax-deed-surplus'], ['Estate & Heir Recovery', '/services/estate-recovery'], ['Probate Help for Heirs', '/services/probate-assistance']] },
  { label: 'More', items: [['Unclaimed Funds Map', '/map'], ['All States', '/states'], ['How It Works', '/resources/how-it-works'], ['FAQs', '/resources/faqs'], ['About', '/about'], ['Contact', '/contact']] },
]

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
          {links.slice(2).map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}
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
