import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Illinois Foreclosure Help & Surplus Funds | $0 Upfront | RCG",
  description: "Did your Illinois home sell at a foreclosure sale? The surplus may be yours. Cook County and every Illinois county. Free check, $0 upfront, call or text 24/7.",
}

const data = {
  "slug": "illinois",
  "name": "Illinois",
  "badge": "Illinois · All 102 Counties · No Upfront Cost",
  "h1Lead": "Foreclosure Help & Surplus Funds",
  "h1Accent": "in Illinois.",
  "intro": "Courts, county clerks, and state agencies in Illinois are holding billions in funds belonging to former property owners and residents. RCG monitors all 102 Illinois counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "102",
      "label": "Counties Monitored"
    },
    {
      "val": "$3.2B",
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
    "tag": "Illinois Recovery",
    "title": "Recovery in Illinois. All 102 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Sheriff Sale Overages",
      "Tax Sale Indemnity Fund",
      "Illinois Unclaimed Property",
      "Estate and Heir Recovery"
    ],
    "paragraphs": [
      "Illinois has one of the highest foreclosure volumes in the Midwest. Cook County, which includes Chicago, generates by far the largest share of surplus cases, with DuPage, Will, Lake, and Kane counties following. Illinois is a judicial foreclosure state, and sheriff sale surplus funds are deposited with the Illinois circuit court clerk until claimed by the former owner. Illinois also operates a unique Tax Sale Indemnity Fund for property owners who lost their home to tax sale without receiving proper notice.",
      "The Illinois ICash Unclaimed Property Program, administered by the Office of the State Treasurer, holds over $3 billion in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Illinois residents. RCG searches Illinois circuit court records, county sheriff sale records, and state unclaimed property databases for every Illinois client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Illinois. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 102 Illinois Counties.",
      "intro": "RCG monitors foreclosure surplus funds, sheriff sale overages, and unclaimed property across every county in Illinois. If funds exist in your name in any Illinois county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Adams",
        "Alexander",
        "Bond",
        "Boone",
        "Brown",
        "Bureau",
        "Calhoun",
        "Carroll",
        "Cass",
        "Champaign",
        "Christian",
        "Clark",
        "Clay",
        "Clinton",
        "Coles",
        "Cook",
        "Crawford",
        "Cumberland",
        "DeKalb",
        "DeWitt",
        "Douglas",
        "DuPage",
        "Edgar",
        "Edwards",
        "Effingham",
        "Fayette",
        "Ford",
        "Franklin",
        "Fulton",
        "Gallatin",
        "Greene",
        "Grundy",
        "Hamilton",
        "Hancock",
        "Hardin",
        "Henderson",
        "Henry",
        "Iroquois",
        "Jackson",
        "Jasper",
        "Jefferson",
        "Jersey",
        "Jo Daviess",
        "Johnson",
        "Kane",
        "Kankakee",
        "Kendall",
        "Knox",
        "Lake",
        "LaSalle",
        "Lawrence",
        "Lee",
        "Livingston",
        "Logan",
        "Macon",
        "Macoupin",
        "Madison",
        "Marion",
        "Marshall",
        "Mason",
        "Massac",
        "McDonough",
        "McHenry",
        "McLean",
        "Menard",
        "Mercer",
        "Monroe",
        "Montgomery",
        "Morgan",
        "Moultrie",
        "Ogle",
        "Peoria",
        "Perry",
        "Piatt",
        "Pike",
        "Pope",
        "Pulaski",
        "Putnam",
        "Randolph",
        "Richland",
        "Rock Island",
        "Saline",
        "Sangamon",
        "Schuyler",
        "Scott",
        "Shelby",
        "St. Clair",
        "Stark",
        "Stephenson",
        "Tazewell",
        "Union",
        "Vermilion",
        "Wabash",
        "Warren",
        "Washington",
        "Wayne",
        "White",
        "Whiteside",
        "Will",
        "Williamson",
        "Winnebago",
        "Woodford"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Sheriff sale overages · Tax sale indemnity fund · Illinois unclaimed property · Estate and heir recovery, available across all 102 Illinois counties.",
  "ctaTitle": "Find Out What Illinois Is Holding in Your Name.",
  "ctaText": "We search Illinois court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function IllinoisPage() {
  return <StatePage {...data} />
}
