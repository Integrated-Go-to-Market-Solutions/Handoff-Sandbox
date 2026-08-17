import Image from "next/image";
import { logos } from "@/lib/content";

/**
 * Client proof bar. Duplicated once so the CSS marquee loops seamlessly at
 * -50% translation.
 *
 * `bare` drops the section chrome so this can sit inside the hero, letting the
 * hero photograph bleed down behind it instead of stopping at a hard edge.
 */
export function LogoMarquee({ bare = false }: { bare?: boolean }) {
  const row = [...logos, ...logos];

  const track = (
    <div className="marquee-mask relative overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-20 px-10">
        {row.map((logo, i) => (
          <div
            key={`${logo.slug}-${i}`}
            className="relative h-24 w-[260px] shrink-0 transition-transform duration-500 hover:scale-105"
          >
            <Image
              src={`/images/logos/${logo.slug}.webp`}
              alt={logo.name}
              fill
              sizes="260px"
              className="object-contain object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (bare) return track;

  return <section className="bg-white py-14">{track}</section>;
}
