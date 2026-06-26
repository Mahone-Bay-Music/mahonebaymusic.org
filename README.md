# mahonebaymusic.org

Static website for the Mahone Bay Music Association (MBMA), a non-profit that presents community summer music events in Mahone Bay, Nova Scotia.

![MBMA Logo](public/assets/images/gazebo.webp)

## Tech Stack

- Vanilla HTML, CSS, JavaScript (no framework)
- Static asset hosting via `public/`
- Vite (build/dev server)

## Local Development

Install dependencies:

```bash
pnpm install
```

Run local dev server:

```bash
pnpm dev
```

Build production files to `dist/`:

```bash
pnpm build
```

Preview production build locally:

```bash
pnpm preview
```

## Project Structure

- `index.html`: App shell
- `app.js`: SPA routing + page content model
- `styles.css`: Site styling and responsive layout
- `public/assets/`: Images, favicon files, placeholder graphics
- `public/_redirects`: SPA fallback for static hosting
- `public/robots.txt`: Crawling rules
- `public/sitemap.xml`: Route sitemap
- `functions/api/instagram-latest.js`: Cloudflare Pages Function that returns the latest Instagram embed

## Deployment Notes

- Build command: `pnpm build`
- Output directory: `dist`
- For Cloudflare Pages, deploy from `dist/` and keep `_redirects` so history-mode routes resolve to `index.html`.
- The Social page calls `/api/instagram-latest`, which caches the latest public Instagram post embed for one hour.
- The Instagram username defaults to `mahonebaymusic`. Override it with an optional `INSTAGRAM_USERNAME` Pages environment variable.
