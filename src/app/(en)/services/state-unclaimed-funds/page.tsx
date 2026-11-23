import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'State-Held Unclaimed Funds Recovery | RCG',
  description: 'Recover money held by courts, counties and state agencies: foreclosure surplus, tax deed overages, court deposits and unclaimed property. Rebound Capital Group files at no upfront cost.',
}

export default function StateHeldFundsPage() {
  return (
    <ServicePage
      slug="state-unclaimed-funds"
      image="/img/aerial-miami.webp"
      imagePos="50% 60%"
      serviceName="State-Held Funds"
      badge="Courts, counties & states · $0 upfront"
      h1Lead="State-Held"
      h1Accent="Funds."
      answer="Courts, counties and state agencies hold money that belongs to private people: surplus from foreclosure and tax sales, court deposits, and unclaimed property. The government is only holding it, and there is usually a deadline to claim it. We find it and file through our network of licensed attorneys. $0 upfront."
      ctaHref="/free-review?type=unclaimed_property"
      ctaLabel="Start a free search"
      sections={[
        {
          tag: 'What it is',
          title: 'Money in government hands, waiting to be claimed.',
          points: ['Court-held surplus', 'County clerk deposits', 'State unclaimed property', 'Deadline-driven'],
          body: (
            <>
              <p>State-held funds covers any money a government office is holding for a private person. That includes money held by county clerks after a foreclosure or tax deed sale, money deposited with courts during a case, and dormant accounts turned over to the state under unclaimed property laws.</p>
              <p>What they have in common: the money belongs to someone by law, the government is only holding it, and there is usually a deadline after which the claim gets harder or is lost.</p>
              <p>RCG finds and recovers every kind of state-held funds through our network of licensed attorneys. If a court, county or state agency owes you money, we will find it and file for it.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'Types we recover',
        title: 'What we recover.',
        items: [
          { title: 'Foreclosure surplus funds', desc: 'Money left after a foreclosure sale, held by the county clerk until the former owner claims it.', href: '/services/foreclosure-surplus', linkLabel: 'Learn about foreclosure surplus' },
          { title: 'Tax deed overages', desc: 'Money left after a tax deed sale, held by the county. Former owners are entitled to it by law.', href: '/services/tax-deed-surplus', linkLabel: 'Learn about tax deed overages' },
          { title: 'Excess proceeds from court sales', desc: 'Partition, probate and judgment sales can leave excess proceeds held by the court until claimed.', href: '/free-review', linkLabel: 'Ask about excess proceeds' },
          { title: 'Unclaimed court deposits', desc: 'Money deposited with a court during a case or settlement and never collected.', href: '/free-review', linkLabel: 'Start a free search' },
          { title: 'State unclaimed property', desc: 'Bank accounts, insurance, dividends and refunds turned over to the state.', href: '/services/unclaimed-property', linkLabel: 'See unclaimed property types' },
        ],
      }}
      faqs={[
        { q: 'What are state-held funds?', a: 'Any money a court, county or state agency is holding for a private person, such as foreclosure surplus, tax deed overages, court deposits and unclaimed property.' },
        { q: 'Is there a deadline?', a: 'Usually, yes, and it depends on the type of funds and the state. The sooner you check, the better.' },
        { q: 'What does it cost?', a: 'Nothing upfront. Our fee comes only from what we recover.' },
      ]}
      related={[
        { href: '/map', label: 'Unclaimed Funds Map', desc: 'See what each state holds and how claims work there.' },
        { href: '/services/unclaimed-property', label: 'Unclaimed Property', desc: 'Accounts, checks and deposits held by the state.' },
        { href: '/services/foreclosure-surplus', label: 'Foreclosure Surplus Funds', desc: 'Money left over after a foreclosure sale.' },
      ]}
      ctaTitle="Money may be waiting in your name."
      ctaText="We search court records, county systems and state databases at no cost. If a government office is holding money for you, we find it, file for it and recover it."
    />
  )
}
