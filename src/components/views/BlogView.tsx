import Link from 'next/link'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import { L, type Lang } from '@/lib/i18n'

const COPY = {
  en: {
    home: 'Home', crumb: 'Blog', crumbs: 'Breadcrumb', eyebrow: 'Coming soon', h1a: 'Guides and', h1b: 'case notes.',
    intro: 'We are writing plain-language guides on foreclosure, surplus funds and claims, plus notes from real cases. Until then, our team answers questions directly.',
    cards: [
      ['County guides', 'Who holds the money in your county and how claims work there.', '/states'],
      ['How it works', 'Six steps, from the free search to the payout.', '/resources/how-it-works'],
      ['FAQs', 'Straight answers about fees, deadlines and the process.', '/resources/faqs'],
    ],
    review: 'Get a free review', call: 'Call 305-563-4920',
  },
  es: {
    home: 'Inicio', crumb: 'Blog', crumbs: 'Ruta de navegación', eyebrow: 'Próximamente', h1a: 'Guías y', h1b: 'notas de casos.',
    intro: 'Estamos escribiendo guías en lenguaje sencillo sobre ejecuciones, fondos excedentes y reclamos, además de notas de casos reales. Mientras tanto, nuestro equipo responde sus preguntas directamente.',
    cards: [
      ['Guías por condado', 'Quién guarda el dinero en su condado y cómo funcionan los reclamos allí.', '/states'],
      ['Cómo funciona', 'Seis pasos, de la búsqueda gratis al pago.', '/resources/how-it-works'],
      ['Preguntas frecuentes', 'Respuestas claras sobre honorarios, plazos y el proceso.', '/resources/faqs'],
    ],
    review: 'Revisión gratis', call: 'Llame al 305-563-4920',
  },
}

export default function BlogView({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  const to = (href: string) => L(lang, href)
  return (
    <div className={h.page}>
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label={t.crumbs} className={sv.crumbs}>
          <Link href={to('/')}>{t.home}</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>{t.crumb}</span>
        </div>
        <div className={`${sv.heroText} ${sv.heroCenter}`}>
          <div className={h.eyebrow}>{t.eyebrow}</div>
          <h1 className={sv.h1}>{t.h1a} <em className={h.gradText}>{t.h1b}</em></h1>
          <p className={sv.answer}>{t.intro}</p>
          <div className={h.btnRow}>
            <Link href={to('/free-review')} className={`${h.btnPrimary} ${h.btnLg}`}>{t.review} <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>{t.call}</a>
          </div>
        </div>
      </div>
      <div className={`${h.wrap} ${sv.block}`}>
        <div className={sv.cards}>
          {t.cards.map(([title, desc, href], i) => (
            <Link key={href} href={to(href)} className={i % 2 === 0 ? `${sv.card} ${sv.cardDark}` : sv.card}>
              <span className={sv.cardTitle}>{title}<span aria-hidden="true" className={sv.cardArrow}>→</span></span>
              <span className={sv.cardDesc}>{desc}</span>
            </Link>
          ))}
        </div>
      </div>
      <div style={{ height: 80 }} />
    </div>
  )
}
