# SuperBenefit Design System

> A warm, visionary design system for community-forward web experiences. Extracted from the SuperBenefit website (`https://github.com/superbenefit/sb-website`).

## Getting Started

### Install

**Option A — Clone this repo:**
```bash
git clone https://github.com/superbenefit/design-system.git
```

**Option B — Download a ZIP:**
Visit `https://github.com/superbenefit/design-system`, click "Code" → "Download ZIP", and extract.

**Option C — Copy just the tokens file (no git needed):**
Download `colors_and_type.css` and `assets/` into your project.

### What you get

All you need to build SuperBenefit-flavored pages: a single CSS token file, brand assets, preview cards, component source examples, and a browser-runnable UI kit.

---

## Quick Reference — CSS Custom Properties

All tokens are defined in `colors_and_type.css`. Link it in your `<head>` and use any of these:

### Brand Colors

| CSS Variable | Hex | Role |
|-------------|-----|------|
| `--color-cream` | `#edddc8` | Primary background — warm parchment |
| `--color-cream-light` | `#f5ede0` | Elevated surfaces, cards |
| `--color-charcoal` | `#2d2d2d` | Primary text, dark sections |
| `--color-black` | `#1a1a1a` | Deepest backgrounds (hero, footer) |
| `--color-orange` | `#f5872c` | Primary accent — CTAs, links, highlights |
| `--color-orange-dark` | `#e06b10` | Hover states, emphasis |
| `--color-red` | `#c4401a` | Secondary accent — energy, urgency |
| `--color-red-deep` | `#a83215` | Deep red for gradients |
| `--color-green` | `#7a9a4e` | Tertiary accent — growth, nature |
| `--color-green-sage` | `#8dad5c` | Lighter green for labels |
| `--color-gold` | `#d4a843` | Warm highlight, gradient anchor |

### Semantic Roles

| CSS Variable | Maps To | Use For |
|-------------|----------|---------|
| `--bg` | `--color-cream` | Page background (light mode) |
| `--bg-dark` | `--color-black` | Page background (dark mode) |
| `--surface` | `--color-cream-light` | Cards, panels, inputs |
| `--surface-glass` | `rgba(30,25,20,0.35)` | Glass cards on dark backgrounds |
| `--fg` | `--color-charcoal` | Body text on light background |
| `--fg-dark` | `--color-cream` | Body text on dark background |
| `--muted` | `rgba(45,45,45,0.7)` | Secondary text, captions |
| `--muted-dark` | `rgba(237,221,200,0.75)` | Secondary text on dark |
| `--border` | `rgba(255,255,255,0.08)` | Card borders on dark |
| `--border-light` | `rgba(0,0,0,0.08)` | Card borders on light |
| `--accent` | `--color-orange` | Links, primary buttons, active states |
| `--accent-secondary` | `--color-green` | Success states, growth themes |
| `--accent-tertiary` | `--color-red` | Danger states, energy themes |

### Typography

| CSS Variable | Value |
|-------------|-------|
| `--font-serif` / `--font-display` | `'Playfair Display', Georgia, 'Iowan Old Style', serif` |
| `--font-sans` / `--font-body` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif` |
| `--font-mono` | `ui-monospace, SFMono-Regular, Menlo, monospace` |
| `--text-xs` | `clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)` (12–14px) |
| `--text-sm` | `clamp(0.875rem, 0.8rem + 0.35vw, 1rem)` (14–16px) |
| `--text-base` | `clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` (16–18px) |
| `--text-lg` | `clamp(1.125rem, 1rem + 0.75vw, 1.375rem)` (18–22px) |
| `--text-xl` | `clamp(1.5rem, 1.2rem + 1.5vw, 2rem)` (24–32px) |
| `--text-2xl` | `clamp(2rem, 1.5rem + 2.5vw, 3rem)` (32–48px) |
| `--text-3xl` | `clamp(2.5rem, 1.8rem + 3.5vw, 4.5rem)` (40–72px) |
| `--text-hero` | `clamp(3rem, 2rem + 5vw, 6rem)` (48–96px) |

### Spacing, Radius, Shadows

| Category | CSS Variables |
|----------|--------------|
| Spacing | `--space-xs` (4px), `--space-sm` (8px), `--space-md` (16px), `--space-lg` (32px), `--space-xl` (64px), `--space-2xl` (128px) |
| Radius | `--radius-sm` (8px), `--radius-md` (12px), `--radius-lg` (20px), `--radius-pill` (50px) |
| Shadows | `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-glow` (orange), `--shadow-card-dark` |
| Layout | `--max-width` (1200px), `--header-height` (4rem) |
| Transitions | `--transition-fast` (150ms), `--transition-medium` (300ms), `--transition-slow` (600ms) |
| Gradients | `--gradient-rainbow`, `--gradient-warm`, `--gradient-cream` |

---

## Reuse Workflow — Human Developer

### 1. Link the token file

```html
<link rel="stylesheet" href="colors_and_type.css">
```

This provides all CSS custom properties, font-face declarations, base reset, and utility classes.

### 2. Load fonts

Place this **before** the `colors_and_type.css` link tag:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 3. Use tokens in your CSS

```css
.my-component {
  background: var(--bg);
  color: var(--fg);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
}

