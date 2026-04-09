'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { statePaths, stateCentroids } from './stateData'

const stateInfo: Record<string, { name: string; slug: string; deadline: string; active: boolean; attorney: boolean }> = {
  AL: { name: 'Alabama', slug: 'alabama', deadline: '3 years', active: false, attorney: false },
  AK: { name: 'Alaska', slug: 'alaska', deadline: '10 years', active: false, attorney: false },
  AZ: { name: 'Arizona', slug: 'arizona', deadline: '3 years', active: true, attorney: false },
  AR: { name: 'Arkansas', slug: 'arkansas', deadline: '5 years', active: false, attorney: false },
  CA: { name: 'California', slug: 'california', deadline: '1 year', active: false, attorney: true },
  CO: { name: 'Colorado', slug: 'colorado', deadline: '2.5 years', active: true, attorney: false },
  CT: { name: 'Connecticut', slug: 'connecticut', deadline: '3 years', active: false, attorney: false },
  DC: { name: 'Washington D.C.', slug: 'washington-dc', deadline: '3 years', active: false, attorney: false },
  DE: { name: 'Delaware', slug: 'delaware', deadline: '5 years', active: false, attorney: false },
  FL: { name: 'Florida', slug: 'florida', deadline: '60 days', active: true, attorney: false },
  GA: { name: 'Georgia', slug: 'georgia', deadline: '5 years', active: false, attorney: false },
  HI: { name: 'Hawaii', slug: 'hawaii', deadline: '10 years', active: false, attorney: false },
  ID: { name: 'Idaho', slug: 'idaho', deadline: '3 years', active: false, attorney: false },
  IL: { name: 'Illinois', slug: 'illinois', deadline: '7 years', active: false, attorney: true },
  IN: { name: 'Indiana', slug: 'indiana', deadline: '3 years', active: false, attorney: false },
  IA: { name: 'Iowa', slug: 'iowa', deadline: '10 years', active: false, attorney: false },
  KS: { name: 'Kansas', slug: 'kansas', deadline: '5 years', active: false, attorney: false },
  KY: { name: 'Kentucky', slug: 'kentucky', deadline: '5 years', active: false, attorney: false },
  LA: { name: 'Louisiana', slug: 'louisiana', deadline: '5 years', active: false, attorney: false },
  ME: { name: 'Maine', slug: 'maine', deadline: '6 years', active: false, attorney: false },
  MD: { name: 'Maryland', slug: 'maryland', deadline: '3 years', active: false, attorney: false },
  MA: { name: 'Massachusetts', slug: 'massachusetts', deadline: '3 years', active: false, attorney: true },
  MI: { name: 'Michigan', slug: 'michigan', deadline: '1 year', active: true, attorney: false },
  MN: { name: 'Minnesota', slug: 'minnesota', deadline: '5 years', active: false, attorney: false },
  MS: { name: 'Mississippi', slug: 'mississippi', deadline: '3 years', active: false, attorney: false },
  MO: { name: 'Missouri', slug: 'missouri', deadline: '10 years', active: false, attorney: false },
  MT: { name: 'Montana', slug: 'montana', deadline: '5 years', active: false, attorney: false },
  NE: { name: 'Nebraska', slug: 'nebraska', deadline: '5 years', active: false, attorney: false },
  NV: { name: 'Nevada', slug: 'nevada', deadline: '1 year', active: false, attorney: false },
  NH: { name: 'New Hampshire', slug: 'new-hampshire', deadline: '3 years', active: false, attorney: false },
  NJ: { name: 'New Jersey', slug: 'new-jersey', deadline: '3 years', active: false, attorney: false },
  NM: { name: 'New Mexico', slug: 'new-mexico', deadline: '9 months', active: false, attorney: false },
  NY: { name: 'New York', slug: 'new-york', deadline: '3 years', active: false, attorney: true },
  NC: { name: 'North Carolina', slug: 'north-carolina', deadline: '3 years', active: false, attorney: false },
  ND: { name: 'North Dakota', slug: 'north-dakota', deadline: '10 years', active: false, attorney: false },
  OH: { name: 'Ohio', slug: 'ohio', deadline: '5 years', active: true, attorney: false },
  OK: { name: 'Oklahoma', slug: 'oklahoma', deadline: '5 years', active: false, attorney: false },
  OR: { name: 'Oregon', slug: 'oregon', deadline: '5 years', active: false, attorney: false },
  PA: { name: 'Pennsylvania', slug: 'pennsylvania', deadline: '2 years', active: false, attorney: true },
  RI: { name: 'Rhode Island', slug: 'rhode-island', deadline: '3 years', active: false, attorney: false },
  SC: { name: 'South Carolina', slug: 'south-carolina', deadline: '5 years', active: false, attorney: false },
  SD: { name: 'South Dakota', slug: 'south-dakota', deadline: '6 years', active: false, attorney: false },
  TN: { name: 'Tennessee', slug: 'tennessee', deadline: '2 years', active: false, attorney: false },
  TX: { name: 'Texas', slug: 'texas', deadline: '2 years', active: false, attorney: false },
  UT: { name: 'Utah', slug: 'utah', deadline: '3 years', active: false, attorney: false },
  VT: { name: 'Vermont', slug: 'vermont', deadline: '6 years', active: false, attorney: false },
  VA: { name: 'Virginia', slug: 'virginia', deadline: '2 years', active: false, attorney: false },
  WA: { name: 'Washington', slug: 'washington', deadline: '3 years', active: false, attorney: false },
  WV: { name: 'West Virginia', slug: 'west-virginia', deadline: '10 years', active: false, attorney: false },
  WI: { name: 'Wisconsin', slug: 'wisconsin', deadline: '3 years', active: false, attorney: false },
  WY: { name: 'Wyoming', slug: 'wyoming', deadline: '5 years', active: false, attorney: false },
}

