// The World in One Day — Sunday 22 November 2026.
// A newspaper front page summing up the day's world news in one image.
// The lead story is Iran's strikes on US defences in Bahrain (Tehran
// claims missile and drone hits on Patriot radars), with Russia's
// strike on Lviv, the EU-Indonesia landmark trade deal, COP31
// deadlocked in overtime in Turkey, and Eisenkot tapped to lead
// Israel's government talks. The poster (entry.png, 1024x1024 PNG)
// is held in this repository; this program writes it out to
// $MAKEFUN_OUTPUT_DIR/entry.png (default /output/entry.png) and
// checks the copy byte for byte. Node 22 standard library only,
// no network. Deterministic: the output is an exact copy of
// entry.png on every run.
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

const bytes = readFileSync(source);

// The competition caps the image at 1 MiB: refuse to ship a poster
// that would fail the gate instead of silently writing it out.
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap.`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

// Integrity check: the delivered poster must be a byte-for-byte copy
// of the one held in this repository — a short or altered file is fatal.
const written = statSync(target).size;
if (written !== bytes.length) {
  throw new Error(`Output is ${written} bytes, expected ${bytes.length}.`);
}
const digest = createHash('sha256').update(bytes).digest('hex');
const delivered = createHash('sha256').update(readFileSync(target)).digest('hex');
if (delivered !== digest) {
  throw new Error('Output hash does not match entry.png.');
}
console.log(`Wrote ${target} (${written} bytes, sha256 ${digest.slice(0, 16)}...).`);
