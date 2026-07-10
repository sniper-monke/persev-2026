# Perseverantia Rebuild — AGENTS.md

## Quick start

```bash
npm start          # → node persev-2026-website/index.js on :3000
npm run dev        # → node --watch index.js (auto-restart on change)
```

All commands run from repo root; root `package.json` proxies to `persev-2026-website/`. Port auto-increments if 3000 is busy.

No linter, typechecker, or test framework is configured. Validation is manual. Lighthouse audits via `bash persev-2026-website/run-lighthouse.sh`.

## Architecture

**Single Express server** (`persev-2026-website/index.js`) serving:
- Static files from `persev-2026-website/public/`
- API endpoints: `GET /api/health`, `/api/site`, `/api/events`, `/api/leaderboard`, `/api/blob-data`, `POST /api/register`
- Data is hardcoded in `persev-2026-website/data/siteData.js` — no database

**Two parallel frontend systems** in the same `public/` directory:
1. **React SPA** (TanStack Router): `index.html` + bundled JS in `public/assets/`. This is the *main* entry point.
2. **Legacy static HTML pages**: `landing.html`, `events.html`, `organizing-committee.html`, `leaderboard.html`, `links.html`, `locations.html` — plain HTML with optional 3rd-party animation libs (GSAP, anime.js, Three.js).

The `landing.html` acts as a splash screen; it transitions to the SPA `index.html` via the cloud-transition system.

## Key files & ownership

| Path | Role |
|------|------|
| `persev-2026-website/index.js` | Express server, all API routes |
| `persev-2026-website/data/siteData.js` | Hardcoded API data (events, leaderboard, site info) |
| `persev-2026-website/public/index.html` | React SPA entry (TanStack Router, bundled assets) |
| `persev-2026-website/public/landing.html` | Splash page → transitions to `index.html` |
| `persev-2026-website/public/static/cloud-transitions.js` | Primary page-transition system (CSS/JS cloud panels, 975 lines) |
| `persev-2026-website/public/static/gsap-transitions.js` | Alternative GSAP-based transitions (944 lines) |
| `persev-2026-website/public/static/anime-animations.js` | Shared anime.js animation library (621 lines) |
| `persev-2026-website/public/static/persev-navbar.js` | Shared nav bar component (injected into all pages) |
| `persev-2026-website/public/sw.js` | Service Worker (cache-first for static, network-first for dynamic) |
| `persev-2026-website/public/manifest.json` | PWA manifest |
| `persev-2026-website/public/config.json` | Full event catalog with descriptions |
| `patch-html.js` | iOS-specific HTML/JS patches for 3D bundle and pages |
| `wire_transitions.py` | Inserts transition script tags into HTML files |
| `verify` | Node.js verification script (checks iOS guards are in place) |

## Critical iOS patterns

iOS WebKit is unstable with WebGL and the cloud-transition system. The repo has extensive iOS guards — **always preserve them**:

```js
// iOS detection (catches iPadOS desktop-mode UA too)
const isMobileWebKit =
  /iP(hone|od|ad)/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
```

- Cloud transitions: no-op on iOS, falls back to `window.location.href = href`
- Three.js/WebGL: reduced segments, fewer spotlights, no env map, disabled damping on iOS
- Particle canvases: hidden/skipped on iOS
- All `landing.html` animations (particles, scripts) skip on iOS WebKit
- Bundle patches in `patch-html.js` apply iOS-specific code to `index-GnKc23iY.js`
- After modifying any page or JS, run `node verify` to check iOS guards

## Transition system

`cloud-transitions.js` is the active page-to-page transition system. `gsap-transitions.js` is an alternative. When adding transitions to a new page, use `wire_transitions.py` (or manually insert) the transition script tag. The `landing.html` → SPA flow uses `cloud-transitions.js`.

The `page-transitions.js` mentioned in `wire_transitions.py` no longer exists; `cloud-transitions.js` replaced it.

## Data sources

Three data files with different scopes:
1. **`data/siteData.js`** — served via API (`/api/events`, `/api/site`, `/api/leaderboard`). 4 minimal events.
2. **`public/config.json`** — full 21-event catalog with descriptions, used by the SPA.
3. **`public/static/site-data.js`** — legacy static data consumed by old HTML pages.

If you add/change event data, update all three.
