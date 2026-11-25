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
    ['Mapa de fondos', '/map', 'Lo que guarda cada estado', 'map'],
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

type MenuItem = [label: string, href: string, desc: string, icon: IconName]
const MENU: Record<Lang, { label: string; items: MenuItem[] }[]> = {
  es: [
    { label: 'Antes de la subasta', items: [
      ['Ayuda con ejecución', '/services/foreclosure-solutions', 'Opciones antes de la venta', 'home'],
      ['Extensión de tiempo', '/services/time-extensions', 'Más tiempo antes de la subasta', 'clock'],
      ['Asunción de hipoteca', '/services/mortgage-assumptions', 'Un comprador asume el préstamo', 'lines'],
      ['Oferta en efectivo', '/services/cash-offer', 'Venda y conserve su capital', 'cash']] },
    { label: 'Después de la subasta', items: [
      ['Fondos excedentes', '/services/foreclosure-surplus', 'Dinero que quedó tras una ejecución', 'dollar'],
      ['Excedentes por impuestos', '/services/tax-deed-surplus', 'Dinero tras una venta por impuestos', 'doc'],
      ['Recuperación para herederos', '/services/estate-recovery', 'Reclamos para familiares', 'people'],
      ['Ayuda con sucesiones', '/services/probate-assistance', 'Cuando el tribunal abre la herencia', 'court']] },
    { label: 'Recursos', items: [
      ['Cómo funciona', '/resources/how-it-works', 'Tres pasos, $0 por adelantado', 'check'],
      ['Preguntas frecuentes', '/resources/faqs', 'Respuestas a dudas comunes', 'help'],
      ['Reseñas de clientes', '/resources/results', 'Lo que dicen nuestros clientes', 'star'],
      ['Mapa de fondos', '/map', 'Lo que guarda cada estado', 'map']] },
    { label: 'Empresa', items: [
      ['Todos los servicios', '/services', 'Todo lo que hacemos', 'grid'],
      ['Todos los estados', '/states', 'Guías de los 50 estados', 'pin'],
      ['Nosotros', '/about', 'Quiénes somos', 'info'],
      ['Contacto', '/contact', 'Escríbanos o llámenos 24/7', 'mail']] },
  ],
  en: [
    { label: 'Before the auction', items: [
      ['Foreclosure Help', '/services/foreclosure-solutions', 'Options before the sale', 'home'],
      ['Time Extensions', '/services/time-extensions', 'More time before the auction', 'clock'],
      ['Mortgage Assumptions', '/services/mortgage-assumptions', 'A buyer takes over the loan', 'lines'],
      ['Cash Offer', '/services/cash-offer', 'Sell and keep your equity', 'cash']] },
    { label: 'After the auction', items: [
      ['Surplus Funds', '/services/foreclosure-surplus', 'Money left after a foreclosure sale', 'dollar'],
      ['Tax Deed Overages', '/services/tax-deed-surplus', 'Money left after a tax sale', 'doc'],
      ['Estate & Heir Recovery', '/services/estate-recovery', 'Claims for family members', 'people'],
      ['Probate Help for Heirs', '/services/probate-assistance', 'When a court must open the estate', 'court']] },
    { label: 'Resources', items: [
      ['How It Works', '/resources/how-it-works', 'Three steps, $0 upfront', 'check'],
      ['FAQs', '/resources/faqs', 'Answers to common questions', 'help'],
      ['Client Reviews', '/resources/results', 'What our clients say', 'star'],
      ['Unclaimed Funds Map', '/map', 'What every state is holding', 'map']] },
    { label: 'Company', items: [
      ['All Services', '/services', 'Everything we do', 'grid'],
      ['All States', '/states', 'Guides for all 50 states', 'pin'],
      ['About', '/about', 'Who we are', 'info'],
      ['Contact', '/contact', 'Send a note or call 24/7', 'mail']] },
  ],
}

const MM_ICONS = {
  home: <><path d="M3 11l9-8 9 8v10H3z" /><path d="M9 21v-6h6v6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  lines: <path d="M4 7h16M4 12h16M4 17h10" />,
  cash: <><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2.5" /></>,
  dollar: <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  doc: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>,
  people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 1.5-4 4-4" /></>,
  court: <path d="M4 21h16M6 21V10M18 21V10M12 21V10M3 10l9-6 9 6" />,
  check: <><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 1-1 1.7M12 17h.01" /></>,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  map: <><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z" /><path d="M9 4v14M15 6v14" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5h.01" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
}
type IconName = keyof typeof MM_ICONS
const MenuIcon = ({ name }: { name: IconName }) => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{MM_ICONS[name]}</svg>
)

const MENU_UI = {
  en: { more: 'More below', call: 'Call 24/7', review: 'Free Review' },
  es: { more: 'Ver más', call: 'Llame 24/7', review: 'Revisión gratis' },
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
  const menuScrollRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [atEnd, setAtEnd] = useState(false)
  const onMenuScroll = () => {
    const el = menuScrollRef.current
    if (!el) return
    if (el.scrollTop > 10) setScrolled(true)
    setAtEnd(el.scrollTop + el.clientHeight >= el.scrollHeight - 8)
  }
  useEffect(() => { if (open) { setScrolled(false); setAtEnd(false) } }, [open])

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
          <div ref={menuScrollRef} className={s.mmScroll} onScroll={onMenuScroll}>
            {MENU[lang].map((g) => (
              <div key={g.label} className={s.mmGroup}>
                <div className={s.mmLabel}>{g.label}</div>
                <div className={s.mmCard}>
                  {g.items.map(([l, h, d, icon]) => (
                    <Link key={l} href={L(lang, h)} prefetch={h === '/map' ? false : undefined} className={s.mmItem} onClick={() => setOpen(false)}>
                      <span className={s.mmIcon}><MenuIcon name={icon} /></span>
                      <span className={s.mmText}><span className={s.mmTitle}>{l}</span><span className={s.mmDesc}>{d}</span></span>
                      <span className={s.mmChev} aria-hidden="true">›</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={`${s.mmFade} ${atEnd ? s.mmHidden : ''}`} aria-hidden="true" />
          {!scrolled && (
            <button type="button" className={s.mmMore} onClick={() => menuScrollRef.current?.scrollBy({ top: 320, behavior: 'smooth' })}>
              {MENU_UI[lang].more}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
            </button>
          )}
          <div className={s.mmBar}>
            <a href="tel:+13055634920" className={s.mmCall}><PhoneIcon size={15} /> {MENU_UI[lang].call}</a>
            <Link href={L(lang, '/free-review')} className={s.mmReview} onClick={() => setOpen(false)}>{MENU_UI[lang].review} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      )}
    </header>
  )
}
