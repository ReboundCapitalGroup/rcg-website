import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Ohio Foreclosure Help & Excess Proceeds | ORC 2329.44 | RCG",
  description: "Did your Ohio home sell at a sheriff's sale? Excess proceeds may be owed to you under ORC 2329.44. Claims filed through our network of licensed Ohio attorneys. Free check, $0 upfront.",
}

const data = {
  "slug": "ohio",
  "name": "Ohio",
  "badge": "Ohio · All 88 Counties · No Upfront Cost",
  "h1Lead": "Foreclosure Help & Surplus Funds",
  "h1Accent": "in Ohio.",
  "intro": "Ohio courts and county clerks are holding millions in foreclosure surplus and unclaimed funds belonging to former property owners. RCG monitors all 88 Ohio counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "88",
      "label": "Counties Monitored"
    },
    {
      "val": "Active",
      "label": "RCG Operating State"
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
    "tag": "Ohio Recovery",
    "title": "Active in Ohio. All 88 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Sheriff Sale Overages",
      "Ohio Unclaimed Funds Division",
      "Estate and Heir Recovery",
      "Court-Held Excess Proceeds"
    ],
    "paragraphs": [
      "Ohio has a significant volume of foreclosure surplus cases, particularly in Cuyahoga, Franklin, Hamilton, Summit, and Montgomery counties where foreclosure activity has historically been high. When Ohio properties sell at sheriff sale for more than the mortgage balance and any liens, the surplus is deposited with the county clerk of courts and held until claimed by the former owner.",
      "The Ohio Department of Commerce Division of Unclaimed Funds holds millions in dormant bank accounts, uncashed checks, insurance proceeds, and other assets belonging to Ohio residents and former residents. RCG searches both court records and state unclaimed property databases for every Ohio client."
    ],
    "callout": "RCG is actively operating in Ohio and has recovered funds for clients across multiple counties. Claims are filed through our network of licensed attorneys in Ohio."
  },
  "lists": [
    {
      "title": "All 88 Ohio Counties.",
      "intro": "RCG monitors foreclosure surplus funds, sheriff sale overages, and unclaimed property across every county in Ohio. If funds exist in your name in any Ohio county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Adams",
        "Allen",
        "Ashland",
        "Ashtabula",
        "Athens",
        "Auglaize",
        "Belmont",
        "Brown",
        "Butler",
        "Carroll",
        "Champaign",
        "Clark",
        "Clermont",
        "Clinton",
        "Columbiana",
        "Coshocton",
        "Crawford",
        "Cuyahoga",
        "Darke",
        "Defiance",
        "Delaware",
        "Erie",
        "Fairfield",
        "Fayette",
        "Franklin",
        "Fulton",
        "Gallia",
        "Geauga",
        "Greene",
        "Guernsey",
        "Hamilton",
        "Hancock",
        "Hardin",
        "Harrison",
        "Henry",
        "Highland",
        "Hocking",
        "Holmes",
        "Huron",
        "Jackson",
        "Jefferson",
        "Knox",
        "Lake",
        "Lawrence",
        "Licking",
        "Logan",
        "Lorain",
        "Lucas",
        "Madison",
        "Mahoning",
        "Marion",
        "Medina",
        "Meigs",
        "Mercer",
        "Miami",
        "Monroe",
        "Montgomery",
        "Morgan",
        "Morrow",
        "Muskingum",
        "Noble",
        "Ottawa",
        "Paulding",
        "Perry",
        "Pickaway",
        "Pike",
        "Portage",
        "Preble",
        "Putnam",
        "Richland",
        "Ross",
        "Sandusky",
        "Scioto",
        "Seneca",
        "Shelby",
        "Stark",
        "Summit",
        "Trumbull",
        "Tuscarawas",
        "Union",
        "Van Wert",
        "Vinton",
        "Warren",
        "Washington",
        "Wayne",
        "Williams",
        "Wood",
        "Wyandot"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Sheriff sale overages · Tax certificate proceeds · Ohio unclaimed funds · Estate and heir recovery · Excess proceeds from court sales, available across all 88 Ohio counties.",
  "ctaTitle": "Find Out What Ohio Is Holding in Your Name.",
  "ctaText": "We search Ohio court records and the Division of Unclaimed Funds at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function OhioPage() {
  return <StatePage {...data} />
}
