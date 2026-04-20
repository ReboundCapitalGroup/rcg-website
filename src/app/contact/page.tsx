'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', state: '', claimType: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const states = ['Florida','Arizona','Colorado','Ohio','Michigan','Alabama','Alaska','Arkansas','California','Connecticut','Delaware','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming','Other']

  const claimTypes = ['Foreclosure Surplus Funds','Tax Deed Overage','State-Held Unclaimed Property','Estate or Heir Recovery','Excess Proceeds','Business or LLC Asset Recovery','Not Sure']

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent') } else { setStatus('error') }
    } catch { setStatus('error') }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#0a0f1a',
    border: '1px solid rgba(74,95,212,0.2)',
    color: '#c8d8ff',
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: '14px',
    padding: '14px 16px',
    outline: 'none',
    transition: 'border-color 0.15s',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Space Mono',monospace",
    fontSize: '8px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#3a4f7a',
    display: 'block',
    marginBottom: '8px',
  }

  return (
    <main>

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.03) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Free · No Obligation · Confidential</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Free Claim </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Review</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '460px', margin: '0 auto', fontWeight: 400 }}>
            Tell us about your situation and we will search for any funds owed to you. No cost, no commitment, and no obligation to proceed.
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '48px', alignItems: 'start' }} className="about-story-grid">

          {/* FORM */}
          <div style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: 'clamp(32px,4vw,48px)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />

            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg,#1a2860,#0f1a40)', border: '1px solid rgba(74,127,212,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <span style={{ color: '#4a7fd4', fontSize: '20px' }}>✓</span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '22px', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 12px' }}>Request Received</h3>
                <p style={{ fontSize: '14px', color: '#6a80b0', lineHeight: 1.85 }}>We will review your information and be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#3a4f7a', marginBottom: '32px' }}>// Your Information</div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input required style={inputStyle} value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="First and last name" />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input required type="email" style={inputStyle} value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input style={inputStyle} value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="(305) 000-0000" />
                  </div>
                  <div>
                    <label style={labelStyle}>State</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.state} onChange={e => setForm({...form, state: e.target.value})}>
                      <option value="">Select a state</option>
                      {states.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>Claim Type</label>
                  <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.claimType} onChange={e => setForm({...form, claimType: e.target.value})}>
                    <option value="">Select a claim type</option>
                    {claimTypes.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle}>Tell Us More</label>
                  <textarea style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' as const }} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Property address, case number, or any details that may help us locate the funds faster..." />
                </div>

                <button type="submit" disabled={status === 'sending'} className="btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'wait' : 'pointer' }}>
                  {status === 'sending' ? 'Submitting...' : 'Submit Free Claim Review'}
                </button>

                {status === 'error' && (
                  <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', color: '#e05050', marginTop: '12px', textAlign: 'center', letterSpacing: '1px' }}>
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2a3a60', textAlign: 'center', marginTop: '16px', lineHeight: 1.8 }}>
                  Your information is confidential and used only to search for your claim.
                </p>
              </form>
            )}
          </div>

          {/* SIDEBAR */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'sticky', top: '108px' }}>

            <div style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '28px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#3a4f7a', marginBottom: '20px' }}>// Call or Text</div>
              <a href="tel:+13055634920" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '22px', color: '#c8d8ff', textDecoration: 'none', letterSpacing: '-0.5px', display: 'block', marginBottom: '6px' }}>305-563-4920</a>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>Mon to Fri · 9am to 6pm EST</div>
            </div>

            <div style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.1)', padding: '28px' }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#3a4f7a', marginBottom: '20px' }}>// What Happens Next</div>
              {[
                'We search your name and any connected properties',
                'We contact you within one business day',
                'If a claim exists, we walk you through everything',
                'You decide whether to proceed. No pressure.',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', paddingBottom: i < 3 ? '14px' : '0', marginBottom: i < 3 ? '14px' : '0', borderBottom: i < 3 ? '1px solid rgba(74,95,212,0.06)' : 'none' }}>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', color: '#1E287F', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>0{i+1}</span>
                  <span style={{ fontSize: '13px', color: '#6a80b0', lineHeight: 1.7 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(18,28,72,0.4)', border: '1px solid rgba(74,95,212,0.12)', padding: '20px 24px' }}>
              <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2a3a60', lineHeight: 2, margin: 0 }}>
                All recovery services conducted in partnership with licensed attorneys and licensed private investigators. RCG does not practice law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
