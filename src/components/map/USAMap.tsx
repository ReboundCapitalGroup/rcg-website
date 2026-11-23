'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { statePaths, stateCentroids } from './stateData'
import { L } from '@/lib/i18n'
import { useLang } from '@/lib/useLang'
import { stateEs } from '@/lib/stateNames'

const stateInfo: Record<string, { name: string; slug: string; funds: string; active: boolean; counties: number }> = {
  AL: { name: 'Alabama', slug: 'alabama', funds: '$892M', active: true, counties: 67 },
  AK: { name: 'Alaska', slug: 'alaska', funds: '$210M', active: true, counties: 30 },
  AZ: { name: 'Arizona', slug: 'arizona', funds: '$1.8B', active: true, counties: 15 },
  AR: { name: 'Arkansas', slug: 'arkansas', funds: '$421M', active: true, counties: 75 },
  CA: { name: 'California', slug: 'california', funds: '$15B', active: true, counties: 58 },
  CO: { name: 'Colorado', slug: 'colorado', funds: '$980M', active: true, counties: 64 },
  CT: { name: 'Connecticut', slug: 'connecticut', funds: '$940M', active: true, counties: 8 },
  DC: { name: 'Washington D.C.', slug: 'washington-dc', funds: '$180M', active: true, counties: 1 },
  DE: { name: 'Delaware', slug: 'delaware', funds: '$310M', active: true, counties: 3 },
  FL: { name: 'Florida', slug: 'florida', funds: '$2.4B', active: true, counties: 67 },
  GA: { name: 'Georgia', slug: 'georgia', funds: '$1.6B', active: true, counties: 159 },
  HI: { name: 'Hawaii', slug: 'hawaii', funds: '$290M', active: true, counties: 5 },
  ID: { name: 'Idaho', slug: 'idaho', funds: '$218M', active: true, counties: 44 },
  IL: { name: 'Illinois', slug: 'illinois', funds: '$3.2B', active: true, counties: 102 },
  IN: { name: 'Indiana', slug: 'indiana', funds: '$892M', active: true, counties: 92 },
  IA: { name: 'Iowa', slug: 'iowa', funds: '$412M', active: true, counties: 99 },
  KS: { name: 'Kansas', slug: 'kansas', funds: '$390M', active: true, counties: 105 },
  KY: { name: 'Kentucky', slug: 'kentucky', funds: '$580M', active: true, counties: 120 },
  LA: { name: 'Louisiana', slug: 'louisiana', funds: '$720M', active: true, counties: 64 },
  ME: { name: 'Maine', slug: 'maine', funds: '$310M', active: true, counties: 16 },
  MD: { name: 'Maryland', slug: 'maryland', funds: '$1.1B', active: true, counties: 24 },
  MA: { name: 'Massachusetts', slug: 'massachusetts', funds: '$2.4B', active: true, counties: 14 },
  MI: { name: 'Michigan', slug: 'michigan', funds: '$1.2B', active: true, counties: 83 },
  MN: { name: 'Minnesota', slug: 'minnesota', funds: '$1.0B', active: true, counties: 87 },
  MS: { name: 'Mississippi', slug: 'mississippi', funds: '$280M', active: true, counties: 82 },
  MO: { name: 'Missouri', slug: 'missouri', funds: '$890M', active: true, counties: 115 },
  MT: { name: 'Montana', slug: 'montana', funds: '$148M', active: true, counties: 56 },
  NE: { name: 'Nebraska', slug: 'nebraska', funds: '$310M', active: true, counties: 93 },
  NV: { name: 'Nevada', slug: 'nevada', funds: '$840M', active: true, counties: 17 },
  NH: { name: 'New Hampshire', slug: 'new-hampshire', funds: '$320M', active: true, counties: 10 },
  NJ: { name: 'New Jersey', slug: 'new-jersey', funds: '$2.8B', active: true, counties: 21 },
  NM: { name: 'New Mexico', slug: 'new-mexico', funds: '$340M', active: true, counties: 33 },
  NY: { name: 'New York', slug: 'new-york', funds: '$13B', active: true, counties: 62 },
  NC: { name: 'North Carolina', slug: 'north-carolina', funds: '$1.3B', active: true, counties: 100 },
  ND: { name: 'North Dakota', slug: 'north-dakota', funds: '$118M', active: true, counties: 53 },
  OH: { name: 'Ohio', slug: 'ohio', funds: '$4.8B', active: true, counties: 88 },
  OK: { name: 'Oklahoma', slug: 'oklahoma', funds: '$520M', active: true, counties: 77 },
  OR: { name: 'Oregon', slug: 'oregon', funds: '$780M', active: true, counties: 36 },
  PA: { name: 'Pennsylvania', slug: 'pennsylvania', funds: '$4.5B', active: true, counties: 67 },
  RI: { name: 'Rhode Island', slug: 'rhode-island', funds: '$290M', active: true, counties: 5 },
  SC: { name: 'South Carolina', slug: 'south-carolina', funds: '$620M', active: true, counties: 46 },
  SD: { name: 'South Dakota', slug: 'south-dakota', funds: '$112M', active: true, counties: 66 },
  TN: { name: 'Tennessee', slug: 'tennessee', funds: '$980M', active: true, counties: 95 },
  TX: { name: 'Texas', slug: 'texas', funds: '$10.5B', active: true, counties: 254 },
  UT: { name: 'Utah', slug: 'utah', funds: '$490M', active: true, counties: 29 },
  VT: { name: 'Vermont', slug: 'vermont', funds: '$150M', active: true, counties: 14 },
  VA: { name: 'Virginia', slug: 'virginia', funds: '$1.5B', active: true, counties: 95 },
  WA: { name: 'Washington', slug: 'washington', funds: '$1.4B', active: true, counties: 39 },
  WV: { name: 'West Virginia', slug: 'west-virginia', funds: '$280M', active: true, counties: 55 },
  WI: { name: 'Wisconsin', slug: 'wisconsin', funds: '$890M', active: true, counties: 72 },
  WY: { name: 'Wyoming', slug: 'wyoming', funds: '$98M', active: true, counties: 23 },
}

