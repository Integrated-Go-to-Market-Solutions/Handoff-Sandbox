import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/brand";
import { ContactForm } from "@/components/contact-form";
import { contactPage, models } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a call | Handoff",
  description:
    "Tell us the role you cannot get off your plate. One call to scope it, pick the right engagement model and get a realistic timeline.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-24 pt-14 md:pt-20">
        <div
          className="pointer-events-none absolute -left-52 -top-56 h-[620px] w-[620px] rounded-full opacity-25 blur-[130px]"
          style={{ background: "var(--color-cyan)" }}
          aria-hidden="true"
        />

        <div className="shell relative grid gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <Reveal delay={80}>
              <Eyebrow className="mb-5 md:mb-6">{contactPage.eyebrow}</Eyebrow>
              <h1 className="display text-[clamp(2.4rem,5.4vw,4.1rem)] text-ink">
                {contactPage.headline}{" "}
                <span className="text-royal">{contactPage.headlineAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/70">
                {contactPage.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 rounded-[var(--radius-card)] border border-ink/12 bg-bone p-7">
                <ul className="mt-5 space-y-3.5">
                  {contactPage.expect.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.97rem] text-ink/80">
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-1 h-4 w-4 shrink-0"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <dl className="mt-10 grid gap-5 sm:grid-cols-3">
                {models.map((model) => (
                  <div key={model.name}>
                    <dt className="text-[0.82rem] font-semibold text-ink">
                      {model.name}
                    </dt>
                    <dd className="mt-1 text-[0.82rem] leading-snug text-ink/55">
                      {model.price}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
