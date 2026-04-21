import Link from 'next/link'

const counties = ['Adams', 'Alexander', 'Bond', 'Boone', 'Brown', 'Bureau', 'Calhoun', 'Carroll', 'Cass', 'Champaign', 'Christian', 'Clark', 'Clay', 'Clinton', 'Coles', 'Cook', 'Crawford', 'Cumberland', 'DeKalb', 'DeWitt', 'Douglas', 'DuPage', 'Edgar', 'Edwards', 'Effingham', 'Fayette', 'Ford', 'Franklin', 'Fulton', 'Gallatin', 'Greene', 'Grundy', 'Hamilton', 'Hancock', 'Hardin', 'Henderson', 'Henry', 'Iroquois', 'Jackson', 'Jasper', 'Jefferson', 'Jersey', 'Jo Daviess', 'Johnson', 'Kane', 'Kankakee', 'Kendall', 'Knox', 'Lake', 'LaSalle', 'Lawrence', 'Lee', 'Livingston', 'Logan', 'Macon', 'Macoupin', 'Madison', 'Marion', 'Marshall', 'Mason', 'Massac', 'McDonough', 'McHenry', 'McLean', 'Menard', 'Mercer', 'Monroe', 'Montgomery', 'Morgan', 'Moultrie', 'Ogle', 'Peoria', 'Perry', 'Piatt', 'Pike', 'Pope', 'Pulaski', 'Putnam', 'Randolph', 'Richland', 'Rock Island', 'Saline', 'Sangamon', 'Schuyler', 'Scott', 'Shelby', 'St. Clair', 'Stark', 'Stephenson', 'Tazewell', 'Union', 'Vermilion', 'Wabash', 'Warren', 'Washington', 'Wayne', 'White', 'Whiteside', 'Will', 'Williamson', 'Winnebago', 'Woodford']

export default function IllinoisPage() {
  return (
    <main>
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Illinois · All 102 Counties · No Upfront Cost</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Surplus Fund Recovery </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in Illinois</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto', fontWeight: 400 }}>Courts, county clerks, and state agencies in Illinois are holding billions in funds belonging to former property owners and residents. RCG monitors all 102 Illinois counties and recovers these funds at no upfront cost.</p>
        </div>
      </section>
      <div style={{ background: '#080d1a', borderBottom: '1px solid rgba(30,40,127,0.12)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="about-stats-bar">
          {[{ val: '102', label: 'Counties Monitored' },{ val: '$3.2B', label: 'Unclaimed Funds Held' },{ val: '$0', label: 'Upfront Cost' },{ val: '60-90d', label: 'Avg. Claim Timeline' }].map((s, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < 3 ? '1px solid rgba(74,95,212,0.1)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,30px)', color: '#4a7fd4', letterSpacing: '-1px', lineHeight: 1, marginBottom: '8px' }}>{s.val}</div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#3a4f7a' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(48px,6vw,88px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '108px' }}>
            <span className="section-tag">// Illinois Recovery</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 20px' }}>Recovery in Illinois.<br /><span style={{ color: 'var(--dim)' }}>All 102 Counties.</span></h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            {['Foreclosure Surplus Funds','Sheriff Sale Overages','Tax Sale Indemnity Fund','Illinois Unclaimed Property','Estate and Heir Recovery'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>Illinois has one of the highest foreclosure volumes in the Midwest. Cook County, which includes Chicago, generates by far the largest share of surplus cases, with DuPage, Will, Lake, and Kane counties following. Illinois is a judicial foreclosure state, and sheriff sale surplus funds are deposited with the Illinois circuit court clerk until claimed by the former owner. Illinois also operates a unique Tax Sale Indemnity Fund for property owners who lost their home to tax sale without receiving proper notice.</p>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>The Illinois ICash Unclaimed Property Program, administered by the Office of the State Treasurer, holds over $3 billion in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Illinois residents. RCG searches Illinois circuit court records, county sheriff sale records, and state unclaimed property databases for every Illinois client.</p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>RCG works exclusively with licensed Illinois attorneys on every claim. All recoveries are handled on a pure contingency basis with no upfront cost to the client.</p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <span className="section-tag">// County Coverage</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 12px' }}>All 102 Illinois Counties.</h2>
            <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.8, maxWidth: '600px' }}>RCG monitors foreclosure surplus funds, sheriff sale overages, and unclaimed property across every county in Illinois. If funds exist in your name in any Illinois county, we will find them and recover them.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2px' }}>
            {counties.map((county, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.07)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '3px', height: '3px', background: '#1E287F', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', color: '#6a80b0' }}>{county} County</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2a3a60', marginTop: '24px', lineHeight: 2 }}>Foreclosure surplus funds · Sheriff sale overages · Tax sale indemnity fund · Illinois unclaimed property · Estate and heir recovery — available across all 102 Illinois counties.</p>
        </div>
      </section>
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />
      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Illinois · Free search</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>Find Out What Illinois Is Holding in Your Name.</h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>We search Illinois court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Free Claim Review</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
        </div>
      </section>
    </main>
  )
}
