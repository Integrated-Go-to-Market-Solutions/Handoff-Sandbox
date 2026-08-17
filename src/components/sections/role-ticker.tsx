import { roleTicker } from "@/lib/content";

/**
 * Cyan band of role names running counter to the client logo marquee above it.
 * Two opposing directions give the top of the page some movement without
 * anything blinking or bouncing.
 */
export function RoleTicker() {
  const row = [...roleTicker, ...roleTicker];

  return (
    <section className="overflow-hidden bg-cyan py-5">
      <div className="marquee-mask relative overflow-hidden">
        <div className="marquee-track marquee-reverse flex w-max items-center gap-8">
          {row.map((role, i) => (
            <span key={`${role}-${i}`} className="flex shrink-0 items-center gap-8">
              <span className="display whitespace-nowrap text-xl text-ink md:text-2xl">
                {role}
              </span>
              <span className="text-xl text-ink/35">&#9670;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
