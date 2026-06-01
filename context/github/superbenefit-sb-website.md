# GitHub Design Evidence: superbenefit/sb-website

Source: https://github.com/superbenefit/sb-website
Read method: git-clone
Local clone method: git clone
Ref: default branch
Repository paths discovered: 52
Snapshot files written: 40

## Intake Status

- This-device intake was used through local git or GitHub CLI.

## README (README.md)

```md
# SuperBenefit Website

Public website for [SuperBenefit](https://superbenefit.org) — a community exploring governance, DAOs, and systems innovation.

## Stack

- [Astro 5](https://astro.build) — static + SSR hybrid rendering
- [@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) — Cloudflare Workers adapter
- [Wrangler 4](https://developers.cloudflare.com/workers/wrangler/) — local dev and deployment
- TypeScript (strict)

## Prerequisites

- Node.js ≥ 22
- npm ≥ 10

## Setup

```bash
npm install
cp .env.example .env   # then edit as needed
```

## Development

```bash
npm run dev      # start Astro dev server on localhost:4321
npm run check    # run TypeScript type-check (astro check)
```

> **Note:** Run `npm run dev` in a dedicated terminal — the process holds stdin and can cause shells to appear unresponsive if mixed with other commands.

## Build & Deploy

```bash
npm run build    # compile to dist/
npm run deploy   # build + wrangler deploy to Cloudflare Workers
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `KNOWLEDGE_API_URL` | No | HTTPS endpoint for the SuperBenefit knowledge server. Omit to use bundled mock data. |

See `.env.example` for a template.

## Project Structure

```
src/
  assets/         # Images imported by Astro (processed at build time)
  components/     # Reusable Astro components
  content/        # Local content collections (blog markdown, etc.)
  data/           # Static JSON mock data (used when API is unavailable)
  layouts/        # Page layout wrappers (BaseLayout.astro)
  loaders/        # Custom Astro content loaders (knowledge server, projects)
  pages/          # File-based routes
  styles/         # Global CSS, design tokens, animations
public/
  _headers        # Cloudflare-served HTTP response headers (CSP, HSTS, etc.)
  images/         # Static images served as-is
  robots.txt
wrangler.jsonc    # Cloudflare Workers configuration
astro.config.mjs  # Astro configuration
```

## Architecture Notes

**Rendering strategy** — `output: 'server'` with per-page `export const prerender = true` on static pages. Dynamic routes (blog slug, project slug) run on the Worker edge.

