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

## CI Status

[![Deploy Next.js to GitHub Pages](https://github.com/adamsdsit/joshuaadams.github.io/actions/workflows/pages.yml/badge.svg)](https://github.com/adamsdsit/joshuaadams.github.io/actions/workflows/pages.yml)
[![Accessibility](https://github.com/adamsdsit/joshuaadams.github.io/actions/workflows/a11y.yml/badge.svg)](https://github.com/adamsdsit/joshuaadams.github.io/actions/workflows/a11y.yml)
[![Lighthouse](https://github.com/adamsdsit/joshuaadams.github.io/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/adamsdsit/joshuaadams.github.io/actions/workflows/lighthouse.yml)

## Troubleshooting

- **Pages not updating:**
  - Confirm GitHub → Settings → Pages → Source is set to "GitHub Actions".
  - Check the workflow run in Actions; ensure the "Upload artifact" and "Deploy to GitHub Pages" steps succeeded.
  - Verify `CNAME` exists in the repo root and is copied into `next-site/out` during the workflow.
  - Ensure `.nojekyll` is present so Pages serves files under `out/` correctly.

- **404s on internal routes or refresh:**
  - `next export` outputs static files only. Keep `trailingSlash: true` so directories export with `index.html`.
  - Avoid server-only features (SSR/ISR/API). Use static pages under `src/app/.../page.tsx`.
  - For nested pages, ensure each route has a `page.tsx` (e.g., `src/app/teaching/page.tsx`).

- **Images not loading:**
  - `images.unoptimized` is enabled for export; place assets in `next-site/public` and reference as `/asset.png`.
  - Avoid external `http:` images; use `https:` to prevent mixed-content blocking on Pages.

- **Custom domain not applied:**
  - Confirm `CNAME` contains `joshuaadams.dev` and is committed to the repository.
  - In GitHub → Settings → Pages, set the Custom domain to `joshuaadams.dev` and verify DNS is correctly configured.

- **Build failures (Actions):**
  - Ensure Node 20+ is used (handled by `actions/setup-node@v4`).
  - Missing dependencies: check `next-site/package.json`; the workflow runs `npm ci || npm install`.
  - Path issues: confirm the build steps run in `working-directory: next-site` in the workflow.

- **Contact form not sending:**
  - For Formsubmit, verify the `action` email address and test with a simple message.
  - Consider Formspree for more robust handling and dashboards.

## Quality Checks (A11y & Performance)

You can run accessibility and performance checks in CI (no local Chrome required):

- Accessibility: the `Accessibility` workflow runs Pa11y on `https://joshuaadams.dev` and uploads a text report.
- Performance: the `Lighthouse` workflow runs Lighthouse and uploads an HTML report as an artifact.

Trigger them manually from the Actions tab (Run workflow), or wait for a push to `main`.

Local equivalents (if Chrome is installed):

```bash
cd next-site
npm run a11y
npm run lh
```

## Custom Domain DNS

To serve `joshuaadams.dev` from GitHub Pages:

- **CNAME file:** Ensure a `CNAME` file in the repo root contains exactly `joshuaadams.dev`.
- **GitHub Pages settings:** In GitHub → Settings → Pages, set the Custom domain to `joshuaadams.dev`.
- **DNS records:** Configure your DNS provider for either apex or subdomain:
  - Apex (`joshuaadams.dev`): Use `ALIAS`/`ANAME` to `adamsdsit.github.io` if your DNS supports it, or set A records to the GitHub Pages addresses as documented by GitHub.
  - Subdomain (`www.joshuaadams.dev`): Create a CNAME record pointing to `adamsdsit.github.io`.
- **Propagation:** DNS changes can take time to propagate; verify with `dig` and confirm the Pages deploy references your custom domain.

Quick checks:

```sh
dig +short joshuaadams.dev
dig +short www.joshuaadams.dev CNAME
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
