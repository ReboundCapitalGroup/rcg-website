import Link from 'next/link'
import Image from 'next/image'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import ReviewsStrip from '@/components/ReviewsStrip'
import { TrustRow, ScrollCue } from '@/components/ui/blocks'
import { L, type Lang } from '@/lib/i18n'
import s from './services.module.css'

type Group = { tag: string; title: string; blurb: string; img: string; pos: string; services: [string, string, string][] }

const GROUPS: Record<Lang, Group[]> = {
  en: [
  {
    tag: 'Before the auction', title: 'Still in the foreclosure process?', img: '/img/front-door.webp', pos: '50% 60%',
    blurb: 'Options to keep the home or protect your equity before the sale. The sooner you reach out, the more paths are open.',
    services: [
      ['Foreclosure Help & Options', '/services/foreclosure-solutions', 'Every option before the auction in one place.'],
      ['Time Extensions', '/services/time-extensions', 'Postpone the sale, or get more time before eviction.'],
      ['Mortgage Assumptions', '/services/mortgage-assumptions', 'A qualified buyer takes over your existing loan.'],
      ['Cash Offer on Property', '/services/cash-offer', 'Sell as-is before the auction and keep your equity.'],
    ],
  },
  {
    tag: 'After the auction', title: 'The home sold. Was money left over?', img: '/img/aerial-gulf-coast.webp', pos: '40% 60%',
    blurb: 'When a property sells for more than was owed, the extra belongs to the former owner. We find it and file the claim.',
    services: [
      ['Foreclosure Surplus Funds', '/services/foreclosure-surplus', 'Money left after a foreclosure sale, held by the court.'],
      ['Tax Deed Overages', '/services/tax-deed-surplus', 'Money left after a tax deed sale, held by the county.'],
    ],
  },
  {
    tag: 'Estates, trusts & businesses', title: 'Money owed to someone who is gone.', img: '/img/desk-files.webp', pos: '50% 60%',
    blurb: 'Heirs, trustees and former business owners are often owed money they never knew existed.',
    services: [
      ['Estate & Heir Recovery', '/services/estate-recovery', 'Claim money owed to a family member who passed.'],
      ['Probate Help for Heirs', '/services/probate-assistance', 'When the court requires probate, we coordinate it.'],
      ['Trust Asset Recovery', '/services/trust-recovery', 'Money held in a trust’s name, for the beneficiaries.'],
      ['LLC & Business Assets', '/services/business-asset-recovery', 'Money held by dissolved companies.'],
    ],
  },
  {
    tag: 'Unclaimed property', title: 'Money the state is holding for you.', img: '/img/aerial-miami.webp', pos: '50% 60%',
    blurb: 'Dormant accounts, uncashed checks and deposits turned over to the state. We search every state and file the claim.',
    services: [
      ['Unclaimed Property', '/services/unclaimed-property', 'Accounts, insurance, refunds and deposits.'],
      ['State-Held Funds', '/services/state-unclaimed-funds', 'Money held by courts, counties and state agencies.'],
    ],
  },
  ],
  es: [
  {
    tag: 'Antes de la subasta', title: '¿Todavía en proceso de ejecución?', img: '/img/front-door.webp', pos: '50% 60%',
    blurb: 'Opciones para conservar la casa o proteger su capital antes de la venta. Mientras antes nos contacte, más caminos tiene.',
    services: [
      ['Ayuda y opciones ante una ejecución', '/services/foreclosure-solutions', 'Todas las opciones antes de la subasta en un solo lugar.'],
      ['Extensión de tiempo', '/services/time-extensions', 'Posponer la venta o conseguir más tiempo antes del desalojo.'],
      ['Asunción de hipoteca', '/services/mortgage-assumptions', 'Un comprador calificado asume su préstamo actual.'],
      ['Oferta en efectivo', '/services/cash-offer', 'Venda tal como está antes de la subasta y conserve su capital.'],
    ],
  },
  {
    tag: 'Después de la subasta', title: 'La casa se vendió. ¿Sobró dinero?', img: '/img/aerial-gulf-coast.webp', pos: '40% 60%',
    blurb: 'Cuando una propiedad se vende por más de lo que se debía, el sobrante le pertenece al antiguo dueño. Lo encontramos y presentamos el reclamo.',
    services: [
      ['Fondos excedentes de ejecución', '/services/foreclosure-surplus', 'Dinero que sobra de una venta por ejecución, guardado por el tribunal.'],
      ['Sobrantes de ventas por impuestos', '/services/tax-deed-surplus', 'Dinero que sobra de una venta por impuestos, guardado por el condado.'],
    ],
  },
  {
    tag: 'Herencias, fideicomisos y empresas', title: 'Dinero que se le debía a alguien que ya no está.', img: '/img/desk-files.webp', pos: '50% 60%',
    blurb: 'A herederos, fideicomisarios y antiguos dueños de negocios muchas veces se les debe dinero que no sabían que existía.',
    services: [
      ['Recuperación para herederos', '/services/estate-recovery', 'Reclame dinero que se le debía a un familiar fallecido.'],
      ['Ayuda con sucesiones', '/services/probate-assistance', 'Cuando el tribunal exige una sucesión, la coordinamos.'],
      ['Recuperación de fideicomisos', '/services/trust-recovery', 'Dinero a nombre de un fideicomiso, para sus beneficiarios.'],
      ['Activos de LLC y empresas', '/services/business-asset-recovery', 'Dinero que guardan a nombre de empresas disueltas.'],
    ],
  },
  {
    tag: 'Propiedad no reclamada', title: 'Dinero que el estado guarda para usted.', img: '/img/aerial-miami.webp', pos: '50% 60%',
    blurb: 'Cuentas inactivas, cheques sin cobrar y depósitos entregados al estado. Buscamos en todos los estados y presentamos el reclamo.',
    services: [
      ['Propiedad no reclamada', '/services/unclaimed-property', 'Cuentas, seguros, reembolsos y depósitos.'],
      ['Fondos retenidos por el estado', '/services/state-unclaimed-funds', 'Dinero en manos de tribunales, condados y agencias estatales.'],
    ],
  },
  ],
}

