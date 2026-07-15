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

## Deploy (Cloudflare Pages + otherimpact.com)

Deployed on **Cloudflare Pages** (same host as the app repo) — free for
commercial use, one deploy model for both sites. SPA routing via
`public/_redirects`; Node pinned via `.nvmrc`.

1. (Once, shared with the app repo) add `otherimpact.com` to Cloudflare and
   point GoDaddy nameservers at Cloudflare — see the app repo's README step 1.
2. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**, select
   **OtherImpact-website**. Build: framework Vite, `npm run build`, output `dist`.
3. **Settings → Environment variables**: add `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_ANON_KEY` — same values as the app repo (same Supabase
   project). Only the Pricing checkout button uses them; the rest is static.
4. **Custom domains** → add `otherimpact.com` **and** `www.otherimpact.com`.
   DNS records + SSL are created automatically since the domain is on Cloudflare.

The **app** repo deploys the same way with domain `app.otherimpact.com`. Both
can go live independently, in either order.

## Keeping content in sync

`src/lib/urls.ts` in both repos hardcodes `MARKETING_URL`/`APP_URL` — update
both if the domains ever change. The dark theme (`src/index.css` custom
properties, spacing, type scale) is duplicated by design rather than shared
as a package — two small static sites don't warrant a monorepo/shared-package
setup, but keep them visually in sync by eye when tweaking one.
