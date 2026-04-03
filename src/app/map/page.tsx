import type { Metadata } from 'next'
import USAMap from './USAMap'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Unclaimed Funds Map — Surplus Fund Laws All 50 States | Rebound Capital Group',
  description: 'Interactive US map of surplus fund laws, claim deadlines, and recovery for all 50 states. Click any state for county guides and laws.',
}

const states = [
  { code:'FL', name:'Florida', slug:'florida', deadline:'60 days', active:true },
  { code:'AZ', name:'Arizona', slug:'arizona', deadline:'3 years', active:true },
  { code:'CO', name:'Colorado', slug:'colorado', deadline:'2.5 years', active:true },
  { code:'GA', name:'Georgia', slug:'georgia', deadline:'5 years', active:false },
  { code:'OH', name:'Ohio', slug:'ohio', deadline:'5 years', active:false },
  { code:'NJ', name:'New Jersey', slug:'new-jersey', deadline:'3 years', active:false },
  { code:'TX', name:'Texas', slug:'texas', deadline:'2 years', active:false },
  { code:'NY', name:'New York', slug:'new-york', deadline:'3 years', active:false },
  { code:'CA', name:'California', slug:'california', deadline:'1 year', active:false },
  { code:'NM', name:'New Mexico', slug:'new-mexico', deadline:'9 months', active:false },
  { code:'MI', name:'Michigan', slug:'michigan', deadline:'1 year', active:false },
  { code:'NV', name:'Nevada', slug:'nevada', deadline:'1 year', active:false },
  { code:'PA', name:'Pennsylvania', slug:'pennsylvania', deadline:'2 years', active:false },
  { code:'NC', name:'North Carolina', slug:'north-carolina', deadline:'3 years', active:false },
  { code:'VA', name:'Virginia', slug:'virginia', deadline:'2 years', active:false },
  { code:'WA', name:'Washington', slug:'washington', deadline:'3 years', active:false },
  { code:'TN', name:'Tennessee', slug:'tennessee', deadline:'2 years', active:false },
  { code:'IN', name:'Indiana', slug:'indiana', deadline:'3 years', active:false },
  { code:'MO', name:'Missouri', slug:'missouri', deadline:'10 years', active:false },
  { code:'SC', name:'South Carolina', slug:'south-carolina', deadline:'5 years', active:false },
]

export default function MapPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{ padding: '52px 40px 32px', textAlign: 'center', borderBottom: '1px solid rgba(30,40,127,0.2)' }}>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#1E287F', display: 'block', marginBottom: '12px' }}>
          // interactive unclaimed funds map
        </span>
        <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.5vw,48px)', color: '#fff', letterSpacing: '-1.5px', lineHeight: 0.95, marginBottom: '14px' }}>
          Surplus Fund Laws.<br /><span style={{ color: '#5a6890' }}>All 50 States.</span>
        </h1>
        <p style={{ fontSize: '14px', color: '#5a6890', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
          Hover any state to see the claim deadline. Click to view local laws, filing process, and county guides. Active states have live case monitoring.
        </p>
      </div>

      {/* MAP */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px 0' }}>
        <USAMap />
      </div>

      {/* Quick stats */}
      <div style={{ background: '#1e2438', borderTop: '1px solid rgba(30,40,127,0.25)', borderBottom: '1px solid rgba(30,40,127,0.25)', marginTop: '32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(30,40,127,0.2)' }}>
          {[
            { val: '50', label: 'States Covered' },
            { val: '3', label: 'Active Live States', blue: true },
            { val: '60d', label: 'Shortest Deadline (FL)', urgent: true },
            { val: '$0', label: 'Upfront Cost — Ever' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#1e2438', padding: '18px 24px' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '24px', color: s.blue ? '#1E287F' : s.urgent ? '#f0a500' : '#fff', letterSpacing: '-1px' }}>{s.val}</div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#5a6890', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* State quick access */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#1E287F', display: 'block', marginBottom: '20px' }}>
          // quick access — all states
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '6px', marginBottom: '32px' }}>
          {states.map(s => (
            <Link key={s.code} href={`/states/${s.slug}`} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              background: s.active ? 'rgba(30,40,127,0.2)' : '#1e2438',
              border: `1px solid ${s.active ? '#1E287F' : 'rgba(30,40,127,0.2)'}`,
              textDecoration: 'none',
              transition: 'all 0.15s',
            }}>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '12px', color: s.active ? '#c8d8ff' : '#a0aece' }}>{s.name}</span>
              <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', color: s.deadline === '60 days' || s.deadline === '9 months' || s.deadline === '1 year' ? '#f0a500' : '#5a6890', letterSpacing: '0.5px' }}>{s.deadline}</span>
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(180deg,#4a5060 0%,#2a2e38 50%,#1a1d24 100%)', color: '#e8edf8', fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', padding: '14px 28px', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none', boxShadow: '0 4px 0 rgba(0,0,0,0.5)' }}>
            Free Claim Review
          </Link>
          <a href="tel:+13055634920" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1E287F', color: '#fff', fontFamily: "'Arial Black',Arial,sans-serif", fontSize: '12px', fontWeight: 900, letterSpacing: '1px', padding: '14px 24px', textDecoration: 'none', boxShadow: '0 4px 0 rgba(0,0,0,0.5)' }}>
            305-563-4920
          </a>
        </div>
      </div>
    </div>
  )
}
