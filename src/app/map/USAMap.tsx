'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const stateData: Record<string, { name: string; slug: string; deadline: string; active: boolean; attorney: boolean }> = {
  AL: { name: 'Alabama', slug: 'alabama', deadline: '3 years', active: false, attorney: false },
  AK: { name: 'Alaska', slug: 'alaska', deadline: '10 years', active: false, attorney: false },
  AZ: { name: 'Arizona', slug: 'arizona', deadline: '3 years', active: true, attorney: false },
  AR: { name: 'Arkansas', slug: 'arkansas', deadline: '5 years', active: false, attorney: false },
  CA: { name: 'California', slug: 'california', deadline: '1 year', active: false, attorney: true },
  CO: { name: 'Colorado', slug: 'colorado', deadline: '2.5 years', active: true, attorney: false },
  CT: { name: 'Connecticut', slug: 'connecticut', deadline: '3 years', active: false, attorney: false },
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
  MI: { name: 'Michigan', slug: 'michigan', deadline: '1 year', active: false, attorney: false },
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
  OH: { name: 'Ohio', slug: 'ohio', deadline: '5 years', active: false, attorney: false },
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
  DC: { name: 'Washington D.C.', slug: 'washington-dc', deadline: '3 years', active: false, attorney: false },
}

// Standard US state SVG paths (Albers projection, ~960x600 viewBox)
const statePaths: Record<string, string> = {
  AL: "M 618 365 L 624 371 L 626 391 L 625 430 L 619 430 L 604 440 L 598 440 L 596 430 L 593 374 L 593 365 Z",
  AK: "M 110 460 L 130 450 L 150 455 L 165 445 L 180 450 L 170 465 L 155 470 L 140 475 L 120 470 Z",
  AZ: "M 185 335 L 230 340 L 265 340 L 265 380 L 265 410 L 220 410 L 185 405 L 170 370 Z",
  AR: "M 565 335 L 605 335 L 617 360 L 595 365 L 564 365 Z",
  CA: "M 115 250 L 140 255 L 165 275 L 175 310 L 180 345 L 165 375 L 140 400 L 120 390 L 100 360 L 95 320 L 105 280 Z",
  CO: "M 295 285 L 395 283 L 400 340 L 295 342 Z",
  CT: "M 795 210 L 815 208 L 818 225 L 798 228 Z",
  DE: "M 773 238 L 783 235 L 787 255 L 777 260 Z",
  FL: "M 615 430 L 660 435 L 695 445 L 715 460 L 720 490 L 700 510 L 680 520 L 655 515 L 640 495 L 625 470 L 615 450 Z",
  GA: "M 627 370 L 665 365 L 675 390 L 668 430 L 648 435 L 627 430 Z",
  HI: "M 230 500 L 255 495 L 260 510 L 240 515 Z",
  ID: "M 195 175 L 230 165 L 255 185 L 255 240 L 235 255 L 210 250 L 195 225 Z",
  IL: "M 580 260 L 608 258 L 615 295 L 612 330 L 595 335 L 580 315 Z",
  IN: "M 612 255 L 635 253 L 640 295 L 635 310 L 612 310 L 610 280 Z",
  IA: "M 530 230 L 580 228 L 583 258 L 533 262 Z",
  KS: "M 430 300 L 535 297 L 537 335 L 430 335 Z",
  KY: "M 612 305 L 670 300 L 685 315 L 680 335 L 613 335 L 612 318 Z",
  LA: "M 555 400 L 600 395 L 615 410 L 610 435 L 585 445 L 558 435 Z",
  ME: "M 830 155 L 855 145 L 865 165 L 850 185 L 835 180 Z",
  MD: "M 735 263 L 775 255 L 780 272 L 758 280 L 740 278 Z",
  MA: "M 800 195 L 840 188 L 845 205 L 820 212 L 800 208 Z",
  MI: "M 615 195 L 650 185 L 670 210 L 655 235 L 635 240 L 615 225 Z",
  MN: "M 500 155 L 545 148 L 558 185 L 560 228 L 532 230 L 502 220 Z",
  MS: "M 583 365 L 615 360 L 618 395 L 617 430 L 597 435 L 582 415 Z",
  MO: "M 535 295 L 580 290 L 615 295 L 615 335 L 572 338 L 538 335 Z",
  MT: "M 210 150 L 355 145 L 360 205 L 215 210 Z",
  NE: "M 415 258 L 530 252 L 533 295 L 420 295 Z",
  NV: "M 162 240 L 200 235 L 225 265 L 215 335 L 195 360 L 165 345 L 155 295 Z",
  NH: "M 808 175 L 822 170 L 826 205 L 815 210 L 808 195 Z",
  NJ: "M 768 232 L 782 228 L 790 248 L 775 258 L 768 248 Z",
  NM: "M 265 340 L 355 337 L 358 405 L 268 408 Z",
  NY: "M 735 195 L 800 185 L 808 210 L 795 225 L 758 232 L 740 220 Z",
  NC: "M 672 318 L 745 308 L 755 328 L 685 335 L 675 332 Z",
  ND: "M 415 155 L 503 150 L 505 195 L 418 198 Z",
  OH: "M 640 248 L 688 242 L 695 280 L 685 305 L 648 300 L 638 272 Z",
  OK: "M 420 338 L 537 333 L 565 335 L 565 370 L 420 370 Z",
  OR: "M 125 185 L 200 178 L 225 205 L 212 250 L 165 258 L 130 240 Z",
  PA: "M 698 225 L 765 215 L 768 248 L 700 255 L 695 242 Z",
  RI: "M 820 210 L 832 207 L 834 220 L 822 222 Z",
  SC: "M 668 338 L 710 328 L 720 350 L 700 370 L 675 368 Z",
  SD: "M 415 198 L 503 192 L 505 248 L 417 252 Z",
  TN: "M 613 335 L 685 325 L 700 335 L 695 355 L 617 360 L 613 350 Z",
  TX: "M 355 340 L 438 335 L 565 368 L 565 410 L 530 455 L 480 465 L 440 440 L 400 420 L 358 400 Z",
  UT: "M 240 255 L 297 250 L 300 335 L 268 338 L 242 318 Z",
  VT: "M 795 168 L 810 162 L 814 193 L 800 197 L 795 182 Z",
  VA: "M 698 280 L 755 268 L 773 288 L 758 308 L 710 315 L 695 302 Z",
  WA: "M 130 145 L 210 138 L 215 178 L 165 185 L 130 175 Z",
  WV: "M 688 268 L 720 258 L 732 278 L 718 300 L 695 302 L 683 285 Z",
  WI: "M 555 188 L 600 182 L 615 218 L 608 252 L 562 255 L 555 225 Z",
  WY: "M 295 208 L 397 203 L 400 258 L 298 262 Z",
  DC: "M 762 268 L 770 263 L 774 272 L 766 276 Z",
}

