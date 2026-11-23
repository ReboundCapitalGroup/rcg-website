import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Trust Account Asset Recovery | RCG',
  description: 'Recover surplus funds and unclaimed assets held in a trust name. Rebound Capital Group helps trustees file through our network of licensed attorneys at no upfront cost.',
}

export default function TrustRecoveryPage() {
  return (
    <ServicePage
      slug="trust-recovery"
      image="/img/home-miami-beach.webp"
      imagePos="60% 60%"
      serviceName="Trust Asset Recovery"
      badge="Trusts & beneficiaries · $0 upfront"
      h1Lead="Trust Asset"
      h1Accent="Recovery."
      answer="Money held in a trust's name, including surplus from a property sale, dormant accounts and insurance proceeds, can go unclaimed when trustees do not know it exists or how to file. Trustees can usually recover it for the beneficiaries. We find it and file through our network of licensed attorneys. $0 upfront."
      ctaLabel="Check a trust, free"
      sections={[
        {
          tag: 'Who this is for',
          title: 'Trust assets can be recovered.',
          points: ['Trustees and co-trustees', 'Beneficiaries', 'Successor trustees', 'Revocable and irrevocable trusts'],
          body: (
            <>
              <p>When a property held in a trust sells at a foreclosure or tax deed auction, any surplus belongs to the trust. When a trust has dormant bank accounts, uncashed insurance proceeds or other assets turned over to the state, the trustee can recover them for the beneficiaries.</p>
              <p>Trust claims need proper documents showing how the trust is set up, the trustee&apos;s authority to act, and the beneficiaries&apos; interest. Without them, claims are often denied or tied up in court.</p>
              <p>RCG works with attorneys in our network who handle trust matters to prepare the right documents and file for trustees and beneficiaries. For money held by a closed company, see <Link href="/services/business-asset-recovery">business asset recovery</Link>.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'Common situations',
        title: 'Situations we handle.',
        items: [
          { title: 'Surplus held in a trust name', desc: 'A property deeded into a trust and later foreclosed may have left surplus held in the trust\'s name. The trustee can claim it.' },
          { title: 'Unclaimed property in a trust name', desc: 'Dormant accounts and policies held by a trust are turned over to the state when inactive. Trustees can reclaim them.' },
          { title: 'Successor trustees', desc: 'When the original trustee passes or resigns, we help the successor find and recover assets that were missed.' },
          { title: 'Dissolved trusts', desc: 'Trusts that have ended may have left assets with the state or a court. These can often still be recovered.' },
        ],
      }}
      faqs={[
        { q: 'Who can claim money held in a trust\'s name?', a: 'Usually the current trustee, acting for the beneficiaries. If the trustee has passed or resigned, a successor trustee can step in.' },
        { q: 'What does it cost?', a: 'Nothing upfront. Our fee comes only from what we recover.' },
      ]}
      related={[
        { href: '/services/business-asset-recovery', label: 'Business Asset Recovery', desc: 'Money held by a closed LLC or corporation.' },
        { href: '/services/estate-recovery', label: 'Estate & Heir Recovery', desc: 'Money a loved one left behind.' },
        { href: '/services/unclaimed-property', label: 'Unclaimed Property', desc: 'Accounts, checks and deposits held by the state.' },
      ]}
      ctaTitle="Money may be waiting in the trust's name."
      ctaText="We search court records and state databases under the trust name and any connected properties at no cost. If assets exist, we file for the trustee and beneficiaries."
    />
  )
}
