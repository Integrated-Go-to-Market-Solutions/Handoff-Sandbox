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
        </Reveal>
      </div>
    </section>
  );
}
