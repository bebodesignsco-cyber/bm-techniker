"use client";

import { useActionState } from "react";

import { submitBooking, type BookingFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";

const initial: BookingFormState = {};

const fieldClassName =
  "mt-1 w-full border border-brand-yellow/18 bg-brand-yellow/5 px-3 py-2.5 text-foreground outline-none ring-brand-yellow backdrop-blur-sm placeholder:text-white/45 focus:border-brand-yellow/35 focus:ring-2";

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return (
    <p className="mt-1 text-sm text-brand-red" role="alert">
      {messages[0]}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitBooking, initial);

  if (state.ok) {
    return (
      <div
        className="rounded-lg border border-brand-yellow/20 bg-brand-yellow/6 p-8 text-center backdrop-blur-sm"
        role="status"
      >
        <p className="text-lg font-semibold text-foreground">
          Booking request received
        </p>
        <p className="mt-2 text-foreground/75">
          {state.message ?? "We will be in touch soon."}
        </p>
        <p className="mt-4 text-sm text-foreground/60">
          Prefer to speak now?{" "}
          <a href="tel:0393705482" className="text-brand-yellow hover:underline">
            03 9370 5482
          </a>
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={fieldClassName}
          />
          <FieldError messages={state.errors?.name} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClassName}
          />
          <FieldError messages={state.errors?.email} />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={fieldClassName}
          />
          <FieldError messages={state.errors?.phone} />
        </div>
        <div>
          <label
            htmlFor="vehicle"
            className="text-sm font-medium text-foreground"
          >
            Vehicle (make / model / year)
          </label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            autoComplete="off"
            className={fieldClassName}
          />
          <FieldError messages={state.errors?.vehicle} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Service, warning lights, noises, preferred dates…"
          className={`${fieldClassName} resize-y`}
        />
        <FieldError messages={state.errors?.message} />
      </div>
      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          value="on"
          required
          className="mt-1 h-4 w-4 border-brand-yellow/22 bg-brand-yellow/5 text-brand-red focus:ring-brand-yellow"
        />
        <label htmlFor="consent" className="text-sm text-foreground/80">
          I agree that my details may be used to respond to this enquiry, as
          described in the{" "}
          <a href="/privacy-policy" className="text-brand-yellow hover:underline">
            privacy policy
          </a>
          .
        </label>
      </div>
      <FieldError messages={state.errors?.consent} />

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={pending}>
        {pending ? "Sending…" : "Send booking enquiry"}
      </Button>
    </form>
  );
}
