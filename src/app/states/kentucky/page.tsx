import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kentucky Surplus Funds Recovery | All Counties | RCG',
  description: 'Kentucky foreclosure surplus sits with Master Commissioners or the State Treasury. RCG files claims through licensed Kentucky attorneys at no upfront cost.',
  openGraph: {
    title: 'Kentucky Surplus Funds Recovery | All Counties | RCG',
    description: 'Kentucky foreclosure surplus sits with Master Commissioners or the State Treasury. RCG files claims through licensed Kentucky attorneys at no upfront cost.',
    url: 'https://reboundcapitalgroup.com/states/kentucky',
    type: 'website',
  },
}

const counties = ['Adair', 'Allen', 'Anderson', 'Ballard', 'Barren', 'Bath', 'Bell', 'Boone', 'Bourbon', 'Boyd', 'Boyle', 'Bracken', 'Breathitt', 'Breckinridge', 'Bullitt', 'Butler', 'Caldwell', 'Calloway', 'Campbell', 'Carlisle', 'Carroll', 'Carter', 'Casey', 'Christian', 'Clark', 'Clay', 'Clinton', 'Crittenden', 'Cumberland', 'Daviess', 'Edmonson', 'Elliott', 'Estill', 'Fayette', 'Fleming', 'Floyd', 'Franklin', 'Fulton', 'Gallatin', 'Garrard', 'Grant', 'Graves', 'Grayson', 'Green', 'Greenup', 'Hancock', 'Hardin', 'Harlan', 'Harrison', 'Hart', 'Henderson', 'Henry', 'Hickman', 'Hopkins', 'Jackson', 'Jefferson', 'Jessamine', 'Johnson', 'Kenton', 'Knott', 'Knox', 'LaRue', 'Laurel', 'Lawrence', 'Lee', 'Leslie', 'Letcher', 'Lewis', 'Lincoln', 'Livingston', 'Logan', 'Lyon', 'Madison', 'Magoffin', 'Marion', 'Marshall', 'Martin', 'Mason', 'McCracken', 'McCreary', 'McLean', 'Meade', 'Menifee', 'Mercer', 'Metcalfe', 'Monroe', 'Montgomery', 'Morgan', 'Muhlenberg', 'Nelson', 'Nicholas', 'Ohio', 'Oldham', 'Owen', 'Owsley', 'Pendleton', 'Perry', 'Pike', 'Powell', 'Pulaski', 'Robertson', 'Rockcastle', 'Rowan', 'Russell', 'Scott', 'Shelby', 'Simpson', 'Spencer', 'Taylor', 'Todd', 'Trigg', 'Trimble', 'Union', 'Warren', 'Washington', 'Wayne', 'Webster', 'Whitley', 'Wolfe', 'Woodford']

const steps = [
  { title: 'Find the sale', body: 'Kentucky is a judicial foreclosure state. A Master Commissioner appointed by the circuit court runs the sale and files a Report of Sale in the case. We pull that report, the judgment amount, and the final sale price.' },
  { title: 'Confirm an excess exists', body: 'Surplus is what remains after the judgment, interest, court costs, taxes, and any valid liens are paid. We work through the numbers first so nobody spends time on a claim that is not there.' },
  { title: 'Confirm who is entitled', body: 'The former owner is the starting point. If the owner has died, heirs or the estate may be entitled, and probate records and identity documents decide who can ask the court for the money.' },
  { title: 'File the motion', body: 'Court-held funds are generally released by court order. A licensed Kentucky attorney files a motion in the original foreclosure case asking the court to release the excess to the person entitled.' },
  { title: 'If the money moved', body: 'Funds left unclaimed can be transferred out of the commissioner account to the Kentucky State Treasury Unclaimed Property Division, which holds them as custodian for the owner. Then the claim is made to the Treasury with proof of ownership.' },
]

