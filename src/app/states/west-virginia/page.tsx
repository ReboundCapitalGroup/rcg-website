import type { Metadata } from 'next'
import StatePage from '@/components/state/StatePage'

export const metadata: Metadata = {
  title: "West Virginia Foreclosure Surplus: You May Be Owed Money | RCG",
  description: "Did your West Virginia home sell at a trustee sale? You may be owed money from the sale. Free check, $0 upfront, call or text 24/7.",
}

const data = {
  "slug": "west-virginia",
  "name": "West Virginia",
  "badge": "West Virginia · All 55 Counties · No Upfront Cost",
  "h1Lead": "Foreclosure Help & Surplus Funds",
  "h1Accent": "in West Virginia.",
  "intro": "Courts, county sheriffs, and state agencies in West Virginia are holding funds belonging to former property owners and residents. RCG monitors all 55 West Virginia counties and recovers these funds at no upfront cost.",
  "stats": [
    {
      "val": "55",
      "label": "Counties Monitored"
    },
    {
      "val": "$280M",
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
    "tag": "West Virginia Recovery",
    "title": "Recovery in West Virginia. All 55 Counties.",
    "points": [
      "Foreclosure Surplus Funds",
      "Trustee Sale Overages",
      "Tax Lien Sale Excess",
      "West Virginia Unclaimed Property",
      "Estate and Heir Recovery"
    ],
    "paragraphs": [
      "Kanawha, Berkeley, Monongalia, and Cabell counties generate the highest volume of West Virginia foreclosure surplus cases. West Virginia is primarily a non-judicial foreclosure state using a deed of trust and trustee sale. Trustee sale surplus funds are held by the trustee or deposited with the circuit court clerk until claimed by the former owner. West Virginia tax lien sales conducted by the State Auditor and county sheriffs can also produce excess proceeds.",
      "The West Virginia Unclaimed Property Division, administered by the State Treasurer, holds millions in dormant bank accounts, insurance proceeds, uncashed checks, mineral royalty payments, and other assets belonging to West Virginia residents and mineral rights owners. RCG searches West Virginia circuit court records, county trustee sale records, and state unclaimed property databases for every West Virginia client."
    ],
    "callout": "Claims are filed through our network of licensed attorneys in West Virginia. All recoveries are handled on a pure contingency basis with no upfront cost to the client."
  },
  "lists": [
    {
      "title": "All 55 West Virginia Counties.",
      "intro": "RCG monitors foreclosure surplus funds, trustee sale overages, and unclaimed property across every county in West Virginia. If funds exist in your name in any West Virginia county, we will find them and recover them.",
      "unit": "County",
      "items": [
        "Barbour",
        "Berkeley",
        "Boone",
        "Braxton",
        "Brooke",
        "Cabell",
        "Calhoun",
        "Clay",
        "Doddridge",
        "Fayette",
        "Gilmer",
        "Grant",
        "Greenbrier",
        "Hampshire",
        "Hancock",
        "Hardy",
        "Harrison",
        "Jackson",
        "Jefferson",
        "Kanawha",
        "Lewis",
        "Lincoln",
        "Logan",
        "Marion",
        "Marshall",
        "Mason",
        "McDowell",
        "Mercer",
        "Mineral",
        "Mingo",
        "Monongalia",
        "Monroe",
        "Morgan",
        "Nicholas",
        "Ohio",
        "Pendleton",
        "Pleasants",
        "Pocahontas",
        "Preston",
        "Putnam",
        "Raleigh",
        "Randolph",
        "Ritchie",
        "Roane",
        "Summers",
        "Taylor",
        "Tucker",
        "Tyler",
        "Upshur",
        "Wayne",
        "Webster",
        "Wetzel",
        "Wirt",
        "Wood",
        "Wyoming"
      ]
    }
  ],
  "footerLine": "Foreclosure surplus funds · Trustee sale overages · Tax lien sale excess · West Virginia unclaimed property · Estate and heir recovery, available across all 55 West Virginia counties.",
  "ctaTitle": "Find Out What West Virginia Is Holding in Your Name.",
  "ctaText": "We search West Virginia court records and state unclaimed property databases at no cost. If funds exist, we file the claim and recover them on a pure contingency basis."
}

export default function WestVirginiaPage() {
  return <StatePage {...data} />
}
