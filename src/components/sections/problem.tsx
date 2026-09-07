"use client";

import { useState } from "react";
import { Reveal } from "../reveal";
import { Icon, type IconName } from "../icon";
import { problem } from "@/lib/content";

const accents = [
  { front: "bg-cyan text-ink", back: "bg-ink-300 text-bone border border-cyan/30" },
  { front: "bg-royal text-bone", back: "bg-bone text-ink" },
  { front: "bg-bone text-ink", back: "bg-royal text-bone" },
  { front: "bg-ink-300 text-bone border border-cyan/30", back: "bg-cyan text-ink" },
] as const;

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
      className="group block h-[20rem] w-full text-left [perspective:1200px]"
    >
      <span
        className={`relative block h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* The repeated "Sound familiar" and "Flip to stop this" labels moved
            up to the section intro. Four cards each carrying both read as
            four identical labels rather than as four problems. */}
        <span
          className={`absolute inset-0 flex h-full flex-col justify-between rounded-[var(--radius-card)] p-7 shadow-sm transition-shadow duration-500 group-hover:shadow-xl [backface-visibility:hidden] ${accent.front}`}
        >
          <Icon name={icon} className="h-8 w-8" />
          <span>
            <span className="block text-[clamp(1.05rem,1.6vw,1.3rem)] font-bold leading-tight tracking-tight">
              {title}
            </span>
            <span className="mt-3 block text-base font-medium leading-relaxed opacity-85">
              {copy}
            </span>
          </span>
        </span>

        <span
          className={`absolute inset-0 flex h-full flex-col justify-between rounded-[var(--radius-card)] p-7 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] ${accent.back}`}
        >
          <span className="display text-6xl leading-none">STOP</span>
          <span>
            <span className="block text-lg font-semibold">Hand it off.</span>
            <span className="mt-2 block max-w-[30ch] text-base font-medium leading-relaxed opacity-85">
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
      <div className="shell relative">
        <Reveal className="max-w-3xl">
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
        <Reveal className="mt-14">
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
