import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Estate & Heir Surplus Fund Recovery | RCG',
  description: 'Recover surplus funds owed to a deceased owner\'s estate or heirs. Rebound Capital Group coordinates probate and files through our network of licensed attorneys at no upfront cost.',
}

export default function EstateHeirRecoveryPage() {
  return (
    <ServicePage
      slug="estate-recovery"
      serviceName="Estate & Heir Recovery"
      badge="Heirs & estates · $0 upfront"
      h1Lead="Estate & Heir"
      h1Accent="Recovery."
      answer="When a property owner passes away before claiming money they were owed, the money does not disappear. Heirs and the estate can usually still recover surplus funds, tax deed overages and unclaimed property. We find the funds, identify the heirs, and handle the claim through our network of licensed attorneys. $0 upfront."
      ctaHref="/contact?type=estate"
      ctaLabel="Check for an estate, free"
      sections={[
        {
          tag: 'Who this is for',
          title: 'Funds do not die with the owner.',
          points: ['Heirs and beneficiaries', 'Estate representatives', 'Surviving spouses', 'Adult children'],
          body: (
            <>
              <p>Surplus funds from foreclosure or tax sales, unclaimed property held by the state, and other recoverable money do not go away when the original owner passes. Under the laws of most states, heirs and the estate keep the right to claim them.</p>
              <p>The process is more involved than a standard claim. It takes proper documentation of the estate, identifying the rightful heirs and, in some cases, opening probate. Without the right process, claims are often denied or delayed.</p>
              <p>RCG works with estate attorneys in our network on every heir case. We review the estate, prepare the paperwork and file the claim correctly. When the court requires probate, see <Link href="/services/probate-assistance">probate help for heirs</Link>.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'Common situations',
        title: 'Situations we handle.',
        items: [
          { title: 'The owner passed away', desc: 'Money owed to a property owner who has died can still be recovered by the heirs or the estate through the proper legal process.' },
          { title: 'No will or estate was opened', desc: 'Many families never open probate. That does not end the right to claim. We find the right path for your situation.' },
          { title: 'Several heirs are involved', desc: 'Claims with multiple heirs need each person\'s interest documented and their consent. The attorneys in our network coordinate it.' },
          { title: 'The property sold years ago', desc: 'Funds can sit unclaimed for years. Even if the sale was long ago, money may still be recoverable depending on the state and type of claim.' },
        ],
      }}
      steps={[
        { title: 'We find the funds', desc: 'We search court records and state databases for money tied to the former owner and any known properties.' },
        { title: 'We review the estate', desc: 'We look at the will, death certificate, probate records and deed history to pick the right path.' },
        { title: 'Attorneys file', desc: 'Attorneys in our network prepare and file the claim and work with the probate court if needed.' },
        { title: 'Heirs get paid', desc: 'Approved funds are distributed to the heirs. Our fee comes only from what we recover.' },
      ]}
      faqs={[
        { q: 'Can heirs claim surplus funds?', a: 'Usually, yes. When the owner has passed away, the estate or the legal heirs can claim the money, with the right paperwork.' },
        { q: 'Do we need to open probate?', a: 'Sometimes. Many courts require someone with legal authority for the estate before releasing funds. We coordinate probate when it is needed.' },
        { q: 'What does it cost?', a: 'Nothing upfront. Our fee comes only from what we recover. If we recover nothing, the family owes nothing.' },
      ]}
      related={[
        { href: '/services/probate-assistance', label: 'Probate Help for Heirs', desc: 'When the court requires probate before releasing funds.' },
        { href: '/services/foreclosure-surplus', label: 'Foreclosure Surplus Funds', desc: 'Money left over after a foreclosure sale.' },
        { href: '/services/unclaimed-property', label: 'Unclaimed Property', desc: 'Accounts, checks and deposits held by the state.' },
      ]}
      ctaTitle="Think a loved one left money behind?"
      ctaText="We search court records and state databases for money connected to the former owner. If a claim exists, we handle the whole process at no upfront cost."
    />
  )
}
