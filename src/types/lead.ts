export const LOCATION_OPTIONS = ["Albuquerque", "Los Lunas", "Bosque Farms", "Other"] as const;
export const EXPERIENCE_OPTIONS = ["Brand New", "Some Experience", "Returning"] as const;

export type LessonLocation = (typeof LOCATION_OPTIONS)[number];
export type ExperienceLevel = (typeof EXPERIENCE_OPTIONS)[number];

export type LeadFormInput = {
  fullName: string;
  email: string;
  phone?: string;
  location: LessonLocation;
  experienceLevel: ExperienceLevel;
  goals: string;
  preferredSchedule?: string;
  consent: boolean;
  sourcePage: string;
};

export type LeadSubmissionResult =
  | { ok: true; leadId: string }
  | { ok: false; error: string };