**Content loaders** — `src/loaders/knowledge-server.ts` and `src/loaders/projects.ts` fetch from the SuperBenefit knowledge API at build time. If `KNOWLEDGE_API_URL` is unset or the
...
```

## Source Evidence Inventory

### Product docs and manifests

Use these to understand product purpose, dependency stack, scripts, and public naming.

- package.json -> `context/github/superbenefit-sb-website/files/package.json` (source)

### Brand assets and icons

Preserve source build/runtime paths: files under `build/` should be copied back into root `build/` with their original filenames, while non-build logos, avatars, or wordmarks can be copied into `assets/`. Reflect the preserved files in `preview/brand-assets.html`.

- public/favicon.svg -> `context/github/superbenefit-sb-website/files/public/favicon.svg` (source)
- public/images/brand-showcase.webp -> `context/github/superbenefit-sb-website/files/public/images/brand-showcase.webp` (binary asset)
- public/images/sb-icon.jpg -> `context/github/superbenefit-sb-website/files/public/images/sb-icon.jpg` (binary asset)
- public/images/superbenefit-logo.webp -> `context/github/superbenefit-sb-website/files/public/images/superbenefit-logo.webp` (binary asset)

### Theme, tokens, and styling

Extract concrete color, typography, spacing, radius, shadow, and theme-variable values from these files.

- src/styles/global.css -> `context/github/superbenefit-sb-website/files/src/styles/global.css` (source)
- src/styles/animations.css -> `context/github/superbenefit-sb-website/files/src/styles/animations.css` (source)
- src/utils/sanitize.ts -> `context/github/superbenefit-sb-website/files/src/utils/sanitize.ts` (source)

### Reusable components

Use these to derive buttons, inputs, cards, dialogs, avatars, selectors, menus, and feedback states.

- src/components/BlogCard.astro -> `context/github/superbenefit-sb-website/files/src/components/BlogCard.astro` (source)
- src/components/BlogList.astro -> `context/github/superbenefit-sb-website/files/src/components/BlogList.astro` (source)
- src/components/CallToAction.astro -> `context/github/superbenefit-sb-website/files/src/components/CallToAction.astro` (source)
- src/components/CardsStage.astro -> `context/github/superbenefit-sb-website/files/src/components/CardsStage.astro` (source)
- src/components/Footer.astro -> `context/github/superbenefit-sb-website/files/src/components/Footer.astro` (source)
- src/components/Header.astro -> `context/github/superbenefit-sb-website/files/src/components/Header.astro` (source)
- src/components/Hero.astro -> `context/github/superbenefit-sb-website/files/src/components/Hero.astro` (source)
- src/components/MissionStatement.astro -> `context/github/superbenefit-sb-website/files/src/components/MissionStatement.astro` (source)
- src/components/Nav.astro -> `context/github/superbenefit-sb-website/files/src/components/Nav.astro` (source)
- src/components/SectionDivider.astro -> `context/github/superbenefit-sb-website/files/src/components/SectionDivider.astro` (source)
- src/components/SEO.astro -> `context/github/superbenefit-sb-website/files/src/components/SEO.astro` (source)
- src/components/StorySection.astro -> `context/github/superbenefit-sb-website/files/src/components/StorySection.astro` (source)

### Other design evidence

Inspect these only after the primary design evidence above has been used.

- src/layouts/BaseLayout.astro -> `context/github/superbenefit-sb-website/files/src/layouts/BaseLayout.astro` (source)
- src/pages/404.astro -> `context/github/superbenefit-sb-website/files/src/pages/404.astro` (source)
- src/pages/500.astro -> `context/github/superbenefit-sb-website/files/src/pages/500.astro` (source)
- src/pages/about.astro -> `context/github/superbenefit-sb-website/files/src/pages/about.astro` (source)
- src/pages/blog/[...page].astro -> `context/github/superbenefit-sb-website/files/src/pages/blog/...page-.astro` (source)
- src/pages/blog/[...slug].astro -> `context/github/superbenefit-sb-website/files/src/pages/blog/...slug-.astro` (source)
- src/pages/index.astro -> `context/github/superbenefit-sb-website/files/src/pages/index.astro` (source)
- .claude/settings.json -> `context/github/superbenefit-sb-website/files/.claude/settings.json` (source)
- .claude/skills/deploy/SKILL.md -> `context/github/superbenefit-sb-website/files/.claude/skills/deploy/SKILL.md` (source)
- .claude/skills/new-page/SKILL.md -> `context/github/superbenefit-sb-website/files/.claude/skills/new-page/SKILL.md` (source)
- .mcp.json -> `context/github/superbenefit-sb-website/files/.mcp.json` (source)
- AGENTS.md -> `context/github/superbenefit-sb-website/files/AGENTS.md` (source)
- CLAUDE.md -> `context/github/superbenefit-sb-website/files/CLAUDE.md` (source)
- src/content.config.ts -> `context/github/superbenefit-sb-website/files/src/content.config.ts` (source)
- src/data/mock-posts.json -> `context/github/superbenefit-sb-website/files/src/data/mock-posts.json` (source)
- src/data/mock-projects.json -> `context/github/superbenefit-sb-website/files/src/data/mock-projects.json` (source)
- src/env.d.ts -> `context/github/superbenefit-sb-website/files/src/env.d.ts` (source)
- src/loaders/knowledge-server.ts -> `context/github/superbenefit-sb-website/files/src/loaders/knowledge-server.ts` (source)
- src/loaders/projects.ts -> `context/github/superbenefit-sb-website/files/src/loaders/projects.ts` (source)
- tsconfig.json -> `context/github/superbenefit-sb-website/files/tsconfig.json` (source)


## Files Inspected

- src/styles/global.css -> `context/github/superbenefit-sb-website/files/src/styles/global.css` (4703 bytes, git-clone)
- public/favicon.svg -> `context/github/superbenefit-sb-website/files/public/favicon.svg` (548 bytes, git-clone)
- public/images/brand-showcase.webp -> `context/github/superbenefit-sb-website/files/public/images/brand-showcase.webp` (128240 bytes, git-clone, binary asset)
- public/images/sb-icon.jpg -> `context/github/superbenefit-sb-website/files/public/images/sb-icon.jpg` (43660 bytes, git-clone, binary asset)
- public/images/superbenefit-logo.webp -> `context/github/superbenefit-sb-website/files/public/images/superbenefit-logo.webp` (24426 bytes, git-clone, binary asset)
- package.json -> `context/github/superbenefit-sb-website/files/package.json` (565 bytes, git-clone)
- src/components/BlogCard.astro -> `context/github/superbenefit-sb-website/files/src/components/BlogCard.astro` (2764 bytes, git-clone)
- src/components/BlogList.astro -> `context/github/superbenefit-sb-website/files/src/components/BlogList.astro` (1230 bytes, git-clone)
- src/components/CallToAction.astro -> `context/github/superbenefit-sb-website/files/src/components/CallToAction.astro` (2399 bytes, git-clone)
- src/components/CardsStage.astro -> `context/github/superbenefit-sb-website/files/src/components/CardsStage.astro` (2070 bytes, git-clone)
- src/components/Footer.astro -> `context/github/superbenefit-sb-website/files/src/components/Footer.astro` (7183 bytes, git-clone)
- src/components/Header.astro -> `context/github/superbenefit-sb-website/files/src/components/Header.astro` (3211 bytes, git-clone)
- src/components/Hero.astro -> `context/github/superbenefit-sb-website/files/src/components/Hero.astro` (5511 bytes, git-clone)
- src/components/MissionStatement.astro -> `context/github/superbenefit-sb-website/files/src/components/MissionStatement.astro` (2770 bytes, git-clone)
- src/components/Nav.astro -> `context/github/superbenefit-sb-website/files/src/components/Nav.astro` (2430 bytes, git-clone)
- src/components/SectionDivider.astro -> `context/github/superbenefit-sb-website/files/src/components/SectionDivider.astro` (1043 bytes, git-clone)
- src/components/SEO.astro -> `context/github/superbenefit-sb-website/files/src/components/SEO.astro` (2308 bytes, git-clone)
- src/components/StorySection.astro -> `context/github/superbenefit-sb-website/files/src/components/StorySection.astro` (17936 bytes, git-clone)
- src/styles/animations.css -> `context/github/superbenefit-sb-website/files/src/styles/animations.css` (3531 bytes, git-clone)
- src/utils/sanitize.ts -> `context/github/superbenefit-sb-website/files/src/utils/sanitize.ts` (1482 bytes, git-clone)
- src/layouts/BaseLayout.astro -> `context/github/superbenefit-sb-website/files/src/layouts/BaseLayout.astro` (1813 bytes, git-clone)
- src/pages/404.astro -> `context/github/superbenefit-sb-website/files/src/pages/404.astro` (2346 bytes, git-clone)
- src/pages/500.astro -> `context/github/superbenefit-sb-website/files/src/pages/500.astro` (2346 bytes, git-clone)
- src/pages/about.astro -> `context/github/superbenefit-sb-website/files/src/pages/about.astro` (9011 bytes, git-clone)
- src/pages/blog/[...page].astro -> `context/github/superbenefit-sb-website/files/src/pages/blog/...page-.astro` (3553 bytes, git-clone)
- src/pages/blog/[...slug].astro -> `context/github/superbenefit-sb-website/files/src/pages/blog/...slug-.astro` (3441 bytes, git-clone)
- src/pages/index.astro -> `context/github/superbenefit-sb-website/files/src/pages/index.astro` (5324 bytes, git-clone)
- .claude/settings.json -> `context/github/superbenefit-sb-website/files/.claude/settings.json` (523 bytes, git-clone)
- .claude/skills/deploy/SKILL.md -> `context/github/superbenefit-sb-website/files/.claude/skills/deploy/SKILL.md` (595 bytes, git-clone)
- .claude/skills/new-page/SKILL.md -> `context/github/superbenefit-sb-website/files/.claude/skills/new-page/SKILL.md` (2102 bytes, git-clone)
- .mcp.json -> `context/github/superbenefit-sb-website/files/.mcp.json` (248 bytes, git-clone)
- AGENTS.md -> `context/github/superbenefit-sb-website/files/AGENTS.md` (4552 bytes, git-clone)
- CLAUDE.md -> `context/github/superbenefit-sb-website/files/CLAUDE.md` (118 bytes, git-clone)
- src/content.config.ts -> `context/github/superbenefit-sb-website/files/src/content.config.ts` (902 bytes, git-clone)
- src/data/mock-posts.json -> `context/github/superbenefit-sb-website/files/src/data/mock-posts.json` (8519 bytes, git-clone)
- src/data/mock-projects.json -> `context/github/superbenefit-sb-website/files/src/data/mock-projects.json` (1941 bytes, git-clone)
- src/env.d.ts -> `context/github/superbenefit-sb-website/files/src/env.d.ts` (85 bytes, git-clone)
- src/loaders/knowledge-server.ts -> `context/github/superbenefit-sb-website/files/src/loaders/knowledge-server.ts` (3092 bytes, git-clone)
- src/loaders/projects.ts -> `context/github/superbenefit-sb-website/files/src/loaders/projects.ts` (3148 bytes, git-clone)
- tsconfig.json -> `context/github/superbenefit-sb-website/files/tsconfig.json` (387 bytes, git-clone)

## Binary Assets Preserved

- public/images/brand-showcase.webp -> `context/github/superbenefit-sb-website/files/public/images/brand-showcase.webp`
- public/images/sb-icon.jpg -> `context/github/superbenefit-sb-website/files/public/images/sb-icon.jpg`
- public/images/superbenefit-logo.webp -> `context/github/superbenefit-sb-website/files/public/images/superbenefit-logo.webp`

## Design-Relevant Excerpts

### src/styles/global.css

```css
/* ===== DESIGN TOKENS ===== */

