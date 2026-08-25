import { Reveal } from "../reveal";
import { process } from "@/lib/content";

const stepAccents = [
  "bg-cyan text-ink",
  "bg-acid text-ink",
  "bg-ink text-bone",
  "bg-white text-ink",
] as const;

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-bone pb-10 pt-10 text-ink md:pb-16 md:pt-16"
    >
      <div className="shell relative">
        <Reveal className="max-w-4xl">
          <h2 className="display max-w-[18ch] text-[clamp(2.1rem,4.8vw,3.7rem)] text-ink">
            {process.headline}
          </h2>
          <p className="mt-4 max-w-[54ch] text-base font-medium leading-relaxed text-ink md:text-lg">
            {process.body}
          </p>
        </Reveal>

        <ol className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 90} as="li">
              <div
                className={`group h-full rounded-[var(--radius-card)] p-6 transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl ${stepAccents[i]}`}
              >
                <h3 className="text-lg font-bold leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.9rem] font-medium leading-relaxed opacity-80">
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
