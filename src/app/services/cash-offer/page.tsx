import Link from 'next/link'

export default function CashOfferPage() {
  return (
    <main>
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Pre-Foreclosure Solutions · As-Is Purchase</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Cash Offer </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>on Property</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto', fontWeight: 400 }}>
            If you are behind on payments and want to sell before the foreclosure completes, our buyer network can make a cash offer on your property as-is. No repairs, no listing, no waiting.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(48px,6vw,88px)', alignItems: 'start' }} className="about-story-grid">
          <div style={{ position: 'sticky', top: '108px' }}>
            <span className="section-tag">// Who This Is For</span>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 20px' }}>
              Sell Before<br /><span style={{ color: 'var(--dim)' }}>the Auction.</span>
            </h2>
            <div style={{ width: '32px', height: '2px', background: '#1E287F', marginBottom: '28px' }} />
            {['No Repairs Required', 'Fast Closing Timeline', 'Stop the Foreclosure', 'No Agent Commissions'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '4px', height: '4px', background: '#1E287F', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a4f7a' }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>When a homeowner is behind on payments and facing a foreclosure auction, selling the property before the sale date is often the best way to protect whatever equity remains and avoid the long-term credit damage of a completed foreclosure. A cash sale can close in days, not months, and eliminates the uncertainty of the auction process.</p>
            <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8090b8', lineHeight: 2, margin: 0 }}>RCG works with a network of cash buyers and investors who purchase properties as-is in pre-foreclosure. There are no repairs required, no agent commissions, and no open houses. If the numbers work, we can connect you with a buyer quickly and help you navigate the process from offer to close.</p>
            <div style={{ borderLeft: '2px solid #1E287F', paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#c8d8ff', lineHeight: 1.9, fontWeight: 500, margin: 0 }}>If the foreclosure has already occurred, you may still be entitled to surplus funds from the auction sale. We handle both pre-foreclosure options and post-foreclosure recovery.</p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <span className="section-tag" style={{ margin: 0 }}>// The Process</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.2),transparent)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { n: '01', title: 'Contact Us With Your Property Details', desc: 'Share your address, loan balance, and the foreclosure timeline. We evaluate whether a pre-sale is feasible given the equity position and remaining time.', accent: true },
              { n: '02', title: 'We Connect You With a Buyer', desc: 'If the property qualifies, we connect you with a cash buyer from our network who can make an offer quickly and close within your timeline.', accent: false },
              { n: '03', title: 'Offer and Contract', desc: 'The buyer submits a cash offer. If you accept, a purchase contract is signed and the closing process begins immediately.', accent: false },
              { n: '04', title: 'Close and Move On', desc: 'The sale closes, the mortgage is paid off from proceeds, and you receive any remaining equity. The foreclosure is stopped and the public record reflects a voluntary sale.', accent: true },
            ].map((s) => (
              <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', background: s.accent ? 'rgba(18,28,72,0.4)' : '#0a0f1a', border: `1px solid ${s.accent ? 'rgba(74,95,212,0.2)' : 'rgba(74,95,212,0.07)'}`, position: 'relative' }}>
                {s.accent && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#1E287F,transparent)' }} />}
                <div style={{ padding: 'clamp(20px,2.5vw,32px)', borderRight: `1px solid ${s.accent ? 'rgba(74,95,212,0.15)' : 'rgba(74,95,212,0.06)'}`, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 'clamp(24px,3vw,36px)' }}>
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', fontWeight: 700, color: s.accent ? '#4a7fd4' : '#2a3a60', letterSpacing: '1px' }}>{s.n}</span>
                </div>
                <div style={{ padding: 'clamp(20px,2.5vw,32px)' }}>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(16px,2vw,20px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 10px' }}>{s.title}</h3>
                  <p style={{ fontSize: '14px', color: s.accent ? '#8090b8' : '#506080', lineHeight: 1.9, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Time is critical</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>Want to Sell Before the Auction?</h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>The sooner you reach out, the more options are available. Contact us with your property details and we will evaluate whether a pre-foreclosure sale is possible.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get a Cash Offer</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
        </div>
      </section>
    </main>
  )
}
