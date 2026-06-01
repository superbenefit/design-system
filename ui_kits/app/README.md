# SuperBenefit App Component Kit

This is a Claude Design package reuse guide. It documents the applied kit structure, component files, usage workflow, design notes, and source basis so future agents can reuse it like a Claude Design package.

## Structure

```
ui_kits/app/
├── index.html              # Browser entry — React 18 + Babel + colors_and_type.css
├── README.md               # This reuse guide
└── components/             # 14 React+Babel JSX component files (+ App.jsx = 15 total)
    ├── App.jsx             # Shell — tabbed component browser with 6 layout configurations
    ├── Avatar.jsx          # Avatar with status indicator (online/away/busy/offline) and initials fallback
    ├── BlogCard.jsx        # Cream card with image, date, title, excerpt, and tags
    ├── ChatMessage.jsx     # Message bubble (sent/received, avatar, timestamp, code variant)
    ├── ChatThread.jsx      # Scrollable message thread with typing indicator and empty state
    ├── CodeBlock.jsx       # Syntax-highlighted code block with macOS chrome and copy button
    ├── Composer.jsx        # Auto-resizing textarea with send button and keyboard support
    ├── Footer.jsx          # Dark footer with brand, social links, and copyright
    ├── Header.jsx          # Fixed glass header with logo, nav links, and rainbow border
    ├── Hero.jsx            # Starfield hero with SB icon, rainbow glow ring, and gradient tagline
    ├── Modal.jsx           # Overlay dialog with backdrop blur, close button, and click-outside
    ├── NavigationBar.jsx   # Bottom or top tab navigation with active indicator and safe-area support
    ├── Sidebar.jsx         # Charcoal sidebar with rainbow border, logo, and navigation links
    ├── StoryCard.jsx       # Dark elevated card with theme stripe, glass overlay, grain, and CTA
    ├── TextEditor.jsx      # Rich text editing surface with formatting toolbar and character count
    ├── Toast.jsx           # Status notification with auto-dismiss, stacking, and type-colored borders
    └── Toolbar.jsx         # Action toolbar with icon buttons, separators, and disabled states
```

The entry point `index.html` loads React 18, ReactDOM 18, Babel standalone, and `../../colors_and_type.css`, then loads each component JSX file from `components/` and mounts the composed `App` component into `#root`. Each JSX file exposes itself as `window.ComponentName`. Icons are inlined SVGs matching the lucide icon style — no external CDN dependency.

## Component files

| File | Role | Key features |
|------|------|-------------|
| `App.jsx` | Tabbed browser shell | 6 layout tabs: Dashboard, Chat, Data Table, Form, Editor, Cards Gallery |
| `Avatar.jsx` | Identity | Status indicator: online/away/busy/offline, initials fallback, sizes |
| `BlogCard.jsx` | Blog post card | Cream-light background, 16:9 thumbnail, hover lift, tag pills |
| `ChatMessage.jsx` | Message bubble | Sent/received alignment, avatar, timestamp, read status, code variant |
| `ChatThread.jsx` | Message list | Auto-scroll, typing indicator animation, empty state |
| `CodeBlock.jsx` | Content display | macOS window chrome, language label, copy button with feedback |
| `Composer.jsx` | Input | Auto-resize, Enter-to-send, Shift+Enter for newline, disabled state |
| `Footer.jsx` | Bottom of page | Black background, starfield, brand + social + copyright |
| `Header.jsx` | Fixed navigation | Glass background, rainbow border-bottom, hamburger on mobile |
| `Hero.jsx` | Top of page | Starfield background, SB icon with rainbow glow ring, gradient tagline |
| `Modal.jsx` | Overlay dialog | Backdrop blur, close button, click-outside-to-close, small/medium/large sizes |
| `NavigationBar.jsx` | Navigation | Bottom or top tabs, active indicator bar, safe-area padding |
| `Sidebar.jsx` | Navigation rail | Charcoal background with rainbow border, logo, nav links with active state |
| `StoryCard.jsx` | Dark elevated card | Theme-colored accent stripe (green/orange/red), glass overlay, grain texture, two-column layout, CTA button with glass+glow hover |
| `TextEditor.jsx` | Editing surface | Formatting toolbar, character count, placeholder, resizable |
| `Toast.jsx` | Feedback | Auto-dismiss timer, stacking, type-colored borders (info/success/warning/error) |
| `Toolbar.jsx` | Actions toolbar | Icon buttons, separators, active/disabled states, optional title |

