"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "../reveal";
import { Icon, type IconName } from "../icon";
import { problem } from "@/lib/content";

/* The site's one card system: each face its own gradient, outlined in
   cyan. Front and back swap between the light and dark ends of the palette
   so the flip reads as a real change. Text always sits on the high-contrast
   end of its gradient (ink on cyan and light, bone on royal and carbon). */
const accents = [
  {
    front: "bg-gradient-to-br from-cyan to-cyan-dim text-ink",
    back: "bg-gradient-to-br from-ink-300 to-ink text-bone",
    ring: "border-ink/40 text-ink",
    body: "text-ink/80",
  },
  {
    front: "bg-gradient-to-br from-royal to-azure text-bone",
    back: "bg-gradient-to-br from-white to-bone text-ink",
    ring: "border-bone/60 text-bone",
    body: "text-bone/85",
  },
  {
    front: "bg-gradient-to-br from-white to-bone text-ink",
    back: "bg-gradient-to-br from-royal to-azure text-bone",
    ring: "border-cyan text-cyan-dim",
    body: "text-ink/75",
  },
  {
    front: "bg-gradient-to-br from-ink-300 to-ink text-bone",
    back: "bg-gradient-to-br from-cyan to-cyan-dim text-ink",
    ring: "border-cyan text-cyan",
    body: "text-bone/80",
  },
] as const;

const glow =
  "border-2 border-cyan shadow-[0_0_28px_-10px_rgba(61,214,189,0.6)] group-hover:shadow-[0_0_36px_-6px_rgba(61,214,189,0.75)]";

/** One icon per card, matched to what each one is about. */
const cardIcons: IconName[] = ["bell", "trendingUp", "compass", "globe"];

function ProblemCard({
  title,
  copy,
  index,
}: {
  title: string;
  copy: string;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const accent = accents[index % accents.length];
  const icon = cardIcons[index % cardIcons.length];

  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={`${title}. ${flipped ? "Show the problem" : "Show the fix"}`}
      onClick={() => setFlipped((value) => !value)}
      className="group block h-[22rem] w-full text-left [perspective:1200px]"
    >
      <span
        className={`relative block h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:-translate-y-1.5 ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* The repeated "Sound familiar" and "Flip to stop this" labels moved
            up to the section intro. Four cards each carrying both read as
            four identical labels rather than as four problems. */}
        <span
          className={`absolute inset-0 flex h-full flex-col rounded-[var(--radius-card)] p-7 transition-shadow duration-500 [backface-visibility:hidden] ${glow} ${accent.front}`}
        >
          <span
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full border-2 ${accent.ring}`}
          >
            <Icon name={icon} className="h-6 w-6" />
          </span>
          {/* Title pinned to a fixed slot so all four bodies start on the
              same line whether the title wraps or not. */}
          <span className="display mt-6 block min-h-[3.4rem] text-[1.15rem] leading-tight md:text-[1.25rem]">
            {title}
          </span>
          <span className={`mt-3 block text-[0.95rem] font-medium leading-relaxed ${accent.body}`}>
            {copy}
          </span>
        </span>

        <span
          className={`absolute inset-0 flex h-full flex-col justify-between rounded-[var(--radius-card)] p-7 [backface-visibility:hidden] [transform:rotateY(180deg)] ${glow} ${accent.back}`}
        >
          <span className="display text-6xl leading-none">Stop.</span>
          <span>
            <span className="display block text-xl">Hand it off.</span>
            <span className="mt-2 block max-w-[30ch] text-[0.95rem] font-medium leading-relaxed opacity-85">
              A capable teammate can own this work without becoming another task
              for you to manage.
            </span>
          </span>
        </span>
      </span>
    </button>
  );
}

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-ink section-py text-bone">
      {/* Editorial photo, per direct reference: a real photo in grayscale,
          bleeding off the right edge of the viewport and dissolving into
          the carbon on its left and bottom edges instead of sitting in a
          frame. Only spans the intro block so it never runs behind the
          cards. On phones it sits above the copy and fades out downward. */}
      <div className="shell relative">
        <div className="relative lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
          <div
            className="problem-photo relative -mx-6 mb-8 h-72 sm:h-80 lg:absolute lg:-inset-y-10 lg:right-0 lg:mx-0 lg:mb-0 lg:h-auto lg:w-[58%] lg:-mr-[max(0px,calc((100vw-var(--shell))/2))]"
            aria-hidden="true"
          >
            <Image
              src="/images/bottleneck.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-top grayscale opacity-90"
            />
          </div>

          <Reveal className="relative max-w-3xl lg:py-10">
            <h2 className="display mt-2 text-[clamp(2rem,5vw,3.9rem)]">
              {problem.headline}
            </h2>
            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-bone/70 md:text-lg">
              {problem.body}
            </p>
            <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-bone/70 md:text-lg">
              {problem.bodyDepartment}
            </p>
          </Reveal>
        </div>
        <Reveal className="relative mt-14">
          <p className="text-lg font-semibold text-bone md:text-xl">
            {problem.cardsLead}{" "}
            {/* "Flip" is a desktop word. On a phone the gesture is a tap. */}
            <span className="md:hidden">{problem.cardsActionMobile}</span>
            <span className="hidden md:inline">
              {problem.cardsActionDesktop}
            </span>
          </p>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problem.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 110}>
              <ProblemCard title={card.title} copy={card.copy} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
