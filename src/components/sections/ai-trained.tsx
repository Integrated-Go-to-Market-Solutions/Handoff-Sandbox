import { Reveal } from "../reveal";
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
        <Reveal delay={90}>
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
        </Reveal>
      </div>
    </section>
  );
}
