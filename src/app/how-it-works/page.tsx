import type { Metadata } from "next";
import { HiringHighway } from "@/components/sections/hiring-highway";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "How it works | Handoff",
  description:
    "The Hands Off Hiring System: the six steps every Handoff hire goes through, from scoping the role to the day we onboard them and stay on.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HiringHighway />
      <Cta />
    </>
  );
}
