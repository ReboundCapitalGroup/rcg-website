import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Unclaimed Property Recovery Nationwide | RCG',
  description: 'Recover unclaimed property across all 50 states: dormant accounts, uncashed checks, insurance proceeds and more. Rebound Capital Group files at no upfront cost.',
}

export default function UnclaimedPropertyPage() {
  return (
    <ServicePage
      slug="unclaimed-property"
      image="/img/sunset-waterway.webp"
      imagePos="45% 50%"
      serviceName="Unclaimed Property"
      badge="All 50 states · $0 upfront"
      h1Lead="Unclaimed"
      h1Accent="Property."
      answer="When a bank, insurer or company cannot reach the owner of an account, check or deposit, the money is turned over to the state as unclaimed property. Every state holds it until the owner or heirs claim it. We search state records nationwide and handle the claim for you. $0 upfront."
      ctaHref="/contact?type=unclaimed_property"
      ctaLabel="Check for unclaimed funds, free"
      stats={[
        { val: '$70B+', label: 'Held by US states' },
        { val: '1 in 10', label: 'Americans have unclaimed funds' },
        { val: 'All 50', label: 'States searchable' },
      ]}
      sections={[
        {
          tag: 'What it is',
          title: 'Your name may already be on a list.',
          points: ['Bank accounts', 'Insurance', 'Uncashed checks', 'Refunds and deposits'],
          body: (
            <>
              <p>Dormant bank accounts, insurance proceeds, uncashed paychecks, utility deposits, dividends and refunds all end up with the state when the owner cannot be reached. The state holds the money, often for many years, until someone files a proper claim.</p>
              <p>We search unclaimed property records across all 50 states using your name, past addresses and any connected businesses. When we find a match, we confirm it, prepare the paperwork and follow the claim through to payment.</p>
              <p>Want to see what your state is holding first? Start with the <Link href="/map">Unclaimed Funds Map</Link>.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'What we search for',
        title: 'Every type of unclaimed money.',
        items: [
          { tag: 'Insurance', title: 'Insurance', desc: 'Policy benefits, death benefits, matured annuities and premium refunds.' },
          { tag: 'Banking', title: 'Bank accounts', desc: 'Checking and savings accounts, matured CDs, cashier\'s checks and vendor checks.' },
          { tag: 'Securities', title: 'Investments', desc: 'Unclaimed dividends, shares of stock and demutualization payments.' },
          { tag: 'Retirement', title: 'Retirement accounts', desc: 'Traditional and Roth IRAs, pensions and profit sharing.' },
          { tag: 'Other', title: 'Refunds and credits', desc: 'Credit balances, refunds, utility deposits and miscellaneous checks.' },
          { tag: 'Court and tax', title: 'Court and tax funds', desc: 'Surplus from foreclosure and tax sales that ended up with the state.' },
        ],
      }}
      steps={[
        { title: 'We search', desc: 'We search state unclaimed property records nationwide under your name and past addresses. Florida alone holds over $2 billion in unclaimed funds.' },
        { title: 'We confirm', desc: 'We verify the match, the amount, and which state is holding the money.' },
        { title: 'We file', desc: 'We prepare and submit the claim with the documents the state requires.' },
        { title: 'You get paid', desc: 'Once the state approves the claim, the money is released to you. Most claims resolve within 60 to 120 days, depending on the state and claim type.' },
      ]}
      faqs={[
        { q: 'What is unclaimed property?', a: 'Money a business could not return to its owner, such as an old bank account, an uncashed check or a deposit. After a period of inactivity it is turned over to the state, which holds it until it is claimed.' },
        { q: 'Can heirs claim unclaimed property?', a: 'Yes. If the owner has passed away, heirs or the estate can usually claim it with the right documents.' },
        { q: 'How long does a claim take?', a: 'Most claims resolve within 60 to 120 days, depending on the state and the type of claim. Claims for heirs or businesses can take longer.' },
      ]}
      related={[
        { href: '/map', label: 'Unclaimed Funds Map', desc: 'See what each state holds and how claims work there.' },
        { href: '/services/state-unclaimed-funds', label: 'State-Held Funds', desc: 'Money held by courts, counties and state agencies.' },
        { href: '/services/estate-recovery', label: 'Estate & Heir Recovery', desc: 'Claim money a loved one left behind.' },
      ]}
      ctaTitle="Your name may already be in the system."
      ctaText="We search state records across all 50 states at no cost. If money is waiting in your name, we file the claim and recover it on a contingency basis."
    />
  )
}
