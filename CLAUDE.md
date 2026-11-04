# abhi.work

Next.js (App Router) portfolio site, deployed on Vercel. V3 is on the `v3` branch. Its design decisions are in `V3-ethos.md`, and the launch to-do list is `V3-todo.md`.

## Dev tools (local only)

Two content tools run on the dev server (`npm run dev`) and are never deployed.

### How they stay local

Their routes are `page.dev.js` / `route.dev.js` files. `next.config.js` adds `dev.js` to `pageExtensions` only when Next runs as the dev server (`PHASE_DEVELOPMENT_SERVER`), so `next build` and Vercel leave them out entirely.

- **New local-only pages or routes:** use the same `.dev.js` naming. Their helper components can be plain `.js`.
- **Changing `next.config.js`:** a running dev server may need a restart to pick it up.

### Hero picks: `/dev/hero`

Chooses which shots the home hero montage plays, and in what order. Desktop and phone are separate sets.

- **Code:** `app/dev/hero/` (page, `HeroPicker.js`); save route at `app/api/dev/hero-picks/route.dev.js`.
- **Reads:** the uncompressed files in `public/hero-preview/` (desktop, 16:9) and `public/hero-preview/mobile/` (phone, 9:16). That folder is gitignored, and the file listing comes from `app/lib/heroFiles.js`.
  - Clips are `.mp4` with a `.jpg` poster of the same name beside them. Photos are `.png`.
  - Names are kebab-case and describe the shot. A shot that exists in both sets has the same name in each.
- **Saves:** `app/data/hero-picks.json` (`{ desktop: [...], mobile: [...] }`), on every change.
- **Shipping changes:** the site serves compressed files from `public/hero/`, not the preview folder. After changing the picks:
  1. Run `python3 scripts/build-hero.py`. It trims clips to the slide length, writes posters and WebP photos, and deletes files in `public/hero/` that are no longer picked.
  2. Commit `public/hero/` together with `hero-picks.json`.
- **Captions:** each slide's caption is the title of the project card it belongs to. The mapping is `heroProjectIds` in `app/data/v3.js`; anything not listed counts as Photo portfolio.
- **Adding new shots:** Abhi's originals live in `v3-assets/hero/picks/` (gitignored). Copy new ones into `public/hero-preview/` with descriptive names, plus a poster for each clip, and they appear under "Not used" in the picker.

### Card crops: `/dev/cards`

Sets which part of each project card photo stays in frame on phones, where the card crops to 4:5. Desktop crops to 3:2 and always stays centred.

- **Code:** `app/dev/cards/` (page, `CardCropper.js`); save route at `app/api/dev/card-focus/route.dev.js`.
- **Saves:** `app/data/card-focus.json`, which maps a photo's path to a CSS `object-position` (e.g. `"0% 50%"`). Centred photos aren't stored.
- **How the site reads it:** `cardPhotos(project)` in `app/data/v3.js` combines each card's `lead` and `images` with these crops, and `CardSlideshow` applies them through `--phone-focus`, on phones only.
- **Card photos themselves:** a card's photos are its `lead` and `images` in `projects` in `app/data/v3.js`. A photo that's removed from a card keeps its entry in the crop file until the next save from the tool.
