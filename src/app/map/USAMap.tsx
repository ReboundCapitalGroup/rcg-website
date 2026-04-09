'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { statePaths, stateCentroids } from './stateData'

const stateInfo: Record<string, { name: string; slug: string; funds: string; active: boolean; counties: number }> = {
  AL: { name: 'Alabama', slug: 'alabama', funds: '$892M', active: false, counties: 67 },
  AK: { name: 'Alaska', slug: 'alaska', funds: '$210M', active: false, counties: 30 },
  AZ: { name: 'Arizona', slug: 'arizona', funds: '$1.8B', active: true, counties: 15 },
  AR: { name: 'Arkansas', slug: 'arkansas', funds: '$421M', active: false, counties: 75 },
  CA: { name: 'California', slug: 'california', funds: '$15B', active: false, counties: 58 },
  CO: { name: 'Colorado', slug: 'colorado', funds: '$980M', active: true, counties: 64 },
  CT: { name: 'Connecticut', slug: 'connecticut', funds: '$940M', active: false, counties: 8 },
  DC: { name: 'Washington D.C.', slug: 'washington-dc', funds: '$180M', active: false, counties: 1 },
  DE: { name: 'Delaware', slug: 'delaware', funds: '$310M', active: false, counties: 3 },
  FL: { name: 'Florida', slug: 'florida', funds: '$2.4B', active: true, counties: 67 },
  GA: { name: 'Georgia', slug: 'georgia', funds: '$1.6B', active: false, counties: 159 },
  HI: { name: 'Hawaii', slug: 'hawaii', funds: '$290M', active: false, counties: 5 },
  ID: { name: 'Idaho', slug: 'idaho', funds: '$218M', active: false, counties: 44 },
  IL: { name: 'Illinois', slug: 'illinois', funds: '$3.2B', active: false, counties: 102 },
  IN: { name: 'Indiana', slug: 'indiana', funds: '$892M', active: false, counties: 92 },
  IA: { name: 'Iowa', slug: 'iowa', funds: '$412M', active: false, counties: 99 },
  KS: { name: 'Kansas', slug: 'kansas', funds: '$390M', active: false, counties: 105 },
  KY: { name: 'Kentucky', slug: 'kentucky', funds: '$580M', active: false, counties: 120 },
  LA: { name: 'Louisiana', slug: 'louisiana', funds: '$720M', active: false, counties: 64 },
  ME: { name: 'Maine', slug: 'maine', funds: '$310M', active: false, counties: 16 },
  MD: { name: 'Maryland', slug: 'maryland', funds: '$1.1B', active: false, counties: 24 },
  MA: { name: 'Massachusetts', slug: 'massachusetts', funds: '$2.4B', active: false, counties: 14 },
  MI: { name: 'Michigan', slug: 'michigan', funds: '$1.2B', active: true, counties: 83 },
  MN: { name: 'Minnesota', slug: 'minnesota', funds: '$1.0B', active: false, counties: 87 },
  MS: { name: 'Mississippi', slug: 'mississippi', funds: '$280M', active: false, counties: 82 },
  MO: { name: 'Missouri', slug: 'missouri', funds: '$890M', active: false, counties: 115 },
  MT: { name: 'Montana', slug: 'montana', funds: '$148M', active: false, counties: 56 },
  NE: { name: 'Nebraska', slug: 'nebraska', funds: '$310M', active: false, counties: 93 },
  NV: { name: 'Nevada', slug: 'nevada', funds: '$840M', active: false, counties: 17 },
  NH: { name: 'New Hampshire', slug: 'new-hampshire', funds: '$320M', active: false, counties: 10 },
  NJ: { name: 'New Jersey', slug: 'new-jersey', funds: '$2.8B', active: false, counties: 21 },
  NM: { name: 'New Mexico', slug: 'new-mexico', funds: '$340M', active: false, counties: 33 },
  NY: { name: 'New York', slug: 'new-york', funds: '$13B', active: false, counties: 62 },
  NC: { name: 'North Carolina', slug: 'north-carolina', funds: '$1.3B', active: false, counties: 100 },
  ND: { name: 'North Dakota', slug: 'north-dakota', funds: '$118M', active: false, counties: 53 },
  OH: { name: 'Ohio', slug: 'ohio', funds: '$4.8B', active: true, counties: 88 },
  OK: { name: 'Oklahoma', slug: 'oklahoma', funds: '$520M', active: false, counties: 77 },
  OR: { name: 'Oregon', slug: 'oregon', funds: '$780M', active: false, counties: 36 },
  PA: { name: 'Pennsylvania', slug: 'pennsylvania', funds: '$4.5B', active: false, counties: 67 },
  RI: { name: 'Rhode Island', slug: 'rhode-island', funds: '$290M', active: false, counties: 5 },
  SC: { name: 'South Carolina', slug: 'south-carolina', funds: '$620M', active: false, counties: 46 },
  SD: { name: 'South Dakota', slug: 'south-dakota', funds: '$112M', active: false, counties: 66 },
  TN: { name: 'Tennessee', slug: 'tennessee', funds: '$980M', active: false, counties: 95 },
  TX: { name: 'Texas', slug: 'texas', funds: '$10.5B', active: false, counties: 254 },
  UT: { name: 'Utah', slug: 'utah', funds: '$490M', active: false, counties: 29 },
  VT: { name: 'Vermont', slug: 'vermont', funds: '$150M', active: false, counties: 14 },
  VA: { name: 'Virginia', slug: 'virginia', funds: '$1.5B', active: false, counties: 95 },
  WA: { name: 'Washington', slug: 'washington', funds: '$1.4B', active: false, counties: 39 },
  WV: { name: 'West Virginia', slug: 'west-virginia', funds: '$280M', active: false, counties: 55 },
  WI: { name: 'Wisconsin', slug: 'wisconsin', funds: '$890M', active: false, counties: 72 },
  WY: { name: 'Wyoming', slug: 'wyoming', funds: '$98M', active: false, counties: 23 },
}

