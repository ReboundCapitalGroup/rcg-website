import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Michigan Foreclosure Surplus Recovery | RCG",
  description: "Recover foreclosure surplus funds and excess proceeds in Michigan. Rebound Capital Group files through our network of licensed attorneys at no upfront cost to you.",
}

const data = {
  "slug": "michigan",
  "name": "Michigan",
  "badge": "Michigan · All 83 Counties · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in Michigan.",
  "intro": "Courts, county clerks, and state agencies in Michigan are holding funds belonging to former property owners and residents. RCG monitors all 83 Michigan counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "83",
      "label": "Counties Monitored"
    },
    {
      "val": "Nationwide",
      "label": "RCG Coverage"
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
    "tag": "Michigan Recovery",
    "title": "Recovery in Michigan. All 83 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Tax Sale Overages",
      "Michigan Unclaimed Property",
      "Estate and Heir Recovery",
      "Court-Held Excess Proceeds"
    ],
    "paragraphs": [
      "Wayne, Oakland, Macomb, Kent, and Genesee counties generate the highest volume of Michigan foreclosure surplus cases. Michigan sheriffs sale auctions frequently produce surplus funds held by the county clerk until claimed.",
      "The Michigan Department of Treasury Unclaimed Property Division holds millions in dormant bank accounts, insurance proceeds, uncashed payroll checks, and other assets belonging to Michigan residents. RCG searches Michigan circuit court records and state unclaimed property databases for every Michigan client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Michigan. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 83 Michigan Counties.",
      "intro": "RCG monitors foreclosure surplus funds, tax sale overages, and unclaimed property across every county in Michigan. If funds exist in your name in any Michigan county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Alcona",
        "Alger",
        "Allegan",
        "Alpena",
        "Antrim",
        "Arenac",
        "Baraga",
        "Barry",
        "Bay",
        "Benzie",
        "Berrien",
        "Branch",
        "Calhoun",
        "Cass",
        "Charlevoix",
        "Cheboygan",
        "Chippewa",
        "Clare",
        "Clinton",
        "Crawford",
        "Delta",
        "Dickinson",
        "Eaton",
        "Emmet",
        "Genesee",
        "Gladwin",
        "Gogebic",
        "Grand Traverse",
        "Gratiot",
        "Hillsdale",
        "Houghton",
        "Huron",
        "Ingham",
        "Ionia",
        "Iosco",
        "Iron",
        "Isabella",
        "Jackson",
        "Kalamazoo",
        "Kalkaska",
        "Kent",
        "Keweenaw",
        "Lake",
        "Lapeer",
        "Leelanau",
        "Lenawee",
        "Livingston",
        "Luce",
        "Mackinac",
        "Macomb",
        "Manistee",
        "Marquette",
        "Mason",
        "Mecosta",
        "Menominee",
        "Midland",
        "Missaukee",
        "Monroe",
        "Montcalm",
        "Montmorency",
        "Muskegon",
        "Newaygo",
        "Oakland",
        "Oceana",
        "Ogemaw",
        "Ontonagon",
        "Osceola",
        "Oscoda",
        "Otsego",
        "Ottawa",
        "Presque Isle",
        "Roscommon",
        "Saginaw",
        "Sanilac",
        "Schoolcraft",
        "Shiawassee",
        "St. Clair",
        "St. Joseph",
        "Tuscola",
        "Van Buren",
        "Washtenaw",
        "Wayne",
        "Wexford"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Sheriff sale overages · Michigan unclaimed property · Estate and heir recovery · Excess proceeds from court sales, available across all 83 Michigan counties.",
  "ctaTitle": "Find Out What Michigan Is Holding in Your Name.",
  "ctaText": "We search Michigan court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function MichiganPage() {
  return <StatePage {...data} />
}
