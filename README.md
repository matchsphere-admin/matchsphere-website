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

## Routes (Phase 1)

- `/`
- `/matcha`
- `/privacy-policy`
- `/terms-of-use`
- `/delete-account`
- `/about` (placeholder)
- `/contact` (placeholder)
- `/support` (placeholder)

## Environment

Use `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://matchsphere.ai
```

## Assets

Logo files are reused from frontend and copied into:

- `public/icon.png`
- `public/logo.png`

## Deployment

Primary deployment target is Vercel (Hobby/Pro depending on account constraints).

Custom domain setup:

- Primary: `matchsphere.ai`
- Redirect: `www.matchsphere.ai` -> `matchsphere.ai`
- Keep API records unchanged:
  - `api.matchsphere.ai`
  - `dev-api.matchsphere.ai`
