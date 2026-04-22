import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All 50 States | Surplus Recovery Coverage | Rebound Capital Group',
  description: 'Surplus fund recovery across all 50 states. Select your state for local surplus fund laws, filing process, and county-level guides.',
}

type State = { code: string; name: string; slug: string; active?: boolean }

const ACTIVE_STATES: State[] = [
  { code: 'FL', name: 'Florida',  slug: 'florida',  active: true },
  { code: 'AZ', name: 'Arizona',  slug: 'arizona',  active: true },
  { code: 'CO', name: 'Colorado', slug: 'colorado', active: true },
  { code: 'OH', name: 'Ohio',     slug: 'ohio',     active: true },
  { code: 'MI', name: 'Michigan', slug: 'michigan', active: true },
]

const OTHER_STATES: State[] = [
  { code: 'AL', name: 'Alabama',        slug: 'alabama' },
  { code: 'AK', name: 'Alaska',         slug: 'alaska' },
  { code: 'AR', name: 'Arkansas',       slug: 'arkansas' },
  { code: 'CA', name: 'California',     slug: 'california' },
  { code: 'CT', name: 'Connecticut',    slug: 'connecticut' },
  { code: 'DE', name: 'Delaware',       slug: 'delaware' },
  { code: 'GA', name: 'Georgia',        slug: 'georgia' },
  { code: 'HI', name: 'Hawaii',         slug: 'hawaii' },
  { code: 'ID', name: 'Idaho',          slug: 'idaho' },
  { code: 'IL', name: 'Illinois',       slug: 'illinois' },
  { code: 'IN', name: 'Indiana',        slug: 'indiana' },
  { code: 'IA', name: 'Iowa',           slug: 'iowa' },
  { code: 'KS', name: 'Kansas',         slug: 'kansas' },
  { code: 'KY', name: 'Kentucky',       slug: 'kentucky' },
  { code: 'LA', name: 'Louisiana',      slug: 'louisiana' },
  { code: 'ME', name: 'Maine',          slug: 'maine' },
  { code: 'MD', name: 'Maryland',       slug: 'maryland' },
  { code: 'MA', name: 'Massachusetts',  slug: 'massachusetts' },
  { code: 'MN', name: 'Minnesota',      slug: 'minnesota' },
  { code: 'MS', name: 'Mississippi',    slug: 'mississippi' },
  { code: 'MO', name: 'Missouri',       slug: 'missouri' },
  { code: 'MT', name: 'Montana',        slug: 'montana' },
  { code: 'NE', name: 'Nebraska',       slug: 'nebraska' },
  { code: 'NV', name: 'Nevada',         slug: 'nevada' },
  { code: 'NH', name: 'New Hampshire',  slug: 'new-hampshire' },
  { code: 'NJ', name: 'New Jersey',     slug: 'new-jersey' },
  { code: 'NM', name: 'New Mexico',     slug: 'new-mexico' },
  { code: 'NY', name: 'New York',       slug: 'new-york' },
  { code: 'NC', name: 'North Carolina', slug: 'north-carolina' },
  { code: 'ND', name: 'North Dakota',   slug: 'north-dakota' },
  { code: 'OK', name: 'Oklahoma',       slug: 'oklahoma' },
  { code: 'OR', name: 'Oregon',         slug: 'oregon' },
  { code: 'PA', name: 'Pennsylvania',   slug: 'pennsylvania' },
  { code: 'RI', name: 'Rhode Island',   slug: 'rhode-island' },
  { code: 'SC', name: 'South Carolina', slug: 'south-carolina' },
  { code: 'SD', name: 'South Dakota',   slug: 'south-dakota' },
  { code: 'TN', name: 'Tennessee',      slug: 'tennessee' },
  { code: 'TX', name: 'Texas',          slug: 'texas' },
  { code: 'UT', name: 'Utah',           slug: 'utah' },
  { code: 'VT', name: 'Vermont',        slug: 'vermont' },
  { code: 'VA', name: 'Virginia',       slug: 'virginia' },
  { code: 'WA', name: 'Washington',     slug: 'washington' },
  { code: 'WV', name: 'West Virginia',  slug: 'west-virginia' },
  { code: 'WI', name: 'Wisconsin',      slug: 'wisconsin' },
  { code: 'WY', name: 'Wyoming',        slug: 'wyoming' },
]

