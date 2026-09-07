"use client";

import { useState } from "react";
import { contactPage } from "@/lib/content";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-[0.97rem] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-royal focus:ring-4 focus:ring-royal/10";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(body?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("ok");
      setMessage("Got it. We will be in touch within one business day.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "We could not send that. Email hello@handoff.com and we will pick it up there.",
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[var(--radius-brand)] border border-ink/12 bg-white p-7 shadow-sm md:p-9"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold text-ink">
            Company
          </label>
          <input
            id="company"
            name="company"
            required
            autoComplete="organization"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="website" className="mb-2 block text-sm font-semibold text-ink">
            Website <span className="font-normal text-ink/40">(optional)</span>
          </label>
          <input id="website" name="website" className={field} />
        </div>

        <div>
          <label htmlFor="area" className="mb-2 block text-sm font-semibold text-ink">
            What kind of role
          </label>
          <select id="area" name="area" required defaultValue="" className={field}>
            <option value="" disabled>
              Choose one
            </option>
            {contactPage.roleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="model" className="mb-2 block text-sm font-semibold text-ink">
            Engagement model
          </label>
          <select id="model" name="model" required defaultValue="" className={field}>
            <option value="" disabled>
              Choose one
            </option>
            {contactPage.modelOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="details" className="mb-2 block text-sm font-semibold text-ink">
          What is on your plate that should not be?
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          required
          placeholder="The role you keep meaning to hire for, what you have already tried, and what would have to be true for this to be a win."
          className={`${field} resize-y`}
        />
      </div>

      {/* Simple honeypot. Real people leave it empty. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="fax">Fax</label>
        <input id="fax" name="fax" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 w-full rounded-full bg-cyan px-7 py-4 text-[0.98rem] font-semibold text-ink transition-all duration-300 hover:bg-ink hover:text-cyan disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Get Started Today"}
      </button>

      {message && (
        <p
          role="status"
          className={`mt-4 text-center text-sm font-medium ${
            status === "error" ? "text-red-600" : "text-royal"
          }`}
        >
          {message}
        </p>
      )}

      <p className="mt-4 text-center text-xs leading-relaxed text-ink/45">
        We use this to prepare for the call. No newsletter, no drip sequence.
      </p>
    </form>
  );
}
