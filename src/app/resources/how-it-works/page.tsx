import Link from 'next/link'
import type { Metadata } from 'next'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import Image from 'next/image'
import ReviewsStrip from '@/components/ReviewsStrip'
import { Timeline, TrustRow, PhotoBand, ScrollCue } from '@/components/ui/blocks'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'How Surplus Funds Recovery Works | RCG',
  description: 'How surplus funds recovery works: we find money owed to you, file through our network of licensed attorneys, and you get paid. No upfront cost. We only get paid when you do.',
}

const steps = [
  { title: 'We start with the search', sub: 'Proactive or on request', desc: 'Whether you come to us or we find funds tied to your name first, every case starts the same way. We search court systems, state agencies and county records to confirm what exists and what you may be entitled to.' },
  { title: 'Free claim review', sub: 'Zero cost, zero obligation', desc: 'We confirm the claim amount, walk you through the process for your case, and answer every question. If there is nothing to recover, we tell you right away.' },
  { title: 'One simple agreement', sub: 'Contingency only', desc: 'One document. It explains our fee, taken only from the recovered amount, and lets us act for you. No upfront payment. No out-of-pocket costs at any point.' },
  { title: 'We handle everything', sub: 'Attorneys, filings, court dates', desc: 'Attorneys in our network file the claim, handle court correspondence, respond to objections and track every deadline. You do not need to appear in court or manage paperwork.' },
  { title: 'Funds are released', sub: 'Court-ordered disbursement', desc: 'Once approved, the court or agency releases the funds. Most claims resolve in 30 to 90 days. Cases involving probate or competing claims can take longer.' },
  { title: 'You get paid', sub: 'Your share, sent to you', desc: 'Your share of the recovered funds goes to you. Our fee comes out of the recovery. If we do not recover, you owe us nothing.' },
]

const faqs = [
  { q: 'How do you get paid?', a: 'Strictly on contingency. We take a percentage of what we recover. If nothing is recovered, you pay nothing.' },
  { q: 'How long does the process take?', a: 'Most claims resolve in 30 to 90 days. Cases involving probate or competing claims can take longer.' },
  { q: 'Do I need to hire my own attorney?', a: 'No. Attorneys in our network are part of the process on every claim. You do not need separate counsel.' },
  { q: 'Is there a deadline to claim?', a: 'Yes, and it varies by state and claim type. Some windows are short. If you have been told about surplus funds, contact us right away.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function HowItWorksPage() {
  return (
    <div className={h.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={`${sv.crumbs} ${sv.crumbsCenter}`}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>How It Works</span>
        </div>
        <div className={`${sv.heroText} ${sv.heroCenter}`}>
          <div className={h.eyebrow}>Six steps · $0 upfront · One agreement</div>
          <h1 className={sv.h1}>How it <em className={h.gradText}>works.</em></h1>
          <p className={sv.answer}>From the first search to the final payment, every step is handled by our team, at no cost to you until we recover.</p>
          <div className={h.btnRow}>
            <Link href="/contact" className={`${h.btnPrimary} ${h.btnLg}`}>Start a free review <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call or text 24/7</a>
          </div>
          <TrustRow />
        </div>
      </div>

      <ScrollCue to="more" />

      <div id="more" className={h.wrap} style={{ scrollMarginTop: 100 }}>
        <div className={sv.faqGrid} style={{ alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 110 }}>
            <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: 16, overflow: 'hidden', boxShadow: '0 30px 60px rgba(13,19,34,0.18)' }}>
              <Image src="/img/signing.webp" alt="" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: 'cover', objectPosition: '50% 75%' }} />
            </div>
          </div>
          <Timeline items={steps.map((st) => ({ tag: st.sub, title: st.title, text: st.desc }))} />
        </div>
      </div>

      <PhotoBand src="/img/home-miami-beach.webp" position="50% 70%" title="You never touch the paperwork." text="Attorneys in our network handle filings, court correspondence and deadlines. You just answer a few questions." />

      <div className={`${h.wrap} ${sv.block}`}>
        <div className={sv.faqGrid}>
          <div>
            <div className={sv.tag}>Common questions</div>
            <h2 className={sv.h2}>Questions people ask.</h2>
            <Link href="/resources/faqs" className={sv.more}>All FAQs →</Link>
          </div>
          <div className={sv.faqs}>
            {faqs.map((f, i) => (
              <details key={f.q} className={sv.faq} open={i === 0}>
                <summary>{f.q}<span aria-hidden="true" className={sv.faqSign} /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <ReviewsStrip />

      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>Ready to find out what you are owed?</h2>
          <p>Start with a free search. We confirm what exists, walk you through the process, and handle everything from there.</p>
          <div className={h.btnRow}>
            <Link href="/contact" className={`${h.btnPrimary} ${h.btnLg}`}>Get a free review <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