const faqs = [
  { q: 'Who holds the extra money after a Kentucky foreclosure sale?', a: 'The sale proceeds are paid in through the Master Commissioner in the court case. After the judgment, interest, costs, and valid liens are satisfied, whatever is left over belongs to the former owner. The Jefferson County Master Commissioner states in its own FAQ that original owners may file a claim for excess funds.' },
  { q: 'Does the surplus get sent to the former owner automatically?', a: 'In most cases no. Owners who lost a home to foreclosure have usually moved, and notices go to an old address. A motion asking the court to release the funds is typically required, which is why many owners never collect.' },
  { q: 'What if the money is no longer with the commissioner?', a: 'Unclaimed funds can end up with the Kentucky State Treasury Unclaimed Property Division, which holds property as custodian for the owner. Those claims are made to the Treasury with documents proving ownership, and it is worth a search even if a court file shows nothing.' },
  { q: 'What if the former owner has passed away?', a: 'Heirs or the estate may be able to claim. Expect to provide a death certificate, proof of relationship, and in many cases probate paperwork. Every family situation is different, so we review it before anything is filed.' },
  { q: 'Do I pay anything upfront?', a: 'No. Searching is free, and RCG works on a contingency basis through licensed Kentucky attorneys. If nothing is recovered, you owe nothing upfront and nothing out of pocket for the search.' },
  { q: 'Which Kentucky counties do you cover?', a: 'All 120. Larger counties such as Jefferson (Louisville), Fayette (Lexington), Kenton, and Boone tend to see more sales activity, but a surplus can arise in any county with a foreclosure sale, so we do not limit the search by size.' },
]

