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

This is a **Next.js 16** app using the **App Router** (`src/app/`). It is a single-page marketing site for Quinta do Espinhal, a rural property in Ribatejo, Portugal.

Entry points:
- `src/app/layout.tsx` — root layout with Geist (body) and Playfair Display (headings) fonts
- `src/app/page.tsx` — home page, composes all section components in order
- `src/app/globals.css` — global styles and Tailwind theme tokens

Page sections (all in `src/components/`): `Hero` → `About` → `Spaces` → `Features` → `Contact` → `Footer`.

All section components are Client Components (`'use client'`) due to `framer-motion` animations.

Path alias `@/*` maps to `./src/*`.

## Styling

**Tailwind CSS v4** — configured via `postcss.config.mjs` using `@tailwindcss/postcss`. There is no `tailwind.config.*` file; theme tokens are defined in `globals.css` inside `@theme inline {}`. Do not create a `tailwind.config.*` file.

Custom theme tokens (defined in `globals.css`):
- Colors: `background`, `foreground`, `primary`, `primary-foreground`, `card`, `accent`, `muted-foreground`, `border`
- Fonts: `font-display` (Playfair Display, serif) and `font-body` (Geist Sans)

## Images

Static images are served from the `public/` folder and referenced as absolute paths (e.g. `/hero-quinta.png`). Do not import images from `src/assets/` — use public paths directly.

## Key differences in this version

- **Next.js 16** may have breaking changes vs. earlier versions. Before writing code that touches routing, data fetching, caching, or rendering, read the relevant guide in `node_modules/next/dist/docs/`.
- **ESLint 9** flat config (`eslint.config.mjs`) — no `.eslintrc` files. Extends `next/core-web-vitals`, `next/typescript`, and `prettier`.
