import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'State Laws & Claim Deadlines | Rebound Capital Group',
  description: 'Surplus funds claim deadlines for all 50 states. Time limits to claim foreclosure surplus, tax deed overages, and unclaimed property by state.',
}

type State = {
  code: string
  name: string
  slug: string
  deadline: string
  active?: boolean
  tier: 'short' | 'medium' | 'long'
}

// Tier classification: short = under 1 year, medium = 1-3 years, long = 4+ years

const STATES: State[] = [
  { code: 'AL', name: 'Alabama',        slug: 'alabama',        deadline: '3 years',   tier: 'medium' },
  { code: 'AK', name: 'Alaska',         slug: 'alaska',         deadline: '10 years',  tier: 'long' },
  { code: 'AZ', name: 'Arizona',        slug: 'arizona',        deadline: '3 years',   tier: 'medium', active: true },
  { code: 'AR', name: 'Arkansas',       slug: 'arkansas',       deadline: '5 years',   tier: 'long' },
  { code: 'CA', name: 'California',     slug: 'california',     deadline: '1 year',    tier: 'medium' },
  { code: 'CO', name: 'Colorado',       slug: 'colorado',       deadline: '2.5 years', tier: 'medium', active: true },
  { code: 'CT', name: 'Connecticut',    slug: 'connecticut',    deadline: '3 years',   tier: 'medium' },
  { code: 'DE', name: 'Delaware',       slug: 'delaware',       deadline: '5 years',   tier: 'long' },
  { code: 'FL', name: 'Florida',        slug: 'florida',        deadline: '60 days',   tier: 'short', active: true },
  { code: 'GA', name: 'Georgia',        slug: 'georgia',        deadline: '5 years',   tier: 'long' },
  { code: 'HI', name: 'Hawaii',         slug: 'hawaii',         deadline: '10 years',  tier: 'long' },
  { code: 'ID', name: 'Idaho',          slug: 'idaho',          deadline: '3 years',   tier: 'medium' },
  { code: 'IL', name: 'Illinois',       slug: 'illinois',       deadline: '7 years',   tier: 'long' },
  { code: 'IN', name: 'Indiana',        slug: 'indiana',        deadline: '3 years',   tier: 'medium' },
  { code: 'IA', name: 'Iowa',           slug: 'iowa',           deadline: '10 years',  tier: 'long' },
  { code: 'KS', name: 'Kansas',         slug: 'kansas',         deadline: '5 years',   tier: 'long' },
  { code: 'KY', name: 'Kentucky',       slug: 'kentucky',       deadline: '5 years',   tier: 'long' },
  { code: 'LA', name: 'Louisiana',      slug: 'louisiana',      deadline: '5 years',   tier: 'long' },
  { code: 'ME', name: 'Maine',          slug: 'maine',          deadline: '6 years',   tier: 'long' },
  { code: 'MD', name: 'Maryland',       slug: 'maryland',       deadline: '3 years',   tier: 'medium' },
  { code: 'MA', name: 'Massachusetts',  slug: 'massachusetts',  deadline: '3 years',   tier: 'medium' },
  { code: 'MI', name: 'Michigan',       slug: 'michigan',       deadline: '1 year',    tier: 'medium', active: true },
  { code: 'MN', name: 'Minnesota',      slug: 'minnesota',      deadline: '5 years',   tier: 'long' },
  { code: 'MS', name: 'Mississippi',    slug: 'mississippi',    deadline: '3 years',   tier: 'medium' },
  { code: 'MO', name: 'Missouri',       slug: 'missouri',       deadline: '10 years',  tier: 'long' },
  { code: 'MT', name: 'Montana',        slug: 'montana',        deadline: '5 years',   tier: 'long' },
  { code: 'NE', name: 'Nebraska',       slug: 'nebraska',       deadline: '5 years',   tier: 'long' },
  { code: 'NV', name: 'Nevada',         slug: 'nevada',         deadline: '1 year',    tier: 'medium' },
  { code: 'NH', name: 'New Hampshire',  slug: 'new-hampshire',  deadline: '3 years',   tier: 'medium' },
  { code: 'NJ', name: 'New Jersey',     slug: 'new-jersey',     deadline: '3 years',   tier: 'medium' },
  { code: 'NM', name: 'New Mexico',     slug: 'new-mexico',     deadline: '9 months',  tier: 'short' },
  { code: 'NY', name: 'New York',       slug: 'new-york',       deadline: '3 years',   tier: 'medium' },
  { code: 'NC', name: 'North Carolina', slug: 'north-carolina', deadline: '3 years',   tier: 'medium' },
  { code: 'ND', name: 'North Dakota',   slug: 'north-dakota',   deadline: '10 years',  tier: 'long' },
  { code: 'OH', name: 'Ohio',           slug: 'ohio',           deadline: '5 years',   tier: 'long', active: true },
  { code: 'OK', name: 'Oklahoma',       slug: 'oklahoma',       deadline: '5 years',   tier: 'long' },
  { code: 'OR', name: 'Oregon',         slug: 'oregon',         deadline: '5 years',   tier: 'long' },
  { code: 'PA', name: 'Pennsylvania',   slug: 'pennsylvania',   deadline: '2 years',   tier: 'medium' },
  { code: 'RI', name: 'Rhode Island',   slug: 'rhode-island',   deadline: '3 years',   tier: 'medium' },
  { code: 'SC', name: 'South Carolina', slug: 'south-carolina', deadline: '5 years',   tier: 'long' },
  { code: 'SD', name: 'South Dakota',   slug: 'south-dakota',   deadline: '10 years',  tier: 'long' },
  { code: 'TN', name: 'Tennessee',      slug: 'tennessee',      deadline: '2 years',   tier: 'medium' },
  { code: 'TX', name: 'Texas',          slug: 'texas',          deadline: '2 years',   tier: 'medium' },
  { code: 'UT', name: 'Utah',           slug: 'utah',           deadline: '3 years',   tier: 'medium' },
  { code: 'VT', name: 'Vermont',        slug: 'vermont',        deadline: '6 years',   tier: 'long' },
  { code: 'VA', name: 'Virginia',       slug: 'virginia',       deadline: '2 years',   tier: 'medium' },
  { code: 'WA', name: 'Washington',     slug: 'washington',     deadline: '3 years',   tier: 'medium' },
  { code: 'WV', name: 'West Virginia',  slug: 'west-virginia',  deadline: '10 years',  tier: 'long' },
  { code: 'WI', name: 'Wisconsin',      slug: 'wisconsin',      deadline: '3 years',   tier: 'medium' },
  { code: 'WY', name: 'Wyoming',        slug: 'wyoming',        deadline: '5 years',   tier: 'long' },
]

