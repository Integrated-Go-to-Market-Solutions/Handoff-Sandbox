# Review notes

# Round 2: AI Trained section, map edges, git authorship

## Git authorship

- **Identity:** `git config user.name` is `UmairRasheed712` and `git config user.email` is `feral.gamer012@gmail.com`, both set in your global git config. This is the identity on all 26 of your earlier commits in this repo, so I took it as yours and didn't change it.
  - **Please check:** it is not `umair@igtms.com`. If you want commits under the work address, you'd need to change it yourself.
- **Attribution off:** Claude Code's automatic attribution is turned off for this project in `.claude/settings.json` (`attribution.commit` and `pr` empty, `sessionUrl` false). Commits from here on carry no co-author or tool lines.
- **Earlier commits:** the round-1 commits (`fa4482e` to `559fc51`) still have a "Co-Authored-By" line. They're already pushed, and rewriting them would need a force-push to `dev`, so I left them. If you want them cleaned, that's a history rewrite you'd need to approve.

## Task 1: AI Excellence badge

**What changed**

- **Image:** the badge is copied to `public/images/ai-excellence-badge.webp`. It's resized from 600px to 400px, sharp at double density, and compressed from a 78 KB PNG to a 23 KB WebP with its transparent background intact.
- **Placement:** added to the AI Trained section with alt text "Handoff AI Excellence badge, powered by Coursera".
  - **Desktop (1024px and up):** a 176px stamp, rotated 10°, overlapping the bottom-right corner of the section text. The last text row is padded so the badge never sits over any words.
  - **Phones and tablets:** a smaller 96px badge, tilted -6°, in its own row after the text. No overlap.

**Files**

- `public/images/ai-excellence-badge.webp` (new)
- `src/components/sections/ai-trained.tsx`
- `src/lib/content.ts`: the alt text.
- `design-refs/ai-excellence-badge.png`: your source file, now committed with the rest of `design-refs/`.

**Decisions I made**

- **No hanging off the edge:** at 1024 and 1280px the stamp poked past the screen edge and got cut off. It now stays inside the column horizontally and only hangs over the bottom corner.
- **Served as-is:** the badge is served as-is rather than through Next.js image optimisation. That was converting it to JPEG and would have lost the transparent background.

**Please check**

- The stamp's size and angle on desktop.

## Task 2: Coursera line

**What changed**

- **Placement:** added right next to the badge. On phones and tablets it's to the right of the badge in the same row. On desktop it's the last line of the text block, with the stamp on its right and about 34px of space between them.
- **⚠ DRAFT COPY, needs approval before launch:** "Every Handoff professional earns our AI Excellence certification, powered by Coursera, with ongoing access to new courses as AI evolves." It's also marked as a draft in `content.ts` (`aiTrained.certLine`).

**Files**

- `src/components/sections/ai-trained.tsx`
- `src/lib/content.ts`

**Please check**

- Approve or edit the wording.
- Confirm the Coursera claim is accurate before it goes live.

---

# Round 1

## Summary

All five blocks and both stretch goals are done. Each has its own commit, pushed to `dev`:

| Block | Commit |
|---|---|
| Block 1: hero and header | `fa4482e` |
| Block 2: credibility strip | `898cfa4` |
| Block 3: talent map | `6c5730f` |
| Block 4: hiring system | `6d52580` |
| Block 5: quick wins | `0b1da2e` |
| Stretch goals | `a24b125` |

Nothing was deployed, and `vercel` was never run.

**Couldn't do** (details in each block):
- **"See how we make it happen":** that link doesn't exist anywhere on the site, so there was nothing to turn into an anchor or pair with the promo video.
- **AI Excellence badge:** there's no badge image in `design-refs/`, so it was skipped.
- **Placeholders:** the talent map uses placeholder avatars and the promo video as a placeholder until real talent assets exist. This is marked in the code.

**Things only you can judge on a real screen:**
- **Hiring system:** the sticky scroll feel, on the homepage and `/how-it-works`.
- **Reel slider:** hover and click behaviour on desktop, and swiping on a phone.
- **Reduced motion:** with it turned on in your OS, nothing pins or autoplays.
- **New copy:** "Meet your talent" plus its intro line, and "Training includes".

