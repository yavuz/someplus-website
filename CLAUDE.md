# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **someplus.work** — a company that develops browser extensions and e-commerce plugins across Chrome, Firefox, WordPress, and Adobe Commerce (Magento) platforms. Hosted at `https://someplus.work/`.

## Architecture

- **Framework:** vinext with the Next.js App Router, built for Cloudflare Workers
- **Package manager:** npm
- **Main routes:**
  - `/` and `/en` — Turkish and English product showcases
  - `/privacy` and `/en/privacy` — privacy approach
  - `/support` and `/en/support` — support guidance
- The original static pages are retained under `legacy/` for reference.

## Development

Run `npm run dev` for local development and `npm run build` for the production build.

## Design System

- **Font:** Satoshi (variable + static weights) loaded from `fonts/WEB/css/satoshi.css`
- **Theme:** Light/dark mode via `data-theme` attribute on `<html>`, toggled with JS and persisted in `localStorage`
- **Primary color:** `--blue: #1B5AEB` with opacity variants (`--blue-50`, `--blue-10`, `--blue-20`)
- **CSS variables** for all colors/surfaces — defined per-theme in `[data-theme="light"]` / `[data-theme="dark"]` blocks
- **Animation easing:** `--ease: cubic-bezier(0.23, 1, 0.32, 1)` used consistently throughout
- Shared layout styles live in `app/globals.css`

## Internationalization (i18n)

Turkish is served from `/`, while English is served from `/en`. Privacy and
support routes follow the same path convention. Keep both language versions in
sync when changing user-facing copy.

## Extension Icons

Extension metadata is centralized in `lib/products.ts`. Public icon assets live
in `public/images/icons/`.
