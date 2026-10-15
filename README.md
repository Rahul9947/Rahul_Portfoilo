# Rahul Sharma — Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

Requirements: Node.js 22 or newer and npm.

```bash
npm install --legacy-peer-deps
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`. GitHub Actions publishes that folder to GitHub Pages. The Vite base path is configured for this repository: `/Rahul_Portfoilo/`.

## Resume

The resume PDF can be regenerated from the portfolio data with `npm run generate:resume`. Please keep personal details and project descriptions in `src/data/portfolioData.ts` accurate and update project repository URLs only after those repositories are public.
