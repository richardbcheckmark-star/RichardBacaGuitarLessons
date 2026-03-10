import { describe, expect, it } from "vitest";

import { leadFormSchema, normalizeLeadFormPayload } from "@/lib/lead-schema";

describe("leadFormSchema", () => {
  const validPayload = {
    fullName: "Alex Student",
    email: "alex@example.com",
    phone: "(505) 555-1111",
    location: "Albuquerque" as const,
    experienceLevel: "Brand New" as const,
    goals: "I want to learn rhythm guitar and play three songs.",
    preferredSchedule: "Weekday evenings",
    consent: true,
    sourcePage: "/contact"
  };

  it("accepts valid submissions", () => {
    const result = leadFormSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("rejects payloads without consent", () => {
    const result = leadFormSchema.safeParse({
      ...validPayload,
      consent: false
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toContain("Consent");
    }
  });

  it("normalizes empty optional fields", () => {
    const parsed = leadFormSchema.parse({
      ...validPayload,
      phone: "",
      preferredSchedule: " "
    });

    const normalized = normalizeLeadFormPayload(parsed);
    expect(normalized.phone).toBeUndefined();
    expect(normalized.preferredSchedule).toBeUndefined();
  });
});
