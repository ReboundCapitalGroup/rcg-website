/*
 * add-state-titles.js
 * Inserts a unique `export const metadata` title block into each of the
 * 50 state page.tsx files under src/app/states/<state>/page.tsx
 *
 * SAFETY:
 *  - Skips any file that already has `export const metadata` (won't double-add)
 *  - Skips/flags any file that does NOT start with `import Link from 'next/link'`
 *    (so it never blindly mangles an unexpected file)
 *  - Only touches src/app/states/<state>/page.tsx — nothing else
 *  - Does NOT commit, push, or deploy. Pure local file edit.
 *
 * RUN FROM:  C:\rcg-site-GIT   ->   node add-state-titles.js
 * THEN:      git diff   (review every change before committing)
 */

const fs = require('fs');
const path = require('path');

const STATES_DIR = path.join('src', 'app', 'states');

// Active states get custom keyword titles. All others use the pattern.
const CUSTOM = {
  'florida':  'Florida Surplus Funds Recovery | All 67 Counties | RCG',
  'ohio':     'Ohio Foreclosure Surplus Recovery | ORC 2329.44 | RCG',
  'arizona':  'Arizona Surplus Funds & Excess Proceeds Recovery | RCG',
  'colorado': 'Colorado Surplus Funds Recovery | Rebound Capital Group',
  'michigan': 'Michigan Foreclosure Surplus Recovery | RCG',
};

// Folder slug -> Display name (for the default pattern title)
function displayName(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function titleFor(slug) {
  if (CUSTOM[slug]) return CUSTOM[slug];
  // Pattern: "<State> Surplus Funds Recovery | All Counties | RCG"
  return `${displayName(slug)} Surplus Funds Recovery | All Counties | RCG`;
}

const EXPECTED_FIRST_LINE = "import Link from 'next/link'";

const entries = fs.readdirSync(STATES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

let edited = [], skippedExisting = [], flagged = [];

for (const slug of entries) {
  const file = path.join(STATES_DIR, slug, 'page.tsx');
  if (!fs.existsSync(file)) { flagged.push(`${slug} (no page.tsx)`); continue; }

  const src = fs.readFileSync(file, 'utf8');

  if (src.includes('export const metadata')) { skippedExisting.push(slug); continue; }

  const lines = src.split('\n');
  if (lines[0].trim() !== EXPECTED_FIRST_LINE) {
    flagged.push(`${slug} (unexpected first line: "${lines[0].trim().slice(0,40)}")`);
    continue;
  }

  const title = titleFor(slug);
  const block =
    `import type { Metadata } from 'next'\n` +
    `\n` +
    `export const metadata: Metadata = {\n` +
    `  title: '${title.replace(/'/g, "\\'")}',\n` +
    `}\n`;

  // Insert AFTER line 1 (the existing import), before the rest.
  lines.splice(1, 0, block);
  fs.writeFileSync(file, lines.join('\n'), 'utf8');
  edited.push(`${slug}  ->  ${title}`);
}

console.log('\n=== EDITED (' + edited.length + ') ===');
edited.forEach(x => console.log('  ' + x));
console.log('\n=== SKIPPED, already had metadata (' + skippedExisting.length + ') ===');
skippedExisting.forEach(x => console.log('  ' + x));
console.log('\n=== FLAGGED, NOT touched (' + flagged.length + ') ===');
flagged.forEach(x => console.log('  ' + x));
console.log('\nDone. Now run:  git diff   to review every change before committing.\n');
