import type { Metadata } from "next";
import { careersPage } from "@/lib/content";

// PLACEHOLDER page until the careers copy exists. Kept out of search results.
export const metadata: Metadata = {
  title: "Find a job | Handoff",
  robots: { index: false, follow: true },
};

export default function CareersPage() {
  return (
    <section className="bg-ink section-py-hero text-bone">
      <div className="shell text-center">
        <h1 className="display text-[clamp(2.3rem,6vw,4.2rem)]">{careersPage.headline}</h1>
        <p className="mx-auto mt-5 max-w-[48ch] text-lg leading-relaxed text-bone/70">{careersPage.body}</p>
      </div>
    </section>
  );
}
