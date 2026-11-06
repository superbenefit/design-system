# SuperBenefit Design System

> Category: Custom
> Surface: web

SuperBenefit — a community of practice using emerging technologies for systems transformation.

## Source Context

This design system is derived from the SuperBenefit website source repository:

- **Repository:** `https://github.com/superbenefit/sb-website`
- **Intake method:** Git clone (local this-device access)
- **Evidence note:** `context/github/superbenefit-sb-website.md`
- **Snapshot files:** `context/github/superbenefit-sb-website/files/` (36 source files)
- **Stack:** Astro 6 (`astro ^6.0.4` in the snapshot's `package.json`), Cloudflare Workers, TypeScript, plain CSS (no Tailwind) at intake. The live site has since moved to Astro 7, with Tailwind CSS v4 available alongside the same CSS custom properties

### Source files backing each section

| DESIGN.md Section | Primary Source Files | What was extracted |
|-------------------|---------------------|-------------------|
| 1. Visual Theme | `sb-icon.jpg`, `brand-showcase.webp`, `README.md` | Watercolor textures, parchment backgrounds, visionary mood |
| 2. Color | `src/styles/global.css` (lines 4–15), `SB_Palette.webp` | 11 brand hex values, semantic roles, gradient definitions |
| 3. Typography | `src/styles/global.css` (lines 28–39), `src/layouts/BaseLayout.astro` | Font families, fluid clamp() scale, heading hierarchy |
| 4. Spacing | `src/styles/global.css` (lines 41–51) | 6 spacing tokens, max-width, header-height |
| 5. Layout | `src/components/StorySection.astro`, `src/components/BlogList.astro`, `src/components/Header.astro` | Grid systems, breakpoints, page structure, responsive behavior |
| 6. Components | `src/components/BlogCard.astro`, `src/components/CallToAction.astro`, `src/components/StorySection.astro`, `src/components/Header.astro`, `src/components/Nav.astro` | Button styles, card patterns, navigation, tags |
| 7. Motion | `src/styles/animations.css` (all keyframes and timeline rules) | Scroll-driven reveals, parallax, header solidify, decorative loops |
| 8. Voice | `src/components/CallToAction.astro`, `src/components/MissionStatement.astro`, `src/pages/index.astro` | Copy style, terminology, CTA language, mission statement |
| 9. Anti-patterns | User directive in project setup + source analysis | Avoided tropes identified from source and user requirements |

### UI Kit Components

In addition to the source-derived website components, the design system ships an applied UI kit (`ui_kits/app/components/`) with reusable components. `App`, `Header`, `Sidebar`, `Hero`, `StoryCard`, `BlogCard` and `Footer` restate the website's shell, hero and cards; the app-level components are:

- **Avatar** — User/assistant avatar with status indicator (`online`/`away`/`busy`/`offline`) and initials fallback
- **ChatMessage** — Chat bubble with sent/received alignment, avatar, timestamp, read status, and text/code variants
- **ChatThread** — Scrollable message thread with auto-scroll, typing indicator animation, and empty state
- **Composer** — Rich chat input with auto-resizing textarea, Enter-to-send, Shift+Enter for newline, disabled state
- **CodeBlock** — Syntax-highlighted code display with window chrome (traffic lights), language label, copy button with feedback
- **TextEditor** — Rich text editing surface with formatting toolbar and character count
- **NavigationBar** — Bottom or top tab navigation with active indicator bar and safe-area padding
- **Toolbar** — Action toolbar with icon buttons, separators, active/disabled states
- **Modal** — Overlay dialog with backdrop blur, close button, click-outside-to-close, size variants
- **Toast** — Status notification with auto-dismiss, stacking, type-colored borders (`info`/`success`/`warning`/`error`)

These components apply the SuperBenefit design tokens to common app patterns (chat, navigation, editing, code display) and are demonstrated in the browser-runnable `ui_kits/app/index.html`.

## 1. Visual Theme & Atmosphere

**Mood:** Warm, visionary, and organic. The system evokes a sense of collaborative exploration and regenerative potential. It balances lush watercolor textures with clean typography and warm lighting effects. The overall feeling is approachable yet elevated — like a well-crafted journal or community gathering space rather than a sterile tech product.

**Source context:** The SuperBenefit website (`https://github.com/superbenefit/sb-website`) used Astro 6 with plain CSS (no Tailwind) when it was captured; it now runs Astro 7 with Tailwind CSS v4 available. Design tokens live in `src/styles/global.css` and component-scoped `<style>` blocks. The visual language prioritizes:
- Lush watercolor textures (evident in `sb-icon.jpg`)
- Soft paper/parchment backgrounds (`--color-cream`, `--color-cream-light`)
- Clean, gradual transitions and warm lighting
- Clear, human communication over AI-generated flash
- A visionary, community-forward vibe

**Anti-slop stance:** Downplay anything jarring or obviously computer-generated. Avoid aggressive gradients, generic emoji, rounded cards with left-border accents, and warm beige/peach/pink AI canvas defaults. Prioritize natural textures, subtle grain, and restrained color usage.

## 2. Color

> **Source:** `src/styles/global.css` (lines 4–15), `SB_Palette.webp`

### Brand Palette (from SB_Palette.webp and global.css)

Extracted from `src/styles/global.css` lines 4–15:

```css
:root {
  --color-cream: #edddc8;
  --color-cream-light: #f5ede0;
  --color-charcoal: #2d2d2d;
  --color-black: #1a1a1a;
  --color-orange: #f5872c;
  --color-orange-dark: #e06b10;
  --color-red: #c4401a;
  --color-red-deep: #a83215;
  --color-green: #7a9a4e;
  --color-green-sage: #8dad5c;
  --color-gold: #d4a843;
}
```

| Token | Hex | Role |
|-------|-----|------|
| `--color-cream` | `#edddc8` | Primary background — warm parchment |
| `--color-cream-light` | `#f5ede0` | Elevated surfaces, cards |
| `--color-charcoal` | `#2d2d2d` | Primary text, dark sections |
| `--color-black` | `#1a1a1a` | Deepest background (hero, footer) |
| `--color-orange` | `#f5872c` | Primary accent — CTAs, links, highlights |
| `--color-orange-dark` | `#e06b10` | Hover states, emphasis |
| `--color-red` | `#c4401a` | Secondary accent — energy, urgency |
| `--color-red-deep` | `#a83215` | Deep red for gradients |
| `--color-green` | `#7a9a4e` | Tertiary accent — growth, nature |
| `--color-green-sage` | `#8dad5c` | Lighter green for labels |
| `--color-gold` | `#d4a843` | Warm highlight, gradient anchor |

### Semantic Roles

- **Background:** `--color-cream` for body, `--color-black` for hero/footer/immersive sections
- **Surface:** `--color-cream-light` for cards, `rgba(30, 25, 20, 0.35)` with `backdrop-filter: blur(12px)` for glass cards on dark
- **Text:** `--color-charcoal` on light, `--color-cream` on dark
- **Accent:** `--color-orange` for primary actions, links, underlines
- **Secondary accents:** `--color-green` (growth themes), `--color-red` (energy themes), `--color-gold` (warm highlights)
- **Borders:** `rgba(255, 255, 255, 0.08)` on dark glass cards, `3px solid transparent` → `--color-orange` on hover for blog cards

### Gradients

```css
--gradient-rainbow: conic-gradient(
  from 180deg,
  var(--color-gold),
  var(--color-orange),
  var(--color-red),
  var(--color-green),
  var(--color-gold)
);
--gradient-warm: linear-gradient(135deg, var(--color-orange), var(--color-red), var(--color-gold));
```

The rainbow gradient is used sparingly: header border stripe, footer border. The warm gradient appears in hero typography and CTA section backgrounds.

## 3. Typography

> **Source:** `src/styles/global.css` (lines 28–39), `src/layouts/BaseLayout.astro` (Font declarations)

### Font Families

From `src/layouts/BaseLayout.astro`:

```astro
<Font cssVariable="--font-playfair" preload />
<Font cssVariable="--font-inter" preload />
```

From `src/styles/global.css` lines 28–30:

```css
--font-serif: var(--font-playfair);
--font-sans: var(--font-inter);
```

| Role | Font | Fallback |
|------|------|----------|
| Display / Serif | Playfair Display | Georgia, 'Iowan Old Style', serif |
| Body / Sans | Inter | -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif |

**Note:** The source uses Astro's experimental `<Font>` component with CSS variables `--font-playfair` and `--font-inter`. For external use, load via Google Fonts or use the fallback stacks above.

### Type Scale (fluid, clamp-based)

```css
--text-xs:   clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);   /* 12–14px */
--text-sm:   clamp(0.875rem, 0.8rem + 0.35vw, 1rem);      /* 14–16px */
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);       /* 16–18px */
--text-lg:   clamp(1.125rem, 1rem + 0.75vw, 1.375rem);   /* 18–22px */
--text-xl:   clamp(1.5rem, 1.2rem + 1.5vw, 2rem);         /* 24–32px */
--text-2xl:  clamp(2rem, 1.5rem + 2.5vw, 3rem);           /* 32–48px */
--text-3xl:  clamp(2.5rem, 1.8rem + 3.5vw, 4.5rem);       /* 40–72px */
--text-hero: clamp(3rem, 2rem + 5vw, 6rem);                /* 48–96px */
```

### Heading Hierarchy

- **H1:** `var(--text-3xl)`, Playfair Display, weight 700, line-height 1.15
- **H2:** `var(--text-2xl)`, Playfair Display, weight 700, line-height 1.15
- **H3:** `var(--text-xl)`, Playfair Display, weight 700, line-height 1.15
- **H4:** `var(--text-lg)`, Playfair Display, weight 700, line-height 1.15
- **Body:** `var(--text-base)`, Inter, line-height 1.6, max-width 70ch
- **Labels / Meta:** `var(--text-xs)`, uppercase, letter-spacing 0.12–0.14em, weight 600

### Special Treatments

- Hero tagline: gradient text fill (`background-clip: text`) using cream → gold → orange
- Nav links: uppercase, letter-spacing 0.04em, weight 500
- Card dates: uppercase, letter-spacing 0.06em, weight 600, accent color

## 4. Spacing

> **Source:** `src/styles/global.css` (lines 41–51)

### Spacing Scale

```css
--space-xs:  0.25rem;   /* 4px */
--space-sm:  0.5rem;    /* 8px */
--space-md:  1rem;      /* 16px */
--space-lg:  2rem;      /* 32px */
--space-xl:  4rem;      /* 64px */
--space-2xl: 8rem;      /* 128px */
```

### Layout

```css
--max-width: 1200px;
--header-height: 4rem;  /* 64px */
```

### Density

- Generous vertical padding on sections: `var(--space-2xl)` (128px) is common
- Section gaps use `48px` between story cards in the dark stage
- Card internal padding: `var(--space-lg)` (32px)
- Grid gaps: `var(--space-lg)` (32px) for blog grids, `48px` for card stages

## 5. Layout & Composition

> **Source:** `src/components/StorySection.astro`, `src/components/BlogList.astro`, `src/components/Header.astro`

### Grid System

- **Container:** `max-width: 1200px`, centered with `margin-inline: auto`, `padding-inline: var(--space-lg)`
- **Blog grid:** `1fr` mobile → `repeat(2, 1fr)` at 640px → `repeat(3, 1fr)` at 1024px
- **Story grid:** `repeat(3, 1fr)` desktop → `repeat(2, 1fr)` tablet → `1fr` mobile
- **Story intro:** `1fr 1fr` two-column grid, collapses to single column at 768px
- **Footer:** `1fr 1fr` grid, stacks at 640px

### Responsive Breakpoints

| Breakpoint | Usage |
|------------|-------|
| 480px | Mobile fine-tuning (card radii, padding) |
| 768px | Tablet / mobile nav toggle, grid collapse |
| 1024px | Desktop grid expansion, layout shifts |

### Page Structure

Typical page flow:
1. **Fixed Header** — blurred glass, rainbow border-bottom, logo + nav
2. **Hero** — full viewport, starfield background, centered icon + tagline
3. **SectionDivider** — SVG wave transition
4. **MissionStatement** — cream gradient background, purpose + body text
5. **CardsStage** — dark charcoal wrapper with grain texture, overlapping story cards
6. **CallToAction** — orange background with radial glows
7. **Footer** — black background, starfield, brand + social + copyright

## 6. Components

> **Source:** `src/components/BlogCard.astro`, `src/components/CallToAction.astro`, `src/components/StorySection.astro`, `src/components/Header.astro`, `src/components/Nav.astro`

### Buttons

**Primary button (`.btn-primary`):**
- Background: `--color-charcoal`
- Color: `--color-cream`
- Padding: `0.9em 2em`
- Border-radius: `50px` (pill)
- Font: weight 600, `var(--text-base)`, letter-spacing 0.02em
- Hover: `translateY(-2px)`, shadow `0 6px 24px rgba(0,0,0,0.3)`

**Ghost button (`.btn-ghost`):**
- Background: transparent
- Border: `2px solid var(--color-cream)`
- Color: `--color-cream`
- Hover: background fills cream, text turns orange

**Story CTA button (`.story-btn--primary`):**
- Glass style: `rgba(accent, 0.18)` background, `1px solid` accent color
- Hover: `rgba(accent, 0.30)` + glow shadow
- Theme-aware: green/orange/red variants

### Cards

**Blog Card (`.blog-card`):**
- Background: `--color-cream-light`
- Border-radius: `12px`
- Shadow: `var(--shadow-sm)`
- Left border: `3px solid transparent` → `--color-orange` on hover
- Hover: `translateY(-4px)`, `var(--shadow-lg)`
- Image: 16:9 aspect ratio, `scale(1.04)` on hover

**Story Card (`.story-card`) — elevated dark card:**
- Border-radius: `20px` (14px mobile)
- Shadow: `0 4px 24px rgba(0,0,0,0.4), 0 12px 48px rgba(0,0,0,0.25)`
- Top accent stripe: `3px` height, theme-colored (green/orange/red)
- Background image with parallax + dark gradient overlay
- Grain texture overlay at 6% opacity
- Warm ambient glow radial gradients, theme-tinted

**Glass Card (`.story-featured-card`, `.story-grid-card`):**
- Background: `rgba(30, 25, 20, 0.35)`
- Border: `1px solid rgba(255,255,255,0.08)` (theme-tinted variant)
- Backdrop-filter: `blur(12px)`
- Border-radius: `12px`
- Hover: brighter background, `translateY(-3px)`, stronger shadow

### Navigation

**Header (`.site-header`):**
- Fixed, `z-index: 100`
- Background: `rgba(26, 26, 26, 0.8)` with `backdrop-filter: blur(10px)`
- Scroll-driven solidify: transparent → `rgba(26,26,26,0.92)` + `blur(12px)` over first 300px
- Rainbow border-bottom: `2px`, `var(--gradient-rainbow)`
- Mobile: hamburger toggle, full-screen overlay nav

**Nav links (`.nav-link`):**
- Uppercase, letter-spacing 0.04em, weight 500
- Color: `--color-cream`
- Hover: color → `--color-orange`, underline scales in from left
- Active: `--color-orange` + persistent underline

### Tags

**Blog tag (`.tag`):**
- Font: `var(--text-xs)`, weight 500
- Padding: `0.2em 0.7em`
- Background: `rgba(122, 154, 78, 0.15)`
- Color: `--color-green`
- Border-radius: `50px`

## 7. Motion & Interaction

> **Source:** `src/styles/animations.css` (all keyframes and timeline rules)

### Scroll-Driven Animations (CSS-only, no JS libraries)

From `src/styles/animations.css`:

```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

@supports (animation-timeline: view()) {
  [data-animate="fade-up"] {
    animation: fade-in-up ease both;
    animation-timeline: view();
    animation-range: entry 0% entry 80%;
  }
}

@keyframes parallax-transform {
  from { transform: translateY(-20px); }
  to   { transform: translateY(20px); }
}

@supports (animation-timeline: view()) {
  [data-parallax] {
    animation: parallax-transform linear both;
    animation-timeline: view();
    animation-range: entry 0% exit 100%;
    will-change: transform;
  }
}

@keyframes header-solidify {
  from { background-color: transparent; backdrop-filter: blur(0px); }
  to   { background-color: rgba(26, 26, 26, 0.92); backdrop-filter: blur(12px); }
}

@supports (animation-timeline: scroll()) {
  .site-header {
    animation: header-solidify linear both;
    animation-timeline: scroll();
    animation-range: 0px 300px;
  }
}
```

### Time-Based Decorative Animations

| Animation | Duration | Use |
|-----------|----------|-----|
| `twinkle` | 4–8s ease-in-out | Starfield opacity |
| `pulse-glow` | 3s ease-in-out | Hero icon glow ring |
| `spin-slow` | 20s linear | Hero icon rainbow ring rotation |
| `float-gentle` | 2s ease-in-out | Scroll hint arrow |
| `rainbow-shift` | 20s linear | Hue rotation (unused in current build) |
| `breathe` | 4s ease-in-out | Scale pulse (unused in current build) |

### Transitions

```css
--transition-fast:   150ms ease;
--transition-medium: 300ms ease;
--transition-slow:   600ms ease-out;
```

### Hover Patterns

- Cards: `translateY(-4px)` + shadow elevation
- Images inside cards: `scale(1.04–1.05)`
- Buttons: `translateY(-2px)` + shadow
- Nav links: color shift + underline scaleX
- Social icons: opacity 0.6 → 1.0, color shift, `translateY(-2px)`

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations disabled: 0.01ms duration, 1 iteration */
  /* Scroll behavior: auto */
  /* Story card ambient glow: disabled */
}
```

### View Transitions

- Root crossfade: 200ms fade-out / 300ms fade-in
- Blog post transitions: 180ms fade-out / 250ms fade-in (no scale — avoids morphing artifacts)

## 8. Voice & Brand

> **Source:** `src/components/CallToAction.astro`, `src/components/MissionStatement.astro`, `src/pages/index.astro`

### Copy Style

- Warm, inviting, community-first
- Action-oriented but not aggressive
- Example CTA: "Pull Up a Chair" — not "Sign Up Now"
- Example tagline: "Let's make better faster, together."
- Technical concepts (DAOs, governance, web3) explained in human terms

### Terminology

- "Knowledge Garden" — not "Documentation" or "Wiki"
- "Community of practice" — not "Company" or "Team"
- "Systems transformation" — not "Digital transformation"
- "Regenerative ecosystem" — core value proposition

### Capitalization

- Sentence case for headings (not Title Case)
- Uppercase for labels, nav items, and meta text with generous letter-spacing

## 9. Anti-patterns

> **Source:** User directive in project setup + source analysis of `src/components/*.astro` and `src/styles/global.css`

### Visual

- ❌ Aggressive purple/violet gradient backgrounds
- ❌ Generic emoji feature icons
- ❌ Rounded cards with a left colored border accent (the blog card's left border is a subtle 3px transparent→orange hover state, not a permanent accent)
- ❌ Hand-drawn SVG humans / faces / scenery
- ❌ Inter or Roboto as a *display* face (Playfair Display is the display face)
- ❌ Warm beige / cream / peach / pink / orange-brown page backgrounds unless explicitly brand-led (the cream here IS brand-led from the watercolor palette)
- ❌ Product artifacts that expose designer settings, viewport selectors, platform toggles

### Interaction

- ❌ JavaScript animation libraries — all motion is CSS scroll-driven or simple keyframes
- ❌ Modal dialogs / popups — the site uses page transitions and inline CTAs
- ❌ Dropdown menus — navigation is flat links
- ❌ Carousels / sliders — content is scroll-driven reveal

### Content

- ❌ Invented metrics without sources
- ❌ Filler copy — "Feature One / Feature Two"
- ❌ Lorem ipsum
- ❌ Generic stat-slop

### Technical

- ❌ Tailwind CSS — the source uses plain CSS with custom properties
- ❌ Heavy JavaScript frameworks — Astro with minimal JS
- ❌ Background-position animations — use `transform: translateY()` for parallax (GPU-composited)
