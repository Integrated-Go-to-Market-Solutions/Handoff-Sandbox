import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Rubik is the brand typeface. Weights match the guidelines: Light, Medium,
// SemiBold, Bold.
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

const siteTitle = "Handoff | The Best of LATAM. AI Trained. Here to Stay.";
const siteDescription =
  "We help the best US companies hire Latin America's top 1% talent — vetted, AI-trained, and ready to make an impact from day one.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className="min-h-screen bg-ink text-bone antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
