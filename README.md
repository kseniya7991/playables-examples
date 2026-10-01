# Playable Ads Portfolio

Static site, no build step. Structure:

```
index.html          — landing page with the list of games
play/index.html     — player: switch between games (/play/#tropicana)
assets/games.js     — ALL texts, contacts and the games list (edit here)
assets/style.css    — styles
assets/covers/      — game covers (portrait screenshots, .webp)
assets/og.png       — preview image for links in messengers
games/<slug>/       — built games (copies of each project's dist folder)
```

## Deploy to Vercel

**Option A — via GitHub (recommended, auto-updates on push)**
1. Create an empty repo on GitHub (e.g. `playables-portfolio`).
2. In this folder:
   ```
   git remote add origin https://github.com/<user>/playables-portfolio.git
   git push -u origin main
   ```
3. vercel.com → Add New → Project → import the repo.
   Framework Preset: **Other**, Build Command: empty, Output Directory: empty (root). Deploy.

**Option B — without GitHub**
```
npm i -g vercel
vercel        # first time: log in and answer the questions (defaults are fine)
vercel --prod
```

After the first deploy, put the final domain into `og:image` in `index.html`
(e.g. `https://your-site.vercel.app/assets/og.png`) — Telegram/LinkedIn previews need an absolute URL.

## Add / update a game
1. Build the game, copy its `dist` folder to `games/<slug>/` (must contain `index.html`).
2. Add a portrait screenshot as `assets/covers/<slug>.webp` (~480×1040).
3. Add an entry to `games` in `assets/games.js`.
