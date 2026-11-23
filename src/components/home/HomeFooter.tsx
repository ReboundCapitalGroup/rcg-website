import Image from 'next/image'
import Link from 'next/link'
import { socials } from '@/components/Footer'
import s from './home.module.css'
import { L, type Lang } from '@/lib/i18n'

const BBB = 'https://www.bbb.org/us/fl/miami-beach/profile/financial-consultants/rebound-capital-group-0633-92041559'

const COLS: Record<Lang, { label: string; links: [string, string][] }[]> = {
  es: [
    { label: 'Antes de la subasta', links: [['Ayuda con ejecución', '/services/foreclosure-solutions'], ['Extensión de tiempo', '/services/time-extensions'], ['Oferta en efectivo', '/services/cash-offer']] },
    { label: 'Después de la subasta', links: [['Fondos excedentes', '/services/foreclosure-surplus'], ['Excedentes por impuestos', '/services/tax-deed-surplus'], ['Ayuda para herederos', '/services/probate-assistance']] },
    { label: 'Empresa', links: [['Nosotros', '/about'], ['Estados', '/states'], ['Mapa de fondos', '/map'], ['Revisión gratis', '/free-review'], ['Contacto', '/contact']] },
  ],
  en: [
  { label: 'Before the auction', links: [['Foreclosure Help', '/services/foreclosure-solutions'], ['Time Extensions', '/services/time-extensions'], ['Cash Offer', '/services/cash-offer']] },
  { label: 'After the auction', links: [['Surplus Funds', '/services/foreclosure-surplus'], ['Tax Deed Overages', '/services/tax-deed-surplus'], ['Probate Help for Heirs', '/services/probate-assistance']] },
  { label: 'Company', links: [['About', '/about'], ['States', '/states'], ['Unclaimed Funds Map', '/map'], ['Free Review', '/free-review'], ['Contact', '/contact']] },
  ],
}

const TXT = {
  en: { since: 'Miami Beach, FL · Est. 2023', bbb: 'A+ rating with the BBB', rights: ' All Rights Reserved.', privacy: 'Privacy', terms: 'Terms', on: 'on',
    disclaimer: 'Rebound Capital Group LLC is not a law firm and does not provide legal advice. Claims are filed through our network of licensed attorneys in the state where the funds are held. Contingency fee basis. Results may vary.' },
  es: { since: 'Miami Beach, FL · Desde 2023', bbb: 'Calificación A+ en el BBB', rights: ' Todos los derechos reservados.', privacy: 'Privacidad', terms: 'Términos', on: 'en',
    disclaimer: 'Rebound Capital Group LLC no es un bufete de abogados y no ofrece asesoría legal. Los reclamos se presentan a través de nuestra red de abogados con licencia en el estado donde están los fondos. Honorarios por contingencia. Los resultados pueden variar.' },
}

export default function HomeFooter({ lang = 'en' }: { lang?: Lang }) {
  const t = TXT[lang]
  return (
    <footer className={s.footer}>
      <div className={s.footerTop}>
        <div className={s.footerBrand}>
          <Image src="/rcg-logo.png" alt="Rebound Capital Group" width={150} height={90} className={s.footerLogo} />
          <span>{t.since}<br /><a href={BBB} target="_blank" rel="noopener noreferrer" className={s.footerBbb}>{t.bbb}</a></span>
          <a href="tel:+13055634920" className={s.footerPhone}>305-563-4920</a>
          <div className={s.socials}>
            {socials.map((x) => (
              <a key={x.name} href={x.url} target="_blank" rel="noopener noreferrer" aria-label={`Rebound Capital Group ${t.on} ${x.name}`}>
                <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d={x.path} /></svg>
              </a>
            ))}
          </div>
        </div>
        {COLS[lang].map((c) => (
          <div key={c.label} className={s.footerCol}>
            <span className={s.footerColLabel}>{c.label}</span>
            {c.links.map(([l, h]) => <Link key={l} href={L(lang, h)}>{l}</Link>)}
          </div>
        ))}
      </div>
      <div className={s.footerBottom}>
        <div className={s.footerBar}>
          <span className={s.mono}>© 2026 Rebound Capital Group LLC.<span className={s.hideSm}>{t.rights}</span></span>
          <a href="https://www.kr8digital.com" target="_blank" rel="noopener" className={s.kr8}>KR8</a>
          <span className={s.mono}><Link href={L(lang, '/privacy')}>{t.privacy}</Link> · <Link href={L(lang, '/terms')}>{t.terms}</Link></span>
        </div>
        <p className={s.disclaimer}>{t.disclaimer}</p>
      </div>
    </footer>
  )
}
