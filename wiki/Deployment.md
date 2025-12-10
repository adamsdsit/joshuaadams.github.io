# Deployment — GitHub Pages & Custom Domain

This repository is designed to be served with GitHub Pages. Below are steps to publish and configure your custom domain `joshuaadams.dev`.

1) GitHub Pages (basic)

- In the GitHub repository settings → Pages, set the source branch to `main` and the folder to `/ (root)` (or `/docs` if you prefer moving site files there).
- After saving, GitHub will publish the site at `https://<username>.github.io/<repo>` or for user/organization pages at `https://<username>.github.io`.

2) Custom domain (`joshuaadams.dev`)

- This repo already contains a `CNAME` file at the repository root with the domain `joshuaadams.dev`. That instructs GitHub Pages to serve the site at that domain.
- DNS setup — two common options:

  - Apex domain (recommended for `joshuaadams.dev`):
    - Point the domain's A records to the GitHub Pages IPv4 addresses:

      - `185.199.108.153`
      - `185.199.109.153`
      - `185.199.110.153`
      - `185.199.111.153`

  - Subdomain (`www.joshuaadams.dev`):
    - Create a CNAME record for `www` pointing to `adamsdsit.github.io` (replace with your GitHub username if different).

- After DNS changes propagate (may take up to 24–48 hours, but usually sooner), go to the repository Pages settings and set the custom domain to `joshuaadams.dev` if it's not already set.
- Enable `Enforce HTTPS` in the Pages settings after GitHub provisions a TLS certificate (can take a few minutes to hours).

3) Notes & troubleshooting

- If you use the apex domain and your registrar supports ALIAS/ANAME records, that may simplify setup; otherwise use the A records above.
- If HTTPS doesn't become available, ensure DNS records are correct and wait — then toggle the custom domain off and on in Pages settings to force revalidation.
