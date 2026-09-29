import { Button, Pill } from "../brand";
import { Reveal } from "../reveal";
import { TypedPoints } from "../typed-points";
import { models, modelsFootnote, modelsShared, site } from "@/lib/content";

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

/** `detailed`: tighter cards plus the shared and per-model inclusion lists. */
export function Models({ detailed = false }: { detailed?: boolean } = {}) {
  if (!detailed) return <ClassicModels />;
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

        <Reveal className="mt-12 rounded-[var(--radius-card)] border border-white/15 bg-white/[0.04] p-5 md:p-6">
          <p className="eyebrow text-[0.72rem] tracking-[0.2em] text-cyan">{modelsShared.label}</p>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {modelsShared.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm font-semibold text-bone md:text-[0.95rem]">
                <Check className="text-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {models.map((model, i) => {
            const accent = cardAccents[i % cardAccents.length];
            return (
            <Reveal key={model.name} delay={i * 110}>
              <article
                className={`flex h-full flex-col rounded-[var(--radius-card)] border-2 border-cyan p-6 shadow-[0_0_28px_-10px_rgba(61,214,189,0.6)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_36px_-6px_rgba(61,214,189,0.75)] md:p-7 ${accent.card}`}
              >
                <Pill tone="outline" className={accent.pill}>
                  {model.tag}
                </Pill>

                <h3 className="display mt-4 text-xl md:text-2xl">
                  {model.name.replace("-", "‑")}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="display text-[clamp(1.9rem,3.4vw,2.4rem)] leading-none">{model.price}</p>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] opacity-75">
                    {model.terms}
                  </p>
                </div>

                <p className="mt-3 text-sm font-medium opacity-80">{model.forWho}</p>

                <div className="mt-4 border-t-2 border-current/15 pt-4">
                  <TypedPoints points={model.points} />
                </div>

                <div className={`mb-6 mt-5 rounded-[calc(var(--radius-card)-8px)] p-4 ${accent.panel}`}>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] opacity-80">
                    {model.extrasLabel}
                  </p>
                  <ul className="mt-3 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                    {model.extras.map((item) => (
                      <li key={item} className="flex gap-2 text-[0.85rem] font-semibold leading-snug">
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href={site.bookCall} variant={accent.button} className="mt-auto w-full">
                  Find out more
                </Button>
              </article>
            </Reveal>
            );
          })}
        </div>

        <Reveal delay={models.length * 110} className="mt-6">
          <p className="max-w-[58ch] text-sm leading-relaxed text-bone/55">
            {modelsFootnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
