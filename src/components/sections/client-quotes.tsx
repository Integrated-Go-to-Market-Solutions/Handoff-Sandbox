import { Reveal } from "../reveal";
import { clientQuotes } from "@/lib/content";

/**
 * Client quote module. Three slots, each carrying a real name, title, company
 * and a link to that person's own LinkedIn profile, because an unattributed
 * testimonial is worth nothing on a site whose whole argument is that the
 * people are real.
 *
 * Ships with obvious placeholder copy so nothing accidentally goes live as a
 * real quote before the client has cleared it.
 */
export function ClientQuotes() {
  return (
    <section
      className="relative overflow-hidden bg-white py-20 text-ink md:py-24"
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
            const pending = !slot.linkedin;
            return (
              <Reveal key={slot.id} delay={i * 100}>
                <figure
                  className={`flex h-full flex-col justify-between rounded-[var(--radius-card)] border p-7 ${
                    pending
                      ? "border-dashed border-ink/25 bg-bone/60"
                      : "border-ink/12 bg-white shadow-sm"
                  }`}
                >
                  <blockquote className="text-lg font-semibold leading-relaxed text-ink/85">
                    {pending ? slot.quote : `\u201C${slot.quote}\u201D`}
                  </blockquote>

                  <figcaption className="mt-8 border-t border-ink/10 pt-5">
                    <p className="text-sm font-bold text-ink">{slot.name}</p>
                    <p className="mt-1 text-sm text-ink/65">
                      {slot.title}
                      {slot.company ? `, ${slot.company}` : ""}
                    </p>
                    {slot.linkedin ? (
                      <a
                        href={slot.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-block text-sm font-semibold text-royal underline underline-offset-4"
                      >
                        View on LinkedIn
                      </a>
                    ) : (
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink/40">
                        [LINKEDIN URL PENDING]
                      </p>
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
