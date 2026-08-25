import fs from 'node:fs';

fs.writeFileSync('public/textures/grain.svg',
`<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220">
<filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.86" numOctaves="4" stitchTiles="stitch"/></filter>
<rect width="220" height="220" filter="url(#g)"/>
</svg>`);

console.log('wrote grain.svg');
