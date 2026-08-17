/**
 * Turns the raw Google Drive exports in /assets into web-ready files in /public/images.
 * Re-run with `node scripts/prep-images.mjs` whenever new assets land.
 */
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'assets');
const OUT = path.join(ROOT, 'public', 'images');

// `crop` is optional. zoom = fraction of source width to keep, cx/cy = crop centre
// as a fraction of the source. Use it when the default top-anchored crop frames badly.
const TEAM = [
  { file: 'Team Pictures/Newsletter Pictures/Jazmin Esparza - Chief of Staff.JPG', slug: 'jazmin-esparza' },
  {
    file: 'Team Pictures/Newsletter Pictures/Karla Patron - Marketing Specialist.JPG',
    slug: 'karla-patron',
    crop: { zoom: 0.42, cx: 0.48, cy: 0.254 }, // full-length studio shot, pull in tight
  },
  { file: 'Team Pictures/Newsletter Pictures/Simon Quintero - Executive Assistant.JPG', slug: 'simon-quintero' },
  { file: 'Team Pictures/Jake Castro - VP of Automation_.jpg', slug: 'jake-castro' },
  { file: 'Team Pictures/Catalina Saldarriaga - Operations Manager.JPG', slug: 'catalina-saldarriaga' },
  {
    file: 'Team Pictures/Shaori Velueta - Digital Marketer.JPG',
    slug: 'shaori-velueta',
    crop: { zoom: 0.62, cx: 0.52, cy: 0.585 }, // subject sits low in a tall frame
  },
  { file: 'Team Pictures/Leidy Quintero - Project Manager.png', slug: 'leidy-quintero' },
];

// Prefer the full-colour source where one exists and reads on a light
// background. Falls back to the black-on-transparent set for the marks that
// only ship white or black.
const LOGOS = [
  ['Website Logos/Best_Western_logo.svg.png', 'best-western'],
  ['Website Logos/dwellworks logo.png', 'dwellworks'],
  ['Website Logos/Quest logo dark gold low res.avif', 'quest-relocation'],
  ['Website Logos/Jacob Street Logo.webp', 'jacob-street'],
  ['Website Logos/Elevate to even plus logo.avif', 'elevate'],
  ['Website Logos/GCC_logo.png', 'good-carma'],
  ['Website Logos/Utility-Basics-Logo_30789a77-d54e-43c3-8d95-f9b98a1bbc1f.avif', 'utility-basics'],
  // Black-only marks
  ['Website Logos/Black Trasnparent Background logos/Fragomen logo.png', 'fragomen'],
  ['Website Logos/Black Trasnparent Background logos/Nyc Navigator.png', 'nyc-navigator'],
  ['Website Logos/Black Trasnparent Background logos/United Corporate Housing logo.png', 'united-corporate-housing'],
];

async function ensure(dir) {
  await fs.mkdir(dir, { recursive: true });
}

/** Portrait crop anchored near the top so heads never get cut off. */
async function portrait(srcPath, outBase, width = 1000, crop = null) {
  const img = sharp(srcPath).rotate();
  const meta = await img.metadata();
  const targetRatio = 3 / 4;
  let cropW, cropH, left, top;

  if (crop) {
    cropW = Math.round(meta.width * crop.zoom);
    cropH = Math.round(cropW / targetRatio);
    left = Math.round(meta.width * crop.cx - cropW / 2);
    top = Math.round(meta.height * crop.cy - cropH / 2);
  } else {
    cropW = meta.width;
    cropH = Math.round(cropW / targetRatio);
    if (cropH > meta.height) {
      cropH = meta.height;
      cropW = Math.round(cropH * targetRatio);
    }
    left = Math.round((meta.width - cropW) / 2);
    // Anchor at 8% down rather than centered: these are full-body vertical shots.
    top = Math.round(meta.height * 0.08);
  }

  // Keep the box inside the source no matter what the config says.
  cropW = Math.min(cropW, meta.width);
  cropH = Math.min(cropH, meta.height);
  left = Math.max(0, Math.min(left, meta.width - cropW));
  top = Math.max(0, Math.min(top, meta.height - cropH));

  await sharp(srcPath)
    .rotate()
    .extract({ left, top, width: cropW, height: cropH })
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(`${outBase}.webp`);
}

async function logo(srcPath, outBase, width = 700) {
  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true, fit: 'inside' })
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(`${outBase}.webp`);
}

async function main() {
  await ensure(path.join(OUT, 'team'));
  await ensure(path.join(OUT, 'logos'));

  for (const { file, slug, crop } of TEAM) {
    const src = path.join(SRC, file);
    try {
      await portrait(src, path.join(OUT, 'team', slug), 1000, crop);
      console.log('team  ✓', slug);
    } catch (err) {
      console.log('team  ✗', slug, err.message);
    }
  }

  for (const [file, slug] of LOGOS) {
    const src = path.join(SRC, file);
    try {
      await logo(src, path.join(OUT, 'logos', slug));
      console.log('logo  ✓', slug);
    } catch (err) {
      console.log('logo  ✗', slug, err.message);
    }
  }

  // Full team group shot, the single best "these people are cool" asset we have.
  try {
    await sharp(path.join(SRC, 'Newsletter 12_17.png'))
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(path.join(OUT, 'team-group.webp'));
    console.log('group ✓ team-group');
  } catch (err) {
    console.log('group ✗', err.message);
  }
}

main();
