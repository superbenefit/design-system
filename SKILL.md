---
name: SuperBenefit Design System
description: >
  Reusable warm, visionary design system for community-forward web experiences.
  Playfair Display + Inter typography, cream/charcoal/orange palette,
  glass cards, scroll-driven animations, and rainbow accent details.
  Extracted from the SuperBenefit website (Astro 5, plain CSS).
user-invocable: true
---

# SuperBenefit Design System

## What's inside

> Source: `context/github/superbenefit-sb-website.md` and 40 snapshot files under `context/github/superbenefit-sb-website/files/`

This skill provides a complete, reusable design system package for agents building SuperBenefit-related web experiences:

| Artifact | Purpose |
|----------|---------|
| `DESIGN.md` | Canonical rules: color, type, spacing, layout, components, motion, voice, anti-patterns |
| `colors_and_type.css` | Concrete CSS custom properties + `@font-face` + base styles |
| `README.md` | Package guide with product context, preview manifest, reuse workflow |
| `assets/` | Brand logos, icons, palette image, showcase image, favicon (sb-icon.jpg) |
| `build/` | Runtime/build assets (icon, logo, favicon) preserved from source |
| `preview/` | 9 reviewable HTML cards: colors, themes, typography, spacing, radius, buttons, cards, brand assets |
| `source_examples/` | Original source component snapshots (Astro): BlogCard, StorySection, Header, Hero, CallToAction, global.css, animations.css |
| `ui_kits/app/` | Browser-runnable tabbed component browser with shadcn/ui patterns, lucide icons, and SuperBenefit tokens |

## Source context


> Source: Git clone of `https://github.com/superbenefit/sb-website`

- **Product:** SuperBenefit — a community of practice using emerging technologies for systems transformation (governance, DAOs, regenerative systems)
- **Repository:** `https://github.com/superbenefit/sb-website`
- **Stack:** Astro 5, Cloudflare Workers, TypeScript, plain CSS (no Tailwind)
- **Fonts:** Playfair Display (serif display), Inter (sans body) — declared in `src/layouts/BaseLayout.astro` via Astro's experimental `<Font>` component
- **Evidence:** Git-clone intake of `superbenefit/sb-website` with 40 snapshot files under `context/github/superbenefit-sb-website/files/`

### Key source files by concern

| Concern | Source File | What it contains |
|---------|-------------|------------------|
| Design tokens | `src/styles/global.css` | All CSS custom properties: colors, typography scale, spacing, shadows, transitions |
| Animations | `src/styles/animations.css` | Scroll-driven keyframes, parallax, header solidify, decorative loops |
| Header | `src/components/Header.astro` | Fixed glass nav, logo, mobile toggle, rainbow border |
| Hero | `src/components/Hero.astro` | Starfield, centered icon, gradient tagline |
| Story cards | `src/components/StorySection.astro` | Elevated dark cards with theme variants, parallax, grain |
| Blog cards | `src/components/BlogCard.astro` | Light cream cards with hover lift, left-border accent |
| CTA | `src/components/CallToAction.astro` | Orange section with radial glows, pill buttons |
| Footer | `src/components/Footer.astro` | Dark footer with starfield, social links, rainbow border |
| Layout | `src/layouts/BaseLayout.astro` | Font loading, SEO, view transitions, header/footer shell |

## When to use

> Source: User directive + source analysis of `src/components/*.astro` and `src/styles/global.css`

Use this skill when:
- Building a website, landing page, or web app for SuperBenefit or a related community/DAO project
- Creating warm, visionary, editorial-style web experiences with organic textures
- Designing community-forward surfaces that need approachable yet elevated aesthetics
- Building card-based content sections with themed variants (green/orange/red)
- Implementing scroll-driven reveal animations without JavaScript libraries
- Creating glass-morphism cards on dark backgrounds with grain textures

## How to use


> Source: `README.md`, `DESIGN.md`, and `colors_and_type.css`

### Quick start (3 steps)

1. Link `colors_and_type.css` in your HTML `<head>`
2. Load Playfair Display + Inter from Google Fonts
3. Use CSS custom properties (e.g., `var(--color-orange)`, `var(--font-serif)`) in your styles

### For agents generating artifacts

1. **Read `DESIGN.md`** first — it is the canonical source of truth for all visual decisions
2. **Link `colors_and_type.css`** in your HTML — this provides all tokens and base styles
3. **Load fonts** from Google Fonts (Playfair Display + Inter) or use the `@font-face` declarations in the CSS
4. **Reference `preview/` cards** to see how tokens apply in practice
5. **Copy from `source_examples/` or `ui_kits/app/components/`** as implementation starting points
6. **Follow anti-patterns in `DESIGN.md` Section 9** — avoid AI slop tropes, JS animation libraries, Tailwind, etc.

