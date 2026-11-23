import Link from 'next/link'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import { TrustRow } from '@/components/ui/blocks'
import { L, type Lang } from '@/lib/i18n'
import c from './contact.module.css'
import ContactForm from './ContactForm'

const Icon = ({ d }: { d: React.ReactNode }) => (
  <span className={c.icon}>
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
  </span>
)

const T = {
  en: {
    home: 'Home', crumb: 'Contact', crumbs: 'Breadcrumb', eyebrow: 'Contact · 24/7', h1a: 'Talk to a', h1b: 'real person.',
    intro: 'Questions about a case, a letter you received, or working with us? Call, text or send a message. A member of our team answers every message.',
    callL: 'Call or text', callM: 'Any time, 24/7', msgL: 'Message', msgV: 'Send us a note', msgM: 'We reply within one business day',
    baseL: 'Based in', baseM: 'Serving all 50 states', tag: 'Free, no obligation', rTitle: "Think you're owed money?",
    rSub: 'Start a free review. It takes about two minutes and costs nothing.', rBtn: 'Start free review',
  },
  es: {
    home: 'Inicio', crumb: 'Contacto', crumbs: 'Ruta de navegación', eyebrow: 'Contacto · 24/7 · Hablamos español', h1a: 'Hable con una', h1b: 'persona real.',
    intro: '¿Preguntas sobre un caso, una carta que recibió o cómo trabajamos? Llame, escriba o envíenos un mensaje. Una persona de nuestro equipo responde cada mensaje.',
    callL: 'Llame o escriba', callM: 'A cualquier hora, 24/7', msgL: 'Mensaje', msgV: 'Escríbanos', msgM: 'Respondemos en un día hábil',
    baseL: 'Con sede en', baseM: 'Atendemos los 50 estados', tag: 'Gratis, sin compromiso', rTitle: '¿Cree que le deben dinero?',
    rSub: 'Empiece una revisión gratis. Toma unos dos minutos y no cuesta nada.', rBtn: 'Revisión gratis',
  },
}

export default function ContactView({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <div className={h.page}>
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label={t.crumbs} className={sv.crumbs}>
          <Link href={L(lang, '/')}>{t.home}</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>{t.crumb}</span>
        </div>
        <div className={`${sv.heroText} ${sv.heroCenter}`}>
          <div className={h.eyebrow}>{t.eyebrow}</div>
          <h1 className={sv.h1}>{t.h1a} <em className={h.gradText}>{t.h1b}</em></h1>
          <p className={sv.answer}>{t.intro}</p>
        </div>
      </div>

      <div className={h.wrap}>
        <div className={c.layout}>
        <div className={c.side}>
        <div className={c.grid}>
          <a href="tel:+13055634920" className={c.card}>
            <Icon d={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />} />
            <span className={c.label}>{t.callL}</span>
            <span className={c.value}>305-563-4920</span>
            <span className={c.meta}>{t.callM}</span>
          </a>
          <a href="#message" className={c.card}>
            <Icon d={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} />
            <span className={c.label}>{t.msgL}</span>
            <span className={c.value}>{t.msgV}</span>
            <span className={c.meta}>{t.msgM}</span>
          </a>
          <div className={c.card}>
            <Icon d={<><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>} />
            <span className={c.label}>{t.baseL}</span>
            <span className={c.value}>Miami Beach, FL</span>
            <span className={c.meta}>{t.baseM}</span>
          </div>
        </div>

        <Link href={L(lang, '/free-review')} className={c.review}>
          <span className={c.reviewText}>
            <span className={c.reviewTag}>{t.tag}</span>
            <span className={c.reviewTitle}>{t.rTitle}</span>
            <span className={c.reviewSub}>{t.rSub}</span>
          </span>
          <span className={c.reviewBtn}>{t.rBtn} <span aria-hidden="true">→</span></span>
        </Link>

        <div className={c.trust}><TrustRow lang={lang} /></div>
        </div>
        <div id="message" className={c.formCard} style={{ scrollMarginTop: 110 }}><ContactForm /></div>
        </div>
      </div>

      <div style={{ height: 96 }} />
    </div>
  )
}
