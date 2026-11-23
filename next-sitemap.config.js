// Sitemap with real "last modified" dates.
// For each URL, lastmod is the date of the last git commit that touched that
// page's file (src/app/<path>/page.tsx). Shared layout/footer changes don't
// count, so Google only sees a new date when the page itself changed.
//
// IMPORTANT: run `npm run build` locally and commit public/sitemap*.xml with
// each batch. The live site serves the committed files.
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

function gitDate(file) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${file}"`, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
    return out || null
  } catch {
    return null
  }
}

function pageFile(loc) {
  const p = loc === '/' ? '' : loc
  for (const group of ['(en)', '(es)', '']) {
    const f = path.join('src', 'app', group, p, 'page.tsx')
    if (fs.existsSync(f)) return f
  }
  return null
}

// English <-> Spanish pairs (same table the site uses), for hreflang tags.
const ROUTES = require('./src/lib/routes.json')
const isEs = (p) => p === '/es' || p.startsWith('/es/')
function swap(p, from, to) {
  const sorted = [...ROUTES].sort((a, b) => b[from].length - a[from].length)
  for (const r of sorted) if (p === r[from] || p.startsWith(r[from] + '/')) return r[to] + p.slice(r[from].length)
  return null
}
const toEs = (p) => (p === '/' ? '/es' : swap(p, 0, 1) || '/es' + p)
const toEn = (p) => (p === '/es' ? '/' : swap(p, 1, 0) || p.replace(/^\/es/, ''))
const SITE = 'https://reboundcapitalgroup.com'
// Every page the build produced (static and generated), to pair only real pages.
let BUILT = null
const exists = (p) => {
  if (!BUILT) {
    try { BUILT = new Set(Object.keys(require('./.next/prerender-manifest.json').routes)) } catch { BUILT = new Set() }
  }
  return BUILT.has(p === '' ? '/' : p) || Boolean(pageFile(p))
}

module.exports = {
  siteUrl: 'https://reboundcapitalgroup.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // "Coming soon" page is noindex until real posts exist.
  exclude: ['/resources/blog', '/es/recursos/blog'],
  transform: async (config, loc) => {
    const file = pageFile(loc)
    const lastmod = (file && gitDate(file)) || new Date().toISOString()
    const en = isEs(loc) ? toEn(loc) : loc
    const es = isEs(loc) ? loc : toEs(loc)
    // Only pair pages that exist in both languages.
    const alternateRefs = exists(en) && exists(es)
      ? [
          { href: SITE + (en === '/' ? '' : en), hreflang: 'en', hrefIsAbsolute: true },
          { href: SITE + es, hreflang: 'es', hrefIsAbsolute: true },
          { href: SITE + (en === '/' ? '' : en), hreflang: 'x-default', hrefIsAbsolute: true },
        ]
      : []
    return {
      loc,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod,
      alternateRefs,
    }
  },
}
