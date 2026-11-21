import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePage from '@/components/ServicePage'

// COUNSEL: copy to be reviewed by counsel before relying on it in ads or mailers.

export const metadata: Metadata = {
  title: 'Probate Help for Heirs: Claim Surplus Funds a Relative Left Behind | RCG',
  description:
    'A relative passed away before claiming surplus funds or unclaimed property? Heirs can often still recover it. We coordinate probate and the claim through our network of licensed attorneys. Free review.',
}

const p = { margin: 0 }

export default function ProbateAssistancePage() {
  return (
    <ServicePage
      slug="probate-assistance"
      serviceName="Probate Help for Heirs"
      badge="Heirs · Estates · Nationwide"
      h1Lead="Probate Help"
      h1Accent="for Heirs."
      answer="When someone passes away before claiming surplus funds or unclaimed property, the money does not disappear. Their heirs can usually still recover it, but the court will often require probate first. We find the funds, identify the heirs, and coordinate probate and the claim through our network of licensed attorneys. The first review is free."
      ctaHref="/contact?type=estate"
      ctaLabel="Get a Free Review"
      sections={[
        {
          tag: 'Why probate',
          title: 'Why Heirs Often Need Probate First',
          points: ['Estate opening', 'Personal representative', 'Heir identification', 'Claim filing'],
          body: (
            <>
              <p style={p}>
                Courts and state agencies pay surplus funds and unclaimed property to the person legally entitled to them. When the owner has died, that is usually the estate, and someone has to be given legal authority to act for it. In most states that happens through probate, where the court appoints a personal representative (sometimes called an executor or administrator).
              </p>
              <p style={p}>
                Many families never open probate because there seemed to be nothing to inherit. Then a foreclosure or tax sale leaves surplus money, or an old account turns up as unclaimed property, and the estate suddenly matters.
              </p>
            </>
          ),
        },
        {
          tag: 'Types of probate',
          title: 'Simple or Formal: It Depends on the State and the Amount',
          body: (
            <>
              <p style={p}>
                Most states offer a shorter process for smaller estates, often called summary administration or a small estate affidavit. Larger estates, estates with a will that someone disputes, or estates with several heirs may need formal probate. The dollar limits and steps are different in every state.
              </p>
              <p style={p}>
                Our network of licensed attorneys in the state where the funds are held decides which route fits, opens the estate if needed, and files the surplus or unclaimed property claim alongside it, so the claim deadline is not missed while the estate is being set up.
              </p>
            </>
          ),
        },
        {
          tag: 'What to gather',
          title: 'Documents That Usually Help',
          points: ['Death certificate', 'Will, if there is one', 'Proof of relationship', 'Contact info for other heirs'],
          body: (
            <>
              <p style={p}>
                You do not need everything before calling us. Common documents are the death certificate, any will, and proof of how you are related (for example birth or marriage certificates). If there are brothers, sisters or other heirs, their names and contact information help, because the funds are usually shared by law.
              </p>
              <p style={p}>
                If the funds came from a foreclosure or tax sale, see <Link href="/services/foreclosure-surplus" style={{ color: '#8fb0ff' }}>foreclosure surplus funds</Link> and <Link href="/services/tax-deed-surplus" style={{ color: '#8fb0ff' }}>tax deed overages</Link>. For old accounts and state-held money, see <Link href="/services/unclaimed-property" style={{ color: '#8fb0ff' }}>unclaimed property</Link>.
              </p>
            </>
          ),
        },
      ]}
      steps={[
        { title: 'Tell us who passed', desc: 'Their name, the county or state where the property or account was, and your relationship.' },
        { title: 'We find the funds', desc: 'We confirm whether money is being held and how much, at no cost to you.' },
        { title: 'Probate if needed', desc: 'A licensed attorney from our network opens the estate when the court requires it.' },
        { title: 'Claim and payout', desc: 'The claim is filed and funds are paid to the estate or heirs as the court directs. $0 upfront.' },
      ]}
      faqs={[
        { q: 'My parent died before claiming surplus funds. Can I still get them?', a: 'Usually, yes. Surplus funds and unclaimed property pass to the estate, and heirs can claim them, often after probate is opened. Deadlines still apply, so it is best to start soon.' },
        { q: 'Do I always need probate to claim the money?', a: 'Not always. Some states allow a small estate affidavit or a shorter process for smaller amounts. Our network of licensed attorneys in the state where the funds are held will tell you which route applies.' },
        { q: 'What if there are several heirs?', a: 'The money is usually divided among the heirs as state law or the will directs. Having names and contact information for other heirs helps the process move faster.' },
        { q: 'What does it cost?', a: 'The first review is free. Surplus and unclaimed property recovery is handled on a contingency basis, so there is no upfront cost. Any probate attorney fees are explained before work begins.' },
        { q: 'Is Rebound Capital Group a law firm?', a: 'No. Rebound Capital Group is not a law firm and does not give legal advice. Probate and claim filings are handled through our network of licensed attorneys.' },
      ]}
      related={[
        { href: '/services/estate-recovery', label: 'Estate & Heir Recovery', desc: 'How we find funds owed to a relative who passed.' },
        { href: '/services/foreclosure-surplus', label: 'Foreclosure Surplus Funds', desc: 'Money left over after a foreclosure sale.' },
        { href: '/services/time-extensions', label: 'Time Extensions', desc: 'More time before a foreclosure sale or eviction.' },
      ]}
      ctaTitle="Settling a Loved One's Affairs?"
      ctaText="Tell us who passed and where they lived. We will check, for free, whether money is being held for the estate."
    />
  )
}
