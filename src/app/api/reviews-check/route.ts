// TEMPORARY: shows why Google reviews are not loading. Never returns the key.
// Remove before the redesign is merged.
export const dynamic = 'force-dynamic'

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY
  const out: Record<string, unknown> = { hasKey: Boolean(key), keyLength: key?.length || 0, hasPlaceIdOverride: Boolean(process.env.GOOGLE_PLACE_ID) }
  if (!key) return Response.json(out)
  const search = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress' },
    body: JSON.stringify({ textQuery: 'Rebound Capital Group, Miami Beach, FL' }),
    cache: 'no-store',
  })
  const sj = await search.json().catch(() => null)
  out.searchStatus = search.status
  out.searchError = sj?.error?.message
  out.searchResults = (sj?.places || []).map((p: { id: string; displayName?: { text?: string }; formattedAddress?: string }) => ({ id: p.id, name: p.displayName?.text, address: p.formattedAddress }))
  const id = process.env.GOOGLE_PLACE_ID || sj?.places?.[0]?.id
  if (id) {
    const det = await fetch(`https://places.googleapis.com/v1/places/${id}`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount' },
      cache: 'no-store',
    })
    const dj = await det.json().catch(() => null)
    out.detailsStatus = det.status
    out.detailsError = dj?.error?.message
    out.details = dj?.error ? undefined : { name: dj?.displayName?.text, rating: dj?.rating, count: dj?.userRatingCount }
  }
  return Response.json(out)
}
