import Link from 'next/link'
import Image from 'next/image'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import ReviewsStrip from '@/components/ReviewsStrip'
import { Timeline, TrustRow, PhotoBand, ScrollCue } from '@/components/ui/blocks'
import { L, type Lang } from '@/lib/i18n'

const STEPS = {
  en: [
  { title: 'We start with the search', sub: 'Proactive or on request', desc: 'Whether you come to us or we find funds tied to your name first, every case starts the same way. We search court systems, state agencies and county records to confirm what exists and what you may be entitled to.' },
  { title: 'Free claim review', sub: 'Zero cost, zero obligation', desc: 'We confirm the claim amount, walk you through the process for your case, and answer every question. If there is nothing to recover, we tell you right away.' },
  { title: 'One simple agreement', sub: 'Contingency only', desc: 'One document. It explains our fee, taken only from the recovered amount, and lets us act for you. No upfront payment. No out-of-pocket costs at any point.' },
  { title: 'We handle everything', sub: 'Attorneys, filings, court dates', desc: 'Attorneys in our network file the claim, handle court correspondence, respond to objections and track every deadline. You do not need to appear in court or manage paperwork.' },
  { title: 'Funds are released', sub: 'Court-ordered disbursement', desc: 'Once approved, the court or agency releases the funds. Most claims resolve in 30 to 90 days. Cases involving probate or competing claims can take longer.' },
  { title: 'You get paid', sub: 'Your share, sent to you', desc: 'Your share of the recovered funds goes to you. Our fee comes out of the recovery. If we do not recover, you owe us nothing.' },
  ],
  es: [
    { title: 'Empezamos con la búsqueda', sub: 'Por iniciativa nuestra o a pedido suyo', desc: 'Ya sea que usted nos contacte o que nosotros encontremos primero fondos a su nombre, cada caso empieza igual. Buscamos en tribunales, agencias del estado y registros del condado para confirmar qué existe y a qué podría tener derecho.' },
    { title: 'Revisión gratis del reclamo', sub: 'Sin costo, sin compromiso', desc: 'Confirmamos el monto, le explicamos el proceso para su caso y respondemos todas sus preguntas. Si no hay nada que recuperar, se lo decimos de inmediato.' },
    { title: 'Un solo acuerdo sencillo', sub: 'Solo por contingencia', desc: 'Un documento. Explica nuestros honorarios, que salen únicamente del monto recuperado, y nos autoriza a actuar en su nombre. Sin pagos por adelantado. Sin gastos de su bolsillo en ningún momento.' },
    { title: 'Nosotros nos encargamos de todo', sub: 'Abogados, trámites, audiencias', desc: 'Los abogados de nuestra red presentan el reclamo, manejan la correspondencia con el tribunal, responden a objeciones y vigilan cada plazo. Usted no tiene que ir a la corte ni manejar papeleo.' },
    { title: 'Se liberan los fondos', sub: 'Desembolso ordenado por el tribunal', desc: 'Una vez aprobado, el tribunal o la agencia libera los fondos. La mayoría de los reclamos se resuelven en 30 a 90 días. Los casos con sucesión o reclamos en competencia pueden tardar más.' },
    { title: 'Usted recibe su dinero', sub: 'Su parte, enviada a usted', desc: 'Su parte de los fondos recuperados se le entrega a usted. Nuestros honorarios salen de lo recuperado. Si no recuperamos, no nos debe nada.' },
  ],
}

const FAQS = {
  en: [
  { q: 'How do you get paid?', a: 'Strictly on contingency. We take a percentage of what we recover. If nothing is recovered, you pay nothing.' },
  { q: 'How long does the process take?', a: 'Most claims resolve in 30 to 90 days. Cases involving probate or competing claims can take longer.' },
  { q: 'Do I need to hire my own attorney?', a: 'No. Attorneys in our network are part of the process on every claim. You do not need separate counsel.' },
  { q: 'Is there a deadline to claim?', a: 'Yes, and it varies by state and claim type. Some windows are short. If you have been told about surplus funds, contact us right away.' },
  ],
  es: [
    { q: '¿Cómo cobran ustedes?', a: 'Únicamente por contingencia. Tomamos un porcentaje de lo que recuperamos. Si no se recupera nada, usted no paga nada.' },
    { q: '¿Cuánto tarda el proceso?', a: 'La mayoría de los reclamos se resuelven en 30 a 90 días. Los casos con sucesión o reclamos en competencia pueden tardar más.' },
    { q: '¿Necesito contratar a mi propio abogado?', a: 'No. Los abogados de nuestra red participan en cada reclamo. No necesita un abogado aparte.' },
    { q: '¿Hay una fecha límite para reclamar?', a: 'Sí, y varía según el estado y el tipo de reclamo. Algunos plazos son cortos. Si le avisaron de fondos excedentes, contáctenos de inmediato.' },
  ],
}