:root {
  /* Brand Colors — from SB_Palette.png */
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

  /* Gradients */
  --gradient-rainbow: conic-gradient(
    from 180deg,
    var(--color-gold),
    var(--color-orange),
    var(--color-red),
    var(--color-green),
    var(--color-gold)
  );
  --gradient-warm: linear-gradient(135deg, var(--color-orange), var(--color-red), var(--color-gold));

  /* Typography — references Astro experimental fonts CSS variables */
  --font-serif: var(--font-playfair);
  --font-sans: var(--font-inter);

  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.75vw, 1.375rem);
  --text-xl: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
  --text-2xl: clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --text-3xl: clamp(2.5rem, 1.8rem + 3.5vw, 4.5rem);
  --text-hero: clamp(3rem, 2rem + 5vw, 6rem);

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 8rem;

  /* Layout */
  --max-width: 1200px;
  --header-height: 4rem;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-medium: 300ms ease;
  --transition-slow: 600ms ease-out;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.2);
  --shadow-glow: 0 0 20px rgba(245, 135, 44, 0.3);
}

/* ===== RESET ===== */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-charcoal);
  background-color: var(--color-cream);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-orange);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: v
...
```

### public/favicon.svg

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F5872C"/>
      <stop offset="50%" style="stop-color:#C4401A"/>
      <stop offset="100%" style="stop-color:#D4A843"/>
    </linearGradient>
  </defs>
  <circle cx="16" cy="16" r="15" fill="#1A1A1A" stroke="url(#g)" stroke-width="2"/>
  <text x="16" y="21" text-anchor="middle" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#EDDDC8">S</text>
</svg>

```

