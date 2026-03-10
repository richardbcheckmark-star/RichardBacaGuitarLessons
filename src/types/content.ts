export type NavItem = {
  label: string;
  href: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  outcome: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LocalPageContent = {
  areaName: string;
  slug: string;
  pageTitle: string;
  pageDescription: string;
  h1: string;
  intro: string;
  highlights: string[];
  localFit: string;
  faq: FaqItem[];
};
