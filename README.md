# Tim Björnhov — Personal Portfolio

A bilingual, single-page personal site showcasing my work, skills, and interests — with an AI chatbot that can answer questions about me directly on the page.

**Live:** [timbjornhov.com](https://timbjornhov.com)

## Features

- Bilingual interface (English / Swedish) with persistent language preference
- Dark / light theme toggle
- Responsive layouts — distinct mobile and desktop experiences
- AI chatbot powered by Cloudflare Workers AI (Llama 3.3 70B) with streamed responses
- Contact form via Web3Forms
- Hash-based client-side routing
- Embedded music player that persists across navigation
- Interest modals with rich content (training, gaming, music, food, etc.)

## Tech stack

- TypeScript, Vite 6
- Vanilla DOM / template literals (no UI framework)
- CSS custom properties for theming
- Cloudflare Pages + Pages Functions
- Cloudflare Workers AI (`@cf/meta/llama-3.3-70b-instruct-fp8-fast`)
- Web3Forms (contact form delivery)

## Architecture & design decisions

A few deliberate choices worth noting:

- **Vanilla TypeScript instead of React/Vue/Svelte.** The site has manageable UI complexity and doesn't need virtual-DOM reconciliation. Staying vanilla keeps the production bundle at ~50 KB (16 KB gzipped) and the stack transparent for anyone reviewing the code.
- **Cloudflare Pages + Workers AI.** A single platform for static hosting, serverless functions, and LLM inference, with a generous free tier. The chat backend runs on Cloudflare's GPU nodes at the edge — no separate ML infrastructure.
- **Module organization.** Pure, serializable data lives in `src/data/`. Side-effectful logic lives in `src/app/events/` and `src/services/`. Components and sections are rendered as template-literal factories, not classes. This separation keeps each layer easy to reason about.
- **i18n approach.** A single `languageService` and a `getText(key)` function backed by a translation map in `src/data/translations.data.ts`. Minimal, type-safe, no runtime library.
- **CORS allowlist on the chat endpoint.** `functions/api/chat.ts` only echoes `Access-Control-Allow-Origin` back to whitelisted origins (production domain, pages.dev fallback, localhost), so other sites can't drain the AI quota by calling the endpoint.

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

For regular frontend work, `npm run dev` is enough. The AI chatbot only responds when running via `npm run dev:cf`, because it depends on the Workers AI binding exposed by Wrangler.

## Deployment

- Hosted on Cloudflare Pages at [timbjornhov.com](https://timbjornhov.com)
- Automatic deploy on every push to `main`
- AI binding (`AI` → Workers AI) configured in the Pages dashboard
- Custom domain, DNS, and SSL managed via Cloudflare Registrar

## License

Copyright © 2026 Tim Björnhov. All rights reserved.
