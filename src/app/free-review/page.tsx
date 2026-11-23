'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import Link from 'next/link'
import { getAttribution } from '@/lib/attribution'
import { trackLead } from '@/components/Analytics'
import h from '@/components/home/home.module.css'

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
  { value: 'pre_foreclosure',    label: 'Facing foreclosure',   hint: 'My home has not sold yet, or I have an auction date' },
  { value: 'foreclosure',        label: 'Foreclosure surplus',  hint: 'My property already sold at a foreclosure auction' },
  { value: 'tax_deed',           label: 'Tax deed overage',     hint: 'A property sold for unpaid taxes' },
  { value: 'unclaimed_property', label: 'Unclaimed property',   hint: 'Old accounts, checks, or state-held funds' },
  { value: 'estate',             label: 'Estate recovery',      hint: 'Funds owed to a relative who passed away' },
  { value: 'unsure',             label: "I'm not sure",         hint: 'Describe it and we will figure it out' },
]

const isPropertyClaim = (t: string) => t === 'foreclosure' || t === 'tax_deed'

const SMS_CONSENT_LABEL = 'Text me updates about my claim'
const SMS_CONSENT_LEGAL =
  'I agree to receive calls and text messages from Rebound Capital Group LLC about my inquiry and claim at the number I provided, including messages sent with automated technology. Consent is not a condition of service. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help.'
const SMS_CONSENT_TEXT = `${SMS_CONSENT_LABEL}. ${SMS_CONSENT_LEGAL}`

