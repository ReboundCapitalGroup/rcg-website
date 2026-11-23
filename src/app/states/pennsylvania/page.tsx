import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Pennsylvania Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Pennsylvania. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "pennsylvania",
  "name": "Pennsylvania",
  "badge": "Pennsylvania · All 67 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in Pennsylvania.",
  "intro": "Courts, sheriffs, and state agencies in Pennsylvania are holding billions in funds belonging to former property owners and residents. RCG monitors all 67 Pennsylvania counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "67",
      "label": "Counties Monitored"
    },
    {
      "val": "$4.5B",
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
    "tag": "Pennsylvania Recovery",
    "title": "Recovery in Pennsylvania. All 67 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Sheriff Sale Overages",
      "Upset Tax Sale Excess",
      "Pennsylvania Unclaimed Property",
      "Estate and Heir Recovery"
    ],
    "paragraphs": [
      "Philadelphia, Allegheny (Pittsburgh), Montgomery, and Bucks counties generate the highest volume of Pennsylvania foreclosure surplus cases. Pennsylvania is a judicial foreclosure state, and sheriff sale surplus funds are deposited with the Pennsylvania Court of Common Pleas until claimed by the former owner. Pennsylvania also conducts Upset Tax Sales and Judicial Tax Sales through county tax claim bureaus, both of which can produce excess proceeds recoverable by the former property owner.",
      "The Pennsylvania Treasury Unclaimed Property Program, administered by the State Treasurer, holds over $4.5 billion in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Pennsylvania residents, one of the largest unclaimed property pools in the country. RCG searches Pennsylvania Court of Common Pleas records, county sheriff sale records, tax claim bureau records, and state unclaimed property databases for every Pennsylvania client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Pennsylvania. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 67 Pennsylvania Counties.",
      "intro": "RCG monitors foreclosure surplus funds, sheriff sale overages, and unclaimed property across every county in Pennsylvania. If funds exist in your name in any Pennsylvania county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Adams",
        "Allegheny",
        "Armstrong",
        "Beaver",
        "Bedford",
        "Berks",
        "Blair",
        "Bradford",
        "Bucks",
        "Butler",
        "Cambria",
        "Cameron",
        "Carbon",
        "Centre",
        "Chester",
        "Clarion",
        "Clearfield",
        "Clinton",
        "Columbia",
        "Crawford",
        "Cumberland",
        "Dauphin",
        "Delaware",
        "Elk",
        "Erie",
        "Fayette",
        "Forest",
        "Franklin",
        "Fulton",
        "Greene",
        "Huntingdon",
        "Indiana",
        "Jefferson",
        "Juniata",
        "Lackawanna",
        "Lancaster",
        "Lawrence",
        "Lebanon",
        "Lehigh",
        "Luzerne",
        "Lycoming",
        "McKean",
        "Mercer",
        "Mifflin",
        "Monroe",
        "Montgomery",
        "Montour",
        "Northampton",
        "Northumberland",
        "Perry",
        "Philadelphia",
        "Pike",
        "Potter",
        "Schuylkill",
        "Snyder",
        "Somerset",
        "Sullivan",
        "Susquehanna",
        "Tioga",
        "Union",
        "Venango",
        "Warren",
        "Washington",
        "Wayne",
        "Westmoreland",
        "Wyoming",
        "York"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Sheriff sale overages · Upset tax sale excess · Pennsylvania unclaimed property · Estate and heir recovery, available across all 67 Pennsylvania counties.",
  "ctaTitle": "Find Out What Pennsylvania Is Holding in Your Name.",
  "ctaText": "We search Pennsylvania court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function PennsylvaniaPage() {
  return <StatePage {...data} />
}
