# Cloudflare Pages Configuration

To deploy your site on Cloudflare Pages, use the following settings in the Cloudflare Dashboard:

## Build Configuration

| Setting | Value |
| :--- | :--- |
| **Framework preset** | `Hugo` |
| **Build command** | `hugo --minify` |
| **Build output directory** | `public` |

## Environment Variables

You must set the `HUGO_VERSION` environment variable to ensure Cloudflare uses a modern version of Hugo.

| Variable Name | Variable Value | Description |
| :--- | :--- | :--- |
| `HUGO_VERSION` | `0.128.0` | Matches the local version (`hugo v0.128.0...`) |
| `GO_VERSION` | `1.21` | (Optional) Ensures compatible Go version |

## Project Settings

*   **Project name**: `adams-academic-site` (or your preferred name)
*   **Production branch**: `main` (or `master`, check your git repo)

## After Deployment

1.  Cloudflare will automatically build and deploy your site.
2.  Once deployed, you can add a custom domain (e.g., `joshuaadams.dev`) in the **Custom domains** tab.
