import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Business & Trust Asset Recovery | RCG',
  description: 'Recover unclaimed assets held under business names, dissolved LLCs and trusts. Rebound Capital Group files through our network of licensed attorneys at no upfront cost.',
}

export default function LLCBusinessRecoveryPage() {
  return (
    <ServicePage
      slug="business-asset-recovery"
      image="/img/aerial-intersection.webp"
      imagePos="50% 50%"
      serviceName="LLC & Business Asset Recovery"
      badge="Businesses & trusts · $0 upfront"
      h1Lead="LLC & Business"
      h1Accent="Asset Recovery."
      answer="When an LLC or corporation closes, money held in its name does not automatically go to the owners. Surplus funds from property sales, dormant business accounts and uncollected refunds can sit with courts and state agencies for years. Former members and officers can often still claim them. We find the funds and file through our network of licensed attorneys. $0 upfront."
      ctaLabel="Check my business, free"
      sections={[
        {
          tag: 'Who this is for',
          title: 'Dissolved does not mean gone.',
          points: ['Former LLC members', 'Corporate officers', 'Partnership principals', 'Business heirs and successors'],
          body: (
            <>
              <p>When a business is dissolved, administratively revoked, or simply stops operating, money held in its name does not automatically transfer to the owners. Surplus funds from property sales, unclaimed business accounts and other recoverable assets often sit in court systems or state databases long after the business closes.</p>
              <p>Former officers, members and principals usually keep the right to claim these funds, but it takes showing legal standing, documenting how the business was set up, and filing through the correct process.</p>
              <p>RCG handles business asset recovery through attorneys in our network who know entity law and the documents these claims need. For funds held in a trust, see <Link href="/services/trust-recovery">trust asset recovery</Link>.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'Common situations',
        title: 'Situations we handle.',
        items: [
          { title: 'Dissolved or inactive LLC', desc: 'Surplus funds, unclaimed property and court deposits tied to a dissolved company can be recovered by former members or officers.' },
          { title: 'Property sold under a business name', desc: 'Foreclosure surplus and tax deed overages from property held by an LLC, corporation or partnership belong to that business, and then to its former principals.' },
          { title: 'Dormant business bank accounts', desc: 'Business checking, savings and merchant accounts that go dormant are turned over to the state, just like personal accounts.' },
          { title: 'Uncashed business checks and refunds', desc: 'Vendor refunds, utility deposits and insurance payouts issued to a business and never collected are held by the state.' },
        ],
      }}
      steps={[
        { title: 'We find the asset', desc: 'We search court records and state databases under the business name, name variations and officer or member names.' },
        { title: 'We check the business', desc: 'We pull state registration records to confirm the structure, dissolution status and who has standing to claim.' },
        { title: 'Attorneys file', desc: 'Attorneys in our network prepare the claim, establish standing and submit it to the right court or agency.' },
        { title: 'You get paid', desc: 'Approved funds go to the authorized former officer, member or principal. Our fee comes only from what we recover.' },
      ]}
      faqs={[
        { q: 'Can I claim money owed to my closed LLC?', a: 'Often, yes. Former members and officers can usually claim funds held in the name of a dissolved business, once they show they have the right to act for it.' },
        { q: 'What documents are needed?', a: 'Usually the business\'s state records, proof of your role in it, and your ID. We tell you exactly what your state requires.' },
        { q: 'What does it cost?', a: 'Nothing upfront. Our fee comes only from what we recover.' },
      ]}
      related={[
        { href: '/services/trust-recovery', label: 'Trust Asset Recovery', desc: 'Money held in the name of a trust.' },
        { href: '/services/unclaimed-property', label: 'Unclaimed Property', desc: 'Accounts, checks and deposits held by the state.' },
        { href: '/services/foreclosure-surplus', label: 'Foreclosure Surplus Funds', desc: 'Money left over after a foreclosure sale.' },
      ]}
      ctaTitle="Did your business leave money behind?"
      ctaText="We search court records and state databases under your business name at no cost. If funds exist, we handle the whole process."
    />
  )
}
