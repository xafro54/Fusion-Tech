# Fusion Tech Snapshot - 2026-08-25

Repository: https://github.com/xafro54/Fusion-Tech
Live site: https://xafro54.github.io/Fusion-Tech/

## Completed today

- Cloned the Fusion Tech repository locally.
- Installed Hugo Extended 0.165.0 and Go 1.26.7.
- Added the Supabase JavaScript client and browser-compatible ESM loading.
- Configured Supabase with the project URL and publishable anon key through environment variables and GitHub Actions repository secrets.
- Added Supabase Auth signup handling.
- Added signup fields for first name, last name, email, country code, phone number, company name, and job role.
- Added plan selection metadata for Starter, Team, and Business plans.
- Removed company size from the signup form.
- Added the `signup_submissions` table migration and insert-only RLS policy.
- Added the `contact_messages` table migration and insert-only RLS policy.
- Added a contact form at `/contact/` with Supabase insert handling.
- Connected the landing-page demo CTA to the contact form.
- Fixed Hugo raw HTML and external JavaScript form handling so forms do not submit values into the URL.
- Updated GitHub Pages actions for Node.js 24 compatibility.
- Built the site successfully with Hugo and Pagefind.
- Published the changes to GitHub and enabled GitHub Pages deployment workflow configuration.

## Commits

- `0abe188` Update Pages actions for Node 24
- `5ec27d8` Configure Supabase deployment secrets
- `a3d2973` Connect signup buttons to Supabase Auth
- `52b2ccd` Render Supabase signup form correctly
- `fa91d0b` Split signup phone fields by country
- `3ea670d` Remove company size from signup
- `fb40a1e` Split signup name fields
- `588b518` Add contact messages RLS policy
- `e2e1d98` Add Supabase contact form
- `82760c5` Fix Supabase client loading
- `aa81068` Fix contact page route
- `ddfe1a4` Republish external form handlers
- `856c5e8` Save signup details to Supabase

## Supabase destinations

- Signup accounts: `Authentication -> Users`
- Signup profile records: `signup_submissions`
- Contact messages: `contact_messages`

## Manual Supabase setup

Run these migrations in the Supabase SQL Editor:

- `supabase/migrations/20260825000000_create_contact_messages.sql`
- `supabase/migrations/20260825000001_create_signup_submissions.sql`

The Supabase URL and publishable key were not saved in this snapshot. Passwords are never stored in the signup table.

## Validation

- Hugo production build passed.
- Pagefind build passed.
- Signup and contact assets were verified in the generated output.
- Repository state at snapshot time: clean and synchronized with `origin/main`.
