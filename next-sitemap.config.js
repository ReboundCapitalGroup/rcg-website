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
  const f = path.join('src', 'app', p, 'page.tsx')
  return fs.existsSync(f) ? f : null
}

module.exports = {
  siteUrl: 'https://reboundcapitalgroup.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // "Coming soon" page is noindex until real posts exist.
  exclude: ['/resources/blog'],
  transform: async (config, loc) => {
    const file = pageFile(loc)
    const lastmod = (file && gitDate(file)) || new Date().toISOString()
    return {
      loc,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod,
    }
  },
}
