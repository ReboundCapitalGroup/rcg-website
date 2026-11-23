/**
 * Google reviews for the business, from the Places API (New).
 *
 * Needs GOOGLE_PLACES_API_KEY (a key restricted to "Places API (New)") in the
 * Vercel environment. The Place ID is found automatically with a text search,
 * so nobody has to look it up by hand. GOOGLE_PLACE_ID can be set to skip the
 * search. Results are cached for a day. Without a key, returns null and the
 * page shows a simple "Read our reviews on Google" link instead.
 */

export type GoogleReview = {
  author: string
  authorUrl?: string
  photo?: string
  rating: number
  text: string
  when: string
}

export type GoogleReviews = {
  placeId: string
  rating: number
  count: number
  mapsUrl: string
  reviews: GoogleReview[]
}

const QUERY = 'Rebound Capital Group, Miami Beach, FL'
// Our Google Business Profile. Public, not a secret. Text search does not find
// service-area businesses, so the ID is set here.
const PLACE_ID = 'ChIJkXm56JmzbEoRkl6P2VBXJZc'
const DAY = 60 * 60 * 24

type PlaceResponse = {
  id?: string
  rating?: number
  userRatingCount?: number
  googleMapsUri?: string
  reviews?: {
    rating?: number
    relativePublishTimeDescription?: string
    text?: { text?: string }
    originalText?: { text?: string }
    authorAttribution?: { displayName?: string; uri?: string; photoUri?: string }
  }[]
}

async function findPlaceId(key: string): Promise<string | null> {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID
  if (PLACE_ID) return PLACE_ID
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'places.id,places.displayName' },
    body: JSON.stringify({ textQuery: QUERY }),
    next: { revalidate: DAY },
  })
  if (!res.ok) return null
  const data = (await res.json()) as { places?: { id: string; displayName?: { text?: string } }[] }
  const match = data.places?.find((p) => /rebound capital/i.test(p.displayName?.text || '')) || data.places?.[0]
  return match?.id || null
}

export async function getGoogleReviews(): Promise<GoogleReviews | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) return null
  try {
    const placeId = await findPlaceId(key)
    if (!placeId) return null
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'id,rating,userRatingCount,googleMapsUri,reviews' },
      next: { revalidate: DAY },
    })
    if (!res.ok) return null
    const p = (await res.json()) as PlaceResponse
    return {
      placeId,
      rating: p.rating || 0,
      count: p.userRatingCount || 0,
      mapsUrl: p.googleMapsUri || `https://www.google.com/maps/place/?q=place_id:${placeId}`,
      reviews: (p.reviews || [])
        .map((r) => ({
          author: r.authorAttribution?.displayName || 'Google user',
          authorUrl: r.authorAttribution?.uri,
          photo: r.authorAttribution?.photoUri,
          rating: r.rating || 0,
          text: r.text?.text || r.originalText?.text || '',
          when: r.relativePublishTimeDescription || '',
        }))
        .filter((r) => r.text),
    }
  } catch {
    return null
  }
}
