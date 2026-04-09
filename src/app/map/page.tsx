import type { Metadata } from 'next'
import Link from 'next/link'
import USAMap from './USAMap'

export const metadata: Metadata = {
  title: 'Unclaimed Property by State | Rebound Capital Group',
  description: 'Over $70 billion in unclaimed property is held by U.S. states. Search your state and find out what may be owed to you.',
}

const activeStates = [
  { code: 'FL', name: 'Florida', slug: 'florida', funds: '$2.4B', counties: 67 },
  { code: 'AZ', name: 'Arizona', slug: 'arizona', funds: '$1.8B', counties: 15 },
  { code: 'CO', name: 'Colorado', slug: 'colorado', funds: '$980M', counties: 64 },
  { code: 'OH', name: 'Ohio', slug: 'ohio', funds: '$4.8B', counties: 88 },
  { code: 'MI', name: 'Michigan', slug: 'michigan', funds: '$1.2B', counties: 83 },
]

const allStateFunds = [
  { name: 'California', funds: '$15B' }, { name: 'New York', funds: '$13B' },
  { name: 'Texas', funds: '$10.5B' }, { name: 'Ohio', funds: '$4.8B' },
  { name: 'Pennsylvania', funds: '$4.5B' }, { name: 'Illinois', funds: '$3.2B' },
  { name: 'New Jersey', funds: '$2.8B' }, { name: 'Florida', funds: '$2.4B' },
  { name: 'Massachusetts', funds: '$2.4B' }, { name: 'Arizona', funds: '$1.8B' },
  { name: 'Georgia', funds: '$1.6B' }, { name: 'Virginia', funds: '$1.5B' },
  { name: 'Washington', funds: '$1.4B' }, { name: 'North Carolina', funds: '$1.3B' },
  { name: 'Michigan', funds: '$1.2B' }, { name: 'Maryland', funds: '$1.1B' },
  { name: 'Minnesota', funds: '$1.0B' }, { name: 'Colorado', funds: '$980M' },
  { name: 'Tennessee', funds: '$980M' }, { name: 'Wisconsin', funds: '$890M' },
]

export default function MapPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* Grid overlay — same as homepage */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.04) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none', zIndex: 0 }} />

      {/* Radial glow — same as homepage */}
      <div style={{ position: 'fixed', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.15) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Scan line — same as homepage */}
      <div className="scan-animate" style={{ position: 'fixed', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />

      {/* All content above effects */}
      <div style={{ position: 'relative', zIndex: 2 }}>

        {/* HERO */}
        <div style={{ padding: '52px 40px 36px', textAlign: 'center', borderBottom: '1px solid rgba(74,95,212,0.12)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '30px', height: '1px', background: 'rgba(74,95,212,0.4)' }} />
              <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#ffffff', opacity: 0.5 }}>
                Unclaimed Property Intelligence
              </span>
              <div style={{ width: '30px', height: '1px', background: 'rgba(74,95,212,0.4)' }} />
            </div>

            <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,5vw,58px)', color: '#1E287F', letterSpacing: '-2px', lineHeight: 1, marginBottom: '20px', textShadow: '0 0 40px rgba(30,40,127,0.8), -1px -1px 0 rgba(255,255,255,0.15), 1px -1px 0 rgba(255,255,255,0.15), -1px 1px 0 rgba(255,255,255,0.15), 1px 1px 0 rgba(255,255,255,0.15)' }}>
              Your Money Is Out There.
            </h1>

            <p style={{ fontSize: '15px', color: 'var(--mid)', lineHeight: 1.8, maxWidth: '580px', margin: '0 auto 12px' }}>
              Banks, insurers, courts, and employers report billions in unclaimed funds to state governments every year. Most people never know it exists.
            </p>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', color: '#4a5f94', marginBottom: '32px', letterSpacing: '0.5px' }}>
              Hover any state to see what's being held. Click to start a recovery.
            </p>

            {/* COUNTER */}
            <div style={{ display: 'inline-block', background: 'rgba(30,40,127,0.12)', border: '1px solid rgba(74,95,212,0.3)', padding: '24px 48px' }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a5f94', marginBottom: '10px' }}>
                Estimated Unclaimed Property — U.S. States
              </div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,5vw,52px)', color: 'var(--text)', letterSpacing: '-2px', lineHeight: 1, marginBottom: '10px' }}>
                $70,847,000,000+
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <span className="pulse-animate" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4a5fcd', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a5f94' }}>
                  Updated weekly via state treasury reports
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div style={{ borderBottom: '1px solid rgba(74,95,212,0.12)' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
            {[
              { val: '50', label: 'Expanding to All 50 States', blue: false },
              { val: '5', label: 'Active Live States', blue: true },
              { val: '30d', label: 'Avg. Claim Turnaround', blue: false },
              { val: '$0', label: 'Upfront Cost — Ever', blue: false },
            ].map((s, i) => (
              <div key={i} style={{ padding: '20px 24px', borderRight: i < 3 ? '1px solid rgba(74,95,212,0.12)' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '28px', color: s.blue ? 'var(--rcg2)' : 'var(--text)', letterSpacing: '-1px', lineHeight: 1 }}>
                  {s.val}
                </div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#ffffff', marginTop: '4px', opacity: 0.7 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAP — seamless, no box */}
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 24px 16px' }}>
          <USAMap />
        </div>

        {/* ACTIVE STATES */}
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '16px 24px 40px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="pulse-animate" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--rcg2)', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a5f94' }}>
              Active — Live Monitoring
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '8px', marginBottom: '40px' }}>
            {activeStates.map(s => (
              <Link key={s.code} href={`/states/${s.slug}`} style={{ textDecoration: 'none', background: 'rgba(30,40,127,0.1)', border: '1px solid rgba(74,95,212,0.25)', padding: '16px', display: 'block' }}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', fontWeight: 700, color: 'var(--rcg2)', letterSpacing: '1px', marginBottom: '4px' }}>{s.code}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>{s.name}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '20px', fontWeight: 700, color: '#fff', letterSpacing: '-0.5px', marginBottom: '4px' }}>{s.funds}</div>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '7px', color: '#4a5f94', letterSpacing: '1px', textTransform: 'uppercase' }}>{s.counties} counties monitored</div>
              </Link>
            ))}
          </div>

          {/* TOP STATES GRID */}
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a5f94', marginBottom: '14px' }}>
            // Top States by Unclaimed Funds Held
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '6px', marginBottom: '48px' }}>
            {allStateFunds.map((s, i) => (
              <div key={i} style={{ background: 'rgba(30,40,127,0.06)', border: '1px solid rgba(74,95,212,0.1)', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '12px', color: '#ffffff', fontWeight: 600, opacity: 0.8 }}>{s.name}</span>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '12px', color: '#ffffff', fontWeight: 700 }}>{s.funds}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Free Claim Review</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>

          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(74,95,212,0.1)', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#ffffff', opacity: 0.3, lineHeight: 2 }}>
              All recovery services conducted in partnership with licensed attorneys and licensed private investigators. RCG does not practice law.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
