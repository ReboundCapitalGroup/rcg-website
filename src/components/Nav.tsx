'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  { label: 'Surplus Funds Recovery', href: '/services/surplus-funds' },
  { label: 'Foreclosure Surplus', href: '/services/foreclosure-surplus' },
  { label: 'Tax Deed Surplus', href: '/services/tax-deed-surplus' },
  { label: 'Excess Proceeds / Overages', href: '/services/excess-proceeds' },
  { label: 'Unclaimed Property', href: '/services/unclaimed-property' },
  { label: 'State Unclaimed Funds', href: '/services/state-unclaimed-funds' },
  { label: 'Foreclosure Solutions', href: '/services/foreclosure-solutions' },
]

const statesNav = [
  { label: 'Florida — 67 Counties', href: '/states/florida' },
  { label: 'Arizona — 15 Counties', href: '/states/arizona' },
  { label: 'Colorado — 64 Counties', href: '/states/colorado' },
  { label: 'Georgia', href: '/states/georgia' },
  { label: 'Ohio', href: '/states/ohio' },
  { label: 'New Jersey', href: '/states/new-jersey' },
  { label: 'All 50 States →', href: '/states' },
]

const resources = [
  { label: 'How It Works', href: '/resources/how-it-works' },
  { label: 'FAQs', href: '/resources/faqs' },
  { label: 'Blog / County Guides', href: '/resources/blog' },
  { label: 'State Laws & Deadlines', href: '/resources/state-laws' },
  { label: 'Client Results', href: '/resources/results' },
]

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false)
  const isRecovery = ['Surplus Funds Recovery','Foreclosure Surplus','Tax Deed Surplus','Excess Proceeds / Overages'].some(s => items.find(i => i.label === s))

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="nav-link text-[11px] font-semibold tracking-[1px] uppercase px-3 h-16 flex items-center gap-1 bg-transparent border-none cursor-pointer" style={{ fontFamily: 'var(--mono)' }}>
        {label} <span className="text-[9px] opacity-60">▾</span>
      </button>
      {open && (
        <div className="absolute top-16 left-0 z-50 min-w-[230px] py-1"
          style={{ background: 'linear-gradient(160deg,#1e2d55 0%,#141e3a 40%,#0d1528 100%)', border: '1px solid rgba(143,163,240,0.25)', borderTop: '2px solid var(--rcg2)', boxShadow: '0 8px 32px rgba(0,0,0,0.6),inset 0 1px 0 rgba(255,255,255,0.05)' }}>
          {label === 'Services' && (
            <>
              <div className="px-4 py-2 text-[9px] font-bold tracking-[2px] uppercase" style={{ color: 'var(--rcg2)', fontFamily: 'var(--mono)' }}>Recovery</div>
              {items.slice(0,4).map(i => <DropItem key={i.href} {...i} />)}
              <div className="px-4 py-2 text-[9px] font-bold tracking-[2px] uppercase mt-2" style={{ color: 'var(--rcg2)', fontFamily: 'var(--mono)' }}>Asset Recovery</div>
              {items.slice(4).map(i => <DropItem key={i.href} {...i} />)}
            </>
          )}
          {label === 'States' && (
            <>
              <div className="px-4 py-2 text-[9px] font-bold tracking-[2px] uppercase" style={{ color: 'var(--rcg2)', fontFamily: 'var(--mono)' }}>Active Now</div>
              {items.slice(0,3).map(i => <DropItem key={i.href} {...i} />)}
              <div className="px-4 py-2 text-[9px] font-bold tracking-[2px] uppercase mt-2" style={{ color: 'var(--rcg2)', fontFamily: 'var(--mono)' }}>Expanding</div>
              {items.slice(3).map(i => <DropItem key={i.href} {...i} />)}
            </>
          )}
          {label === 'Resources' && items.map(i => <DropItem key={i.href} {...i} />)}
        </div>
      )}
    </div>
  )
}

function DropItem({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="block px-4 py-2 text-[11px] font-medium transition-all duration-150 hover:pl-5"
      style={{ color: '#b8ceff', fontFamily: 'var(--sans)' }}
      onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; (e.target as HTMLElement).style.background = 'rgba(74,95,212,0.15)' }}
      onMouseLeave={e => { (e.target as HTMLElement).style.color = '#b8ceff'; (e.target as HTMLElement).style.background = 'transparent' }}>
      {label}
    </Link>
  )
}

export default function Nav() {
  return (
    <nav className="h-16 sticky top-0 z-50 flex items-center justify-between px-8" style={{ background: '#111827', borderBottom: '1px solid var(--rcgline)' }}>
      <Link href="/" className="flex items-center gap-3 no-underline">
        <Image src="/rcg-logo.png" alt="RCG Logo" width={48} height={40} style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
        <div>
          <div className="text-[13px] font-bold tracking-[2px] uppercase text-white" style={{ fontFamily: 'var(--sans)', lineHeight: 1.1 }}>Rebound Capital</div>
          <div className="text-[8px] tracking-[3px] mt-0.5" style={{ fontFamily: 'var(--mono)', color: 'var(--rcglt)' }}>Group LLC</div>
        </div>
      </Link>

      <div className="flex items-center gap-0">
        <Dropdown label="Services" items={services} />
        <Dropdown label="States" items={statesNav} />

        <Link href="/map" className="nav-link text-[10px] font-bold tracking-[1px] uppercase px-4 py-2 mx-1 cursor-pointer"
          style={{ fontFamily: 'var(--mono)', border: '1px solid var(--rcgline)', background: 'var(--rcgglow)', color: '#c8d8ff' }}>
          Unclaimed Funds Map
        </Link>

        <Dropdown label="Resources" items={resources} />

        <Link href="/about" className="nav-link text-[11px] font-semibold tracking-[1px] uppercase px-3 h-16 flex items-center" style={{ fontFamily: 'var(--mono)', color: '#c8d8ff' }}>
          About
        </Link>

        <Link href="/contact" className="btn-metal text-white text-[11px] font-bold tracking-[1px] uppercase px-5 py-2.5 ml-2 cursor-pointer"
          style={{ fontFamily: 'var(--sans)' }}>
          Free Claim Review
        </Link>
      </div>
    </nav>
  )
}
