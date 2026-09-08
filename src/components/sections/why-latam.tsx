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
      {/* Subtle LATAM outline watermark — traced from the real geography
          (Baja, the Yucatán bulge, the Central American isthmus, Brazil's
          eastward shoulder, tapering to Tierra del Fuego), not a stock
          photo. Slightly darker gray, low opacity, just enough presence to
          place the section without competing with the actual content. */}
      <svg
        viewBox="0 0 400 600"
        className="pointer-events-none absolute -right-10 top-1/2 h-[130%] w-auto -translate-y-1/2 opacity-[0.06] md:right-4"
        aria-hidden="true"
      >
        <path
          d="M70,20 L55,70 L75,78 L95,30 L140,15 L180,25 L190,70 L222,92 L196,107 L176,130 L186,150 L166,172 L192,186 L222,180 L248,202 L272,232 L292,272 L300,322 L294,362 L268,422 L244,472 L228,512 L208,532 L192,516 L174,460 L164,400 L158,340 L153,280 L148,220 L158,172 Z"
          fill="var(--color-ink)"
        />
        <circle cx="232" cy="98" r="5" fill="var(--color-ink)" />
        <circle cx="250" cy="108" r="3.5" fill="var(--color-ink)" />
        <circle cx="215" cy="88" r="2.5" fill="var(--color-ink)" />
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
