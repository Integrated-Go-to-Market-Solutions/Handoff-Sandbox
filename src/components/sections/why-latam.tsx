import { Reveal } from "../reveal";
import { IconBadge, type IconName } from "../icon";
import { whyLatam } from "@/lib/content";

/**
 * Straight from the sales deck's "Why LATAM" slide — same three reasons,
 * same bullets. Per direct instruction: light gray background, a subtle
 * darker-gray sketch of the LATAM outline as a watermark rather than a
 * literal map graphic, reasons listed without numbers, icons in the
 * cyan-outline treatment from the brand guide's Elements Usage page.
 */
export function WhyLatam() {
  return (
    <section className="relative overflow-hidden bg-bone section-py text-ink">
      {/* Subtle LATAM outline watermark, slightly darker gray, not a literal
          map — just enough presence to place the section without competing
          with the actual content. */}
      <svg
        viewBox="0 0 400 600"
        className="pointer-events-none absolute -right-16 top-1/2 h-[140%] w-auto -translate-y-1/2 opacity-[0.05] md:-right-6"
        aria-hidden="true"
      >
        <path
          d="M180 10 C210 30 195 55 220 70 C245 85 235 105 215 115 C250 130 260 160 240 180 C275 190 300 220 285 250 C310 270 320 305 295 330 C320 355 315 390 285 410 C300 440 290 475 260 490 C265 520 245 550 215 565 C210 585 190 595 175 585 C160 570 165 545 155 525 C130 515 120 485 130 460 C105 445 100 410 120 390 C100 370 105 335 130 320 C110 300 115 265 140 250 C120 230 130 195 160 185 C145 165 155 135 180 125 C165 105 175 75 200 65 C185 50 175 25 180 10 Z"
          fill="var(--color-ink)"
        />
      </svg>

      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <h2 className="display text-[clamp(2.1rem,4.8vw,3.7rem)] text-ink">
            {whyLatam.headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {whyLatam.categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 100}>
              <IconBadge name={category.icon as IconName} className="h-14 w-14" />
              <h3 className="display mt-5 text-xl leading-tight text-ink">
                {category.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-ink/55">
                {category.tagline}
              </p>
              <ul className="mt-4 space-y-2.5">
                {category.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-[0.95rem] leading-snug text-ink/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-dim" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