// Small Northeast states get their label outside the map, in a tidy column
// on the right, with a thin line back to the state.
const CALLOUTS: [string, number][] = [
  ['VT', 118], ['NH', 134], ['MA', 166], ['RI', 182], ['CT', 198],
  ['NJ', 222], ['DE', 242], ['MD', 258], ['DC', 274],
]
const CALLOUT_X = 938

// Better label spots where the computed center lands on a border or in the sea.
const LABEL_POS: Record<string, [number, number]> = { FL: [790, 532], LA: [553, 462], HI: [262, 548] }
const LABEL_OUTSIDE = ['HI']

const FILL = '#1E287F'
const FILL_HOVER = '#5b8ae6'

export default function USAMap() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0, w: 0 })
  const router = useRouter()
  const lang = useLang()
  const es = lang === 'es'

  const hInfo = hovered ? stateInfo[hovered] : null
  const go = (code: string) => stateInfo[code] && router.push(L(lang, `/states/${stateInfo[code].slug}`))

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {hovered && hInfo && (
        <div style={{
          position: 'absolute',
          left: Math.min(mouse.x + 16, Math.max(mouse.w - 230, 0)),
          top: Math.max(mouse.y - 110, 0),
          background: '#fff',
          border: '1px solid rgba(13,19,34,0.08)',
          borderRadius: 12,
          padding: '14px 18px',
          pointerEvents: 'none',
          zIndex: 20,
          minWidth: 210,
          boxShadow: '0 18px 40px rgba(13,19,34,0.16)',
          color: '#0d1322',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1E287F', marginBottom: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5b8ae6' }} />
            {es ? 'Cubierto en todo el estado' : 'Covered statewide'}
          </div>
          <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 4 }}>{es ? stateEs(hInfo.name) : hInfo.name}</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 30, lineHeight: 1.1, color: '#1E287F' }}>{hInfo.funds}</span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7390' }}>{es ? 'no reclamado' : 'unclaimed'}</span>
          </div>
          <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid rgba(13,19,34,0.08)', fontSize: 12, fontWeight: 700, color: '#1E287F' }}>
            {es ? 'Haga clic para ver la guía del estado →' : 'Click to view state guide →'}
          </div>
        </div>
      )}

      <svg
        viewBox="0 0 980 600"
        role="img"
        aria-label={es ? 'Mapa de Estados Unidos. Los 50 estados están cubiertos.' : 'Map of the United States. All 50 states are covered.'}
        style={{ width: '100%', height: 'auto', display: 'block', cursor: 'pointer', filter: 'drop-shadow(0 18px 30px rgba(13,19,34,0.14))', overflow: 'visible' }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, w: rect.width })
        }}
        onMouseLeave={() => setHovered(null)}
      >
        {Object.entries(statePaths).map(([code, path]) => (
          <path
            key={code}
            d={path}
            fill={hovered === code ? FILL_HOVER : FILL}
            stroke="#F9F8F6"
            strokeWidth={hovered === code ? 1.6 : 0.9}
            strokeLinejoin="round"
            style={{ transition: 'fill 0.15s ease', cursor: 'pointer' }}
            onMouseEnter={() => setHovered(code)}
            onClick={() => go(code)}
          />
        ))}

        {/* Labels inside the bigger states */}
        {Object.keys(statePaths).map((code) => {
          const c = LABEL_POS[code] || stateCentroids[code]
          if (!c || CALLOUTS.some(([k]) => k === code)) return null
          const outside = LABEL_OUTSIDE.includes(code)
          return (
            <text key={code} x={c[0]} y={c[1] + 3} textAnchor="middle"
              style={{ fontFamily: 'inherit', fontSize: ['TX', 'CA', 'MT', 'AK'].includes(code) ? 11 : outside ? 10 : 9, fontWeight: 800, letterSpacing: '0.06em', fill: outside ? (hovered === code ? FILL_HOVER : FILL) : '#fff', pointerEvents: 'none', userSelect: 'none' }}>
              {code}
            </text>
          )
        })}

        {/* Small Northeast states: labels in a column to the right */}
        {CALLOUTS.map(([code, y]) => {
          const c = stateCentroids[code]
          if (!c) return null
          const on = hovered === code
          return (
            <g key={code} style={{ cursor: 'pointer' }} onMouseEnter={() => setHovered(code)} onClick={() => go(code)}>
              <line x1={c[0]} y1={c[1]} x2={CALLOUT_X - 6} y2={y} stroke={on ? FILL_HOVER : 'rgba(30,40,127,0.35)'} strokeWidth={0.8} />
              <circle cx={c[0]} cy={c[1]} r={1.6} fill={on ? FILL_HOVER : '#fff'} />
              <text x={CALLOUT_X} y={y + 3.5} textAnchor="start"
                style={{ fontFamily: 'inherit', fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', fill: on ? FILL_HOVER : FILL, userSelect: 'none' }}>
                {code}
              </text>
            </g>
          )
        })}
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 18, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1E287F', textAlign: 'center' }}>
        <span style={{ width: 18, height: 12, borderRadius: 3, background: FILL, flexShrink: 0 }} />
        {es ? 'Los 50 estados cubiertos · más de 1,000 sistemas de condados vigilados' : 'All 50 states covered · 1,000+ county systems monitored'}
      </div>
    </div>
  )
}
