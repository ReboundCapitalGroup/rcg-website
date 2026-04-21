import Link from 'next/link'

const counties = [
  'Alachua', 'Baker', 'Bay', 'Bradford', 'Brevard', 'Broward', 'Calhoun', 'Charlotte', 'Citrus', 'Clay',
  'Collier', 'Columbia', 'DeSoto', 'Dixie', 'Duval', 'Escambia', 'Flagler', 'Franklin', 'Gadsden', 'Gilchrist',
  'Glades', 'Gulf', 'Hamilton', 'Hardee', 'Hendry', 'Hernando', 'Highlands', 'Hillsborough', 'Holmes', 'Indian River',
  'Jackson', 'Jefferson', 'Lafayette', 'Lake', 'Lee', 'Leon', 'Levy', 'Liberty', 'Madison', 'Manatee',
  'Marion', 'Martin', 'Miami-Dade', 'Monroe', 'Nassau', 'Okaloosa', 'Okeechobee', 'Orange', 'Osceola', 'Palm Beach',
  'Pasco', 'Pinellas', 'Polk', 'Putnam', 'Santa Rosa', 'Sarasota', 'Seminole', 'St. Johns', 'St. Lucie', 'Sumter',
  'Suwannee', 'Taylor', 'Union', 'Volusia', 'Wakulla', 'Walton', 'Washington'
]

const stats = [
  { val: '67', label: 'Counties Monitored' },
  { val: '$2B+', label: 'Unclaimed Funds in FL Treasury' },
  { val: '$0', label: 'Upfront Cost' },
  { val: '1 Year', label: 'Typical FL Surplus Claim Window' },
]

const claimTypes = [
  { title: 'Foreclosure Surplus Funds', desc: 'Florida foreclosure auctions frequently generate surplus above the mortgage balance. The clerk of court holds these funds until claimed by the former owner. RCG monitors all 67 Florida counties for foreclosure surplus.', link: '/services/foreclosure-surplus' },
  { title: 'Tax Deed Overages', desc: 'When Florida counties sell tax-delinquent properties at tax deed auctions, any proceeds above the taxes owed belong to the former owner and are held by the county clerk.', link: '/services/tax-deed-surplus' },
  { title: 'Florida Unclaimed Property', desc: 'The Florida Division of Unclaimed Property holds over $2 billion in dormant bank accounts, insurance proceeds, uncashed checks, dividends, and other assets. Florida residents are among the most likely to have funds in the system.', link: '/services/unclaimed-property' },
  { title: 'Estate and Heir Recovery', desc: 'When a Florida property owner passes before claiming funds they were owed, heirs and estate representatives can still recover through proper probate and claim filing.', link: '/services/estate-recovery' },
  { title: 'HOA Foreclosure Surplus', desc: 'Florida HOA foreclosure sales can generate surplus funds owed to the former homeowner. These cases are common in South Florida communities and require prompt action before the deadline passes.', link: '/contact' },
  { title: 'Excess Proceeds from Court Sales', desc: 'Partition sales, probate sales, and judgment lien sales ordered by Florida courts can generate excess proceeds held by the clerk until claimed by the former owner or their heirs.', link: '/services/excess-proceeds' },
]

export default function FloridaPage() {
  return (
    <main>

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Florida · All 67 Counties · No Upfront Cost</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Surplus Fund Recovery </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in Florida</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto', fontWeight: 400 }}>
            Florida courts, county clerks, and the state treasury are holding billions in funds belonging to former property owners and residents. RCG monitors all 67 Florida counties and recovers these funds on a pure contingency basis.
          </p>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: '#080d1a', borderBottom: '1px solid rgba(30,40,127,0.12)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="about-stats-bar">
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < 3 ? '1px solid rgba(74,95,212,0.1)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,2.5vw,32px)', color: '#4a7fd4', letterSpacing: '-1px', lineHeight: 1, marginBottom: '8px' }}>{s.val}</div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#3a4f7a' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FLORIDA OVERVIEW */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(48px,6vw,88px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '108px' }}>
            <span className="section-tag">// Why Florida</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 20px' }}>
              One of the Largest<br /><span style={{ color: 'var(--dim)' }}>Surplus States in the Country.</span>
            </h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            {['All 67 Counties Monitored Daily', 'Foreclosure and Tax Deed Surplus', 'State Treasury Unclaimed Property', 'HOA and Court Sale Overages', 'Estate and Heir Recovery'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>
              Florida has one of the highest volumes of foreclosure surplus and tax deed overage cases in the United States. The state's active real estate market, large population of retirees and seasonal residents, and history of mortgage defaults following market cycles have created a significant backlog of unclaimed funds sitting in county clerk offices across all 67 counties.
            </p>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>
              At the state level, the Florida Division of Unclaimed Property holds over $2 billion in dormant bank accounts, life insurance proceeds, uncashed checks, stock dividends, IRA distributions, and dozens of other asset types — all belonging to Florida residents, former residents, and their heirs.
            </p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>
                RCG is headquartered in Miami Beach and has been actively recovering funds for Florida clients since 2023. We monitor every county in the state and work exclusively with licensed Florida attorneys on every claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* CLAIM TYPES */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '56px' }}>
            <span className="section-tag" style={{ margin: 0 }}>// What We Recover in Florida</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.2),transparent)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2px' }} className="about-values-grid">
            {claimTypes.map((c, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? 'rgba(18,28,72,0.4)' : '#0a0f1a', border: `1px solid ${i % 2 === 0 ? 'rgba(74,95,212,0.2)' : 'rgba(74,95,212,0.08)'}`, padding: 'clamp(24px,3vw,36px)', position: 'relative' }}>
                {i % 2 === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />}
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(15px,2vw,19px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 12px', lineHeight: 1.2 }}>{c.title}</h3>
                <p style={{ fontSize: '13px', color: i % 2 === 0 ? '#8090b8' : '#506080', lineHeight: 1.9, margin: '0 0 16px' }}>{c.desc}</p>
                <Link href={c.link} style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a6fd4', textDecoration: 'none' }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* ALL 67 COUNTIES */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <span className="section-tag">// County Coverage</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 12px' }}>
              All 67 Florida Counties.
            </h2>
            <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.8, maxWidth: '600px' }}>
              RCG monitors foreclosure surplus funds, tax deed overages, and unclaimed property across every county in Florida. If funds exist in your name in any of the counties below, we will find them and recover them.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2px' }}>
            {counties.map((county, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.07)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '3px', height: '3px', background: '#1E287F', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', color: '#6a80b0' }}>{county} County</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2a3a60', marginTop: '24px', lineHeight: 2 }}>
            Foreclosure surplus funds · Tax deed overages · HOA foreclosure surplus · Excess proceeds · Unclaimed property · Estate and heir recovery — available across all 67 Florida counties.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* CTA */}
      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Florida · Free search</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>
            Find Out What Florida Is Holding in Your Name.
          </h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>
            We search court records and the Florida Division of Unclaimed Property at no cost. If funds exist, we file the claim and recover them on a pure contingency basis.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Free Claim Review</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
        </div>
      </section>
    </main>
  )
}
