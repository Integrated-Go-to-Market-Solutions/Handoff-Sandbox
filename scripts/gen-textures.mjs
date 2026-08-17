import fs from 'node:fs';

// Deterministic PRNG so the pattern is stable across rebuilds.
let seed = 20260816;
const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;

const CELL = 62, N = 10, S = CELL * N, R = CELL / 2, SW = 9;
let d = '';
for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    const px = x * CELL, py = y * CELL;
    // Truchet: quarter arcs joining edge midpoints. Tiles seamlessly.
    if (rnd() > 0.5) {
      d += `M${px} ${py + R}A${R} ${R} 0 0 1 ${px + R} ${py}`;
      d += `M${px + CELL} ${py + R}A${R} ${R} 0 0 1 ${px + R} ${py + CELL}`;
    } else {
      d += `M${px + R} ${py}A${R} ${R} 0 0 1 ${px + CELL} ${py + R}`;
      d += `M${px + R} ${py + CELL}A${R} ${R} 0 0 1 ${px} ${py + R}`;
    }
  }
}

const doodle = (stroke) =>
`<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${SW}" stroke-linecap="round"/>
</svg>`;

// Light variant sits on white/bone surfaces, dark variant on ink sections.

fs.writeFileSync('public/textures/grain.svg',
`<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220">
<filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.86" numOctaves="4" stitchTiles="stitch"/></filter>
<rect width="220" height="220" filter="url(#g)"/>
</svg>`);

console.log('wrote doodle-light.svg, doodle-dark.svg, grain.svg');
