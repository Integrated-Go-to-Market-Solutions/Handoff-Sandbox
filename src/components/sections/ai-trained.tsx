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
 *
 * Desktop: the claim on the left (badge stamp, headline, then the body as
 * a quote), the detail on the right. Phones and tablets stack them in that
 * order.
 */
export function AiTrained() {
  return (
    <section className="relative overflow-hidden bg-ink section-py-tight text-bone">
      <div className="shell relative grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-12 xl:grid-cols-2 xl:gap-16">
        {/* The stamp sits above the headline, straight, and covers no
            text. The stamp, headline and quote share one left edge. */}
        <Reveal>
          <Image
            src="/images/ai-excellence-stamp.webp"
            alt={aiTrained.badgeAlt}
            width={208}
            height={208}
            unoptimized
            className="mb-6 h-28 w-28 opacity-90 mix-blend-screen md:h-32 md:w-32 lg:mb-7 lg:h-44 lg:w-44 xl:h-48 xl:w-48"
          />
          <h2 className="display max-w-[14ch] text-[clamp(1.9rem,4vw,3rem)] text-bone">
            {aiTrained.headline}
          </h2>
          <p className="mt-7 max-w-[58ch] border-l-4 border-cyan pl-5 text-base font-medium leading-relaxed text-bone/85 md:text-lg">
            {aiTrained.body}
          </p>
        </Reveal>

        <Reveal delay={90}>
          <div>
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

          <div className="mt-6">
            <p className="eyebrow text-[0.72rem] tracking-[0.2em] text-cyan">{aiTrained.coursesLabel}</p>
            <TypingCycle
              phrases={aiTrained.courses}
              className="mt-2 font-gotham text-lg font-semibold text-bone md:text-xl"
            />
          </div>

          <div className="mt-6">
            <p className="eyebrow text-[0.72rem] tracking-[0.2em] text-cyan">{aiTrained.toolsLabel}</p>
            {/* One row from 640px up; phones wrap to a tidy 3 + 2 grid. */}
            <ul className="mt-3 grid grid-cols-3 gap-x-3 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 lg:gap-x-4 xl:gap-x-6">
              {aiTrained.tools.map((tool) => (
                <li key={tool.name} className="inline-flex items-center gap-2 text-sm font-semibold text-bone">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/ai-tools/${tool.file}.svg`} alt="" width={24} height={24} className="h-6 w-6 shrink-0" />
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 max-w-[58ch] text-sm font-semibold leading-relaxed text-bone md:text-base">
            {aiTrained.certLine}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
