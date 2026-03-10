export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export type AnalyticsEventName =
  | "cta_click_free_intro"
  | "lead_form_started"
  | "lead_form_submitted"
  | "schedule_click_after_submit";

export const trackEvent = (
  eventName: AnalyticsEventName,
  params: Record<string, string | number | boolean> = {}
): void => {
  if (typeof window === "undefined") {
    return;
  }

  if (!window.gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  window.gtag("event", eventName, params);
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
