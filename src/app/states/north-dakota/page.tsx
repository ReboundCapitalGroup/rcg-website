import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "North Dakota Foreclosure Surplus: You May Be Owed Money | RCG",
  description: "Did your North Dakota home sell at foreclosure? You may be owed money from the sale. Free check, $0 upfront, call or text 24/7.",
}

const data = {
  "slug": "north-dakota",
  "name": "North Dakota",
  "badge": "North Dakota · All 53 Counties · No Upfront Cost",
  "h1Lead": "Foreclosure Help & Surplus Funds",
  "h1Accent": "in North Dakota.",
  "intro": "Courts, county treasurers, and state agencies in North Dakota are holding funds belonging to former property owners and residents. RCG monitors all 53 North Dakota counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "53",
      "label": "Counties Monitored"
    },
    {
      "val": "$118M",
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
    "tag": "North Dakota Recovery",
    "title": "Recovery in North Dakota. All 53 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Sheriff Sale Overages",
      "Tax Deed Excess Proceeds",
      "North Dakota Unclaimed Property",
      "Estate and Heir Recovery"
    ],
    "paragraphs": [
      "Cass, Burleigh, Grand Forks, and Ward counties generate the highest volume of North Dakota foreclosure surplus cases. North Dakota is a judicial foreclosure state, and sheriff sale surplus funds are deposited with the North Dakota district court until claimed by the former owner. Tax deed sales conducted by county treasurers can also produce excess proceeds.",
      "The North Dakota Unclaimed Property Division, administered by the state Department of Trust Lands, holds millions in dormant bank accounts, insurance proceeds, uncashed checks, mineral royalty payments, and other assets belonging to North Dakota residents and mineral rights owners. RCG searches North Dakota district court records, county sheriff sale records, and state unclaimed property databases for every North Dakota client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in North Dakota. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 53 North Dakota Counties.",
      "intro": "RCG monitors foreclosure surplus funds, sheriff sale overages, and unclaimed property across every county in North Dakota. If funds exist in your name in any North Dakota county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Adams",
        "Barnes",
        "Benson",
        "Billings",
        "Bottineau",
        "Bowman",
        "Burke",
        "Burleigh",
        "Cass",
        "Cavalier",
        "Dickey",
        "Divide",
        "Dunn",
        "Eddy",
        "Emmons",
        "Foster",
        "Golden Valley",
        "Grand Forks",
        "Grant",
        "Griggs",
        "Hettinger",
        "Kidder",
        "LaMoure",
        "Logan",
        "McHenry",
        "McIntosh",
        "McKenzie",
        "McLean",
        "Mercer",
        "Morton",
        "Mountrail",
        "Nelson",
        "Oliver",
        "Pembina",
        "Pierce",
        "Ramsey",
        "Ransom",
        "Renville",
        "Richland",
        "Rolette",
        "Sargent",
        "Sheridan",
        "Sioux",
        "Slope",
        "Stark",
        "Steele",
        "Stutsman",
        "Towner",
        "Traill",
        "Walsh",
        "Ward",
        "Wells",
        "Williams"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Sheriff sale overages · Tax deed excess proceeds · North Dakota unclaimed property · Estate and heir recovery, available across all 53 North Dakota counties.",
  "ctaTitle": "Find Out What North Dakota Is Holding in Your Name.",
  "ctaText": "We search North Dakota court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function NorthDakotaPage() {
  return <StatePage {...data} />
}
