import sharp from 'sharp';
import fs from 'node:fs';
const dir = 'public/images/team';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp')).sort();
const W = 260, H = 347, COLS = 4;
const rows = Math.ceil(files.length / COLS);
const tiles = await Promise.all(files.map(async (f, i) => ({
  input: await sharp(`${dir}/${f}`).resize(W, H, {fit:'cover'}).png().toBuffer(),
  left: (i % COLS) * W, top: Math.floor(i / COLS) * H,
})));
await sharp({create:{width:W*COLS, height:H*rows, channels:3, background:{r:31,g:31,b:31}}})
  .composite(tiles).png().toFile('scripts/team-sheet.png');
console.log(files.map((f,i)=>`${i+1}. ${f}`).join('\n'));
