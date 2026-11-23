import Image from 'next/image'
import Link from 'next/link'
import { socials } from '@/components/Footer'
import s from './home.module.css'

const BBB = 'https://www.bbb.org/us/fl/miami-beach/profile/financial-consultants/rebound-capital-group-0633-92041559'

const cols: { label: string; links: [string, string][] }[] = [
  { label: 'Before the auction', links: [['Foreclosure Help', '/services/foreclosure-solutions'], ['Time Extensions', '/services/time-extensions'], ['Cash Offer', '/services/cash-offer']] },
  { label: 'After the auction', links: [['Surplus Funds', '/services/foreclosure-surplus'], ['Tax Deed Overages', '/services/tax-deed-surplus'], ['Probate Help for Heirs', '/services/probate-assistance']] },
  { label: 'Company', links: [['About', '/about'], ['States', '/states'], ['Unclaimed Funds Map', '/map'], ['Free Review', '/free-review'], ['Contact', '/contact']] },
]

export default function HomeFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.footerTop}>
        <div className={s.footerBrand}>
          <Image src="/rcg-logo.png" alt="Rebound Capital Group" width={150} height={90} className={s.footerLogo} />
          <span>Miami Beach, FL · Est. 2023<br /><a href={BBB} target="_blank" rel="noopener noreferrer" className={s.footerBbb}>A+ rating with the BBB</a></span>
          <a href="tel:+13055634920" className={s.footerPhone}>305-563-4920</a>
          <div className={s.socials}>
            {socials.map((x) => (
              <a key={x.name} href={x.url} target="_blank" rel="noopener noreferrer" aria-label={`Rebound Capital Group on ${x.name}`}>
                <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d={x.path} /></svg>
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.label} className={s.footerCol}>
            <span className={s.footerColLabel}>{c.label}</span>
            {c.links.map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}
          </div>
        ))}
      </div>
      <div className={s.footerBottom}>
        <div className={s.footerBar}>
          <span className={s.mono}>© 2026 Rebound Capital Group LLC.<span className={s.hideSm}> All Rights Reserved.</span></span>
          <a href="https://www.kr8digital.com" target="_blank" rel="noopener" className={s.kr8}>KR8</a>
          <span className={s.mono}><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></span>
        </div>
        <p className={s.disclaimer}>Rebound Capital Group LLC is not a law firm and does not provide legal advice. Claims are filed through our network of licensed attorneys in the state where the funds are held. Contingency fee basis. Results may vary.</p>
      </div>
    </footer>
  )
}
