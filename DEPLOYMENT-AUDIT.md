# Handoff Deployment Audit

Audit scope: the Next.js/Vercel implementation in this repository. The former
Framer site is out of scope.

## Summary

The site is structurally ready for a Vercel preview deployment. The homepage,
secondary pages, navigation, contact form UI, and logo assets are present. No
production analytics, advertising pixels, CRM delivery, transactional email,
or error monitoring integrations are currently configured in the codebase.

## Audit Findings

| Area | Status | Finding | Launch action |
| --- | --- | --- | --- |
| Next.js / Vercel | Ready | App Router project with `build`, `start`, and `lint` scripts. | Connect the GitHub repository to the Vercel project and verify the preview build. |
| Forms | Partial | `/contact` submits to `/api/contact`; required fields, email format, and honeypot are validated. | Test success, validation errors, duplicate submissions, and mobile behavior. |
| CRM wiring | Blocked | The API route currently logs a lead and returns success. HubSpot is referenced in a TODO, but no token or API request exists. | Jake to confirm the CRM, field mapping, pipeline, owner, and secret-management process, then wire and test it. |
| Email / Resend | Blocked | No Resend dependency, sender, notification recipient, or email delivery code exists. | Confirm the sending domain and recipients, verify DNS, add credentials in Vercel, and test delivery. |
| Google Analytics | Missing | No GA4 script, measurement ID, consent behavior, or custom events are configured. | Provide the GA4 measurement ID and consent requirements; add page-view and lead-submission events. |
| Tag Manager | Missing | No GTM container or data layer is configured. | Confirm whether GA4 is direct or managed through GTM, then provide the container ID. |
| Ad / social pixels | Missing | No Meta, LinkedIn, or other advertising pixels are present. | Provide the platforms and IDs if campaigns require them; document event ownership. |
| Sentry | Missing | No Sentry package, DSN, source-map setup, or release configuration exists. | Create the Sentry project, add the DSN through Vercel environment variables, and verify a test event. |
| SEO | Partial | Page metadata exists for the main routes. | Add and verify `robots.txt`, `sitemap.xml`, canonical URLs, Open Graph images, and the production domain before launch. |
| Accessibility | Partial | Semantic headings, labels, focus styles, and status messaging are present in the reviewed paths. | Run an automated audit and keyboard pass against the deployed preview. |
| Performance | Partial | Next Image, local video assets, and responsive layouts are used. | Run Lighthouse/Web Vitals on the Vercel preview, especially the video-heavy homepage. |
| Logo assets | Ready | Client logo files are available under `public/images/logos` and are rendered by the homepage marquee. | Confirm which logos are approved for public use before production launch. |

## Current Lead Flow

1. The visitor submits the contact form.
2. The browser sends JSON to `POST /api/contact`.
3. The route rejects malformed JSON, missing required fields, invalid email, or a
   filled honeypot according to the current behavior.
4. A valid lead is written to the server log and the browser receives `{ ok: true }`.
5. No CRM record or email notification is created yet.

The success response must not be treated as proof of lead delivery until CRM and
email integrations are connected and tested.

## Required Owner Inputs

- GitHub repository and Vercel project access
- Production domain and preferred canonical domain
- Node.js version and package-manager preference
- GA4 property and measurement ID, or GTM container ID
- Required advertising pixels and IDs
- CRM choice, API credentials, field mapping, and lead-routing rules
- Resend sending domain, from address, recipient list, and DNS access
- Sentry project DSN and organization conventions
- Approval to publish each client logo

## Launch Verification

- Preview deploy passes `npm run lint` and `npm run build`.
- All primary and secondary navigation links resolve.
- Contact form success and error states work on desktop and mobile.
- A test lead appears in the CRM and reaches the intended email inbox.
- GA4/GTM receives page views and the agreed lead event once configured.
- Pixel events fire only where approved and required.
- Sentry receives a controlled test event, then test instrumentation is removed.
- `robots.txt`, sitemap, canonical metadata, and Open Graph previews use the final domain.
- Lighthouse and keyboard/accessibility checks are completed on the production preview.