### package.json

```json
{
  "name": "sb-website",
  "type": "module",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "check": "astro check",
    "build": "astro build",
    "preview": "astro preview",
    "deploy": "astro build && wrangler deploy",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.7",
    "@astrojs/cloudflare": "^13.1.1",
    "@astrojs/sitemap": "^3.7.1",
    "astro": "^6.0.4"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "wrangler": "^4.73.0"
  },
  "engines": {
    "node": ">=22.0.0"
  }
}

```

### src/components/BlogCard.astro

```
---
interface Props {
  id: string;
  title: string;
  excerpt?: string;
  publishedAt: Date;
  tags: string[];
  coverImage?: string;
}

const { id, title, excerpt, publishedAt, tags, coverImage } = Astro.props;

const formattedDate = publishedAt.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
---

<article class="blog-card" transition:name={`blog-${id}`}>
  <a href={`/blog/${id}`} class="card-link">
    {coverImage && (
      <div class="card-image">
        <img src={coverImage} alt={title} loading="lazy" />
      </div>
    )}
    <div class="card-body">
      <time datetime={publishedAt.toISOString()}>{formattedDate}</time>
      <h3>{title}</h3>
      {excerpt && <p class="card-excerpt">{excerpt}</p>}
      {tags.length > 0 && (
        <div class="card-tags">
          {tags.map((tag) => (
            <span class="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  </a>
</article>

<style>
  .blog-card {
    background: var(--color-cream-light);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition:
      transform var(--transition-medium),
      box-shadow var(--transition-medium);
    border-left: 3px solid transparent;
  }

  .blog-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-left-color: var(--color-orange);
  }

  .card-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .card-image {
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }

  .blog-card:hover .card-image img {
    transform: scale(1.04);
  }

  .card-body {
    padding: var(--space-lg);
  }

  .card-body time {
    display: block;
    font-size: var(--text-xs);
    color: var(--color-orange);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-block-end: var(--space-xs);
  }

  .card-body h3 {
    font-size: var(--text-lg);
    color: var(--color-charcoal);
    margin-block-end: var(--space-sm);
    line-height: 1.3;
  }

  .card-excerpt {
    font-size: var(--text-sm);
    color: var(--color-charcoal);
    opacity: 0.7;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hi
...
```

