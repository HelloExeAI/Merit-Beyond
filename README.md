# Merit & Beyond — Corporate Digital Presence

A website for **Merit & Beyond** (`https://www.meritandbeyond.in`), built according to the master consulting blueprint and brand brochure.

Positioned as a strategic HR consulting and people advisory firm, the experience is interactive, sophisticated, and editorial.

---

## 🎨 Creative Direction & Brand System

- **Warm Ivory (`#F7EBDD`)**: Primary ambient background and textured surfaces.
- **Champagne Gold (`#D7B77E`)**: Accents, hairline borders, and subtle glows.
- **Copper Bronze (`#A96525`)**: Primary CTAs, active highlights, and indicators.
- **Deep Mahogany (`#552A19`)**: Editorial serif headlines, primary contrast, and footer surfaces.
- **Soft Black (`#171513`)**: Body typography and high-contrast navigation text.
- **Pure White (`#FFFFFF`)**: Clean content cards and elevated interaction containers.

### Typography
- **Headlines**: Editorial Serif (`Cormorant Garamond` / Georgia)
- **Body & Navigation**: Clean Modern Sans-Serif (`Plus Jakarta Sans` / system-ui)

### Brand Statements
- **Core Motto**: `PEOPLE | PROCESS | PERFORMANCE`
- **Central Message**: *“People enable possibilities. We help you build what’s next.”*

---

## 🏛️ Website Architecture & Routes

| Route | Purpose & Key Features |
|---|---|
| `/` | **Home**: Hero value proposition, firm introduction, 4-pillar philosophy, embedded interactive Service Discovery, 5-stage methodology, business outcomes, curated insights preview, and consultation CTA. |
| `/about` | **About**: Positioning as a people advisory partner, strategic vision & mission frameworks, 4 pillars of philosophy, detailed breakdown of all 5 methodology phases with deliverables, and advisory discretion governance. |
| `/services` | **Services Hub**: Mandatory guided interactive discovery selector at top, followed by complete 6-discipline index for direct accessibility and search engine indexing. |
| `/services/[slug]` | **6 Dedicated Service Detail Routes**: Complete business challenges, why it matters, 3 specific support clusters, 5-stage methodology for that service, expected outcomes, related disciplines, and consultation action passing the service slug to the form. |
| `/insights` | **Insights & Blogs**: Searchable & filterable thought leadership journal with category filtering, reading times, featured publications, tags, and author attributions. |
| `/insights/[slug]` | **Individual Insight Articles**: Editorial reading experience, executive takeaway callout boxes, structured sections, tags, and related articles. |
| `/contact` | **Contact & Advisory Consultation**: Validated consultation form (name, email, phone, company, role, preselected area of interest, org size, requirement brief, privacy consent), anti-bot honeypot, server-side validation API, and verified business contacts (`+91 6366056770`, `ish@meritandbeyond.in`). |
| `/privacy-policy` | **Privacy Policy**: Client confidentiality standards, data processing scope, and non-disclosure governance. |
| `/_not-found` | **Custom 404**: Branded recovery page directing users back to Home or Service Discovery. |
| `/sitemap.xml` | **Dynamic XML Sitemap**: Auto-indexing all static, service, and article routes. |
| `/robots.txt` | **Robots Configuration**: Search engine crawling instructions. |

---

## 🔍 The 6 Advisory Disciplines

1. **People Advisory & Organisation Setup** (`/services/people-advisory-organisation-setup`)
2. **Labour Law, Compliance & People Audits** (`/services/labour-law-compliance-people-audits`)
3. **People Systems, Payroll & Compensation** (`/services/people-systems-payroll-compensation`)
4. **Employee Relations & Workplace Effectiveness** (`/services/employee-relations-workplace-effectiveness`)
5. **Talent Acquisition & Talent Management** (`/services/talent-acquisition-talent-management`)
6. **Corporate Training & Capability Development** (`/services/corporate-training-capability-development`)

---

## ⚡ The Five-Stage Consulting Methodology

1. **Stage 01 — Understand**: Strategic Immersion & Context Mapping
2. **Stage 02 — Assess**: Evidence-Based Diagnostic Audits
3. **Stage 03 — Design**: Pragmatic Architecture & Frameworks
4. **Stage 04 — Implement**: Facilitated Execution & Change Enablement
5. **Stage 05 — Strengthen**: Continuous Calibration & Governance

---

## 🛠️ Local Development & Production Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Start production server
npm run start
```

---

## 🚀 Production Deployment to `meritandbeyond.in`

1. **Vercel / AWS / VPS**:
   - Push repository to GitHub or deploy directly via Vercel CLI (`vercel`).
   - The build command is `npm run build` and output directory is `.next`.
2. **DNS & Domain Configuration**:
   - Set `A` / `CNAME` records at your domain registrar for `meritandbeyond.in` pointing to your production host.
   - SSL/TLS is handled automatically via Let's Encrypt / Vercel SSL.
3. **Email / CRM Delivery**:
   - In `src/app/api/contact/route.ts`, connect your preferred email delivery service (e.g. Resend, SendGrid, Amazon SES) or webhook CRM (HubSpot, Zoho) to receive inquiries from `ish@meritandbeyond.in`.