### For designers reviewing the system

Open these preview cards in a browser:
- `preview/colors-primary.html` — brand palette
- `preview/typography-specimens.html` — type scale and font pairings
- `preview/components-cards.html` — card variants
- `preview/brand-assets.html` — logo, icon, palette, showcase

### For developers implementing components

The `source_examples/` directory contains the original Astro source:
- `BlogCard.astro` — light cream card with hover lift and left-border accent
- `StorySection.astro` — complex elevated dark card with parallax, grain, theme variants
- `Header.astro` — fixed glass header with rainbow border and mobile toggle
- `Hero.astro` — starfield hero with gradient tagline
- `global.css` — original design tokens and reset
- `animations.css` — scroll-driven and time-based keyframes

The `ui_kits/app/` directory provides a browser-runnable tabbed component browser demonstrating general-purpose UI patterns (forms, navigation, data display, feedback, overlays) with shadcn/ui design patterns, lucide icons, and SuperBenefit brand tokens.

### Reuse instructions

**For new SuperBenefit pages or sites:**
1. Read `DESIGN.md` Sections 1 (Visual Theme) and 9 (Anti-patterns)
2. Link `colors_and_type.css` for all tokens, fonts, and base styles
3. Copy component patterns from `source_examples/` (Astro) or `ui_kits/app/components/` (React-style)
4. Reference `preview/` cards to verify token usage matches the system
5. Follow the source stack: plain CSS with component-scoped styles, no Tailwind, no JS animation libraries

**For adapting to related community/DAO projects:**
1. Keep the warm cream/charcoal/orange palette structure
2. Replace Playfair Display with a different serif if the brand requires it
3. Maintain the glass-card-on-dark / cream-card-on-light dichotomy
4. Preserve scroll-driven animation patterns (CSS `animation-timeline`)
5. Keep the rainbow gradient as a single accent detail (header/footer borders)

## Highlights

> Source: `src/styles/global.css`, `src/styles/animations.css`, `src/components/*.astro`

### Color philosophy

> Source: `src/styles/global.css` (lines 4–15), `SB_Palette.webp`

Warm parchment (`#edddc8`) as the primary background, not generic beige. Dark charcoal (`#2d2d2d`) and black (`#1a1a1a`) for immersive sections. Orange (`#f5872c`) as the single primary accent. Green and red as secondary theme colors for content section variants. Gold as a warm highlight.

### Typography philosophy

> Source: `src/styles/global.css` (lines 28–39), `src/layouts/BaseLayout.astro`

Playfair Display (serif) for display headings — editorial, warm, confident. Inter (sans) for body text — clean, readable, modern. Fluid `clamp()`-based scale from 12px labels to 96px hero. Uppercase + letter-spaced labels and nav items.

### Component philosophy

> Source: `src/components/BlogCard.astro`, `src/components/StorySection.astro`, `src/components/CallToAction.astro`, `src/components/Header.astro`

- **Light cards:** Cream-light background, 12px radius, subtle shadow, left-border hover accent
- **Dark cards:** Charcoal background, 20px radius, heavy shadow, 3px top accent stripe, grain texture overlay, glass internal cards with `backdrop-filter: blur(12px)`
- **Buttons:** Pill-shaped (50px radius), charcoal primary, transparent ghost with cream border, glass CTA with theme-tinted borders
- **Header:** Fixed glass with rainbow border-bottom, scroll-driven solidify animation

### App component system

> Source: `ui_kits/app/index.html`

The UI kit demonstrates general-purpose app components using shadcn/ui patterns:
- **Forms:** Buttons (6 variants, 3 sizes), inputs, selects, textareas, checkboxes, radio groups, switches, input groups
- **Navigation:** Tabs, breadcrumbs, pagination, sidebar
- **Data Display:** Cards (header/content/footer), tables, avatars, badges, progress bars
- **Feedback:** Alerts (4 variants), toast notifications, skeleton loaders
- **Overlays:** Dialogs, sheets (slide-out panels), dropdown menus
- **Icons:** Full lucide.dev icon set integration

### Motion philosophy

> Source: `src/styles/animations.css`

All animation is CSS-native:
- Scroll-driven reveals (`animation-timeline: view()`)
- Scroll-driven parallax (`animation-timeline: view()`)
- Scroll-driven header solidify (`animation-timeline: scroll()`)
- Time-based decorative: twinkle, pulse-glow, float-gentle
- No JavaScript animation libraries
- Full `prefers-reduced-motion` support

### Restraint

> Source: User directive + source analysis

- One accent color (orange) used at most twice per screen
- Rainbow gradient used sparingly: header/footer borders only
- Grain texture at 5–6% opacity — subtle, not noisy
- Glass cards use `rgba(30, 25, 20, 0.35)` — warm-tinted, not pure white
