import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePage from '@/components/ServicePage'

// COUNSEL: copy to be reviewed by counsel before relying on it in ads or mailers.

export const metadata: Metadata = {
  title: 'Foreclosure Time Extensions: Postpone a Sale or Get More Time Before Eviction | RCG',
  description:
    'Need more time? Before a foreclosure sale, an attorney may be able to postpone it. After the sale, you may still get more time before eviction. Free review, nationwide. Call or text 24/7.',
}

const p = { margin: 0 }

export default function TimeExtensionsPage() {
  return (
    <ServicePage
      slug="time-extensions"
      serviceName="Foreclosure Time Extensions"
      badge="Before the sale · After the sale · Nationwide"
      h1Lead="More Time,"
      h1Accent="Before or After the Sale."
      answer="If your home is headed to a foreclosure sale, an attorney may be able to postpone it while you work on a loan modification, a sale, a mortgage takeover and more. If the sale already happened, you may still be able to get more time before you have to move out. The first review is free."
      ctaHref="/contact?type=pre_foreclosure"
      ctaLabel="Get a Free Review"
      sections={[
        {
          tag: 'Before the sale',
          title: 'Postponing a Foreclosure Sale',
          points: ['Loan modification in review', 'Bankruptcy filing', 'Sale or cash offer in progress', 'Mortgage takeover'],
          body: (
            <>
              <p style={p}>
                A scheduled auction date is not always final. When there is a real reason to believe the home can be saved or sold for a better result, an attorney can ask the lender, the trustee or the court to move the sale date. Postponements are common, but they are never automatic, and the rules are different in every state.
              </p>
              <p style={p}>
                Sales are often postponed while a loan modification or repayment plan is being reviewed, while a buyer or cash offer needs time to close, while a qualified buyer takes over the existing mortgage, and more. A bankruptcy filing also generally pauses a sale while the case is open.
              </p>
              <p style={p}>
                Rebound Capital Group reviews your situation and connects you with our network of licensed attorneys in your state, who decide whether to postpone the sale and handle it. The earlier you reach out before the sale date, the more options are usually available.
              </p>
            </>
          ),
        },
        {
          tag: 'Your options',
          title: 'What More Time Can Make Possible',
          body: (
            <>
              <p style={p}>
                More time is only useful if it leads somewhere. For most homeowners it means one of four things: finishing a loan modification, selling the home before the auction so the equity stays with you, letting a buyer assume the mortgage, or organizing a bankruptcy plan with an attorney.
              </p>
              <p style={p}>
                Each path has its own page with details: <Link href="/services/cash-offer" style={{ color: '#8fb0ff' }}>cash offer before the sale</Link>, <Link href="/services/mortgage-assumptions" style={{ color: '#8fb0ff' }}>mortgage assumptions</Link>, and the full overview on <Link href="/services/foreclosure-solutions" style={{ color: '#8fb0ff' }}>foreclosure help and options</Link>.
              </p>
            </>
          ),
        },
        {
          id: 'after-the-sale',
          tag: 'After the sale',
          title: 'More Time Before Eviction',
          points: ['Notice to vacate', 'Writ of possession', 'Move-out agreement', 'Surplus funds check'],
          body: (
            <>
              <p style={p}>
                After a foreclosure sale, the new owner can start the process to have you leave the property. Depending on the state, that can move quickly once a writ of possession is issued. Many families simply need a realistic amount of time to find a new place and move with dignity.
              </p>
              <p style={p}>
                Our network of licensed attorneys can respond to the eviction process and negotiate with the new owner or their attorney for a move-out date that works. In some cases the new owner will agree to more time, or to a payment to move out on an agreed date, because it is faster and cheaper than a contested eviction.
              </p>
              <p style={p}>
                While we review the timeline, we also check whether the sale left surplus funds. If the home sold for more than was owed, that money may belong to you, and there are deadlines to claim it. See <Link href="/services/foreclosure-surplus" style={{ color: '#8fb0ff' }}>foreclosure surplus funds</Link>.
              </p>
            </>
          ),
        },
      ]}
      steps={[
        { title: 'Tell us the dates', desc: 'Your sale date or the date of any notice you received, the county, and the lender or new owner if you know it.' },
        { title: 'Free review', desc: 'We look at where your case stands and which options are still open. Call or text 24/7.' },
        { title: 'Attorney review', desc: 'A licensed attorney from our network in your state decides what can be requested and files it.' },
        { title: 'Plan the next step', desc: 'Use the extra time to modify, sell, assume, or move on your terms, and claim any surplus.' },
      ]}
      faqs={[
        { q: 'Can a foreclosure sale be postponed?', a: 'Often, yes, but it is never guaranteed. Lenders, trustees and courts can move a sale date when there is a good reason, such as a loan modification under review, a pending sale, and more. The rules depend on your state and on how far along the case is.' },
        { q: 'How close to the sale date can I still ask for more time?', a: 'Sooner is always better. Some sales can be postponed days before the auction, but many options close as the date gets near. If you have a sale date, call or text us right away, 24/7.' },
        { q: 'Does filing bankruptcy stop a foreclosure sale?', a: 'A bankruptcy filing generally pauses a foreclosure sale while the case is open, but it has serious long-term effects and is not right for everyone. Talk to a licensed bankruptcy attorney before filing.' },
        { q: 'The sale already happened. Can I still get more time to move?', a: 'In many cases, yes. An attorney can respond to the eviction process and negotiate a move-out date with the new owner. The sooner you act after receiving a notice, the more room there is to negotiate.' },
        { q: 'What does this cost?', a: 'The first review is free and there is no obligation. If an attorney from our network takes on your matter, they will explain any fees before any work begins.' },
        { q: 'Is Rebound Capital Group a law firm?', a: 'No. Rebound Capital Group is not a law firm and does not give legal advice. Legal work, including postponing a sale and responding to an eviction, is handled by our network of licensed attorneys in your state.' },
      ]}
      related={[
        { href: '/services/foreclosure-solutions', label: 'Foreclosure Help & Options', desc: 'Every option before the auction, in one place.' },
        { href: '/services/cash-offer', label: 'Cash Offer Before the Sale', desc: 'Sell before the auction and keep your equity.' },
        { href: '/services/foreclosure-surplus', label: 'Already Sold? Claim the Surplus', desc: 'If the home sold for more than was owed, the extra may be yours.' },
      ]}
      ctaTitle="Have a Sale Date or a Notice to Vacate?"
      ctaText="Every day matters. Tell us where things stand and we will tell you, for free, what options may still be open in your state."
    />
  )
}
