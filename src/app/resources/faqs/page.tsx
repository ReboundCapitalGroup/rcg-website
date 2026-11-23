import Link from 'next/link'
import type { Metadata } from 'next'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'

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
      { q: 'Do I need to hire my own attorney?', a: 'No. Attorneys in our network are part of the process on every claim. You do not need to retain separate counsel or appear in court.' },
      { q: 'What happens after I sign the agreement?', a: 'We take it from there. Our team files the claim, manages correspondence with the court or agency, responds to any objections, and tracks every deadline. We keep you updated at each major stage.' },
      { q: 'What if there are other parties claiming the same funds?', a: 'Competing claims are common in foreclosure and estate matters. Attorneys in our network handle objections and disputes as part of the recovery process, and we tell you early if a claim looks contested.' },
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
      { q: 'What states do you operate in?', a: 'Rebound Capital Group serves homeowners nationwide. Claims are filed through our network of licensed attorneys in the state where the funds are held. Contact us anytime, 24/7, to discuss your situation.' },
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

const related: [string, string][] = [
  ['Foreclosure Surplus Funds', '/services/foreclosure-surplus'], ['Florida', '/states/florida'], ['Ohio', '/states/ohio'],
  ['Arizona', '/states/arizona'], ['Colorado', '/states/colorado'], ['Michigan', '/states/michigan'], ['Kentucky', '/states/kentucky'], ['All States', '/states'],
]

export default function FAQsPage() {
  return (
    <div className={h.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={sv.crumbs}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>FAQs</span>
        </div>
        <div className={sv.heroText}>
          <div className={h.eyebrow}>Questions and answers</div>
          <h1 className={sv.h1}>Frequently asked <em className={h.gradText}>questions.</em></h1>
          <p className={sv.answer}>Straight answers about foreclosure help and surplus funds recovery: how it works, what it costs, and what to expect.</p>
          <div className={sv.points} style={{ marginTop: 4 }}>
            {categories.map((c) => <a key={c.label} href={`#${slugify(c.label)}`} style={{ fontSize: 13, fontWeight: 700, color: '#1E287F', background: '#e9eefb', border: '1px solid rgba(30,40,127,0.18)', borderRadius: 999, padding: '7px 12px' }}>{c.label}</a>)}
          </div>
        </div>
      </div>

      {categories.map((cat) => (
        <div key={cat.label} id={slugify(cat.label)} className={`${h.wrap} ${sv.block}`} style={{ scrollMarginTop: 100 }}>
          <div className={sv.faqGrid}>
            <div>
              <div className={sv.tag}>FAQs</div>
              <h2 className={sv.h2}>{cat.label}</h2>
            </div>
            <div className={sv.faqs}>
              {cat.items.map((f) => (
                <details key={f.q} className={sv.faq}>
                  <summary>{f.q}<span aria-hidden="true" className={sv.faqSign} /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className={`${h.wrap} ${sv.block}`}>
        <div className={sv.tag}>Related</div>
        <div className={sv.points}>
          {related.map(([l, href]) => <Link key={href} href={href} style={{ fontSize: 13, fontWeight: 700, color: '#1E287F', background: '#fff', border: '1px solid rgba(30,40,127,0.18)', borderRadius: 999, padding: '7px 12px' }}>{l}</Link>)}
        </div>
      </div>

      <div style={{ height: 72 }} />
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>Still have questions?</h2>
          <p>If your question is not answered here, reach out. We are happy to explain the process, check for a claim, or simply answer what you need to know.</p>
          <div className={h.btnRow}>
            <Link href="/contact" className={`${h.btnPrimary} ${h.btnLg}`}>Get a free review <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
