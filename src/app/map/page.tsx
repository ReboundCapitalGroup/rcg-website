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
  { name: 'Massachusetts', funds: '$2.4B' }, { name: 'Michigan', funds: '$1.2B' },
  { name: 'Georgia', funds: '$1.6B' }, { name: 'Maryland', funds: '$1.1B' },
  { name: 'Washington', funds: '$1.4B' }, { name: 'North Carolina', funds: '$1.3B' },
  { name: 'Virginia', funds: '$1.5B' }, { name: 'Minnesota', funds: '$1.0B' },
  { name: 'Arizona', funds: '$1.8B' }, { name: 'Colorado', funds: '$980M' },
  { name: 'Tennessee', funds: '$980M' }, { name: 'Wisconsin', funds: '$890M' },
]

export default function MapPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* HERO */}
      <div style={{ background: 'linear-gradient(180deg, #0a0f1a 0%, #0f1520 100%)', borderBottom: '1px solid rgba(30,40,127,0.2)', padding: '52px 40px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#2a4080', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <div style={{ width: '30px', height: '1px', background: '#1E287F' }} />
            Unclaimed Property Intelligence
            <div style={{ width: '30px', height: '1px', background: '#1E287F' }} />
          </div>

          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,52px)', color: '#fff', letterSpacing: '-2px', lineHeight: 0.95, marginBottom: '20px' }}>
            Your Money Is Out There.
          </h1>

          <p style={{ fontSize: '15px', color: '#8fa8cc', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto 12px' }}>
            Banks, insurers, courts, and employers report billions in unclaimed funds to state governments every year. Most people never know it exists.
          </p>
          <p style={{ fontSize: '13px', color: '#4a6090', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 32px', fontFamily: "'Space Mono',monospace" }}>
            Hover any state to see what's being held. Click to start a recovery.
          </p>

          {/* ANIMATED COUNTER */}
          <div style={{ background: 'linear-gradient(135deg, #0d1525 0%, #111e35 100%)', border: '1px solid rgba(30,40,127,0.4)', padding: '24px 32px', marginBottom: '32px', display: 'inline-block', minWidth: '380px' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2a4080', marginBottom: '8px' }}>
              Estimated Unclaimed Property — U.S. States
            </div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,5vw,56px)', color: '#4a7fd4', letterSpacing: '-2px', lineHeight: 1 }}>
              $70,847,000,000+
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center', marginTop: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4a7fd4', boxShadow: '0 0 8px #4a7fd4', animation: 'pulse 2s infinite' }} />
              <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#2a4080' }}>
                Updated weekly via state treasury reports
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{ background: '#0a0f1a', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: '0' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { val: '50', label: 'Expanding to All 50 States', blue: false },
            { val: '5', label: 'Active Live States', blue: true },
            { val: '30d', label: 'Avg. Claim Turnaround', blue: false },
            { val: '$0', label: 'Upfront Cost — Ever', blue: false },
          ].map((s, i) => (
            <div key={i} style={{ padding: '20px 24px', borderRight: i < 3 ? '1px solid rgba(30,40,127,0.15)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '28px', color: s.blue ? '#4a7fd4' : '#c8d8ff', letterSpacing: '-1px', lineHeight: 1 }}>
                {s.val}
              </div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#2a3d60', marginTop: '4px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAP */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '40px 24px 20px' }}>
        <USAMap />
      </div>

      {/* ACTIVE STATES */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '20px 24px 40px' }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2a4080', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4a7fd4', boxShadow: '0 0 6px #4a7fd4' }} />
          Active — Live Monitoring
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '10px', marginBottom: '40px' }}>
          {activeStates.map(s => (
            <Link key={s.code} href={`/states/${s.slug}`} style={{ textDecoration: 'none', background: 'linear-gradient(135deg,#0f1a30 0%,#0d1525 100%)', border: '1px solid rgba(30,40,127,0.4)', padding: '16px', display: 'block', transition: 'border-color 0.15s' }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', fontWeight: 700, color: '#4a7fd4', letterSpacing: '1px', marginBottom: '4px' }}>{s.code}</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 700, color: '#c8d8ff', marginBottom: '8px' }}>{s.name}</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '18px', fontWeight: 700, color: '#6a9fd8', letterSpacing: '-0.5px', marginBottom: '4px' }}>{s.funds}</div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '7px', color: '#2a3d60', letterSpacing: '1px', textTransform: 'uppercase' }}>{s.counties} counties monitored</div>
            </Link>
          ))}
        </div>

        {/* TOP STATES BY FUNDS */}
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2a4080', marginBottom: '16px' }}>
          // Top States by Unclaimed Funds Held
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px' }}>
          {allStateFunds.map((s, i) => (
            <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(255,255,255,0.04)', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '12px', color: '#6a80a8', fontWeight: 600 }}>{s.name}</span>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', color: '#3a5a8a', fontWeight: 700 }}>{s.funds}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '48px', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(180deg,#4a5060 0%,#2a2e38 50%,#1a1d24 100%)', color: '#e8edf8', fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', padding: '16px 32px', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 3px 0 rgba(0,0,0,0.5)', textDecoration: 'none' }}>
            Free Claim Review
          </Link>
          <a href="tel:+13055634920" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(180deg,#4a5060 0%,#2a2e38 50%,#1a1d24 100%)', color: '#fff', fontFamily: "'Arial Black',Arial,sans-serif", fontSize: '13px', fontWeight: 900, letterSpacing: '1px', padding: '16px 28px', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 3px 0 rgba(0,0,0,0.5)', textDecoration: 'none' }}>
            305-563-4920
          </a>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(30,40,127,0.1)', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#1a2540', lineHeight: 2 }}>
            All recovery services conducted in partnership with licensed attorneys and licensed private investigators. RCG does not practice law.
          </p>
        </div>
      </div>

    </div>
  )
}
