import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Indiana Surplus Funds & Foreclosure Help | $0 Upfront | RCG",
  description: "Did your Indiana home sell at a sheriff's sale? You may be owed the surplus. Free check in every Indiana county, $0 upfront, call or text 24/7.",
}

const data = {
  "slug": "indiana",
  "name": "Indiana",
  "badge": "Indiana · All 92 Counties · No Upfront Cost",
  "h1Lead": "Foreclosure Help & Surplus Funds",
  "h1Accent": "in Indiana.",
  "intro": "Courts, county auditors, and state agencies in Indiana are holding funds belonging to former property owners and residents. RCG monitors all 92 Indiana counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "92",
      "label": "Counties Monitored"
    },
    {
      "val": "$892M",
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
    "tag": "Indiana Recovery",
    "title": "Recovery in Indiana. All 92 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Sheriff Sale Overages",
      "Tax Sale Surplus Funds",
      "Indiana Unclaimed Property",
      "Estate and Heir Recovery"
    ],
    "paragraphs": [
      "Marion, Lake, Allen, and Hamilton counties generate the highest volume of Indiana foreclosure surplus cases. Indiana is a judicial foreclosure state, and sheriff sale surplus funds are deposited with the Indiana circuit court clerk until claimed by the former owner. Indiana tax sale surplus funds held by county auditors are one of the most valuable recovery categories in the state and must be claimed within specific statutory deadlines.",
      "The Indiana Unclaimed Property Division, administered by the Office of the Attorney General, holds hundreds of millions in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Indiana residents. RCG searches Indiana circuit court records, county tax sale records, and state unclaimed property databases for every Indiana client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Indiana. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 92 Indiana Counties.",
      "intro": "RCG monitors foreclosure surplus funds, tax sale surplus, and unclaimed property across every county in Indiana. If funds exist in your name in any Indiana county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Adams",
        "Allen",
        "Bartholomew",
        "Benton",
        "Blackford",
        "Boone",
        "Brown",
        "Carroll",
        "Cass",
        "Clark",
        "Clay",
        "Clinton",
        "Crawford",
        "Daviess",
        "Dearborn",
        "Decatur",
        "DeKalb",
        "Delaware",
        "Dubois",
        "Elkhart",
        "Fayette",
        "Floyd",
        "Fountain",
        "Franklin",
        "Fulton",
        "Gibson",
        "Grant",
        "Greene",
        "Hamilton",
        "Hancock",
        "Harrison",
        "Hendricks",
        "Henry",
        "Howard",
        "Huntington",
        "Jackson",
        "Jasper",
        "Jay",
        "Jefferson",
        "Jennings",
        "Johnson",
        "Knox",
        "Kosciusko",
        "LaGrange",
        "Lake",
        "LaPorte",
        "Lawrence",
        "Madison",
        "Marion",
        "Marshall",
        "Martin",
        "Miami",
        "Monroe",
        "Montgomery",
        "Morgan",
        "Newton",
        "Noble",
        "Ohio",
        "Orange",
        "Owen",
        "Parke",
        "Perry",
        "Pike",
        "Porter",
        "Posey",
        "Pulaski",
        "Putnam",
        "Randolph",
        "Ripley",
        "Rush",
        "Scott",
        "Shelby",
        "Spencer",
        "Starke",
        "Steuben",
        "St. Joseph",
        "Sullivan",
        "Switzerland",
        "Tippecanoe",
        "Tipton",
        "Union",
        "Vanderburgh",
        "Vermillion",
        "Vigo",
        "Wabash",
        "Warren",
        "Warrick",
        "Washington",
        "Wayne",
        "Wells",
        "White",
        "Whitley"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Sheriff sale overages · Tax sale surplus funds · Indiana unclaimed property · Estate and heir recovery, available across all 92 Indiana counties.",
  "ctaTitle": "Find Out What Indiana Is Holding in Your Name.",
  "ctaText": "We search Indiana court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function IndianaPage() {
  return <StatePage {...data} />
}
