import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { hero } from "@/lib/content";

// Rubik is the brand typeface. Weights match the guidelines: Light, Medium,
// SemiBold, Bold.
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Handoff | The team behind your team",
  description:
    "Handoff places the top 1% of Latin American talent, AI-enabled and trained, inside the best US companies. Managed staffing, employer of record and direct-hire recruiting.",
  // Same line as the hero. This used to carry a third variant of the brand
  // statement, which is what every shared link previewed with.
  openGraph: {
    title: "Handoff | The team behind your team",
    description: hero.body,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="min-h-screen bg-white text-ink antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
