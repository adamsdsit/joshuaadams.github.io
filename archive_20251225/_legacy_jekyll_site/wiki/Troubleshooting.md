# Troubleshooting

Common issues and fixes:

- 404 or site not found after enabling Pages:
  - Ensure the Pages source is set to the correct branch (usually `main`) and folder (`/`).
  - Confirm files are in the repo root if the root is selected.

- Avatar not showing:
  - Confirm `avatar.png` exists in the repository root and is referenced as `avatar.png` in `index.html`.

- Download PDF not working:
  - Place a `resume.pdf` file in the repository root. The Download button will point to it automatically.

- Theme toggle doesn't persist:
  - `resume.js` stores preference in `localStorage` under `site-theme`. Clear localStorage or use the toggle again.

- CNAME/DNS issues (site not resolving to `joshuaadams.dev`):
  - Verify DNS records at your registrar match the deployment instructions in `Deployment.md`.
  - DNS propagation can take time — check propagation via `dig` or online DNS checkers.

- Styles/CSS not updating after edits:
  - Browser caching may serve old CSS. Hard-refresh the page (Cmd+Shift+R on macOS) or clear cache.
