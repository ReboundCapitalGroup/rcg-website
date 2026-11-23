import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Connecticut Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Connecticut. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "connecticut",
  "name": "Connecticut",
  "badge": "Connecticut · All 8 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in Connecticut.",
  "intro": "Courts, town offices, and state agencies in Connecticut are holding funds belonging to former property owners and residents. RCG monitors all 8 Connecticut counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "8",
      "label": "Counties Monitored"
    },
    {
      "val": "$940M",
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
    "tag": "Connecticut Recovery",
    "title": "Recovery in Connecticut. All 8 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Strict Foreclosure Recovery",
      "Connecticut Unclaimed Property",
      "Estate and Heir Recovery",
      "Court-Held Excess Proceeds"
    ],
    "paragraphs": [
      "Fairfield, Hartford, and New Haven counties generate the highest volume of Connecticut foreclosure surplus cases. Connecticut uses a judicial foreclosure process that includes both foreclosure by sale, which can produce surplus funds, and strict foreclosure, in which title transfers directly to the lender. Foreclosure by sale surplus funds are held by the Connecticut Superior Court until claimed.",
      "The Connecticut Office of the Treasurer Unclaimed Property Division holds millions in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Connecticut residents. RCG searches Connecticut Superior Court records, municipal tax sale records, and state unclaimed property databases for every Connecticut client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Connecticut. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 8 Connecticut Counties.",
      "intro": "RCG monitors foreclosure surplus funds, tax sale overages, and unclaimed property across every county in Connecticut. If funds exist in your name in any Connecticut county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Fairfield",
        "Hartford",
        "Litchfield",
        "Middlesex",
        "New Haven",
        "New London",
        "Tolland",
        "Windham"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Foreclosure by sale overages · Connecticut unclaimed property · Estate and heir recovery · Excess proceeds from court sales, available across all 8 Connecticut counties.",
  "ctaTitle": "Find Out What Connecticut Is Holding in Your Name.",
  "ctaText": "We search Connecticut court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function ConnecticutPage() {
  return <StatePage {...data} />
}
