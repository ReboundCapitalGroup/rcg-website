import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Mortgage Assumption Solutions | RCG',
  description: 'Explore a mortgage assumption to transfer your loan and avoid foreclosure. Rebound Capital Group connects you with qualified buyers and supports the lender approval.',
}

export default function MortgageAssumptionsPage() {
  return (
    <ServicePage
      slug="mortgage-assumptions"
      image="/img/aerial-suburb-lakes.webp"
      imagePos="45% 50%"
      serviceName="Mortgage Assumptions"
      badge="Before the auction · Buyer network"
      h1Lead="Mortgage"
      h1Accent="Assumptions."
      answer="A mortgage assumption lets a qualified buyer take over your existing home loan, with lender approval, so the home never goes to a foreclosure auction. Many FHA, VA and USDA loans can be assumed; most conventional loans cannot. We review your loan and connect you with buyers from our network."
      ctaHref="/free-review?type=pre_foreclosure"
      ctaLabel="See if my loan qualifies"
      sections={[
        {
          tag: 'What it is',
          title: 'An alternative to foreclosure.',
          points: ['Avoids the auction', 'Protects your credit', 'Qualified buyers', 'No cost to you'],
          body: (
            <>
              <p>In a mortgage assumption, a qualified buyer steps into your place on the existing loan and keeps making payments under the original terms. For a homeowner facing foreclosure, that can be an alternative to losing the home at auction and taking the full credit hit of a completed foreclosure.</p>
              <p>Not every loan can be assumed. FHA, VA and USDA loans generally can be, with lender approval, while most conventional loans cannot. We look at your loan type and connect you with buyers from our network who handle assumptions.</p>
              <p>If the foreclosure sale already happened, you may still be owed surplus funds. See <Link href="/services/foreclosure-surplus">foreclosure surplus funds</Link>.</p>
            </>
          ),
        },
      ]}
      steps={[
        { title: 'We review your loan', desc: 'Loan type, balance and terms, to see whether an assumption is possible.' },
        { title: 'We find a buyer', desc: 'If it is, we connect you with a qualified buyer from our network.' },
        { title: 'The lender approves', desc: 'The buyer applies with your lender. We help coordinate the paperwork.' },
        { title: 'The loan transfers', desc: 'Once approved, the loan and title move to the buyer and the auction is avoided.' },
      ]}
      faqs={[
        { q: 'Is my mortgage assumable?', a: 'FHA, VA and USDA loans generally are, with lender approval. Most conventional loans are not. Send us your loan details and we will check.' },
        { q: 'Does the lender have to approve it?', a: 'Yes. The buyer has to qualify with your lender before the loan can be transferred.' },
        { q: 'What if my loan cannot be assumed?', a: 'Other options may still work, such as a cash sale before the auction or asking for more time. See foreclosure help and options.' },
      ]}
      related={[
        { href: '/services/foreclosure-solutions', label: 'Foreclosure Help & Options', desc: 'Every option before the auction, in one place.' },
        { href: '/services/cash-offer', label: 'Cash Offer Before the Sale', desc: 'Sell as-is before the auction.' },
        { href: '/services/time-extensions', label: 'Time Extensions', desc: 'More time while the assumption is approved.' },
      ]}
      ctaTitle="Facing foreclosure?"
      ctaText="Reach out before the sale date. We will look at your loan, explain your options and connect you with the right help, whether that is an assumption, a cash offer or something else."
    />
  )
}
