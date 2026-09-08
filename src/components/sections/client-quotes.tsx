import { Reveal } from "../reveal";
import { clientQuotes } from "@/lib/content";

/**
 * Client quote module. Three real quotes from the verified call transcripts
 * (Robert Horsley at WorkRight, Bridget Kiernan at Oasis, Maxime Fernandez
 * at Pivt), each attributed by name and company. Titles and LinkedIn links
 * are shown only when we actually have them; nothing is guessed.
 *
 * Cards follow the same treatment as the pricing and Hiring Highway cards:
 * each its own gradient, outlined in cyan. Light gray section, part of the
 * alternating carbon/light-gray rhythm.
 */
const cardAccents = [
  { card: "bg-gradient-to-br from-cyan to-cyan-dim text-ink", mark: "text-ink/25", meta: "text-ink/70" },
  { card: "bg-gradient-to-br from-royal to-azure text-bone", mark: "text-bone/30", meta: "text-bone/70" },
  { card: "bg-gradient-to-br from-ink-300 to-ink text-bone", mark: "text-cyan/50", meta: "text-bone/65" },
] as const;

export function ClientQuotes() {
  return (
    <section
      className="relative overflow-hidden bg-bone section-py text-ink"
      aria-label="Client quotes"
    >
      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <h2 className="display text-[clamp(2rem,4.6vw,3.4rem)] text-ink">
            {clientQuotes.headline}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {clientQuotes.slots.map((slot, i) => {
            const accent = cardAccents[i % cardAccents.length];
            const byline = [slot.title, slot.company].filter(Boolean).join(", ");
            return (
              <Reveal key={slot.id} delay={i * 100}>
                <figure
                  className={`flex h-full flex-col justify-between rounded-[var(--radius-card)] border-2 border-cyan p-8 shadow-[0_0_28px_-10px_rgba(61,214,189,0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_0_36px_-6px_rgba(61,214,189,0.75)] ${accent.card}`}
                >
                  <div>
                    <span
                      className={`display block text-6xl leading-none ${accent.mark}`}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="-mt-4 text-lg font-semibold leading-relaxed">
                      {slot.quote}
                    </blockquote>
                  </div>

                  <figcaption className="mt-8">
                    <p className="text-sm font-bold">{slot.name}</p>
                    {byline && (
                      <p className={`mt-1 text-sm ${accent.meta}`}>{byline}</p>
                    )}
                    {slot.linkedin && (
                      <a
                        href={slot.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-block text-sm font-semibold underline underline-offset-4"
                      >
                        View on LinkedIn
                      </a>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