const urgentDeadlines = new Set(['60 days', '9 months', '1 year'])

export default function USAMap() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 })
  const router = useRouter()

  const getStateFill = (code: string, isHovered: boolean) => {
    const info = stateInfo[code]
    if (!info) return '#2a3350'
    if (isHovered) return info.active ? '#2a40c0' : '#3d4f72'
    return info.active ? '#1E287F' : '#243055'
  }

  const getStroke = (code: string, isHovered: boolean) => {
    if (isHovered) return '#8fa3f0'
    return stateInfo[code]?.active ? '#3a5fd4' : '#1a2540'
  }

  const hInfo = hovered ? stateInfo[hovered] : null

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Tooltip */}
      {hovered && hInfo && (
        <div style={{
          position: 'absolute',
          left: Math.min(tooltip.x + 12, 820),
          top: Math.max(tooltip.y - 80, 0),
          background: '#0d1220',
          border: '1px solid rgba(30,40,127,0.7)',
          padding: '12px 16px',
          pointerEvents: 'none',
          zIndex: 20,
          minWidth: '190px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
        }}>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '14px', color: '#fff', marginBottom: '6px' }}>
            {hInfo.name}
          </div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', color: '#8fa3f0', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>
            Claim Deadline:{' '}
            <span style={{ color: urgentDeadlines.has(hInfo.deadline) ? '#f0a500' : '#c8d8ff' }}>
              {hInfo.deadline}
            </span>
          </div>
          {hInfo.attorney && (
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', color: '#f0a500', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>
              ⚠ Attorney Required
            </div>
          )}
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '6px', color: hInfo.active ? '#4a6fd4' : '#4a5890' }}>
            {hInfo.active ? '● Active — Live Court Monitoring' : '○ Coming Soon — Expanding Nationwide'}
          </div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '8px', color: '#1E287F', marginTop: '6px', letterSpacing: '0.5px' }}>
            Click to view state guide →
          </div>
        </div>
      )}

      <svg
        viewBox="0 0 960 600"
        style={{ width: '100%', height: 'auto', display: 'block', cursor: 'pointer' }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const scaleX = 960 / rect.width
          const scaleY = 600 / rect.height
          setTooltip({
            x: (e.clientX - rect.left) / scaleX * (rect.width / 960),
            y: (e.clientY - rect.top) / scaleY * (rect.height / 600),
          })
        }}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Dark background */}
        <rect width="960" height="600" fill="#111827" />

        {/* Render all states */}
        {Object.entries(statePaths).map(([code, path]) => {
          const isHovered = hovered === code
          const info = stateInfo[code]
          const centroid = stateCentroids[code]

          // Skip tiny states that overlap badly at this zoom
          const skipLabel = ['DC', 'RI', 'DE', 'CT', 'NJ', 'MD', 'MA', 'VT', 'NH']

          return (
            <g key={code}>
              <path
                d={path}
                fill={getStateFill(code, isHovered)}
                stroke={getStroke(code, isHovered)}
                strokeWidth={isHovered ? 1.5 : 0.5}
                style={{ transition: 'fill 0.12s ease', cursor: 'pointer' }}
                onMouseEnter={() => setHovered(code)}
                onClick={() => info && router.push(`/states/${info.slug}`)}
              />
              {/* State label — skip tiny NE states */}
              {centroid && !skipLabel.includes(code) && (
                <text
                  x={centroid[0]}
                  y={centroid[1] + 3}
                  textAnchor="middle"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: code === 'AK' || code === 'TX' || code === 'CA' || code === 'MT' ? '9px' : '7px',
                    fontWeight: 700,
                    fill: info?.active ? '#c8d8ff' : isHovered ? '#e8edf8' : '#6a80b0',
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

        {/* Small NE state callout lines */}
        {['DC', 'RI', 'DE', 'CT', 'NJ', 'MD', 'MA', 'VT', 'NH'].map(code => {
          const c = stateCentroids[code]
          if (!c) return null
          const info = stateInfo[code]
          // Label positions offset to the right
          const offsets: Record<string, [number,number]> = {
            DC: [820, 325], RI: [870, 280], DE: [855, 305], CT: [855, 260],
            NJ: [865, 330], MD: [855, 345], MA: [865, 235], VT: [870, 210], NH: [870, 225],
          }
          const off = offsets[code]
          if (!off) return null
          return (
            <g key={code}>
              <line x1={c[0]} y1={c[1]} x2={off[0] - 18} y2={off[1]} stroke="#2a3a60" strokeWidth={0.5} />
              <text x={off[0]} y={off[1] + 3} textAnchor="start"
                style={{ fontFamily: "'Space Mono',monospace", fontSize: '7px', fontWeight: 700, fill: info?.active ? '#c8d8ff' : '#6a80b0', pointerEvents: 'none', userSelect: 'none' }}>
                {code}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Legend */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', marginTop: '16px', flexWrap: 'wrap' }}>
        {[
          { color: '#1E287F', border: '#3a5fd4', label: 'Active — Live Monitoring' },
          { color: '#243055', border: '#1a2540', label: 'Coming Soon' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: '#5a6890' }}>
            <div style={{ width: '18px', height: '12px', background: item.color, border: `1px solid ${item.border}`, flexShrink: 0 }} />
            {item.label}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: '#5a6890' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f0a500', flexShrink: 0 }} />
          Urgent Deadline
        </div>
      </div>
    </div>
  )
}