const COPY = {
  en: {
    home: 'Home', crumb: 'Services', crumbs: 'Breadcrumb', eyebrow: 'Every claim type · One firm · $0 upfront',
    h1a: 'Help before the auction.', h1b: 'Recovery after it.',
    intro: 'Pick where you are in the process. Every service is free to start, and on recoveries you pay nothing unless we get you paid.',
    closeH: 'Not sure which applies to you?', closeP: 'Tell us your situation and we will check every claim type connected to your name. You pay nothing unless we recover.',
    review: 'Get a free review', call: 'Call 305-563-4920',
  },
  es: {
    home: 'Inicio', crumb: 'Servicios', crumbs: 'Ruta de navegación', eyebrow: 'Todo tipo de reclamo · Una sola empresa · $0 por adelantado',
    h1a: 'Ayuda antes de la subasta.', h1b: 'Recuperación después.',
    intro: 'Elija en qué etapa se encuentra. Empezar es gratis en todos los servicios, y en las recuperaciones no paga nada a menos que usted cobre.',
    closeH: '¿No sabe cuál le aplica?', closeP: 'Cuéntenos su situación y revisamos todos los tipos de reclamo relacionados con su nombre. No paga nada a menos que recuperemos.',
    review: 'Revisión gratis', call: 'Llame al 305-563-4920',
  },
}

export default function ServicesView({ lang }: { lang: Lang }) {
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
          <TrustRow lang={lang} />
        </div>
      </div>

      <ScrollCue to="more" lang={lang} />

      <div id="more" className={h.wrap} style={{ scrollMarginTop: 100 }}>
        <div className={s.grid}>
          {GROUPS[lang].map((g) => (
            <section key={g.tag} className={s.card}>
              <div className={s.media}>
                <Image src={g.img} alt="" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover', objectPosition: g.pos }} />
                <span className={s.mediaTag}>{g.tag}</span>
              </div>
              <div className={s.body}>
                <h2 className={s.title}>{g.title}</h2>
                <p className={s.blurb}>{g.blurb}</p>
                <ul className={s.list}>
                  {g.services.map(([t, href, d]) => (
                    <li key={href}>
                      <Link href={to(href)} className={s.link}>
                        <span><b>{t}</b><span>{d}</span></span>
                        <span aria-hidden="true" className={s.arrow}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
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
