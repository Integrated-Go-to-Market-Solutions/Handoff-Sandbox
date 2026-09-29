# Review notes

# Round 3

_Summary is added here once all eight tasks are done._

## Task 1: "Trusted by teams" and "Built for your industry" merged

**What changed**

- **Heading:** now reads "TRUSTED BY TEAMS THAT KEEP MOVING FORWARD | BUILT FOR YOUR INDUSTRY", in bold white display type at about 2.4rem on desktop, with a teal divider. On phones and tablets the two halves stack, and the second half is teal.
- **Industry links:** now proper cards, with the same five links to the industry pages:
  - **Card design:** a 56–64px icon in a teal ring, the label, and a small "See roles →" hint.
  - **Hover:** the card lifts, the border turns teal with a soft glow, and the icon fills teal.
  - **Layout:** five across on desktop, three plus a centred two on tablet, two plus two plus one full-width on phones.
- **Background:** the same grayscale culture video the "Built for your industry" section used (`/video/culture.mp4`, 2.4 MB), behind a dark overlay.
  - The video uses the existing player: muted, loops, loads metadata only, has a poster frame, and plays only while on screen.
  - With reduced motion it shows the poster still.
- **Logo scroll:** now runs on a light frosted band across the section.
- **Stat cards:** replaced by one divided glass band, centred under the logos, with large teal numbers ($50K+, 96%+) and small uppercase labels. The numbers and labels are unchanged. The count-up now shows the final numbers straight away when reduced motion is on.

**Files**

- `src/components/sections/credibility-strip.tsx`
- `src/components/sections/stats.tsx`: new `variant="band"` option, plus the reduced-motion fix.

**Decisions I made**

