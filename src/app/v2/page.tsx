import type { Metadata } from "next";
import { HeroWall } from "@/components/sections/hero-wall";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { RoleTicker } from "@/components/sections/role-ticker";
import { Proof } from "@/components/sections/proof";
import { Vibes } from "@/components/sections/vibes";
import { Soul } from "@/components/sections/soul";
import { Process } from "@/components/sections/process";
import { Models } from "@/components/sections/models";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Handoff v2 | Face-wall hero",
  robots: { index: false, follow: false },
};

/**
 * Comparison build. Same content, different opening move: the team is the
 * first thing you see rather than a photo beside a paragraph.
 *
 * Also drops the Problem section, whose argument the Alma section already
 * makes better, to test whether fewer and bigger beats more and smaller.
 */
export default function V2() {
  return (
    <>
      <HeroWall />
      <LogoMarquee />
      <RoleTicker />
      <Proof />
      <Vibes />
      <Soul />
      <Process />
      <Models />
      <Faq />
      <Cta />
    </>
  );
}
