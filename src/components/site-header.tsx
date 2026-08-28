"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoLock, Button } from "./brand";
import { nav, site } from "@/lib/content";
import type { NavItem } from "@/lib/content";

/**
 * Desktop dropdown. Opens on hover for the mouse and on focus-within for the
 * keyboard, so the industry pages are reachable either way without a click
 * handler and without trapping focus.
 */
function NavGroup({ item }: { item: NavItem }) {
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="flex items-center gap-1 text-[0.93rem] font-medium text-ink/65 transition-colors hover:text-ink group-focus-within:text-ink"
      >
        {item.label}
        <svg
          viewBox="0 0 12 8"
          className="h-2 w-2.5 transition-transform duration-200 group-hover:rotate-180"
          aria-hidden="true"
        >
          <path
            d="M1 1.5 6 6.5 11 1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="min-w-[15rem] rounded-[var(--radius-card)] border border-ink/10 bg-white p-2 shadow-xl">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block rounded-xl px-4 py-3 text-[0.93rem] font-medium text-ink/75 transition-colors hover:bg-bone hover:text-ink"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Don't let the page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-white/85 backdrop-blur-lg"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="shell flex items-center justify-between py-4">
        <LogoLock className="text-ink" />

        <nav className="hidden items-center gap-6 md:flex lg:gap-9">
          {nav.map((item) =>
            item.children ? (
              <NavGroup key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.93rem] font-medium text-ink/65 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ),
          )}
          <Button href={site.bookCall} size="sm">
            Talk to Our Team
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-white px-6 pb-16 pt-8 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <div key={item.href} className="border-b border-ink/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display block py-5 text-3xl text-ink"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="-mt-2 space-y-3 pb-5 pl-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block text-base font-medium text-ink/60"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Button href={site.bookCall} className="mt-8 w-full">
              Talk to Our Team
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
