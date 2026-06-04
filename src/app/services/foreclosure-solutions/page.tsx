import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pre-Sale Foreclosure Solutions | RCG',
  description: 'Pre-sale foreclosure solutions to preserve equity before the auction — cash offers, mortgage assumptions, probate time extensions, and buyer connections from Rebound Capital Group.',
}

const options = [
  { n: '01', title: 'Cash Offer on Property', href: '/services/cash-offer', desc: 'Facing an auction date? We can structure a cash offer on your property before the sale, helping you walk away with equity in hand instead of a deficiency on your record.' },
  { n: '02', title: 'Mortgage Assumption', href: '/services/mortgage-assumptions', desc: 'In some cases a qualified buyer can assume your existing mortgage. That preserves your equity, stops the foreclosure clock, and avoids a forced sale at auction.' },
  { n: '03', title: 'Probate & Time Extensions', href: '/services/probate-time-extensions', desc: 'When an estate or probate matter threatens a deadline, we coordinate the documentation and pursue extensions so a claim or sale window is not lost to the calendar.' },
  { n: '04', title: 'Already Sold? Recover the Surplus', href: '/services/foreclosure-surplus', desc: 'If the auction already happened and the property sold for more than you owed, the surplus is still legally yours. We identify and file to recover it at no upfront cost.' },
]

const faqs = [
  { q: 'I have not lost the property yet — can you still help?', a: 'Yes. Pre-sale is exactly when the most options exist. Before the auction date we may be able to structure a cash offer, arrange a mortgage assumption, or buy time through the proper filings to preserve your equity.' },
  { q: 'What does it cost to explore my options?', a: 'Nothing to start. We review your situation and lay out the realistic paths at no upfront cost. You decide how to proceed from there.' },
  { q: 'How fast do I need to act?', a: 'Quickly. Once an auction date is set, the window narrows fast. The earlier you reach out, the more options remain on the table.' },
  { q: 'What if none of the pre-sale options work?', a: 'If the sale proceeds and the property sells for more than the debt owed, surplus funds are generated — and those belong to you. We pivot to recovering that surplus on your behalf.' },
]

export default function ForeclosureSolutionsPage() {
  return (
    <main>

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Pre-Foreclosure · Preserve Your Equity</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Foreclosure </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Solutions</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto', fontWeight: 400 }}>
            Still in the foreclosure process? You may have more options than you think. Before the auction, we can help you preserve equity, restructure, or sell on your terms — not the bank&apos;s.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(48px,6vw,88px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '108px' }}>
            <span className="section-tag">// Before the Auction</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 20px' }}>
              Options That Protect<br /><span style={{ color: 'var(--dim)' }}>Your Equity.</span>
            </h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Pre-Sale Strategy', 'Equity Preservation', 'Stop the Clock', 'Zero Upfront Cost'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, fontWeight: 400, margin: 0 }}>
              Most homeowners in foreclosure believe their only choices are to fight a losing battle or walk away with nothing. That is rarely the full picture. As long as the property has not yet sold at auction, there is usually room to act — and the equity built up in the home is worth protecting.
            </p>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, fontWeight: 400, margin: 0 }}>
              Depending on your timeline and situation, we may be able to structure a cash offer before the sale, arrange for a qualified buyer to assume your mortgage, or pursue probate and time extensions that keep your options open. The goal is the same in every case: keep more of what is yours.
            </p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>
                And if the sale has already happened, the story is not over. When a property sells for more than the debt owed, the surplus belongs to the former owner — and recovering it is exactly what we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* OPTIONS */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '56px' }}>
            <span className="section-tag" style={{ margin: 0 }}>// Your Options</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.2),transparent)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2px' }}>
            {options.map((o, i) => (
              <Link key={o.n} href={o.href} style={{ textDecoration: 'none', display: 'block', background: i % 2 === 0 ? 'rgba(18,28,72,0.4)' : '#0a0f1a', border: `1px solid ${i % 2 === 0 ? 'rgba(74,95,212,0.2)' : 'rgba(74,95,212,0.07)'}`, padding: 'clamp(24px,3vw,34px)', position: 'relative' }}>
                {i % 2 === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />}
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', fontWeight: 700, color: i % 2 === 0 ? '#4a7fd4' : '#2a3a60', letterSpacing: '1px' }}>{o.n}</span>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(17px,2vw,21px)', color: '#fff', letterSpacing: '-0.5px', margin: '12px 0 10px' }}>{o.title}</h3>
                <p style={{ fontSize: '14px', color: i % 2 === 0 ? '#8090b8' : '#506080', lineHeight: 1.9, margin: '0 0 18px' }}>{o.desc}</p>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a7fd4' }}>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* FAQ */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(60px,7vw,88px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,3vw,32px)', color: '#fff', letterSpacing: '-0.5px', margin: 0 }}>Common Questions</h2>
            <Link href="/resources/faqs" style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#3a5080', textDecoration: 'none' }}>Full FAQ page →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.08)', padding: '24px 28px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: '100%', background: 'rgba(30,40,127,0.4)' }} />
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '14px', color: '#c8d8ff', marginBottom: '8px', paddingLeft: '4px' }}>{f.q}</div>
                <div style={{ fontSize: '13px', color: '#506080', lineHeight: 1.85, paddingLeft: '4px' }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* CTA */}
      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// No cost to start</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>
            Still in the Foreclosure Process?
          </h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>
            The sooner we talk, the more options you have. Tell us where things stand and we will lay out every realistic path to protect your equity — at no upfront cost.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Free Claim Review</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
        </div>
      </section>
    </main>
  )
}
