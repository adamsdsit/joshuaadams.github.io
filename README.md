# Joshua Adams — Personal Website

This repository contains the source for the personal website and online resume for Joshua Adams. The site is served with GitHub Pages at https://joshuaadams.dev.

## Live site

- Primary: https://joshuaadams.dev
- Project site: https://adamsdsit.github.io/joshuaadams.github.io/

## Overview

Files of interest:

- `index.html` — main resume page (hero, summary, experience, skills, education, certifications, awards, contact)
- `resume.css` — primary styles for the modern resume UI
- `resume.js` — interactivity: theme toggle, smooth scrolling, reveal animations, skill bar animation
- `styles.css` — site-wide base styles used elsewhere
- `avatar.png` — headshot used in the hero (replace to update)
- `resume.pdf` — optional: place a PDF here for the Download button to work
- `projects.html` — projects list (if present)
- `teaching.html` — teaching/course list (if present)
- `CNAME` — contains the custom domain `joshuaadams.dev` for GitHub Pages
- `wiki/` — documentation pages in Markdown (Getting-Started, Customization, Deployment, Troubleshooting, Changelog)

## Local preview

Easiest way to preview locally (Python 3):

```bash
cd /path/to/repo
python3 -m http.server 9002
# open http://localhost:9002
```

Alternatively, use the `Makefile` targets below.

## Makefile (convenience)

- `make serve` — start a local static server on port `9002`
- `make serve PORT=8080` — start on custom port
- `make clean` — remove temporary server logs created by local testing (only used here)

## Contact form

The contact form in `index.html` is configured to use Formsubmit by default (no account required):

```
action="https://formsubmit.co/contact@joshuaadams.dev"
```

To use Formspree instead, create a form at https://formspree.io and replace the `action` with the Formspree endpoint (for example `https://formspree.io/f/yourFormId`).

## How to update content

- Edit `index.html` to update experience, education, certifications, contact info, and text.
- Update skill percentages in `index.html` within the `data-pct` attributes on `.bar span` elements.
- Change site colors in `resume.css` by editing the CSS variables near the top of the file.
- Replace `avatar.png` to update the headshot; recommended size: 140–300px square.

## Add a downloadable resume

Place a `resume.pdf` in the repository root and commit. The Download button will link to it automatically.

## Deployment

This repository uses GitHub Pages and a `CNAME` for `joshuaadams.dev`. After pushing to `main`, GitHub will (automatically) rebuild and serve the site. In your repo settings → Pages, verify the custom domain and enable `Enforce HTTPS`.

## Contributing

If you want changes reviewed before merging to `main`, please open a branch and create a pull request. For small tweaks, I can continue to push directly to `main` if you prefer.

## License

This repository contains personal content. Use of code examples is allowed for personal modifications; otherwise please request permission.
# joshuaadams.dev

> Personal academic portfolio, resume, blog and media gallery for Dr. Joshua Adams.

---

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
