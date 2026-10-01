import { Button, Pill } from "../brand";
import { Reveal } from "../reveal";
import { TypedPoints } from "../typed-points";
import { models, modelsFootnote, modelsIntro, modelsShared, site } from "@/lib/content";

/* Two equally strong gradients with the same cyan outline, so neither
   option reads as the lesser choice. Each card also carries its own list in
   the same treatment, so neither reads as "the base plan plus extras". */
const cardAccents = [
  {
    card: "bg-gradient-to-br from-cyan to-cyan-dim text-ink",
    pill: "!border-ink/30 !text-ink",
    panel: "bg-ink/10",
    button: "ink" as const,
  },
  {
    card: "bg-gradient-to-br from-royal to-azure text-bone",
    pill: "!border-bone/40 !text-bone",
    panel: "bg-white/10",
    button: "cyan" as const,
  },
] as const;

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`mt-0.5 h-4 w-4 shrink-0 ${className}`} aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The earlier single-list cards, kept as the default so /v2 is unchanged. */
function ClassicModels() {
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
                  <h3 className="display mt-5 text-2xl md:text-[1.75rem]">{model.name.replace("-", "‑")}</h3>
                  <p className="display mt-2 text-[clamp(2.2rem,4vw,2.9rem)] leading-none">{model.price}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] opacity-75">{model.terms}</p>
                  <p className="mt-5 text-sm font-medium opacity-80">{model.forWho}</p>
                  <div className="mt-6 border-t-2 border-current/15 pt-6">
                    <TypedPoints points={model.points} />
                  </div>
                  <p className="mb-9 mt-6 text-[0.97rem] leading-relaxed opacity-80">{model.copy}</p>
                  <Button href={site.bookCall} variant={accent.button} size="lg" className="mt-auto w-full">
                    Find out more
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={models.length * 110} className="mt-8">
          <p className="max-w-[58ch] text-sm leading-relaxed text-bone/55">{modelsFootnote}</p>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * `detailed` (homepage and industry pages): the two plans side by side, read
 * like a phone-plan comparison. From 768px the cards share one subgrid, so
 * every row (tag, name, price, model line, who it's for, the typed points,
 * the inclusions, the button) lines up across both, whatever wraps. Both
 * cards get the same size, padding and treatment, so neither reads as the
 * lesser option. What both include sits centred underneath. Each card
 * spans the parent's 8 rows (`md:row-span-8`); keep both in step with the
 * number of rows inside a card.
 */
const listGap = "space-y-3";

export function Models({ detailed = false }: { detailed?: boolean } = {}) {
  if (!detailed) return <ClassicModels />;
  return (
    <section id="models" className="relative overflow-hidden bg-ink section-py-hero text-bone">
      <div className="shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="display mt-5 text-[clamp(2.1rem,4.8vw,3.7rem)]">{modelsIntro.headline}</h2>
          <p className="mt-4 text-lg font-semibold text-bone/85 md:text-xl">
            {modelsIntro.startingAt.label}{" "}
            <span className="text-cyan">{modelsIntro.startingAt.price}</span>
          </p>
          <p className="mx-auto mt-5 max-w-[58ch] text-lg leading-relaxed text-bone/70">
            Start with the level of ownership that fits your team. Managed
            Staffing is the full-service path, and Recruitment & Placement is
            the simplest way to make one great hire.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl auto-rows-fr gap-5 md:auto-rows-auto md:grid-cols-2 md:grid-rows-[repeat(8,auto)] md:gap-x-6 md:gap-y-0">
          {models.map((model, i) => {
            const accent = cardAccents[i % cardAccents.length];
            return (
              <Reveal
                key={model.name}
                as="article"
                delay={i * 110}
                className={`flex flex-col rounded-[var(--radius-card)] border-2 border-cyan p-6 shadow-[0_0_28px_-10px_rgba(61,214,189,0.6)] transition-shadow duration-500 hover:shadow-[0_0_36px_-6px_rgba(61,214,189,0.75)] md:row-span-8 md:grid md:grid-rows-subgrid md:p-7 ${accent.card}`}
              >
                <div>
                  <Pill tone="outline" className={accent.pill}>
                    {model.tag}
                  </Pill>
                </div>
                <h3 className="display mt-4 text-xl md:text-2xl">{model.name.replace("-", "‑")}</h3>
                <p className="display mt-3 text-[clamp(2rem,3.4vw,2.6rem)] leading-none">{model.price}</p>
                <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] opacity-80">
                  {model.terms}
                </p>
                <p className="mt-4 text-sm font-medium opacity-85">{model.forWho}</p>

                <div className="mt-5 border-t-2 border-current/15 pt-5">
                  <TypedPoints points={model.points} />
                </div>

                <div className={`mt-5 rounded-[calc(var(--radius-card)-8px)] p-4 md:p-5 ${accent.panel}`}>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] opacity-80">
                    {model.extrasLabel}
                  </p>
                  <ul className={`mt-3 ${listGap}`}>
                    {model.extras.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.93rem] font-semibold leading-snug">
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 md:mt-6 md:pt-0">
                  <Button href={site.bookCall} variant={accent.button} className="w-full">
                    Find out more
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-10 max-w-4xl text-center">
          <p className="eyebrow text-[0.72rem] tracking-[0.2em] text-cyan">{modelsShared.label}</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-7 gap-y-3">
            {modelsShared.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm font-semibold leading-snug text-bone md:text-[0.95rem]">
                <Check className="text-cyan" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-[62ch] text-sm leading-relaxed text-bone/55">{modelsFootnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
