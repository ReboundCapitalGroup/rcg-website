import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unclaimed Funds Map — Surplus Fund Laws All 50 States | Rebound Capital Group',
  description: 'Interactive map of foreclosure surplus fund laws, claim deadlines, and recovery process for all 50 states. Click any state for county-level guides and local laws.',
}

const states = [
  { code:'AL', name:'Alabama', slug:'alabama', deadline:'3 years', attorney:false, active:false },
  { code:'AK', name:'Alaska', slug:'alaska', deadline:'10 years', attorney:false, active:false },
  { code:'AZ', name:'Arizona', slug:'arizona', deadline:'3 years', attorney:false, active:true },
  { code:'AR', name:'Arkansas', slug:'arkansas', deadline:'5 years', attorney:false, active:false },
  { code:'CA', name:'California', slug:'california', deadline:'1 year', attorney:true, active:false },
  { code:'CO', name:'Colorado', slug:'colorado', deadline:'2.5 years', attorney:false, active:true },
  { code:'CT', name:'Connecticut', slug:'connecticut', deadline:'3 years', attorney:false, active:false },
  { code:'DE', name:'Delaware', slug:'delaware', deadline:'5 years', attorney:false, active:false },
  { code:'FL', name:'Florida', slug:'florida', deadline:'60 days', attorney:false, active:true },
  { code:'GA', name:'Georgia', slug:'georgia', deadline:'5 years', attorney:false, active:false },
  { code:'HI', name:'Hawaii', slug:'hawaii', deadline:'10 years', attorney:false, active:false },
  { code:'ID', name:'Idaho', slug:'idaho', deadline:'3 years', attorney:false, active:false },
  { code:'IL', name:'Illinois', slug:'illinois', deadline:'7 years', attorney:true, active:false },
  { code:'IN', name:'Indiana', slug:'indiana', deadline:'3 years', attorney:false, active:false },
  { code:'IA', name:'Iowa', slug:'iowa', deadline:'10 years', attorney:false, active:false },
  { code:'KS', name:'Kansas', slug:'kansas', deadline:'5 years', attorney:false, active:false },
  { code:'KY', name:'Kentucky', slug:'kentucky', deadline:'5 years', attorney:false, active:false },
  { code:'LA', name:'Louisiana', slug:'louisiana', deadline:'5 years', attorney:false, active:false },
  { code:'ME', name:'Maine', slug:'maine', deadline:'6 years', attorney:false, active:false },
  { code:'MD', name:'Maryland', slug:'maryland', deadline:'3 years', attorney:false, active:false },
  { code:'MA', name:'Massachusetts', slug:'massachusetts', deadline:'3 years', attorney:true, active:false },
  { code:'MI', name:'Michigan', slug:'michigan', deadline:'1 year', attorney:false, active:false },
  { code:'MN', name:'Minnesota', slug:'minnesota', deadline:'5 years', attorney:false, active:false },
  { code:'MS', name:'Mississippi', slug:'mississippi', deadline:'3 years', attorney:false, active:false },
  { code:'MO', name:'Missouri', slug:'missouri', deadline:'10 years', attorney:false, active:false },
  { code:'MT', name:'Montana', slug:'montana', deadline:'5 years', attorney:false, active:false },
  { code:'NE', name:'Nebraska', slug:'nebraska', deadline:'5 years', attorney:false, active:false },
  { code:'NV', name:'Nevada', slug:'nevada', deadline:'1 year', attorney:false, active:false },
  { code:'NH', name:'New Hampshire', slug:'new-hampshire', deadline:'3 years', attorney:false, active:false },
  { code:'NJ', name:'New Jersey', slug:'new-jersey', deadline:'3 years', attorney:false, active:false },
  { code:'NM', name:'New Mexico', slug:'new-mexico', deadline:'9 months', attorney:false, active:false },
  { code:'NY', name:'New York', slug:'new-york', deadline:'3 years', attorney:true, active:false },
  { code:'NC', name:'North Carolina', slug:'north-carolina', deadline:'3 years', attorney:false, active:false },
  { code:'ND', name:'North Dakota', slug:'north-dakota', deadline:'10 years', attorney:false, active:false },
  { code:'OH', name:'Ohio', slug:'ohio', deadline:'5 years', attorney:false, active:false },
  { code:'OK', name:'Oklahoma', slug:'oklahoma', deadline:'5 years', attorney:false, active:false },
  { code:'OR', name:'Oregon', slug:'oregon', deadline:'5 years', attorney:false, active:false },
  { code:'PA', name:'Pennsylvania', slug:'pennsylvania', deadline:'2 years', attorney:true, active:false },
  { code:'RI', name:'Rhode Island', slug:'rhode-island', deadline:'3 years', attorney:false, active:false },
  { code:'SC', name:'South Carolina', slug:'south-carolina', deadline:'5 years', attorney:false, active:false },
  { code:'SD', name:'South Dakota', slug:'south-dakota', deadline:'6 years', attorney:false, active:false },
  { code:'TN', name:'Tennessee', slug:'tennessee', deadline:'2 years', attorney:false, active:false },
  { code:'TX', name:'Texas', slug:'texas', deadline:'2 years', attorney:false, active:false },
  { code:'UT', name:'Utah', slug:'utah', deadline:'3 years', attorney:false, active:false },
  { code:'VT', name:'Vermont', slug:'vermont', deadline:'6 years', attorney:false, active:false },
  { code:'VA', name:'Virginia', slug:'virginia', deadline:'2 years', attorney:false, active:false },
  { code:'WA', name:'Washington', slug:'washington', deadline:'3 years', attorney:false, active:false },
  { code:'WV', name:'West Virginia', slug:'west-virginia', deadline:'10 years', attorney:false, active:false },
  { code:'WI', name:'Wisconsin', slug:'wisconsin', deadline:'3 years', attorney:false, active:false },
  { code:'WY', name:'Wyoming', slug:'wyoming', deadline:'5 years', attorney:false, active:false },
]

