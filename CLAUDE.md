# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for **someplus.work** — a software studio offering enterprise software, corporate websites, e-commerce, mobile apps, AI/automation, and maintenance services to the Turkish market. The studio's own browser extensions and plugins are shown as references. Hosted at `https://someplus.work/`.

## Architecture

- **Framework:** vinext with the Next.js App Router, built for Cloudflare Workers
- **Package manager:** npm
- **Main routes:**
  - `/` and `/en` — Turkish and English home pages (services, process, products, FAQ, quote form)
  - `/hizmetler/[slug]` and `/en/services/[slug]` — service detail pages, data in `lib/services.ts`
  - `/kvkk` and `/en/data-protection` — personal data protection notice
  - `/api/teklif` — quote form handler; sends via Resend when `RESEND_API_KEY` is set (`CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` optional)
  - `/privacy` and `/en/privacy` — privacy approach
  - `/support` and `/en/support` — support guidance
- The original static pages are retained under `legacy/` for reference.

## Development

Run `npm run dev` for local development and `npm run build` for the production build.

## Design System

- **Font:** Satoshi (variable + static weights) loaded from `fonts/WEB/css/satoshi.css`
- **Theme:** Light only (no theme toggle)
- **Primary color:** `--blue: #1B5AEB` with opacity variants (`--blue-50`, `--blue-10`, `--blue-20`)
- **CSS variables** for all colors/surfaces — defined in `:root`
- **Animation easing:** `--ease: cubic-bezier(0.23, 1, 0.32, 1)` used consistently throughout
- Shared layout styles live in `app/globals.css`

## Internationalization (i18n)

Turkish is served from `/`, while English is served from `/en`. Privacy and
support routes follow the same path convention. Keep both language versions in
sync when changing user-facing copy.

## Extension Icons

Company contact details live in `lib/company.ts`; empty fields are hidden on the site.
Extension metadata is centralized in `lib/products.ts`. Public icon assets live
in `public/images/icons/`.
