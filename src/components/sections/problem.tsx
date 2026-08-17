import { Reveal } from "../reveal";
import { EdgeFade } from "../edge-fade";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-bone py-24 text-ink md:py-32">
      <EdgeFade side="top" color="#fff" />
      <EdgeFade side="bottom" color="#fff" />

      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <h2 className="display mt-6 text-[clamp(2.2rem,5vw,3.9rem)]">
            {problem.headline}
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink/70">
            {problem.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problem.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 110}>
              <article className="group h-full rounded-[var(--radius-card)] border border-ink/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ink/25">
                <span className="display text-5xl text-ink/15 transition-colors duration-500 group-hover:text-cyan">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-ink/65">
                  {card.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
