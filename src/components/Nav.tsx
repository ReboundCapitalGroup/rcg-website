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
    <header style={{ background:'#000', position:'sticky', top:0, zIndex:100, borderBottom:'1px solid rgba(30,40,127,0.25)' }}>
      <nav style={{ height:'88px', background:'#000', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 32px' }}>

        {/* LEFT — Logo + Company Name centered under logo */}
        <Link href="/" style={{ display:'flex', flexDirection:'column', alignItems:'center', textDecoration:'none', flexShrink:0, gap:'4px', minWidth:'180px' }}>
          <Image
            src="/rcg-logo.png"
            alt="Rebound Capital Group"
            width={120}
            height={76}
            style={{ height:'66px', width:'auto', objectFit:'contain' }}
            priority
          />
          <span style={{
            fontFamily:"Arial Black, 'Arial Bold', sans-serif",
            fontWeight: 900,
            fontSize: '11px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            color: '#ffffff',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            display: 'block',
          }}>
            Rebound Capital Group
          </span>
        </Link>

        {/* RIGHT — Nav links + phone + CTA */}
        <div style={{ display:'flex', alignItems:'center', gap:'0' }}>
          {/* Phone */}
          <a href="tel:+13055634920" style={{
            fontFamily:"'Space Mono',monospace",
            fontSize:'12px',
            fontWeight:700,
            letterSpacing:'2px',
            color:'#ffffff',
            textDecoration:'none',
            display:'flex',
            alignItems:'center',
            gap:'8px',
            padding:'8px 16px',
            marginRight:'8px',
            background:'#1E287F',
            border:'1px solid rgba(255,255,255,0.12)',
            boxShadow:'0 2px 0 rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            305-563-4920
          </a>

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
        </div>
      </nav>
    </header>
  )
}
