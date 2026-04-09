import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ohio Surplus Recovery | Rebound Capital Group',
  description: 'Surplus fund recovery across all 88 Ohio counties.',
}

export default function Page() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: '560px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#1E287F', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '1px', background: '#1E287F' }} />
          Coming Soon
          <div style={{ width: '20px', height: '1px', background: '#1E287F' }} />
        </div>
        <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(24px,4vw,42px)', color: '#fff', letterSpacing: '-1px', marginBottom: '16px', lineHeight: 1.1 }}>
          Ohio Surplus Fund Recovery
        </h1>
        <p style={{ fontSize: '15px', color: '#7a90c0', lineHeight: 1.75, marginBottom: '8px' }}>
          We actively monitor foreclosure and tax deed auctions across all 88 Ohio counties. Our team identifies surplus funds and recovers what is legally yours.
        </p>
        <p style={{ fontSize: '13px', color: '#4a5890', lineHeight: 1.6, marginBottom: '36px', fontFamily: "'Space Mono',monospace" }}>
          Call us directly for immediate assistance. Every case is handled personally.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+13055634920" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(180deg,#4a5060 0%,#2a2e38 50%,#1a1d24 100%)', color: '#fff', fontFamily: "'Arial Black',Arial,sans-serif", fontSize: '12px', fontWeight: 900, letterSpacing: '1px', padding: '14px 24px', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 3px 0 rgba(0,0,0,0.5)', textDecoration: 'none' }}>
            305-563-4920
          </a>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'linear-gradient(180deg,#3a4050 0%,#20242e 50%,#141820 100%)', color: '#c8d8ff', fontFamily: "'Space Grotesk',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', padding: '14px 24px', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}>
            Free Claim Review
          </Link>
        </div>
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(30,40,127,0.2)' }}>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2a3560', lineHeight: 1.8 }}>
            All recovery services conducted in partnership with licensed attorneys and licensed private investigators. RCG does not practice law.
          </p>
        </div>
      </div>
    </div>
  )
}
