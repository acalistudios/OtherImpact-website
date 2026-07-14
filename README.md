# OtherImpact — Marketing Site

The root-domain marketing site for OtherImpact (otherimpact.com): Home,
About, How it works, Pricing, Terms, Privacy. The product itself — events,
effect-chain ideas, the scoreboard, analyst chat, account — lives in the
sibling **otherimpact** (app) repo, deployed to `app.otherimpact.com`.

Static React/Vite site. The only page that talks to a backend is Pricing's
"Go Pro" button, which calls the same Supabase project as the app repo.

## Setup

```sh
cp .env.example .env.local   # only needed for the Pricing checkout button
npm install
npm run dev
```

Without `.env.local`, everything works except the Go Pro button, which shows
"Launching soon" — fine for an early public preview.

## Deploy (Vercel + otherimpact.com)

Deployed on Vercel (same host as the app repo), so both projects share one
deploy model and DNS setup. Vercel auto-detects Vite and handles SPA routing
via `vercel.json`.

1. At [vercel.com](https://vercel.com), sign in with GitHub and **Add New →
   Project**, import `acalistudios/OtherImpact-website`. Framework preset:
   Vite (auto-detected).
2. **Settings → Environment Variables**: add `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_ANON_KEY` — same values as the otherimpact (app) repo, since
   both hit the same Supabase project. (Only the Pricing checkout button needs
   them; the rest of the site is static.)
3. **Settings → Domains**: add both `otherimpact.com` **and** `www.otherimpact.com`
   (Vercel will offer to redirect www → apex). Vercel shows the exact DNS
   records to add at your registrar — typically an `A` record for the apex
   (`76.76.21.21`) and a `CNAME` for `www` (`cname.vercel-dns.com`). SSL is
   automatic.

The **app** repo deploys the same way, with domain `app.otherimpact.com`
(a single `CNAME` for `app`). Both can go live independently, in either order.

## Keeping content in sync

`src/lib/urls.ts` in both repos hardcodes `MARKETING_URL`/`APP_URL` — update
both if the domains ever change. The dark theme (`src/index.css` custom
properties, spacing, type scale) is duplicated by design rather than shared
as a package — two small static sites don't warrant a monorepo/shared-package
setup, but keep them visually in sync by eye when tweaking one.
