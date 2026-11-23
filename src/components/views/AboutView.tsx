import Link from 'next/link'
import Image from 'next/image'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import { Timeline, ScrollCue, TrustRow } from '@/components/ui/blocks'
import { L, type Lang } from '@/lib/i18n'
import s from './about.module.css'

const STORY = {
  en: [
  { tag: 'The problem', title: 'Money left behind, owners never told', text: 'Years in real estate showed the same pattern: after a foreclosure or tax sale, money was often still sitting in a courthouse or state account, legally owed to the former owner. Most never heard about it.' },
  { tag: '2023', title: 'Rebound Capital Group is founded', text: 'Built in Miami Beach to close that gap: find the funds, handle every filing through attorneys in our network, and only get paid when the client does.' },
  { tag: 'Today', title: 'Over $2 million recovered', text: 'Homeowners and families across the country, every claim type, on a pure contingency basis. Rated A+ by the BBB and 5.0 on Google.' },
  ],
  es: [
    { tag: 'El problema', title: 'Dinero olvidado, dueños sin saberlo', text: 'Años en bienes raíces nos mostraron lo mismo una y otra vez: después de una ejecución o una venta por impuestos, muchas veces quedaba dinero en el tribunal o en una cuenta del estado que legalmente le pertenecía al antiguo dueño. La mayoría nunca se enteró.' },
    { tag: '2023', title: 'Nace Rebound Capital Group', text: 'Fundada en Miami Beach para cerrar esa brecha: encontrar los fondos, manejar cada trámite a través de los abogados de nuestra red y cobrar solo cuando el cliente cobra.' },
    { tag: 'Hoy', title: 'Más de $2 millones recuperados', text: 'Propietarios y familias en todo el país, todo tipo de reclamo, siempre por contingencia. Calificación A+ en el BBB y 5.0 en Google.' },
  ],
}

const COPY = {
  en: {
    home: 'Home', crumb: 'About', crumbs: 'Breadcrumb', eyebrow: 'Our story · Miami Beach, FL · Est. 2023', h1a: 'Why we', h1b: 'started.',
    intro: 'We saw homeowners walk away from money they were owed, not because they gave up, but because nobody told them it was there. Third parties were exploiting that confusion. We built Rebound Capital Group to put the money back where it belongs.',
    whatWeDo: 'What we do', missionA: 'Built to return what', missionB: 'belongs to you.',
    missionText: 'Rebound Capital Group helps homeowners facing foreclosure, and recovers money left behind in court and state systems for former owners and their families. Since 2023, over $2 million has been recovered for clients, on a pure contingency basis.',
    stats: [['$2M+', 'Recovered for clients'], ['5.0', 'Google rating'], ['A+', 'BBB rating'], ['$0', 'Upfront, ever']],
    alt: 'Raul Ibañez, Founder and President of Rebound Capital Group', role: 'Founder & President', li: 'Connect on LinkedIn', liAria: 'Raul Ibañez on LinkedIn',
    lead: 'Leadership', founderH: 'Raul grew up around real estate in Miami.',
    p1: 'Born and raised in Miami, Raul learned early how property, ownership and financial claims intersect in the real world. Bilingual in English and Spanish, he works closely with clients, attorneys and investigators across the country.',
    p2: 'Over the years he built hands-on experience across real estate transactions, recovery matters and claim-related work, on cases ranging from local disputes to complex national matters. That experience shapes how RCG works: grounded, informed, and built to recover what rightfully belongs to the client.',
    closeH: 'You do not need to figure this out alone.', closeP: 'If money is owed to you from a foreclosure, a tax sale or a state treasury, we will find it, file for it and recover it. You pay nothing unless we succeed.',
    review: 'Start a free review', call: 'Call 305-563-4920',
  },
  es: {
    home: 'Inicio', crumb: 'Nosotros', crumbs: 'Ruta de navegación', eyebrow: 'Nuestra historia · Miami Beach, FL · Desde 2023', h1a: 'Por qué', h1b: 'empezamos.',
    intro: 'Vimos a propietarios dejar atrás dinero que se les debía, no porque se rindieran, sino porque nadie les dijo que estaba ahí. Había terceros aprovechándose de esa confusión. Creamos Rebound Capital Group para devolver ese dinero a quien le pertenece.',
    whatWeDo: 'Lo que hacemos', missionA: 'Creada para devolver lo que', missionB: 'le pertenece.',
    missionText: 'Rebound Capital Group ayuda a propietarios que enfrentan una ejecución hipotecaria y recupera el dinero que queda en tribunales y sistemas del estado para antiguos dueños y sus familias. Desde 2023 hemos recuperado más de $2 millones para nuestros clientes, siempre por contingencia.',
    stats: [['$2M+', 'Recuperados para clientes'], ['5.0', 'Calificación en Google'], ['A+', 'Calificación del BBB'], ['$0', 'Por adelantado']],
    alt: 'Raul Ibañez, fundador y presidente de Rebound Capital Group', role: 'Fundador y presidente', li: 'Conectar en LinkedIn', liAria: 'Raul Ibañez en LinkedIn',
    lead: 'Liderazgo', founderH: 'Raul creció rodeado de bienes raíces en Miami.',
    p1: 'Nacido y criado en Miami, Raul aprendió desde temprano cómo se cruzan la propiedad, los títulos y los reclamos financieros en la vida real. Bilingüe en español e inglés, trabaja de cerca con clientes, abogados e investigadores en todo el país.',
    p2: 'Con los años acumuló experiencia práctica en transacciones de bienes raíces, recuperaciones y reclamos, en casos que van desde disputas locales hasta asuntos complejos a nivel nacional. Esa experiencia define cómo trabaja RCG: con los pies en la tierra, bien informados y enfocados en recuperar lo que legítimamente le pertenece al cliente.',
    closeH: 'No tiene que resolver esto solo.', closeP: 'Si se le debe dinero de una ejecución, una venta por impuestos o el tesoro del estado, lo encontramos, presentamos el reclamo y lo recuperamos. No paga nada a menos que tengamos éxito.',
    review: 'Empezar revisión gratis', call: 'Llame al 305-563-4920',
  },
}