const labelStyle = { fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase' as const, color: '#7d92c4' }
const h2Style = { fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 12px' }
const bodyStyle = { fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }
const divider = <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

export default function KentuckyPage() {
  return (
    <main>
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#7d92c4' }}>Kentucky · All 120 Counties · No Upfront Cost</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Surplus Fund Recovery </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in Kentucky</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8ca0cc', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto', fontWeight: 400 }}>When a Kentucky home sells at a Master Commissioner sale for more than the debt, the excess belongs to the former owner. Most owners never hear about it. RCG finds these funds and files the claim through licensed Kentucky attorneys.</p>
        </div>
      </section>

      <div style={{ background: '#080d1a', borderBottom: '1px solid rgba(30,40,127,0.12)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="about-stats-bar">
          {[{ val: '120', label: 'Counties Monitored' }, { val: '$0', label: 'Upfront Cost' }, { val: 'Licensed', label: 'Kentucky Attorneys' }, { val: 'Free', label: 'Claim Review' }].map((s, i) => (
            <div key={i} style={{ padding: '32px 24px', borderRight: i < 3 ? '1px solid rgba(74,95,212,0.1)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,30px)', color: '#4a7fd4', letterSpacing: '-1px', lineHeight: 1, marginBottom: '8px' }}>{s.val}</div>
              <div style={labelStyle}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(48px,6vw,88px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '108px' }}>
            <span className="section-tag">// Kentucky Recovery</span>
            <h2 style={{ ...h2Style, margin: '14px 0 20px' }}>How Kentucky<br /><span style={{ color: 'var(--dim)' }}>surplus works.</span></h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            {['Foreclosure Surplus Funds', 'Master Commissioner Sale Excess', 'Delinquent Tax Sale Review', 'Kentucky Unclaimed Property', 'Estate and Heir Recovery'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                <span style={labelStyle}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={bodyStyle}>Kentucky has 120 counties, the third most of any state after Texas and Georgia. It is a judicial foreclosure state, so a lender has to take the case to circuit court, and the property is sold by a Master Commissioner appointed by that court rather than by a trustee. The buyer pays the sale proceeds in through the commissioner, and the court then applies them to the judgment, interest, costs, and valid liens.</p>
            <p style={bodyStyle}>If the sale brings in more than all of that, the difference is surplus, and it belongs to the former owner. Kentucky law addresses the disposition of surplus proceeds from judicial sales in KRS 426.500, and the Jefferson County Master Commissioner tells the public directly that original owners may file a claim for excess funds. What the law does not do is go find the owner. The lender is paid, the sale closes, and the excess can sit in a court account while the former owner, long since moved, has no idea it exists.</p>
            <p style={bodyStyle}>Funds that go unclaimed for long enough can be transferred to the Kentucky State Treasury Unclaimed Property Division, which holds them as custodian for the owner. RCG searches Kentucky circuit court records, Master Commissioner sale reports, and the Treasury database for every Kentucky client. Delinquent property tax enforcement follows its own track in Kentucky, and we review those files case by case.</p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>RCG works exclusively with licensed Kentucky attorneys on every claim. All recoveries are handled on a contingency basis with no upfront cost to the client.</p>
            </div>
          </div>
        </div>
      </section>

      {divider}

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <span className="section-tag">// The Process</span>
            <h2 style={h2Style}>How a Kentucky claim works.</h2>
            <p style={{ fontSize: '15px', color: '#8090b8', lineHeight: 1.8, maxWidth: '640px', margin: 0 }}>Every case is different, but a Kentucky foreclosure surplus claim generally follows these five steps.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.1)', padding: '28px 24px' }}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '2px', color: '#5b8ae6', marginBottom: '14px' }}>{'0' + (i + 1)}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '18px', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 12px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#8090b8', lineHeight: 1.8, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {divider}

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span className="section-tag">// Kentucky FAQ</span>
            <h2 style={h2Style}>Questions Kentucky owners ask.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.1)', padding: '26px 28px' }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '18px', color: '#fff', letterSpacing: '-0.3px', lineHeight: 1.35, margin: '0 0 12px' }}>{f.q}</h3>
                <p style={{ fontSize: '15px', color: '#8090b8', lineHeight: 1.85, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <a href="https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=18485" target="_blank" rel="noopener noreferrer" style={{ ...labelStyle, textDecoration: 'underline' }}>KRS 426.500 · Surplus proceeds of sale</a>
            <a href="https://www.jeffcomm.org/faqs.php" target="_blank" rel="noopener noreferrer" style={{ ...labelStyle, textDecoration: 'underline' }}>Jefferson County Master Commissioner FAQ</a>
            <a href="https://treasury.ky.gov/unclaimedproperty/Pages/overview.aspx" target="_blank" rel="noopener noreferrer" style={{ ...labelStyle, textDecoration: 'underline' }}>Kentucky State Treasury · Unclaimed Property</a>
          </div>
        </div>
      </section>

      {divider}

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <span className="section-tag">// County Coverage</span>
            <h2 style={h2Style}>All 120 Kentucky Counties.</h2>
            <p style={{ fontSize: '15px', color: '#8090b8', lineHeight: 1.8, maxWidth: '620px', margin: 0 }}>RCG monitors foreclosure sales and unclaimed property across every county in Kentucky. If funds exist in your name in any Kentucky county, we will look for them.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2px' }}>
            {counties.map((county, i) => (
              <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.07)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '3px', height: '3px', background: '#1E287F', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', color: '#8ca0cc' }}>{county} County</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {divider}

      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Kentucky · Free search</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>Find Out What Kentucky Is Holding in Your Name.</h2>
          <p style={{ fontSize: '15px', color: '#8090b8', lineHeight: 1.85, marginBottom: '36px' }}>We search Kentucky court records and state unclaimed property databases at no cost. If funds exist, a licensed Kentucky attorney files the claim, and you pay nothing upfront.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Free Claim Review</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
          <div style={{ marginTop: '44px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            <Link href="/services/foreclosure-surplus" style={{ ...labelStyle, textDecoration: 'underline' }}>Foreclosure Surplus Service</Link>
            <Link href="/resources/faqs" style={{ ...labelStyle, textDecoration: 'underline' }}>Surplus Funds FAQ</Link>
            <Link href="/states/ohio" style={{ ...labelStyle, textDecoration: 'underline' }}>Ohio</Link>
            <Link href="/states/tennessee" style={{ ...labelStyle, textDecoration: 'underline' }}>Tennessee</Link>
            <Link href="/states/indiana" style={{ ...labelStyle, textDecoration: 'underline' }}>Indiana</Link>
            <Link href="/states" style={{ ...labelStyle, textDecoration: 'underline' }}>All States</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
