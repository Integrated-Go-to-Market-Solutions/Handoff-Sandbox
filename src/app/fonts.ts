import { Montserrat } from "next/font/google";

/**
 * The text face for text-heavy content, used through the `font-text`
 * utility (see `--font-text` in globals.css).
 *
 * STAND-IN: the brand calls for Gotham, but no Gotham files are in the
 * project and it's a paid font that needs a licence. Montserrat is the
 * closest free match. To switch to Gotham, replace this one call with
 * `localFont({ src: [...the licensed files...], variable: "--font-text-face" })`
 * from "next/font/local". Nothing else needs to change.
 */
export const textFace = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-text-face",
  display: "swap",
});
