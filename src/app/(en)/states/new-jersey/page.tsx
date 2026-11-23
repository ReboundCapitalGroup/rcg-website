import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "New Jersey Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in New Jersey. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "new-jersey",
  "name": "New Jersey",
  "badge": "New Jersey · All 21 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in New Jersey.",
  "intro": "Courts, county sheriffs, and state agencies in New Jersey are holding funds belonging to former property owners and residents. RCG monitors all 21 New Jersey counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "21",
      "label": "Counties Monitored"
    },
    {
      "val": "$2.8B",
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
    "tag": "New Jersey Recovery",
    "title": "Recovery in New Jersey. All 21 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Sheriff Sale Overages",
      "Tax Sale Certificate Recovery",
      "New Jersey Unclaimed Property",
      "Estate and Heir Recovery"
    ],
    "paragraphs": [
      "New Jersey has one of the highest foreclosure volumes in the country, with Essex, Hudson, Bergen, Middlesex, and Ocean counties leading in surplus funds cases. New Jersey uses a judicial foreclosure process and sheriff sales are conducted by each county. Surplus funds from sheriff sales are deposited with the Superior Court of New Jersey Trust Fund Unit until claimed by the former owner.",
      "New Jersey tax sale certificates can also produce surplus funds when properties are foreclosed and resold. The New Jersey Unclaimed Property Administration, administered by the state Department of the Treasury, holds hundreds of millions in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to New Jersey residents. RCG searches New Jersey Superior Court records, county sheriff sale records, and state unclaimed property databases for every New Jersey client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in New Jersey. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 21 New Jersey Counties.",
      "intro": "RCG monitors foreclosure surplus funds, sheriff sale overages, and unclaimed property across every county in New Jersey. If funds exist in your name in any New Jersey county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Atlantic",
        "Bergen",
        "Burlington",
        "Camden",
        "Cape May",
        "Cumberland",
        "Essex",
        "Gloucester",
        "Hudson",
        "Hunterdon",
        "Mercer",
        "Middlesex",
        "Monmouth",
        "Morris",
        "Ocean",
        "Passaic",
        "Salem",
        "Somerset",
        "Sussex",
        "Union",
        "Warren"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Sheriff sale overages · Tax sale certificate recovery · New Jersey unclaimed property · Estate and heir recovery, available across all 21 New Jersey counties.",
  "ctaTitle": "Find Out What New Jersey Is Holding in Your Name.",
  "ctaText": "We search New Jersey court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function NewJerseyPage() {
  return <StatePage {...data} />
}
