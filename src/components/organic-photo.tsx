import Image from "next/image";

/**
 * A real photo cropped into a soft, asymmetric blob instead of a rectangle.
 * Direct reference: "this vibe for images" (a candid remote-work photo
 * cropped into an organic rounded shape). Matches the brand guide's own
 * "organic forms" background proposal — playful without tipping into
 * whimsy, per Nico on the call: "aiming at companies and bigger
 * corporations," not a kids'-app look.
 */
export function OrganicPhoto({
  src,
  alt,
  className = "",
  flip = false,
  focus = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  /** Mirrors the blob so adjacent photos in a row don't look identical. */
  flip?: boolean;
  /** Per-photo crop override — some source photos are tall portraits where
   * a centered crop cuts into the face; leave at "center" unless a specific
   * photo needs it. */
  focus?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius: flip
          ? "58% 42% 48% 52% / 44% 40% 60% 56%"
          : "42% 58% 52% 48% / 56% 48% 52% 44%",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="400px"
        className="object-cover"
        style={{ objectPosition: focus }}
      />
    </div>
  );
}
