import type { Metadata } from 'next'
import Link from 'next/link'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import { TrustRow } from '@/components/ui/blocks'
import c from './contact.module.css'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Rebound Capital Group',
  description: 'Contact Rebound Capital Group. Call or text 24/7 at 305-563-4920, or send our team a message. Based in Miami Beach, FL, helping homeowners and heirs in all 50 states.',
  alternates: { canonical: '/contact' },
}

const Icon = ({ d }: { d: React.ReactNode }) => (
  <span className={c.icon}>
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
  </span>
)

export default function ContactPage() {
  return (
    <div className={h.page}>
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={sv.crumbs}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>Contact</span>
        </div>
        <div className={`${sv.heroText} ${sv.heroCenter}`}>
          <div className={h.eyebrow}>Contact · Miami Beach, FL · 24/7</div>
          <h1 className={sv.h1}>Talk to a <em className={h.gradText}>real person.</em></h1>
          <p className={sv.answer}>Questions about a case, a letter you received, or working with us? Call, text or send a message. A member of our team answers every message.</p>
        </div>
      </div>

      <div className={h.wrap}>
        <div className={c.layout}>
        <div className={c.side}>
        <div className={c.grid}>
          <a href="tel:+13055634920" className={c.card}>
            <Icon d={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />} />
            <span className={c.label}>Call or text</span>
            <span className={c.value}>305-563-4920</span>
            <span className={c.meta}>Any time, 24/7</span>
          </a>
          <a href="#message" className={c.card}>
            <Icon d={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} />
            <span className={c.label}>Message</span>
            <span className={c.value}>Send us a note</span>
            <span className={c.meta}>We reply within one business day</span>
          </a>
          <div className={c.card}>
            <Icon d={<><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>} />
            <span className={c.label}>Based in</span>
            <span className={c.value}>Miami Beach, FL</span>
            <span className={c.meta}>Serving all 50 states</span>
          </div>
        </div>

        <Link href="/free-review" className={c.review}>
          <span className={c.reviewText}>
            <span className={c.reviewTag}>Free, no obligation</span>
            <span className={c.reviewTitle}>Think you&apos;re owed money?</span>
            <span className={c.reviewSub}>Start a free review. It takes about two minutes and costs nothing.</span>
          </span>
          <span className={c.reviewBtn}>Start free review <span aria-hidden="true">→</span></span>
        </Link>

        <div className={c.trust}><TrustRow /></div>
        </div>
        <div id="message" className={c.formCard} style={{ scrollMarginTop: 110 }}><ContactForm /></div>
        </div>
      </div>

      <div style={{ height: 96 }} />
    </div>
  )
}
