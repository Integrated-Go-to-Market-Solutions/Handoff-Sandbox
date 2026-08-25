import { Reveal } from "../reveal";
import { EdgeFade } from "../edge-fade";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section
      id="process"
      className="tex-gradient tex-grain relative overflow-hidden py-16 md:py-24"
    >
      <EdgeFade side="bottom" color="var(--color-bone)" height="10rem" />
      <div className="shell relative">
        <Reveal className="max-w-4xl">
          <h2 className="display mt-5 max-w-[18ch] text-[clamp(2.1rem,4.8vw,3.7rem)] text-bone">
            {process.headline}
          </h2>
          <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-bone/85 md:text-lg">
            {process.body}
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 90} as="li">
              <div className="group h-full border-t border-white/20 py-5 transition-colors duration-500 hover:border-cyan md:p-6 md:pt-5">
                <span className="display text-sm text-cyan">{step.n}</span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-bone">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-bone/80">
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
