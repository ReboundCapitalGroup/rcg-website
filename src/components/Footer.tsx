import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background:'var(--bg2)', borderTop:'1px solid rgba(74,95,212,0.3)', padding:'52px 40px 28px' }}>
      <style>{`.footer-link:hover { color: #fff !important; }`}</style>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2.2fr 1fr 1fr 1fr', gap:'44px', marginBottom:'36px' }}>
          <div>
            <Link href="/" style={{ display:'flex', alignItems:'center', gap:'10px', textDecoration:'none', marginBottom:'12px' }}>
              <Image src="/rcg-logo.png" alt="RCG" width={44} height={36} style={{ height:'36px', width:'auto' }} />
              <div>
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'11px', letterSpacing:'2px', textTransform:'uppercase', color:'#fff' }}>Rebound Capital</div>
                <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'8px', letterSpacing:'3px', color:'#8fa3f0' }}>Group LLC</div>
              </div>
            </Link>
            <p style={{ fontSize:'12px', color:'var(--mid)', lineHeight:1.7, maxWidth:'240px' }}>Nationwide surplus funds, excess proceeds, and unclaimed property recovery. No upfront fees. Ever.</p>
            <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'var(--rcg2)', marginTop:'10px' }}>Miami Beach, FL — Licensed · BBB A+ Rated</p>
          </div>
          {[
            { title:'Services', links:[['Surplus Funds','/services/surplus-funds'],['Tax Deed Overages','/services/tax-deed-surplus'],['Excess Proceeds','/services/excess-proceeds'],['Unclaimed Property','/services/unclaimed-property'],['Estate Recovery','/services/estate-recovery']] },
            { title:'Resources', links:[['How It Works','/resources/how-it-works'],['FAQs','/resources/faqs'],['State Laws Map','/resources/state-laws'],['County Guides','/resources/blog'],['Blog','/resources/blog']] },
            { title:'Company', links:[['About Us','/about'],['Client Results','/resources/results'],['Contact','/contact'],['Free Claim Check','/contact'],['All States','/states']] },
          ].map(col => (
            <div key={col.title}>
              <h5 style={{ fontFamily:"'Space Mono',monospace", fontSize:'8px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'var(--rcg2)', marginBottom:'14px' }}>{col.title}</h5>
              {col.links.map(([label, href]) => (
                <Link key={label} href={href} className="footer-link" style={{ display:'block', fontSize:'12px', color:'var(--mid)', marginBottom:'8px', textDecoration:'none', transition:'color 0.12s' }}>{label}</Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'10px', paddingTop:'20px', borderTop:'1px solid rgba(74,95,212,0.3)' }}>
          <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'var(--dim)' }}>© 2025 Rebound Capital Group LLC. All Rights Reserved.</p>
          <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'var(--dim)' }}>
            <Link href="/privacy" style={{ color:'var(--dim)', textDecoration:'none' }}>Privacy</Link> · <Link href="/terms" style={{ color:'var(--dim)', textDecoration:'none' }}>Terms</Link>
          </p>
        </div>
        <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'8px', color:'var(--dim)', opacity:0.55, lineHeight:1.6, marginTop:'12px' }}>
          Rebound Capital Group LLC is not a law firm and does not provide legal advice. Surplus fund recovery services are provided on a contingency fee basis. Results may vary.
        </p>
      </div>
    </footer>
  )
}