export default function FreeReviewPage() {
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
  const [auctionDate, setAuctionDate] = useState('')
  const [propertyAddress, setPropertyAddress] = useState('')
  const [assetDesc, setAssetDesc] = useState('')
  const [priorAddress, setPriorAddress] = useState('')
  const [message, setMessage] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('') // honeypot
  const [smsConsent, setSmsConsent] = useState(false)

  const formLoadedAt = useRef<number>(Date.now())
  const detailsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    formLoadedAt.current = Date.now()
    // Links like /free-review?type=pre_foreclosure jump straight to step 2.
    const preset = new URLSearchParams(window.location.search).get('type')
    if (preset && CLAIM_TYPES.some((c) => c.value === preset)) {
      setClaimType(preset)
      setStep(2)
    }
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
          claimType, fullName, email, phone, state, county, saleDateApprox, auctionDate,
          propertyAddress, assetDesc, priorAddress, message,
          smsConsent,
          smsConsentText: smsConsent ? SMS_CONSENT_TEXT : null,
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

      trackLead({ form: 'contact', claim_type: claimType, state })
      setSubmitted(true)
    } catch {
      setError('Network error. Please check your connection and try again.')
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main className={h.page}>
        <section style={{ background: '#F9F8F6', padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,60px)', textAlign: 'center', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: '560px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', border: '1px solid rgba(30,40,127,0.3)', background: '#e9eefb', borderRadius: '50%', marginBottom: '32px' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1E287F" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className={h.eyebrow}>Submission received</div>
            <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: 'clamp(40px,5vw,60px)', color: '#0d1322', lineHeight: 1.05, margin: '16px 0 20px' }}>Thank you.</h1>
            <p style={{ fontSize: '17px', color: '#2f3856', lineHeight: 1.7, marginBottom: '28px' }}>We have your inquiry and will review it within 24 hours. If there are funds to recover, someone from our team will call you to walk through the next steps.</p>
            <p style={{ fontSize: '15px', color: '#3a4360', lineHeight: 1.8, marginBottom: '24px' }}>Need to reach us sooner?</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+13055634920" className={h.btnPrimary} style={{ padding: '18px 26px', fontSize: '14px' }}>Call 305-563-4920</a>
              <Link href="/" className={h.btnOutline} style={{ padding: '16px 24px', fontSize: '14px' }}>Back to home</Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  const selected = CLAIM_TYPES.find((c) => c.value === claimType)

  return (
    <main className={h.page}>
      <style>{`
        .rcg-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 620px) { .rcg-field-row { grid-template-columns: 1fr; } }
        .rcg-label { font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #1E287F; display: block; margin-bottom: 7px; }
        .rcg-input { background: #fff; border: 1.5px solid rgba(13,19,34,0.15); border-radius: 8px; padding: 15px 16px; color: #0d1322; font-size: 16px; font-family: inherit; outline: none; width: 100%; min-width: 0; box-sizing: border-box; transition: border-color 0.15s, box-shadow 0.15s; }
        .rcg-input::placeholder { color: #8a93ad; }
        .rcg-input:hover { border-color: rgba(30,40,127,0.4); }
        .rcg-input:focus { border-color: #1E287F; box-shadow: 0 0 0 3px rgba(91,138,230,0.25); }
        .rcg-help { font-size: 13px; color: #3a4360; line-height: 1.6; margin-top: 7px; }
        .rcg-tile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 720px) { .rcg-tile-grid { grid-template-columns: 1fr; } }
        .rcg-tile { display: flex; align-items: center; justify-content: space-between; gap: 14px; width: 100%; text-align: left; background: #fff; border: 1.5px solid rgba(13,19,34,0.1); border-radius: 12px; padding: 18px 20px; cursor: pointer; font-family: inherit; box-shadow: 0 8px 24px rgba(13,19,34,0.05); transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s; }
        .rcg-tile:hover, .rcg-tile:focus-visible { border-color: #1E287F; transform: translateY(-2px); box-shadow: 0 14px 30px rgba(30,40,127,0.14); outline: none; }
        .rcg-tile-label { color: #0d1322; font-size: 17px; font-weight: 800; line-height: 1.3; }
        .rcg-tile-hint { color: #3a4360; font-size: 14px; line-height: 1.5; margin-top: 4px; }
        .rcg-tile-arrow { color: #1E287F; flex-shrink: 0; }
        .rcg-chip { display: flex; align-items: center; justify-content: space-between; gap: 12px; border: 1px solid rgba(30,40,127,0.2); background: #e9eefb; border-radius: 10px; padding: 13px 16px; }
        .rcg-chip-change { font-size: 12px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #1E287F; background: none; border: none; cursor: pointer; padding: 4px 2px; text-decoration: underline; }
        .rcg-steps { font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #1E287F; }
        @media (prefers-reduced-motion: reduce) { .rcg-tile { transition: none; } .rcg-tile:hover { transform: none; } }
      `}</style>

      {/* HERO: short so the form is reachable without a long scroll */}
      <div className={h.wrap} style={{ padding: '44px 16px 8px', textAlign: 'center', maxWidth: '720px' }}>
        <div className={h.eyebrow}>Free claim review · $0 upfront</div>
        <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: 'clamp(40px,5.4vw,64px)', lineHeight: 1.02, margin: '14px 0 16px', color: '#0d1322' }}>
          Find out what <em className={h.gradText}>you&apos;re owed.</em>
        </h1>
        <p style={{ fontSize: 'clamp(15px,1.6vw,18px)', color: '#2f3856', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto' }}>
          Two quick steps. We search court records and state databases at no cost, and call you within 24 hours if there are funds to recover.
        </p>
      </div>

      <div style={{ padding: 'clamp(32px,4vw,48px) 16px clamp(48px,6vw,72px)' }}>
        <div ref={detailsRef} style={{ maxWidth: '620px', margin: '0 auto' }}>

          {/* Progress */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
            <span className="rcg-steps">Step {step} of 2</span>
            <div style={{ flex: 1, height: '2px', background: 'rgba(30,40,127,0.12)' }}>
              <div style={{ width: step === 1 ? '50%' : '100%', height: '100%', background: '#1E287F', transition: 'width 0.3s ease' }} />
            </div>
          </div>

          {/* ---------- STEP 1 ---------- */}
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: 'clamp(28px,3.2vw,36px)', color: '#0d1322', margin: '0 0 6px' }}>
                What are you inquiring about?
              </h2>
              <p style={{ fontSize: '15px', color: '#3a4360', lineHeight: 1.6, margin: '0 0 22px' }}>
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

              <p style={{ fontSize: '14px', color: '#3a4360', textAlign: 'center', marginTop: '26px', lineHeight: 1.7 }}>
                Prefer to talk it through? <a href="tel:+13055634920" style={{ color: '#1E287F', fontWeight: 700 }}>Call 305-563-4920</a>
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
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1E287F', display: 'block', marginBottom: '3px' }}>Inquiry type</span>
                  <span style={{ color: '#0d1322', fontSize: '16px', fontWeight: 800 }}>{selected?.label}</span>
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
                <select id="f-state" className="rcg-input" required value={state} onChange={(e) => setState(e.target.value)} disabled={submitting} style={{ color: state ? '#0d1322' : '#8a93ad', cursor: 'pointer' }}>
                  <option value="">Select state</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s} style={{ background: '#fff', color: '#0d1322' }}>{s}</option>
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
                      <input id="f-sale" className="rcg-input" type="month" value={saleDateApprox} onChange={(e) => setSaleDateApprox(e.target.value)} disabled={submitting} style={{ color: saleDateApprox ? '#0d1322' : '#8a93ad' }} />
                    </div>
                  </div>
                  <div>
                    <label className="rcg-label" htmlFor="f-addr">Property address</label>
                    <input id="f-addr" className="rcg-input" type="text" placeholder="Optional" value={propertyAddress} onChange={(e) => setPropertyAddress(e.target.value)} disabled={submitting} />
                  </div>
                </>
              )}

              {claimType === 'pre_foreclosure' && (
                <>
                  <div className="rcg-field-row">
                    <div>
                      <label className="rcg-label" htmlFor="f-county-pre">County</label>
                      <input id="f-county-pre" className="rcg-input" type="text" placeholder="Optional" value={county} onChange={(e) => setCounty(e.target.value)} disabled={submitting} />
                    </div>
                    <div>
                      <label className="rcg-label" htmlFor="f-auction">Auction date, if you have one</label>
                      <input id="f-auction" className="rcg-input" type="date" value={auctionDate} onChange={(e) => setAuctionDate(e.target.value)} disabled={submitting} style={{ color: auctionDate ? '#0d1322' : '#8a93ad' }} />
                    </div>
                  </div>
                  <div>
                    <label className="rcg-label" htmlFor="f-addr-pre">Property address</label>
                    <input id="f-addr-pre" className="rcg-input" type="text" placeholder="Optional" value={propertyAddress} onChange={(e) => setPropertyAddress(e.target.value)} disabled={submitting} />
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

              <label htmlFor="f-sms" style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '10px', alignItems: 'start', cursor: 'pointer' }}>
                <input
                  id="f-sms"
                  type="checkbox"
                  checked={smsConsent}
                  onChange={(e) => setSmsConsent(e.target.checked)}
                  disabled={submitting}
                  style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: '#1E287F', cursor: 'pointer' }}
                />
                <span style={{ display: 'block' }}>
                  <span style={{ display: 'block', fontSize: '15px', fontWeight: 700, color: '#0d1322', lineHeight: 1.4 }}>
                    {SMS_CONSENT_LABEL} <span style={{ fontWeight: 400, color: '#3a4360', fontSize: '13px' }}>(fastest way to reach me)</span>
                  </span>
                  <span style={{ display: 'block', fontSize: '12px', color: '#3a4360', lineHeight: 1.6, marginTop: '6px' }}>
                    {SMS_CONSENT_LEGAL} See our <Link href="/privacy#communications" style={{ color: '#1E287F' }}>Privacy Policy</Link> and <Link href="/terms" style={{ color: '#1E287F' }}>Terms</Link>. Optional.
                  </span>
                </span>
              </label>

              {error && (
                <div style={{ background: '#fdecec', border: '1px solid rgba(200,60,60,0.45)', borderRadius: '8px', padding: '13px 15px', color: '#a12828', fontSize: '14px' }}>
                  {error}
                </div>
              )}

              <button type="submit" disabled={submitting} className={h.btnPrimary} style={{ width: '100%', border: 0, padding: '19px', fontSize: '15px', marginTop: '4px', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
                {submitting ? 'Sending…' : 'Send my claim review'}
              </button>

              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1E287F', textAlign: 'center', lineHeight: 2, margin: 0 }}>
                No obligation · No fees until we recover
              </p>

              <p style={{ fontSize: '12px', color: '#3a4360', textAlign: 'center', lineHeight: 1.7, margin: 0 }}>
                By submitting, you agree to our <Link href="/terms" style={{ color: '#1E287F' }}>Terms</Link> and <Link href="/privacy" style={{ color: '#1E287F' }}>Privacy Policy</Link>, and that Rebound Capital Group LLC may contact you by phone and email about your inquiry.
              </p>
            </form>
          )}
        </div>
      </div>

      <div className={h.wrap} style={{ paddingBottom: '80px' }}>
        <div style={{ background: 'radial-gradient(ellipse at 90% 0%, #1f2d6b 0%, #0d1322 62%)', color: '#fff', borderRadius: '16px', padding: 'clamp(28px,4vw,44px)', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', alignItems: 'center', maxWidth: '920px', margin: '0 auto' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#93b8ff', marginBottom: '8px' }}>Prefer to call?</div>
            <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 'clamp(28px,3.4vw,40px)', lineHeight: 1.05 }}>Talk to a person, any time.</div>
            <p style={{ margin: '8px 0 0', fontSize: '15px', color: '#c3cfee' }}>Call or text 24/7. Hablamos español.</p>
          </div>
          <a href="tel:+13055634920" className={h.btnWhite}>Call 305-563-4920</a>
        </div>
      </div>
    </main>
  )
}
