import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Surplus Funds Recovery FAQs | Rebound Capital Group',
  description: 'Answers about surplus funds recovery: deadlines, eligibility, fees, and how the claim process works. Rebound Capital Group is paid only if funds are recovered.',
  openGraph: {
    title: 'Surplus Funds Recovery FAQs | Rebound Capital Group',
    description: 'Answers about surplus funds recovery: deadlines, eligibility, fees, and how the claim process works. Rebound Capital Group is paid only if funds are recovered.',
    url: 'https://reboundcapitalgroup.com/resources/faqs',
    type: 'website',
  },
}

const categories = [
  {
    label: 'Getting Started',
    items: [
      { q: 'Do I need to contact you first, or do you reach out to me?', a: 'Both. We monitor court and agency records and contact people when we identify funds connected to their name. We also welcome people who come to us directly to check whether anything is owed to them. Either way, the process starts the same.' },
      { q: 'Is there any cost to get started?', a: 'None. The initial search and claim review are free. We only get paid if we successfully recover funds on your behalf.' },
      { q: 'What information do I need to provide?', a: 'Typically your full legal name, any prior addresses connected to a property, and basic identification. We walk you through exactly what is needed once we confirm a claim exists.' },
      { q: 'What if I am not sure whether I have a claim?', a: 'That is what the free review is for. Contact us and we will search your name and any connected properties, then tell you what we find, including when the answer is that nothing is there.' },
    ],
  },
  {
    label: 'The Recovery Process',
    items: [
      { q: 'How long does the process take?', a: 'It varies widely by court, agency, and state. A straightforward, uncontested claim can move in a matter of weeks to a few months. Cases involving probate, competing liens, dissolved entities, or deceased claimants take longer, and some courts simply move slowly.' },
      { q: 'Do I need to hire my own attorney?', a: 'No. Licensed attorneys are part of our process on every claim. You do not need to retain separate counsel or appear in court.' },
      { q: 'What happens after I sign the agreement?', a: 'We take it from there. Our team files the claim, manages correspondence with the court or agency, responds to any objections, and tracks every deadline. We keep you updated at each major stage.' },
      { q: 'What if there are other parties claiming the same funds?', a: 'Competing claims are common in foreclosure and estate matters. Our attorneys handle objections and disputes as part of the recovery process, and we tell you early if a claim looks contested.' },
      { q: 'What if I already tried to claim my funds and was unsuccessful?', a: 'A prior failed attempt does not disqualify a claim in most cases. Contact us anyway. We may be able to identify what went wrong and pursue recovery through the correct process.' },
    ],
  },
  {
    label: 'Fees and Payment',
    items: [
      { q: 'How do you get paid?', a: 'Strictly on contingency. We take a percentage of what we recover. If we do not recover anything, you pay nothing. There are no upfront fees, retainers, or out-of-pocket costs at any point.' },
      { q: 'What percentage do you take?', a: 'Our fee depends on the claim type, the state, and the complexity of the case. We disclose the exact percentage clearly in the agreement before you sign anything.' },
      { q: 'How do I receive my funds?', a: 'It depends on the case and the jurisdiction. In some matters the court or agency pays out to each party at the same time, and in others the recovered funds come to us first and we then pay your share. We explain how payment will work in your case before you sign.' },
      { q: 'Are recovered funds taxable?', a: 'It depends on the type of funds and your own situation. Some recoveries are returns of your own money and others are not treated that way, so ask a tax professional about your specific case. We are not able to give tax advice.' },
    ],
  },
  {
    label: 'Deadlines and Eligibility',
    items: [
      { q: 'Is there a deadline to claim my funds?', a: 'Yes, in many cases. Deadlines vary by state and claim type, and some are measured in months while others run for years. Some states hold unclaimed property indefinitely, while court-held surplus can be moved or lost to the owner if nobody claims it. If you have been notified of surplus funds or think you may have a claim, contact us as soon as possible.' },
      { q: 'What if the original property owner has passed away?', a: 'Heirs and estate representatives are often entitled to surplus funds. We work with estate attorneys and help identify and coordinate the documentation needed to recover on behalf of an estate, which commonly includes a death certificate, proof of relationship, and probate paperwork.' },
      { q: 'Can I claim funds from a property I no longer own?', a: 'Yes. Surplus funds from a foreclosure or tax sale belong to the former owner at the time of the sale, regardless of what happened to the property afterward.' },
      { q: 'What states do you operate in?', a: 'We are currently most active in Florida, Arizona, Colorado, Ohio, and Michigan. We are expanding and can assist with certain claim types in other states. Contact us to discuss your specific situation.' },
    ],
  },
  {
    label: 'Claim Types',
    items: [
      { q: 'What types of claims do you handle?', a: 'Foreclosure surplus funds, tax deed overages, excess proceeds, state-held unclaimed property, estate and heir recovery, and business or LLC asset recovery.' },
      { q: 'What is foreclosure surplus?', a: 'When a property sells at a foreclosure sale for more than the amount owed on the mortgage or judgment, plus costs and valid liens, the excess belongs to the former owner. Courts or court officers hold these funds until they are claimed, and in some places unclaimed amounts are eventually turned over to the state.' },
      { q: 'What is a tax deed overage?', a: 'When a property is sold at a tax deed sale for more than the taxes and costs owed, the surplus belongs to the former owner. Depending on the state, the funds are held by the county, the court, or another agency until claimed.' },
      { q: 'What is unclaimed property?', a: 'Dormant bank accounts, uncashed checks, insurance payouts, utility deposits, and other financial assets that have been turned over to state treasury agencies after a period of inactivity. States collectively hold billions of dollars in unclaimed property.' },
    ],
  },
  {
    label: 'Making an Informed Choice',
    items: [
      { q: 'Can I claim my surplus funds myself?', a: 'In many cases, yes. Owners are allowed to pursue their own funds. The catch is that the process differs by court and state, often involves a formal motion or application, and has deadlines that are easy to miss. We handle the paperwork, the attorneys, the court, and the deadlines so you do not have to. Whether to do it yourself or hire help is your decision, and you should compare terms either way.' },
      { q: 'How can I tell if an offer to recover my funds is legitimate?', a: 'Ask who they are, whether licensed attorneys are involved, and what exactly they will charge, in writing. Be cautious about anyone who asks for money upfront, pressures you to sign quickly, or wants bank details before there is an agreement. You can also confirm that funds actually exist by contacting the county clerk or court in the case, or by searching the state treasury unclaimed property site.' },
      { q: 'Why do I keep getting calls and letters about surplus funds?', a: 'Surplus and overage cases are public court and county records, so many companies monitor them and contact former owners. Not all of them work the same way or charge the same fees. Read any agreement carefully before signing, and feel free to ask us any question about how we compare.' },
    ],
  },
]

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: categories.flatMap((c) =>
    c.items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    }))
  ),
}

