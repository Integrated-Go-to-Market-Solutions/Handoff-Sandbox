import Image from "next/image";
import { Button } from "../brand";
import { Reveal } from "../reveal";
import { hero } from "@/lib/content";

const facts = [
  { value: "~300", label: "candidates reviewed per role" },
  { value: "90-day", label: "guarantee on direct hires" },
  { value: "Same", label: "time zone as your team" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* The photograph occupies the right of the frame at close to its native
          size, so the whole group stays visible and sharp rather than being
          cropped to torsos by a full-width cover. Its left edge dissolves into
          the page. */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[60%]"
        aria-hidden="true"
      >
        <Image
          src="/images/team-group.webp"
          alt=""
          fill
          priority
          quality={95}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center"
        />
        {/* Left edge fade. Heavier below lg, where the photo sits behind the copy. */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.97) 45%, rgba(255,255,255,0.86) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              // Hold solid white across the first few percent so the photo's
              // left edge can never show as a seam.
              "linear-gradient(90deg, #fff 0%, #fff 7%, rgba(255,255,255,0.88) 17%, rgba(255,255,255,0.45) 32%, rgba(255,255,255,0.08) 49%, rgba(255,255,255,0) 63%)",
          }}
        />
        {/* Vertical fades so the photo dissolves into the page above and below. */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 78%)",
          }}
        />
      </div>

      <div className="shell relative flex min-h-[clamp(560px,82vh,860px)] items-center py-20">
        <div className="max-w-[38rem]">
          <Reveal>
            <h1 className="display text-[clamp(2.9rem,7vw,5.4rem)] text-ink">
              {hero.headline[0]}{" "}
              <span className="text-royal">{hero.headline[1]}</span>{" "}
              {hero.headline[2]}
            </h1>
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-ink/75">
              {hero.body}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={hero.primary.href}>{hero.primary.label}</Button>
              <Button href={hero.secondary.href} variant="ghost">
                {hero.secondary.label}
              </Button>
            </div>
            <p className="mt-5 text-sm text-ink/55">{hero.note}</p>
          </Reveal>

          <Reveal delay={260}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="display text-2xl text-royal">{fact.value}</dt>
                  <dd className="mt-1.5 text-[0.8rem] leading-snug text-ink/60">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
