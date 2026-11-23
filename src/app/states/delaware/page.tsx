import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Delaware Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Delaware. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "delaware",
  "name": "Delaware",
  "badge": "Delaware · All 3 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in Delaware.",
  "intro": "Courts, county clerks, and state agencies in Delaware are holding funds belonging to former property owners and residents. RCG monitors all 3 Delaware counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "3",
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
    "tag": "Delaware Recovery",
    "title": "Recovery in Delaware. All 3 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Sheriff Sale Overages",
      "Delaware Unclaimed Property",
      "Estate and Heir Recovery",
      "Court-Held Excess Proceeds"
    ],
    "paragraphs": [
      "Delaware has just three counties covering the entire state. New Castle County, which includes Wilmington, generates the highest volume of foreclosure surplus cases. Delaware sheriff sales are conducted monthly in each county and frequently produce surplus funds held by the Prothonotary office until claimed.",
      "The Delaware Office of Unclaimed Property holds millions in dormant bank accounts, insurance proceeds, uncashed checks, and corporate distributions. As the state of incorporation for more than half of U.S. public companies, Delaware is a major holder of business-related unclaimed assets. RCG searches Delaware Superior Court records and state unclaimed property databases for every Delaware client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Delaware. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 3 Delaware Counties.",
      "intro": "RCG monitors foreclosure surplus funds, sheriff sale overages, and unclaimed property across every county in Delaware. If funds exist in your name in any Delaware county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Kent",
        "New Castle",
        "Sussex"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Sheriff sale overages · Delaware unclaimed property · Estate and heir recovery · Excess proceeds from court sales, available across all 3 Delaware counties.",
  "ctaTitle": "Find Out What Delaware Is Holding in Your Name.",
  "ctaText": "We search Delaware court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function DelawarePage() {
  return <StatePage {...data} />
}
