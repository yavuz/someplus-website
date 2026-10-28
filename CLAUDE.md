# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for **someplus.work** — a software studio offering enterprise software, corporate websites, e-commerce, mobile apps, AI/automation, and maintenance services to the Turkish market. The studio's own browser extensions and plugins are shown as references. Hosted at `https://someplus.work/`.

## Architecture

- **Framework:** Next.js App Router with `output: "export"` — the build is plain static HTML in `out/`, served by a PHP host (no Node on the server)
- **Package manager:** npm
- **Main routes:**
  - `/` and `/en` — Turkish and English home pages (services, process, products, FAQ, quote form)
  - `/hizmetler/[slug]` and `/en/services/[slug]` — service detail pages, data in `lib/services.ts`
  - `/kvkk` and `/en/data-protection` — personal data protection notice
  - `/api/teklif.php` — quote form handler (`public/api/teklif.php`); sends via Resend. Reads `RESEND_API_KEY`, optional `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` from env or `api/config.php` on the server (see `config.example.php`)
  - `/privacy` and `/en/privacy` — privacy approach
  - `/support` and `/en/support` — support guidance
- The original static pages are retained under `legacy/` for reference.
- Extension/app pages still linked from the stores (`emeka/`, `openwithai/`, `smart_tab_suspender/`, `privacy.html`, `app-ads.txt`) live in `public/` so they ship in `out/`.
- No server-only features: no route handlers, `headers()`, or other dynamic APIs; metadata routes need `export const dynamic = "force-static"`.

## Development

Run `npm run dev` for local development. `npm run build` writes the static site to `out/`; `npm run serve` serves it with PHP's built-in server to test the form handler.

Deploy: upload the contents of `out/` to the web root, then purge the Cloudflare cache.

## Design System

- **Font:** Satoshi (variable + static weights) loaded from `public/fonts/WEB/css/satoshi.css` via a `<link>` in `app/layout.tsx`
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
