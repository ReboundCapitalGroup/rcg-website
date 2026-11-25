import Link from 'next/link'
import MoneyExample from '@/components/home/MoneyExample'
import ReviewsStrip from '@/components/ReviewsStrip'
import s from '@/components/home/home.module.css'
import { L, type Lang } from '@/lib/i18n'

const BBB = 'https://www.bbb.org/us/fl/miami-beach/profile/financial-consultants/rebound-capital-group-0633-92041559'

const COPY = {
  en: {
    eyebrow: <>Nationwide · $0 Upfront · <span className={s.hideSm}>Call or text </span>24/7</>,
    h1: (
      <>
        <span className={s.line}>Turning Forgotten<span className={s.hideSm}> Funds</span></span>
        <span className={`${s.line} ${s.showSm}`}>Funds Into</span>
        <span className={s.line}><span className={s.hideSm}>Into </span><em className={s.gradText}>Future Opportunities.</em></span>
      </>
    ),
    sub: <>Facing foreclosure, or <span className={s.hideSm}>already </span>lost your home at auction? <span className={s.hideSm}>If money was left behind, it belongs to you.</span><span className={s.showSmInline}>Money left behind belongs to you.</span></>,
    cta: <>Check if you&apos;re owed money</>, facing: 'Facing foreclosure?',
    trust: ['Free check · No obligation · ', 'A+ rating with the BBB'],
    notHome: [<b key="b">Not about a home?</b>, ' The state may be holding money in your name.'], checkNow: 'Check now ',
    stepsH: <>Three steps.<br className={s.brSm} /> You never pay <span className={s.hideSm}>a dollar </span>upfront.</>,
    proofSmall: <>recovered for clients,<br className={s.hideSm} /> and counting.</>,
    proofH: <>Money people didn&apos;t<br className={s.brSm} /> know they had.</>,
    proofP: 'Foreclosure surplus, tax deed overages, estates and unclaimed funds.',
    svcH: <>Full recovery.<br className={s.brSm} /> Every claim type.</>,
    svcP: 'Every dollar we recover is on a pure contingency basis. Nothing out of pocket, ever.',
    whyEyebrow: 'Why Rebound Capital Group', whyH: <>We outwork<br />every competitor.</>,
    closeH: 'Talk to a person, any time.',
    closeP: <>Call or text 24/7. A real person answers, in English or Spanish. The check is free and there&apos;s no obligation.</>,
    call: 'Call 305-563-4920',
  },
  es: {
    eyebrow: <>En todo el país · $0 por adelantado · <span className={s.hideSm}>Llame o escriba </span>24/7</>,
    h1: (
      <>
        <span className={s.line}>Convertimos fondos</span>
        <span className={s.line}>olvidados en</span>
        <span className={s.line}><em className={s.gradText}>nuevas oportunidades.</em></span>
      </>
    ),
    sub: <>¿Enfrenta una ejecución <span className={s.hideSm}>hipotecaria </span>o <span className={s.hideSm}>ya </span>perdió su casa en <span className={s.hideSm}>una </span>subasta? <span className={s.hideSm}>Si quedó dinero, le pertenece a usted.</span><span className={s.showSmInline}>El dinero sobrante es suyo.</span></>,
    cta: <>Vea si le deben dinero</>, facing: '¿Enfrenta una ejecución?',
    trust: ['Revisión gratis · Sin compromiso · ', 'A+ en el BBB'],
    notHome: [<b key="b">¿No se trata de una casa?</b>, ' Puede que el estado guarde dinero a su nombre.'], checkNow: 'Revisar ',
    stepsH: <>Tres pasos.<br className={s.brSm} /> Nunca paga nada por adelantado.</>,
    proofSmall: <>recuperados para clientes,<br className={s.hideSm} /> y sumando.</>,
    proofH: <>Dinero que la gente<br className={s.brSm} /> no sabía que tenía.</>,
    proofP: 'Sobrantes de ejecuciones, ventas por impuestos, herencias y fondos no reclamados.',
    svcH: <>Recuperación completa.<br className={s.brSm} /> Todo tipo de reclamo.</>,
    svcP: 'Cada dólar que recuperamos es por contingencia. Nunca paga nada de su bolsillo.',
    whyEyebrow: 'Por qué Rebound Capital Group', whyH: <>Trabajamos más<br />que nadie.</>,
    closeH: 'Hable con una persona, a cualquier hora.',
    closeP: 'Llame o escriba 24/7. Le atiende una persona real, en español o en inglés. La revisión es gratis y sin compromiso.',
    call: 'Llame al 305-563-4920',
  },
}

const STEPS = {
  es: [
    { title: 'Revisión gratis', desc: 'Díganos la propiedad o la persona. Buscamos en registros judiciales y del condado sin costo.' },
    { title: 'Nosotros manejamos el reclamo', desc: 'Los reclamos se presentan a través de nuestra red de abogados con licencia en el estado donde están los fondos.' },
    { title: 'Usted recibe su dinero', desc: 'Los fondos se le entregan a usted. Nuestros honorarios salen solo de lo que recuperamos. $0 por adelantado.' },
  ],
  en: [
  { title: 'Free check', desc: 'Tell us the property or the person. We search court and county records at no cost.' },
  { title: 'We handle the claim', desc: 'Claims are filed through our network of licensed attorneys in the state where the funds are held.' },
  { title: 'You get paid', desc: 'Funds are released to you. Our fee comes only from what we recover. $0 upfront, ever.' },
  ],
}