### src/components/BlogList.astro

```
---
interface Post {
  id: string;
  data: {
    title: string;
    excerpt?: string;
    publishedAt: Date;
    tags: string[];
    coverImage?: string;
  };
}

interface Props {
  posts: Post[];
}

import BlogCard from './BlogCard.astro';

const { posts } = Astro.props;
---

{posts.length > 0 ? (
  <div class="blog-grid">
    {posts.map((post) => (
      <BlogCard
        id={post.id}
        title={post.data.title}
        excerpt={post.data.excerpt}
        publishedAt={post.data.publishedAt}
        tags={post.data.tags}
        coverImage={post.data.coverImage}
      />
    ))}
  </div>
) : (
  <div class="blog-empty">
    <p>No posts yet. Check back soon for insights on governance, DAOs, and systems innovation.</p>
  </div>
)}

<style>
  .blog-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  @media (min-width: 640px) {
    .blog-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .blog-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .blog-empty {
    text-align: center;
    padding-block: var(--space-2xl);
    color: var(--color-charcoal);
    opacity: 0.6;
    font-size: var(--text-lg);
  }
</style>

```

### src/components/CallToAction.astro

```
---

---

<section class="cta">
  <div class="container cta-inner" data-animate="fade-up">
    <h2>Pull Up a Chair</h2>
    <p>
      If our work resonates, we warmly invite you to connect.
    </p>
    <div class="cta-buttons">
      <a href="https://discord.gg/q95fFXGu67" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
        Join Discord
      </a>
      <a href="https://knowledge.superbenefit.dev" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">
        Explore the Knowledge Garden
      </a>
    </div>
  </div>
</section>

<style>
  .cta {
    background: var(--color-orange);
    padding-block: 140px var(--space-2xl);
    position: relative;
    overflow: hidden;
  }

  .cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(196, 64, 26, 0.3), transparent 60%),
      radial-gradient(ellipse at 80% 30%, rgba(212, 168, 67, 0.2), transparent 50%);
    pointer-events: none;
  }

  .cta-inner {
    position: relative;
    text-align: center;
    max-width: 640px;
  }

  .cta h2 {
    color: var(--color-cream);
    font-size: var(--text-3xl);
    margin-block-end: var(--space-md);
  }

  .cta p {
    color: var(--color-cream);
    opacity: 0.9;
    font-size: var(--text-lg);
    line-height: 1.7;
    margin-block-end: var(--space-xl);
    margin-inline: auto;
  }

  .cta-buttons {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9em 2em;
    border-radius: 50px;
    font-weight: 600;
    font-size: var(--text-base);
    letter-spacing: 0.02em;
    transition:
      transform var(--transition-fast),
      box-shadow var(--transition-fast),
      background-color var(--transition-fast);
    text-decoration: none;
  }

  .btn-primary {
    background: var(--color-charcoal);
    color: var(--color-cream);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
    color: var(--color-cream);
  }

  .btn-ghost {
    background: transparent;
    color: var(--color-cream);
    border: 2px solid var(--color-cream);
  }

  .btn-ghost:hover {
    background: var(--color-cream);
    color: var(--color-orange);
    transform: translateY(-2px);
  }
</style>

```

