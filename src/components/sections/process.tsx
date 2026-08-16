import { Reveal } from "../reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section
      id="process"
      className="tex-gradient tex-grain relative overflow-hidden py-24 md:py-32"
    >
      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-cyan">{process.eyebrow}</p>
          <h2 className="display mt-5 text-[clamp(2.1rem,4.8vw,3.7rem)] text-bone">
            {process.headline}
          </h2>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-bone/75">
            {process.body}
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 90} as="li">
              <div className="group h-full bg-ink/70 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-ink/40">
                <span className="display text-sm text-cyan">{step.n}</span>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-bone">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-bone/70">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
