import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "New Mexico Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in New Mexico. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "new-mexico",
  "name": "New Mexico",
  "badge": "New Mexico · All 33 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in New Mexico.",
  "intro": "Courts, county treasurers, and state agencies in New Mexico are holding funds belonging to former property owners and residents. RCG monitors all 33 New Mexico counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "33",
      "label": "Counties Monitored"
    },
    {
      "val": "$340M",
      "label": "Unclaimed Funds Held"
    },
    {
      "val": "$0",
      "label": "Upfront Cost"
    },
    {
      "val": "60-90d",
      "label": "Avg. Claim Timeline"
    }
  ],
  "body": {
    "tag": "New Mexico Recovery",
    "title": "Recovery in New Mexico. All 33 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Judicial Sale Overages",
      "Tax Deed Excess Proceeds",
      "New Mexico Unclaimed Property",
      "Estate and Heir Recovery"
    ],
    "paragraphs": [
      "Bernalillo, Doña Ana, Santa Fe, and Sandoval counties generate the highest volume of New Mexico foreclosure surplus cases. New Mexico is a judicial foreclosure state, and sheriff sale surplus funds are deposited with the New Mexico district court clerk until claimed by the former owner. New Mexico tax deed sales conducted by county treasurers and the Property Tax Division can produce excess proceeds.",
      "The New Mexico Unclaimed Property Program, administered by the state Taxation and Revenue Department, holds millions in dormant bank accounts, insurance proceeds, uncashed checks, mineral royalty payments, and other assets belonging to New Mexico residents. RCG searches New Mexico district court records, county tax sale records, and state unclaimed property databases for every New Mexico client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in New Mexico. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 33 New Mexico Counties.",
      "intro": "RCG monitors foreclosure surplus funds, tax sale overages, and unclaimed property across every county in New Mexico. If funds exist in your name in any New Mexico county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Bernalillo",
        "Catron",
        "Chaves",
        "Cibola",
        "Colfax",
        "Curry",
        "De Baca",
        "Doña Ana",
        "Eddy",
        "Grant",
        "Guadalupe",
        "Harding",
        "Hidalgo",
        "Lea",
        "Lincoln",
        "Los Alamos",
        "Luna",
        "McKinley",
        "Mora",
        "Otero",
        "Quay",
        "Rio Arriba",
        "Roosevelt",
        "Sandoval",
        "San Juan",
        "San Miguel",
        "Santa Fe",
        "Sierra",
        "Socorro",
        "Taos",
        "Torrance",
        "Union",
        "Valencia"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Judicial sale overages · Tax deed excess proceeds · New Mexico unclaimed property · Estate and heir recovery, available across all 33 New Mexico counties.",
  "ctaTitle": "Find Out What New Mexico Is Holding in Your Name.",
  "ctaText": "We search New Mexico court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function NewMexicoPage() {
  return <StatePage {...data} />
}
