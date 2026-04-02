import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = ['Surplus Funds','Tax Deed Overages','Excess Proceeds','Unclaimed Property','Estate Recovery']
const resourceLinks = ['How It Works','FAQs','State Laws Map','County Guides','Blog']
const companyLinks = ['About Us','Our Team','Client Results','Contact','Free Claim Check']

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--rcgline)', padding: '52px 40px 28px' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid gap-11 mb-10" style={{ gridTemplateColumns: '2.2fr 1fr 1fr 1fr' }}>
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline mb-3">
              <Image src="/rcg-logo.png" alt="RCG" width={44} height={32} style={{ height: '32px', width: 'auto' }} />
              <div>
                <div className="text-[11px] font-bold tracking-[2px] uppercase text-white" style={{ fontFamily: 'var(--sans)' }}>Rebound Capital</div>
                <div className="text-[8px] tracking-[3px]" style={{ fontFamily: 'var(--mono)', color: 'var(--rcglt)' }}>Group LLC</div>
              </div>
            </Link>
            <p className="text-[12px] leading-relaxed max-w-[240px]" style={{ color: 'var(--mid)' }}>
              Nationwide surplus funds, excess proceeds, and unclaimed property recovery. We find what&apos;s yours and fight to get it back. No upfront fees. Ever.
            </p>
            <p className="text-[9px] mt-3" style={{ fontFamily: 'var(--mono)', color: 'var(--rcg2)' }}>Miami Beach, FL — Licensed · BBB A+ Rated</p>
          </div>
          {[
            { title: 'Services', links: serviceLinks },
            { title: 'Resources', links: resourceLinks },
            { title: 'Company', links: companyLinks },
          ].map(col => (
            <div key={col.title}>
              <h5 className="text-[8px] font-bold tracking-[2px] uppercase mb-3" style={{ fontFamily: 'var(--mono)', color: 'var(--rcg2)' }}>{col.title}</h5>
              {col.links.map(l => (
                <Link key={l} href="/contact" className="block text-[12px] mb-2 transition-colors hover:text-white" style={{ color: 'var(--mid)', textDecoration: 'none' }}>{l}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between flex-wrap gap-2.5 pt-5" style={{ borderTop: '1px solid var(--rcgline)' }}>
          <p className="text-[9px]" style={{ fontFamily: 'var(--mono)', color: 'var(--dim)' }}>© 2025 Rebound Capital Group LLC. All Rights Reserved.</p>
          <p className="text-[9px]" style={{ fontFamily: 'var(--mono)', color: 'var(--dim)' }}>
            <Link href="/privacy" style={{ color: 'var(--dim)', textDecoration: 'none' }}>Privacy</Link>
            {' · '}
            <Link href="/terms" style={{ color: 'var(--dim)', textDecoration: 'none' }}>Terms</Link>
          </p>
        </div>
        <p className="text-[8px] mt-3 leading-relaxed opacity-50" style={{ fontFamily: 'var(--mono)', color: 'var(--dim)' }}>
          Rebound Capital Group LLC is not a law firm and does not provide legal advice. Surplus fund recovery services are provided on a contingency fee basis. Results may vary. Consult a licensed attorney for legal matters specific to your situation.
        </p>
      </div>
    </footer>
  )
}
