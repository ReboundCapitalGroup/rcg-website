/**
 * English / Spanish routing.
 *
 * English pages live at their usual paths. Spanish pages live under /es with
 * Spanish slugs. ROUTES pairs each English path prefix with its Spanish one;
 * the longest matching prefix wins, so /states/florida/miami-dade becomes
 * /es/estados/florida/miami-dade.
 */
import routes from './routes.json'

export type Lang = 'en' | 'es'

export const ROUTES = routes as [string, string][]

const split = (href: string): [string, string] => {
  const i = href.search(/[?#]/)
  return i === -1 ? [href, ''] : [href.slice(0, i), href.slice(i)]
}

const swap = (path: string, from: 0 | 1, to: 0 | 1): string | null => {
  const sorted = [...ROUTES].sort((a, b) => b[from].length - a[from].length)
  for (const r of sorted) {
    if (path === r[from] || path.startsWith(r[from] + '/')) return r[to] + path.slice(r[from].length)
  }
  return null
}

export const isEs = (path: string) => path === '/es' || path.startsWith('/es/')

/** English path -> Spanish path. */
export function toEs(href: string): string {
  const [path, rest] = split(href)
  if (!path.startsWith('/') || isEs(path)) return href
  if (path === '/') return '/es' + rest
  return (swap(path, 0, 1) ?? '/es' + path) + rest
}

/** Spanish path -> English path. */
export function toEn(href: string): string {
  const [path, rest] = split(href)
  if (!isEs(path)) return href
  if (path === '/es') return '/' + rest
  return (swap(path, 1, 0) ?? path.replace(/^\/es/, '')) + rest
}

/** Localize an internal English link for the given language. */
export const L = (lang: Lang, href: string) => (lang === 'es' ? toEs(href) : href)

/** Pick the string for the language. */
export const tr = <T,>(lang: Lang, en: T, es: T): T => (lang === 'es' ? es : en)