### src/components/CardsStage.astro

```
---
/**
 * CardsStage — dark charcoal wrapper for elevated story cards.
 *
 * Handles:
 * - Charcoal background with grain texture
 * - 48px gaps between child cards
 * - Overlap transition: first card extends 60px UP into the section above,
 *   last card extends 60px DOWN into the section below.
 *   A ::before pseudo covers only the area between those overlaps.
 */
---

<div class="cards-stage">
  <slot />
</div>

<style>
  .cards-stage {
    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding-inline: 48px;
  }

  /* Dark charcoal background — inset 60px from top/bottom so it doesn't
     bleed into the cream/orange sections the cards overlap into */
  .cards-stage::before {
    content: '';
    position: absolute;
    top: 60px;
    bottom: 60px;
    left: 0;
    right: 0;
    background: var(--color-charcoal);
    z-index: -2;
  }

  /* Grain texture over the charcoal background */
  .cards-stage::after {
    content: '';
    position: absolute;
    top: 60px;
    bottom: 60px;
    left: 0;
    right: 0;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    mix-blend-mode: overlay;
    pointer-events: none;
    z-index: -1;
  }

  /* First card overlaps UP into the section above */
  .cards-stage > :global(:first-child) {
    margin-top: -60px;
    position: relative;
    z-index: 3;
  }

  /* Last card overlaps DOWN into the section below */
  .cards-stage > :global(:last-child) {
    margin-bottom: -60px;
    position: relative;
    z-index: 3;
  }

  @media (max-width: 768px) {
    .cards-stage {
      gap: 32px;
      padding-inline: 16px;
    }
  }

  @media (max-width: 480px) {
    .cards-stage {
      padding-inline: 12px;
    }
  }
</style>

```

### src/components/Footer.astro

```
---
const year = new Date().getFullYear();
---

<footer class="site-footer">
  <div class="footer-stars"></div>
  <div class="container footer-inner">
    <div class="footer-left">
      <div class="footer-brand">
        <img src="/images/sb-icon.jpg" alt="" class="footer-icon" width="40" height="40" />
        <span class="footer-name">SuperBenefit</span>
        <div class="footer-social">
          <a href="https://discord.gg/q95fFXGu67" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
          </a>
          <a href="https://twitter.com/SuperBenefitDAO" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://github.com/superbenefit" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.36
...
```

### src/components/Header.astro

```
---
import Nav from './Nav.astro';

const currentPath = Astro.url.pathname;
---

<header class="site-header" transition:persist>
  <div class="header-inner">
    <a href="/" class="logo-link" aria-label="SuperBenefit home">
      <img src="/images/sb-icon.jpg" alt="" class="logo-icon" width="36" height="36" />
      <span class="logo-text">SuperBenefit</span>
    </a>
    <Nav currentPath={currentPath} />
    <button class="mobile-toggle" aria-label="Toggle menu" aria-expanded="false">
      <span class="hamburger"></span>
    </button>
  </div>
  <div class="header-rainbow"></div>
</header>

<script>
  document.addEventListener('astro:page-load', () => {
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
      document.body.classList.toggle('nav-open');
    });
  });
</script>

<style>
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    color: var(--color-cream);
    background-color: rgba(26, 26, 26, 0.8);
    backdrop-filter: blur(10px);
    /* Scroll-driven animation in animations.css will further solidify this */
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--header-height);
    max-width: var(--max-width);
    margin-inline: auto;
    padding-inline: var(--space-lg);
  }

  .logo-link {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--color-cream);
    font-weight: 700;
    font-size: var(--text-lg);
    text-decoration: none;
  }

  .logo-link:hover {
    color: var(--color-orange);
  }

  .logo-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
  }

  .logo-text {
    font-family: var(--font-serif);
    letter-spacing: -0.02em;
  }

  .header-rainbow {
    height: 2px;
    background: var(--gradient-rainbow);
  }

  .mobile-toggle {
    display: none;
    width: 36px;
    height: 36px;
    position: relative;
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--c
...
```

### src/components/Hero.astro

