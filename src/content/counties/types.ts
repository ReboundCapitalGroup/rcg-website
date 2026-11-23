/** County guide pages. Each county has its own facts in English and Spanish. */
export type Bi = { en: string; es: string }

export type CountyFaq = { q: Bi; a: Bi }

export type County = {
  /** URL slug inside the state, e.g. "miami-dade" */
  slug: string
  /** State slug, e.g. "florida" */
  state: string
  /** Display name, e.g. "Miami-Dade County" / "Condado de Miami-Dade" */
  name: Bi
  /** Short name for buttons and lists, e.g. "Miami-Dade" */
  short: string
  /** Main cities in the county */
  cities: string[]
  /** One line for state-page cards */
  blurb: Bi
  /** Month the facts were last checked against official sources */
  checked: Bi
  /** At-a-glance rows */
  glance: { sale: Bi; holder: Bi; auction: Bi }
  intro: Bi
  sections: { title: Bi; body: Bi[] }[]
  /** Optional callout, e.g. a state rule that limits recovery fees */
  note?: Bi
  faqs: CountyFaq[]
  /** Official sources used for the facts on the page */
  sources: { label: string; url: string }[]
  meta: { title: Bi; description: Bi }
}
