'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function DDMenu({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="dd-wrap" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="nav-link-item">{label} <span style={{fontSize:'9px',opacity:0.5}}>▾</span></button>
      {open && <div className="dd-menu">{children}</div>}
    </div>
  )
}

function DDItem({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="dd-item">{children}</Link>
}

export default function Nav() {
  return (
    <header style={{ background:'#000', position:'sticky', top:0, zIndex:100 }}>
      {/* TOP BAR — phone only */}
      <div style={{ borderBottom:'1px solid rgba(30,40,127,0.25)', padding:'5px 32px', display:'flex', alignItems:'center', justifyContent:'flex-end', background:'#000' }}>
        <a href="tel:+13055634920" style={{ fontFamily:"'Space Mono',monospace", fontSize:'12px', fontWeight:700, letterSpacing:'2px', color:'#c8d8ff', textDecoration:'none', display:'flex', alignItems:'center', gap:'8px', transition:'color 0.15s' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1E287F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          305-563-4920
        </a>
      </div>

      {/* MAIN NAV */}
      <nav style={{ height:'68px', background:'#000', borderBottom:'1px solid rgba(30,40,127,0.25)', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 32px' }}>

        {/* LOGO — larger, pushed left */}
        <Link href="/" style={{ display:'flex', alignItems:'center', textDecoration:'none', flexShrink:0, marginRight:'32px' }}>
          <Image src="/rcg-logo.png" alt="Rebound Capital Group" width={96} height={70} style={{ height:'60px', width:'auto', objectFit:'contain' }} priority />
        </Link>

        {/* NAV LINKS */}
        <div className="nav-links">
          <DDMenu label="Services">
            <div className="dd-label">Recovery</div>
            <DDItem href="/services/surplus-funds">Surplus Funds Recovery</DDItem>
            <DDItem href="/services/foreclosure-surplus">Foreclosure Surplus</DDItem>
            <DDItem href="/services/tax-deed-surplus">Tax Deed Surplus</DDItem>
            <DDItem href="/services/excess-proceeds">Excess Proceeds / Overages</DDItem>
            <div className="dd-label" style={{marginTop:'8px'}}>Asset Recovery</div>
            <DDItem href="/services/unclaimed-property">Unclaimed Property</DDItem>
            <DDItem href="/services/state-unclaimed-funds">State Unclaimed Funds</DDItem>
            <DDItem href="/services/foreclosure-solutions">Foreclosure Solutions</DDItem>
          </DDMenu>
          <DDMenu label="States">
            <div className="dd-label">Active Now</div>
            <DDItem href="/states/florida">Florida — 67 Counties</DDItem>
            <DDItem href="/states/arizona">Arizona — 15 Counties</DDItem>
            <DDItem href="/states/colorado">Colorado — 64 Counties</DDItem>
            <div className="dd-label" style={{marginTop:'8px'}}>Expanding</div>
            <DDItem href="/states/georgia">Georgia</DDItem>
            <DDItem href="/states/ohio">Ohio</DDItem>
            <DDItem href="/states/new-jersey">New Jersey</DDItem>
            <DDItem href="/states">All 50 States →</DDItem>
          </DDMenu>
          <Link href="/map" className="nav-map-btn">Unclaimed Funds Map</Link>
          <DDMenu label="Resources">
            <DDItem href="/resources/how-it-works">How It Works</DDItem>
            <DDItem href="/resources/faqs">FAQs</DDItem>
            <DDItem href="/resources/blog">Blog / County Guides</DDItem>
            <DDItem href="/resources/state-laws">State Laws & Deadlines</DDItem>
            <DDItem href="/resources/results">Client Results</DDItem>
          </DDMenu>
          <Link href="/about" className="nav-link-item">About</Link>
          <Link href="/contact" className="nav-cta">Free Claim Review</Link>
        </div>
      </nav>
    </header>
  )
}