**Final check:** the homepage, `/how-it-works`, `/about` and `/industries/corporate-relocation`, each at 1440, 768 and 375px wide: no horizontal scroll, no elements running off the page, no console errors. TypeScript and ESLint pass.

**About the testing:** the test browser ran in the background for most of the session. It often wouldn't draw screenshots, play video or run smooth scrolling, so most checks were done by measuring the page directly, and I've said so wherever that matters.

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

---

## Block 4: Handoff Hiring System (horizontal sticky version)

**What changed**

- **Rename:** "Hands Off Hiring System" is now "Handoff Hiring System" in all visitor-facing text: the section label, the `/how-it-works` meta description, and the video label. Component and file names are unchanged.
- **Content:** the four steps and their copy are unchanged. The step numbers and the old road visual are gone.
- **Desktop (1024px and up):**
  - The section pins in place below the header while you scroll.
  - A teal line fills from left to right, and each step's icon pops in, with a slight bounce, as the line reaches it. Its card then fades up.
  - Once all four are in, the section lets go and the page scrolls on normally.
  - The line fills over the first 80% of the pinned scroll; the rest holds the finished state for a moment.
- **Icons:**
  - Discovery: magnifying glass
  - The Vet: target/scope
  - The Shortlist: two people
  - The Guarantee: checkmark
- **The Guarantee highlight:** a larger, filled teal icon with a glow, and a solid teal card.
- **Under 1024px:** a plain vertical stack, with no pinning and no horizontal scrolling. Icons pop in as each step enters the screen.
- **Reduced motion:** no pinning, the line fully filled, and all steps shown at once.
- **Both pages:** this applies to the homepage (compact version) and `/how-it-works` (full version). The homepage on phones still shows titles only, as requested earlier.

**Files**

- `src/components/sections/hiring-highway.tsx` (rewritten)
- `src/app/globals.css`: the old road styles are replaced by the new pop-in styles. Also adds a `short:` variant for desktop screens under 820px tall.
- `src/lib/content.ts`: rename.
- `src/app/how-it-works/page.tsx`: meta description.
- `src/components/sections/promo-video.tsx`: comment only.

**Decisions I made**

- **The Vet icon:** the site's existing target/crosshair icon is used as the "radar/scope". I reused the existing icon set so the style matches.
- **Short laptops:** on shorter screens (720 to 820px tall), spacing and type tighten so the whole pinned view fits. Checked at 1440×900, 1366×768, 1280×720 and 1024×768.
- **Scroll length:** the pinned run is about 1.1 screens of scrolling on the homepage and 1.5 on `/how-it-works`.
- **Homepage link:** the whole compact section used to be one big link to `/how-it-works`. That doesn't work with a pinned section, so the "See every step" button below it is now the link.
- **`/v2`:** its section label also reads "Handoff Hiring System" now, because `process.tsx` takes the label from the shared content. I didn't edit `process.tsx` or any `/v2` file. Everything else on `/v2` (six steps, headline) is unchanged.

**Couldn't do**

- **Visual check:** the test browser stopped drawing partway through this block, so I verified by measurement instead of screenshots: pin position, line fill level and which steps are showing at each scroll point, plus fit on each screen size.
- **Reduced motion:** the test browser can't switch it on. I confirmed the code path and that the reduced-motion styles are generated.

**Please check**

- Scroll through the section on the homepage and on `/how-it-works` on a real desktop. Check the pin, fill and pop-in feel right, and that it lets go cleanly.
- Test with reduced motion turned on in your OS (no pinning, everything visible).
- On a phone: the vertical stack, with icons popping in.

---

## Block 5: Quick wins

**What changed**