h1 { font-family: var(--font-serif); font-size: var(--text-3xl); color: var(--fg); }
a { color: var(--accent); }
a:hover { color: var(--color-red); }
```

### 4. Reference components

Copy patterns from `source_examples/` (Astro) or `ui_kits/app/components/` (React-style) as starting points.

Open `ui_kits/app/index.html` in a browser to explore a tabbed component browser demonstrating:
- **Forms & Inputs** — Buttons (primary, secondary, ghost, outline, destructive), text inputs, selects, textareas, checkboxes, radio groups, switches, input groups
- **Navigation** — Tabs, breadcrumbs, pagination, sidebar
- **Data Display** — Cards, tables, avatars, badges, progress bars
- **Feedback** — Alerts (info, success, warning, error), toast notifications, skeleton loaders
- **Overlays** — Dialogs, sheets, dropdown menus
- **Typography & Icons** — Full type scale, lucide-style icon gallery

All components use shadcn/ui design patterns (focus rings, subtle borders, consistent radius, hover states) with SuperBenefit brand tokens.

### 5. Follow the design philosophy

Read `DESIGN.md` Section 1 (Visual Theme) and Section 9 (Anti-patterns) before generating new components. Key principles:
- Warm, visionary, organic — not sterile or corporate
- One accent color (orange) used at most twice per screen
- Scroll-driven animations, not JS libraries
- Glass cards on dark, cream cards on light
- Rainbow gradient used sparingly: header/footer borders only

---

## Starter HTML Template

Copy-paste this into a new `index.html` file to get a working page in seconds:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SuperBenefit</title>
  <!-- Fonts come BEFORE the token CSS -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="colors_and_type.css" />
  <style>
    /* Your page styles go here. All tokens from colors_and_type.css
       are available: var(--bg), var(--fg), var(--accent), etc. */
    .page { max-width: var(--max-width); margin: 0 auto; padding: var(--space-xl) var(--space-lg); }
    h1 { font-family: var(--font-serif); font-size: var(--text-3xl); color: var(--fg); line-height: 1.15; }
    p { font-size: var(--text-base); color: var(--muted); max-width: 70ch; }
    a { color: var(--accent); }
    .card { background: var(--surface); border-radius: var(--radius-md); padding: var(--space-lg); border: 1px solid var(--border-light); }
  </style>
</head>
<body>
  <div class="page">
    <h1>Welcome to SuperBenefit</h1>
    <p>A community of practice using emerging technologies for systems transformation.</p>
    <div class="card">
      <p>This card uses <code>--surface</code>, <code>--radius-md</code>, and <code>--border-light</code>.</p>
    </div>
  </div>
</body>
</html>
```

---

## For Coding Agents (AI / LLM Assistants)

If you are an AI coding agent generating pages for a user who told you "use the SuperBenefit design system", here is the minimum you need:

### Files to use (load these)

| File | Priority | What it is |
|------|----------|------------|
| `colors_and_type.css` | **Required** | All CSS tokens, font declarations, base styles. Link this in every HTML file. |
| `DESIGN.md` | **Read first** | Canonical rules: color philosophy, type hierarchy, component shapes, anti-patterns. Sections 1 and 9 are the most important. |
| `assets/sb-icon.jpg` | **Recommended** | Site favicon / hero icon (64×64 watercolor icon) |
| `assets/superbenefit-logo.webp` | Optional | Full wordmark logo |

### Files to reference by path (do not inline)

