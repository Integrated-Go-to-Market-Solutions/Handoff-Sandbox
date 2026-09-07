import Link from "next/link";

/**
 * The Handoff mark: a cyan diamond with the white check crossing its
 * lower-left, per the Logo Usage page of the brand guidelines.
 */
export function LogoMark({
  className = "h-9 w-9",
  tone = "light",
}: {
  className?: string;
  /** `light` = sitting on a light surface, so the check is ink. */
  tone?: "light" | "dark";
}) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M28 4 L45 21 L28 38 L11 21 Z" fill="var(--color-cyan)" />
      <path
        d="M3 24 L14 35 L36 13"
        fill="none"
        stroke={tone === "light" ? "var(--color-ink)" : "#ffffff"}
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-bold uppercase leading-[0.86] tracking-tight ${className}`}
    >
      <span className="block">Hand</span>
      <span className="block">Off</span>
    </span>
  );
}

export function LogoLock({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Handoff home"
    >
      <LogoMark />
      <Wordmark className="text-[0.95rem]" />
    </Link>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  /**
   * `acid` is the CTA color, reserved for buttons only per the brand
   * guidelines. `ghost` sits on light surfaces, `ghostDark` on ink ones.
   */
  variant?: "acid" | "ink" | "ghost" | "ghostDark";
  /** `sm` is the header button, `lg` the block button in the pricing cards. */
  size?: "sm" | "default" | "lg";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "acid",
  size = "default",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 will-change-transform hover:-translate-y-0.5";
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    default: "px-7 py-3.5 text-[0.95rem]",
    lg: "px-9 py-5 text-[1rem]",
  };
  const variants = {
    acid: "bg-acid text-ink hover:bg-cyan hover:text-ink",
    ink: "bg-ink text-bone hover:bg-royal hover:text-white",
    ghost: "border-2 border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-bone",
    ghostDark:
      "border-2 border-white/25 text-bone hover:border-cyan hover:text-cyan",
  };
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}

/**
 * The label above a page's H1. Deliberately NOT a pill: a filled bubble reads
 * as a button and competes with the actual CTAs. Plain type, brand colour,
 * open tracking.
 *
 * Page-top only. The standing rule is no section eyebrows, so this never
 * opens a section in the middle of a page.
 */
export function Eyebrow({
  children,
  tone = "onDark",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "royal" | "muted" | "onDark";
  className?: string;
}) {
  const tones = {
    royal: "text-royal",
    muted: "text-bone/55",
    onDark: "text-cyan",
  };
  return (
    <p
      className={`eyebrow text-[0.8125rem] tracking-[0.22em] md:text-sm ${tones[tone]} ${className}`}
    >
      {children}
    </p>
  );
}

export function Pill({
  children,
  tone = "cyan",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "cyan" | "outline";
  className?: string;
}) {
  const tones = {
    cyan: "bg-cyan text-ink",
    outline: "border border-ink-300 text-smoke",
  };
  return (
    <span
      className={`eyebrow inline-flex items-center rounded-full px-3.5 py-1.5 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