const urgentStates = STATES.filter(s => s.tier === 'short')
const mediumStates = STATES.filter(s => s.tier === 'medium')

export default function StateLawsPage() {
  const sortedStates = [...STATES].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="laws-page">
      <style>{`
        .laws-page { background: var(--bg); min-height: 100vh; position: relative; overflow: hidden; }
        .laws-grid-overlay { position: fixed; inset: 0; background-image: linear-gradient(rgba(74,95,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,95,212,0.04) 1px, transparent 1px); background-size: 52px 52px; pointer-events: none; z-index: 0; }
        .laws-container { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: clamp(40px,6vw,80px) clamp(20px,4vw,40px); }

        .laws-breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: var(--dim); }
        .laws-breadcrumb a { color: var(--rcg2); text-decoration: none; }

        .laws-header { margin-bottom: 40px; padding-bottom: 32px; border-bottom: 1px solid rgba(74,95,212,0.2); }
        .laws-tag { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
        .laws-tag-line { width: 30px; height: 1px; background: rgba(74,95,212,0.4); }
        .laws-tag-text { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--rcg2); }
        .laws-title { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: clamp(32px,5vw,56px); color: #fff; letter-spacing: -2px; line-height: 1.05; margin: 0 0 20px; }
        .laws-title-accent { background-image: linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .laws-subtitle { font-size: 15px; color: var(--mid); line-height: 1.75; max-width: 680px; margin: 0; }

        .laws-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 48px; }
        .laws-stat { padding: 20px 22px; background: var(--bg2); border: 1px solid rgba(74,95,212,0.2); border-left: 2px solid var(--rcg2); }
        .laws-stat-label { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: var(--dim); margin-bottom: 8px; }
        .laws-stat-value { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700; color: #fff; letter-spacing: -0.5px; line-height: 1.2; }
        .laws-stat-hint { font-size: 12px; color: var(--mid); margin-top: 6px; line-height: 1.4; }

        .laws-alert { padding: 18px 22px; background: rgba(80,30,30,0.15); border: 1px solid rgba(220,100,100,0.3); border-left: 2px solid #e07878; margin-bottom: 48px; }
        .laws-alert-tag { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #e07878; font-weight: 700; margin-bottom: 6px; }
        .laws-alert-text { font-size: 14px; color: var(--mid); line-height: 1.7; margin: 0; }
        .laws-alert-text strong { color: #fff; }

        .laws-section-header { display: flex; align-items: baseline; gap: 16px; margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid rgba(74,95,212,0.1); }
        .laws-section-index { font-family: 'Space Mono', monospace; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: var(--rcg2); }
        .laws-section-title { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: clamp(18px,2.2vw,24px); color: #fff; letter-spacing: -0.5px; margin: 0; }
        .laws-section-count { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--dim); margin-left: auto; }

        .laws-table { display: flex; flex-direction: column; gap: 1px; background: rgba(74,95,212,0.08); border: 1px solid rgba(74,95,212,0.15); }
        .laws-table-head { display: grid; grid-template-columns: 60px 1fr 200px 40px; gap: 14px; padding: 14px 20px; background: var(--bg2); font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: var(--dim); font-weight: 700; }
        .laws-row { display: grid; grid-template-columns: 60px 1fr 200px 40px; gap: 14px; align-items: center; padding: 14px 20px; background: var(--bg); text-decoration: none; transition: all 0.15s ease; }
        .laws-row:hover { background: var(--bg2); }
        .laws-row-code { font-family: 'Space Mono', monospace; font-size: 13px; font-weight: 700; color: var(--rcg2); letter-spacing: 1px; }
        .laws-row-name { font-family: 'Space Grotesk', sans-serif; font-size: 14px; font-weight: 500; color: #c8d8ff; display: flex; align-items: center; gap: 10px; }
        .laws-row-active-dot { width: 6px; height: 6px; border-radius: 50%; background: #7fd99f; box-shadow: 0 0 6px rgba(127,217,159,0.6); }
        .laws-row-deadline { font-family: 'Space Mono', monospace; font-size: 12px; font-weight: 700; letter-spacing: 0.5px; padding: 5px 10px; border-radius: 2px; text-align: center; width: fit-content; }
        .laws-tier-short { background: rgba(100,40,40,0.25); color: #e8a5a5; border: 1px solid rgba(200,80,80,0.4); }
        .laws-tier-medium { background: rgba(100,80,30,0.2); color: #e0c88a; border: 1px solid rgba(180,140,60,0.3); }
        .laws-tier-long { background: rgba(30,60,90,0.3); color: #8eb8e0; border: 1px solid rgba(74,95,212,0.3); }
        .laws-row-arrow { font-family: 'Space Mono', monospace; font-size: 14px; color: var(--dim); text-align: right; transition: all 0.15s ease; }
        .laws-row:hover .laws-row-arrow { color: var(--rcg2); transform: translateX(3px); }

        .laws-legend { display: flex; gap: 20px; flex-wrap: wrap; margin: 20px 0 32px; padding: 14px 20px; background: var(--bg2); border: 1px solid rgba(74,95,212,0.15); font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; }
        .laws-legend-item { display: flex; align-items: center; gap: 8px; color: var(--mid); }
        .laws-legend-sample { padding: 3px 8px; border-radius: 2px; font-weight: 700; font-size: 9px; }

        .laws-notes { margin-top: 48px; padding: clamp(24px,4vw,36px); background: var(--bg2); border: 1px solid rgba(74,95,212,0.2); border-left: 2px solid var(--rcg2); }
        .laws-notes-tag { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--rcg2); margin-bottom: 14px; }
        .laws-notes-title { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: clamp(18px,2.2vw,22px); color: #fff; letter-spacing: -0.5px; margin: 0 0 14px; }
        .laws-notes-body { font-size: 14px; color: var(--mid); line-height: 1.8; margin: 0 0 10px; }

        .laws-cta { margin-top: 48px; padding: clamp(28px,4vw,40px); background: linear-gradient(135deg, var(--bg2), rgba(30,40,127,0.2)); border: 1px solid rgba(74,95,212,0.3); border-top: 2px solid var(--rcg2); text-align: center; }
        .laws-cta-tag { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--rcg2); margin-bottom: 12px; }
        .laws-cta-title { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: clamp(22px,3vw,32px); color: #fff; letter-spacing: -0.5px; margin: 0 0 12px; }
        .laws-cta-text { font-size: 14px; color: var(--mid); line-height: 1.7; max-width: 540px; margin: 0 auto 22px; }
        .laws-cta-buttons { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
        .laws-cta-btn { padding: 13px 24px; font-family: 'Space Mono', monospace; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; transition: all 0.2s ease; }
        .laws-cta-btn-primary { background: linear-gradient(180deg, #2a48a0, #1E287F); color: #fff; border: 1px solid rgba(74,95,212,0.5); }
        .laws-cta-btn-primary:hover { background: linear-gradient(180deg, #3a58b0, #2E388F); }
        .laws-cta-btn-secondary { background: transparent; color: #c8d8ff; border: 1px solid rgba(74,95,212,0.35); }
        .laws-cta-btn-secondary:hover { border-color: var(--rcg2); color: #fff; }

        @media (max-width: 768px) {
          .laws-table-head { display: none; }
          .laws-row { grid-template-columns: 42px 1fr auto; gap: 10px; padding: 14px 14px; }
          .laws-row-arrow { display: none; }
          .laws-row-name { font-size: 13px; flex-direction: column; align-items: flex-start; gap: 4px; }
          .laws-row-deadline { font-size: 11px; padding: 4px 8px; }
          .laws-legend { font-size: 9px; gap: 10px; padding: 12px 14px; }
          .laws-section-count { display: none; }
        }
      `}</style>

      <div className="laws-grid-overlay" />

      <div className="laws-container">

        <div className="laws-breadcrumb">
          <Link href="/">Home</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: 'var(--mid)' }}>State Laws &amp; Deadlines</span>
        </div>

        <div className="laws-header">
          <div className="laws-tag">
            <div className="laws-tag-line" />
            <span className="laws-tag-text">// Reference</span>
          </div>
          <h1 className="laws-title">
            State Laws
            <br />
            <span className="laws-title-accent">&amp; Claim Deadlines.</span>
          </h1>
          <p className="laws-subtitle">
            Every state has its own timeline to claim surplus funds. Miss the deadline and the money reverts to the state or county. Here&apos;s what you need to know for all 50 states.
          </p>
        </div>

        <div className="laws-stats">
          <div className="laws-stat">
            <div className="laws-stat-label">Shortest Deadline</div>
            <div className="laws-stat-value">60 Days</div>
            <div className="laws-stat-hint">Florida &mdash; shortest in the nation</div>
          </div>
          <div className="laws-stat">
            <div className="laws-stat-label">Urgent States</div>
            <div className="laws-stat-value">{urgentStates.length}</div>
            <div className="laws-stat-hint">Deadlines under 12 months</div>
          </div>
          <div className="laws-stat">
            <div className="laws-stat-label">Standard Window</div>
            <div className="laws-stat-value">{mediumStates.length} States</div>
            <div className="laws-stat-hint">1 to 3 year claim windows</div>
          </div>
          <div className="laws-stat">
            <div className="laws-stat-label">Total Coverage</div>
            <div className="laws-stat-value">All 50 States</div>
            <div className="laws-stat-hint">Plus Washington D.C.</div>
          </div>
        </div>

        <div className="laws-alert">
          <div className="laws-alert-tag">// Important</div>
          <p className="laws-alert-text">
            Deadlines shown are general maximums. Actual windows may be shorter based on county procedures, sale type, or when formal notice was given. <strong>Don&apos;t wait.</strong> If a sale happened in your name, contact us today to verify your remaining window.
          </p>
        </div>

        <div className="laws-legend">
          <div className="laws-legend-item">
            <span className="laws-legend-sample laws-tier-short">60d - 1yr</span>
            <span>Urgent</span>
          </div>
          <div className="laws-legend-item">
            <span className="laws-legend-sample laws-tier-medium">1-3 yr</span>
            <span>Standard</span>
          </div>
          <div className="laws-legend-item">
            <span className="laws-legend-sample laws-tier-long">4yr+</span>
            <span>Extended</span>
          </div>
          <div className="laws-legend-item">
            <span className="laws-row-active-dot" style={{ display: 'inline-block' }}></span>
            <span>Active Recovery State</span>
          </div>
        </div>

        <div className="laws-section-header">
          <span className="laws-section-index">01 /</span>
          <h2 className="laws-section-title">All States A–Z</h2>
          <span className="laws-section-count">{STATES.length} Entries</span>
        </div>

        <div className="laws-table">
          <div className="laws-table-head">
            <div>Code</div>
            <div>State</div>
            <div>Claim Deadline</div>
            <div></div>
          </div>

          {sortedStates.map((s) => (
            <Link key={s.code} href={`/states/${s.slug}`} className="laws-row">
              <div className="laws-row-code">{s.code}</div>
              <div className="laws-row-name">
                {s.name}
                {s.active && <span className="laws-row-active-dot" title="Active recovery state" />}
              </div>
              <div>
                <span className={`laws-row-deadline laws-tier-${s.tier}`}>
                  {s.deadline}
                </span>
              </div>
              <div className="laws-row-arrow">→</div>
            </Link>
          ))}
        </div>

        <div className="laws-notes">
          <div className="laws-notes-tag">// Important Notes</div>
          <h3 className="laws-notes-title">A Few Things to Know</h3>
          <p className="laws-notes-body">
            <strong style={{ color: '#fff' }}>Deadlines are not uniform within a state.</strong> County-level procedures, sale types (foreclosure vs tax deed), and formal notice requirements can shorten the window. Always verify your specific situation before assuming time remains.
          </p>
          <p className="laws-notes-body">
            <strong style={{ color: '#fff' }}>Deceased owners, dissolved LLCs, and estate situations</strong> often trigger probate or formal court processes that can extend or pause deadlines. If that&apos;s your situation, different rules apply.
          </p>
          <p className="laws-notes-body" style={{ marginBottom: 0 }}>
            <strong style={{ color: '#fff' }}>Sale type matters.</strong> Foreclosure surplus, tax deed overages, and excess proceeds can have different deadlines even within the same state. We handle all three.
          </p>
        </div>

        <div className="laws-cta">
          <div className="laws-cta-tag">// Verify Your Window</div>
          <h3 className="laws-cta-title">Don&apos;t guess. Let us check.</h3>
          <p className="laws-cta-text">
            Every case is different. We&apos;ll review your specific situation, confirm your remaining window, and let you know if money is owed to you &mdash; all free, no obligation.
          </p>
          <div className="laws-cta-buttons">
            <Link href="/contact" className="laws-cta-btn laws-cta-btn-primary">
              Free Case Review
            </Link>
            <a href="tel:+13055634920" className="laws-cta-btn laws-cta-btn-secondary">
              Call 305-563-4920
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
