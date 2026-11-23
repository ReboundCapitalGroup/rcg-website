import type { County } from './types'
import type { Lang } from '@/lib/i18n'
import { FLORIDA } from './florida'
import { OHIO } from './ohio'
import { COLORADO } from './colorado'
import { ARIZONA } from './arizona'
import { ILLINOIS } from './illinois'
import { MARYLAND } from './maryland'
import { PENNSYLVANIA } from './pennsylvania'
import { TENNESSEE, CALIFORNIA, TEXAS, NEVADA, MICHIGAN } from './more'

/** County guides by state slug. */
export const COUNTIES: Record<string, County[]> = {
  florida: FLORIDA,
  ohio: OHIO,
  colorado: COLORADO,
  arizona: ARIZONA,
  illinois: ILLINOIS,
  maryland: MARYLAND,
  pennsylvania: PENNSYLVANIA,
  tennessee: TENNESSEE,
  california: CALIFORNIA,
  texas: TEXAS,
  nevada: NEVADA,
  michigan: MICHIGAN,
}

/** English state display names for the states that have county guides. */
export const COUNTY_STATE_NAMES: Record<string, string> = {
  florida: 'Florida', ohio: 'Ohio', colorado: 'Colorado', arizona: 'Arizona', illinois: 'Illinois', maryland: 'Maryland',
  pennsylvania: 'Pennsylvania', tennessee: 'Tennessee', california: 'California', texas: 'Texas', nevada: 'Nevada', michigan: 'Michigan',
}

export const getCounty = (state: string, slug: string) => COUNTIES[state]?.find((c) => c.slug === slug)

/** Name for cards and titles: "Condado de Miami-Dade" rather than "el condado de Miami-Dade". */
export const countyTitle = (c: County, lang: Lang) => {
  const n = c.name[lang].replace(/^el /, '')
  return n.charAt(0).toUpperCase() + n.slice(1)
}

/** Cards for the state page. */
export const countyCards = (state: string, lang: Lang) =>
  (COUNTIES[state] ?? []).map((c) => ({ name: countyTitle(c, lang), slug: c.slug, blurb: c.blurb[lang] }))

/** Every county route, for static params. */
export const ALL_COUNTIES = Object.values(COUNTIES).flat()
