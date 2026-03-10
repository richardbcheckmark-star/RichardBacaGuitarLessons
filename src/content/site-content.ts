import type { FaqItem, LocalPageContent, NavItem, Testimonial } from "@/types/content";

export const siteConfig = {
  siteName: "Richard Baca Guitar Lessons",
  siteUrl: "https://www.richardbacaguitarlessons.com",
  defaultOgImage: "/og-image.svg",
  tagLine: "Guitar lessons for beginners and intermediates alike",
  contact: {
    phone: "(505) 440-3605",
    email: "richardb.checkmark@gmail.com",
    address: "5413 Lomas Blvd NE, Albuquerque, NM 87110",
    scheduleUrl: "https://calendly.com/your-handle/free-consultation"
  },
  serviceAreas: ["Albuquerque", "Los Lunas", "Bosque Farms"],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  }
};

export const navItems: NavItem[] = [
  { label: "Lessons", href: "/lessons" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" }
];

export const heroBullets = [
  "Personalized one-on-one instruction built for adult beginners",
  "Studio lessons at 5413 Lomas Blvd NE or in-home lessons by request",
  "Free Consultation to map out your first month"
];

export const whoItsFor = [
  "Adults picking up guitar for the first time",
  "Former players restarting after a long break",
  "Busy professionals who need a clear, stress-free practice plan"
];

export const lessonBenefits = [
  "Simple song-first progression so you play real music early",
  "Technique coaching that prevents bad habits and hand strain",
  "Custom weekly practice plan designed around your schedule"
];

export const lessonRoadmap = [
  {
    label: "First 30 days",
    detail: "Basic chords, rhythm confidence, and one complete song that you enjoy playing."
  },
  {
    label: "By day 60",
    detail: "Smooth chord changes, strumming patterns, and timing control with a metronome."
  },
  {
    label: "By day 90",
    detail: "Two to four songs performed confidently, plus beginner fretboard navigation."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Mark T.",
    location: "Albuquerque",
    quote:
      "I always thought I was too late to start guitar. The lessons made everything feel practical and doable from week one.",
    outcome: "Played first full song at week 4"
  },
  {
    name: "Angela R.",
    location: "Los Lunas",
    quote:
      "The weekly structure keeps me consistent. I finally understand what to practice instead of guessing each day.",
    outcome: "Practicing 4 days a week with confidence"
  },
  {
    name: "David C.",
    location: "Bosque Farms",
    quote:
      "Patient coaching, no pressure, and clear explanations. I came back after 15 years and now look forward to every lesson.",
    outcome: "Returned to guitar after long break"
  }
];

export const lessonFaq: FaqItem[] = [
  {
    question: "Do I need to own a guitar before my consultation?",
    answer:
      "No. If you do not have an instrument yet, we can recommend beginner-friendly options and sizes before your first paid lesson."
  },
  {
    question: "How long are lessons?",
    answer: "Most students choose 45 or 60 minutes. We match lesson length to your goals and weekly schedule."
  },
  {
    question: "Is this right for complete beginners?",
    answer:
      "Yes. The teaching style is built specifically for adult beginners who want structure, encouragement, and clear milestones."
  },
  {
    question: "What styles can I learn?",
    answer:
      "Beginner-friendly pop, folk, worship, and classic rock foundations are common starts, then we tailor songs to your interests."
  }
];

export const localPages: Record<string, LocalPageContent> = {
  albuquerque: {
    areaName: "Albuquerque",
    slug: "guitar-lessons-albuquerque-nm",
    pageTitle: "Guitar Lessons in Albuquerque, NM for Adult Beginners",
    pageDescription:
      "Personalized in-person guitar lessons in Albuquerque for adult beginners. Start with a free consultation and a clear 90-day plan.",
    h1: "Adult Beginner Guitar Lessons in Albuquerque, NM",
    intro:
      "If you are in Albuquerque and want a friendly, structured way to learn guitar, this program is designed to help you progress quickly without feeling overwhelmed.",
    highlights: [
      "One-on-one beginner coaching with clear weekly milestones",
      "Song-driven curriculum that keeps lessons practical",
      "Convenient scheduling for working adults"
    ],
    localFit:
      "Albuquerque students often juggle work, family, and limited practice time. Lessons are built around realistic at-home routines that still deliver steady progress.",
    faq: [
      {
        question: "Do you teach students across Albuquerque?",
        answer:
          "Yes, lessons are designed for students throughout Albuquerque, with scheduling options that support weekday evenings and Saturdays."
      },
      {
        question: "Can I focus on songs I already love?",
        answer:
          "Yes. We balance foundational skills with songs you choose so progress stays motivating and practical."
      }
    ]
  },
  losLunas: {
    areaName: "Los Lunas",
    slug: "guitar-lessons-los-lunas-nm",
    pageTitle: "Guitar Lessons Near Los Lunas, NM for Beginners",
    pageDescription:
      "Structured beginner guitar lessons for adults in Los Lunas. Build confidence with a practical weekly plan and local in-person instruction.",
    h1: "Beginner Guitar Lessons for Los Lunas Students",
    intro:
      "Los Lunas students get a supportive learning environment focused on practical playing skills, strong rhythm, and songs you are excited to practice.",
    highlights: [
      "Beginner-first coaching pace with no pressure",
      "Clear lesson notes and practice checkpoints",
      "Convenient for students commuting from Los Lunas"
    ],
    localFit:
      "Many Los Lunas students want dependable guidance and accountability each week. Lessons emphasize consistency so your practice time stays focused.",
    faq: [
      {
        question: "Are lessons beginner friendly for adults with busy schedules?",
        answer:
          "Absolutely. Lessons are structured to fit limited weekly practice windows while still moving you forward every month."
      },
      {
        question: "How soon can I start?",
        answer: "Most new Los Lunas students can schedule a free consultation within one to two weeks."
      }
    ]
  },
  bosqueFarms: {
    areaName: "Bosque Farms",
    slug: "guitar-lessons-bosque-farms-nm",
    pageTitle: "In-Person Guitar Lessons Serving Bosque Farms, NM",
    pageDescription:
      "Warm, one-on-one beginner guitar lessons for adults near Bosque Farms, NM. Start with a free consultation and personalized learning path.",
    h1: "In-Person Guitar Lessons for Bosque Farms Beginners",
    intro:
      "Bosque Farms learners can start guitar with a simple, supportive path that builds confidence quickly and removes the guesswork from daily practice.",
    highlights: [
      "Personalized lesson plans built around your goals",
      "Technique coaching to prevent beginner frustration",
      "Progress tracking so each lesson has clear outcomes"
    ],
    localFit:
      "Bosque Farms students often value calm, one-on-one instruction with practical steps. The program focuses on skill growth you can hear week after week.",
    faq: [
      {
        question: "Do you work with complete beginners in Bosque Farms?",
        answer:
          "Yes. Most students start with little or no prior experience, and lessons begin with fundamentals at a comfortable pace."
      },
      {
        question: "What happens during the free consultation?",
        answer:
          "We talk through your goals, assess your starting point, and map an initial 90-day path with lesson recommendations."
      }
    ]
  }
};

export const pricing = {
  startingPrice: "$75 per hour",
  lessonDuration: "60 minutes",
  introLessonPrice: "$0",
  packages: [
    {
      title: "Starter Path",
      description: "30 minute lessons",
      price: "Starting at $37 per lesson"
    },
    {
      title: "Momentum Plan",
      description: "1 hour lesson",
      price: "Starting at $75 per lesson"
    }
  ]
};
