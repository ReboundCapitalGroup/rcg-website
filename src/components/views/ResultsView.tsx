import Link from 'next/link'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import GoogleReviews from '@/components/GoogleReviews'
import { ScrollCue } from '@/components/ui/blocks'
import { L, type Lang } from '@/lib/i18n'

const COPY = {
  en: {
    home: 'Home', crumb: 'Results', crumbs: 'Breadcrumb', eyebrow: 'Google reviews · $2M+ recovered', h1a: 'What clients', h1b: 'say.',
    intro: 'Real reviews from the homeowners and families we have worked with, straight from Google. Since 2023, over $2 million has been recovered for clients on a pure contingency basis.',
    glance: 'By the numbers', rows: [['Total recovered for clients', '$2M+'], ['Fee model', '100% contingency'], ['Coverage', 'Nationwide']],
    closeH: 'Find out what you are owed.', closeP: 'A free search takes minutes. If funds exist in your name, we find them and handle the full recovery at no cost to you.',
    review: 'Get a free review', call: 'Call 305-563-4920',
  },
  es: {
    home: 'Inicio', crumb: 'Reseñas', crumbs: 'Ruta de navegación', eyebrow: 'Reseñas en Google · $2M+ recuperados', h1a: 'Lo que dicen', h1b: 'nuestros clientes.',
    intro: 'Reseñas reales de los propietarios y familias con quienes hemos trabajado, directamente de Google. Desde 2023 hemos recuperado más de $2 millones para nuestros clientes, siempre por contingencia.',
    glance: 'En números', rows: [['Total recuperado para clientes', '$2M+'], ['Modelo de honorarios', '100% contingencia'], ['Cobertura', 'Todo el país']],
    closeH: 'Descubra cuánto le deben.', closeP: 'Una búsqueda gratis toma minutos. Si hay fondos a su nombre, los encontramos y nos encargamos de toda la recuperación sin costo para usted.',
    review: 'Revisión gratis', call: 'Llame al 305-563-4920',
  },
}

export default function ResultsView({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  const to = (href: string) => L(lang, href)
  return (
    <div className={h.page}>
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label={t.crumbs} className={sv.crumbs}>
          <Link href={to('/')}>{t.home}</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>{t.crumb}</span>
        </div>
        <div className={sv.heroGrid}>
          <div className={sv.heroText}>
            <div className={h.eyebrow}>{t.eyebrow}</div>
            <h1 className={sv.h1}>{t.h1a} <em className={h.gradText}>{t.h1b}</em></h1>
            <p className={sv.answer}>{t.intro}</p>
          </div>
          <div className={sv.glance}>
            <div className={sv.glanceLabel}>{t.glance}</div>
            {t.rows.map(([k, v]) => (
              <div key={k} className={sv.glanceRow}><span>{k}</span><b>{v}</b></div>
            ))}
          </div>
        </div>
      </div>

      <ScrollCue to="more" lang={lang} />

      <div id="more" className={h.wrap} style={{ scrollMarginTop: 100 }}>
        <GoogleReviews lang={lang} />
      </div>

      <div style={{ height: 72 }} />
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
