import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Rhode Island Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Rhode Island. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "rhode-island",
  "name": "Rhode Island",
  "badge": "Rhode Island · All 5 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in Rhode Island.",
  "intro": "Courts, city offices, and state agencies in Rhode Island are holding funds belonging to former property owners and residents. RCG monitors all 5 Rhode Island counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "5",
      "label": "Counties Monitored"
    },
    {
      "val": "$290M",
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
    "tag": "Rhode Island Recovery",
    "title": "Recovery in Rhode Island. All 5 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Tax Sale Overages",
      "Rhode Island Unclaimed Property",
      "Estate and Heir Recovery",
      "Court-Held Excess Proceeds"
    ],
    "paragraphs": [
      "Rhode Island has 5 counties, though foreclosure and tax sale activity is administered primarily at the city and town level. Providence County, which includes the capital city of Providence, generates the highest volume of foreclosure surplus cases. Rhode Island is a non-judicial foreclosure state, and tax sales conducted by municipal collectors frequently produce surplus funds that must be claimed by the former owner.",
      "The Rhode Island Unclaimed Property Division, administered by the state General Treasurer, holds millions in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Rhode Island residents. RCG searches Rhode Island Superior Court records, municipal tax sale records, and state unclaimed property databases for every Rhode Island client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Rhode Island. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 5 Rhode Island Counties.",
      "intro": "RCG monitors foreclosure surplus funds, tax sale overages, and unclaimed property across every county in Rhode Island. If funds exist in your name in any Rhode Island county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Bristol",
        "Kent",
        "Newport",
        "Providence",
        "Washington"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Tax sale overages · Rhode Island unclaimed property · Estate and heir recovery · Excess proceeds from court sales, available across all 5 Rhode Island counties.",
  "ctaTitle": "Find Out What Rhode Island Is Holding in Your Name.",
  "ctaText": "We search Rhode Island court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function RhodeIslandPage() {
  return <StatePage {...data} />
}
