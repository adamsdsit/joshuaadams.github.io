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
