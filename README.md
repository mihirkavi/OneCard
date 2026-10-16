# OneCard

OneCard is a credit-card rewards optimizer that recommends which card to use for a purchase based on merchant, spending category, and reward rate.

[View the website prototype](https://mihirkavi.github.io/OneCard/)

## Features

- browse cards, issuers, categories, and reward structures
- request a best-card recommendation for a planned purchase
- compare reward options across a card portfolio
- explore a dashboard-oriented product prototype
- `GET /api/recommend?merchant=...&category=...&amount=...` returns the best card for a merchant or category (server mode only; not included in the GitHub Pages export)

The current application uses static demonstration data in `lib/static-data.ts`; reward terms and fees can change and should be verified with the card issuer before making financial decisions.

## Tech stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS
- Drizzle ORM schema for PostgreSQL (optional; used by the seed script, not by the web pages)
- GitHub Actions deployment to GitHub Pages as a static export

## Project structure

```text
app/                 Next.js pages: home, cards, categories, recommend, dashboard
app/api/recommend/   Recommendation API route
lib/static-data.ts   Demo cards, categories, merchants, and recommendation logic
lib/db/              Drizzle PostgreSQL schema and client
scripts/             Database seed script and GitHub Pages build script
apps/extension/      Prototype browser extension (Manifest V3)
apps/mobile/         Prototype Expo / React Native app
public/              Images served by the site
```

The root also holds product specifications, financial models, pitch materials, and design assets from the project's planning phase.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:5000`.

## Build

```bash
npm run build          # standard Next.js build
npm run build:github   # static export to out/ with the /OneCard base path
```

Pushes to `main` deploy the static export to GitHub Pages through `.github/workflows/deploy.yml`.

## Optional database

The Drizzle scripts read `DATABASE_URL`:

```bash
npm run db:push   # create tables from lib/db/schema.ts
npm run db:seed   # load sample cards, categories, merchants, and reward rules
```

## Status

Prototype. The browser extension and mobile app under `apps/` are early sketches and are not built by the root scripts.

## License

No license file is included in this repository. This README grants no additional reuse or redistribution permissions; contact the repository owner about permitted use.
