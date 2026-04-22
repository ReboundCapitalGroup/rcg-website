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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [statesOpen, setStatesOpen] = useState(false)

  return (
    <>
      <header style={{ background: '#000', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(30,40,127,0.18)' }}>
        <nav style={{ height: '80px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>

          {/* LOGO */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, paddingLeft: '40px' }}>
            <Image src="/rcg-logo.png" alt="Rebound Capital Group" width={150} height={90} style={{ height: '62px', width: 'auto', objectFit: 'contain' }} priority />
          </Link>

          {/* DESKTOP NAV */}
          <div className="nav-links desktop-nav">
            <a href="tel:+13055634920" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', color: '#5878a8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 20px', marginRight: '8px', background: 'transparent', border: '1px solid rgba(74,127,212,0.22)', textTransform: 'uppercase' as const, transition: 'all 0.2s', position: 'relative' as const }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              305-563-4920
            </a>

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

            <Link href="/map" className="nav-map-btn">Unclaimed Property Map</Link>

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

          {/* MOBILE CONTROLS */}
          <div className="mobile-nav-controls">
            <a href="tel:+13055634920" className="mobile-phone-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
            <button className="hamburger-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>

        </nav>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        {/* Drawer header */}
        <div className="mobile-drawer-header">
          <Image src="/rcg-logo.png" alt="RCG" width={100} height={60} style={{ height: '44px', width: 'auto' }} />
          <button className="drawer-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
        </div>

        {/* Primary CTAs */}
        <div className="mobile-cta-row">
          <Link href="/contact" className="mobile-cta-primary" onClick={() => setMobileOpen(false)}>Free Claim Review</Link>
          <a href="tel:+13055634920" className="mobile-cta-secondary">305-563-4920</a>
        </div>

        {/* Nav links */}
        <nav className="mobile-nav-links">

          {/* Services accordion */}
          <button className="mobile-nav-section" onClick={() => setServicesOpen(!servicesOpen)}>
            <span>Services</span>
            <span className={`mobile-chevron ${servicesOpen ? 'open' : ''}`}>▾</span>
          </button>
          {servicesOpen && (
            <div className="mobile-nav-sub">
              <div className="mobile-nav-group-label">Foreclosure Solutions</div>
              <Link href="/services/foreclosure-surplus" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Surplus Recovery</Link>
              <Link href="/services/probate-time-extensions" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Probate &amp; Time Extensions</Link>
              <Link href="/services/mortgage-assumptions" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Mortgage Assumptions</Link>
              <Link href="/services/cash-offer" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Cash Offer on Property</Link>
              <div className="mobile-nav-group-label">Surplus &amp; Overage Recovery</div>
              <Link href="/services/tax-deed-surplus" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Tax Deed Overages</Link>
              <Link href="/services/excess-proceeds" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Excess Proceeds / Overages</Link>
              <div className="mobile-nav-group-label">Unclaimed Property</div>
              <Link href="/services/unclaimed-property" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>State-Held Funds</Link>
              <Link href="/services/state-unclaimed-funds" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Unclaimed Assets</Link>
              <div className="mobile-nav-group-label">Estate, Trust &amp; Business</div>
              <Link href="/services/estate-recovery" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Estate &amp; Heir Recovery</Link>
              <Link href="/services/trust-recovery" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Trust Asset Recovery</Link>
              <Link href="/services/business-asset-recovery" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>LLC &amp; Business Asset Recovery</Link>
            </div>
          )}

          {/* States accordion - now matches desktop nav exactly */}
          <button className="mobile-nav-section" onClick={() => setStatesOpen(!statesOpen)}>
            <span>States</span>
            <span className={`mobile-chevron ${statesOpen ? 'open' : ''}`}>▾</span>
          </button>
          {statesOpen && (
            <div className="mobile-nav-sub">
              <div className="mobile-nav-group-label">Active Now</div>
              <Link href="/states/florida" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Florida — 67 Counties</Link>
              <Link href="/states/arizona" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Arizona — 15 Counties</Link>
              <Link href="/states/colorado" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Colorado — 64 Counties</Link>
              <Link href="/states/ohio" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Ohio — 88 Counties</Link>
              <Link href="/states/michigan" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Michigan — 83 Counties</Link>
              <div className="mobile-nav-group-label">Expanding Soon</div>
              <Link href="/states/georgia" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Georgia — 159 Counties</Link>
              <Link href="/states/new-jersey" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>New Jersey — 21 Counties</Link>
              <Link href="/states/texas" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Texas — 254 Counties</Link>
              <Link href="/states/north-carolina" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>North Carolina — 100 Counties</Link>
              <Link href="/states/virginia" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Virginia — 95 Counties</Link>
              <Link href="/states" className="mobile-nav-item" onClick={() => setMobileOpen(false)} style={{ color: '#4a7fd4', fontWeight: 600 }}>All 50 States →</Link>
            </div>
          )}

          <Link href="/map" className="mobile-nav-section-link" onClick={() => setMobileOpen(false)}>Unclaimed Property Map</Link>
          <Link href="/resources/how-it-works" className="mobile-nav-section-link" onClick={() => setMobileOpen(false)}>How It Works</Link>
          <Link href="/resources/faqs" className="mobile-nav-section-link" onClick={() => setMobileOpen(false)}>FAQs</Link>
          <Link href="/about" className="mobile-nav-section-link" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className="mobile-nav-section-link" onClick={() => setMobileOpen(false)}>Contact</Link>
        </nav>

        {/* Drawer footer */}
        <div className="mobile-drawer-footer">
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '7px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2a3a60', lineHeight: 1.8, textAlign: 'center' }}>
            All recovery services conducted in partnership with licensed attorneys and licensed private investigators. RCG does not practice law.
          </p>
        </div>
      </div>
    </>
  )
}