const linkStyle = { fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase' as const, color: '#7d92c4', textDecoration: 'underline' }

export default function FAQsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
      />

      {/* HERO */}
      <section style={{ background: '#000', borderBottom: '1px solid rgba(30,40,127,0.15)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,60px) clamp(64px,8vw,96px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(30,40,127,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.06) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none' }} />
        <div className="scan-animate" style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(74,95,212,0.5),transparent)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '32px', padding: '7px 18px', border: '1px solid rgba(74,95,212,0.2)', background: 'rgba(30,40,127,0.1)' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4a7fd4', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#7d92c4' }}>Questions and Answers</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,5.5vw,72px)', letterSpacing: '-2.5px', lineHeight: 1.0, margin: '0 0 32px', color: '#fff' }}>
            <span style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 55%, #a8b8d8 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Frequently Asked </span><span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: '#8ca0cc', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto', fontWeight: 400 }}>
            Straight answers about how surplus funds recovery works, what it costs, and what to expect.
          </p>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(72px,8vw,112px) clamp(20px,5vw,60px)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {categories.map((cat) => (
            <div key={cat.label} id={slugify(cat.label)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <h2 style={{ fontFamily: "'Space Mono',monospace", fontWeight: 400, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#5b8ae6', flexShrink: 0, margin: 0 }}>{cat.label}</h2>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(74,95,212,0.2),transparent)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {cat.items.map((f, i) => (
                  <div key={i} style={{ background: '#0a0f1a', border: '1px solid rgba(74,95,212,0.08)', padding: '24px 28px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: '100%', background: 'rgba(30,40,127,0.4)' }} />
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '16px', color: '#c8d8ff', lineHeight: 1.4, margin: '0 0 10px', paddingLeft: '4px' }}>{f.q}</h3>
                    <p style={{ fontSize: '14px', color: '#8090b8', lineHeight: 1.9, margin: 0, paddingLeft: '4px' }}>{f.a}</p>
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
          <p style={{ fontSize: '15px', color: '#8090b8', lineHeight: 1.85, marginBottom: '36px' }}>
            If your question is not answered here, reach out. We are happy to explain the process, check for a claim, or simply answer what you need to know.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Free Claim Review</Link>
            <a href="tel:+13055634920" className="btn-secondary">305-563-4920</a>
          </div>
          <div style={{ marginTop: '44px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            <Link href="/services/foreclosure-surplus" style={linkStyle}>Foreclosure Surplus Service</Link>
            <Link href="/states/florida" style={linkStyle}>Florida</Link>
            <Link href="/states/ohio" style={linkStyle}>Ohio</Link>
            <Link href="/states/arizona" style={linkStyle}>Arizona</Link>
            <Link href="/states/colorado" style={linkStyle}>Colorado</Link>
            <Link href="/states/michigan" style={linkStyle}>Michigan</Link>
            <Link href="/states/kentucky" style={linkStyle}>Kentucky</Link>
            <Link href="/states" style={linkStyle}>All States</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
