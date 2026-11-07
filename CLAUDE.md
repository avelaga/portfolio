# abhi.work

Next.js (App Router) portfolio site, deployed on Vercel. V3 is on the `v3` branch. Its design decisions are in `V3-ethos.md`, and the launch to-do list is `V3-todo.md`. `V3-ux-audit.md` is the first-impression audit (2026-11-06), with screenshots in `docs/ux-audit/`.

## Builds

Don't run `next build` while the dev server is running. Both write into `.next/`, and the dev server then serves a mix of production and dev files. Chunks come back truncated at random, and the page fails to start up some of the time. To check a production build, stop the dev server first. Afterwards, delete `.next/` and restart the dev server.

## Performance notes

- **Hero slideshow.** The home page used to freeze in Safari after a while on the page, the live site included. The fix (2026-11-03) was in `HeroSlideshow.js`, and it should be kept:
  - Only the current, next and outgoing slides have their files loaded. Every slide is a full-screen layer, so keeping all of them loaded built up GPU memory over time.
  - The slideshow pauses while it's scrolled out of view.
- **Cleaning up loops.** Effects that start loops or observers must cancel them on cleanup. Otherwise React's dev mode (which sets effects up twice) and every hot reload leave extra copies running in an open tab. See the smooth-scroll setup in `app/layout.js`.
- **Judging performance.** A dev tab that's been open through many hot reloads isn't a fair test, so reload it first.

## Photos

- **Phone-sized copies.** Every photo in `public/images` wider than 1290px has a `-1290.webp` copy beside it, listed in `app/data/image-sizes.json`. `FadeInOnLoad` and `CardSlideshow` offer both through `srcset` (`app/lib/imageSizes.js`). After adding or replacing photos, run `python3 scripts/build-image-sizes.py` (needs Pillow) and commit the copies with the JSON.
- **First photo on a page.** It loads at once and shows without the fade (`priority` on `FadeInOnLoad`). Gallery pages set it on their first photo automatically; project pages set it on their first `WidePhoto`. A new page's first photo needs it too.
- **Caching.** In production, `/fonts` is cached for a year and `/hero`, `/images`, `/videos` for a week (`headers()` in `next.config.js`). A photo replaced under the same name can show the old version to returning visitors for up to a week.

## Dev tools (local only)

Three content tools run on the dev server (`npm run dev`) and are never deployed.

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

### Share images: `/dev/og`

Chooses and crops each page's link-preview image (`og:image`, 1200×630).

- **Code:** `app/dev/og/` (page, `OgEditor.js`); save route at `app/api/dev/og/route.dev.js`.
- **Which pages:** every `page.js` that sets `image: '/og/<name>.jpg'` through `pageMeta`. The resume's image is generated by `app/resume/opengraph-image.js`, and merch products use their own photos, so neither is listed.
- **Finding images:** it loads the page in a hidden, very tall iframe so lazy galleries load everything, then collects `<img>` sources, video posters and videos (any frame can be used). For the home page it also adds all hero slides, since the slideshow keeps only a few loaded.
- **Saves:** the cropped JPG over `public/og/<name>.jpg`, and the source, zoom, centre and (for videos) moment into `app/data/og-crops.json`, so a crop can be reopened and adjusted.
- **After changing one:** apps cache previews, so add `?v=2` to a link when testing.
