import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'trust-recovery | Rebound Capital Group',
}

export default function Page() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
      <div style={{ maxWidth: '600px', textAlign: 'center' }}>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#1E287F', display: 'block', marginBottom: '16px' }}>// coming soon</span>
        <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,48px)', color: '#fff', letterSpacing: '-1.5px', marginBottom: '16px' }}>
          This Page Is Being Built
        </h1>
        <p style={{ fontSize: '15px', color: '#a0aece', lineHeight: 1.7, marginBottom: '32px' }}>
          We are actively expanding our services. Call us now for immediate assistance — our team handles every case personally.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ display: 'inline-flex', background: 'linear-gradient(180deg,#4a5060 0%,#2a2e38 50%,#1a1d24 100%)', color: '#e8edf8', fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', padding: '14px 28px', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none' }}>Free Claim Review</Link>
          <a href="tel:+13055634920" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1E287F', color: '#fff', fontFamily: "'Arial Black',Arial,sans-serif", fontSize: '12px', fontWeight: 900, padding: '14px 24px', textDecoration: 'none' }}>305-563-4920</a>
        </div>
      </div>
    </div>
  )
}
