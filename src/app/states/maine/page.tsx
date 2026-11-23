import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Maine Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Maine. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "maine",
  "name": "Maine",
  "badge": "Maine · All 16 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in Maine.",
  "intro": "Courts, town offices, and state agencies in Maine are holding funds belonging to former property owners and residents. RCG monitors all 16 Maine counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "16",
      "label": "Counties Monitored"
    },
    {
      "val": "$310M",
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
    "tag": "Maine Recovery",
    "title": "Recovery in Maine. All 16 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Tax Acquired Property Sales",
      "Maine Unclaimed Property",
      "Estate and Heir Recovery",
      "Court-Held Excess Proceeds"
    ],
    "paragraphs": [
      "Cumberland, York, and Penobscot counties generate the highest volume of Maine foreclosure surplus cases. Maine uses a judicial foreclosure process, and surplus funds from foreclosure sales are held by the Maine Superior Court until claimed by the former owner. Tax acquired property sales conducted by municipalities can also produce excess proceeds.",
      "The Maine Unclaimed Property Division, administered by the state Treasurer, holds millions in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Maine residents. RCG searches Maine Superior Court records, municipal tax sale records, and state unclaimed property databases for every Maine client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Maine. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 16 Maine Counties.",
      "intro": "RCG monitors foreclosure surplus funds, tax sale overages, and unclaimed property across every county in Maine. If funds exist in your name in any Maine county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Androscoggin",
        "Aroostook",
        "Cumberland",
        "Franklin",
        "Hancock",
        "Kennebec",
        "Knox",
        "Lincoln",
        "Oxford",
        "Penobscot",
        "Piscataquis",
        "Sagadahoc",
        "Somerset",
        "Waldo",
        "Washington",
        "York"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Tax acquired property overages · Maine unclaimed property · Estate and heir recovery · Excess proceeds from court sales, available across all 16 Maine counties.",
  "ctaTitle": "Find Out What Maine Is Holding in Your Name.",
  "ctaText": "We search Maine court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function MainePage() {
  return <StatePage {...data} />
}