```
---

---

<section class="hero">
  <div class="starfield" aria-hidden="true">
    <div class="stars stars-sm"></div>
    <div class="stars stars-md"></div>
    <div class="stars stars-lg"></div>
  </div>

  <div class="hero-content">
    <div class="hero-icon-wrap">
      <div class="icon-glow" aria-hidden="true"></div>
      <img
        src="/images/sb-icon.jpg"
        alt="SuperBenefit"
        class="hero-icon"
        width="160"
        height="160"
        fetchpriority="high"
        loading="eager"
      />
    </div>

    <p class="hero-tagline">SuperBenefit</p>
    <p class="hero-subtitle">
      Let's make better faster, together.
    </p>
  </div>

  <div class="scroll-hint" aria-hidden="true">
    <span class="scroll-arrow">&#8595;</span>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--color-black);
    overflow: hidden;
    padding-block: var(--space-2xl);
  }

  /* ===== Starfield ===== */
  .starfield {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .stars {
    position: absolute;
    inset: 0;
  }

  .stars-sm {
    background:
      radial-gradient(1px 1px at 5% 15%, #fff, transparent),
      radial-gradient(1px 1px at 12% 42%, #fff, transparent),
      radial-gradient(1px 1px at 18% 78%, #fff, transparent),
      radial-gradient(1px 1px at 25% 8%, #fff, transparent),
      radial-gradient(1px 1px at 32% 55%, #fff, transparent),
      radial-gradient(1px 1px at 38% 92%, #fff, transparent),
      radial-gradient(1px 1px at 45% 25%, #fff, transparent),
      radial-gradient(1px 1px at 52% 68%, #fff, transparent),
      radial-gradient(1px 1px at 58% 3%, #fff, transparent),
      radial-gradient(1px 1px at 65% 48%, #fff, transparent),
      radial-gradient(1px 1px at 72% 82%, #fff, transparent),
      radial-gradient(1px 1px at 78% 18%, #fff, transparent),
      radial-gradient(1px 1px at 85% 62%, #fff, transparent),
      radial-gradient(1px 1px at 92% 35%, #fff, transparent),
      radial-gradient(1px 1px at 97% 88%, #fff, transparent);
    opacity: 0.5;
    animation: twinkle 4s ease-in-out infinite;
  }

  .stars-md {
    background:
      radial-gradient(1.5px 1.5px at 8% 35%, rgba(245,135,44,0.8), transparent),
      radial-gradient(1.5px 1.5px at 22% 6
...
```

### src/components/MissionStatement.astro

```
---

---

<section class="mission">
  <div class="container mission-inner">
    <span class="mission-label" data-animate="fade-up">Our Purpose</span>
    <h2 class="mission-heading" data-animate="fade-up">
      We're a community of practice using emerging technologies for systems transformation.
    </h2>
    <div class="mission-accent" aria-hidden="true"></div>
    <div class="mission-body-block" data-animate="fade-up">
      <p class="mission-body">
        SuperBenefit's mission is to develop the social and financial flywheels that enable the invention and acceleration of a better world; Strengthening capacities for systems innovation and supporting people to clarify pathways towards shared goals.
      </p>
      <p class="mission-body">
        Our work includes researching and incubating initiatives that harness emerging technologies and practices for decentralized coordination in pursuit of systems transformation.
      </p>
      <p class="mission-link">
        <a href="/about">Read more about our mission &rarr;</a>
      </p>
    </div>
  </div>
</section>

<style>
  .mission {
    background: linear-gradient(
      168deg,
      var(--color-cream) 0%,
      var(--color-cream-light) 50%,
      var(--color-cream) 100%
    );
    padding-block: var(--space-2xl) 140px;
    position: relative;
    overflow: hidden;
  }

  .mission-inner {
    position: relative;
  }

  .mission-label {
    display: inline-block;
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--color-orange);
    margin-block-end: var(--space-md);
  }

  .mission-heading {
    font-size: var(--text-2xl);
    color: var(--color-charcoal);
    line-height: 1.3;
    max-width: 860px;
    margin-block-end: var(--space-xl);
  }

  .mission-accent {
    width: 48px;
    height: 3px;
    background: var(--color-orange);
    border-radius: 2px;
    opacity: 0.5;
    margin-block-end: var(--space-xl);
    margin-left: auto;
  }

  .mission-body-block {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    max-width: 560px;
    margin-left: auto;
  }

  .mission-body {
    font-size: var(--text-base);
    color: var(--color-charcoal);
    opacity: 0.7;
    line-height: 1.75;
    margin: 0;
  }

  .mission-link {
    margin: 0;
  }

  .mission-link a {
    font-size: var(--text-sm);
    font-wei
...
```

