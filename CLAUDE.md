# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Uses **Bun** as the package manager (bun.lock present — do not use npm/yarn/pnpm).

```bash
bun dev          # start dev server
bun run build    # production build
bun run start    # run production server
bun run lint     # run ESLint
```

## Architecture

This is a **Next.js 16** app using the **App Router** (`src/app/`). Entry points:

- `src/app/layout.tsx` — root layout with Geist fonts and global CSS
- `src/app/page.tsx` — home page (currently the default scaffold)
- `src/app/globals.css` — global styles

Path alias `@/*` maps to `./src/*`.

## Styling

**Tailwind CSS v4** — configured via `postcss.config.mjs` using `@tailwindcss/postcss`. There is no `tailwind.config.js/ts` file; Tailwind v4 uses CSS-first configuration. Do not create a `tailwind.config.*` file.

## Key differences in this version

- **Next.js 16** may have breaking changes vs. earlier versions. Before writing code that touches routing, data fetching, caching, or rendering, read the relevant guide in `node_modules/next/dist/docs/`.
- **ESLint 9** flat config (`eslint.config.mjs`) — no `.eslintrc` files.