// Label positions for state abbreviations
const stateLabels: Record<string, [number, number]> = {
  AL: [611, 400], AK: [140, 462], AZ: [218, 380], AR: [583, 350], CA: [138, 330],
  CO: [346, 312], CT: [805, 218], DE: [780, 248], FL: [665, 470], GA: [648, 402],
  HI: [245, 506], ID: [225, 215], IL: [596, 295], IN: [624, 282], IA: [554, 244],
  KS: [483, 317], KY: [647, 318], LA: [582, 418], ME: [846, 165], MD: [757, 268],
  MA: [822, 200], MI: [640, 215], MN: [530, 188], MS: [598, 398], MO: [577, 315],
  MT: [283, 178], NE: [474, 273], NV: [185, 295], NH: [816, 190], NJ: [779, 242],
  NM: [310, 375], NY: [768, 208], NC: [712, 322], ND: [460, 175], OH: [665, 275],
  OK: [492, 352], OR: [168, 218], PA: [730, 235], RI: [826, 214], SC: [692, 352],
  SD: [460, 222], TN: [655, 345], TX: [460, 400], UT: [268, 295], VT: [804, 182],
  VA: [728, 292], WA: [170, 160], WV: [708, 282], WI: [582, 220], WY: [347, 232], DC: [766, 270],
}

