/*
 * add-state-descriptions.js
 * Adds a unique `description:` line to the EXISTING metadata block in each of
 * the 50 state page.tsx files under src/app/states/<state>/page.tsx
 *
 * IMPORTANT DIFFERENCE FROM add-state-titles.js:
 *  - The state pages ALREADY have an `export const metadata` block (the title).
 *  - So this script does NOT insert a new block. Instead it finds the existing
 *    `title:` line and inserts a `description:` line immediately after it.
 *
 * SAFETY:
 *  - SKIPS any file that already has a `description:` (won't double-add)
 *  - SKIPS/FLAGS any file that does NOT contain `export const metadata`
 *  - SKIPS/FLAGS any file where it can't find a single clean `title:` line
 *  - Only touches src/app/states/<state>/page.tsx — nothing else
 *  - Does NOT commit, push, or deploy. Pure local file edit.
 *
 * RUN FROM:  C:\rcg-site-GIT   ->   node add-state-descriptions.js
 * THEN:      git diff   (review every change before committing)
 */
const fs = require('fs');
const path = require('path');

const STATES_DIR = path.join('src', 'app', 'states');

// Active states get richer, custom descriptions (confirmed details only).
// All others use the generic per-state pattern (state name makes each unique).
const CUSTOM = {
  'florida':
    'Recover foreclosure surplus, tax deed overages, and unclaimed property in Florida. Rebound Capital Group monitors all 67 counties and files through licensed attorneys at no upfront cost.',
  'ohio':
    'Recover foreclosure surplus and excess proceeds in Ohio under ORC 2329.44. Rebound Capital Group files Demand for Excess Proceeds through licensed attorneys at no upfront cost.',
  'arizona':
    'Recover foreclosure surplus funds and tax deed excess proceeds in Arizona. Rebound Capital Group files through licensed attorneys at no upfront cost to you.',
  'colorado':
    'Recover foreclosure surplus, tax deed overages, and unclaimed property in Colorado. Rebound Capital Group files through licensed attorneys at no upfront cost.',
  'michigan':
    'Recover foreclosure surplus funds and excess proceeds in Michigan. Rebound Capital Group files through licensed attorneys at no upfront cost to you.',
};

// Folder slug -> Display name (for the default pattern description)
function displayName(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function descriptionFor(slug) {
  if (CUSTOM[slug]) return CUSTOM[slug];
  // Generic pattern — unique per state because the state name is embedded.
  // No county numbers (intentionally, to avoid publishing inaccurate counts).
  return `Recover foreclosure surplus, tax deed overages, and unclaimed property in ${displayName(slug)}. Rebound Capital Group files through licensed attorneys at no upfront cost — you pay nothing until we recover.`;
}

const entries = fs.readdirSync(STATES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

let edited = [], skippedHasDesc = [], flagged = [];

for (const slug of entries) {
  const file = path.join(STATES_DIR, slug, 'page.tsx');

  if (!fs.existsSync(file)) { flagged.push(`${slug} (no page.tsx)`); continue; }

  const src = fs.readFileSync(file, 'utf8');

  // Must have a metadata block to add into.
  if (!src.includes('export const metadata')) {
    flagged.push(`${slug} (no metadata block found)`);
    continue;
  }

  // Already has a description — leave it alone.
  if (/^\s*description:\s*/m.test(src)) {
    skippedHasDesc.push(slug);
    continue;
  }

  const lines = src.split('\n');

  // Find the metadata title line: a line that looks like   title: '...'
  // (indented, inside the metadata block). We take the FIRST such line.
  const titleLineIndex = lines.findIndex(l => /^\s*title:\s*['"`]/.test(l));

  if (titleLineIndex === -1) {
    flagged.push(`${slug} (could not find a clean title: line)`);
    continue;
  }

  // Match the indentation of the title line so the new line lines up.
  const indentMatch = lines[titleLineIndex].match(/^(\s*)/);
  const indent = indentMatch ? indentMatch[1] : '  ';

  const desc = descriptionFor(slug);
  const descLine = `${indent}description: '${desc.replace(/'/g, "\\'")}',`;

  // Insert the description line immediately AFTER the title line.
  lines.splice(titleLineIndex + 1, 0, descLine);
  fs.writeFileSync(file, lines.join('\n'), 'utf8');

  edited.push(`${slug}`);
}

console.log('\n=== EDITED (' + edited.length + ') ===');
edited.forEach(x => console.log('  ' + x));
console.log('\n=== SKIPPED, already had a description (' + skippedHasDesc.length + ') ===');
skippedHasDesc.forEach(x => console.log('  ' + x));
console.log('\n=== FLAGGED, NOT touched (' + flagged.length + ') ===');
flagged.forEach(x => console.log('  ' + x));
console.log('\nDone. Now run:  git diff   to review every change before committing.\n');
