import Link from 'next/link'
export const metadata = { title: 'Florida Foreclosure Surplus Funds Recovery | Rebound Capital Group', description: 'Florida surplus funds recovery guide. Learn FL surplus fund laws, claim deadlines (60 days), and how Rebound Capital Group recovers excess proceeds from all 67 Florida counties.' }
const counties = ['Alachua','Baker','Bay','Bradford','Brevard','Broward','Calhoun','Charlotte','Citrus','Clay','Collier','Columbia','DeSoto','Dixie','Duval','Escambia','Flagler','Franklin','Gadsden','Gilchrist','Glades','Gulf','Hamilton','Hardee','Hendry','Hernando','Highlands','Hillsborough','Holmes','Indian River','Jackson','Jefferson','Lafayette','Lake','Lee','Leon','Levy','Liberty','Madison','Manatee','Marion','Martin','Miami-Dade','Monroe','Nassau','Okaloosa','Okeechobee','Orange','Osceola','Palm Beach','Pasco','Pinellas','Polk','Putnam','Santa Rosa','Sarasota','Seminole','St. Johns','St. Lucie','Sumter','Suwannee','Taylor','Union','Volusia','Wakulla','Walton','Washington']
export default function FloridaPage() {
  return (
    <div style={{ background:'var(--bg)', minHeight:'100vh', padding:'80px 40px' }}>
      <div className="max-w-[1000px] mx-auto">
        <div className="section-tag">// florida surplus funds</div>
        <h1 className="section-title mb-3">Florida Surplus Funds<br /><span style={{ color:'var(--dim)' }}>Recovery Guide.</span></h1>
        <div className="grid gap-4 mt-8 mb-10" style={{ gridTemplateColumns:'repeat(3,1fr)' }}>
          {[['Claim Deadline','60 Days (Foreclosure)'],['Attorney Required','No — Agent Allowed'],['Fee Cap','None Statewide']].map(([a,b]) => (
            <div key={a} className="px-5 py-4" style={{ border:'1px solid var(--rcgline)', background:'var(--bg2)' }}>
              <div className="text-[9px] tracking-[1.5px] uppercase mb-1" style={{ fontFamily:'var(--mono)', color:'var(--rcg2)' }}>{a}</div>
              <div className="text-[15px] font-bold" style={{ color:'var(--bright)' }}>{b}</div>
            </div>
          ))}
        </div>
        <p className="text-[14px] leading-relaxed mb-4" style={{ color:'var(--mid)' }}>Florida law requires that surplus funds from a foreclosure sale be deposited with the court. The former homeowner has <strong style={{ color:'var(--bright)' }}>60 days from the date of the sale</strong> to file a claim. After that window, junior lienholders and other claimants may petition for those funds.</p>
        <p className="text-[14px] leading-relaxed mb-10" style={{ color:'var(--mid)' }}>Rebound Capital Group actively monitors all 67 Florida county court systems daily and operates in partnership with Florida-licensed attorneys to ensure every claim is filed correctly and on time.</p>
        <h2 className="text-[20px] font-bold mb-5" style={{ color:'var(--bright)' }}>All 67 Florida Counties</h2>
        <div className="grid gap-0.5" style={{ gridTemplateColumns:'repeat(4,1fr)', background:'var(--rcgline)' }}>
          {counties.map(c => (
            <div key={c} className="px-4 py-3 text-[12px] transition-colors hover:bg-[var(--rcgglow)] cursor-pointer" style={{ background:'var(--bg)', color:'var(--mid)' }}>{c} County</div>
          ))}
        </div>
        <div className="mt-10 px-8 py-8" style={{ border:'1px solid var(--rcgline)', background:'var(--bg2)' }}>
          <h3 className="text-[16px] font-bold mb-3" style={{ color:'var(--bright)' }}>Was your Florida property recently foreclosed or sold at tax deed auction?</h3>
          <p className="text-[13px] mb-5" style={{ color:'var(--mid)' }}>You may be entitled to surplus funds. The clock is running — get a free review today.</p>
          <Link href="/contact" className="btn-metal inline-block text-white font-bold tracking-wide uppercase px-8 py-3.5 cursor-pointer" style={{ fontFamily:'var(--sans)', fontSize:'12px' }}>Get Free Florida Claim Review</Link>
        </div>
      </div>
    </div>
  )
}
