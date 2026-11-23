import { getGoogleReviews } from '@/lib/googleReviews'
import s from './reviews.module.css'
import type { Lang } from '@/lib/i18n'

const FALLBACK_URL = 'https://www.google.com/search?q=Rebound+Capital+Group+reviews'

const Stars = ({ n, es }: { n: number; es?: boolean }) => (
  <span className={s.stars} aria-label={es ? `${n} de 5 estrellas` : `${n} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => <span key={i} aria-hidden="true" className={i <= Math.round(n) ? s.on : s.off}>★</span>)}
  </span>
)

const GoogleMark = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
)

/** Google rating and reviews, with the attribution Google requires. */
export default async function GoogleReviews({ lang = 'en' }: { lang?: Lang }) {
  const es = lang === 'es'
  const data = await getGoogleReviews(lang)

  if (!data) {
    return (
      <a href={FALLBACK_URL} target="_blank" rel="noopener noreferrer" className={s.badge}>
        <GoogleMark /><span><b>{es ? 'Lea nuestras reseñas en Google' : 'Read our reviews on Google'}</b></span><span aria-hidden="true">→</span>
      </a>
    )
  }

  return (
    <div>
      <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer" className={s.summary}>
        <GoogleMark />
        <span className={s.score}>{data.rating.toFixed(1)}</span>
        <Stars n={data.rating} es={es} />
        <span className={s.count}>{es ? `${data.count} reseñas en Google` : `${data.count} Google reviews`}</span>
        <span className={s.cta}>{es ? 'Ver todas en Google →' : 'See all on Google →'}</span>
      </a>
      <div className={s.grid}>
        {data.reviews.map((r, i) => (
          <figure key={r.author + i} className={i % 2 === 0 ? `${s.card} ${s.dark}` : s.card}>
            <Stars n={r.rating} es={es} />
            <blockquote className={s.text}>{r.text}</blockquote>
            <figcaption className={s.by}>
              {r.photo && <img src={r.photo} alt="" width={32} height={32} className={s.photo} referrerPolicy="no-referrer" />}
              <span>
                {r.authorUrl ? <a href={r.authorUrl} target="_blank" rel="noopener noreferrer">{r.author}</a> : r.author}
                <span className={s.when}>{r.when} · Google</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className={s.attr}>{es ? 'Reseñas de Google, traducidas automáticamente por Google.' : 'Reviews from Google. Shown as written by the reviewer.'}</p>
    </div>
  )
}
