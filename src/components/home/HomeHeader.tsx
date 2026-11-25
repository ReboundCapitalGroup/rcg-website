'use client'
import { useState, useEffect, useRef, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import s from './home.module.css'
import { L, toEn, toEs, type Lang } from '@/lib/i18n'
import { useLang } from '@/lib/useLang'

const PhoneIcon = ({ size = 13 }: { size?: number }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const T = {
  en: {
    services: 'Services', states: 'States', map: 'Unclaimed Funds Map', resources: 'Resources', about: 'About', contact: 'Contact',
    feature: ['Free, no obligation', "Find out what you're owed.", '5.0 ★ on Google · A+ BBB', 'Start free review →'],
    home: 'Rebound Capital Group home', call: 'Call or text 24/7: 305-563-4920', open: 'Open menu', close: 'Close menu', main: 'Main',
    switchLabel: 'Español', switchAria: 'Ver esta página en español',
  },
  es: {
    services: 'Servicios', states: 'Estados', map: 'Mapa de fondos', resources: 'Recursos', about: 'Nosotros', contact: 'Contacto',
    feature: ['Gratis, sin compromiso', 'Descubra cuánto le deben.', '5.0 ★ en Google · A+ BBB', 'Revisión gratis →'],
    home: 'Inicio de Rebound Capital Group', call: 'Llame o escriba 24/7: 305-563-4920', open: 'Abrir menú', close: 'Cerrar menú', main: 'Principal',
    switchLabel: 'English', switchAria: 'View this page in English',
  },
}

const ICONS: Record<string, ReactNode> = {
  steps: <path d="M4 6h10M4 12h16M4 18h7" />,
  faq: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14" /><path d="M12 17.5h.01" /></>,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  map: <><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z" /><path d="M9 4v14M15 6v14" /></>,
}

const RESOURCES: Record<Lang, [string, string, string, string][]> = {
  en: [
    ['How It Works', '/resources/how-it-works', 'Six steps, from free search to payout', 'steps'],
    ['FAQs', '/resources/faqs', 'Straight answers, no fine print', 'faq'],
    ['Client Reviews', '/resources/results', '5.0 on Google from real clients', 'star'],
    ['Unclaimed Funds Map', '/map', 'What every state is holding', 'map'],
  ],
  es: [
    ['Cómo funciona', '/resources/how-it-works', 'Seis pasos, de la búsqueda gratis al pago', 'steps'],
    ['Preguntas frecuentes', '/resources/faqs', 'Respuestas claras, sin letra pequeña', 'faq'],
    ['Reseñas de clientes', '/resources/results', '5.0 en Google de clientes reales', 'star'],
    ['Mapa de fondos no reclamados', '/map', 'Lo que guarda cada estado', 'map'],
  ],
}

const Chevron = () => (
  <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
)

function ResourcesMenu({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false)
  const t = T[lang]
  return (
    <div className={s.dd} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" className={s.ddBtn} aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(!open)}>
        {t.resources} <span className={s.ddCaret}><Chevron /></span>
      </button>
      {open && (
        <div className={s.ddMenu} role="menu">
          <div className={s.ddList}>
            {RESOURCES[lang].map(([l, href, d, icon]) => (
              <Link key={href} href={L(lang, href)} role="menuitem" className={s.ddItem} onClick={() => setOpen(false)}>
                <span className={s.ddIcon}><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[icon]}</svg></span>
                <span className={s.ddText}><b>{l}</b><span>{d}</span></span>
              </Link>
            ))}
          </div>
          <Link href={L(lang, '/free-review')} className={s.ddFeature} onClick={() => setOpen(false)}>
            <span className={s.ddFeatureTag}>{t.feature[0]}</span>
            <span className={s.ddFeatureTitle}>{t.feature[1]}</span>
            <span className={s.ddFeatureMeta}>{t.feature[2]}</span>
            <span className={s.ddFeatureCta}>{t.feature[3]}</span>
          </Link>
        </div>
      )}
    </div>
  )
}

const MENU: Record<Lang, { label: string; items: [string, string][] }[]> = {
  es: [
    { label: 'Antes de la subasta', items: [['Ayuda con ejecución hipotecaria', '/services/foreclosure-solutions'], ['Extensión de tiempo', '/services/time-extensions'], ['Asunción de hipoteca', '/services/mortgage-assumptions'], ['Oferta en efectivo', '/services/cash-offer']] },
    { label: 'Después de la subasta', items: [['Fondos excedentes', '/services/foreclosure-surplus'], ['Excedentes por impuestos', '/services/tax-deed-surplus'], ['Recuperación para herederos', '/services/estate-recovery'], ['Ayuda con sucesiones', '/services/probate-assistance']] },
    { label: 'Recursos', items: [['Cómo funciona', '/resources/how-it-works'], ['Preguntas frecuentes', '/resources/faqs'], ['Reseñas de clientes', '/resources/results'], ['Mapa de fondos no reclamados', '/map']] },
    { label: 'Empresa', items: [['Todos los servicios', '/services'], ['Todos los estados', '/states'], ['Nosotros', '/about'], ['Contacto', '/contact'], ['Revisión gratis', '/free-review']] },
  ],
  en: [
  { label: 'Before the auction', items: [['Foreclosure Help', '/services/foreclosure-solutions'], ['Time Extensions', '/services/time-extensions'], ['Mortgage Assumptions', '/services/mortgage-assumptions'], ['Cash Offer', '/services/cash-offer']] },
  { label: 'After the auction', items: [['Surplus Funds', '/services/foreclosure-surplus'], ['Tax Deed Overages', '/services/tax-deed-surplus'], ['Estate & Heir Recovery', '/services/estate-recovery'], ['Probate Help for Heirs', '/services/probate-assistance']] },
  { label: 'Resources', items: [['How It Works', '/resources/how-it-works'], ['FAQs', '/resources/faqs'], ['Client Reviews', '/resources/results'], ['Unclaimed Funds Map', '/map']] },
  { label: 'Company', items: [['All Services', '/services'], ['All States', '/states'], ['About', '/about'], ['Contact', '/contact'], ['Free Review', '/free-review']] },
  ],
}

const Globe = () => (
  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
)

export default function HomeHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() || '/'
  const lang = useLang()
  const t = T[lang]
  const other = lang === 'es' ? toEn(pathname) : toEs(pathname)
  const headerRef = useRef<HTMLElement>(null)

  // Close the phone menu whenever the page changes.
  useEffect(() => { setOpen(false) }, [pathname])

  // While the menu is open: pin it under the header as a full-screen panel
  // that scrolls on its own (the page behind stays put), and let Escape close it.
  useEffect(() => {
    if (!open) return
    const h = headerRef.current?.getBoundingClientRect().bottom ?? 69
    document.documentElement.style.setProperty('--menu-top', `${Math.round(h)}px`)
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header ref={headerRef} className={s.header}>
      <div className={s.headerInner}>
        <Link href={L(lang, '/')} aria-label={t.home} className={s.logoLink}>
          <Image src="/rcg-logo.png" alt="Rebound Capital Group" width={150} height={90} className={s.logo} priority />
        </Link>
        <div role="navigation" aria-label={t.main} className={s.navLinks}>
          <Link href={L(lang, '/services')}>{t.services}</Link>
          <Link href={L(lang, '/states')}>{t.states}</Link>
          <Link href={L(lang, '/map')} prefetch={false} className={s.navPill}>{t.map}</Link>
          <ResourcesMenu lang={lang} />
          <Link href={L(lang, '/about')}>{t.about}</Link>
          <Link href={L(lang, '/contact')}>{t.contact}</Link>
        </div>
        <div className={s.headerRight}>
          <a href={other} hrefLang={lang === 'es' ? 'en' : 'es'} lang={lang === 'es' ? 'en' : 'es'} className={s.langSwitch} aria-label={t.switchAria}>
            <Globe /> <span className={s.langFull}>{t.switchLabel}</span><span className={s.langShort}>{lang === 'es' ? 'EN' : 'ES'}</span>
          </a>
          <a href="tel:+13055634920" className={`${s.btnPrimary} ${s.headerPhone}`} aria-label={t.call}>
            <PhoneIcon /> <span className={s.headerPhoneText}>305-563-4920</span>
          </a>
          <button type="button" className={`${s.menuBtn} ${open ? s.menuBtnOpen : ''}`} aria-label={open ? t.close : t.open} aria-expanded={open} aria-controls="home-menu" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open && (
        <div id="home-menu" className={s.mobileMenu}>
          {MENU[lang].map((g) => (
            <div key={g.label} className={s.mobileMenuGroup}>
              <div className={s.eyebrowSm}>{g.label}</div>
              {g.items.map(([l, h]) => <Link key={l} href={L(lang, h)} onClick={() => setOpen(false)}>{l}</Link>)}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
