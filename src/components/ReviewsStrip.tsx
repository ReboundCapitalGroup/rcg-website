import Link from 'next/link'
import { getGoogleReviews } from '@/lib/googleReviews'
import h from '@/components/home/home.module.css'
import s from './reviewsStrip.module.css'

const cut = (t: string, n: number) => (t.length > n ? t.slice(0, t.lastIndexOf(' ', n)) + '…' : t)

/**
 * Compact Google reviews band for any page: rating + 3 short quotes.
 * preferName puts reviews that mention the name first (used on About).
 */
export default async function ReviewsStrip({ title = 'What clients say.', preferName }: { title?: string; preferName?: string }) {
  const data = await getGoogleReviews()
  if (!data || data.reviews.length === 0) return null
  let reviews = [...data.reviews]
  if (preferName) {
    const re = new RegExp(preferName, 'i')
    reviews.sort((a, b) => Number(re.test(b.text)) - Number(re.test(a.text)))
  }
  reviews = reviews.slice(0, 3)
  return (
    <section className={s.strip}>
      <div className={h.wrap}>
        <div className={s.head}>
          <div>
            <div className={s.eyebrow}>Google reviews</div>
            <h2 className={s.title}>{title}</h2>
          </div>
          <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer" className={s.score}>
            <b>{data.rating.toFixed(1)}</b>
            <span className={s.stars} aria-label={`${data.rating} out of 5 stars`}>★★★★★</span>
            <span>{data.count} reviews on Google</span>
          </a>
        </div>
        <div className={s.grid}>
          {reviews.map((r) => (
            <figure key={r.author} className={s.card}>
              <span className={s.cardStars} aria-hidden="true">★★★★★</span>
              <blockquote>{cut(r.text, 230)}</blockquote>
              <figcaption>{r.author}<span>{r.when} · Google</span></figcaption>
            </figure>
          ))}
        </div>
        <Link href="/resources/results" className={s.more}>Read all reviews →</Link>
      </div>
    </section>
  )
}