const SERVICES: Record<Lang, [string, string, string, string][]> = {
  es: [
    ['Antes de la subasta', 'Ayuda y opciones ante una ejecución', '¿Todavía en el proceso? Proteja su capital, considere asumir la hipoteca o una oferta en efectivo antes de la venta.', '/services/foreclosure-solutions'],
    ['Después de la subasta', 'Fondos excedentes de ejecución', 'Cuando una casa se vende por más de lo que se debía, el sobrante le pertenece al antiguo dueño. Lo encontramos y lo reclamamos.', '/services/foreclosure-surplus'],
    ['Herederos y herencias', 'Recuperación para herederos', 'A muchos herederos se les debe dinero que no sabían que existía. Identificamos a los herederos y manejamos el reclamo.', '/services/estate-recovery'],
    ['Antes de la subasta', 'Extensión de tiempo', 'Más tiempo antes de la venta, o antes de tener que mudarse.', '/services/time-extensions'],
    ['Después de la subasta', 'Sobrantes de ventas por impuestos', 'Las ventas por impuestos dejan sobrantes de los que muchos dueños nunca se enteran. Presentamos el reclamo a tiempo.', '/services/tax-deed-surplus'],
    ['Herederos y herencias', 'Ayuda con sucesiones', 'Cuando el tribunal exige un proceso de sucesión, lo coordinamos junto con el reclamo.', '/services/probate-assistance'],
    ['Antes de la subasta', 'Oferta en efectivo', 'Venda antes de la subasta y quédese con su capital.', '/services/cash-offer'],
    ['En todo el país', 'Fondos no reclamados', 'Cuentas inactivas, cheques sin cobrar y depósitos que guarda el estado. Buscamos y recuperamos en todo el país.', '/services/unclaimed-property'],
    ['Empresas y fideicomisos', 'Activos de LLC, fideicomisos y empresas', 'Fondos a nombre de empresas disueltas, corporaciones cerradas y fideicomisos inactivos.', '/services/business-asset-recovery'],
  ],
  en: [
  ['Before the auction', 'Foreclosure Help & Options', 'Still in the process? Preserve equity, explore a mortgage assumption, or a cash offer before the sale.', '/services/foreclosure-solutions'],
  ['After the auction', 'Foreclosure Surplus Funds', 'When a home sells for more than the debt, the extra belongs to the former owner. We find it and file.', '/services/foreclosure-surplus'],
  ['Heirs & estates', 'Estate & Heir Recovery', 'Heirs are often owed money they never knew existed. We identify heirs and manage the claim.', '/services/estate-recovery'],
  ['Before the auction', 'Time Extensions', 'More time before the sale, or before you have to move out.', '/services/time-extensions'],
  ['After the auction', 'Tax Deed Overages', 'Tax sales leave excess proceeds most owners never hear about. We file before the deadline.', '/services/tax-deed-surplus'],
  ['Heirs & estates', 'Probate Help for Heirs', 'When the court requires probate, we coordinate it with the claim.', '/services/probate-assistance'],
  ['Before the auction', 'Cash Offer on Property', 'Sell before the auction and walk away with your equity.', '/services/cash-offer'],
  ['Nationwide', 'Unclaimed Funds', 'Dormant accounts, uncashed checks and deposits held by the state. We search and recover nationwide.', '/services/unclaimed-property'],
  ['Businesses & trusts', 'LLC, Trust & Business Assets', 'Funds held under dissolved companies, closed corporations and inactive trusts.', '/services/business-asset-recovery'],
  ],
}

const WHY = {
  es: [
    { n: '01', title: 'Cero por adelantado. Siempre.', desc: '100% por contingencia. Solo cobramos cuando usted cobra. Sin anticipos, sin riesgo, sin trucos.' },
    { n: '02', title: 'Atentos a cada plazo', desc: 'Los plazos para reclamar pueden ser cortos. Vigilamos cada fecha del caso desde la primera llamada hasta el pago.' },
    { n: '03', title: 'En todo el país. Todo tipo de reclamo.', desc: 'Ejecuciones, ventas por impuestos, fondos no reclamados, herencias. Una sola empresa, con reclamos presentados a través de nuestra red de abogados con licencia en el estado donde están los fondos.' },
  ],
  en: [
  { n: '01', title: 'Zero upfront. Ever.', desc: '100% contingency. We only get paid when you get paid. No retainers, no risk, no catch.' },
  { n: '02', title: 'Deadline-driven', desc: 'Claim windows can be short. We track every case deadline from the first call to the payout.' },
  { n: '03', title: 'Nationwide. Every claim type.', desc: 'Foreclosure, tax deed, unclaimed funds, estates. One firm, with claims filed through our network of licensed attorneys in the state where the funds are held.' },
  ],
}