export default function AboutView({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  const to = (href: string) => L(lang, href)
  return (
    <div className={h.page}>
      {/* HERO: our story */}
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label={t.crumbs} className={sv.crumbs}>
          <Link href={to('/')}>{t.home}</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>{t.crumb}</span>
        </div>
        <div className={s.story}>
          <div className={sv.heroText}>
            <div className={h.eyebrow}>{t.eyebrow}</div>
            <h1 className={sv.h1}>{t.h1a} <em className={h.gradText}>{t.h1b}</em></h1>
            <p className={sv.answer}>{t.intro}</p>
          </div>
          <Timeline items={STORY[lang]} />
        </div>
      </div>

      {/* MISSION */}
      <ScrollCue to="mission" lang={lang} />
      <section id="mission" className={s.mission}>
        <div className={`${h.wrap} ${s.missionInner}`}>
          <div>
            <div className={s.missionEyebrow}>{t.whatWeDo}</div>
            <h2 className={s.missionTitle}>{t.missionA} <em>{t.missionB}</em></h2>
            <p className={s.missionText}>{t.missionText}</p>
          </div>
          <div className={s.missionStats}>
            {t.stats.map(([v, l]) => (
              <div key={l}><b>{v}</b><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <div className={`${h.wrap} ${s.founder}`}>
        <figure className={s.portrait}>
          <div className={s.photoWrap}>
            <Image src="/raul-headshot.webp" alt={t.alt} width={640} height={640} className={s.photo} sizes="340px" />
          </div>
          <figcaption>
            <span className={s.photoName}>Raul Ibañez</span>
            <span className={s.photoRole}>{t.role}</span>
            <a href="https://www.linkedin.com/in/raulibanez305" target="_blank" rel="noopener noreferrer" className={s.linkedin} aria-label={t.liAria}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3zM5.3 7.4a2.1 2.1 0 110-4.1 2.1 2.1 0 010 4.1zM7.1 20.5H3.6V9h3.5v11.5z" /></svg>
              {t.li}
            </a>
          </figcaption>
        </figure>
        <div className={s.founderText}>
          <div className={sv.tag}>{t.lead}</div>
          <h2 className={sv.h2}>{t.founderH}</h2>
          <div className={sv.prose}>
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
          <TrustRow lang={lang} />
        </div>
      </div>

      <div style={{ height: 80 }} />
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
