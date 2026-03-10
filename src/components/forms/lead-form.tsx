"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import { leadFormSchema, type LeadFormPayload } from "@/lib/lead-schema";
import { trackEvent } from "@/lib/analytics";
import { EXPERIENCE_OPTIONS, LOCATION_OPTIONS } from "@/types/lead";

type LeadFormProps = {
  sourcePage: string;
};

type FieldErrors = Partial<Record<keyof LeadFormPayload, string>>;
const defaultLeadEndpoint = "https://formsubmit.co/ajax/richardb.checkmark@gmail.com";
const emailJsEndpoint = "https://api.emailjs.com/api/v1.0/email/send";
const defaultEmailJsPublicKey = "CWba2-K2zzCESmVew";
const defaultEmailJsServiceId = "service_jhhmy66";
const defaultEmailJsTemplateId = "template_05419zr";

const initialFormState: LeadFormPayload = {
  fullName: "",
  email: "",
  phone: "",
  location: "Albuquerque",
  experienceLevel: "Brand New",
  goals: "",
  preferredSchedule: "",
  consent: false,
  sourcePage: "/contact"
};

export const LeadForm = ({ sourcePage }: LeadFormProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState<LeadFormPayload>({
    ...initialFormState,
    sourcePage
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"idle" | "success" | "error">("idle");
  const [hasTrackedStart, setHasTrackedStart] = useState(false);

  const trackStartIfNeeded = () => {
    if (!hasTrackedStart) {
      trackEvent("lead_form_started", { source_page: sourcePage });
      setHasTrackedStart(true);
    }
  };

  const handleChange = <K extends keyof LeadFormPayload>(field: K, value: LeadFormPayload[K]) => {
    trackStartIfNeeded();
    setFormData((current) => ({
      ...current,
      [field]: value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("");
    setStatusType("idle");

    const parsed = leadFormSchema.safeParse(formData);
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof LeadFormPayload;
        if (!nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }

      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() || defaultEmailJsPublicKey;
      const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() || defaultEmailJsServiceId;
      const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() || defaultEmailJsTemplateId;
      const leadEndpoint = process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT?.trim() || emailJsEndpoint;
      const isEmailJs = leadEndpoint.includes("api.emailjs.com");
      const isDirectFormSubmit = leadEndpoint.includes("formsubmit.co");
      const requestBody = isEmailJs
        ? {
            public_key: emailJsPublicKey,
            service_id: emailJsServiceId,
            template_id: emailJsTemplateId,
            template_params: {
              full_name: parsed.data.fullName,
              email: parsed.data.email,
              phone: parsed.data.phone || "",
              location: parsed.data.location,
              experience_level: parsed.data.experienceLevel,
              goals: parsed.data.goals,
              preferred_schedule: parsed.data.preferredSchedule || "",
              source_page: parsed.data.sourcePage,
              consent: parsed.data.consent ? "Yes" : "No"
            }
          }
        : isDirectFormSubmit
        ? {
            ...parsed.data,
            _subject: "New Guitar Consultation Request",
            _template: "table",
            _captcha: "false"
          }
        : parsed.data;

      const response = await fetch(leadEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      const result = (await response.json()) as
        | { ok: boolean; error?: string }
        | { success?: string; message?: string }
        | { status?: number; text?: string };

      if (isEmailJs) {
        const emailJsSuccess = response.ok;
        if (!emailJsSuccess) {
          const message =
            typeof result === "object" && result !== null && "text" in result && typeof result.text === "string"
              ? result.text
              : "Could not submit your request through EmailJS. Please verify your template settings.";
          setStatusMessage(message);
          setStatusType("error");
          return;
        }
      } else if (isDirectFormSubmit) {
        const success = typeof result === "object" && result !== null && "success" in result && result.success === "true";
        if (!response.ok || !success) {
          const message =
            typeof result === "object" && result !== null && "message" in result && typeof result.message === "string"
              ? result.message
              : "Could not submit your request. Please verify FormSubmit email activation and try again.";
          setStatusMessage(message);
          setStatusType("error");
          return;
        }
      } else {
        if (!response.ok || !("ok" in result) || !result.ok) {
          setStatusMessage("Could not submit your request. Please try again.");
          setStatusType("error");
          return;
        }
      }

      trackEvent("lead_form_submitted", { source_page: sourcePage });
      setStatusMessage("Thanks. Your request was received. Redirecting to scheduling...");
      setStatusType("success");

      setTimeout(() => {
        router.push("/thank-you");
      }, 700);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown network error";
      console.error("[lead-form] submission failed", {
        endpoint: process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT?.trim() || emailJsEndpoint,
        error
      });
      setStatusMessage(`Connection issue: ${errorMessage}`);
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reveal rounded-2xl border border-brand-sand bg-white p-6 shadow-card">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-brand-ink">
          Full Name
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={(event) => handleChange("fullName", event.target.value)}
            className="mt-1 w-full rounded-xl border border-brand-sand bg-brand-bone px-3 py-2 text-sm text-brand-ink"
            placeholder="Your name"
            required
          />
          {errors.fullName ? <span className="mt-1 block text-xs text-red-700">{errors.fullName}</span> : null}
        </label>

        <label className="text-sm font-medium text-brand-ink">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className="mt-1 w-full rounded-xl border border-brand-sand bg-brand-bone px-3 py-2 text-sm text-brand-ink"
            placeholder="you@example.com"
            required
          />
          {errors.email ? <span className="mt-1 block text-xs text-red-700">{errors.email}</span> : null}
        </label>

        <label className="text-sm font-medium text-brand-ink">
          Phone (optional)
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            className="mt-1 w-full rounded-xl border border-brand-sand bg-brand-bone px-3 py-2 text-sm text-brand-ink"
            placeholder="(505) 555-0000"
          />
        </label>

        <label className="text-sm font-medium text-brand-ink">
          Your Location
          <select
            name="location"
            value={formData.location}
            onChange={(event) => handleChange("location", event.target.value as LeadFormPayload["location"])}
            className="mt-1 w-full rounded-xl border border-brand-sand bg-brand-bone px-3 py-2 text-sm text-brand-ink"
          >
            {LOCATION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.location ? <span className="mt-1 block text-xs text-red-700">{errors.location}</span> : null}
        </label>

        <label className="text-sm font-medium text-brand-ink sm:col-span-2">
          Experience Level
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={(event) =>
              handleChange("experienceLevel", event.target.value as LeadFormPayload["experienceLevel"])
            }
            className="mt-1 w-full rounded-xl border border-brand-sand bg-brand-bone px-3 py-2 text-sm text-brand-ink"
          >
            {EXPERIENCE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-brand-ink sm:col-span-2">
          What do you want to achieve?
          <textarea
            name="goals"
            value={formData.goals}
            onChange={(event) => handleChange("goals", event.target.value)}
            className="mt-1 min-h-28 w-full rounded-xl border border-brand-sand bg-brand-bone px-3 py-2 text-sm text-brand-ink"
            placeholder="Example: I want to play rhythm guitar for 3 songs by summer."
            required
          />
          {errors.goals ? <span className="mt-1 block text-xs text-red-700">{errors.goals}</span> : null}
        </label>

        <label className="text-sm font-medium text-brand-ink sm:col-span-2">
          Preferred schedule (optional)
          <input
            type="text"
            name="preferredSchedule"
            value={formData.preferredSchedule}
            onChange={(event) => handleChange("preferredSchedule", event.target.value)}
            className="mt-1 w-full rounded-xl border border-brand-sand bg-brand-bone px-3 py-2 text-sm text-brand-ink"
            placeholder="Weekday evenings or Saturday mornings"
          />
        </label>

        <label className="sm:col-span-2 text-sm text-brand-ink/80">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(event) => handleChange("consent", event.target.checked)}
            className="mr-2 h-4 w-4 rounded border-brand-sand"
          />
          I agree to be contacted about guitar lessons.
          {errors.consent ? <span className="mt-1 block text-xs text-red-700">{errors.consent}</span> : null}
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-clay px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dusk disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Request My Free Consultation"}
      </button>

      {statusMessage ? (
        <p className={`mt-3 text-sm ${statusType === "error" ? "text-red-700" : "text-brand-pine"}`}>{statusMessage}</p>
      ) : null}
    </form>
  );
};
