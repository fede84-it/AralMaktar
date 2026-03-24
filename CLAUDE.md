# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Aral Maktar** is a static HTML website (in Italian) for a fantasy city/world used in "The Gate" MUD (Multi-User Dungeon). It documents institutions, characters, history, and stories for the community. No build system, framework, or backend — all pages are self-contained HTML files with inline CSS and vanilla JavaScript.

## Development

Open any `.html` file directly in a browser, or serve with any static HTTP server:
```bash
python -m http.server 8000
# or
npx serve .
```

No build, lint, or test commands exist.

## Architecture

### Page Structure
Every page follows the same pattern: sticky nav → hero section (full-width background image + title) → parchment-styled content blocks → footer (Discord/game/forum links).

### Hero Section Standard
All pages (except `index.html`, `fogne_di_aral.html`, `ombre_del_crepuscolo.html`) share these hero settings:
```css
header {
  min-height: 60vh;
  justify-content: flex-end;
  padding: 4rem 2rem 5vh;
  background:
    linear-gradient(to bottom, rgba(10,5,0,0.55) 0%, rgba(26,16,8,0.72) 60%, rgba(26,16,8,1) 100%),
    url('Immagini/<page-image>') center center / cover no-repeat;
}
```
Hero content structure: `hero-ornament (— ✦ —)` → page title → subtitle → divider.

### Directory Layout
- Root `*.html` — main hub (`index.html`), characters (`personalita.html`), history (`storia_di_aral.html`), chronicles index (`cronache.html`), tools (`segheria.html`), test pages
- `Istituzioni/` — 9 public institution pages + 2 secret ones (`fogne_di_aral.html`, `ombre_del_crepuscolo.html`)
- `Racconti/` — story/chronicle pages (including Ektalis parts 1-2)
- `Lore/` — reference documents (PDF, text) for world-building content
- `Immagini/` — all images (character portraits, backgrounds, faction icons, custom cursors)
- `Font/` — `GoudyInitialen.ttf` used for drop-cap initial letters

### Shared CSS Design System
All pages use the same CSS custom properties (defined inline per page):
```css
--parchment: #f2e8c9
--parchment-dark: #e0ccA0
--ink: #2a1a0a
--gold: #c8972a
--gold-light: #e8b84b
--crimson: #7a1a1a
```
Typography: Google Fonts CDN — `Cinzel Decorative` (titles), `Cinzel` (labels), `IM Fell English` (body).

### JavaScript Patterns
All JS is inline `<script>` at the bottom of each page. Common patterns:

1. **Scroll reveals** — Intersection Observer adds `.visible` class to elements with `data-reveal`, staggered 80ms per element.

2. **Ember particles** — Canvas animation in the hero header; radial gradient gold/orange embers with wave motion and flicker.

3. **Secret easter eggs** (in `index.html`) — Keyboard input tracking:
   - Type `fogne` → navigates to the sewers page
   - Type `ombre` → triggers one of 3 dramatic transition effects (controlled by `const EFFETTO = 3`), then navigates to the shadows page

## Key Conventions

- All content is in **Italian**.
- CSS and JS are **always inline** in `<style>` and `<script>` tags — there are no external `.css` or `.js` files.
- Secret institution pages (`fogne_di_aral.html`, `ombre_del_crepuscolo.html`) use custom cursor images from `Immagini/` and have distinct dark color themes.
- When adding new institution pages, follow the naming pattern `Istituzioni/<nome>.html` and add the corresponding icon image to `Immagini/`.
- New pages should be linked from `cronache.html` (for stories) or `index.html`/nav (for institutions/characters).
- Favicon: `Immagini/Favicon_aral.png` — must be referenced in `<head>` of every page.
- Hero images use `.webp` or `.jpg` format, stored in `Immagini/`.
- The `hero-bg-text` pattern has been removed from all pages — do not reintroduce it.
- The home page (`index.html`) has unique features: ember particle canvas, secret easter eggs, and a different hero layout. Do not standardize it with other pages.
