import { Button, Pill } from "../brand";
import { Reveal } from "../reveal";
import { models, site } from "@/lib/content";

export function Models() {
  return (
    <section id="models" className="relative overflow-hidden bg-bone py-24 text-ink md:py-32">

      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <h2 className="display mt-5 text-[clamp(2.1rem,4.8vw,3.7rem)]">
            Three ways to work together
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-ink/70">
            Pick the one that matches how much you want to own. We will
            recommend the right fit on the first call, and we will tell you if
            the cheapest option is the correct one.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {models.map((model, i) => (
            <Reveal key={model.name} delay={i * 110}>
              <article
                className={`flex h-full flex-col rounded-[var(--radius-card)] p-8 transition-transform duration-500 hover:-translate-y-1.5 ${
                  model.featured
                    ? "bg-ink text-bone shadow-2xl"
                    : "border border-ink/12 bg-white"
                }`}
              >
                <Pill tone={model.featured ? "cyan" : "outline"}>
                  {model.tag}
                </Pill>

                <h3
                  className={`display mt-5 text-3xl ${
                    model.featured ? "text-bone" : "text-ink"
                  }`}
                >
                  {model.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    model.featured ? "text-bone/60" : "text-ink/55"
                  }`}
                >
                  {model.forWho}
                </p>

                <div
                  className={`mt-6 border-y py-5 ${
                    model.featured ? "border-ink-200" : "border-ink/10"
                  }`}
                >
                  <p
                    className={`display text-2xl ${
                      model.featured ? "text-cyan" : "text-royal"
                    }`}
                  >
                    {model.price}
                  </p>
                  <p
                    className={`mt-1 text-xs ${
                      model.featured ? "text-bone/55" : "text-ink/50"
                    }`}
                  >
                    {model.terms}
                  </p>
                </div>

                <p
                  className={`mt-6 text-[0.97rem] leading-relaxed ${
                    model.featured ? "text-bone/75" : "text-ink/70"
                  }`}
                >
                  {model.copy}
                </p>

                <ul className="mt-6 space-y-3">
                  {model.points.map((point) => (
                    <li
                      key={point}
                      className={`flex gap-3 text-[0.93rem] leading-snug ${
                        model.featured ? "text-bone/80" : "text-ink/70"
                      }`}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10.5l4 4 8-9"
                          fill="none"
                          stroke={model.featured ? "var(--color-cyan)" : "var(--color-royal)"}
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
                  variant={model.featured ? "cyan" : "ink"}
                  className="mt-8 w-full"
                >
                  Book a call
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