- **Roles section ("Built for your industry"):** the five repeated "See the roles" links are removed. The industry tiles still link to their pages. One centred "Meet Your Talent" button below the tiles scrolls to the new map section (`#meet-your-talent`), landing just under the header.
- **"We are the overseas talent" videos:** the first and second are swapped on the homepage, so "Our remote culture" now comes first, then "A day with Handoff", then "Handoff values".
- **AI Trained section:** a "Training includes" list under the paragraph, with "AI fundamentals (how it works)" and "Mastering prompts" as check-marked pills.

**Files**

- `src/components/sections/industries-teaser.tsx`
- `src/components/sections/vibes.tsx`: optional `order` setting.
- `src/app/page.tsx`
- `src/components/sections/ai-trained.tsx`
- `src/lib/content.ts`: the training topics.

**Decisions I made**

- **Video swap on the homepage only:** `/v2` uses the same video section, so I left the shared content order alone and passed the new order from the homepage. `/v2` keeps its original order.
- **Topics label:** "Training includes" is my wording.

**Couldn't do**

- **"See how we make it happen":** that phrase doesn't exist anywhere on the site. I searched all the source and content. So there was nothing to turn into an anchor link, and no roles block next to it to swap for the promo video. The promo video (`handoff-promo.mp4`) is still on `/how-it-works` below the hiring system. If you point me to where this link should go, it's a small change.
- **AI Excellence badge:** there's no badge image in `design-refs/` (only the map files), so I skipped it as instructed.

**Please check**

- Homepage: the "Meet Your Talent" button scrolls smoothly up to the map.
- The new video order.
- The training-topic pills in the AI Trained section.

---

## Stretch goals

### 1. Icon contrast on light backgrounds

**What changed**

- **"Why LATAM" icons:** now dark (#1f1f1f) inside a white circle with a royal-blue outline. The circle fills royal blue and the icon turns white on hover. These icons used to be cyan on pale cyan, which washed out on the light background.
- **"Why LATAM" reasons:** each of the three is now a white card, so the icons and text sit on a solid surface.
- **"Built for your industry" tiles:** each is now a white card with the same dark-icon, royal-ring treatment and hover.
- **Credibility-strip industry pills:** dark icons with a royal outline, filling royal with white text and icon on hover.

**Files**

- `src/components/icon.tsx` (`IconBadge`, only used by "Why LATAM")
- `src/components/sections/why-latam.tsx`
- `src/components/sections/industries-teaser.tsx`
- `src/components/sections/credibility-strip.tsx`

**Decisions I made**

- **Hover colour:** the credibility pills now fill royal on hover instead of teal, to match this icon treatment.
- **Scope:** I only restyled icons on light backgrounds. The icons on dark sections were already high-contrast.

### 2. "We are the overseas talent" slider (homepage)

**What changed**

- **One at a time:** only one video ever plays.
- **Desktop and tablet:** the middle reel is the main one, shown larger, and plays as a muted loop while the section is on screen.
  - Hovering a side reel pauses the main one and plays that reel as a silent preview. Moving away resumes the main one.
  - Clicking a side reel slides it into the middle and plays it with sound.
  - Clicking the main reel toggles its sound.
- **Phones:** a swipeable row. The centred reel is the main one, and tapping a reel plays it with sound and centres it.
- **Reduced motion:** nothing autoplays; a click plays with sound.

**Files**

- `src/components/vibes-player.tsx` (new)
- `src/components/sections/vibes.tsx`: new `slider` setting.
- `src/app/page.tsx`

**Decisions I made**

- **`/v2`:** the new player is homepage-only. `/v2` keeps its old three-autoplay grid, since you asked me not to touch it.
- **Starting video:** with the Block 5 order, "A day with Handoff" is in the middle, so it starts as the main reel.

**Couldn't do**

- **Watching real playback:** the test browser was in the background, so it wouldn't play media or report what's on screen. I tested the logic by recording every play and pause request instead:
  - at rest, only the middle reel plays (muted)
  - hovering a side reel plays only that one (muted)
  - moving away resumes the main one
  - clicking a side reel moves it to the middle and plays only it, with sound
  - on phones, the centred reel plays

**Please check**

- Hover and click the three reels on a real desktop.
- Swipe through them on a phone.
