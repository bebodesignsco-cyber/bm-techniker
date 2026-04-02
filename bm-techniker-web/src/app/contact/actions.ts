"use server";

import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(8, "Enter a valid phone number"),
  vehicle: z.string().optional(),
  message: z.string().min(10, "Please enter at least 10 characters"),
});

export type BookingFormState = {
  ok?: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

export async function submitBooking(
  _prev: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  const consent = formData.get("consent");
  if (consent !== "on") {
    return {
      errors: {
        consent: ["Please agree to the privacy statement to continue."],
      },
    };
  }

  const raw = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    vehicle: String(formData.get("vehicle") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const parsed = bookingSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // Replace with email integration, CRM, or ticketing (e.g. Resend, Formspark).
  void parsed.data;

  return { ok: true, message: "Thanks—we will contact you shortly." };
}
