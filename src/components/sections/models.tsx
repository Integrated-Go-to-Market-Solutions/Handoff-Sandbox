import { Button, Pill } from "../brand";
import { Reveal } from "../reveal";
import { TypedPoints } from "../typed-points";
import { models, modelsFootnote, site } from "@/lib/content";

/* Two equally strong gradients with the same cyan outline, so neither
   option reads as the lesser choice. */
const cardAccents = [
  {
    card: "bg-gradient-to-br from-cyan to-cyan-dim text-ink",
    pill: "!border-ink/30 !text-ink",
    button: "ink" as const,
  },
  {
    card: "bg-gradient-to-br from-royal to-azure text-bone",
    pill: "!border-bone/40 !text-bone",
    button: "cyan" as const,
  },
] as const;

export function Models() {
  return (
    <section id="models" className="relative overflow-hidden bg-ink section-py-hero text-bone">
      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <h2 className="display mt-5 text-[clamp(2.1rem,4.8vw,3.7rem)]">
            Two ways to work together
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-bone/70">
            Start with the level of ownership that fits your team. Managed
            Staffing is the full-service path, and Recruitment & Placement is
            the simplest way to make one great hire.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {models.map((model, i) => {
            const accent = cardAccents[i % cardAccents.length];
            return (
            <Reveal key={model.name} delay={i * 110}>
              <article
                className={`flex h-full flex-col rounded-[var(--radius-card)] border-2 border-cyan p-8 shadow-[0_0_28px_-10px_rgba(61,214,189,0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_0_36px_-6px_rgba(61,214,189,0.75)] ${accent.card}`}
              >
                <Pill tone="outline" className={accent.pill}>
                  {model.tag}
                </Pill>

                <h3 className="display mt-5 text-2xl md:text-[1.75rem]">
                  {model.name.replace("-", "‑")}
                </h3>
                <p className="display mt-2 text-[clamp(2.2rem,4vw,2.9rem)] leading-none">
                  {model.price}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] opacity-75">
                  {model.terms}
                </p>

                <p className="mt-5 text-sm font-medium opacity-80">
                  {model.forWho}
                </p>

                <div className="mt-6 border-t-2 border-current/15 pt-6">
                  <TypedPoints points={model.points} />
                </div>

                <p className="mb-9 mt-6 text-[0.97rem] leading-relaxed opacity-80">
                  {model.copy}
                </p>

                <Button
                  href={site.bookCall}
                  variant={accent.button}
                  size="lg"
                  className="mt-auto w-full"
                >
                  Find out more
                </Button>
              </article>
            </Reveal>
            );
          })}
        </div>

        <Reveal delay={models.length * 110} className="mt-8">
          <p className="max-w-[58ch] text-sm leading-relaxed text-bone/55">
            {modelsFootnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
