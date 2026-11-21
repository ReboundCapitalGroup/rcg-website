import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * Shared layout for service pages built in the 2026 rebuild.
 * One component = one place to restyle when the redesign lands.
 * Emits Service, BreadcrumbList and FAQPage JSON-LD.
 *
 * Copy rules: no em dashes, RCG is never "licensed", no attorney names,
 * claims go "through our network of licensed attorneys".
 */

export type Section = {
  id?: string
  tag: string
  title: string
  body: ReactNode
  points?: string[]
}

export type Faq = { q: string; a: string }

export type ServicePageProps = {
  slug: string
  serviceName: string
  badge: string
  h1Lead: string
  h1Accent: string
  answer: string
  sections: Section[]
  steps?: { title: string; desc: string }[]
  faqs: Faq[]
  related: { href: string; label: string; desc: string }[]
  ctaTitle: string
  ctaText: string
  ctaHref?: string
  ctaLabel?: string
}

const SITE = 'https://reboundcapitalgroup.com'

const mono = "'Space Mono',monospace"
const grotesk = "'Space Grotesk',sans-serif"

export default function ServicePage(p: ServicePageProps) {
  const url = `${SITE}/services/${p.slug}`
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: p.serviceName,
      serviceType: p.serviceName,
      url,
      description: p.answer,
      areaServed: { '@type': 'Country', name: 'United States' },
      provider: { '@id': `${SITE}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
        { '@type': 'ListItem', position: 3, name: p.serviceName, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: p.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,60px) clamp(56px,7vw,88px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <div role="navigation" aria-label="Breadcrumb" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', fontFamily: mono, fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a6090', marginBottom: '24px' }}>
            <Link href="/" style={{ color: '#4a6090', textDecoration: 'none' }}>Home</Link>
            <span aria-hidden="true">·</span>
            <Link href="/services" style={{ color: '#4a6090', textDecoration: 'none' }}>Services</Link>
            <span aria-hidden="true">·</span>
            <span style={{ color: '#8fa3d8' }}>{p.serviceName}</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '28px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: mono, fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#6a80b0' }}>{p.badge}</span>
          </div>
          <h1 style={{ fontFamily: grotesk, fontWeight: 700, fontSize: 'clamp(34px,5.2vw,66px)', letterSpacing: '-2px', lineHeight: 1.04, margin: '0 0 28px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{p.h1Lead} </span>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{p.h1Accent}</span>
          </h1>
          {/* Answer block: the 40-60 word summary search and AI engines quote */}
          <p style={{ fontSize: 'clamp(15px,1.7vw,18px)', color: '#a8bedd', lineHeight: 1.8, maxWidth: '640px', margin: '0 auto 32px' }}>{p.answer}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={p.ctaHref || '/contact'} className="btn-primary">{p.ctaLabel || 'Free Review'}</Link>
            <a href="tel:+13055634920" className="btn-secondary">Call or Text 24/7: 305-563-4920</a>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {p.sections.map((s, i) => (
            <div key={s.title} id={s.id} style={{ scrollMarginTop: '96px', background: i % 2 === 0 ? 'rgba(18,28,72,0.4)' : '#0a0f1a', border: `1px solid rgba(74,95,212,${i % 2 === 0 ? 0.2 : 0.1})`, padding: 'clamp(32px,4vw,52px)', position: 'relative' }}>
              {i % 2 === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }} className="about-story-grid">
                <div>
                  <div style={{ fontFamily: mono, fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a6fd4', marginBottom: '16px' }}>// {s.tag}</div>
                  <h2 style={{ fontFamily: grotesk, fontWeight: 700, fontSize: 'clamp(22px,3vw,34px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.12, margin: '0 0 20px' }}>{s.title}</h2>
                  {s.points && (
                    <>
                      <div style={{ width: '28px', height: '2px', background: '#1E287F', marginBottom: '20px' }} />
                      {s.points.map((pt) => (
                        <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                          <div style={{ width: '4px', height: '4px', background: '#4a6fd4', flexShrink: 0 }} />
                          <span style={{ fontFamily: mono, fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#7d92c4' }}>{pt}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div className="service-prose" style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: 'clamp(14px,1.6vw,16px)', color: '#9db0d2', lineHeight: 1.95 }}>
                  {s.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      {p.steps && (
        <section style={{ background: '#000', padding: 'clamp(64px,8vw,96px) clamp(20px,5vw,60px)' }}>
          <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
            <span className="section-tag">// How it works</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,230px),1fr))', gap: '2px', marginTop: '24px' }}>
              {p.steps.map((st, i) => (
                <div key={st.title} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '28px' }}>
                  <div style={{ fontFamily: mono, fontSize: '10px', color: '#4a7fd4', marginBottom: '12px' }}>0{i + 1}</div>
                  <h3 style={{ fontFamily: grotesk, fontWeight: 700, fontSize: '17px', color: '#fff', margin: '0 0 10px' }}>{st.title}</h3>
                  <p style={{ fontSize: '14px', color: '#8a9cc4', lineHeight: 1.75, margin: 0 }}>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(64px,8vw,96px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <span className="section-tag">// Common questions</span>
          <h2 style={{ fontFamily: grotesk, fontWeight: 700, fontSize: 'clamp(24px,3.5vw,40px)', color: '#fff', letterSpacing: '-1px', margin: '12px 0 28px' }}>Questions Homeowners Ask</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {p.faqs.map((f) => (
              <details key={f.q} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '20px 24px' }}>
                <summary style={{ cursor: 'pointer', fontFamily: grotesk, fontWeight: 600, fontSize: '16px', color: '#dce6ff' }}>{f.q}</summary>
                <p style={{ fontSize: '15px', color: '#9db0d2', lineHeight: 1.85, margin: '14px 0 0' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ background: 'var(--bg)', padding: '0 clamp(20px,5vw,60px) clamp(64px,8vw,96px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <span className="section-tag">// Related help</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: '2px', marginTop: '20px' }}>
            {p.related.map((r) => (
              <Link key={r.href} href={r.href} style={{ textDecoration: 'none', background: 'rgba(18,28,72,0.35)', border: '1px solid rgba(74,95,212,0.18)', padding: '24px', display: 'block' }}>
                <div style={{ fontFamily: grotesk, fontWeight: 700, fontSize: '16px', color: '#fff', marginBottom: '8px' }}>{r.label} →</div>
                <div style={{ fontSize: '14px', color: '#8a9cc4', lineHeight: 1.7 }}>{r.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#000', padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: grotesk, fontWeight: 700, fontSize: 'clamp(26px,4vw,46px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '0 0 16px' }}>{p.ctaTitle}</h2>
          <p style={{ fontSize: '15px', color: '#8090b8', lineHeight: 1.85, marginBottom: '32px' }}>{p.ctaText}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={p.ctaHref || '/contact'} className="btn-primary">{p.ctaLabel || 'Free Review'}</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
          <p style={{ fontSize: '12px', color: '#5c6f96', lineHeight: 1.7, marginTop: '28px' }}>
            Rebound Capital Group LLC is not a law firm and does not provide legal advice. Legal work is handled through our network of licensed attorneys. Results depend on the facts of each case.
          </p>
        </div>
      </section>
    </main>
  )
}