export default function USAMap() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const router = useRouter()

  const getStateFill = (code: string, isHovered: boolean) => {
    const info = stateInfo[code]
    if (!info) return '#1e2438'
    if (isHovered) return info.active ? '#2a40c0' : '#2e3a5a'
    return info.active ? '#1E287F' : '#243358'
  }

  const getStroke = (code: string, isHovered: boolean) => {
    if (isHovered) return '#8fa3f0'
    return stateInfo[code]?.active ? '#3a5fd4' : '#1e2d50'
  }

  const hInfo = hovered ? stateInfo[hovered] : null

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Tooltip */}
      {hovered && hInfo && (
        <div style={{
          position: 'absolute',
          left: Math.min(mouse.x + 14, 760),
          top: Math.max(mouse.y - 100, 4),
          background: 'linear-gradient(135deg, #0d1220 0%, #111828 100%)',
          border: `1px solid ${hInfo.active ? 'rgba(30,40,127,0.8)' : 'rgba(255,255,255,0.06)'}`,
          padding: '14px 18px',
          pointerEvents: 'none',
          zIndex: 20,
          minWidth: '200px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
        }}>
          {/* Active badge */}
          {hInfo.active && (
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4a7fd4', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4a7fd4', boxShadow: '0 0 6px #4a7fd4' }} />
              Active — Live Monitoring
            </div>
          )}

          {/* State name */}
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '15px', color: '#fff', marginBottom: '10px', letterSpacing: '-0.3px' }}>
            {hInfo.name}
          </div>

          {/* Funds */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '22px', color: hInfo.active ? '#6a90f0' : '#4a6090', letterSpacing: '-1px' }}>
              {hInfo.funds}
            </span>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#3a5080' }}>
              unclaimed
            </span>
          </div>

          {/* Counties */}
          {hInfo.active && (
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', color: '#3a5070', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              {hInfo.counties} counties monitored
            </div>
          )}

          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', color: hInfo.active ? '#1E287F' : '#1a2540', letterSpacing: '0.5px', marginTop: '8px', paddingTop: '8px', borderTop: `1px solid ${hInfo.active ? 'rgba(30,40,127,0.3)' : 'rgba(255,255,255,0.04)'}` }}>
            {hInfo.active ? 'Click to view state guide →' : 'Coming soon — we can still help →'}
          </div>
        </div>
      )}

      <svg
        viewBox="0 0 960 600"
        style={{ width: '100%', height: 'auto', display: 'block', cursor: 'pointer' }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          setMouse({
            x: (e.clientX - rect.left) * (960 / rect.width),
            y: (e.clientY - rect.top) * (600 / rect.height),
          })
        }}
        onMouseLeave={() => setHovered(null)}
      >
        <rect width="960" height="600" fill="#141c2e" opacity="0" />

        {Object.entries(statePaths).map(([code, path]) => {
          const isHovered = hovered === code
          const centroid = stateCentroids[code]
          const skipLabel = ['DC', 'RI', 'DE', 'CT', 'NJ', 'MD', 'MA', 'VT', 'NH']

          return (
            <g key={code}>
              <path
                d={path}
                fill={getStateFill(code, isHovered)}
                stroke={getStroke(code, isHovered)}
                strokeWidth={isHovered ? 1.5 : 0.5}
                style={{ transition: 'fill 0.1s ease', cursor: 'pointer' }}
                onMouseEnter={() => setHovered(code)}
                onClick={() => stateInfo[code] && router.push(`/states/${stateInfo[code].slug}`)}
              />
              {centroid && !skipLabel.includes(code) && (
                <text
                  x={centroid[0]} y={centroid[1] + 3}
                  textAnchor="middle"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: ['TX','CA','MT','AK'].includes(code) ? '9px' : '7px',
                    fontWeight: 700,
                    fill: stateInfo[code]?.active ? '#ffffff' : '#6a80a8',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    letterSpacing: '0.5px',
                  }}
                >
                  {code}
                </text>
              )}
            </g>
          )
        })}

        {/* NE state callout lines */}
        {[
          ['DC', 820, 325], ['RI', 870, 278], ['DE', 855, 303],
          ['CT', 855, 258], ['NJ', 868, 328], ['MD', 855, 343],
          ['MA', 868, 233], ['VT', 870, 208], ['NH', 870, 223],
        ].map(([code, ox, oy]) => {
          const c = stateCentroids[code as string]
          if (!c) return null
          return (
            <g key={code}>
              <line x1={c[0]} y1={c[1]} x2={(ox as number) - 16} y2={oy as number} stroke="#2a3d60" strokeWidth={0.5} />
              <text x={ox as number} y={(oy as number) + 3} textAnchor="start"
                style={{ fontFamily: "'Space Mono',monospace", fontSize: '7px', fontWeight: 700, fill: stateInfo[code as string]?.active ? '#ffffff' : '#6a80a8', pointerEvents: 'none', userSelect: 'none' }}>
                {code}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Legend */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', marginTop: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#ffffff', opacity: 0.6 }}>
          <div style={{ width: '18px', height: '12px', background: '#1E287F', border: '1px solid #3a5fd4' }} />
          Active — Live Monitoring
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#ffffff', opacity: 0.6 }}>
          <div style={{ width: '18px', height: '12px', background: '#1e2d4a', border: '1px solid #131d35' }} />
          Coming Soon — We Can Still Help
        </div>
      </div>
    </div>
  )
}
