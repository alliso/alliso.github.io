# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at localhost:4321
npm run build     # production build → dist/
npm run preview   # serve dist/ locally
```

There are no tests or linters configured.

## Architecture

Static portfolio site built with **Astro 5** (output: static) + **Tailwind CSS v4** via `@tailwindcss/vite` (not `@astrojs/tailwind`). Deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `master`.

### i18n

English at `/` (no prefix), Spanish at `/es/`. **Not** using Astro's `getStaticPaths` or content collections — each locale has its own page file:

- `src/pages/index.astro` → EN
- `src/pages/es/index.astro` → ES

Both pages call `getLang(Astro.url)` and `useTranslations(lang)` from `src/i18n/ui.ts`, then pass `lang` and `t` as props down to every component. All UI strings live in `src/i18n/en.ts` and `src/i18n/es.ts`; `UIStrings` is inferred from the English object so TypeScript enforces parity.

### Content

All portfolio content is typed TypeScript in `src/data/`:

- `experience.ts` — `Job[]` with bilingual `role` and `bullets` fields (`{ en: string[], es: string[] }`). Add new jobs here; order is display order.
- `skills.ts` — `Skill[]` with `category: "backend" | "devops" | "testing"`. `categoryColors` maps each category to a CSS class name (`badge-backend`, etc.).

### Styling

No Tailwind utility classes in components — all styles are hand-written in `src/styles/global.css` using CSS custom properties. Tailwind is only imported via `@import "tailwindcss"` at the top of that file (Tailwind v4 syntax). Design tokens (`--color-bg`, `--color-accent`, etc.) are defined in `:root`.

### CV link

External PDF at `https://github.com/alliso/resume/blob/main/pdf/cv.pdf` — referenced directly in `Hero.astro` and `Header.astro`. Update in both places if the URL changes.
