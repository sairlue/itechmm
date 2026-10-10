<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — iTech MM Solutions (Intas MN Technology) Website

## Project Goal
Build a professional company information website for **iTech MM Solutions** (Intas MN Technology) with four public navigation items:
- Home
- About Us
- Services
- Contact Us

Include a secure admin dashboard so authorized administrators can manage company information, services, and contact inquiries.

## Technology Stack
- **Frontend:** Next.js using the App Router
- **Backend:** Next.js Route Handlers (`src/app/api/**/route.js`)
- **Language:** JavaScript
- **Styling:** Tailwind CSS (Navy `#0A2540` / `#001F3F` and Sky-Blue `#0284C7` / `#38BDF8` theme)
- **Database:** MySQL (configured for later database connection)
- **Deployment target:** Ubuntu VPS with Nginx and HTTPS/SSL

## Public Website

### 1. Home
- Hero section introducing iTech MM Solutions with branding and tagline.
- Concise company introduction, services overview, and clear calls to action.
- Link to Services and Contact Us.
- Responsive layout for mobile, tablet, and desktop.

### 2. About Us
- Company profile, mission, vision, core values, and team/approach highlights.
- Marked placeholders for details to be customized by admin.

### 3. Services
- Display services as clear, accessible cards with category filters and details.
- Categories: Web Development, Mobile Apps, Custom Software, Cloud & DevOps, AI & Automation, IT Consulting.

### 4. Contact Us
- Contact form with name, email, subject, and message.
- Validation on client and server.
- Clear success/error states, contact details, working hours, and location placeholder.

## Admin Dashboard (Phase 2 with MySQL)
- Dashboard overview, Company info manager, Services CRUD, Contact inquiries manager.
