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

## Deploy (GitHub Pages + otherimpact.com)

Same pattern as the app repo:

1. Push this repo to `main`.
2. Repo **Settings → Pages** → Source: **GitHub Actions**.
3. Repo **Settings → Secrets and variables → Actions**: add
   `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` — same values as the
   otherimpact (app) repo's secrets, since both hit the same Supabase project.
4. DNS at your registrar (root domain — `public/CNAME` is already
   `otherimpact.com`):
   - Apex `@`: A records → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `www`: CNAME → `YOUR-GITHUB-USERNAME.github.io`
5. Repo **Settings → Pages** → Custom domain: `otherimpact.com`, then tick
   **Enforce HTTPS** once the certificate is issued.
6. Separately, on the **app** repo: same steps but its custom domain is
   `app.otherimpact.com`, with DNS being a single CNAME record:
   `app` → `YOUR-GITHUB-USERNAME.github.io`.

Both repos can go live independently and in either order.

## Keeping content in sync

`src/lib/urls.ts` in both repos hardcodes `MARKETING_URL`/`APP_URL` — update
both if the domains ever change. The dark theme (`src/index.css` custom
properties, spacing, type scale) is duplicated by design rather than shared
as a package — two small static sites don't warrant a monorepo/shared-package
setup, but keep them visually in sync by eye when tweaking one.
