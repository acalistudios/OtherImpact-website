// Two-site split: this repo is the MARKETING site (Home, About, How it
// works, Pricing, Terms, Privacy), deployed to the root domain. The product
// (events, ideas, scoreboard, chat, account) lives in the sibling
// otherimpact repo, deployed to the app subdomain. Keep these in sync with
// that repo's src/lib/urls.ts.
export const MARKETING_URL = 'https://otherimpact.com';
export const APP_URL = 'https://app.otherimpact.com';
