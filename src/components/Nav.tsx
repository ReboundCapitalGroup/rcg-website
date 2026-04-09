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

function DDLabel({ children, mt }: { children: React.ReactNode; mt?: boolean }) {
  return <div className="dd-label" style={mt ? { marginTop: '8px' } : {}}>{children}</div>
}

export default function Nav() {
  return (
    <header style={{ background: '#000', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(30,40,127,0.25)' }}>
      <nav style={{ height: '88px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>

        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, marginLeft: '24px' }}>
          <Image src="/rcg-logo.png" alt="Rebound Capital Group" width={150} height={90} style={{ height: '68px', width: 'auto', objectFit: 'contain' }} priority />
        </Link>

        {/* NAV */}
        <div className="nav-links">

          {/* PHONE */}
          <a href="tel:+13055634920" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '11px', fontWeight: 900, letterSpacing: '1.5px', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', marginRight: '8px', background: '#1E287F', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 2px 0 rgba(0,0,0,0.4)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            305-563-4920
          </a>

          {/* SERVICES */}
          <DDMenu label="Services">
            <DDLabel>Foreclosure Solutions</DDLabel>
            <DDItem href="/services/foreclosure-surplus">Surplus Recovery</DDItem>
            <DDItem href="/services/probate-time-extensions">Probate &amp; Time Extensions</DDItem>
            <DDItem href="/services/mortgage-assumptions">Mortgage Assumptions</DDItem>
            <DDItem href="/services/cash-offer">Cash Offer on Property</DDItem>

            <DDLabel mt>Surplus &amp; Overage Recovery</DDLabel>
            <DDItem href="/services/foreclosure-surplus">Foreclosure Surplus Funds</DDItem>
            <DDItem href="/services/tax-deed-surplus">Tax Deed Overages</DDItem>
            <DDItem href="/services/excess-proceeds">Excess Proceeds / Overages</DDItem>

            <DDLabel mt>Unclaimed Property</DDLabel>
            <DDItem href="/services/unclaimed-property">State-Held Funds</DDItem>
            <DDItem href="/services/state-unclaimed-funds">Unclaimed Assets</DDItem>

            <DDLabel mt>Estate, Trust &amp; Business Recovery</DDLabel>
            <DDItem href="/services/estate-recovery">Estate &amp; Heir Recovery</DDItem>
            <DDItem href="/services/trust-recovery">Trust Asset Recovery</DDItem>
            <DDItem href="/services/business-asset-recovery">LLC &amp; Business Asset Recovery</DDItem>
          </DDMenu>

          {/* STATES */}
          <DDMenu label="States">
            <DDLabel>Active Now</DDLabel>
            <DDItem href="/states/florida">Florida — 67 Counties</DDItem>
            <DDItem href="/states/arizona">Arizona — 15 Counties</DDItem>
            <DDItem href="/states/colorado">Colorado — 64 Counties</DDItem>
            <DDItem href="/states/ohio">Ohio — 88 Counties</DDItem>
            <DDItem href="/states/michigan">Michigan — 83 Counties</DDItem>

            <DDLabel mt>Expanding Soon</DDLabel>
            <DDItem href="/states/georgia">Georgia — 159 Counties</DDItem>
            <DDItem href="/states/new-jersey">New Jersey — 21 Counties</DDItem>
            <DDItem href="/states/texas">Texas — 254 Counties</DDItem>
            <DDItem href="/states/north-carolina">North Carolina — 100 Counties</DDItem>
            <DDItem href="/states/virginia">Virginia — 95 Counties</DDItem>
            <DDItem href="/states">All 50 States →</DDItem>
          </DDMenu>

          <Link href="/map" className="nav-map-btn">Unclaimed Funds Map</Link>

          {/* RESOURCES */}
          <DDMenu label="Resources">
            <DDItem href="/resources/how-it-works">How It Works</DDItem>
            <DDItem href="/resources/faqs">FAQs</DDItem>
            <DDItem href="/resources/blog">Blog / County Guides</DDItem>
            <DDItem href="/resources/state-laws">State Laws &amp; Deadlines</DDItem>
            <DDItem href="/resources/results">Client Results</DDItem>
          </DDMenu>

          <Link href="/about" className="nav-link-item">About</Link>
          <Link href="/contact" className="nav-cta">Free Claim Review</Link>
        </div>
      </nav>
    </header>
  )
}
