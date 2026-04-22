import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog & County Guides | Coming Soon | Rebound Capital Group',
  description: 'Surplus recovery insights, case studies, and county-level guides. Launching soon from Rebound Capital Group.',
}

export default function BlogCountyGuidesComingSoon() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* Grid overlay */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.04) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '960px', margin: '0 auto', padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,40px)' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)' }}>
          <Link href="/" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>Home</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: 'var(--mid)' }}>Blog &amp; County Guides</span>
        </div>

        {/* Status tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <div style={{ width: '30px', height: '1px', background: 'rgba(74,95,212,0.4)' }} />
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--rcg2)', fontWeight: 700 }}>
            // Status: In Production
          </span>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e0c88a', boxShadow: '0 0 8px rgba(224,200,138,0.7)', animation: 'blogPulse 2s ease-in-out infinite' }} />
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(36px,6vw,72px)', color: '#fff', letterSpacing: '-2.5px', lineHeight: 1.02, margin: '0 0 24px' }}>
          Blog &amp; County Guides
          <br />
          <span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Coming Soon.</span>
        </h1>

        <p style={{ fontSize: '17px', color: 'var(--mid)', lineHeight: 1.7, maxWidth: '680px', margin: '0 0 48px' }}>
          We&apos;re building our knowledge library &mdash; real-world case studies, state law updates, and detailed county-level guides for every jurisdiction we actively recover in.
        </p>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '48px' }}>

          {/* Blog column */}
          <div style={{ padding: 'clamp(24px,3vw,32px)', background: 'var(--bg2)', border: '1px solid rgba(74,95,212,0.2)', borderLeft: '2px solid var(--rcg2)' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '12px', fontWeight: 700 }}>
              01 / Blog
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(18px,2.2vw,22px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
              Insights &amp; Case Studies
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7, marginBottom: '18px' }}>
              Real recovery outcomes, state law changes, and practical guidance on what separates legitimate recovery firms from the rest.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Case Studies from real closings', 'State Law &amp; Deadline Updates', 'Industry Insights &amp; Red Flags', 'How to Spot a Scam'].map((item) => (
                <li key={item} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: '8px', padding: '5px 0', fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Space Mono',monospace", fontSize: '10px' }}>→</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          {/* County Guides column */}
          <div style={{ padding: 'clamp(24px,3vw,32px)', background: 'var(--bg2)', border: '1px solid rgba(74,95,212,0.2)', borderLeft: '2px solid var(--rcg2)' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '12px', fontWeight: 700 }}>
              02 / County Guides
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(18px,2.2vw,22px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
              Filing &amp; Court Procedures
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7, marginBottom: '18px' }}>
              State law is only half the picture. County courts and clerks each have their own rules, timelines, and filing procedures we document in detail.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Florida &mdash; all 67 counties', 'Ohio &mdash; all 88 counties', 'Arizona, Colorado &amp; Michigan', 'Expanding monthly'].map((item) => (
                <li key={item} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: '8px', padding: '5px 0', fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Space Mono',monospace", fontSize: '10px' }}>→</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div style={{ padding: 'clamp(28px,4vw,40px)', background: 'linear-gradient(135deg, var(--bg2), rgba(30,40,127,0.2))', border: '1px solid rgba(74,95,212,0.3)', borderTop: '2px solid var(--rcg2)', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '12px' }}>
            // In the meantime
          </div>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.8vw,28px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 12px' }}>
            Don&apos;t wait for the content.
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto 22px' }}>
            If you think you&apos;re owed surplus funds, reach out directly. We&apos;ll tell you within 24 hours &mdash; free and with no obligation.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/contact" style={{ padding: '13px 24px', fontFamily: "'Space Mono',monospace", fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', background: 'linear-gradient(180deg, #2a48a0, #1E287F)', color: '#fff', border: '1px solid rgba(74,95,212,0.5)' }}>
              Free Claim Review
            </Link>
            <Link href="/states" style={{ padding: '13px 24px', fontFamily: "'Space Mono',monospace", fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', background: 'transparent', color: '#c8d8ff', border: '1px solid rgba(74,95,212,0.35)' }}>
              Browse States
            </Link>
          </div>
        </div>

        <style>{`
          @keyframes blogPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>

      </div>
    </div>
  )
}
