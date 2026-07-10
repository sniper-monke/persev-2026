const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, '..', 'persev-2026-website', 'public', 'assets');
const exts = ['.jpg', '.jpeg', '.png', '.webp'];
const widths = [360, 720, 1280, 1920];
const formats = ['avif', 'webp'];

async function processFile(file) {
  const srcPath = path.join(assetsDir, file);
  const parsed = path.parse(file);
  if (parsed.ext && !exts.includes(parsed.ext.toLowerCase())) return;

  try {
    const img = sharp(srcPath, { failOnError: false });
    const metadata = await img.metadata();
    for (const w of widths) {
      if (metadata.width && metadata.width < w) continue; // skip upscaling
      for (const fmt of formats) {
        const outName = `${parsed.name}@${w}.${fmt}`;
        const outPath = path.join(assetsDir, outName);
        if (fs.existsSync(outPath)) continue;
        try {
          await img
            .resize({ width: w })
            [fmt]({ quality: 72 })
            .toFile(outPath);
          console.log('Wrote', outPath);
        } catch (e) {
          console.warn('Failed to write', outPath, e.message);
        }
      }
    }
  } catch (e) {
    console.warn('Failed processing', file, e.message);
  }
}

async function main() {
  if (!fs.existsSync(assetsDir)) {
    console.error('assets dir not found:', assetsDir);
    process.exit(1);
  }
  const files = fs.readdirSync(assetsDir);
  for (const f of files) {
    await processFile(f);
  }
  console.log('Done');
}

main().catch(err => { console.error(err); process.exit(1); });
