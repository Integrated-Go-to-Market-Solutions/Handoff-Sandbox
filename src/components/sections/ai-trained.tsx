import Image from "next/image";
import { Reveal } from "../reveal";
import { TypingCycle } from "../typing-cycle";
import { aiTrained } from "@/lib/content";

/**
 * The hero claims AI TRAINED and, until this block existed, nothing else on
 * the site ever mentioned it again. It sits directly after the process, where
 * the vetting claim has just been made, and stays deliberately short.
 *
 * A tight aside between two heavier sections rather than its own feature
 * block — deliberately the tight-padding spacing tier.
 */
export function AiTrained() {
  return (
    <section className="relative overflow-hidden bg-ink section-py-tight text-bone">
      <div className="shell relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <h2 className="display max-w-[14ch] text-[clamp(1.9rem,4vw,3rem)] text-bone">
            {aiTrained.headline}
          </h2>
        </Reveal>
        <Reveal delay={90} className="relative">
          <p className="max-w-[58ch] border-l-4 border-cyan pl-5 text-base leading-relaxed text-bone/80 md:text-lg">
            {aiTrained.body}
          </p>
          <div className="mt-6 pl-6">
            <p className="eyebrow text-[0.72rem] tracking-[0.2em] text-cyan">{aiTrained.topicsLabel}</p>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {aiTrained.topics.map((topic) => (
                <li
                  key={topic}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-cyan/40 bg-ink-100 px-4 py-2 text-sm font-semibold text-bone"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true">
                    <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pl-6">
            <p className="eyebrow text-[0.72rem] tracking-[0.2em] text-cyan">{aiTrained.coursesLabel}</p>
            <TypingCycle
              phrases={aiTrained.courses}
              className="mt-2 font-gotham text-lg font-semibold text-bone md:text-xl"
            />
          </div>

          <div className="mt-6 pl-6">
            <p className="eyebrow text-[0.72rem] tracking-[0.2em] text-cyan">{aiTrained.toolsLabel}</p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-7">
              {aiTrained.tools.map((tool) => (
                <li key={tool.name} className="inline-flex items-center gap-2 text-sm font-semibold text-bone sm:gap-2.5 sm:text-base">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/ai-tools/${tool.file}.svg`} alt="" width={26} height={26} className="h-[26px] w-[26px]" />
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Certification row. Phones: badge sits in the row beside the copy.
              Desktop: it becomes a stamp on the column's bottom-right
              corner, with the row padded so it never covers text. */}
          <div className="mt-8 flex items-center gap-4 pl-6 lg:min-h-[8.5rem] lg:pr-56">
            <Image
              src="/images/ai-excellence-badge.webp"
              alt={aiTrained.badgeAlt}
              width={176}
              height={176}
              unoptimized
              className="h-24 w-24 shrink-0 drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)] lg:absolute lg:-bottom-8 lg:right-0 lg:h-44 lg:w-44"
            />
            <p className="max-w-[46ch] text-sm font-semibold leading-relaxed text-bone md:text-base">
              {aiTrained.certLine}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
