import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Alabama Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Alabama. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "alabama",
  "name": "Alabama",
  "badge": "Alabama · All 67 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in Alabama.",
  "intro": "Courts, probate courts, and state agencies in Alabama are holding funds belonging to former property owners and residents. RCG monitors all 67 Alabama counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "67",
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
    "tag": "Alabama Recovery",
    "title": "Recovery in Alabama. All 67 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Mortgage Sale Overages",
      "Tax Sale Excess Funds",
      "Alabama Unclaimed Property",
      "Estate and Heir Recovery"
    ],
    "paragraphs": [
      "Jefferson, Mobile, Madison, and Montgomery counties generate the highest volume of Alabama foreclosure surplus cases. Alabama is primarily a non-judicial foreclosure state using the power of sale. Mortgage foreclosure sale surplus funds are held by the foreclosing mortgagee or deposited with the Alabama circuit court until claimed by the former owner. Alabama tax sale excess funds are held by the state Department of Revenue and county probate judges.",
      "The Alabama Unclaimed Property Division, administered by the State Treasurer, holds hundreds of millions in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to Alabama residents. RCG searches Alabama circuit court records, probate court records, and state unclaimed property databases for every Alabama client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Alabama. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 67 Alabama Counties.",
      "intro": "RCG monitors foreclosure surplus funds, tax sale excess funds, and unclaimed property across every county in Alabama. If funds exist in your name in any Alabama county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Autauga",
        "Baldwin",
        "Barbour",
        "Bibb",
        "Blount",
        "Bullock",
        "Butler",
        "Calhoun",
        "Chambers",
        "Cherokee",
        "Chilton",
        "Choctaw",
        "Clarke",
        "Clay",
        "Cleburne",
        "Coffee",
        "Colbert",
        "Conecuh",
        "Coosa",
        "Covington",
        "Crenshaw",
        "Cullman",
        "Dale",
        "Dallas",
        "DeKalb",
        "Elmore",
        "Escambia",
        "Etowah",
        "Fayette",
        "Franklin",
        "Geneva",
        "Greene",
        "Hale",
        "Henry",
        "Houston",
        "Jackson",
        "Jefferson",
        "Lamar",
        "Lauderdale",
        "Lawrence",
        "Lee",
        "Limestone",
        "Lowndes",
        "Macon",
        "Madison",
        "Marengo",
        "Marion",
        "Marshall",
        "Mobile",
        "Monroe",
        "Montgomery",
        "Morgan",
        "Perry",
        "Pickens",
        "Pike",
        "Randolph",
        "Russell",
        "St. Clair",
        "Shelby",
        "Sumter",
        "Talladega",
        "Tallapoosa",
        "Tuscaloosa",
        "Walker",
        "Washington",
        "Wilcox",
        "Winston"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Mortgage sale overages · Tax sale excess funds · Alabama unclaimed property · Estate and heir recovery, available across all 67 Alabama counties.",
  "ctaTitle": "Find Out What Alabama Is Holding in Your Name.",
  "ctaText": "We search Alabama court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function AlabamaPage() {
  return <StatePage {...data} />
}
