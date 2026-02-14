# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **someplus.work** — a company that develops browser extensions and e-commerce plugins across Chrome, Firefox, WordPress, and Adobe Commerce (Magento) platforms. Hosted at `https://someplus.work/`.

## Architecture

- **No build system or framework** — plain HTML/CSS/JS, served as static files
- **No package manager** — no npm, no dependencies to install
- **Two pages:**
  - `index.html` — main landing page showcasing all products across platforms
  - `chrome-extensions.html` — dedicated Chrome extensions showcase page (Turkish-only, no i18n)

## Development

Open `index.html` directly in a browser or use any static file server (e.g., `python3 -m http.server`). There are no build, lint, or test commands.

## Design System

- **Font:** Satoshi (variable + static weights) loaded from `fonts/WEB/css/satoshi.css`
- **Theme:** Light/dark mode via `data-theme` attribute on `<html>`, toggled with JS and persisted in `localStorage`
- **Primary color:** `--blue: #1B5AEB` with opacity variants (`--blue-50`, `--blue-10`, `--blue-20`)
- **CSS variables** for all colors/surfaces — defined per-theme in `[data-theme="light"]` / `[data-theme="dark"]` blocks
- **Animation easing:** `--ease: cubic-bezier(0.23, 1, 0.32, 1)` used consistently throughout
- All CSS is inlined in `<style>` tags within each HTML file (no external stylesheets besides the font)

## Internationalization (i18n)

`index.html` supports EN/TR toggling:
- Uses `data-i18n` attributes on elements, with a `translations` object in the inline `<script>`
- Language preference persisted in `localStorage`
- The language button text shows the *opposite* language (click "TR" to switch to Turkish)
- Platform badges and footer use `innerHTML` (they contain SVG icons); other elements use `innerText`
- Chrome Web Store links update their `hl` query param on language switch

`chrome-extensions.html` is Turkish-only and does not have i18n support.

## Extension Icons

Extension icon images are stored in `images/icons/` as PNG files. When adding a new Chrome extension, add its icon there and reference it in both HTML files.
