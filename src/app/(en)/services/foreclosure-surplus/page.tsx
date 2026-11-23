import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Foreclosure Surplus Funds Recovery | No Upfront Fee | RCG',
  description: 'Recover foreclosure surplus funds held by the court after your property sold at auction for more than you owed. Rebound Capital Group files at no upfront cost.',
}

export default function ForeclosureSurplusPage() {
  return (
    <ServicePage
      slug="foreclosure-surplus"
      image="/img/aerial-gulf-coast.webp"
      imagePos="40% 60%"
      band={{ src: "/img/aerial-suburb-lakes.webp", title: "Money left on the table, in every county.", text: "Foreclosure sales happen every week across the country. When a home sells for more than was owed, the extra is the owner\u2019s." }}
      serviceName="Foreclosure Surplus Funds"
      badge="After the auction · $0 upfront"
      h1Lead="Foreclosure"
      h1Accent="Surplus Funds."
      answer="When a foreclosed home sells at auction for more than what was owed, the extra money, called surplus funds, belongs to the former owner. It is held by the court or county until someone claims it, and there are deadlines. We find it and file the claim through our network of licensed attorneys. $0 upfront."
      ctaHref="/free-review?type=foreclosure"
      ctaLabel="Check my property, free"
      sections={[
        {
          tag: 'What it is',
          title: 'Money the court is holding for you.',
          points: ['Court-held funds', 'Yours by law', 'Deadline-driven', '$0 upfront'],
          body: (
            <>
              <p>When a lender forecloses and the property sells at auction, the sale price often exceeds the total owed on the mortgage and any other liens. That excess is called foreclosure surplus. Under the laws of most states, that money belongs to the former property owner.</p>
              <p>Most former owners never receive clear notice that surplus funds exist. The money can sit with the clerk of court for a long time, and if it goes unclaimed it can be turned over to the state. By then the claim is harder, and sometimes the window has closed.</p>
              <p>Depending on the state and the type of sale, the same money may be called surplus funds, excess proceeds, overages, or overbid funds. Whatever the name, it is the amount left after the debt and costs are paid. For homes sold for unpaid property taxes, see <Link href="/services/tax-deed-surplus">tax deed overages</Link>.</p>
              <p>RCG monitors foreclosure filings across the country. When surplus is tied to your name, we reach out, file through our network of licensed attorneys, and recover your funds at no upfront cost.</p>
            </>
          ),
        },
      ]}
      steps={[
        { title: 'The property sells', desc: 'The home sells at a foreclosure auction, often for more than the mortgage and liens.' },
        { title: 'Surplus is created', desc: 'The difference between the sale price and the total debt belongs to the former owner, not the lender.' },
        { title: 'The court holds it', desc: 'The surplus stays with the clerk of court in the county where the sale happened until it is claimed.' },
        { title: 'We file the claim', desc: 'We confirm the funds and file through our network of licensed attorneys.' },
        { title: 'You get paid', desc: 'Once the court approves the claim, funds are released to you. Our fee comes only from what we recover.' },
      ]}
      faqs={[
        { q: 'How long do I have to claim foreclosure surplus?', a: 'It depends on the state and the type of sale, and some windows are short. Unclaimed surplus can be turned over to the state. Contact us as soon as you think surplus may exist.' },
        { q: 'What if the property had multiple liens?', a: 'Liens are paid in priority order from the sale proceeds. Whatever remains after they are satisfied belongs to the former owner. The attorneys in our network review the liens on every case.' },
        { q: 'Can I claim if I went through bankruptcy?', a: 'Possibly. Bankruptcy can complicate a claim but does not automatically rule it out. Contact us and we will look at your situation.' },
        { q: 'What if someone else is also claiming the funds?', a: 'Competing claims happen. The attorneys in our network handle disputes and objections as part of the recovery, at no additional cost to you.' },
      ]}
      related={[
        { href: '/services/tax-deed-surplus', label: 'Tax Deed Overages', desc: 'Sold for unpaid property taxes? The extra may be yours too.' },
        { href: '/services/estate-recovery', label: 'Estate & Heir Recovery', desc: 'The owner passed away? Heirs can usually still claim it.' },
        { href: '/services/time-extensions', label: 'More Time Before Eviction', desc: 'Need time to move after the sale? An attorney may be able to help.' },
      ]}
      ctaTitle="Think surplus funds may exist?"
      ctaText="We search your name and any properties connected to you. If surplus funds exist, we file the claim and handle everything. You pay nothing unless we recover."
    />
  )
}
