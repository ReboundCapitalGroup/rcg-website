'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import Link from 'next/link'
import { getAttribution } from '@/lib/attribution'

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

const CLAIM_TYPES = [
  { value: 'foreclosure',        label: 'Foreclosure surplus',  hint: 'My property sold at a foreclosure auction' },
  { value: 'tax_deed',           label: 'Tax deed overage',     hint: 'A property sold for unpaid taxes' },
  { value: 'unclaimed_property', label: 'Unclaimed property',   hint: 'Old accounts, checks, or state-held funds' },
  { value: 'estate',             label: 'Estate recovery',      hint: 'Funds owed to a relative who passed away' },
  { value: 'unsure',             label: "I'm not sure",         hint: 'Describe it and we will figure it out' },
]

const isPropertyClaim = (t: string) => t === 'foreclosure' || t === 'tax_deed'

export default function ContactPage() {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [claimType, setClaimType] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [county, setCounty] = useState('')
  const [saleDateApprox, setSaleDateApprox] = useState('')
  const [propertyAddress, setPropertyAddress] = useState('')
  const [assetDesc, setAssetDesc] = useState('')
  const [priorAddress, setPriorAddress] = useState('')
  const [message, setMessage] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('') // honeypot

  const formLoadedAt = useRef<number>(Date.now())
  const detailsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    formLoadedAt.current = Date.now()
  }, [])

  const chooseType = (value: string) => {
    setClaimType(value)
    setStep(2)
    setTimeout(() => detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          claimType, fullName, email, phone, state, county, saleDateApprox,
          propertyAddress, assetDesc, priorAddress, message,
          website_url: websiteUrl,
          fillTimeMs: Date.now() - formLoadedAt.current,
          attribution: getAttribution(),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }

      setSubmitted(true)
    } catch {
      setError('Network error. Please check your connection and try again.')
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main>
        <section style={{ background: '#000', padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,60px)', textAlign: 'center', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: '560px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', border: '1px solid rgba(91,138,230,0.45)', background: 'rgba(30,40,127,0.2)', marginBottom: '32px' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7fa6ea" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Submission received</span>
            <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 20px' }}>Thank you.</h1>
            <p style={{ fontSize: '16px', color: '#9db0d2', lineHeight: 1.8, marginBottom: '28px' }}>We have your inquiry and will review it within 24 hours. If there are funds to recover, someone from our team will call you to walk through the next steps.</p>
            <p style={{ fontSize: '14px', color: '#7d92c4', lineHeight: 1.8, marginBottom: '32px' }}>Need to reach us sooner?</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+13055634920" className="btn-primary">Call 305-563-4920</a>
              <Link href="/" className="btn-secondary">Back to home</Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  const selected = CLAIM_TYPES.find((c) => c.value === claimType)

  return (
    <main>
      <style>{`
        .rcg-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 620px) { .rcg-field-row { grid-template-columns: 1fr; } }

        .rcg-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: #8fa3d8;
          display: block;
          margin-bottom: 7px;
        }
        .rcg-input {
          background: #070b14;
          border: 1px solid rgba(91,138,230,0.28);
          padding: 15px 16px;
          color: #e4ecff;
          font-size: 16px;               /* 16px stops iOS zooming on focus */
          font-family: 'Space Grotesk', sans-serif;
          outline: none;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          transition: border-color 0.15s, background 0.15s;
        }
        .rcg-input::placeholder { color: #5c6f96; }
        .rcg-input:hover { border-color: rgba(91,138,230,0.45); }
        .rcg-input:focus {
          border-color: #5b8ae6;
          background: #0a1120;
          box-shadow: inset 0 0 0 1px rgba(91,138,230,0.35);
        }
        .rcg-help { font-size: 13px; color: #7d92c4; line-height: 1.6; margin-top: 7px; }

        /* Step 1 tiles */
        .rcg-tile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        @media (max-width: 720px) { .rcg-tile-grid { grid-template-columns: 1fr; } }
        .rcg-tile {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          width: 100%;
          text-align: left;
          background: #070b14;
          border: 1px solid rgba(91,138,230,0.22);
          padding: 18px 18px;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          transition: border-color 0.15s, background 0.15s, transform 0.12s;
        }
        .rcg-tile:hover, .rcg-tile:focus-visible {
          border-color: #5b8ae6;
          background: rgba(30,40,127,0.22);
          transform: translateY(-1px);
          outline: none;
        }
        .rcg-tile-label { color: #e4ecff; font-size: 16px; font-weight: 600; line-height: 1.3; }
        .rcg-tile-hint  { color: #7d92c4; font-size: 13px; line-height: 1.5; margin-top: 4px; }
        .rcg-tile-arrow { color: #5b8ae6; flex-shrink: 0; }
        .rcg-tile:last-child { grid-column: 1 / -1; }
        @media (max-width: 720px) { .rcg-tile:last-child { grid-column: auto; } }

        /* Selected-type chip on step 2 */
        .rcg-chip {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          border: 1px solid rgba(91,138,230,0.3);
          background: rgba(30,40,127,0.18);
          padding: 13px 16px;
        }
        .rcg-chip-change {
          font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 1.4px;
          text-transform: uppercase; color: #8fa3d8; background: none; border: none;
          cursor: pointer; padding: 4px 2px; text-decoration: underline;
        }
        .rcg-chip-change:hover { color: #fff; }

        .rcg-steps {
          font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: #5b8ae6;
        }
        @media (prefers-reduced-motion: reduce) {
          .rcg-tile { transition: none; }
          .rcg-tile:hover { transform: none; }
        }
      `}</style>

      {/* HERO — trimmed so the form is reachable without a long scroll */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.2)', padding: 'clamp(48px,7vw,84px) clamp(20px,5vw,60px) clamp(32px,4vw,48px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.22) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '660px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Free claim review · No upfront cost</span>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(30px,4.6vw,52px)', letterSpacing: '-1.5px', lineHeight: 1.05, margin: '14px 0 18px', color: '#fff' }}>
            Find out what you&apos;re owed.
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#9db0d2', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
            Two quick steps. We search court records and state databases at no cost, and call you within 24 hours if there are funds to recover.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(40px,5vw,64px) clamp(20px,5vw,60px) clamp(56px,6vw,88px)' }}>
        <div ref={detailsRef} style={{ maxWidth: '620px', margin: '0 auto' }}>

          {/* Progress */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
            <span className="rcg-steps">Step {step} of 2</span>
            <div style={{ flex: 1, height: '2px', background: 'rgba(91,138,230,0.18)' }}>
              <div style={{ width: step === 1 ? '50%' : '100%', height: '100%', background: '#5b8ae6', transition: 'width 0.3s ease' }} />
            </div>
          </div>

          {/* ---------- STEP 1 ---------- */}
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.6vw,26px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 6px' }}>
                What are you inquiring about?
              </h2>
              <p style={{ fontSize: '14px', color: '#7d92c4', lineHeight: 1.6, margin: '0 0 20px' }}>
                Pick the closest match. If none of them fit, choose the last one.
              </p>

              <div className="rcg-tile-grid">
                {CLAIM_TYPES.map((c) => (
                  <button key={c.value} type="button" className="rcg-tile" onClick={() => chooseType(c.value)}>
                    <span>
                      <span className="rcg-tile-label">{c.label}</span>
                      <span className="rcg-tile-hint" style={{ display: 'block' }}>{c.hint}</span>
                    </span>
                    <svg className="rcg-tile-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                ))}
              </div>

              <p style={{ fontSize: '13px', color: '#5c6f96', textAlign: 'center', marginTop: '26px', lineHeight: 1.7 }}>
                Prefer to talk it through? <a href="tel:+13055634920" style={{ color: '#8fa3d8' }}>Call 305-563-4920</a>
              </p>
            </div>
          )}

          {/* ---------- STEP 2 ---------- */}
          {step === 2 && (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Honeypot */}
              <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                <label>
                  Website (leave blank)
                  <input type="text" name="website_url" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="rcg-chip">
                <span>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.8px', textTransform: 'uppercase', color: '#5b8ae6', display: 'block', marginBottom: '3px' }}>Inquiry type</span>
                  <span style={{ color: '#e4ecff', fontSize: '15px', fontWeight: 600 }}>{selected?.label}</span>
                </span>
                <button type="button" className="rcg-chip-change" onClick={() => setStep(1)}>Change</button>
              </div>

              <div>
                <label className="rcg-label" htmlFor="f-name">Full name</label>
                <input id="f-name" className="rcg-input" type="text" required autoComplete="name" value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={submitting} />
              </div>

              <div className="rcg-field-row">
                <div>
                  <label className="rcg-label" htmlFor="f-email">Email</label>
                  <input id="f-email" className="rcg-input" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={submitting} />
                </div>
                <div>
                  <label className="rcg-label" htmlFor="f-phone">Phone</label>
                  <input id="f-phone" className="rcg-input" type="tel" required autoComplete="tel" placeholder="(305) 555-1234" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={submitting} />
                </div>
              </div>

              <div>
                <label className="rcg-label" htmlFor="f-state">State</label>
                <select id="f-state" className="rcg-input" required value={state} onChange={(e) => setState(e.target.value)} disabled={submitting} style={{ color: state ? '#e4ecff' : '#5c6f96', cursor: 'pointer' }}>
                  <option value="">Select state</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s} style={{ background: '#070b14', color: '#e4ecff' }}>{s}</option>
                  ))}
                </select>
              </div>

              {isPropertyClaim(claimType) && (
                <>
                  <div className="rcg-field-row">
                    <div>
                      <label className="rcg-label" htmlFor="f-county">County</label>
                      <input id="f-county" className="rcg-input" type="text" required placeholder="e.g. Miami-Dade" value={county} onChange={(e) => setCounty(e.target.value)} disabled={submitting} />
                    </div>
                    <div>
                      <label className="rcg-label" htmlFor="f-sale">Roughly when it sold</label>
                      <input id="f-sale" className="rcg-input" type="month" value={saleDateApprox} onChange={(e) => setSaleDateApprox(e.target.value)} disabled={submitting} style={{ color: saleDateApprox ? '#e4ecff' : '#5c6f96' }} />
                    </div>
                  </div>
                  <div>
                    <label className="rcg-label" htmlFor="f-addr">Property address</label>
                    <input id="f-addr" className="rcg-input" type="text" placeholder="Optional" value={propertyAddress} onChange={(e) => setPropertyAddress(e.target.value)} disabled={submitting} />
                  </div>
                </>
              )}

              {claimType === 'unclaimed_property' && (
                <>
                  <div>
                    <label className="rcg-label" htmlFor="f-asset">What kind of funds</label>
                    <input id="f-asset" className="rcg-input" type="text" required placeholder="e.g. old bank account, uncashed check, deposit" value={assetDesc} onChange={(e) => setAssetDesc(e.target.value)} disabled={submitting} />
                    <p className="rcg-help">A rough description is enough. You don&apos;t need account numbers.</p>
                  </div>
                  <div>
                    <label className="rcg-label" htmlFor="f-prior">Address at the time</label>
                    <input id="f-prior" className="rcg-input" type="text" placeholder="Optional" value={priorAddress} onChange={(e) => setPriorAddress(e.target.value)} disabled={submitting} />
                  </div>
                </>
              )}

              {claimType === 'estate' && (
                <>
                  <div>
                    <label className="rcg-label" htmlFor="f-rel">Your relationship and what is owed</label>
                    <input id="f-rel" className="rcg-input" type="text" required placeholder="e.g. daughter of the deceased, surplus from her home" value={assetDesc} onChange={(e) => setAssetDesc(e.target.value)} disabled={submitting} />
                  </div>
                  <div>
                    <label className="rcg-label" htmlFor="f-last">Their last known address</label>
                    <input id="f-last" className="rcg-input" type="text" placeholder="Optional" value={priorAddress} onChange={(e) => setPriorAddress(e.target.value)} disabled={submitting} />
                  </div>
                </>
              )}

              <div>
                <label className="rcg-label" htmlFor="f-msg">
                  {claimType === 'unsure' ? 'Tell us what happened' : 'Anything else we should know'}
                </label>
                <textarea
                  id="f-msg"
                  className="rcg-input"
                  rows={4}
                  required={claimType === 'unsure'}
                  placeholder={claimType === 'unsure' ? 'In your own words. Even partial details help.' : 'Optional'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={submitting}
                  style={{ resize: 'vertical', minHeight: '104px' }}
                />
              </div>

              {error && (
                <div style={{ background: 'rgba(200,60,60,0.1)', border: '1px solid rgba(220,90,90,0.45)', padding: '13px 15px', color: '#f0a0a0', fontSize: '14px' }}>
                  {error}
                </div>
              )}

              <button type="submit" disabled={submitting} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '4px', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
                {submitting ? 'Sending…' : 'Send my claim review'}
              </button>

              <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#4a5c85', textAlign: 'center', lineHeight: 2 }}>
                No obligation · No fees until we recover
              </p>
            </form>
          )}
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(91,138,230,0.2),transparent)' }} />

      <section style={{ background: '#000', padding: 'clamp(48px,5vw,72px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Prefer to call?</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(21px,3vw,30px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.15, margin: '14px 0 14px' }}>Talk to our team directly.</h2>
          <p style={{ fontSize: '14px', color: '#7d92c4', lineHeight: 1.8, marginBottom: '26px' }}>Monday through Friday, 9 AM to 6 PM Eastern. Hablamos español.</p>
          <a href="tel:+13055634920" className="btn-primary" style={{ display: 'inline-block' }}>Call 305-563-4920</a>
        </div>
      </section>
    </main>
  )
}
