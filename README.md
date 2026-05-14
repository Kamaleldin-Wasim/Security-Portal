# Saudi Security Services Website

This repository contains a production-oriented, Arabic-first website and backend platform for a premium Saudi security services company.

## 1. Brand Identity

### Suggested company names

1. **درع النخبة للأمن | Elite Shield Security**
   - Premium, protective, executive tone
2. **أمان الحصن للحراسات | Fortress Aman Security**
   - Local trust + strong institutional feel
3. **رؤية الحماية الأمنية | Vision Guard Security**
   - Modern, corporate, scalable branding

### Recommended final direction

Use **درع النخبة للأمن | Elite Shield Security**.

### Brand personality

- Secure
- Elite
- Reliable
- Disciplined
- Saudi corporate

### Color palette

- `#061A2F` Midnight Navy
- `#0D2D4D` Royal Security Blue
- `#C8A45D` Premium Gold
- `#F6F4EE` Warm White
- `#111111` Executive Black

### Typography

- Arabic: `Cairo`
- English: `Inter`

These pair well visually, maintain clarity on mobile, and support a premium corporate presence.

## 2. UX Breakdown

### Home

- Hero with Arabic-first headline, primary CTAs, emergency contact, and trust strip
- Services overview cards
- Statistics / trust indicators
- Industries served
- Featured projects
- Certifications / compliance section
- Testimonials carousel
- FAQ
- Strong closing CTA

### About

- Company story
- Mission / vision / values
- Leadership trust message
- Operational methodology
- Compliance and governance

### Services

- Overview page with all services
- Individual pages for:
  - Security Guards
  - VIP Protection
  - Event Security
  - CCTV & Surveillance
  - Access Control
  - Patrol Security
  - Security Consulting

### Sectors

- Government
- Corporate offices
- Commercial facilities
- Warehouses
- Hospitality
- Events & exhibitions
- Residential compounds

### Projects / Case Studies

- Outcome-oriented security engagements
- Industry, challenge, solution, result

### Clients

- Client logo wall
- Partnership confidence messaging
- Procurement / onboarding reassurance

### Blog / Insights

- Articles on risk mitigation, event readiness, CCTV planning, access control strategy

### Careers

- Hiring pipeline for guards
- Benefits, requirements, training promise
- Job application form

### Contact

- Phone, WhatsApp, email, office location, map embed area

### Request a Quote

- Detailed requirement capture form

## 3. Wireframe Explanation

### Homepage wireframe

1. Sticky top navigation with language switcher and quote CTA
2. Hero split layout:
   - Left/right adapts based on locale direction
   - Headline, supporting copy, 3 CTAs
   - Trust cards and response-time badge
3. Trust metrics band
4. Services grid
5. Sectors and differentiators
6. Featured case studies
7. Testimonials
8. FAQ accordion
9. Final CTA banner
10. Structured footer

### Service page wireframe

1. Page hero
2. Key service outcomes
3. Deliverables / scope
4. Operating process
5. Related sectors
6. CTA form strip

### Quote / Careers wireframe

1. Intro and trust message
2. Multi-field form
3. Sidebar with process expectations and contact options

## 4. Frontend Architecture

Frontend is built with **Next.js App Router + Tailwind CSS + Framer Motion**.

### Structure

- `apps/web/app/[locale]` locale-aware routes
- `apps/web/components` reusable UI sections
- `apps/web/data` bilingual content + service definitions
- `apps/web/lib` localization and helpers

### Key decisions

- Default locale is Arabic
- Full `dir="rtl"` / `dir="ltr"` support
- Shared data-driven sections for consistency
- SEO metadata generated per locale
- Sticky mobile-first header with WhatsApp and phone CTAs

## 5. Backend Architecture

Backend uses **Node.js + Express + Prisma + PostgreSQL**.

### Modules

- `messages` for contact form submissions
- `quotes` for service quote requests
- `blog` for CMS CRUD
- `jobs` for job applications
- `auth` placeholder for admin login expansion

### API endpoints

- `POST /api/messages`
- `POST /api/quotes`
- `POST /api/job-applications`
- `GET /api/blog-posts`
- `POST /api/blog-posts`
- `PUT /api/blog-posts/:id`
- `DELETE /api/blog-posts/:id`

## 6. Database Schema

Implemented with Prisma models:

- `Admin`
- `Message`
- `QuoteRequest`
- `BlogPost`
- `JobApplication`

See `apps/api/prisma/schema.prisma`.

## 7. Deployment Suggestions

### Frontend

- Deploy on **Vercel**
- Add domain such as `elitshieldsecurity.sa`
- Enable image optimization and edge caching

### Backend

- Deploy on **Railway**, **Render**, or **Fly.io**
- Use managed PostgreSQL
- Store uploads on S3-compatible storage if CV upload is added later

### Production setup

- Use `api.eliteshieldsecurity.sa`
- Add reCAPTCHA / Turnstile on forms
- Add SMTP or transactional email for notifications
- Add Meta Pixel / Google Analytics only after client approval

## 8. Presenting This To The Client

### Presentation flow

1. Start with the **brand rationale**
2. Show Arabic homepage first on mobile
3. Highlight trust signals:
   - licensure
   - trained guards
   - rapid response
   - Saudi compliance messaging
4. Show how each audience converts:
   - corporate buyer requests quote
   - event organizer requests coverage
   - guard candidate applies
5. Explain bilingual readiness and SEO value
6. End with rollout phases:
   - launch website
   - activate CMS
   - connect CRM / WhatsApp / analytics

## 9. Notes

- Content is written to feel credible for a Saudi security audience.
- Trust elements are structured so client-specific licenses, certificates, and logos can be swapped in immediately.
- Forms are wired to backend endpoints and can be connected to real infrastructure in deployment.
