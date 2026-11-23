import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Pre-Foreclosure Cash Offer | Rebound Capital Group',
  description: 'Get a cash offer on your property before the foreclosure auction. Rebound Capital Group connects you with buyers so you can sell as-is and keep your equity.',
}

export default function CashOfferPage() {
  return (
    <ServicePage
      slug="cash-offer"
      serviceName="Cash Offer Before the Sale"
      badge="Before the auction · Sell as-is"
      h1Lead="Cash Offer"
      h1Accent="Before the Auction."
      answer="If you are behind on payments and want to sell before the foreclosure sale, a cash buyer from our network may be able to buy your home as-is. No repairs, no listing, no agent commissions. Selling first can stop the foreclosure and let you keep whatever equity is left."
      ctaHref="/contact?type=pre_foreclosure"
      ctaLabel="Get a cash offer"
      sections={[
        {
          tag: 'Who this is for',
          title: 'Sell before the auction.',
          points: ['No repairs', 'Fast closing', 'Stops the foreclosure', 'No agent commissions'],
          body: (
            <>
              <p>When you are behind on payments and facing an auction, selling before the sale date is often the best way to protect whatever equity remains and avoid the lasting credit damage of a completed foreclosure. A cash sale can close in days instead of months.</p>
              <p>RCG works with a network of cash buyers and investors who buy homes as-is in pre-foreclosure. No repairs, no agent commissions, no open houses. If the numbers work, we connect you with a buyer quickly and help you from offer to closing.</p>
              <p>If the foreclosure already happened, you may still be owed surplus funds from the sale. See <Link href="/services/foreclosure-surplus">foreclosure surplus funds</Link>.</p>
            </>
          ),
        },
      ]}
      steps={[
        { title: 'Share the details', desc: 'Your address, loan balance and sale date. We check whether a sale before the auction is realistic.' },
        { title: 'Meet a buyer', desc: 'If it qualifies, we connect you with a cash buyer from our network who can close on your timeline.' },
        { title: 'Offer and contract', desc: 'The buyer makes a cash offer. If you accept, the contract is signed and closing begins.' },
        { title: 'Close and move on', desc: 'The mortgage is paid from the sale and you receive any remaining equity. The foreclosure stops.' },
      ]}
      faqs={[
        { q: 'Can I sell my home if it is already in foreclosure?', a: 'Often, yes, as long as the auction has not happened. The sooner you start, the more realistic a sale before the auction date is.' },
        { q: 'Do I need to make repairs?', a: 'No. Buyers in our network purchase homes as-is.' },
        { q: 'What if I owe more than the home is worth?', a: 'A cash sale may not work in that case, but other options might. Tell us your situation and we will go over what is realistic.' },
      ]}
      related={[
        { href: '/services/foreclosure-solutions', label: 'Foreclosure Help & Options', desc: 'Every option before the auction, in one place.' },
        { href: '/services/mortgage-assumptions', label: 'Mortgage Assumptions', desc: 'Let a qualified buyer take over the loan.' },
        { href: '/services/time-extensions', label: 'Time Extensions', desc: 'More time to close a sale before the auction.' },
      ]}
      ctaTitle="Want to sell before the auction?"
      ctaText="The sooner you reach out, the more options there are. Send us the property details and we will tell you whether a sale before the auction is possible."
    />
  )
}