### src/components/Nav.astro

```
---
interface Props {
  currentPath: string;
}

const { currentPath } = Astro.props;

const links = [
  { href: '/about', label: 'About' },
  { href: 'https://knowledge.superbenefit.dev', label: 'Knowledge' },
  { href: 'https://governance.superbenefit.dev', label: 'Governance' },
];
---

<nav class="site-nav" aria-label="Main navigation">
  <ul>
    {links.map(({ href, label }) => {
      const isExternal = href.startsWith('http');
      const isActive = !isExternal && (href === '/'
        ? currentPath === '/'
        : currentPath.startsWith(href));
      return (
        <li>
          <a
            href={href}
            class:list={['nav-link', { active: isActive }]}
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {label}
          </a>
        </li>
      );
    })}
  </ul>
</nav>

<style>
  .site-nav ul {
    display: flex;
    gap: var(--space-lg);
    list-style: none;
  }

  .nav-link {
    color: var(--color-cream);
    font-size: var(--text-sm);
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none;
    padding-block: var(--space-xs);
    position: relative;
    transition: color var(--transition-fast);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--color-orange);
    transform: scaleX(0);
    transition: transform var(--transition-medium);
    transform-origin: left;
  }

  .nav-link:hover {
    color: var(--color-orange);
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    transform: scaleX(1);
  }

  .nav-link.active {
    color: var(--color-orange);
  }

  @media (max-width: 768px) {
    .site-nav {
      position: fixed;
      top: var(--header-height);
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(26, 26, 26, 0.97);
      backdrop-filter: blur(16px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-medium), visibility var(--transition-medium);
    }

    .site-nav.is-open {
      opacity: 1;
      visibility: visible;
    }

    .site-nav ul {
      flex-direction: column;
      align-items: center;
      gap: var(--space-xl);
    }

    .nav-link {
      font-size: var(-
...
```


## Package Files Materialized

- `source_examples/src/utils/sanitize.ts`
- `source_examples/src/env.d.ts`
- `source_examples/src/loaders/projects.ts`

## Next Design-System Work

- Use these source paths and snapshots as evidence before writing `DESIGN.md`.
- Convert the inventory above into a Claude Design-style package: `README.md`, `SKILL.md`, `colors_and_type.css`, `preview/colors-*`, `preview/typography-specimens.html`, `preview/spacing-*`, `preview/components-*`, `preview/brand-assets.html`, `ui_kits/app/`, and preserved `assets/`, `build/`, or `fonts/` when evidence exists.
- `ui_kits/app/index.html` must be a browser-reviewable component entry: load `../../colors_and_type.css`, load or import at least three files from `ui_kits/app/components/`, and mount the composed UI through ReactDOM/Babel or compiled browser-ready JavaScript. Do not duplicate a static HTML mock when modular component files exist.
- `ui_kits/app/components/App.jsx` (or equivalent app shell) must compose source-backed role components such as Sidebar, AssistantsList, ChatArea, InputBar, and MessageBubble, not merely list their filenames.
- Claude-style UI-kit entry skeleton for direct JSX kits:
  - `<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>`
  - `<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>`
  - `<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>`
  - `<link rel="stylesheet" href="../../colors_and_type.css">`
  - `<div id="root"></div>`
  - Load role components from `components/*.jsx` with `<script type="text/babel" src="components/ComponentName.jsx"></script>`.
  - Mount with `const { App } = window; const root = ReactDOM.createRoot(document.getElementById("root")); root.render(<App />);`.
- Preserve at least three high-signal source examples outside `context/` under `source_examples/` when reusable component snapshots exist, so future agents can compare generated components against original source structure.
- When a captured asset path begins with `build/`, copy the snapshot back into a root `build/` path with its original filename, such as `context/.../files/build/icon.png` -> `build/icon.png`. Do not satisfy build/runtime icon evidence by only renaming those files into `assets/`.
- Make `preview/brand-assets.html` visibly load preserved asset files from `assets/` or `build/`; do not redraw captured logos/icons as inline placeholders.
- Extract concrete colors, typography, spacing, radius, component behavior, assets, and product tone only when supported by inspected files.
- If evidence is missing or ambiguous, mark that uncertainty instead of inventing tokens.
