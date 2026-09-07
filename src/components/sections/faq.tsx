import { Reveal } from "../reveal";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section className="relative overflow-hidden bg-ink section-py-hero text-bone">
      <div className="shell relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <h2 className="display mt-5 text-[clamp(2.1rem,4.5vw,3.4rem)] text-bone">
            The questions
            <br />
            <span className="text-cyan">we actually get</span>
          </h2>
          <p className="mt-6 max-w-[42ch] leading-relaxed text-bone/80">
            If the honest answer is that we are not your fit, that is the answer
            you will get on the call.
          </p>
        </Reveal>

        <div>
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details className="group border-b border-white/12 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-bone transition-colors group-open:text-cyan hover:text-cyan">
                  {faq.q}
                  <span className="relative h-4 w-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="mt-4 max-w-[68ch] leading-relaxed text-bone/80">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
