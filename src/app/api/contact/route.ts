import { NextResponse } from "next/server";

/**
 * Lead intake.
 *
 * TODO (blocked on credentials): forward to HubSpot once Nicole has the API
 * key and portal ID. The 8/6 call named HubSpot as the CRM and Ashby as the
 * ATS. Until then this validates, logs server-side and returns success so the
 * form is fully wired and testable.
 *
 * When wiring HubSpot, add HUBSPOT_TOKEN to the Vercel project env and POST to
 * the Forms or CRM Objects API here. Do not put the token in client code.
 */

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  area?: string;
  model?: string;
  details?: string;
  fax?: string; // honeypot
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend it worked so bots don't learn anything.
  if (body.fax) {
    return NextResponse.json({ ok: true });
  }

  const required: (keyof Payload)[] = [
    "name",
    "email",
    "company",
    "area",
    "model",
    "details",
  ];
  const missing = required.filter((key) => !String(body[key] ?? "").trim());

  if (missing.length > 0) {
    return NextResponse.json(
      { error: "Please fill in every required field." },
      { status: 400 },
    );
  }

  if (!isEmail(String(body.email))) {
    return NextResponse.json(
      { error: "That email address does not look right." },
      { status: 400 },
    );
  }

  console.log("[handoff] new lead", {
    name: body.name,
    email: body.email,
    company: body.company,
    website: body.website || null,
    area: body.area,
    model: body.model,
    details: String(body.details).slice(0, 500),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