- `preview/*.html` — 9 reviewable HTML cards showing how tokens render. Open these in a browser to verify your token usage.
- `source_examples/*.astro` — Original Astro source snapshots (Header, Hero, StorySection, BlogCard, CallToAction, Footer, global.css, animations.css). Copy their patterns.
- `ui_kits/app/index.html` — Browser-runnable component browser. Loads React 18 + Babel + all 17 component JSX files.

### Files to ignore

- `context/` — Source intake evidence. Not needed for artifact generation.
- `build/` — Runtime build artifacts preserved from the source repo.
- `SKILL.md` — Agent skill manifest. The content duplicates README + DESIGN.md.

### Agent workflow — 3 steps

1. **Add these two lines to every HTML `<head>` you generate:**
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
   <link rel="stylesheet" href="colors_and_type.css" />
   ```
   The font `<link>` MUST come before `colors_and_type.css`.

2. **Use semantic tokens, not raw hex values:**
   - Background: `var(--bg)` (cream) or `var(--bg-dark)` (black hero/footer)
   - Text: `var(--fg)` (charcoal) or `var(--fg-dark)` (cream on dark)
   - Accent: `var(--accent)` (orange) — use at most twice per screen
   - Headings: `font-family: var(--font-serif)` (Playfair Display)
   - Body: `font-family: var(--font-sans)` (Inter)
   - Cards: `background: var(--surface); border-radius: var(--radius-md)`
   - Spacing: `var(--space-lg)` (32px) is the standard gap

3. **Match the component vocabulary:**
   - Light cards on cream background → cream-light surface, 12px radius, subtle shadow, orange-accent hover
   - Dark cards on charcoal → 20px radius, heavy shadow, 3px color stripe at top, grain texture
   - Glass cards → `rgba(30,25,20,0.35)` with `backdrop-filter: blur(12px)`
   - Buttons → pill-shaped (50px radius), charcoal-on-cream primary, transparent ghost with cream border
   - Headers → fixed glass with rainbow gradient border-bottom
   - Links → orange with red hover, never underlined on dark

### Anti-patterns to avoid

- ❌ Inter or Roboto as a display/heading face — use Playfair Display (`var(--font-serif)`)
- ❌ Tailwind CSS in artifacts built from this kit — it uses plain CSS custom properties (the live site has Tailwind v4 available, reading the same tokens)
- ❌ JavaScript animation libraries — use CSS scroll-driven animations (`animation-timeline`)
- ❌ Aggressive purple/violet gradients
- ❌ Generic emoji feature icons (✨ 🚀 🎯)
- ❌ Invented metrics ("10× faster", "99.9% uptime") without a source
- ❌ Filler copy — "Feature One / Feature Two", lorem ipsum
- ❌ Hand-drawn SVG humans / faces / scenery

---

## Product Overview

**SuperBenefit** is a community of practice using emerging technologies for systems transformation. The organization researches and incubates initiatives that harness decentralized coordination — governance, DAOs, and regenerative systems — in pursuit of a better world.

### Who it is for

- **Researchers and practitioners** interested in governance innovation and DAOs
- **Developers and designers** building tools for decentralized coordination
- **Community members** seeking to connect with like-minded systems thinkers
- **Funders and partners** evaluating SuperBenefit's work and impact

### Primary UI Surfaces

- **Public website** (`superbenefit.org`) — Astro site with scroll-driven animations, deployed to Cloudflare Workers. At intake it ran Astro 6 with a story-card homepage and a blog; it now runs Astro 7, with a services-led homepage, a contact form, and its other pages still in draft.
- **Knowledge Garden** (`knowledge.superbenefit.dev`) — External knowledge base for community-generated content
- **Governance portal** (`governance.superbenefit.dev`) — External governance tools and documentation

## Source Repository

- **GitHub:** `https://github.com/superbenefit/sb-website`
- **Stack:** Astro 6 (`astro ^6.0.4` in the snapshot's `package.json`), Cloudflare Workers, TypeScript, plain CSS (no Tailwind) at intake. The live site has since moved to Astro 7, with Tailwind CSS v4 available alongside the same CSS custom properties
- **Fonts:** Playfair Display (serif display), Inter (sans body) via Astro experimental fonts

## Package Contents

```
.
├── DESIGN.md                    # Canonical design system rules (colors, type, spacing, components, motion, voice, anti-patterns)
├── colors_and_type.css          # Concrete CSS custom properties + base styles + font-face declarations
├── README.md                    # This file
├── SKILL.md                     # Agent-usable skill entry with YAML frontmatter
├── .gitignore
├── assets/                      # Brand assets (logos, icons, palette, showcase)
│   ├── sb-icon.jpg
│   ├── sb-icon-original.jpg
│   ├── superbenefit-logo.webp
│   ├── brand-showcase.webp
│   └── SB_Palette.webp
├── build/                       # Runtime/build assets preserved from source
│   ├── icon.jpg
│   └── logo.webp
├── preview/                     # Reviewable HTML cards for design system tokens
│   ├── colors-primary.html      # Brand color swatches
│   ├── colors-theme-light.html  # Light theme semantic colors
│   ├── colors-theme-dark.html   # Dark theme semantic colors
│   ├── typography-specimens.html # Type scale + font specimens
│   ├── spacing-tokens.html      # Spacing scale visualization
│   ├── spacing-radius.html      # Radius + shadow tokens
│   ├── components-buttons.html  # Button variants
│   ├── components-cards.html    # Card variants (blog, story, glass)
│   └── brand-assets.html        # Asset gallery with real preserved files
├── source_examples/             # High-signal source component snapshots
│   ├── BlogCard.astro
│   ├── StorySection.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── CallToAction.astro
│   ├── global.css
│   └── animations.css
├── ui_kits/app/                 # Browser-runnable component browser
│   ├── index.html               # Tabbed component showcase (shadcn patterns)
│   ├── README.md                # Kit documentation
│   └── components/              # 17 React-style JSX component files
│       ├── App.jsx              # App shell
│       ├── Header.jsx           # Glass header
│       ├── Sidebar.jsx          # Navigation sidebar
│       ├── Hero.jsx             # Starfield hero
│       ├── StoryCard.jsx        # Elevated dark card
│       ├── BlogCard.jsx         # Light blog card
│       ├── Footer.jsx           # Dark footer
│       ├── Avatar.jsx           # Avatar with status
│       ├── ChatMessage.jsx      # Chat bubble
│       ├── ChatThread.jsx       # Scrollable thread
│       ├── Composer.jsx         # Chat input
│       ├── CodeBlock.jsx        # Syntax-highlighted code
│       ├── TextEditor.jsx       # Rich text editor
│       ├── NavigationBar.jsx    # Tab navigation
│       ├── Toolbar.jsx          # Action toolbar
│       ├── Modal.jsx            # Overlay dialog
│       └── Toast.jsx            # Status notification
└── context/                     # Source evidence (intake snapshots)
    └── source-context.md
```

## Preview Manifest

| File | What to Inspect | Demonstrates |
|------|-----------------|--------------|
| `preview/colors-primary.html` | 11 brand color swatches with hex values and CSS token names | `--color-cream`, `--color-charcoal`, `--color-orange`, `--color-red`, `--color-green`, `--color-gold`, etc. |
| `preview/colors-theme-light.html` | Light theme semantic color application | `--bg`, `--surface`, `--fg`, `--muted`, `--accent` on cream background |
| `preview/colors-theme-dark.html` | Dark theme semantic color application | `--bg-dark`, `--surface-glass`, `--fg-dark`, glass cards with `backdrop-filter` |
| `preview/typography-specimens.html` | Full type scale from hero to label | Playfair Display (serif) vs Inter (sans), fluid clamp() sizes, gradient text fill |
| `preview/spacing-tokens.html` | Visual spacing scale | `--space-xs` through `--space-2xl` (4px to 128px) |
| `preview/spacing-radius.html` | Radius and shadow tokens | `--radius-sm` to `--radius-pill`, `--shadow-sm` to `--shadow-card-dark` |
| `preview/components-buttons.html` | Button variants | Primary, ghost, story CTA (green/orange/red glass), ghost CTA |
| `preview/components-cards.html` | Card variants | Blog card (light), story card (dark), glass card (dark translucent) |
| `preview/brand-assets.html` | Asset gallery | `assets/superbenefit-logo.webp`, `assets/sb-icon.jpg`, `assets/SB_Palette.webp`, `assets/brand-showcase.webp` |

## Provenance

- **Colors:** Extracted from `src/styles/global.css` and `SB_Palette.webp`
- **Typography:** Playfair Display + Inter, confirmed in `src/layouts/BaseLayout.astro`
- **Components:** Derived from `src/components/*.astro` files
- **Assets:** Copied from `public/images/` in the source repo
- **Animations:** Extracted from `src/styles/animations.css`

## License

Design system artifacts follow the source repository license. Refer to `https://github.com/superbenefit/sb-website` for licensing details.
