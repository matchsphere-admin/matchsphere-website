# MatchSphere Website

Phase 1 company website for MatchSphere and Matcha, built with Next.js.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Routes (MVP)

- `/`
- `/matcha`
- `/privacy-policy`
- `/terms-of-use`
- `/delete-account`
- `/contact`
- `/about` (placeholder)
- `/support` (placeholder)

Current MVP status:
- Done: `/contact`, `/privacy-policy`, `/terms-of-use`, `/delete-account`
- In progress: `/`, `/matcha`
- Placeholder: `/about`, `/support`

## Environment

Use `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://matchsphere.ai
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=support@matchsphere.ai
CONTACT_FROM_EMAIL=noreply@matchsphere.ai
```

### Contact Form Setup (Resend)

The `/contact` placeholder page posts to `/api/contact`.
This website is hosted on Vercel, and contact emails are sent through Resend.

Before using it in production:

1. Verify `matchsphere.ai` in Resend.
2. Add required DNS records (SPF/DKIM) in your DNS provider.
3. Configure the same environment variables in Vercel project settings.
4. Redeploy.

## Assets

Logo files are reused from frontend and copied into:

- `public/icon.png`
- `public/logo.png`

## Deployment

This site is hosted on Vercel (Hobby/Pro depending on account constraints).

Custom domain setup:

- Primary: `matchsphere.ai`
- Redirect: `www.matchsphere.ai` -> `matchsphere.ai`
- Keep API records unchanged:
  - `api.matchsphere.ai`
  - `dev-api.matchsphere.ai`
