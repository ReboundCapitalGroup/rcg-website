'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import Link from 'next/link'
import { getAttribution } from '@/lib/attribution'
import h from '@/components/home/home.module.css'
import c from './contact.module.css'
import { SMS_CONSENT_LEGAL } from '@/lib/smsConsent'

const SMS_LABEL = 'Text me a reply'
const SMS_TEXT = `${SMS_LABEL}. ${SMS_CONSENT_LEGAL}`

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming',
]

const TOPICS = [
  'My existing case',
  'A letter or call from RCG',
  'Referrals or partnerships',
  'Something else',
]

export default function ContactForm() {
  const [topic, setTopic] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [message, setMessage] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('') // honeypot
  const [smsConsent, setSmsConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const loadedAt = useRef<number>(0)

  useEffect(() => { loadedAt.current = Date.now() }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!topic) { setError('Please pick what your message is about.'); return }
    if (message.trim().length < 10) { setError('Please add a little more detail to your message.'); return }
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inquiry: 'general',
          topic,
          claimType: 'unsure',
          fullName, email, phone, state, message,
          smsConsent,
          smsConsentText: smsConsent ? SMS_TEXT : null,
          website_url: websiteUrl,
          fillTimeMs: Date.now() - loadedAt.current,
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
      <div className={c.done}>
        <span className={c.doneIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
        </span>
        <h2 className={c.formTitle}>Message received.</h2>
        <p className={c.formSub}>Thank you. A member of our team will get back to you within one business day. Need us sooner? Call or text 305-563-4920.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={c.form} noValidate={false}>
      {/* Honeypot: hidden from people, bots fill it */}
      <div className={c.hp} aria-hidden="true">
        <label>Website (leave blank)
          <input type="text" name="website_url" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <h2 className={c.formTitle}>Send us a message</h2>
        <p className={c.formSub}>For questions about money you may be owed, the <Link href="/free-review">free review</Link> is faster.</p>
      </div>

      <fieldset className={c.fieldset}>
        <legend className={c.lab}>What is this about?</legend>
        <div className={c.topics}>
          {TOPICS.map((t) => (
            <button key={t} type="button" aria-pressed={topic === t} className={`${c.topic} ${topic === t ? c.topicOn : ''}`} onClick={() => setTopic(t)} disabled={submitting}>{t}</button>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={c.lab} htmlFor="c-name">Full name</label>
        <input id="c-name" className={c.input} type="text" required minLength={2} autoComplete="name" value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={submitting} />
      </div>

      <div className={c.row}>
        <div>
          <label className={c.lab} htmlFor="c-email">Email</label>
          <input id="c-email" className={c.input} type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={submitting} />
        </div>
        <div>
          <label className={c.lab} htmlFor="c-phone">Phone</label>
          <input id="c-phone" className={c.input} type="tel" required autoComplete="tel" placeholder="(305) 555-1234" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={submitting} />
        </div>
      </div>

      <div>
        <label className={c.lab} htmlFor="c-state">State</label>
        <select id="c-state" className={c.input} required value={state} onChange={(e) => setState(e.target.value)} disabled={submitting} style={{ color: state ? '#0d1322' : '#8a93ad' }}>
          <option value="">Select state</option>
          {US_STATES.map((s) => <option key={s} value={s} style={{ color: '#0d1322' }}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className={c.lab} htmlFor="c-msg">Your message</label>
        <textarea id="c-msg" className={c.input} rows={5} required minLength={10} maxLength={2000} value={message} onChange={(e) => setMessage(e.target.value)} disabled={submitting} style={{ resize: 'vertical', minHeight: 120 }} />
      </div>

      <label htmlFor="c-sms" className={`${c.sms} ${smsConsent ? c.smsOn : ''}`}>
        <input id="c-sms" type="checkbox" className={c.smsBox} checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} disabled={submitting} />
        <span>
          <span className={c.smsTitle}>{SMS_LABEL} <span className={c.smsOpt}>Optional · fastest way to reach you</span></span>
          <span className={c.smsLegal}>{SMS_CONSENT_LEGAL} See our <Link href="/privacy#communications">Privacy Policy</Link> and <Link href="/terms">Terms</Link>.</span>
        </span>
      </label>

      {error && <div className={c.err}>{error}</div>}

      <button type="submit" disabled={submitting} className={h.btnPrimary} style={{ width: '100%', border: 0, padding: 18, fontSize: 15, opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
        {submitting ? 'Sending…' : 'Send message'}
      </button>

      <p className={c.fine}>
        By submitting, you agree to our <Link href="/terms">Terms</Link> and <Link href="/privacy">Privacy Policy</Link>, and that Rebound Capital Group LLC may contact you by phone and email about your message.
      </p>
    </form>
  )
}
