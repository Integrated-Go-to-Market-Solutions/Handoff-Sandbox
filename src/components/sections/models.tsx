import { Button, Pill } from "../brand";
import { Reveal } from "../reveal";
import { models, modelsFootnote, site } from "@/lib/content";

/* Each card is its own gradient with a cyan outline, per direct feedback —
   the same treatment as the Hiring Highway cards, not plain boxes. The
   featured card keeps the brightest (cyan) gradient so it still reads as
   the recommended choice at a glance. */
const cardAccents = [
  {
    card: "bg-gradient-to-br from-cyan to-cyan-dim text-ink",
    pill: "!border-ink/30 !text-ink",
    price: "text-ink",
    button: "ink" as const,
  },
  {
    card: "bg-gradient-to-br from-royal to-azure text-bone",
    pill: "!border-bone/40 !text-bone",
    price: "text-bone",
    button: "cyan" as const,
  },
  {
    card: "bg-gradient-to-br from-ink-300 to-ink text-bone",
    pill: "!border-bone/30 !text-bone",
    price: "text-cyan",
    button: "cyan" as const,
  },
] as const;

export function Models() {
  return (
    <section id="models" className="relative overflow-hidden bg-ink section-py-hero text-bone">
      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <h2 className="display mt-5 text-[clamp(2.1rem,4.8vw,3.7rem)]">
            Three ways to work together
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-bone/70">
            Start with the level of ownership that fits your team. Managed
            Staffing is the full-service path, Remote Employee of Record
            keeps the day to day with you, and Recruitment & Placement is
            the simplest way to make one great hire.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
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

                <h3 className="display mt-5 min-h-[5.5rem] text-2xl">
                  {model.name.replace("-", "‑")}
                </h3>
                <p className="mt-2 min-h-[2.5rem] text-sm font-medium opacity-75">
                  {model.forWho}
                </p>

                <div className="mt-6 min-h-[6.5rem] py-5">
                  <p className={`display text-2xl ${accent.price}`}>
                    {model.price}
                  </p>
                  <p className="mt-1 text-xs font-medium opacity-70">
                    {model.terms}
                  </p>
                </div>

                <p className="mt-6 min-h-[7.5rem] text-[0.97rem] leading-relaxed opacity-80">
                  {model.copy}
                </p>

                <ul className="mb-9 mt-6 space-y-3">
                  {model.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[0.93rem] leading-snug opacity-80"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10.5l4 4 8-9"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>

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
