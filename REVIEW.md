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
