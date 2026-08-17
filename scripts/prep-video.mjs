/**
 * Transcodes the raw Drive video exports into web-ready loops.
 *
 * The source files are 4K vertical HEVC (.MOV) straight off a phone or
 * mirrorless. HEVC does not play in most browsers, so everything is
 * re-encoded to H.264 MP4, stripped of audio (these autoplay muted) and
 * scaled down hard. Run with `node scripts/prep-video.mjs`.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import ffmpeg from 'ffmpeg-static';

const SRC = 'assets/Handoff Videos ';
const OUT = 'public/video';

const CLIPS = [
  { file: 'Handoff Vibes.MOV', slug: 'vibes', start: 2, duration: 22 },
  { file: 'Meet The Talent (Jazmin).MOV', slug: 'jazmin', start: 4, duration: 16 },
  { file: 'Meet Shaori.MOV', slug: 'shaori', start: 18, duration: 15 },
];

fs.mkdirSync(OUT, { recursive: true });

const run = (args) => execFileSync(ffmpeg, args, { stdio: ['ignore', 'ignore', 'pipe'] });

for (const clip of CLIPS) {
  const src = path.join(SRC, clip.file);
  if (!fs.existsSync(src)) {
    console.log('skip (missing)', clip.slug);
    continue;
  }

  const mp4 = path.join(OUT, `${clip.slug}.mp4`);
  const poster = path.join(OUT, `${clip.slug}.jpg`);

  try {
    run([
      '-v', 'error',
      '-ss', String(clip.start),
      '-i', src,
      '-t', String(clip.duration),
      '-an',                                   // muted autoplay, so drop audio entirely
      '-vf', 'scale=-2:1280',                  // 720x1280 for a 9:16 player
      '-c:v', 'libx264',
      '-profile:v', 'high',
      '-crf', '30',
      '-preset', 'slow',
      '-pix_fmt', 'yuv420p',                   // required for Safari
      '-movflags', '+faststart',               // metadata first, so it starts streaming
      '-y', mp4,
    ]);

    run([
      '-v', 'error',
      '-ss', String(clip.start + 1),
      '-i', src,
      '-frames:v', '1',
      '-vf', 'scale=-2:1280',
      '-q:v', '4',
      '-y', poster,
    ]);

    const mb = (fs.statSync(mp4).size / 1024 / 1024).toFixed(2);
    console.log(`ok  ${clip.slug.padEnd(8)} ${mb} MB  (${clip.duration}s)`);
  } catch (err) {
    console.log('fail', clip.slug, String(err.stderr ?? err).slice(0, 200));
  }
}
