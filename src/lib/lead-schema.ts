import { z } from "zod";

import { EXPERIENCE_OPTIONS, LOCATION_OPTIONS } from "@/types/lead";

const emptyToUndefined = (value?: string): string | undefined => {
  if (!value) {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

export const leadFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z.string().optional(),
  location: z.enum(LOCATION_OPTIONS),
  experienceLevel: z.enum(EXPERIENCE_OPTIONS),
  goals: z.string().trim().min(12, "Please share a little more about your goals."),
  preferredSchedule: z.string().optional(),
  consent: z.boolean().refine((value) => value, { message: "Consent is required." }),
  sourcePage: z.string().trim().min(1, "Source page is required.")
});

export type LeadFormPayload = z.input<typeof leadFormSchema>;
export type ParsedLeadFormPayload = z.infer<typeof leadFormSchema>;

export const normalizeLeadFormPayload = (payload: ParsedLeadFormPayload): ParsedLeadFormPayload => ({
  ...payload,
  phone: emptyToUndefined(payload.phone),
  preferredSchedule: emptyToUndefined(payload.preferredSchedule)
});
