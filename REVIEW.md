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
