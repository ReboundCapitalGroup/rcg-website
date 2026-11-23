import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Surplus Funds Laws by State | RCG',
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
  { code: 'AZ', name: 'Arizona',        slug: 'arizona',        deadline: '3 years',   tier: 'medium' },
  { code: 'AR', name: 'Arkansas',       slug: 'arkansas',       deadline: '5 years',   tier: 'long' },
  { code: 'CA', name: 'California',     slug: 'california',     deadline: '1 year',    tier: 'medium' },
  { code: 'CO', name: 'Colorado',       slug: 'colorado',       deadline: '2.5 years', tier: 'medium' },
  { code: 'CT', name: 'Connecticut',    slug: 'connecticut',    deadline: '3 years',   tier: 'medium' },
  { code: 'DE', name: 'Delaware',       slug: 'delaware',       deadline: '5 years',   tier: 'long' },
  { code: 'FL', name: 'Florida',        slug: 'florida',        deadline: '60 days',   tier: 'short' },
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
  { code: 'MI', name: 'Michigan',       slug: 'michigan',       deadline: '1 year',    tier: 'medium' },
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
  { code: 'OH', name: 'Ohio',           slug: 'ohio',           deadline: '5 years',   tier: 'long' },
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
        .laws-page { background: #F9F8F6; color: #121829; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; min-height: 100vh; }
        .laws-grid-overlay { display: none; }
        .laws-container { max-width: 1320px; margin: 0 auto; padding: 28px 40px 96px; }
        .laws-breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 40px; font-size: 13px; color: #6b7390; }
        .laws-breadcrumb a { color: #6b7390; text-decoration: none; }
        .laws-breadcrumb span:last-child { color: #0d1322 !important; font-weight: 700; }
        .laws-header { margin-bottom: 40px; }
        .laws-tag { margin-bottom: 18px; }
        .laws-tag-line { display: none; }
        .laws-tag-text { font-size: 12px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: #1E287F; }
        .laws-title { font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; font-size: clamp(40px,5.5vw,64px); color: #0d1322; line-height: 1.02; margin: 0 0 20px; }
        .laws-title-accent { background-image: linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%); -webkit-background-clip: text; background-clip: text; color: transparent; font-style: italic; padding-right: 6px; }
        .laws-subtitle { font-size: 18px; color: #2f3856; line-height: 1.65; max-width: 680px; margin: 0; }
        .laws-stats { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 0; margin-bottom: 28px; background: radial-gradient(ellipse at 90% 0%, #1f2d6b 0%, #0d1322 62%); border-radius: 16px; overflow: hidden; }
        .laws-stat { padding: 26px 26px; border-left: 1px solid rgba(147,184,255,0.15); }
        .laws-stat:first-child { border-left: 0; }
        .laws-stat-label { font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #93b8ff; margin-bottom: 8px; }
        .laws-stat-value { font-family: 'Instrument Serif', Georgia, serif; font-size: 40px; color: #fff; line-height: 1.05; }
        .laws-stat-hint { font-size: 13px; color: #c3cfee; margin-top: 6px; line-height: 1.4; }
        .laws-alert { padding: 18px 22px; background: #fff4ec; border: 1px solid rgba(214,120,60,0.35); border-left: 4px solid #d6783c; border-radius: 10px; margin-bottom: 28px; }
        .laws-alert-tag { font-size: 12px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #b4561c; margin-bottom: 6px; }
        .laws-alert-text { font-size: 15px; color: #3a4360; line-height: 1.7; margin: 0; }
        .laws-alert-text strong { color: #0d1322; }
        .laws-section-header { display: flex; align-items: baseline; gap: 16px; margin-bottom: 18px; }
        .laws-section-index { font-size: 12px; font-weight: 700; color: #1E287F; }
        .laws-section-title { font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; font-size: 42px; color: #0d1322; margin: 0; }
        .laws-section-count { font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #6b7390; margin-left: auto; }
        .laws-table { display: flex; flex-direction: column; background: #fff; border: 1px solid rgba(13,19,34,0.08); border-radius: 14px; overflow: hidden; }
        .laws-table-head { display: grid; grid-template-columns: 60px 1fr 200px 40px; gap: 14px; padding: 14px 22px; background: #0d1322; font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #93b8ff; }
        .laws-row { display: grid; grid-template-columns: 60px 1fr 200px 40px; gap: 14px; align-items: center; padding: 13px 22px; text-decoration: none; border-top: 1px solid rgba(13,19,34,0.06); transition: background 0.15s ease; }
        .laws-row:hover { background: #f1f4fc; }
        .laws-row-code { font-size: 13px; font-weight: 800; color: #1E287F; letter-spacing: 0.08em; }
        .laws-row-name { font-size: 15px; font-weight: 700; color: #0d1322; display: flex; align-items: center; gap: 10px; }
        .laws-row-active-dot { width: 8px; height: 8px; border-radius: 50%; background: #2fa865; box-shadow: 0 0 0 3px rgba(47,168,101,0.18); }
        .laws-row-deadline { font-size: 13px; font-weight: 800; padding: 5px 12px; border-radius: 999px; text-align: center; width: fit-content; }
        .laws-tier-short { background: #fdecec; color: #a12828; border: 1px solid rgba(200,60,60,0.3); }
        .laws-tier-medium { background: #fff5e0; color: #8a5a00; border: 1px solid rgba(200,150,40,0.35); }
        .laws-tier-long { background: #e9eefb; color: #1E287F; border: 1px solid rgba(30,40,127,0.2); }
        .laws-row-arrow { font-size: 16px; color: #1E287F; text-align: right; transition: transform 0.15s ease; }
        .laws-row:hover .laws-row-arrow { transform: translateX(3px); }
        .laws-legend { display: flex; gap: 22px; flex-wrap: wrap; margin: 0 0 40px; font-size: 13px; font-weight: 600; }
        .laws-legend-item { display: flex; align-items: center; gap: 8px; color: #3a4360; }
        .laws-legend-sample { padding: 3px 10px; border-radius: 999px; font-weight: 800; font-size: 12px; }
        .laws-notes { margin-top: 40px; padding: clamp(24px,4vw,40px); background: #fff; border: 1px solid rgba(13,19,34,0.08); border-radius: 14px; }
        .laws-notes-tag { font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #1E287F; margin-bottom: 12px; }
        .laws-notes-title { font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; font-size: 36px; color: #0d1322; margin: 0 0 14px; }
        .laws-notes-body { font-size: 16px; color: #3a4360; line-height: 1.75; margin: 0 0 12px; }
        .laws-notes-body strong { color: #0d1322 !important; }
        .laws-cta { margin-top: 40px; padding: clamp(28px,4vw,48px); background: radial-gradient(ellipse at 90% 0%, #1f2d6b 0%, #0d1322 62%); border-radius: 16px; text-align: center; color: #fff; }
        .laws-cta-tag { font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #93b8ff; margin-bottom: 12px; }
        .laws-cta-title { font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; font-size: clamp(32px,4vw,48px); color: #fff; margin: 0 0 12px; }
        .laws-cta-text { font-size: 16px; color: #c3cfee; line-height: 1.7; max-width: 560px; margin: 0 auto 24px; }
        .laws-cta-buttons { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
        .laws-cta-btn { padding: 18px 28px; border-radius: 6px; font-size: 14px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; }
        .laws-cta-btn-primary { background: #fff; color: #0d1322; }
        .laws-cta-btn-secondary { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.6); }
        .laws-cta-btn-secondary:hover { border-color: #fff; }
        @media (max-width: 900px) {
          .laws-container { padding: 18px 16px 64px; }
          .laws-breadcrumb { margin-bottom: 24px; font-size: 12px; }
          .laws-subtitle { font-size: 16px; }
          .laws-stats { grid-template-columns: 1fr 1fr; }
          .laws-stat { padding: 18px; border-left: 0; border-top: 1px solid rgba(147,184,255,0.15); }
          .laws-stat:nth-child(even) { border-left: 1px solid rgba(147,184,255,0.15); }
          .laws-stat:nth-child(-n+2) { border-top: 0; }
          .laws-stat-value { font-size: 30px; }
          .laws-table-head { display: none; }
          .laws-row { grid-template-columns: 38px 1fr auto; gap: 10px; padding: 13px 14px; }
          .laws-row-arrow { display: none; }
          .laws-row-name { font-size: 14px; }
          .laws-row-deadline { font-size: 12px; padding: 4px 10px; }
          .laws-section-title { font-size: 32px; }
          .laws-section-count { display: none; }
          .laws-legend { gap: 12px; font-size: 12px; }
        }
      `}</style>

      <div className="laws-grid-overlay" />

      <div className="laws-container">

        <div className="laws-breadcrumb">
          <Link href="/">Home</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span>State Laws &amp; Deadlines</span>
        </div>

        <div className="laws-header">
          <div className="laws-tag">
            <div className="laws-tag-line" />
            <span className="laws-tag-text">Reference</span>
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
            <div className="laws-stat-hint">Florida , shortest in the nation</div>
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
          <div className="laws-alert-tag">Important</div>
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
          <div className="laws-notes-tag">Important notes</div>
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
          <div className="laws-cta-tag">Verify your window</div>
          <h3 className="laws-cta-title">Don&apos;t guess. Let us check.</h3>
          <p className="laws-cta-text">
            Every case is different. We&apos;ll review your specific situation, confirm your remaining window, and let you know if money is owed to you , all free, no obligation.
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
