'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
]

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [propertyAddress, setPropertyAddress] = useState('')
  const [message, setMessage] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('') // honeypot

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName, email, phone, state, propertyAddress, message,
          website_url: websiteUrl, // honeypot
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }

      setSubmitted(true)
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main>
        <section style={{ background: '#000', padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,60px)', textAlign: 'center', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: '560px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', border: '1px solid rgba(74,95,212,0.3)', background: 'rgba(30,40,127,0.15)', marginBottom: '32px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a7fd4" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Submission received</span>
            <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 20px' }}>Thank You.</h1>
            <p style={{ fontSize: '16px', color: '#8090b8', lineHeight: 1.85, marginBottom: '32px' }}>We have received your inquiry and our team will review it within 24 hours. If qualified, one of our agents will contact you to discuss next steps.</p>
            <p style={{ fontSize: '14px', color: '#506080', lineHeight: 1.8, marginBottom: '36px' }}>For urgent matters, call us directly.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+13055634920" className="btn-primary">305-563-4920</a>
              <Link href="/" className="btn-secondary">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(48px,6vw,72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Free Claim Review · No Upfront Cost</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(36px,5vw,64px)', letterSpacing: '-2px', lineHeight: 1.0, margin: '0 0 24px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Start Your </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Claim Review</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto' }}>Tell us about your situation. We will search court records and state unclaimed property databases at no cost, and contact you within 24 hours if funds are recoverable.</p>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(64px,7vw,96px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Honeypot field - hidden from users, bots will fill it */}
            <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
              <label>
                Website (leave blank)
                <input
                  type="text"
                  name="website_url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a6090' }}>Full Name *</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={submitting}
                style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '14px 16px', color: '#c8d8ff', fontSize: '15px', fontFamily: "'Space Grotesk',sans-serif", outline: 'none' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-form-row">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a6090' }}>Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                  style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '14px 16px', color: '#c8d8ff', fontSize: '15px', fontFamily: "'Space Grotesk',sans-serif", outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a6090' }}>Phone *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={submitting}
                  placeholder="(305) 555-1234"
                  style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '14px 16px', color: '#c8d8ff', fontSize: '15px', fontFamily: "'Space Grotesk',sans-serif", outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a6090' }}>State</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                disabled={submitting}
                style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '14px 16px', color: state ? '#c8d8ff' : '#506080', fontSize: '15px', fontFamily: "'Space Grotesk',sans-serif", outline: 'none', appearance: 'none', cursor: 'pointer' }}
              >
                <option value="">Select state</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s} style={{ background: '#0a0f1a', color: '#c8d8ff' }}>{s}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a6090' }}>Property Address</label>
              <input
                type="text"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
                disabled={submitting}
                placeholder="Optional — if you have a specific property in mind"
                style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '14px 16px', color: '#c8d8ff', fontSize: '15px', fontFamily: "'Space Grotesk',sans-serif", outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a6090' }}>How Can We Help?</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={submitting}
                rows={5}
                placeholder="Brief description of your situation (foreclosure, tax sale, unclaimed property, estate, etc.)"
                style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.15)', padding: '14px 16px', color: '#c8d8ff', fontSize: '15px', fontFamily: "'Space Grotesk',sans-serif", outline: 'none', resize: 'vertical', minHeight: '120px' }}
              />
            </div>

            {error && (
              <div style={{ background: 'rgba(200,60,60,0.08)', border: '1px solid rgba(200,60,60,0.3)', padding: '14px 16px', color: '#e08080', fontSize: '14px', fontFamily: "'Space Grotesk',sans-serif" }}>
                {error}
              </div>
            )}

            <div style={{ marginTop: '8px' }}>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary"
                style={{ width: '100%', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer' }}
              >
                {submitting ? 'Submitting...' : 'Submit Claim Review'}
              </button>
            </div>

            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2a3a60', textAlign: 'center', lineHeight: 2, marginTop: '12px' }}>By submitting, you agree to be contacted by RCG about your inquiry · No obligation · Free review</p>
          </form>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      <section style={{ background: '#000', padding: 'clamp(56px,6vw,80px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Prefer to call?</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,3vw,32px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.15, margin: '14px 0 16px' }}>Speak to Our Team Directly.</h2>
          <p style={{ fontSize: '14px', color: '#506080', lineHeight: 1.85, marginBottom: '28px' }}>Our licensed team is available Monday through Friday, 9 AM to 6 PM Eastern.</p>
          <a href="tel:+13055634920" className="btn-primary" style={{ display: 'inline-block' }}>Call 305-563-4920</a>
        </div>
      </section>
    </main>
  )
}
