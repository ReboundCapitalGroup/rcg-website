import Link from 'next/link'

const counties = ['Accomack', 'Albemarle', 'Alleghany', 'Amelia', 'Amherst', 'Appomattox', 'Arlington', 'Augusta', 'Bath', 'Bedford', 'Bland', 'Botetourt', 'Brunswick', 'Buchanan', 'Buckingham', 'Campbell', 'Caroline', 'Carroll', 'Charles City', 'Charlotte', 'Chesterfield', 'Clarke', 'Craig', 'Culpeper', 'Cumberland', 'Dickenson', 'Dinwiddie', 'Essex', 'Fairfax', 'Fauquier', 'Floyd', 'Fluvanna', 'Franklin', 'Frederick', 'Giles', 'Gloucester', 'Goochland', 'Grayson', 'Greene', 'Greensville', 'Halifax', 'Hanover', 'Henrico', 'Henry', 'Highland', 'Isle of Wight', 'James City', 'King and Queen', 'King George', 'King William', 'Lancaster', 'Lee', 'Loudoun', 'Louisa', 'Lunenburg', 'Madison', 'Mathews', 'Mecklenburg', 'Middlesex', 'Montgomery', 'Nelson', 'New Kent', 'Northampton', 'Northumberland', 'Nottoway', 'Orange', 'Page', 'Patrick', 'Pittsylvania', 'Powhatan', 'Prince Edward', 'Prince George', 'Prince William', 'Pulaski', 'Rappahannock', 'Richmond County', 'Roanoke', 'Rockbridge', 'Rockingham', 'Russell', 'Scott', 'Shenandoah', 'Smyth', 'Southampton', 'Spotsylvania', 'Stafford', 'Surry', 'Sussex', 'Tazewell', 'Warren', 'Washington', 'Westmoreland', 'Wise', 'Wythe', 'York']

const independentCities = ['Alexandria', 'Bristol', 'Buena Vista', 'Charlottesville', 'Chesapeake', 'Colonial Heights', 'Covington', 'Danville', 'Emporia', 'Fairfax City', 'Falls Church', 'Franklin City', 'Fredericksburg', 'Galax', 'Hampton', 'Harrisonburg', 'Hopewell', 'Lexington', 'Lynchburg', 'Manassas', 'Manassas Park', 'Martinsville', 'Newport News', 'Norfolk', 'Norton', 'Petersburg', 'Poquoson', 'Portsmouth', 'Radford', 'Richmond City', 'Roanoke City', 'Salem', 'Staunton', 'Suffolk', 'Virginia Beach', 'Waynesboro', 'Williamsburg', 'Winchester']

export default function VirginiaPage() {
  return (
    <main>
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Virginia · Counties + Independent Cities · No Upfront Cost</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Surplus Fund Recovery </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in Virginia</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto', fontWeight: 400 }}>Courts, clerks, and state agencies in Virginia are holding funds belonging to former property owners and residents. RCG monitors all 95 Virginia counties plus 38 independent cities and recovers these funds at no upfront cost.</p>
        </div>
      </section>
      <div style={{ background: '#080d1a', borderBottom: '1px solid rgba(30,40,127,0.12)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="about-stats-bar">
          {[{ val: '133', label: 'Jurisdictions Monitored' },{ val: '$1.5B', label: 'Unclaimed Funds Held' },{ val: '$0', label: 'Upfront Cost' },{ val: '60-90d', label: 'Avg. Claim Timeline' }].map((s, i) => (
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
            <span className="section-tag">// Virginia Recovery</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 20px' }}>Recovery in Virginia.<br /><span style={{ color: 'var(--dim)' }}>Counties + Independent Cities.</span></h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            {['Foreclosure Surplus Funds','Trustee Sale Overages','Tax Sale Excess Proceeds','Virginia Unclaimed Property','Estate and Heir Recovery'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>Virginia has a unique local government structure with 95 counties and 38 independent cities that function separately from any county. Fairfax County, Prince William County, Loudoun County, and Virginia Beach generate the highest volume of Virginia foreclosure surplus cases. Virginia is primarily a non-judicial foreclosure state using a deed of trust and trustee sale process. Trustee sale surplus funds are held by the trustee or interpleaded into the Virginia circuit court until claimed by the former owner.</p>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>The Virginia Unclaimed Property Division VAMoneyFinder.com, administered by the Department of the Treasury, holds over $1.5 billion in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Virginia residents. RCG searches Virginia circuit court records, city and county trustee sale records, and state unclaimed property databases for every Virginia client.</p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>RCG works exclusively with licensed Virginia attorneys on every claim. All recoveries are handled on a pure contingency basis with no upfront cost to the client.</p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <span className="section-tag">// Counties</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 12px' }}>All 95 Virginia Counties.</h2>
            <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.8, maxWidth: '600px' }}>RCG monitors every Virginia county for foreclosure surplus funds, trustee sale overages, and unclaimed property.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2px' }}>
            {counties.map((county, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.07)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '3px', height: '3px', background: '#1E287F', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', color: '#6a80b0' }}>{county === 'Richmond County' ? 'Richmond County' : `${county} County`}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <span className="section-tag">// Independent Cities</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 12px' }}>All 38 Independent Cities.</h2>
            <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.8, maxWidth: '600px' }}>Virginia&apos;s independent cities operate separately from counties and maintain their own courts, clerks, and tax sale processes.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2px' }}>
            {independentCities.map((city, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.07)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '3px', height: '3px', background: '#1E287F', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', color: '#6a80b0' }}>{city}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2a3a60', marginTop: '24px', lineHeight: 2 }}>Foreclosure surplus funds · Trustee sale overages · Tax sale excess proceeds · Virginia unclaimed property · Estate and heir recovery — available across all 95 Virginia counties and 38 independent cities.</p>
        </div>
      </section>
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />
      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Virginia · Free search</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>Find Out What Virginia Is Holding in Your Name.</h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>We search Virginia court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Free Claim Review</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
        </div>
      </section>
    </main>
  )
}
