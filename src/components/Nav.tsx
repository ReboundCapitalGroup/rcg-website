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
    <nav style={{ height:'68px', background:'#000', borderBottom:'1px solid rgba(74,95,212,0.25)', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 28px', position:'sticky', top:0, zIndex:100 }}>
      
      {/* LOGO */}
      <Link href="/" style={{ display:'flex', alignItems:'center', gap:'0px', textDecoration:'none', flexShrink:0 }}>
        <Image src="/rcg-logo.png" alt="Rebound Capital Group" width={72} height={56} style={{ height:'54px', width:'auto', objectFit:'contain' }} priority />
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
  )
}
