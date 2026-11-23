'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
import Link from 'next/link'
import { getAttribution } from '@/lib/attribution'
import h from '@/components/home/home.module.css'
import c from './contact.module.css'
import { SMS_CONSENT_LEGAL, SMS_CONSENT_LEGAL_ES } from '@/lib/smsConsent'
import { L } from '@/lib/i18n'
import { useLang } from '@/lib/useLang'

const T = {
  en: {
    smsLabel: 'Text me a reply', smsLegal: SMS_CONSENT_LEGAL, smsOpt: 'Optional · fastest way to reach you',
    topics: ['My existing case', 'A letter or call from RCG', 'Referrals or partnerships', 'Something else'],
    pickTopic: 'Please pick what your message is about.', moreDetail: 'Please add a little more detail to your message.',
    genericErr: 'Something went wrong. Please try again.', netErr: 'Network error. Please check your connection and try again.',
    doneTitle: 'Message received.', doneText: 'Thank you. A member of our team will get back to you within one business day. Need us sooner? Call or text 305-563-4920.',
    title: 'Send us a message', sub1: 'For questions about money you may be owed, the ', sub2: 'free review', sub3: ' is faster.',
    about: 'What is this about?', name: 'Full name', email: 'Email', phone: 'Phone', state: 'State', selectState: 'Select state', message: 'Your message',
    sending: 'Sending…', send: 'Send message', see: 'See our', privacy: 'Privacy Policy', and: 'and', terms: 'Terms',
    fine1: 'By submitting, you agree to our ', fine2: ', and that Rebound Capital Group LLC may contact you by phone and email about your message.', hp: 'Website (leave blank)',
  },
  es: {
    smsLabel: 'Respóndanme por mensaje de texto', smsLegal: SMS_CONSENT_LEGAL_ES, smsOpt: 'Opcional · la forma más rápida',
    topics: ['Mi caso actual', 'Una carta o llamada de RCG', 'Referidos o alianzas', 'Otro tema'],
    pickTopic: 'Elija el tema de su mensaje.', moreDetail: 'Agregue un poco más de detalle a su mensaje.',
    genericErr: 'Algo salió mal. Intente de nuevo o llámenos al 305-563-4920.', netErr: 'Error de conexión. Revise su conexión e intente de nuevo.',
    doneTitle: 'Mensaje recibido.', doneText: 'Gracias. Un miembro de nuestro equipo le responderá en un día hábil. ¿Lo necesita antes? Llame o escriba al 305-563-4920.',
    title: 'Envíenos un mensaje', sub1: 'Si su pregunta es sobre dinero que le podrían deber, la ', sub2: 'revisión gratis', sub3: ' es más rápida.',
    about: '¿De qué se trata?', name: 'Nombre completo', email: 'Correo electrónico', phone: 'Teléfono', state: 'Estado', selectState: 'Elija su estado', message: 'Su mensaje',
    sending: 'Enviando…', send: 'Enviar mensaje', see: 'Vea nuestra', privacy: 'Política de privacidad', and: 'y', terms: 'Términos',
    fine1: 'Al enviar, usted acepta nuestros ', fine2: ', y que Rebound Capital Group LLC le contacte por teléfono y correo electrónico sobre su mensaje.', hp: 'Sitio web (dejar en blanco)',
  },
}

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


export default function ContactForm() {
  const lang = useLang()
  const t = T[lang]
  const SMS_TEXT = `${t.smsLabel}. ${t.smsLegal}`
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
    if (!topic) { setError(t.pickTopic); return }
    if (message.trim().length < 10) { setError(t.moreDetail); return }
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inquiry: 'general',
          lang,
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
        setError(lang === 'es' ? t.genericErr : data.error || t.genericErr)
        setSubmitting(false)
        return
      }
      setSubmitted(true)
    } catch {
      setError(t.netErr)
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={c.done}>
        <span className={c.doneIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
        </span>
        <h2 className={c.formTitle}>{t.doneTitle}</h2>
        <p className={c.formSub}>{t.doneText}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={c.form} noValidate={false}>
      {/* Honeypot: hidden from people, bots fill it */}
      <div className={c.hp} aria-hidden="true">
        <label>{t.hp}
          <input type="text" name="website_url" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <h2 className={c.formTitle}>{t.title}</h2>
        <p className={c.formSub}>{t.sub1}<Link href={L(lang, '/free-review')}>{t.sub2}</Link>{t.sub3}</p>
      </div>

      <fieldset className={c.fieldset}>
        <legend className={c.lab}>{t.about}</legend>
        <div className={c.topics}>
          {t.topics.map((x) => (
            <button key={x} type="button" aria-pressed={topic === x} className={`${c.topic} ${topic === x ? c.topicOn : ''}`} onClick={() => setTopic(x)} disabled={submitting}>{x}</button>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={c.lab} htmlFor="c-name">{t.name}</label>
        <input id="c-name" className={c.input} type="text" required minLength={2} autoComplete="name" value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={submitting} />
      </div>

      <div className={c.row}>
        <div>
          <label className={c.lab} htmlFor="c-email">{t.email}</label>
          <input id="c-email" className={c.input} type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={submitting} />
        </div>
        <div>
          <label className={c.lab} htmlFor="c-phone">{t.phone}</label>
          <input id="c-phone" className={c.input} type="tel" required autoComplete="tel" placeholder="(305) 555-1234" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={submitting} />
        </div>
      </div>

      <div>
        <label className={c.lab} htmlFor="c-state">{t.state}</label>
        <select id="c-state" className={c.input} required value={state} onChange={(e) => setState(e.target.value)} disabled={submitting} style={{ color: state ? '#0d1322' : '#8a93ad' }}>
          <option value="">{t.selectState}</option>
          {US_STATES.map((s) => <option key={s} value={s} style={{ color: '#0d1322' }}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className={c.lab} htmlFor="c-msg">{t.message}</label>
        <textarea id="c-msg" className={c.input} rows={5} required minLength={10} maxLength={2000} value={message} onChange={(e) => setMessage(e.target.value)} disabled={submitting} style={{ resize: 'vertical', minHeight: 120 }} />
      </div>

      <label htmlFor="c-sms" className={`${c.sms} ${smsConsent ? c.smsOn : ''}`}>
        <input id="c-sms" type="checkbox" className={c.smsBox} checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} disabled={submitting} />
        <span>
          <span className={c.smsTitle}>{t.smsLabel} <span className={c.smsOpt}>{t.smsOpt}</span></span>
          <span className={c.smsLegal}>{t.smsLegal} {t.see} <Link href={L(lang, '/privacy#communications')}>{t.privacy}</Link> {t.and} <Link href={L(lang, '/terms')}>{t.terms}</Link>.</span>
        </span>
      </label>

      {error && <div className={c.err}>{error}</div>}

      <button type="submit" disabled={submitting} className={h.btnPrimary} style={{ width: '100%', border: 0, padding: 18, fontSize: 15, opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
        {submitting ? t.sending : t.send}
      </button>

      <p className={c.fine}>
        {t.fine1}<Link href={L(lang, '/terms')}>{t.terms}</Link> {t.and} <Link href={L(lang, '/privacy')}>{t.privacy}</Link>{t.fine2}
      </p>
    </form>
  )
}
