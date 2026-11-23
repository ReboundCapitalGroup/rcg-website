import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Tax Deed Overage & Excess Proceeds Recovery | RCG',
  description: 'Recover tax deed overages and excess proceeds when a property sells at tax auction for more than the taxes owed. Rebound Capital Group files at no upfront cost.',
}

export default function TaxDeedSurplusPage() {
  return (
    <ServicePage
      slug="tax-deed-surplus"
      image="/img/aerial-small-town.webp"
      imagePos="50% 50%"
      serviceName="Tax Deed Overages"
      badge="After the auction · $0 upfront"
      h1Lead="Tax Deed"
      h1Accent="Overages."
      answer="When a property sells at a tax deed auction for more than the taxes, penalties and fees owed, the extra, called an overage or excess proceeds, belongs to the former owner. The county holds it until it is claimed, and there are deadlines. We find it and file the claim through our network of licensed attorneys. $0 upfront."
      ctaHref="/free-review?type=tax_deed"
      ctaLabel="Check my property, free"
      sections={[
        {
          tag: 'What it is',
          title: 'Excess proceeds owed to you.',
          points: ['County-held funds', 'Owed after taxes are paid', 'Time-sensitive', '$0 upfront'],
          body: (
            <>
              <p>When a county sells a property at a tax deed auction to recover unpaid property taxes, the bidding often goes well past what is owed. The back taxes, penalties and fees are paid first. Whatever remains is the overage, and by law it belongs to the former owner.</p>
              <p>These funds are held by the county and most former owners never get clear notice that money is waiting. If a claim is not filed in time, the funds can be absorbed by the county or the state.</p>
              <p>RCG monitors tax deed sale records across the country. When we find an overage tied to your name, we handle the whole claim through our network of licensed attorneys. For homes lost to a lender, see <Link href="/services/foreclosure-surplus">foreclosure surplus funds</Link>.</p>
            </>
          ),
        },
      ]}
      steps={[
        { title: 'The property sells', desc: 'After unpaid property taxes, the county sells the property at a tax deed auction.' },
        { title: 'An overage is created', desc: 'If the winning bid is more than the taxes and fees owed, the difference belongs to the former owner.' },
        { title: 'The county holds it', desc: 'The overage is held by the county until it is claimed or the deadline passes.' },
        { title: 'We file the claim', desc: 'We verify the claim and file it through our network of licensed attorneys.' },
        { title: 'You get paid', desc: 'After the county approves the claim, the funds are released to you. Our fee comes only from what we recover.' },
      ]}
      faqs={[
        { q: 'How is a tax deed overage different from foreclosure surplus?', a: 'Foreclosure surplus comes from a sale started by a lender. A tax deed overage comes from a sale started by the county over unpaid property taxes. Both leave extra money that belongs to the former owner.' },
        { q: 'How long do I have to claim a tax deed overage?', a: 'Deadlines vary by state and county, and some are short. Contact us as soon as you think an overage may exist.' },
        { q: 'What if I owed back taxes on the property?', a: 'The back taxes are paid from the sale first. The overage is what is left after all taxes and fees, and that amount belongs to you.' },
        { q: 'Can heirs claim a tax deed overage?', a: 'Yes. If the former owner has passed away, heirs or the estate may be entitled to it. We coordinate these claims, including probate when the court requires it.' },
      ]}
      related={[
        { href: '/services/foreclosure-surplus', label: 'Foreclosure Surplus Funds', desc: 'Lost the home to a lender? Check for money left over.' },
        { href: '/services/probate-assistance', label: 'Probate Help for Heirs', desc: 'When the owner passed, heirs often need probate first.' },
        { href: '/map', label: 'Unclaimed Funds Map', desc: 'See what your state may be holding in your name.' },
      ]}
      ctaTitle="Was your property sold at a tax sale?"
      ctaText="If your property sold at a tax deed auction, there may be money waiting in your name. We search for free and only get paid when we recover."
    />
  )
}
