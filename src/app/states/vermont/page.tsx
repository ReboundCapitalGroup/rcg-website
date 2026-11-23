import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Vermont Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Vermont. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "vermont",
  "name": "Vermont",
  "badge": "Vermont · All 14 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in Vermont.",
  "intro": "Courts, town offices, and state agencies in Vermont are holding funds belonging to former property owners and residents. RCG monitors all 14 Vermont counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "14",
      "label": "Counties Monitored"
    },
    {
      "val": "$150M",
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
    "tag": "Vermont Recovery",
    "title": "Recovery in Vermont. All 14 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Tax Sale Overages",
      "Vermont Unclaimed Property",
      "Estate and Heir Recovery",
      "Court-Held Excess Proceeds"
    ],
    "paragraphs": [
      "Chittenden, Rutland, and Washington counties generate the highest volume of Vermont foreclosure surplus cases. Vermont uses a judicial foreclosure process, and surplus funds from foreclosure sales are held by the Vermont Superior Court until claimed by the former owner. Tax sales conducted by municipal collectors can also produce excess proceeds that must be claimed within specific statutory deadlines.",
      "The Vermont Unclaimed Property Division, administered by the state Treasurer, holds millions in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Vermont residents. RCG searches Vermont Superior Court records, municipal tax sale records, and state unclaimed property databases for every Vermont client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Vermont. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 14 Vermont Counties.",
      "intro": "RCG monitors foreclosure surplus funds, tax sale overages, and unclaimed property across every county in Vermont. If funds exist in your name in any Vermont county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Addison",
        "Bennington",
        "Caledonia",
        "Chittenden",
        "Essex",
        "Franklin",
        "Grand Isle",
        "Lamoille",
        "Orange",
        "Orleans",
        "Rutland",
        "Washington",
        "Windham",
        "Windsor"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Tax sale overages · Vermont unclaimed property · Estate and heir recovery · Excess proceeds from court sales, available across all 14 Vermont counties.",
  "ctaTitle": "Find Out What Vermont Is Holding in Your Name.",
  "ctaText": "We search Vermont court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function VermontPage() {
  return <StatePage {...data} />
}