Each file is a Babel-compatible JSX component that assigns itself to `window`:
```js
window.Avatar = Avatar;
```

## Usage workflow

1. **Open `index.html`** in a browser — it loads React 18, ReactDOM 18, Babel standalone, `../../colors_and_type.css`, all component JSX files from `components/`, and renders the composed App shell. Use the header tabs to switch between 6 layout configurations:
   - **Dashboard** — Sidebar + KPI cards + sortable activity table
   - **Chat** — ChatThread + ChatMessage + Composer with live conversation simulation
   - **Data Table** — Searchable, sortable, selectable table with pagination and bulk actions
   - **Form** — Settings page with text inputs, textarea, toggle switches, radio groups, toast notifications, and confirmation modal
   - **Editor** — TextEditor + CodeBlock with write/preview toggle and formatting toolbar
   - **Cards** — StoryCard and BlogCard galleries with filter tabs
2. **Copy component files** into your own project — each JSX file is self-contained and references design tokens through CSS custom properties.
3. **Use SuperBenefit tokens** — all components consume `var(--color-*)`, `var(--font-*)`, `var(--radius-*)`, `var(--shadow-*)`, and `var(--gradient-*)` from `../../colors_and_type.css`.
4. **Adapt for your framework** — components are plain React; remove the Babel script tag and use a build tool (Vite, Next.js, etc.) for production.
5. **Swap assets** — replace `../../assets/*` image references with your own brand images while keeping the token values.

## Design notes

Components follow shadcn/ui patterns themed with SuperBenefit brand tokens:

- **Focus states** — `:focus-visible` with orange ring (`box-shadow: 0 0 0 3px rgba(245, 135, 44, 0.15)`)
- **Hover states** — subtle lift (`translateY(-2px/-4px)`) with shadow elevation; row highlighting on data tables
- **Disabled states** — `opacity: 0.5` + `cursor: not-allowed` or `cursor: default`
- **Color system** — cream background (`#edddc8`), charcoal text (`#2d2d2d`), orange accent (`#f5872c`), with green (`#7a9a4e`), red (`#c4401a`), and gold (`#d4a843`) secondary accents
- **Typography** — Playfair Display for headings (serif, 700/900 weight), Inter for body (sans-serif, 400-700 weight), monospace for code/metadata
- **Cards** — two variants: light cream cards (12px radius, `--shadow-sm`, hover `translateY(-4px)`) and dark elevated StoryCards (20px radius, theme-colored accent stripe, grain texture)
- **Buttons** — primary (orange bg, cream text, pill/rounded shape, `translateY(-2px)` hover), ghost (transparent, border-only), and glass CTA (accent-tinted bg, accent border, glow on hover)
- **Data table** — sortable columns with chevron indicators, selectable rows, bulk action bar, pagination
- **Inputs & forms** — shadcn-inspired focus rings, toggle switches with slide animation, radio button groups with active highlight
- **Toasts & modals** — stacking notification system with auto-dismiss; overlay dialog with backdrop blur and click-outside-to-close
- **Tab navigation** — pill-style inline tab buttons in the header bar with icon + label, active/inactive states

## Source basis

Derived from two primary sources:

1. **SuperBenefit website** (`https://github.com/superbenefit/sb-website`) — Git-clone intake with 40 snapshot files under `context/github/superbenefit-sb-website/files/`. Provides the cream/charcoal/orange palette, Playfair Display + Inter typography, glass card patterns, scroll-driven CSS animations, and the hero/story-card/CTA/page-section layout vocabulary.

2. **shadcn/ui** (`https://ui.shadcn.com`) — Component architecture and interaction patterns. Accessible, composable primitives themed with SuperBenefit tokens. Provides the focus-ring contract, button/badge/avatar/input sizing conventions, data table patterns with sorting/pagination/selection, and overlay/dialog/tab patterns. Icons follow the lucide style (inline SVGs, no CDN dependency).