const COPY = {
  en: {
    home: 'Home', crumb: 'How It Works', crumbs: 'Breadcrumb', eyebrow: 'Six steps · $0 upfront · One agreement', h1a: 'How it', h1b: 'works.',
    intro: 'From the first search to the final payment, every step is handled by our team, at no cost to you until we recover.',
    start: 'Start a free review', call24: 'Call or text 24/7',
    bandT: 'You never touch the paperwork.', bandP: 'Attorneys in our network handle filings, court correspondence and deadlines. You just answer a few questions.',
    common: 'Common questions', ask: 'Questions people ask.', all: 'All FAQs →',
    closeH: 'Ready to find out what you are owed?', closeP: 'Start with a free search. We confirm what exists, walk you through the process, and handle everything from there.',
    review: 'Get a free review', call: 'Call 305-563-4920',
  },
  es: {
    home: 'Inicio', crumb: 'Cómo funciona', crumbs: 'Ruta de navegación', eyebrow: 'Seis pasos · $0 por adelantado · Un solo acuerdo', h1a: 'Cómo', h1b: 'funciona.',
    intro: 'Desde la primera búsqueda hasta el pago final, nuestro equipo se encarga de cada paso, sin costo para usted hasta que recuperemos.',
    start: 'Empezar revisión gratis', call24: 'Llame o escriba 24/7',
    bandT: 'Usted nunca toca el papeleo.', bandP: 'Los abogados de nuestra red manejan los trámites, la correspondencia con el tribunal y los plazos. Usted solo responde algunas preguntas.',
    common: 'Preguntas comunes', ask: 'Lo que la gente pregunta.', all: 'Todas las preguntas →',
    closeH: '¿Listo para saber cuánto le deben?', closeP: 'Empiece con una búsqueda gratis. Confirmamos qué existe, le explicamos el proceso y nos encargamos de todo a partir de ahí.',
    review: 'Revisión gratis', call: 'Llame al 305-563-4920',
  },
}

export default function HowItWorksView({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  const to = (href: string) => L(lang, href)
  const steps = STEPS[lang]
  const faqs = FAQS[lang]
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
  return (
    <div className={h.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label={t.crumbs} className={sv.crumbs}>
          <Link href={to('/')}>{t.home}</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>{t.crumb}</span>
        </div>
        <div className={`${sv.heroText} ${sv.heroCenter}`}>
          <div className={h.eyebrow}>{t.eyebrow}</div>
          <h1 className={sv.h1}>{t.h1a} <em className={h.gradText}>{t.h1b}</em></h1>
          <p className={sv.answer}>{t.intro}</p>
          <div className={h.btnRow}>
            <Link href={to('/free-review')} className={`${h.btnPrimary} ${h.btnLg}`}>{t.start} <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>{t.call24}</a>
          </div>
          <TrustRow lang={lang} />
        </div>
      </div>

      <ScrollCue to="more" lang={lang} />

      <div id="more" className={h.wrap} style={{ scrollMarginTop: 100 }}>
        <div className={sv.faqGrid} style={{ alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 110 }}>
            <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: 16, overflow: 'hidden', boxShadow: '0 30px 60px rgba(13,19,34,0.18)' }}>
              <Image src="/img/signing.webp" alt="" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: 'cover', objectPosition: '50% 75%' }} />
            </div>
          </div>
          <Timeline items={steps.map((st) => ({ tag: st.sub, title: st.title, text: st.desc }))} />
        </div>
      </div>

      <PhotoBand src="/img/home-miami-beach.webp" position="50% 70%" title={t.bandT} text={t.bandP} />

      <div className={`${h.wrap} ${sv.block}`}>
        <div className={sv.faqGrid}>
          <div>
            <div className={sv.tag}>{t.common}</div>
            <h2 className={sv.h2}>{t.ask}</h2>
            <Link href={to('/resources/faqs')} className={sv.more}>{t.all}</Link>
          </div>
          <div className={sv.faqs}>
            {faqs.map((f, i) => (
              <details key={f.q} className={sv.faq} open={i === 0}>
                <summary>{f.q}<span aria-hidden="true" className={sv.faqSign} /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <ReviewsStrip lang={lang} />

      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>{t.closeH}</h2>
          <p>{t.closeP}</p>
          <div className={h.btnRow}>
            <Link href={to('/free-review')} className={`${h.btnPrimary} ${h.btnLg}`}>{t.review} <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>{t.call}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
