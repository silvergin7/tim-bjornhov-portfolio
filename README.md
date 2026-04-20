# Tim Björnhov — Personal Portfolio

A personal site in English and Swedish, with an AI chatbot that can answer questions about me. Built as a no-framework TypeScript app, hosted on Cloudflare.

**Live:** [timbjornhov.com](https://timbjornhov.com)

## Features

- English and Swedish, with the choice persisted in localStorage
- Dark and light theme
- Separate layouts for mobile and desktop
- AI chatbot backed by Cloudflare Workers AI (Llama 3.3 70B), streamed
- Contact form via Web3Forms
- Hash-based client-side routing
- Music player that keeps playing as you move between sections
- Interest modals (training, gaming, music, food, and a few more)

## Tech stack

- TypeScript, Vite 6
- Plain DOM + template literals, no React/Vue/etc.
- CSS custom properties for theming
- Cloudflare Pages + Pages Functions
- Cloudflare Workers AI (`@cf/meta/llama-3.3-70b-instruct-fp8-fast`)
- Web3Forms for the contact form

## Architecture & design decisions

- **No framework.** I considered React but the site doesn't have enough interactive state to justify it. Sticking with plain TypeScript keeps the bundle around 50 KB (16 KB gzipped) and there's no build magic to explain.
- **Everything on Cloudflare.** Pages for the static build, Pages Functions for the chat backend, and Workers AI for the LLM. One dashboard, one free tier.
- **Data vs. behavior.** Data (profile, skills, projects, translations) sits in `src/data/`. Anything that touches the DOM or has side effects lives in `src/app/events/` or `src/services/`. Components are functions that return HTML strings, not classes.
- **i18n.** A `languageService` singleton plus a big translation map in `src/data/translations.data.ts`. No i18n library — the site is small enough that a typed map does the job.
- **Locked-down chat endpoint.** The chat API only accepts CORS requests from a short allowlist (production, the pages.dev fallback, localhost). Otherwise anyone could point a fetch at it and burn through the free AI quota.

## Project structure

```
├─ functions/api/          # Cloudflare Pages Functions (AI chat backend)
├─ public/                 # Static assets (images, music)
├─ src/
│   ├─ app/events/         # DOM event handlers (side effects)
│   ├─ components/         # Reusable UI components (header, modals, player)
│   ├─ data/               # Pure data: profile, skills, projects, translations
│   ├─ models/             # TypeScript type definitions
│   ├─ sections/           # Page sections (home, work, skills, contact)
│   ├─ services/           # Singleton services (language, theme)
│   ├─ styles/             # CSS (variables, base, components, sections, modals)
│   └─ main.ts             # Entry point
├─ wrangler.toml           # Cloudflare local-dev config
└─ vite.config.ts          # Vite build config
```

## Local development

**Prerequisites:** Node.js 20+ and npm.

```bash
npm install
npm run dev            # Vite dev server on http://localhost:3000
npm run build          # Production build to ./dist
npm run dev:cf         # Preview with Cloudflare Pages Functions (requires a prior build)
npm run preview        # Vite preview of built output
```

`npm run dev` is what you want for most things. The chat only works under `npm run dev:cf` since it needs the Workers AI binding from Wrangler — and `dev:cf` serves the last built `dist/`, so run `npm run build` first.

## Deployment

- Pushes to `main` auto-deploy to [timbjornhov.com](https://timbjornhov.com)
- The `AI` binding is configured in the Pages dashboard (not via `wrangler.toml` — that's dev-only for Pages)
- Domain, DNS, and SSL all through Cloudflare Registrar

## License

Copyright © 2026 Tim Björnhov. All rights reserved.
