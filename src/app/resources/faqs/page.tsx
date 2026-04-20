import Link from 'next/link'

const categories = [
  {
    label: 'Getting Started',
    items: [
      { q: 'Do I need to contact you first, or do you reach out to me?', a: 'Both. We actively monitor court and agency records and contact people when we identify funds connected to their name. We also welcome people who come to us directly to check whether anything is owed to them. Either way, the process starts the same.' },
      { q: 'Is there any cost to get started?', a: 'None. The initial search and claim review are completely free. We only get paid if we successfully recover funds on your behalf.' },
      { q: 'What information do I need to provide?', a: 'Typically your full legal name, any prior addresses connected to a property, and basic identification. We will walk you through exactly what is needed once we confirm a claim exists.' },
      { q: 'What if I am not sure whether I have a claim?', a: 'That is exactly what the free review is for. Contact us and we will search your name and any connected properties. If something exists, we will find it.' },
    ],
  },
  {
    label: 'The Recovery Process',
    items: [
      { q: 'How long does the process take?', a: 'Most claims resolve in 30 to 90 days. Cases involving probate, competing liens, dissolved entities, or deceased claimants can take longer depending on the complexity and the jurisdiction.' },
      { q: 'Do I need to hire my own attorney?', a: 'No. Licensed attorneys are part of our process on every claim. You do not need to retain separate counsel or appear in court.' },
      { q: 'What happens after I sign the agreement?', a: 'We take it from there. Our team files the claim, manages all correspondence with the court or agency, responds to any objections, and tracks every deadline. We keep you updated at each major stage.' },
      { q: 'What if there are other parties claiming the same funds?', a: 'Competing claims are common in foreclosure and estate matters. Our attorneys are experienced in these situations and handle any objections or disputes as part of the recovery process.' },
      { q: 'What if I already tried to claim my funds and was unsuccessful?', a: 'Prior failed attempts do not disqualify a claim in most cases. Contact us anyway. We may be able to identify what went wrong and pursue recovery through the correct process.' },
    ],
  },
  {
    label: 'Fees and Payment',
    items: [
      { q: 'How do you get paid?', a: 'Strictly contingency. We take a percentage of what we recover. If we do not recover anything, you pay nothing. There are no upfront fees, retainers, or out-of-pocket costs at any point.' },
      { q: 'What percentage do you take?', a: 'Our fee varies depending on the claim type, state, and complexity of the case. We disclose the exact percentage clearly in the agreement before you sign anything.' },
      { q: 'How do I receive my funds?', a: 'Once the court or agency releases the funds, your share is disbursed directly to you. The timing depends on the jurisdiction and claim type.' },
    ],
  },
  {
    label: 'Deadlines and Eligibility',
    items: [
      { q: 'Is there a deadline to claim my funds?', a: 'Yes. Deadlines vary by state and claim type. Some windows close in as few as 60 days from the date of the sale or judgment. If you have been notified of surplus funds or believe you may have a claim, contact us as soon as possible.' },
      { q: 'What if the original property owner has passed away?', a: 'Heirs and estate representatives are often entitled to surplus funds. We work with estate attorneys and can help identify and coordinate the documentation needed to recover on behalf of an estate.' },
      { q: 'Can I claim funds from a property I no longer own?', a: 'Yes. Surplus funds from a foreclosure or tax sale belong to the former owner at the time of the sale, regardless of what happened to the property afterward.' },
      { q: 'What states do you operate in?', a: 'We are currently active in Florida, Arizona, Colorado, Ohio, and Michigan. We are actively expanding and can still assist with certain claim types in other states. Contact us to discuss your specific situation.' },
    ],
  },
  {
    label: 'Claim Types',
    items: [
      { q: 'What types of claims do you handle?', a: 'Foreclosure surplus funds, tax deed overages, excess proceeds, state-held unclaimed property, estate and heir recovery, and business or LLC asset recovery.' },
      { q: 'What is foreclosure surplus?', a: 'When a property sells at foreclosure for more than the amount owed on the mortgage or judgment, the excess belongs to the former owner. Courts hold these funds until they are claimed or escheated to the state.' },
      { q: 'What is a tax deed overage?', a: 'When a property is sold at a tax deed sale for more than the outstanding taxes owed, the surplus belongs to the former owner. Like foreclosure surplus, these funds are held by the county until claimed.' },
      { q: 'What is unclaimed property?', a: 'Dormant bank accounts, uncashed checks, insurance payouts, utility deposits, and other financial assets that have been turned over to state treasury agencies after a period of inactivity. All 50 states hold billions in unclaimed funds.' },
    ],
  },
]

export default function FAQsPage() {
  return (
    <main>

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.03) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a6090' }}>Questions and Answers</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Frequently Asked </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#6a80b0', lineHeight: 1.8, maxWidth: '460px', margin: '0 auto', fontWeight: 400 }}>
            Straight answers about how the recovery process works, what it costs, and what to expect.
          </p>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a6fd4', flexShrink: 0 }}>{cat.label}</span>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.2),transparent)' }} />
              </div>

              {/* Questions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {cat.items.map((f, i) => (
                  <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.08)', padding: '24px 28px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: '100%', background: 'rgba(30,40,127,0.4)' }} />
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '15px', color: '#c8d8ff', marginBottom: '10px', paddingLeft: '4px' }}>{f.q}</div>
                    <div style={{ fontSize: '14px', color: '#506080', lineHeight: 1.9, paddingLeft: '4px' }}>{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '960px', margin: '0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.18),transparent)' }} />

      {/* CTA */}
      <section style={{ background: '#000', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>// Still have questions</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', letterSpacing: '-1px', lineHeight: 1.08, margin: '16px 0 16px' }}>
            Talk to Us Directly.
          </h2>
          <p style={{ fontSize: '15px', color: '#506080', lineHeight: 1.85, marginBottom: '36px' }}>
            If your question is not answered here, reach out. We are happy to explain the process, check for a claim, or simply answer what you need to know.
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
