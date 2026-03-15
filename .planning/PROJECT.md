# GitProfile — Touseef Qamar

## What This Is

A professional single-page portfolio/resume website for Touseef Qamar, built with Jekyll and hosted on GitHub Pages. It serves as a public profile targeting recruiters, potential collaborators, and clients — showcasing full-stack development, DevOps, and AI/robotics expertise across a polished, responsive design with dark/light theme toggle.

## Core Value

Visitors immediately understand Touseef's breadth (full-stack + DevOps + AI) and depth (production-grade projects, real work experience) — and can easily reach out or download a resume.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Single-page scrolling layout with smooth section navigation
- [ ] Jekyll-based site compatible with GitHub Pages
- [ ] Dark/light theme toggle with persistence
- [ ] Hero section: name, title ("Full-Stack Builder"), tagline, social links
- [ ] About section: bio, background (mechatronics → autonomous systems → full-stack)
- [ ] Skills section: visual tech stack display grouped by category
- [ ] Projects section: showcase 6 GitHub projects with descriptions, tech tags, and links
- [ ] Experience section: timeline of work history (SAP LeanIX, Uni Bonn, KELO Robotics, elancer-team, Fiverr)
- [ ] Education section within timeline (H-BRS Masters, University of Wah B.Sc.)
- [ ] Contact section: form (via Formspree or similar), email, social links
- [ ] Resume PDF download button
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Professional & polished visual design
- [ ] SEO basics (meta tags, Open Graph, proper headings)
- [ ] Fully populated with real content — not placeholders

### Out of Scope

- Blog / articles section — not requested, adds complexity
- Multi-page navigation — single-page confirmed
- CMS / admin panel — content is static, edited directly
- Analytics dashboard — can add Google Analytics later if wanted
- Backend API — pure static site
- Custom domain setup — can configure after v1

## Context

**Person:** Touseef Qamar, based in Bonn, Germany. Masters student in Autonomous Systems at Hochschule Bonn-Rhein-Sieg. Background in Mechatronics Engineering. Currently working as Data Research Analyst at SAP LeanIX and IT Admin at University of Bonn.

**Work history:**
- Data Research Analyst, SAP LeanIX (Jul 2023 – present) — automated data pipelines, built internal tools, migrated integrations
- IT Administrator, University of Bonn (Apr 2024 – present) — managing VMs, GitLab, internal infra
- Web Developer, KELO Robotics (Oct 2022 – Jun 2023) — redesigned website, custom WordPress themes
- Web Developer, elancer-team (Apr 2022 – Sep 2022) — built WordPress sites for clients
- Freelance Web Developer, Fiverr (Sep 2019 – Mar 2022) — 300+ clients, WordPress/Shopify sites

**Education:**
- M.Sc. Autonomous Systems, H-BRS (Oct 2022 – present)
- B.Sc. Mechatronics Engineering, University of Wah, Pakistan (2017 – 2021)

**GitHub projects to showcase:**
1. co-code — Real-time collaborative editor (React, Node.js, Socket.io)
2. k8s-hydra-chatbot — Kubernetes deployment with self-healing replicas (Python)
3. mlops-drift-monitor — AI model drift detection via Prometheus/Grafana (Python)
4. kanban-app — Full-stack task management, PERN stack + Docker (JavaScript)
5. flagship — Self-hosted feature flag platform with React dashboard (JavaScript)
6. preview-orchestrator — Automated PR preview environments (JavaScript)

**Skills/Tech:**
- Languages: Python, C++, Java, JavaScript, PHP, SQL, HTML/CSS
- DevOps: Kubernetes, Docker, Traefik, GitHub Actions, CI/CD
- Backend: Node.js (Express), Flask, WordPress
- Frontend: React, HTML5, CSS3
- AI/ML: Scikit-learn, TextBlob, MLOps monitoring
- CMS: WordPress, Shopify
- Languages spoken: Urdu (native), English (C1), German (B1)

**Repo:** github.com/TouseefQ/touseefq.github.io — serves via GitHub Pages at touseefq.github.io

## Constraints

- **Hosting**: GitHub Pages — must be static, no server-side processing
- **Framework**: Jekyll — GitHub Pages native support, no custom build pipeline needed
- **Content**: All real data — no placeholders in v1
- **Contact form**: Needs a third-party service (Formspree, Getform, etc.) since no backend
- **Resume PDF**: Must be included in the repo for download

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Jekyll over plain HTML | GitHub Pages native support, layouts/includes for maintainability | — Pending |
| Single-page over multi-page | Simpler UX, all content visible in one scroll, common for portfolios | — Pending |
| Dark/light toggle | Appeals to both dev and corporate audiences | — Pending |
| Formspree for contact form | Free tier, no backend needed, works with static sites | — Pending |

---
*Last updated: 2026-03-15 after initialization*
