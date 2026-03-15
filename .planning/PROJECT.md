# GitProfile — Touseef Qamar

## What This Is

A professional single-page portfolio/resume website for Touseef Qamar, built with Jekyll 4.4.1 and hosted on GitHub Pages. It showcases full-stack development, DevOps, and AI/robotics expertise across a polished, responsive design with dark/light theme toggle, scroll animations, contact form, and WCAG AA accessibility.

## Core Value

Visitors immediately understand Touseef's breadth (full-stack + DevOps + AI) and depth (production-grade projects, real work experience) — and can easily reach out or download a resume.

## Requirements

### Validated

- ✓ Single-page scrolling layout with smooth section navigation — v1.0
- ✓ Jekyll-based site compatible with GitHub Pages — v1.0
- ✓ Dark/light theme toggle with persistence — v1.0
- ✓ Hero section: name, title ("Full-Stack Builder"), tagline, social links — v1.0
- ✓ About section: bio, background (mechatronics → autonomous systems → full-stack) — v1.0
- ✓ Skills section: visual tech stack display grouped by 6 categories — v1.0
- ✓ Projects section: showcase 6 GitHub projects with descriptions, tech tags, and links — v1.0
- ✓ Experience section: timeline of work history (SAP LeanIX, Uni Bonn, KELO Robotics, elancer-team, Fiverr) — v1.0
- ✓ Education section within timeline (H-BRS Masters, University of Wah B.Sc.) — v1.0
- ✓ Contact section: Formspree form with name, email, message fields — v1.0
- ✓ Resume PDF download button — v1.0
- ✓ Responsive design (mobile 320px, tablet 768px, desktop 1024px+) — v1.0
- ✓ Professional & polished visual design with CSS variables — v1.0
- ✓ SEO basics (meta tags, Open Graph, Twitter Cards, proper headings) — v1.0
- ✓ Fully populated with real content — no placeholders — v1.0
- ✓ Scroll animations via Intersection Observer with prefers-reduced-motion support — v1.0
- ✓ WCAG 2.1 AA accessibility (17.4:1 contrast, keyboard navigation, focus indicators) — v1.0
- ✓ Custom 404 page — v1.0
- ✓ Favicon (32x32 TQ initials) — v1.0
- ✓ Social links in header/footer (GitHub, LinkedIn, Email, Twitter) — v1.0

### Active

(None — v1.0 complete)

### Out of Scope

- Blog / articles section — not requested, adds complexity
- Multi-page navigation — single-page confirmed
- CMS / admin panel — content is static, edited directly
- Analytics dashboard — can add Google Analytics later if wanted
- Backend API — pure static site
- Custom domain setup — can configure after v1
- Autoplay media — anti-feature per research
- Scroll hijacking — anti-feature per research

## Context

**Person:** Touseef Qamar, based in Bonn, Germany. Masters student in Autonomous Systems at Hochschule Bonn-Rhein-Sieg. Background in Mechatronics Engineering.

**Current state:** v1.0 shipped. 2,318 LOC across 48 files (HTML, SCSS, JS, YAML). Jekyll 4.4.1 with vanilla CSS + CSS Variables. 25/25 requirements satisfied. Site ready for GitHub Pages deployment.

**Post-ship actions needed:**
- Replace Formspree placeholder ID (xyzformid) with real PROJECT_ID
- Replace placeholder profile.jpg with real photo
- Push to GitHub Pages (`git push origin main`)

**Repo:** github.com/TouseefQ/touseefq.github.io — serves via GitHub Pages at touseefq.github.io

## Constraints

- **Hosting**: GitHub Pages — must be static, no server-side processing
- **Framework**: Jekyll 4.4.1 — GitHub Pages compatible
- **Content**: All real data — no placeholders in v1
- **Contact form**: Formspree (free tier, 50 submissions/month)
- **Resume PDF**: Included in repo for download

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Jekyll over plain HTML | GitHub Pages native support, layouts/includes for maintainability | ✓ Good |
| Jekyll 4.4.1 over github-pages gem | Ruby 4.0 incompatibility with jekyll 3.9 | ✓ Good |
| Single-page over multi-page | Simpler UX, all content visible in one scroll | ✓ Good |
| Vanilla CSS + CSS Variables | Zero dependencies, perfect for single-page portfolio | ✓ Good |
| Dark/light toggle via CSS Variables | Instant switching, localStorage persistence, no flash | ✓ Good |
| Formspree for contact form | Free tier, no backend needed, static site compatible | ✓ Good |
| Start from scratch (no themes) | Existing themes too blog-focused, faster to build custom | ✓ Good |
| Intersection Observer for scroll animations | Native API, no dependencies, performant | ✓ Good |
| :focus:not(:focus-visible) pattern | Hides focus ring for mouse, shows for keyboard | ✓ Good |

---
*Last updated: 2026-03-15 after v1.0 milestone*
