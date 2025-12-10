# Getting Started — Preview Locally

Prerequisites:

- Python 3 (for a simple static server) or any static server (Node `http-server`, `live-server`, etc.).
- A browser.

Steps to preview locally:

1. Open a terminal in the project root:

```bash
cd /Users/dr.joshuaadams/dev/github_dev_projects/joshuaadams_website/joshuaadams.github.io
```

2. Start a simple HTTP server (Python 3):

```bash
python3 -m http.server 8000
```

3. Open `http://localhost:8000` in your browser.

What to check:

- The hero section and avatar image (`avatar.png`) are visible.
- Theme toggle (top-right) switches between light and dark themes.
- Skill bars animate when sections scroll into view.
- `resume.pdf` — if present in repo root, the Download button links to it; otherwise it falls back to the contact area.
