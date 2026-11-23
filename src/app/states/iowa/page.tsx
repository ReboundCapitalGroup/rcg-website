import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Iowa Foreclosure Surplus: You May Be Owed Money | RCG",
  description: "Did your Iowa home sell at foreclosure? You may be owed money from the sale. Free check, $0 upfront, call or text 24/7.",
  openGraph: {
    title: 'Iowa Surplus Funds Recovery | Rebound Capital Group',
    description: 'Unclaimed foreclosure surplus, sheriff sale overages, and state-held funds across all 99 Iowa counties. Free search, no upfront cost.',
    url: 'https://reboundcapitalgroup.com/states/iowa',
    type: 'website',
  },
}

const data = {
  "slug": "iowa",
  "name": "Iowa",
  "badge": "Iowa · All 99 Counties · No Upfront Cost",
  "h1Lead": "Foreclosure Help & Surplus Funds",
  "h1Accent": "in Iowa.",
  "intro": "Courts, county treasurers, and state agencies in Iowa are holding funds belonging to former property owners and residents. RCG monitors all 99 Iowa counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "99",
      "label": "Counties Monitored"
    },
    {
      "val": "$412M",
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
    "tag": "Iowa Recovery",
    "title": "Recovery in Iowa. All 99 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Sheriff Sale Overages",
      "Tax Sale Excess Proceeds",
      "Iowa Unclaimed Property",
      "Estate and Heir Recovery"
    ],
    "paragraphs": [
      "Polk, Linn, Scott, and Johnson counties generate the highest volume of Iowa foreclosure surplus cases. Iowa is a judicial foreclosure state with a mandatory redemption period, and sheriff sale surplus funds are deposited with the Iowa district court clerk until claimed by the former owner. Iowa tax sale certificates can produce excess proceeds when properties are taken to tax deed.",
      "The Iowa Great Iowa Treasure Hunt Unclaimed Property Program, administered by the State Treasurer, holds hundreds of millions in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Iowa residents. RCG searches Iowa district court records, county tax sale records, and state unclaimed property databases for every Iowa client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Iowa. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 99 Iowa Counties.",
      "intro": "RCG monitors foreclosure surplus funds, sheriff sale overages, and unclaimed property across every county in Iowa. If funds exist in your name in any Iowa county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Adair",
        "Adams",
        "Allamakee",
        "Appanoose",
        "Audubon",
        "Benton",
        "Black Hawk",
        "Boone",
        "Bremer",
        "Buchanan",
        "Buena Vista",
        "Butler",
        "Calhoun",
        "Carroll",
        "Cass",
        "Cedar",
        "Cerro Gordo",
        "Cherokee",
        "Chickasaw",
        "Clarke",
        "Clay",
        "Clayton",
        "Clinton",
        "Crawford",
        "Dallas",
        "Davis",
        "Decatur",
        "Delaware",
        "Des Moines",
        "Dickinson",
        "Dubuque",
        "Emmet",
        "Fayette",
        "Floyd",
        "Franklin",
        "Fremont",
        "Greene",
        "Grundy",
        "Guthrie",
        "Hamilton",
        "Hancock",
        "Hardin",
        "Harrison",
        "Henry",
        "Howard",
        "Humboldt",
        "Ida",
        "Iowa",
        "Jackson",
        "Jasper",
        "Jefferson",
        "Johnson",
        "Jones",
        "Keokuk",
        "Kossuth",
        "Lee",
        "Linn",
        "Louisa",
        "Lucas",
        "Lyon",
        "Madison",
        "Mahaska",
        "Marion",
        "Marshall",
        "Mills",
        "Mitchell",
        "Monona",
        "Monroe",
        "Montgomery",
        "Muscatine",
        "O'Brien",
        "Osceola",
        "Page",
        "Palo Alto",
        "Plymouth",
        "Pocahontas",
        "Polk",
        "Pottawattamie",
        "Poweshiek",
        "Ringgold",
        "Sac",
        "Scott",
        "Shelby",
        "Sioux",
        "Story",
        "Tama",
        "Taylor",
        "Union",
        "Van Buren",
        "Wapello",
        "Warren",
        "Washington",
        "Wayne",
        "Webster",
        "Winnebago",
        "Winneshiek",
        "Woodbury",
        "Worth",
        "Wright"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Sheriff sale overages · Tax sale excess proceeds · Iowa unclaimed property · Estate and heir recovery, available across all 99 Iowa counties.",
  "ctaTitle": "Find Out What Iowa Is Holding in Your Name.",
  "ctaText": "We search Iowa court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function IowaPage() {
  return <StatePage {...data} />
}