const HouseIcon = () => (
  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V10l7-5 7 5v11" /><path d="M9 21v-6h6v6" /></svg>
)

export default function HomeView({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  const to = (href: string) => L(lang, href)
  return (
    <div className={s.page}>
      {/* HERO */}
      <section className={s.hero}>
        <picture>
          <source media="(max-width: 900px)" srcSet="/home/hero-poster-sm.webp" />
          <img className={s.heroVideo} src="/home/hero-poster-lg.webp" alt="" aria-hidden="true" fetchPriority="high" decoding="async" />
        </picture>
        <video className={s.heroVideo} autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/home/hero-720.mp4" type="video/mp4" media="(max-width: 900px)" />
          <source src="/home/hero-1080.mp4" type="video/mp4" />
        </video>
        <div className={s.heroFade} aria-hidden="true" />
        <div className={s.heroInner}>
          <div className={s.heroContent}>
            <div className={s.eyebrow}>{t.eyebrow}</div>
            <h1 className={s.h1}>{t.h1}</h1>
            <p className={s.heroSub}>{t.sub}</p>
            <div className={s.btnRow}>
              <Link href={to('/free-review')} className={`${s.btnPrimary} ${s.btnLg}`}>{t.cta} <span aria-hidden="true">→</span></Link>
              <Link href={to('/services/foreclosure-solutions')} className={`${s.btnOutline} ${s.btnLg}`}>{t.facing}</Link>
            </div>
            <div className={s.trust}>{t.trust[0]}<a href={BBB} target="_blank" rel="noopener noreferrer">{t.trust[1]}</a></div>
          </div>
        </div>
      </section>

      {/* NOT ABOUT A HOME */}
      <div className={s.unclaimedWrap}>
        <Link href={to('/map')} prefetch={false} className={s.unclaimed}>
          <span className={s.unclaimedIcon}><HouseIcon /></span>
          <span className={s.unclaimedText}>{t.notHome}</span>
          <span className={s.unclaimedCta}><span className={s.hideSm}>{t.checkNow}</span>→</span>
        </Link>
      </div>

      {/* MONEY BAND */}
      <section className={s.money}>
        <div className={s.wrap}>
          <MoneyExample />
        </div>
      </section>

      {/* STEPS */}
      <section className={s.block}>
        <div className={s.wrap}>
          <h2 className={`${s.h2} ${s.mb48}`}>{t.stepsH}</h2>
          <ol className={s.steps}>
            {STEPS[lang].map((x) => (
              <li key={x.title} className={s.step}>
                <span className={s.stepDot} aria-hidden="true"><span /></span>
                <div className={s.stepTitle}>{x.title}</div>
                <div className={s.stepDesc}>{x.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* $2M BAND */}
      <section className={s.proof}>
        <div className={`${s.wrap} ${s.proofGrid}`}>
          <div className={s.proofLeft}>
            <span className={s.proofBig}>$2M+</span>
            <span className={s.proofSmall}>{t.proofSmall}</span>
          </div>
          <div className={s.proofRight}>
            <h2 className={s.proofH}>{t.proofH}</h2>
            <p>{t.proofP}</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={s.block}>
        <div className={s.wrap}>
          <div className={s.blockHead}>
            <h2 className={s.h2}>{t.svcH}</h2>
            <p>{t.svcP}</p>
          </div>
          <div className={s.svcGrid}>
            {SERVICES[lang].map(([tag, title, desc, href], i) => (
              <Link key={title} href={to(href)} className={i % 2 === 0 ? `${s.svc} ${s.svcDark}` : s.svc}>
                <span className={s.svcTag}>{tag}</span>
                <span className={s.svcTitle}><span>{title}</span><span className={s.svcArrow} aria-hidden="true">→</span></span>
                <span className={s.svcDesc}>{desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className={s.blockWhy}>
        <div className={s.wrap}>
          <div className={s.why}>
            <div>
              <div className={s.eyebrowLight}>{t.whyEyebrow}</div>
              <h2 className={s.whyH}>{t.whyH}</h2>
            </div>
            <div>
              {WHY[lang].map((y) => (
                <div key={y.n} className={s.whyRow}>
                  <span className={s.whyN}>{y.n}</span>
                  <span className={s.whyBody}><span className={s.whyTitle}>{y.title}</span><span className={s.whyDesc}>{y.desc}</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReviewsStrip lang={lang} />

      {/* CLOSING CTA */}
      <section className={s.closing}>
        <div className={s.closingFade} aria-hidden="true" />
        <div className={`${s.wrap} ${s.closingInner}`}>
          <h2 className={s.closingH}>{t.closeH}</h2>
          <p>{t.closeP}</p>
          <div className={s.btnRow}>
            <Link href={to('/free-review')} className={`${s.btnPrimary} ${s.btnLg}`}>{t.cta} <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${s.btnOutline} ${s.btnLg}`}>{t.call}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
