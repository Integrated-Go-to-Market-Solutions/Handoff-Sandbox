import Link from "next/link";
import { LogoMark, Wordmark } from "./brand";
import { site } from "@/lib/content";

const columns = [
  {
    title: "Company",
    links: [
      { label: "How it works", href: "/#process" },
      { label: "Pricing", href: "/#models" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Talent",
    links: [
      { label: "Who you could hire", href: "/talent" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Talk to Our Team", href: site.bookCall },
      { label: "hello@handoff.com", href: "mailto:hello@handoff.com" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-bone">

      <div className="shell relative py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Handoff home">
              <LogoMark className="h-10 w-10" tone="dark" />
              <Wordmark className="text-base" />
            </Link>
            <p className="mt-5 max-w-[30ch] text-base font-medium leading-relaxed text-bone/80">
              The top 1% of Latin American talent, AI-enabled, placed inside the
              best US companies.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-bone">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-medium text-bone/75 transition-colors hover:text-cyan"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-ink-200 pt-6">
          <span className="text-sm font-medium text-bone/70">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="display text-sm text-cyan">{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