function StateCard({ state }: { state: State }) {
  return (
    <Link
      href={`/states/${state.slug}`}
      className={`state-card ${state.active ? 'state-card-active' : ''}`}
    >
      <div className="state-card-code">{state.code}</div>
      <div className="state-card-name">{state.name}</div>
      {state.active && (
        <div className="state-card-badge">
          <span className="state-card-dot" />
          Active Now
        </div>
      )}
      <div className="state-card-arrow">→</div>
    </Link>
  )
}

export default function StatesPage() {
  return (
    <div className="states-page">

      {/* CSS */}
      <style>{`
        .states-page {
          background: var(--bg);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .states-grid-overlay {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(74,95,212,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,95,212,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
          z-index: 0;
        }

        .states-container {
          position: relative;
          z-index: 2;
          max-width: 1320px;
          margin: 0 auto;
          padding: clamp(40px,6vw,80px) clamp(20px,4vw,40px);
        }

        /* Header */
        .states-header {
          margin-bottom: 56px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(74,95,212,0.2);
        }

        .states-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .states-tag-line {
          width: 30px;
          height: 1px;
          background: rgba(74,95,212,0.4);
        }

        .states-tag-text {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--rcg2);
        }

        .states-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(32px,5vw,56px);
          color: #fff;
          letter-spacing: -2px;
          line-height: 1.05;
          margin: 0 0 16px;
        }

        .states-title-accent {
          background-image: linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .states-subtitle {
          font-size: 15px;
          color: var(--mid);
          line-height: 1.7;
          max-width: 620px;
          margin: 16px 0 0;
        }

        /* Section heading */
        .states-section {
          margin-bottom: 64px;
        }

        .states-section-header {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(74,95,212,0.1);
        }

        .states-section-index {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--rcg2);
        }

        .states-section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(18px,2.2vw,24px);
          color: #fff;
          letter-spacing: -0.5px;
          margin: 0;
        }

        .states-section-count {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--dim);
          margin-left: auto;
        }

        /* Grid */
        .states-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }

        /* Card */
        .state-card {
          position: relative;
          display: grid;
          grid-template-columns: 48px 1fr auto;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          background: var(--bg2);
          border: 1px solid rgba(74,95,212,0.15);
          border-left: 2px solid rgba(74,95,212,0.3);
          text-decoration: none;
          transition: all 0.2s ease;
          overflow: hidden;
        }

        .state-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(74,95,212,0.05), transparent 60%);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .state-card:hover {
          border-color: rgba(74,95,212,0.5);
          border-left-color: var(--rcg2);
          transform: translateX(2px);
        }

        .state-card:hover::before {
          opacity: 1;
        }

        .state-card-active {
          border-left: 2px solid #4a8fd0;
          background: linear-gradient(90deg, rgba(30,40,127,0.15), var(--bg2) 50%);
        }

        .state-card-active:hover {
          border-left-color: #5fa3e0;
        }

        .state-card-code {
          font-family: 'Space Mono', monospace;
          font-size: 18px;
          font-weight: 700;
          color: var(--rcg2);
          letter-spacing: 1px;
          position: relative;
          z-index: 1;
        }

        .state-card-active .state-card-code {
          color: #6ba3dc;
        }

        .state-card-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #c8d8ff;
          line-height: 1.2;
          position: relative;
          z-index: 1;
        }

        .state-card-badge {
          position: absolute;
          top: 10px;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 3px 7px;
          background: rgba(30,80,50,0.25);
          border: 1px solid rgba(80,200,120,0.35);
          border-radius: 2px;
          font-family: 'Space Mono', monospace;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #7fd99f;
          z-index: 2;
        }

        .state-card-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #7fd99f;
          box-shadow: 0 0 6px rgba(127,217,159,0.7);
          animation: pulse-green 2.4s ease-in-out infinite;
        }

        @keyframes pulse-green {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .state-card-arrow {
          font-family: 'Space Mono', monospace;
          font-size: 16px;
          color: var(--dim);
          opacity: 0;
          transition: all 0.2s ease;
          transform: translateX(-6px);
          position: relative;
          z-index: 1;
        }

        .state-card:hover .state-card-arrow {
          opacity: 1;
          transform: translateX(0);
          color: var(--rcg2);
        }

        /* CTA Block */
        .states-cta {
          margin-top: 72px;
          padding: clamp(28px,4vw,40px);
          background: var(--bg2);
          border: 1px solid rgba(74,95,212,0.25);
          border-top: 2px solid var(--rcg2);
          text-align: center;
        }

        .states-cta-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--rcg2);
          margin-bottom: 10px;
        }

        .states-cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(20px,2.5vw,28px);
          color: #fff;
          letter-spacing: -0.5px;
          margin: 0 0 10px;
        }

        .states-cta-text {
          font-size: 14px;
          color: var(--mid);
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 22px;
        }

        .states-cta-buttons {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .states-cta-btn {
          padding: 13px 24px;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .states-cta-btn-primary {
          background: linear-gradient(180deg, #2a48a0, #1E287F);
          color: #fff;
          border: 1px solid rgba(74,95,212,0.5);
        }

        .states-cta-btn-primary:hover {
          background: linear-gradient(180deg, #3a58b0, #2E388F);
          border-color: #4a6fd2;
        }

        .states-cta-btn-secondary {
          background: transparent;
          color: #c8d8ff;
          border: 1px solid rgba(74,95,212,0.35);
        }

        .states-cta-btn-secondary:hover {
          border-color: var(--rcg2);
          color: #fff;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .states-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .state-card {
            grid-template-columns: 36px 1fr;
            padding: 14px 14px;
            gap: 10px;
          }

          .state-card-code {
            font-size: 15px;
          }

          .state-card-name {
            font-size: 12px;
          }

          .state-card-arrow {
            display: none;
          }

          .state-card-badge {
            font-size: 6px;
            padding: 2px 5px;
            top: 6px;
            right: 6px;
          }

          .states-section-count {
            display: none;
          }
        }

        @media (max-width: 420px) {
          .states-grid {
            grid-template-columns: 1fr;
          }

          .state-card {
            grid-template-columns: 44px 1fr auto;
          }

          .state-card-arrow {
            display: block;
          }

          .state-card-name {
            font-size: 14px;
          }

          .state-card-code {
            font-size: 18px;
          }
        }
      `}</style>

      {/* Grid overlay */}
      <div className="states-grid-overlay" />

      <div className="states-container">

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)' }}>
          <Link href="/" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>Home</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: 'var(--mid)' }}>All States</span>
        </div>

        {/* Header */}
        <div className="states-header">
          <div className="states-tag">
            <div className="states-tag-line" />
            <span className="states-tag-text">// All 50 States</span>
          </div>
          <h1 className="states-title">
            Surplus Recovery
            <br />
            <span className="states-title-accent">In Every State.</span>
          </h1>
          <p className="states-subtitle">
            Select your state to view local surplus fund laws, filing process, and county-level guides for foreclosure surplus, tax deed overages, and unclaimed property recovery.
          </p>
        </div>

        {/* Active Now Section */}
        <section className="states-section">
          <div className="states-section-header">
            <span className="states-section-index">01 /</span>
            <h2 className="states-section-title">Active Now</h2>
            <span className="states-section-count">{ACTIVE_STATES.length} States</span>
          </div>
          <div className="states-grid">
            {ACTIVE_STATES.map((s) => (
              <StateCard key={s.code} state={s} />
            ))}
          </div>
        </section>

        {/* All Other States Section */}
        <section className="states-section">
          <div className="states-section-header">
            <span className="states-section-index">02 /</span>
            <h2 className="states-section-title">All Other States</h2>
            <span className="states-section-count">{OTHER_STATES.length} States</span>
          </div>
          <div className="states-grid">
            {OTHER_STATES.map((s) => (
              <StateCard key={s.code} state={s} />
            ))}
          </div>
        </section>

        {/* CTA Block */}
        <div className="states-cta">
          <div className="states-cta-tag">// Not Sure Where To Start</div>
          <h3 className="states-cta-title">Let us verify your case.</h3>
          <p className="states-cta-text">
            Get a free, no-obligation review of your potential surplus funds claim. We work in every state and can tell you within 24 hours if money is owed to you.
          </p>
          <div className="states-cta-buttons">
            <Link href="/contact" className="states-cta-btn states-cta-btn-primary">
              Free Claim Review
            </Link>
            <a href="tel:+13055634920" className="states-cta-btn states-cta-btn-secondary">
              Call 305-563-4920
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