export default function MapPage() {
  return (
    <>
      <style>{`
        .map-page { background: var(--bg); min-height: 100vh; }
        .map-hero { padding: 56px 40px 40px; text-align: center; border-bottom: 1px solid rgba(30,40,127,0.25); }
        .map-legend { display: flex; align-items: center; justify-content: center; gap: 28px; margin-top: 20px; flex-wrap: wrap; }
        .legend-item { display: flex; align-items: center; gap: 8px; font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: #5a6890; }
        .legend-dot { width: 12px; height: 12px; border-radius: 2px; flex-shrink: 0; }

        .map-container { max-width: 1200px; margin: 0 auto; padding: 40px 40px 0; }
        .map-grid { display: grid; grid-template-columns: repeat(10, 1fr); gap: 6px; }

        .state-btn {
          background: #1e2438;
          border: 1px solid rgba(30,40,127,0.3);
          color: #5a6890;
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 10px 4px;
          text-align: center;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transition: all 0.15s;
          position: relative;
        }
        .state-btn:hover {
          background: rgba(30,40,127,0.3);
          border-color: rgba(30,40,127,0.7);
          color: #c8d8ff;
          transform: translateY(-1px);
        }
        .state-btn.active {
          background: rgba(30,40,127,0.25);
          border-color: #1E287F;
          color: #8fa3f0;
        }
        .state-btn.active::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #1E287F;
        }
        .state-code { font-size: 11px; font-weight: 700; }
        .state-deadline { font-size: 7px; opacity: 0.7; letter-spacing: 0.3px; }

        .info-bar { background: #1e2438; border-top: 1px solid rgba(30,40,127,0.25); border-bottom: 1px solid rgba(30,40,127,0.25); padding: 20px 40px; margin-top: 32px; }
        .info-bar-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(30,40,127,0.2); }
        .info-stat { background: #1e2438; padding: 16px 24px; }
        .info-stat-val { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 22px; color: #fff; letter-spacing: -1px; }
        .info-stat-val span { color: #1E287F; }
        .info-stat-label { font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase; color: #5a6890; margin-top: 4px; }

        .table-section { max-width: 1200px; margin: 0 auto; padding: 40px 40px 80px; }
        .state-table { width: 100%; border-collapse: collapse; background: #1e2438; border: 1px solid rgba(30,40,127,0.25); }
        .state-table th { background: #16205e; padding: 12px 16px; font-family: 'Space Mono', monospace; font-size: 9px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #8fa3f0; text-align: left; border-bottom: 1px solid rgba(30,40,127,0.3); }
        .state-table td { padding: 11px 16px; font-size: 12px; color: #a0aece; border-bottom: 1px solid rgba(30,40,127,0.15); }
        .state-table tr:hover td { background: rgba(30,40,127,0.1); }
        .state-table tr:last-child td { border-bottom: none; }
        .td-state { font-weight: 700; color: #fff; font-family: 'Space Grotesk', sans-serif; }
        .td-active { color: #1E287F; font-family: 'Space Mono', monospace; font-size: 9px; font-weight: 700; letter-spacing: 1px; }
        .td-deadline { font-family: 'Space Mono', monospace; font-size: 10px; color: #c8d8ff; }
        .td-urgent { color: #f0a500; }
        .badge-active { display: inline-block; background: rgba(30,40,127,0.2); border: 1px solid #1E287F; color: #8fa3f0; font-family: 'Space Mono', monospace; font-size: 8px; font-weight: 700; letter-spacing: 1px; padding: 2px 8px; text-transform: uppercase; }
        .badge-soon { display: inline-block; background: rgba(30,40,127,0.08); border: 1px solid rgba(30,40,127,0.3); color: #5a6890; font-family: 'Space Mono', monospace; font-size: 8px; font-weight: 700; letter-spacing: 1px; padding: 2px 8px; text-transform: uppercase; }
        .cta-row { display: flex; align-items: center; gap: 12px; margin-top: 40px; }
      `}</style>

      <div className="map-page">
        {/* HERO */}
        <div className="map-hero">
          <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', letterSpacing:'2.5px', textTransform:'uppercase', color:'#1E287F', display:'block', marginBottom:'12px' }}>// unclaimed funds map</span>
          <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(28px,3.5vw,48px)', color:'#fff', letterSpacing:'-1.5px', lineHeight:0.95, marginBottom:'14px' }}>
            Surplus Fund Laws.<br /><span style={{ color:'#5a6890' }}>All 50 States.</span>
          </h1>
          <p style={{ fontSize:'14px', color:'#5a6890', maxWidth:'520px', margin:'0 auto', lineHeight:1.6 }}>
            Click any state to see claim deadlines, local laws, filing process, and county-level guides. Active states have live case monitoring.
          </p>
          <div className="map-legend">
            <div className="legend-item"><div className="legend-dot" style={{ background:'#1E287F', border:'1px solid #1E287F' }} />Active — Live Monitoring</div>
            <div className="legend-item"><div className="legend-dot" style={{ background:'#1e2438', border:'1px solid rgba(30,40,127,0.3)' }} />Available — We Recover</div>
          </div>
        </div>

        {/* GRID MAP */}
        <div className="map-container">
          <div className="map-grid">
            {states.map(s => (
              <a key={s.code} href={`/states/${s.slug}`} className={`state-btn${s.active ? ' active' : ''}`}>
                <span className="state-code">{s.code}</span>
                <span className="state-deadline">{s.deadline}</span>
              </a>
            ))}
          </div>
        </div>

        {/* QUICK STATS */}
        <div className="info-bar">
          <div className="info-bar-inner">
            <div className="info-stat"><div className="info-stat-val">50</div><div className="info-stat-label">States Covered</div></div>
            <div className="info-stat"><div className="info-stat-val"><span>3</span></div><div className="info-stat-label">Active Live States</div></div>
            <div className="info-stat"><div className="info-stat-val">60<span>d</span></div><div className="info-stat-label">Shortest Deadline (FL)</div></div>
            <div className="info-stat"><div className="info-stat-val">$<span>0</span></div><div className="info-stat-label">Upfront Cost — Ever</div></div>
          </div>
        </div>

        {/* FULL TABLE */}
        <div className="table-section">
          <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', letterSpacing:'2.5px', textTransform:'uppercase', color:'#1E287F', display:'block', marginBottom:'20px' }}>// all states — laws & deadlines</span>
          <table className="state-table">
            <thead>
              <tr>
                <th>State</th>
                <th>Claim Deadline</th>
                <th>Attorney Required</th>
                <th>Coverage Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {states.map(s => (
                <tr key={s.code}>
                  <td className="td-state">{s.name}</td>
                  <td className={`td-deadline${s.deadline === '60 days' || s.deadline === '9 months' || s.deadline === '1 year' ? ' td-urgent' : ''}`}>{s.deadline}</td>
                  <td style={{ fontFamily:"'Space Mono',monospace", fontSize:'10px', color: s.attorney ? '#f0a500' : '#5a6890' }}>{s.attorney ? 'YES' : 'No'}</td>
                  <td>{s.active ? <span className="badge-active">Active</span> : <span className="badge-soon">Available</span>}</td>
                  <td><a href={`/states/${s.slug}`} style={{ fontFamily:"'Space Mono',monospace", fontSize:'9px', color:'#1E287F', textDecoration:'none', letterSpacing:'0.5px' }}>View Guide →</a></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cta-row">
            <a href="/contact" style={{ display:'inline-flex', alignItems:'center', background:'linear-gradient(180deg,#4a5060 0%,#2a2e38 50%,#1a1d24 100%)', color:'#e8edf8', fontFamily:"'Space Grotesk',sans-serif", fontSize:'13px', fontWeight:700, letterSpacing:'0.8px', textTransform:'uppercase', padding:'14px 28px', border:'1px solid rgba(255,255,255,0.12)', textDecoration:'none', boxShadow:'0 4px 0 rgba(0,0,0,0.5)' }}>
              Get Free Claim Review
            </a>
            <a href="tel:+13055634920" style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'#1E287F', color:'#fff', fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'12px', fontWeight:900, letterSpacing:'1px', padding:'14px 24px', textDecoration:'none', boxShadow:'0 4px 0 rgba(0,0,0,0.5)' }}>
              305-563-4920
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
