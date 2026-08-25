import { Button, Pill } from "../brand";
import { Reveal } from "../reveal";
import { models, site } from "@/lib/content";

export function Models() {
  return (
    <section id="models" className="relative overflow-hidden bg-bone py-20 text-ink md:py-24">

      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <h2 className="display mt-5 text-[clamp(2.1rem,4.8vw,3.7rem)]">
            Three ways to work together
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink/70">
            Start with the level of ownership that fits your team. Managed
            Staffing is the full-service path, Employer of Record keeps the
            day to day with you, and Direct-Hire Recruiting is the simplest
            way to make one great hire.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {models.map((model, i) => (
            <Reveal key={model.name} delay={i * 110}>
              <article
                className={`flex h-full flex-col rounded-[var(--radius-card)] p-8 transition-transform duration-500 hover:-translate-y-1.5 ${
                  model.featured
                    ? "border-2 border-cyan bg-white text-ink shadow-lg"
                    : "border border-ink/12 bg-white"
                }`}
              >
                <Pill tone={model.featured ? "cyan" : "outline"}>
                  {model.tag}
                </Pill>

                <h3
                  className="display mt-5 min-h-[4.5rem] text-3xl text-ink"
                >
                  {model.name}
                </h3>
                <p
                  className="mt-2 min-h-[2.5rem] text-sm font-medium text-ink/75"
                >
                  {model.forWho}
                </p>

                <div className="mt-6 min-h-[6.5rem] border-y border-ink/10 py-5">
                  <p
                    className="display text-2xl text-royal"
                  >
                    {model.price}
                  </p>
                  <p className="mt-1 text-xs font-medium text-ink/70">
                    {model.terms}
                  </p>
                </div>

                <p className="mt-6 min-h-[7.5rem] text-[0.97rem] leading-relaxed text-ink/80">
                  {model.copy}
                </p>

                <ul className="mt-6 space-y-3">
                  {model.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[0.93rem] leading-snug text-ink/80"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10.5l4 4 8-9"
                          fill="none"
                          stroke="var(--color-royal)"
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
                  variant="ink"
                  className="mt-auto w-full"
                >
                  Get Started Today
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