- **"Darker" heading:** the brief asked for a darker, bolder heading and also a dark overlay on the video. Dark text would disappear on a dark background, so "darker" is read as heavier and higher-contrast: bold white, bigger, with a teal accent.
- **Logos on a light band:** most of the client logo files are dark artwork (Fragomen's is a dark box), so inverting them would ruin some. The band keeps every logo readable.
- **Stats layout:** one shared band instead of two separate cards, so they read as part of the section rather than tacked on.

**Please check**

- The heading wording and the "|" divider.
- Whether the logo band feels right against the dark video.

## Task 2: "Built for your industry" removed

**What changed**

- **Section removed:** taken off the homepage, with its component file deleted (`src/components/sections/industries-teaser.tsx`; code only, no media). Its background video now lives in the task 1 section.
- **No broken links:** nothing linked to it. I checked every in-page `#` link on the homepage, and all of them still resolve.
- **Homepage comment:** updated to match the new page structure.

**Files**

- `src/app/page.tsx`
- `src/components/sections/industries-teaser.tsx` (deleted)

**Decisions I made**

- **"Meet Your Talent" button:** it lived in this section and went with it. The talent map now comes directly after the credibility section, so it's the very next thing on the page anyway.

## Task 3: AI Excellence badge straightened

**What changed**

- **No rotation:** removed on every screen size (it was 10° on desktop and -6° on smaller screens).
- **Size and position unchanged:** 176px on the bottom-right corner of the text on desktop, 96px beside the Coursera line on phones and tablets. It still doesn't overlap any text.

**Files**

- `src/components/sections/ai-trained.tsx`

## Task 4: Map removed from the "You are the bottleneck" section

**What changed**

- **Map removed:** taken out of the `Problem` section ("You are the bottleneck") only. That includes the decorative panel that held it: on desktop it filled the right half, and on phones it added a tall empty block above the heading.
- **Layout:** the intro text now sits in a single column.
- **Other maps unchanged:** the "Why LATAM" map and the talent map section are untouched.

**Files**

- `src/components/sections/problem.tsx`
- `src/app/globals.css`: removed the panel's now-unused fade styles.

## Task 5: "We are the overseas talent" videos polished

**What changed**

- **Dimmed state:** videos that aren't playing sit at 55% brightness and 55% saturation. They're clearly visible, not black.
- **Playing state:** whichever video is playing (the main one, or a side video being previewed on hover) is at full brightness. The change animates smoothly over 0.7s.
- **Active card:**
  - A teal border, a soft teal ring and an outer glow.
  - A small "Now playing" tag, or "Preview" while hovering, with a pulsing dot.
  - The caption goes to full opacity.
- **Side cards:** shrink slightly (96%) and lose the glow.
- **Framing:** a soft teal glow sits behind the row. Spacing is a little wider, and the caption gradient is deeper for easier reading.
- **Phones:**
  - Position dots under the swipe row show which video is centred. Tapping a dot scrolls to that video without turning the sound on.
  - The scrollbar is hidden.
- **Reduced motion:** the transitions are switched off (states change instantly), and the tag's pulse is off.
- **Behaviour unchanged:**
  - Only one video plays at a time.
  - Hovering a side video previews it silently.
  - Clicking moves it to the middle with sound.
  - Videos only play while on screen, and still load metadata only, with posters.

**Files**

- `src/components/vibes-player.tsx`

**Please check**

- The dimming level and glow on a real screen. If you want the side videos brighter, change `brightness-[0.55]`.

## Task 6: Client testimonial cards with background videos

**What changed**

- **Three clips compressed** into `public/video/testimonials-web/`, each 720×1280, 18s, with no audio track, plus a poster frame:

  | Clip | Size | Taken from the original |
  |---|---|---|
  | `pivt.mp4` | 2.5 MB | 0:14–0:32 |
  | `quest.mp4` | 1.5 MB | 0:30–0:48 |
  | `rincon-rehab.mp4` | 2.3 MB | 0:28–0:46 |

  The 4K originals (400–500 MB each) stay in `F:\Official work\IGTMS\testimonial-originals\`; nothing from there was copied in.
- **Card defaults:** each of the five cards has a video background. At rest it shows only the person's avatar, name and title over a dimmed (50% brightness), paused video.
- **Hover (mouse):** the video brightens to 95%, zooms slightly and plays. The quote slides up in a frosted dark panel anchored to the bottom, so most of the video stays visible:
  - desktop: the panel covers at most 45% of the card
  - tablet: about 62%
  - 375px phone: 57%
- **Touch and keyboard:** tapping a card (or pressing Enter) opens it, tapping another switches, and tapping again closes. A small "Tap to read" tag shows only on touch screens.
- **Video assignment (mixed, all three used, two repeated):**

  | Card | Video |
  |---|---|
  | Steve Frey | Quest |
  | Robert Horsley | Rincon Rehab |
  | Lynn Greenberg | PIVT |
  | Bob Rosing | Quest |
  | Ryan Hoover | Rincon Rehab |

- **Performance:**
  - `preload="none"` with a poster, so no video data loads until a card is opened.
  - Muted.
  - Only the open card's video plays, and only while the section is on screen.
- **Reduced motion:** the videos stay on their still poster and the transitions are instant. The quote still opens on hover or tap.
- **Text unchanged:** all quotes, names and titles are exactly as before. They're still in the page for screen readers when a card is closed.
- **Other pages:** the same section appears on `/results` and the industry pages, so they get the new cards too.

**Files**

- `src/components/sections/client-quotes.tsx` (rewritten)
- `public/video/testimonials-web/`: `pivt`, `quest` and `rincon-rehab`, each an `.mp4` plus a `.jpg` poster.

**Decisions I made**

- **Choosing the segments:** each clip starts after the speaker's burned-in name tag (for example "Robert Brezosky, CEO at Quest Relocation") and avoids the "What was it like working with Handoff?" title cards. A different person's name showing behind a card would be confusing.
- **Taller cards on phones:** 3:4 instead of 4:5, with slightly smaller quote text, so the quote doesn't swallow the video.

**⚠ Placeholder content**

- **The videos don't match most of the people on the cards.** Only Lynn Greenberg's card (PIVT) shows the actual person. Steve Frey, Robert Horsley, Bob Rosing and Ryan Hoover are shown over Quest and Rincon Rehab footage of other people, until their own videos exist.

**Please check**

- Hover and tap feel right on a real device.
- On a 320px phone, the longest quote still covers most of the card.

## Task 7: "Two ways to work together" pricing

**What changed**

- **Tighter cards:**
  - Padding goes from 32px to 24–28px.
  - Smaller plan name and price, with the price and terms on one line.
  - Tighter spacing and a regular-size button instead of large.
  - On desktop they now hold more but are slightly shorter (590px, was 594px), with equal heights.
- **Unchanged:** prices, plan names, tags and the typing animation.
- **New "Both models include" panel** above the cards, with six check-marked items.
- **Each card has its own list** in the same panel style, so neither reads as "base plan plus extras":
  - **Managed Staffing:** "Also included with Managed Staffing", six items.
  - **Recruitment & Placement:** "How Recruitment & Placement works", four items. These are its existing card copy split into points (vet, employ directly, 90-day guarantee, "three of our last four new clients started here"), so there are no new claims. The long description paragraph each card had is replaced by these lists.

**Files**

- `src/components/sections/models.tsx`
- `src/lib/content.ts`: `modelsShared`, plus `extrasLabel` and `extras` on each model.
- `src/app/page.tsx` and `src/app/industries/[slug]/page.tsx`: use `<Models detailed />`.

**Decisions I made**

- **`/v2` keeps the old version:** it renders this section too, so the previous design is kept as the default and only the homepage and industry pages ask for the new one. `/v2` is unchanged.
- **No invented terms:** no new prices, numbers or guarantee terms. "The hiring guarantee" is kept general, and the only guarantee detail shown is the 90-day one the site already states.

**⚠ Placeholder copy (needs approval)**

- **Both models include:** Candidate sourcing · Multi-round vetting · Skills and culture assessments · AI-trained talent · A curated shortlist · The hiring guarantee.
- **Also included with Managed Staffing:** Employment and payroll handled by Handoff · Compliance · Office space and equipment · Day-to-day supervision · Performance management · Replacement support.

**Please check**

- Confirm each placeholder item is accurate for both models, especially "The hiring guarantee" and "Replacement support".

---

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

## Task 3: AI tool logos

**What changed**

- **New row:** added to the AI Trained section, labelled "Tools our talent trains on". It never says "partners".
- **Logos:** Claude, ChatGPT (with the OpenAI mark) and Gemini, each shown as its logo next to the product name.
- **Style:** all three in one style, a white single-colour mark.
- **Size:** 26px, on one row at 375px and up. On a 320px phone it wraps to two plus one.

**Source and files**

- **Source:** all three icons come from LobeHub Icons (`@lobehub/icons-static-svg` 1.95.1, MIT licence), a widely used open-source AI brand icon set.
- **What I changed:** only the fill colour, to white, and the default size attributes. I compared the path data with the originals, and it's identical.
- **Files:** saved as `public/images/ai-tools/claude.svg`, `openai.svg` and `gemini.svg`, loaded from the site itself (nothing external at runtime). `public/images/ai-tools/LICENSE.txt` holds the MIT notice and says the marks are Anthropic, OpenAI and Google trademarks.
- **Code:** `src/components/sections/ai-trained.tsx`, and `src/lib/content.ts` for the label and tool list.

**Decisions I made**

- **Why not Simple Icons:** I checked it first (CC0). It has Claude and Gemini but no OpenAI logo, so I used LobeHub for all three to keep one consistent style.
- **ChatGPT name:** the OpenAI entry is labelled "ChatGPT", which is the product your talent uses, with the OpenAI mark.

**Couldn't do**

Nothing. All three logos were available.

**Please check**

- If you'd rather use files straight from each company's own press kit, drop them into `public/images/ai-tools/` with the same names.
- Some brand guidelines ask for their full-colour logo only, or have rules about use next to other brands. Worth a quick legal and brand check before launch.

## Task 4: Course typing animation

**What changed**

- **Placement:** under "Courses like" in the AI Trained section.
- **Animation:** types each course name, holds it for 1.5s, deletes it and types the next, looping. It pauses while the section is off screen.
- **Stable layout:** space for the longest name is reserved, so the section never shifts as names change length. On a 320px phone that's two lines, reserved in advance.
- **Screen readers:** they get the full list at once.
- **Reduced motion:** a static list of all five names, with no typing.
- **⚠ PLACEHOLDER course names:** "AI Fundamentals: How AI Works", "Mastering Prompts", "AI for Everyday Workflows", "Automating Tasks with AI Tools", "Responsible AI Use". They're marked as placeholders in `content.ts` (`aiTrained.courses`).

**Files**

- `src/components/typing-cycle.tsx` (new)
- `src/components/sections/ai-trained.tsx`
- `src/lib/content.ts`

**Decisions I made**

- **Why not the pricing typewriter directly:** it types a list once from empty to full, so it can't type-delete-retype. The new component uses the same approach: the full text for screen readers, the reserved space, the same reduced-motion check, and starting only when on screen.
- **"Training includes" pills:** kept. They cover the two topics from round 1, and the typing line shows example courses.

**Please check**

- The typing speed feels right, on a real screen.
- Replace the placeholder names with the real Coursera course names.

## Task 5: Sharp map edges

**What changed**

- **New vector mask:** the talent map's land now uses `public/brand/latam-land.svg`, a true vector shape (3 outlines, about 1,000 points, 11 KB), instead of the old 507×647 PNG. The edges are smooth and sharp at any size or screen density.
- **Old file:** `latam-land.png` (the jagged one) is removed, since this replaces it.
- **How it was made:**
  1. The site's coastline outline (`latam-outline.svg`) is only a thin traced line, so it can't be filled directly.
  2. I rebuilt the land area from it at twice the outline's full resolution (2028×2586).
  3. I traced the land's edge into vector outlines and simplified them to within 0.35px.
- **Same colour and position:**
  - It uses the same coordinate space as the pins and routes, and the same grey gradient fill.
  - Against the old mask it matches 98.7%, with an identical bounding box. The remaining difference is under a pixel along the coast.
  - All eight pins still sit on land at desktop, tablet and mobile.

**Files**

- `public/brand/latam-land.svg` (new)
- `public/brand/latam-land.png` (removed)
- `src/components/sections/talent-map.tsx`: now points at the SVG.

**Couldn't do**

- **Screenshots:** the test browser wouldn't take them this time. I verified by overlaying the old and new masks and by checking each pin against the mask.

**Please check**

- Look at the map edges on a high-density screen or with the page zoomed in.

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
