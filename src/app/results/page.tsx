import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ClientQuotes } from "@/components/sections/client-quotes";
import { Cta } from "@/components/sections/cta";
import { resultsPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Results | Handoff",
  description:
    "Case studies, retention numbers and client testimonials from companies that hired through Handoff.",
};

/**
 * Built before the content exists, on purpose. The case study, the retention
 * figure and the video testimonials are all real but still anonymised while
 * clients clear them, so the structure ships now and the copy drops straight
 * in. Every unfilled slot says so in brackets, loudly, so nothing can go live
 * pretending to be real proof.
 */
export default function ResultsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-16 pt-14 md:pb-20 md:pt-20">
        <div
          className="drift pointer-events-none absolute -right-48 -top-52 h-[600px] w-[600px] rounded-full opacity-25 blur-[130px]"
          style={{ background: "var(--color-cyan)" }}
          aria-hidden="true"
        />

        <div className="shell relative max-w-4xl">
          <Reveal>
            <p className="eyebrow text-royal">{resultsPage.eyebrow}</p>
            <h1 className="display mt-5 text-[clamp(2.5rem,6vw,4.6rem)] text-ink">
              {resultsPage.headline}
              <br />
              <span className="text-royal">{resultsPage.headlineAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink/70">
              {resultsPage.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="bg-white pb-20 md:pb-24"
        aria-label="Results by the numbers"
      >
        <div className="shell grid gap-4 md:grid-cols-3">
          {resultsPage.numbers.map((figure, i) => (
            <Reveal key={figure.label + i} delay={i * 90}>
              <div className="h-full rounded-[var(--radius-card)] border border-dashed border-ink/25 bg-bone/60 p-8">
                <p className="display text-4xl text-ink/40">{figure.value}</p>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-ink/50">
                  {figure.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-bone py-20 text-ink md:py-24" aria-label="Case study">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-ink/55">
              {resultsPage.caseStudy.eyebrow}
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-ink/40">
              {resultsPage.caseStudy.company}
            </p>
            <h2 className="display mt-4 text-[clamp(1.9rem,4.2vw,3.1rem)] text-ink/45">
              {resultsPage.caseStudy.headline}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { label: "The situation", copy: resultsPage.caseStudy.situation },
              { label: "What we did", copy: resultsPage.caseStudy.work },
              { label: "The outcome", copy: resultsPage.caseStudy.outcome },
            ].map((panel, i) => (
              <Reveal key={panel.label} delay={i * 90}>
                <div className="h-full rounded-[var(--radius-card)] border border-dashed border-ink/25 bg-white/70 p-7">
                  <p className="eyebrow text-ink/55">{panel.label}</p>
                  <p className="mt-4 text-base font-semibold leading-relaxed text-ink/45">
                    {panel.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClientQuotes />

      <section
        className="bg-white pb-24 text-ink md:pb-28"
        aria-label="Video testimonials"
      >
        <div className="shell">
          <Reveal className="max-w-3xl">
            <h2 className="display text-[clamp(1.9rem,4.2vw,3.1rem)]">
              {resultsPage.videos.headline}
            </h2>
            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-ink/70 md:text-lg">
              {resultsPage.videos.body}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {resultsPage.videos.slots.map((slot, i) => (
              <Reveal key={slot.id} delay={i * 90}>
                <div className="flex aspect-video items-center justify-center rounded-[var(--radius-card)] border border-dashed border-ink/25 bg-bone/60 p-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
                    {slot.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
