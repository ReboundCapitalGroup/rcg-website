import Link from 'next/link'
import Image from 'next/image'

const socials = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/Reboundcapitalgroup/',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    name: 'Facebook',
    url: 'https://m.facebook.com/61563151283466/',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/reboundcapitalgroup',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'X',
    url: 'https://x.com/reboundcapitalg',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@reboundcapitalgroup',
    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/user/ReboundCapitalGroup/',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.598a3.087 3.087 0 01.042.52c0 2.664-3.104 4.826-6.929 4.826-3.825 0-6.929-2.162-6.929-4.826 0-.175.015-.35.042-.518-.579-.264-.987-.88-.987-1.6 0-.968.786-1.754 1.754-1.754.477 0 .898.182 1.207.49 1.207-.855 2.878-1.418 4.719-1.488l.896-4.192a.32.32 0 01.377-.243l2.916.619a1.25 1.25 0 011.213-.944zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 00.029-.463.33.33 0 00-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 00-.232-.095z',
  },
]

export default function Footer() {
  return (
    <footer style={{ background:'#000000', borderTop:'1px solid rgba(74,95,212,0.2)', padding:'clamp(32px,5vw,52px) clamp(16px,4vw,40px) 28px' }}>
      <style>{`
        .footer-link:hover { color: #fff !important; }
        .footer-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; }
        .footer-cols-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .footer-bottom-row { align-items: center; }
        .footer-social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(74,95,212,0.25);
          background: rgba(30,40,127,0.08);
          color: var(--mid);
          transition: all 0.15s ease;
        }
        .footer-social-icon:hover {
          border-color: var(--rcg2);
          background: rgba(30,40,127,0.25);
          color: #fff;
          transform: translateY(-1px);
        }
        .footer-social-icon svg { width: 13px; height: 13px; fill: currentColor; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .footer-cols-row { grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .footer-bottom-row { flex-direction: column; align-items: flex-start !important; }
          .footer-social-row { justify-content: flex-start !important; }
        }
      `}</style>
      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
        <div className='footer-grid' style={{ marginBottom:'36px' }}>
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

            {/* Social icons */}
            <div className="footer-social-row" style={{ display:'flex', gap:'8px', marginTop:'16px', flexWrap:'wrap' }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Rebound Capital Group on ${s.name}`}
                  className="footer-social-icon"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-cols-row">
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
        </div>
        <div className="footer-bottom-row" style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'10px', paddingTop:'20px', borderTop:'1px solid rgba(74,95,212,0.3)' }}>
          <p style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'var(--dim)' }}>© 2026 Rebound Capital Group LLC. All Rights Reserved.</p>
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
