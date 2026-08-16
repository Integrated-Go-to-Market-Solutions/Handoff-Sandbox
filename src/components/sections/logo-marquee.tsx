import Image from "next/image";
import { logos } from "@/lib/content";

/**
 * Client proof bar. Duplicated once so the CSS marquee can loop seamlessly at
 * -50% translation. Source logos are black on transparent, which is exactly
 * right on this light surface.
 */
export function LogoMarquee() {
  const row = [...logos, ...logos];

  return (
    <section className="border-y border-ink/10 bg-bone py-11">
      <p className="eyebrow shell mb-8 text-center text-ink/45">
        Trusted by teams in corporate housing, relocation and mobility
      </p>

      <div className="marquee-mask relative overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16 px-8">
          {row.map((logo, i) => (
            <div
              key={`${logo.slug}-${i}`}
              className="relative h-10 w-[150px] shrink-0 opacity-45 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={`/images/logos/${logo.slug}.webp`}
                alt={logo.name}
                fill
                sizes="150px"
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
