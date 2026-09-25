import { Reveal } from "../reveal";
import { clientQuotes } from "@/lib/content";

/**
 * Client quote module. Five client-approved quotes, each attributed by name,
 * title and company. No photos yet, so each card carries an initials avatar
 * in its own accent colours. LinkedIn links render only when we have them.
 *
 * Cards follow the same treatment as the pricing and Hiring Highway cards:
 * each its own gradient, outlined in cyan. Light gray section, part of the
 * alternating carbon/light-gray rhythm.
 */
const cardAccents = [
  { card: "bg-gradient-to-br from-cyan to-cyan-dim text-ink", mark: "text-ink/25", meta: "text-ink/70", avatar: "bg-ink text-cyan" },
  { card: "bg-gradient-to-br from-royal to-azure text-bone", mark: "text-bone/30", meta: "text-bone/70", avatar: "bg-bone text-royal" },
  { card: "bg-gradient-to-br from-ink-300 to-ink text-bone", mark: "text-cyan/50", meta: "text-bone/65", avatar: "bg-cyan text-ink" },
] as const;

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

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

        {/* Flex-wrap rather than grid so a short last row centres itself. */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {clientQuotes.slots.map((slot, i) => {
            const accent = cardAccents[i % cardAccents.length];
            const byline = [slot.title, slot.company].filter(Boolean).join(", ");
            return (
              <Reveal
                key={slot.id}
                delay={i * 100}
                className="w-full md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
              >
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

                  <figcaption className="mt-8 flex items-center gap-3.5">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold tracking-wide ${accent.avatar}`}
                      aria-hidden="true"
                    >
                      {initials(slot.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold">{slot.name}</p>
                      {byline && (
                        <p className={`mt-0.5 text-sm ${accent.meta}`}>{byline}</p>
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
                    </div>
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
