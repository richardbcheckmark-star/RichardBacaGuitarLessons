import type { ParsedLeadFormPayload } from "@/lib/lead-schema";
import type { LeadSubmissionResult } from "@/types/lead";
import { siteConfig } from "@/content/site-content";

const leadWebhookUrl = process.env.FORM_WEBHOOK_URL;
const fallbackEmailEndpoint = `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.contact.email)}`;

export const deliverLead = async (payload: ParsedLeadFormPayload): Promise<LeadSubmissionResult> => {
  const leadId = crypto.randomUUID();
  const targetUrl = leadWebhookUrl || fallbackEmailEndpoint;

  try {
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        leadId,
        submittedAt: new Date().toISOString(),
        ...payload,
        _subject: "New Guitar Consultation Request",
        _template: "table",
        _captcha: "false"
      }),
      cache: "no-store"
    });

    let responseBody: unknown = null;
    try {
      responseBody = await response.json();
    } catch {
      responseBody = null;
    }

    if (!response.ok) {
      return {
        ok: false,
        error: "Lead delivery provider returned an error."
      };
    }

    if (!leadWebhookUrl) {
      const formSubmitSuccess =
        typeof responseBody === "object" &&
        responseBody !== null &&
        "success" in responseBody &&
        String((responseBody as { success: unknown }).success).toLowerCase() === "true";

      if (!formSubmitSuccess) {
        const message =
          typeof responseBody === "object" &&
          responseBody !== null &&
          "message" in responseBody &&
          typeof (responseBody as { message: unknown }).message === "string"
            ? (responseBody as { message: string }).message
            : "Email delivery is not yet activated. Check your inbox for FormSubmit verification.";

        return { ok: false, error: message };
      }
    }

    return { ok: true, leadId };
  } catch (error) {
    console.error("[lead-form] Failed to deliver lead payload.", error);
    return { ok: false, error: "Lead submission failed. Please try again." };
  }
};
