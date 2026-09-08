import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Eyebrow, Button } from "@/components/brand";
import { Icon, type IconName } from "@/components/icon";
import { ClientQuotes } from "@/components/sections/client-quotes";
import { Cta } from "@/components/sections/cta";
import { resultsPage, caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Results | Handoff",
  description:
    "Case studies, retention numbers and client testimonials from companies that hired through Handoff.",
};

const posterAccents = [
  "bg-cyan text-ink",
  "bg-royal text-bone",
] as const;

/**
 * Layout referenced directly from hirewithnear.com/success-stories: a
 * featured story up top with a stat row and a poster card, then a grid of
 * every case study as the same poster treatment, each linking down to its
 * own detail section on this page. The "peeled corner" cutout is that
 * site's signature; recreated here in Handoff's own palette instead of
 * copying its per-client colour scheme.
 */
function PosterCard({
  study,
  index,
  featured = false,
}: {
  study: (typeof caseStudies)[number];
  index: number;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius-brand)] p-8 ${posterAccents[index % posterAccents.length]} ${featured ? "min-h-[22rem]" : "min-h-[16rem]"}`}
    >
      <span
        className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 bg-ink"
        style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
        aria-hidden="true"
      />
      <Icon name={study.icon as IconName} className={featured ? "h-12 w-12" : "h-9 w-9"} />
      <div>
        <p className="eyebrow mb-2 opacity-70">{study.tag}</p>
        <h3 className={`display leading-tight ${featured ? "text-3xl md:text-4xl" : "text-xl"}`}>
          {study.title}
        </h3>
      </div>
    </div>
  );
}

function CaseStudyDetail({ study, index }: { study: (typeof caseStudies)[number]; index: number }) {
  return (
    <section
      id={study.slug}
      className={`section-py text-bone ${index % 2 === 0 ? "bg-ink" : "bg-ink-100"}`}
    >
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-cyan">{study.tag} case study</p>
          <h2 className="display mt-3 text-[clamp(1.9rem,4.2vw,3.1rem)] text-bone">
            {study.title}
          </h2>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-bone/70 md:text-lg">
            {study.subhead}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-bone/50">
              The challenge
            </h3>
            <ul className="mt-4 space-y-3">
              {study.challenge.map((point) => (
                <li key={point} className="flex gap-3 text-[0.97rem] leading-relaxed text-bone/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-bone/50">
              What we did
            </h3>
            <ul className="mt-4 space-y-4">
              {study.solution.map((item) => (
                <li key={item.title} className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[0.97rem] font-semibold leading-snug text-bone">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm font-medium text-cyan">{item.result}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-10">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {study.results.map((r) => (
              <div key={r.label} className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-5">
                <p className="display text-2xl text-cyan">{r.value}</p>
                <p className="mt-1 text-xs font-medium leading-snug text-bone/60">{r.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-10 max-w-3xl border-l-4 border-cyan pl-6">
          <p className="display text-[clamp(1.2rem,2.2vw,1.6rem)] leading-snug text-bone">
            &ldquo;{study.quote}&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold text-cyan">{study.attributionRole}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function ResultsPage() {
  const featured = caseStudies[0];

  return (
    <>
      <section className="tex-waves relative overflow-hidden bg-ink section-py-tight">
        <div className="shell relative">
          <Reveal className="max-w-4xl">
            <Eyebrow className="mb-5 md:mb-6">{resultsPage.eyebrow}</Eyebrow>
            <h1 className="display text-[clamp(2.5rem,6vw,4.6rem)] text-bone">
              {resultsPage.headline}
              <br />
              <span className="text-cyan">{resultsPage.headlineAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={90} className="max-w-4xl">
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-bone/70">
              {resultsPage.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink pb-16 md:pb-20" aria-label="Results by the numbers">
        <div className="shell grid gap-4 md:grid-cols-3">
          {resultsPage.numbers.map((figure, i) => (
            <Reveal key={figure.label + i} delay={i * 90}>
              <div className="h-full rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-8">
                <p className="display text-4xl text-cyan">{figure.value}</p>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-bone/60">
                  {figure.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured story */}
      <section className="bg-ink section-py-tight text-bone" aria-label="Featured case study">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-cyan">Featured case study</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,4.4vw,3.2rem)] text-bone">
              {featured.title}
            </h2>
            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-bone/70 md:text-lg">
              {featured.subhead}
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {featured.heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="display text-2xl text-cyan md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium leading-snug text-bone/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <Button href={`#${featured.slug}`} className="mt-8">
              Read the full story
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <PosterCard study={featured} index={0} featured />
          </Reveal>
        </div>
      </section>

      {/* All case studies */}
      <section className="bg-ink-100 section-py-tight text-bone" aria-label="All case studies">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <h2 className="display text-[clamp(1.9rem,4.2vw,3.1rem)] text-bone">
              Every story
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 100}>
                <a href={`#${study.slug}`} className="group block transition-transform duration-500 hover:-translate-y-1.5">
                  <PosterCard study={study} index={i} />
                  <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan">
                    Read the full story
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {caseStudies.map((study, i) => (
        <CaseStudyDetail key={study.slug} study={study} index={i} />
      ))}

      <ClientQuotes />

      <section className="bg-ink section-py-tight text-bone" aria-label="Video testimonials">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <h2 className="display text-[clamp(1.9rem,4.2vw,3.1rem)]">
              {resultsPage.videos.headline}
            </h2>
            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-bone/70 md:text-lg">
              {resultsPage.videos.body}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {resultsPage.videos.slots.map((slot, i) => (
              <Reveal key={slot.id} delay={i * 90}>
                <div className="flex aspect-video items-center justify-center rounded-[var(--radius-card)] border border-dashed border-white/20 bg-white/[0.03] p-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-bone/40">
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
