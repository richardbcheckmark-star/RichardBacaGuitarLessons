# Guitar Teacher Website (Next.js)

Professional marketing + lead-generation website for adult beginner guitar lessons in Albuquerque, Los Lunas, and Bosque Farms.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Zod validation
- Vitest unit tests

## Quick Start
1. Install Node.js 20+.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run development server:
   ```bash
   npm run dev
   ```
5. Open:
   - `http://localhost:3000`

## GitHub Note
- A root `index.html` is included for repository compatibility.
- The actual Next.js homepage source is `src/app/page.tsx`.
- If you deploy with Vercel/Netlify, `index.html` in root is not used at runtime.

## Preview Options
- Recommended (full app preview):
  ```bash
  npm install
  npm run dev
  ```
  Then open `http://localhost:3000`.
- Production-like preview:
  ```bash
  npm run build
  npm run start
  ```
  Then open `http://localhost:3000`.

## GitHub Pages Deploy
`localhost` is only for local development. For GitHub hosting, deploy the static export from `out/`.

Recommended (automatic):
1. Push to `main`.
2. GitHub Action `.github/workflows/deploy-pages.yml` builds and deploys `out/`.
3. In GitHub repo settings, set Pages source to `GitHub Actions`.

Important:
- Do **not** open root `index.html` expecting the app; that file is only a repository helper.
- The real deployed app URL will be:
  - `https://<your-github-username>.github.io/<your-repo-name>/`

For EmailJS in GitHub Actions, add repository secrets:
- `NEXT_PUBLIC_LEAD_FORM_ENDPOINT`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

## Environment Variables
- `NEXT_PUBLIC_SITE_URL`: canonical site URL.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: GA4 measurement ID for analytics events.
- `NEXT_PUBLIC_LEAD_FORM_ENDPOINT`: browser-side form endpoint (default: EmailJS API).
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJS public key.
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: EmailJS service ID.
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: EmailJS template ID.
- `FORM_WEBHOOK_URL`: optional webhook endpoint for lead delivery (overrides default email fallback).

Default behavior sends submissions directly to EmailJS in the browser, which works on static hosting too.
Expected EmailJS template params used by the form:
- `full_name`
- `email`
- `phone`
- `location`
- `experience_level`
- `goals`
- `preferred_schedule`
- `source_page`
- `consent`

If you prefer FormSubmit fallback instead, set:
- `NEXT_PUBLIC_LEAD_FORM_ENDPOINT=https://formsubmit.co/ajax/richardb.checkmark@gmail.com`

If you prefer server-side handling, set `NEXT_PUBLIC_LEAD_FORM_ENDPOINT=/api/leads` and configure `FORM_WEBHOOK_URL`.

## Routes
- `/`
- `/lessons`
- `/about`
- `/testimonials`
- `/pricing`
- `/contact`
- `/guitar-lessons-albuquerque-nm`
- `/guitar-lessons-los-lunas-nm`
- `/guitar-lessons-bosque-farms-nm`
- `/thank-you`

## Lead Form Contract
Payload fields:
- `fullName` (required)
- `email` (required valid email)
- `phone` (optional)
- `location` (`Albuquerque | Los Lunas | Bosque Farms | Other`)
- `experienceLevel` (`Brand New | Some Experience | Returning`)
- `goals` (required)
- `preferredSchedule` (optional)
- `consent` (must be `true`)
- `sourcePage` (required)

Validation runs both client-side and server-side with Zod.

## Analytics Events
- `cta_click_free_intro`
- `lead_form_started`
- `lead_form_submitted`
- `schedule_click_after_submit`

## SEO
- Route-level metadata with canonical URLs
- JSON-LD (`MusicSchool` + `FAQPage`)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## Content Editing
All site content is centralized in:
- `src/content/site-content.ts`

Replace TODO placeholders there for business name, contact details, schedule link, credentials, and local details.

## Tests
Run:
```bash
npm run test
```

## QA Checklist
- Test lead form validation and redirect to `/thank-you`
- Verify all CTAs route to `/contact`
- Validate structured data output
- Check mobile sticky CTA behavior
- Run Lighthouse on core pages
