# Joshua Adams — Academic Site (Hugo + Wowchemy)

This is a clean academic research site scaffold using Hugo (extended) and the Wowchemy (Academic) theme. It supports publications (BibTeX), CV, teaching, blog, multilingual (en/ja), and GitHub Pages deployment.

## Prerequisites (local)

```sh
# macOS: install Hugo extended
brew install hugo

# Optional: verify version
hugo version
```

## Run locally

```sh
cd academic-site
hugo server -D
```

Then open `http://localhost:1313`.

## Deploy (GitHub Pages via Actions)

Push to `main`. The workflow `.github/workflows/hugo-pages.yml` builds the site and deploys to Pages with the custom domain `joshuaadams.dev`.

## Content Structure

- `content/` — pages and sections (home, publications, teaching, research, posts)
- `data/` — bibliographies (BibTeX), site-specific data
- `assets/` — custom styles
- `static/` — images and public files
- `hugo.toml` — site configuration, languages, modules

## Publications via BibTeX

Place your BibTeX file at `data/publications.bib`. In content, use Wowchemy’s publication types and shortcodes, or lists fed from BibTeX. We’ll wire a basic listing placeholder you can replace with your real entries.

## Site Metadata

Update in `hugo.toml`:

- Title: `Joshua Adams`
- ORCID, Google Scholar, LinkedIn, email

## Notes

- This scaffold uses Hugo Modules to import Wowchemy (Academic). No theme files are committed — the module resolves at build time.
- The GitHub Actions workflow installs Hugo extended and builds with `--minify`.
