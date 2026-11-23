import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Washington Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Washington. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "washington",
  "name": "Washington",
  "badge": "Washington · All 39 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in Washington.",
  "intro": "Courts, county treasurers, and state agencies in Washington are holding funds belonging to former property owners and residents. RCG monitors all 39 Washington counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "39",
      "label": "Counties Monitored"
    },
    {
      "val": "$1.4B",
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
    "tag": "Washington Recovery",
    "title": "Recovery in Washington. All 39 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Trustee Sale Overages",
      "Tax Foreclosure Excess",
      "Washington Unclaimed Property",
      "Estate and Heir Recovery"
    ],
    "paragraphs": [
      "King, Pierce, Snohomish, and Spokane counties generate the highest volume of Washington foreclosure surplus cases. Washington is primarily a non-judicial foreclosure state using a deed of trust and trustee sale process. Trustee sale surplus funds are held by the trustee or deposited into the Washington Superior Court until claimed by the former owner. Washington tax foreclosure sales conducted by county treasurers also produce excess proceeds recoverable by the former owner.",
      "The Washington Unclaimed Property Division, administered by the state Department of Revenue, holds over $1 billion in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Washington residents. RCG searches Washington Superior Court records, county trustee sale records, and state unclaimed property databases for every Washington client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Washington. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 39 Washington Counties.",
      "intro": "RCG monitors foreclosure surplus funds, trustee sale overages, and unclaimed property across every county in Washington. If funds exist in your name in any Washington county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Adams",
        "Asotin",
        "Benton",
        "Chelan",
        "Clallam",
        "Clark",
        "Columbia",
        "Cowlitz",
        "Douglas",
        "Ferry",
        "Franklin",
        "Garfield",
        "Grant",
        "Grays Harbor",
        "Island",
        "Jefferson",
        "King",
        "Kitsap",
        "Kittitas",
        "Klickitat",
        "Lewis",
        "Lincoln",
        "Mason",
        "Okanogan",
        "Pacific",
        "Pend Oreille",
        "Pierce",
        "San Juan",
        "Skagit",
        "Skamania",
        "Snohomish",
        "Spokane",
        "Stevens",
        "Thurston",
        "Wahkiakum",
        "Walla Walla",
        "Whatcom",
        "Whitman",
        "Yakima"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Trustee sale overages · Tax foreclosure excess · Washington unclaimed property · Estate and heir recovery, available across all 39 Washington counties.",
  "ctaTitle": "Find Out What Washington Is Holding in Your Name.",
  "ctaText": "We search Washington court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function WashingtonPage() {
  return <StatePage {...data} />
}
