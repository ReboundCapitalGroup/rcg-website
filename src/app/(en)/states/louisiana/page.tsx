import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "Louisiana Surplus Funds Recovery | All Counties | RCG",
  description: "Recover foreclosure surplus, tax deed overages, and unclaimed property in Louisiana. Rebound Capital Group files through our network of licensed attorneys at no upfront cost, you pay nothing until we recover.",
}

const data = {
  "slug": "louisiana",
  "name": "Louisiana",
  "badge": "Louisiana · All 64 Parishes · No Upfront Cost",
  "h1Lead": "Surplus Fund Recovery",
  "h1Accent": "in Louisiana.",
  "intro": "Courts, parish sheriffs, and state agencies in Louisiana are holding funds belonging to former property owners and residents. RCG monitors all 64 Louisiana parishes and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "64",
      "label": "Parishes Monitored"
    },
    {
      "val": "$720M",
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
    "tag": "Louisiana Recovery",
    "title": "Recovery in Louisiana. All 64 Parishes.",
    "points": [
      "Foreclosure Surplus Funds",
      "Sheriff Sale Overages",
      "Tax Sale Excess Proceeds",
      "Louisiana Unclaimed Property",
      "Succession and Heir Recovery"
    ],
    "paragraphs": [
      "Louisiana uses parishes instead of counties. East Baton Rouge, Jefferson, Orleans, and Caddo parishes generate the highest volume of Louisiana foreclosure surplus cases. Louisiana is a judicial foreclosure state using executory process or ordinary process, and sheriff sale surplus funds are deposited with the parish civil district court until claimed by the former owner.",
      "Louisiana tax sales can produce excess proceeds held by parish tax collectors. Louisiana's unique civil law system also uses successions rather than probate, and heir property recovery often involves multi-generational succession work. The Louisiana Unclaimed Property Program, administered by the State Treasurer, holds hundreds of millions in dormant bank accounts, insurance proceeds, uncashed checks, and other assets. RCG searches Louisiana civil district court records, parish sheriff sale records, and state unclaimed property databases for every Louisiana client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in Louisiana. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 64 Louisiana Parishes.",
      "intro": "RCG monitors foreclosure surplus funds, sheriff sale overages, and unclaimed property across every parish in Louisiana. If funds exist in your name in any Louisiana parish, we will find them and recover them.",
      "unit": "Parish",
      "items": [
        "Acadia",
        "Allen",
        "Ascension",
        "Assumption",
        "Avoyelles",
        "Beauregard",
        "Bienville",
        "Bossier",
        "Caddo",
        "Calcasieu",
        "Caldwell",
        "Cameron",
        "Catahoula",
        "Claiborne",
        "Concordia",
        "De Soto",
        "East Baton Rouge",
        "East Carroll",
        "East Feliciana",
        "Evangeline",
        "Franklin",
        "Grant",
        "Iberia",
        "Iberville",
        "Jackson",
        "Jefferson",
        "Jefferson Davis",
        "Lafayette",
        "Lafourche",
        "LaSalle",
        "Lincoln",
        "Livingston",
        "Madison",
        "Morehouse",
        "Natchitoches",
        "Orleans",
        "Ouachita",
        "Plaquemines",
        "Pointe Coupee",
        "Rapides",
        "Red River",
        "Richland",
        "Sabine",
        "St. Bernard",
        "St. Charles",
        "St. Helena",
        "St. James",
        "St. John the Baptist",
        "St. Landry",
        "St. Martin",
        "St. Mary",
        "St. Tammany",
        "Tangipahoa",
        "Tensas",
        "Terrebonne",
        "Union",
        "Vermilion",
        "Vernon",
        "Washington",
        "Webster",
        "West Baton Rouge",
        "West Carroll",
        "West Feliciana",
        "Winn"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Sheriff sale overages · Tax sale excess proceeds · Louisiana unclaimed property · Succession and heir recovery, available across all 64 Louisiana parishes.",
  "ctaTitle": "Find Out What Louisiana Is Holding in Your Name.",
  "ctaText": "We search Louisiana court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function LouisianaPage() {
  return <StatePage {...data} />
}
