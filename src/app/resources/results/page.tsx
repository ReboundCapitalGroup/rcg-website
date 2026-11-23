import Link from 'next/link'
import type { Metadata } from 'next'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import GoogleReviews from '@/components/GoogleReviews'
import { ScrollCue } from '@/components/ui/blocks'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Client Reviews & Results | Rebound Capital Group',
  description: 'What clients say about Rebound Capital Group. Google reviews from homeowners and heirs we helped recover foreclosure surplus and other funds. Over $2M recovered.',
}


export default function ClientResultsPage() {
  return (
    <div className={h.page}>
      <div className={`${h.wrap} ${sv.hero}`}>
        <div role="navigation" aria-label="Breadcrumb" className={sv.crumbs}>
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>Results</span>
        </div>
        <div className={sv.heroGrid}>
          <div className={sv.heroText}>
            <div className={h.eyebrow}>Google reviews · $2M+ recovered</div>
            <h1 className={sv.h1}>What clients <em className={h.gradText}>say.</em></h1>
            <p className={sv.answer}>Real reviews from the homeowners and families we have worked with, straight from Google. Since 2023, over $2 million has been recovered for clients on a pure contingency basis.</p>
          </div>
          <div className={sv.glance}>
            <div className={sv.glanceLabel}>By the numbers</div>
            {[['Total recovered for clients', '$2M+'], ['Fee model', '100% contingency'], ['Coverage', 'Nationwide']].map(([k, v]) => (
              <div key={k} className={sv.glanceRow}><span>{k}</span><b>{v}</b></div>
            ))}
          </div>
        </div>
      </div>

      <ScrollCue to="more" />

      <div id="more" className={h.wrap} style={{ scrollMarginTop: 100 }}>
        <GoogleReviews />
      </div>

      <div style={{ height: 72 }} />
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>Find out what you are owed.</h2>
          <p>A free search takes minutes. If funds exist in your name, we find them and handle the full recovery at no cost to you.</p>
          <div className={h.btnRow}>
            <Link href="/free-review" className={`${h.btnPrimary} ${h.btnLg}`}>Get a free review <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>Call 305-563-4920</a>
          </div>
        </div>
      </section>
    </div>
  )
}