export default function USAMap() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState({ x: 0, y: 0, visible: false })
  const router = useRouter()

  const handleClick = (code: string) => {
    const s = stateData[code]
    if (s) router.push(`/states/${s.slug}`)
  }

  const handleMouseMove = (e: React.MouseEvent<SVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 60,
      visible: true,
    })
  }

  const getColor = (code: string, isHovered: boolean) => {
    const s = stateData[code]
    if (!s) return '#2a3350'
    if (isHovered) return s.active ? '#2a3aaf' : '#3a4560'
    return s.active ? '#1E287F' : '#2a3350'
  }

  const getStroke = (code: string, isHovered: boolean) => {
    if (isHovered) return '#8fa3f0'
    return stateData[code]?.active ? '#4a6fd4' : '#1a2040'
  }

  const hState = hovered ? stateData[hovered] : null

  return (
    <div style={{ position: 'relative', width: '100%', background: 'transparent' }}>
      {/* Tooltip */}
      {hovered && hState && tooltip.visible && (
        <div style={{
          position: 'absolute',
          left: tooltip.x + 10,
          top: tooltip.y,
          background: '#0a0f1e',
          border: '1px solid rgba(30,40,127,0.6)',
          padding: '10px 14px',
          pointerEvents: 'none',
          zIndex: 10,
          minWidth: '180px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '13px', color: '#fff', marginBottom: '4px' }}>
            {hState.name}
          </div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: '#8fa3f0', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Deadline: <span style={{ color: hState.deadline === '60 days' || hState.deadline === '9 months' ? '#f0a500' : '#c8d8ff' }}>{hState.deadline}</span>
          </div>
          {hState.attorney && (
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: '#f0a500', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '2px' }}>
              Attorney Required
            </div>
          )}
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px', color: hState.active ? '#4a6fd4' : '#5a6890' }}>
            {hState.active ? '● Active — Live Monitoring' : '○ Available'}
          </div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: '#1E287F', marginTop: '6px', letterSpacing: '0.5px' }}>
            Click to view guide →
          </div>
        </div>
      )}

      <svg
        viewBox="80 130 900 420"
        style={{ width: '100%', height: 'auto', cursor: 'pointer', display: 'block' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { setHovered(null); setTooltip(t => ({ ...t, visible: false })) }}
      >
        {/* Ocean background */}
        <rect x="80" y="130" width="900" height="420" fill="#111827" rx="4" />

        {/* State paths */}
        {Object.entries(statePaths).map(([code, path]) => {
          const isHovered = hovered === code
          return (
            <g key={code}>
              <path
                d={path}
                fill={getColor(code, isHovered)}
                stroke={getStroke(code, isHovered)}
                strokeWidth={isHovered ? 1.5 : 0.8}
                style={{ transition: 'fill 0.15s, stroke 0.15s', filter: isHovered ? 'brightness(1.2)' : 'none' }}
                onMouseEnter={() => setHovered(code)}
                onClick={() => handleClick(code)}
              />
              {/* Active state glow */}
              {stateData[code]?.active && !isHovered && (
                <path
                  d={path}
                  fill="none"
                  stroke="#1E287F"
                  strokeWidth={1.5}
                  opacity={0.6}
                  pointerEvents="none"
                />
              )}
              {/* State label */}
              {stateLabels[code] && (
                <text
                  x={stateLabels[code][0]}
                  y={stateLabels[code][1]}
                  textAnchor="middle"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: code === 'DC' ? '5px' : code === 'RI' || code === 'CT' || code === 'DE' || code === 'NJ' ? '6px' : '7px',
                    fontWeight: 700,
                    fill: stateData[code]?.active ? '#c8d8ff' : (isHovered ? '#e8edf8' : '#8fa3f0'),
                    pointerEvents: 'none',
                    letterSpacing: '0.3px',
                    userSelect: 'none',
                  }}
                >
                  {code}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {/* Legend */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', marginTop: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: '#5a6890' }}>
          <div style={{ width: '16px', height: '12px', background: '#1E287F', border: '1px solid #4a6fd4', flexShrink: 0 }} />
          Active — Live Monitoring
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: '#5a6890' }}>
          <div style={{ width: '16px', height: '12px', background: '#2a3350', border: '1px solid #1a2040', flexShrink: 0 }} />
          Available — We Recover
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: '#5a6890' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f0a500', flexShrink: 0 }} />
          Urgent Deadline
        </div>
      </div>
    </div>
  )
}
