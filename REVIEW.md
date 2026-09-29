# Review notes

_Summary is added at the top once all blocks are done._

General notes for the whole session:

- Nothing was deployed, and `vercel` was never run.
- `/v2` and `process.tsx` were not touched.
- No files were deleted.
- `public/Latam v2_1.mp4` (21.7 MB) was already committed before this session. I did not add it, and I added no file over 20 MB.
- `design-refs/` (the map export plus a 2.9 MB PNG) was untracked. It gets committed with the first `git add .`, as instructed.

---

## Block 1: Hero and header

**What changed**

- **Hero headline:** now exactly three lines: "THE BEST OF LATAM." / "AI TRAINED." / "HERE TO STAY.". The last line is still teal, in the same display font.
- **Hero link:** removed "Talk to Our Team" from the hero. "Get Started Today" stays.
- **Header:** the "Talk to Our Team" button is replaced by two compact buttons:
  - "Hire Today": teal filled, links to `/contact`.
  - "Join Our Talent Pool": white with a teal outline, links to `/contact` for now.
- **Mobile menu:** the same two buttons appear full-width at the bottom, and tapping one closes the menu.

**Files**

- `src/lib/content.ts`: new `hero.headlineLines`.
- `src/components/sections/hero-bright.tsx`
- `src/components/site-header.tsx`

**Decisions I made**

- **Separate headline field:** `hero.headline` also feeds the `/v2` hero, so I added a separate `headlineLines` field instead of editing it. `/v2` is unchanged.
- **Headline size:** it now scales with the screen width, so "THE BEST OF LATAM." always stays on one line. It's 112px on desktop (was 120px across four lines), 68px on tablet, 31px on a 375px phone, and still fits at 320px. It's smaller on phones than before (was 48px), because the longest line has to fit on one row.
- **Button hovers:** "Hire Today" turns dark with teal text; "Join Our Talent Pool" fills teal.
- **Footer:** its "Talk to Our Team" link was left alone, since the brief only covered the hero and header.

**Couldn't do**

Nothing.

**Please check**

- Header on desktop: both buttons fit next to the nav down to 1024px.
- Mobile menu: the two buttons are at the bottom, so on short phones you scroll to reach them (as with the old button).
- `/industries/hospitality`: same hero, with the industry-specific subhead.

---

## Block 2: Credibility strip, industries and metrics

**What changed**

The strip under the homepage hero is now one section with four parts:

- **Heading:** "Trusted by teams that keep moving", centred.
- **Industry links:** pill links to the five industry pages (hospitality, startups, agencies, e-commerce, corporate relocation), sitting above the logo scroll.
- **Logo scroll:** 53s per loop instead of 46s, so about 15% slower.
- **Metrics:** the two talent metrics the site currently shows, "$50K+ Saved per hire" and "96%+ Client retention", now sit under the logos with the same card style and count-up animation.

The other two metrics ("40+ Clients", "200+ Placements") stay in their original place further down the homepage. No other sections moved.

**Files**

- `src/components/sections/credibility-strip.tsx` (new)
- `src/app/page.tsx`: uses the new strip; the lower stats row shows Clients and Placements.
- `src/components/sections/stats.tsx`: optional `include` and `bare` settings. The count-up animation is now limited to each block's own cards, so two copies on one page don't interfere.
- `src/components/sections/logo-marquee.tsx`: optional `durationSeconds` setting. The default is unchanged, so `/v2` still runs at 46s.

**Decisions I made**

- **Industry pages:** they still show all four metrics, because they have no logo strip for the other two to join.
- **Metric labels:** I kept the site's existing labels. The 96% card reads "Client retention", not "retention rate". Change it in `proofStats` in `content.ts` if you want different wording.
- **Mobile:** the two metric cards stay side by side (158px wide each at 375px, 130px at 320px), which keeps the strip compact.
- **Repeated industries:** the "Built for your industry" section right below still lists the same five industries with more detail. I left it, since you asked not to reorder or remove sections. You may want to trim one of the two later.

**Couldn't do**

Nothing.

**Please check**

- The strip on the homepage at all three sizes. The industry links wrap to 4 + 1 on tablet and 2 + 2 + 1 on mobile.
- The logo speed feels right.
- The lower stats row now has just two cards, centred.

---

## Block 3: Interactive talent map

**What changed**

- **Hero:** the map is removed from the hero only. The maps in the "Why LATAM" and "Problem" sections are untouched.
- **New "Meet your talent" section:** a dark section with the LATAM map, placed right before "Built for your industry" (the area with the repeated "See the roles" links). It includes:
  - eight circular talent pins, each with a pill-shaped role label (Digital Marketing Manager, Full Stack Developer, AP/AR Specialist, AI Specialist, Relocation Coordinator, Guest Services Specialist, Reservations Manager, Sales Development Representative)
  - dashed teal routes between the pins
  - three pulsing ring markers, based on `design-refs/HANDOFFMAP.png`
- **Hover:** a pin scales up with a teal glow, and its label turns teal.
- **Click:** opens a pop-up playing `public/videos/handoff-promo.mp4`. It closes with the X, the Escape key or a click outside.
- **Placeholders:** the video is a PLACEHOLDER, labelled as such in the code (`PLACEHOLDER_VIDEO` in `talent-map.tsx`) and in the pop-up's accessible label. The photos in the code export were `placehold.co` URLs, so every pin uses a neutral local avatar (also marked as a placeholder in the code). No images load from outside the site.
- **Mobile (under 768px):** the map shows the pins only, with no labels, and the eight roles are listed underneath as tappable rows that open the same pop-up. The labels can't collide this way.

**Files**

- `src/components/sections/talent-map.tsx` (new)
- `src/components/video-modal.tsx` (new, reusable pop-up)
- `public/brand/latam-land.png` (new, 3.3 KB): a filled land mask made from the existing `latam-outline.svg`, which is only a coastline outline.
- `src/app/page.tsx`: adds the section.
- `src/components/sections/hero-bright.tsx`: map removed.

**Decisions I made**

- **Rebuilt, not pasted:** the Figma export is a fixed 7,000px canvas, so I rebuilt it as a responsive component. The pins, routes and land all share the outline SVG's coordinate space, so they stay aligned at any width.
- **Pin positions:** approximated on the site's own map outline to match the reference image (for example Digital Marketing Manager on Mexico, Relocation Coordinator on Brazil's east tip, SDR in Patagonia). Guest Services sits slightly west of the reference, so its label fits on a 768px tablet.
- **Section copy:** the heading "Meet your talent" and the one-line intro are my copy. Please check them.
- **Map size:** 600px wide on desktop, 560px on tablet, full width on phones.
- **Reduced motion:** the pulse animation only runs when reduced motion is off.

**Couldn't do**

- **Real photos:** there are none in the repo for these roles, so the pins use placeholder avatars.

**Please check**

- The map section on the homepage at all three sizes: the pins sit on the right countries, and no labels overlap.
- Click a pin, and on mobile a role row: the pop-up opens and closes.
- Replace the placeholder avatars and video when the real talent assets exist.
- I made a first attempt at a filled map (`latam-fill.svg`) that didn't work. It's in my scratch folder, not in the repo, so nothing was deleted from the project.
