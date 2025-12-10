# Joshua Adams — Personal Website

## License

This repository contains personal content. Use of code examples is allowed for personal modifications; otherwise please request permission.

## Pages

- `index.html` — resume home (hero, summary, experience, skills, contact)
- `projects.html` — selected projects
- `teaching.html` — course cards with quick highlights
- `cloud-security-compliance.html` — full syllabus for COM 4XX (Cloud Security & Compliance)

## Teaching layout

- Clean hero + responsive two-column card grid (single column on mobile)
- Each course lists 3–4 concise bullet highlights to prevent crowding
- Full syllabi are linked from course cards where available

## Accessibility

- Skip link target on `#main-content`
- Mobile nav announces `aria-expanded` and supports Escape to close
- Section reveal animations respect IntersectionObserver thresholds

## Deployment checks

To verify a deploy after pushing to `main`:

```bash
curl -sS -o /dev/null -w "Site: %{http_code}\n" https://joshuaadams.dev
curl -sS https://joshuaadams.dev/teaching.html | sed -n '1,80p'
```

Alternatively, use the `Makefile` targets below.

## Next.js app (GitHub Pages)

This repo includes a modern Next.js site in `next-site` that deploys to GitHub Pages via Actions (no Vercel required).

- `next-site/next.config.ts` sets `output: 'export'`, `images.unoptimized`, and `trailingSlash` for static export.
- Workflow: `.github/workflows/pages.yml` builds the app, runs `next export`, adds `CNAME` and `.nojekyll`, and deploys to Pages.
- Custom domain: `CNAME` at repo root contains `joshuaadams.dev`.

### Run locally

```bash
cd next-site
npm install
npm run dev
```

Visit `http://localhost:3000`. To produce a static build:

```bash
npm run build
npm run export
open out/index.html
```

### Deploy via GitHub Actions

The `pages.yml` workflow triggers on pushes to `main`:

1. Checks out the repo and sets up Node 20.
2. Installs dependencies in `next-site/` (using `npm ci` if lockfile exists).
3. Builds (`next build`) and exports static files (`next export`) into `next-site/out`.
4. Copies `CNAME` into `out`, touches `.nojekyll`, uploads artifact.
5. Deploys to GitHub Pages with `actions/deploy-pages`.

Enable Pages in GitHub → Settings → Pages → Build and deployment → Source: "GitHub Actions".

### Notes & limitations

- Static export (`next export`) does not support server-only features (API routes, SSR/ISR). Client-side pages, assets, and forms work.
- Image optimization is disabled during export; use standard `<img>` or Next Image with `unoptimized`.
- Trailing slashes ensure directories export as `index.html` for Pages compatibility.
- Contact form uses Formsubmit/Formspree; no backend needed.

### Updating the site

- Edit React pages/components under `next-site/src/`.
- Commit to `main`; the workflow will rebuild and redeploy automatically.
- Verify after deploy:

```bash
curl -sS -o /dev/null -w "https://joshuaadams.dev: %{http_code}\n" https://joshuaadams.dev
```

## Makefile (convenience)

- `make serve` — start a local static server on port `9002`
- `make serve PORT=8080` — start on custom port
- `make clean` — remove temporary server logs created by local testing (only used here)

## Contact form

The contact form in `index.html` is configured to use Formsubmit by default (no account required):

```text
action="https://formsubmit.co/contact@joshuaadams.dev"
```


## 🚀 Overview

This is a **static-site** powered by a simple Python + Jinja2 generator and deployed to GitHub Pages. It supports:

- **Resume & CV** — modern, responsive “cards” layout  
- **Research & Publications** — academic listings  
- **Teaching** — syllabi, philosophy, timelines  
- **Business Continuity** — professional experience  
- **Projects** — case studies  
- **Hobbies** — photo/video gallery  
- **Blog** — Markdown-based posts  
- **Multi-language** — English + 日本語  
- **Dark/Light mode** toggle  

All site-wide settings, nav links and per-page metadata live in `content/site_data.json`; the rest is pure Jinja2 templates + CSS/JS.

---

## 📁 Repo Structure
