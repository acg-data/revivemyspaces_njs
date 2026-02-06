# ReviveMySpaces - Next.js Website

## Overview
A professional home organization services website built with Next.js 16, React 19, and Tailwind CSS 4. The site showcases services, portfolio, pricing, blog, and about pages for a home organization business serving Newton and surrounding areas.

## Project Architecture
- **Framework**: Next.js 16.1.6 with Turbopack
- **UI**: React 19, Tailwind CSS 4
- **Icons**: Lucide React
- **Email**: Resend (for contact form)
- **Build**: Static export (`output: 'export'`) to `dist/` directory
- **Language**: TypeScript

## Project Structure
- `app/` - Next.js App Router pages (home, about, blog)
- `components/` - React components (Hero, Navigation, Features, Pricing, FAQ, etc.)
- `dist/` - Static build output
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS config for Tailwind

## Development
- Dev server: `npm run dev` (runs on port 5000, bound to 0.0.0.0)
- Build: `npm run build` (static export to `dist/`)

## Deployment
- Static deployment serving the `dist/` directory
- Build step: `npm run build`

## Recent Changes
- 2026-02-06: Initial Replit setup - configured dev server on port 5000, allowed dev origins for Replit proxy, set up static deployment
