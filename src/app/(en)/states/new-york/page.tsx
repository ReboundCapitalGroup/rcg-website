import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "New York Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in New York. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "new-york",
  "name": "New York",
  "badge": "New York · All 62 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in New York.",
  "intro": "New York holds over $13 billion in unclaimed property, the second highest in the nation. RCG monitors all 62 New York counties including NYC boroughs and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "62",
      "label": "Counties Monitored"
    },
    {
      "val": "$13B",
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
    "tag": "New York Recovery",
    "title": "Recovery in New York. All 62 Counties & NYC Boroughs.",
    "points": [
      "Foreclosure Surplus Funds",
      "Referee Sale Overages",
      "Tax Foreclosure Excess",
      "New York Unclaimed Property",
      "Estate and Heir Recovery"
    ],
    "paragraphs": [
      "New York's 62 counties include the five NYC boroughs, Bronx, Kings (Brooklyn), New York (Manhattan), Queens, and Richmond (Staten Island). Suffolk, Nassau, Westchester, Queens, and Kings counties generate the highest volume of New York foreclosure surplus cases. New York is a judicial foreclosure state, and referee sales are typically conducted by a court-appointed referee. Referee sale surplus funds are deposited with the New York Supreme Court until claimed by the former owner.",
      "New York City, Nassau, and Suffolk counties have particularly active in rem tax foreclosure programs that can produce excess proceeds recoverable by the former owner. The New York Office of Unclaimed Funds, administered by the Office of the State Comptroller, holds over $13 billion, second only to California, in dormant bank accounts, insurance proceeds, uncashed checks, and other assets belonging to New York residents. RCG searches New York Supreme Court records, county referee sale records, and state unclaimed property databases for every New York client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in New York. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 62 New York Counties.",
      "intro": "RCG monitors foreclosure surplus funds, referee sale overages, and unclaimed property across every county in New York including all five NYC boroughs. If funds exist in your name in any New York county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Albany",
        "Allegany",
        "Bronx",
        "Broome",
        "Cattaraugus",
        "Cayuga",
        "Chautauqua",
        "Chemung",
        "Chenango",
        "Clinton",
        "Columbia",
        "Cortland",
        "Delaware",
        "Dutchess",
        "Erie",
        "Essex",
        "Franklin",
        "Fulton",
        "Genesee",
        "Greene",
        "Hamilton",
        "Herkimer",
        "Jefferson",
        "Kings",
        "Lewis",
        "Livingston",
        "Madison",
        "Monroe",
        "Montgomery",
        "Nassau",
        "New York",
        "Niagara",
        "Oneida",
        "Onondaga",
        "Ontario",
        "Orange",
        "Orleans",
        "Oswego",
        "Otsego",
        "Putnam",
        "Queens",
        "Rensselaer",
        "Richmond",
        "Rockland",
        "Saratoga",
        "Schenectady",
        "Schoharie",
        "Schuyler",
        "Seneca",
        "St. Lawrence",
        "Steuben",
        "Suffolk",
        "Sullivan",
        "Tioga",
        "Tompkins",
        "Ulster",
        "Warren",
        "Washington",
        "Wayne",
        "Westchester",
        "Wyoming",
        "Yates"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Referee sale overages · Tax foreclosure excess · New York unclaimed property · Estate and heir recovery, available across all 62 New York counties including Bronx, Brooklyn, Manhattan, Queens, and Staten Island.",
  "ctaTitle": "Find Out What New York Is Holding in Your Name.",
  "ctaText": "We search New York court records, county referee sale records, and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function NewYorkPage() {
  return <StatePage {...data} />
}
