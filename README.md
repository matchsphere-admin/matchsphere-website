# MatchSphere Website

Company website for MatchSphere — an AI-driven lead-generation platform for the Dubai/UAE off-plan real estate market. Built with Next.js.

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

## Routes

- `/` — Home
- `/about` — About
- `/contact` — Contact / request a demo (Resend-backed form)

The previous Matcha site (product page, safety, privacy policy, terms of use, delete account, support, waitlist) was archived to the `matchsphere-website-v1` repo and removed here during the proptech pivot.

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
