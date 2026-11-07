# abhi.work V3 — to-do

Open items before launch. Items marked **(Claude)** are build tasks; the rest need Abhi. Design reasoning lives in `V3-ethos.md`.

The main jobs: **content**, **the Fourthwall domain move**, and **launching** (merge and deploy). Design and layout are final. The rest supports them.

## 1. Content

**Hero montage** (20 desktop slides, 16 phone slides, 3 s each, re-ordered 2026-11-06; compressed into `public/hero/`, ~18 MB. To change them: reorder at http://localhost:3000/dev/hero, run `python3 scripts/build-hero.py`, commit `public/hero/`)

**First impression on phones** (UX audit 2026-11-06, after a designer asked "who's this chick?"; full report in `V3-ux-audit.md`): on a phone, the first screen is a portrait under the name, with no caption, and the intro sentence sits below the fold. Fixes:
- [x] Re-pick both hero sets around Abhi's own world (Abhi's re-pick 2026-11-06, kept in `app/data/hero-picks.handpicked.json`)
- [x] Claude's re-order of the hero, kept and committed ("ux update", 2026-11-06): opens on `cutting-miata`, then `room`, `shivering-demons`, `me`. To go back to Abhi's picks: copy `hero-picks.handpicked.json` over `hero-picks.json`, run `build-hero.py`
- [x] **(Claude)** Show the whole intro sentence on the first phone screen (2026-11-06: hero leaves 150px for it on every screen, phone floor 380px; fits on 320px phones up to 2560px desktops, `app/styles/v3.scss`)
- [x] **(Claude)** Show slide captions on phones too (2026-11-06)
- [ ] Five-second test with 3–5 people who don't know Abhi: show the phone for 5 s, ask "whose site is this, and what do they do?"

**Miami Vice**
- [x] **(Claude)** Renamed "Miami Vice Cocaine Dream" to Miami Vice Fever Dream (2026-11-06): home card, page title, project page heading and statement, Photo portfolio alt texts
- [ ] Book carousel on the Miami Vice page is commented out for now (`app/miamivice/MiamiVice.js`); bring it back or remove it
- [ ] Check the old title isn't out there: Instagram, captions, prints. The share image (`/og/miamivice.jpg`) is a photo crop, so it's unaffected

**Smaller copy**
- [ ] Say hi's share image still shows the V2 site: replace it after reshooting the Say hi desk video (Housekeeping), cropping a frame at http://localhost:3000/dev/og. The other 12 share images are final (2026-11-03)

## 2. Fourthwall domain move (merch launch): done 2026-11-04

The code is done: the custom storefront lives at `abhi.work/merch`, the checkout link reads its domain from `FOURTHWALL_CHECKOUT_DOMAIN` (`app/lib/fourthwall.js`), and `next.config.js` already holds the `shop.abhi.work` redirects. What's left is settings and DNS, **in this order**: Fourthwall's checkout currently lives at `shop.abhi.work`, so it has to move to `checkout.abhi.work` *before* `shop.abhi.work` is pointed at this site, or checkout breaks in between.

**A. Get the env vars onto previews**
1. [x] Vercel → Settings → Environment Variables: add the **Preview** scope to `FOURTHWALL_STOREFRONT_TOKEN`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`; redeploy (all three set for Production, Preview and Development, checked 2026-11-04)

**B. Move Fourthwall's checkout to `checkout.abhi.work`**
2. [x] Optional: email support@fourthwall.com first (the domain change is self-serve). Worth asking: can "back to shop" links in order emails and after checkout go to `abhi.work/merch`; how long checkout is down during the switch; do old order links on `shop.abhi.work` keep working
3. [x] Fourthwall → Settings → Domain: change the custom domain from `shop.abhi.work` to `checkout.abhi.work`
4. [x] Porkbun → DNS: add the `checkout` record Fourthwall gives you
   - [x] Wait until Fourthwall shows it connected (working 2026-11-04: home, policy pages and support form all load over HTTPS)
5. [x] Vercel: set `FOURTHWALL_CHECKOUT_DOMAIN=checkout.abhi.work` (Production and Preview); redeploy, so the site's Checkout button goes to the new domain (the first redeploy failed on `next/font/google` with the build cache; the redeploy without the cache worked)
6. [x] Fourthwall checkout look (it's what people see during checkout): Site design → Layout → "Checkout" → skin **Dark**; Site design → Style → Colors to match the site; optional: the "Clean Frame" theme (Site design → Themes)

**C. Redirect `shop.abhi.work` to the new storefront**
7. [x] Vercel → Domains: add `shop.abhi.work` to this project
8. [x] Porkbun → DNS: change the `shop` record to Vercel's CNAME (replacing Fourthwall's; the 16 old `shop` and `support.shop` records were deleted, since Fourthwall made a new set under `support.checkout`); the redirects in `next.config.js` then take over:
      `shop.abhi.work` → `abhi.work/merch`, `/products/:slug` → `/merch/:slug`, `/pages/*` and `/contact` → `checkout.abhi.work`

**D. Verify and announce**
9. [x] One real order, refunded (order placed 2026-11-04: lands on a confirmation page on `checkout.abhi.work`, and the email links to the same page, both fine; refunded): checkout on `checkout.abhi.work`, where it lands after paying, the confirmation email, the support form
10. [x] Test old links: `shop.abhi.work`, a product, `/pages/returns-faq` (all redirect correctly, 2026-11-04)
11. [x] Update the shop link in the Instagram and YouTube bios to `abhi.work/merch`

## 3. Launch

Design and layout are final. Launching is its own step: everything lives on the `v3` branch.
- [x] **Archive V2 and V1** (2026-11-04). Both are Vercel projects with **no Git connection**, so they never rebuild or send failure emails. Each was deployed once from the CLI, from a `git archive` of its branch plus a `vercel.json` that sends `X-Robots-Tag: noindex`.
      - **`v2.abhi.work`** (project `v2.abhi.work`): `master` c68f7b8, which is `v2` (pushed). Its `vercel.json` also sets `framework: nextjs`. DNS: Porkbun `A v2 76.76.21.21`.
      - **`v1.abhi.work`** (project `v1.abhi.work`, formerly `portfolio`): the `v1` branch. Its `vercel.json` also sets `NODE_OPTIONS=--openssl-legacy-provider` (its webpack 4 fails on Node 24) and `outputDirectory: dist`.
      - **To update either one:** export its branch again, add the same `vercel.json`, and run `vercel deploy --prod`. Link by project ID (write `.vercel/project.json`), not by name: `vercel link --project <name>` quietly creates a new project when no project has that name.
- [x] Merge `v3` into `master` and deploy to production (abhi.work). Launched 2026-11-04 as a squash commit. The Production Fourthwall token was wrong (403, empty shop) and was replaced.
- [x] Right after: test the old V2 links still land somewhere (`/music`, `/software`, `/photo`, `/published` and a few V2 project URLs), and the 404 page. All 13 V2 pages load or redirect, and the 404 page works (2026-11-04)
- [x] **(Claude)** Performance pass: audited 2026-11-04 (Lighthouse mobile scores 71–95, CLS 0 everywhere, the hero memory fix confirmed working). All fixes done 2026-11-07 (uncommitted; production build passes):
  - [x] First photo on each page loads at once and shows without the fade (the 10–15 s LCP); `priority` on `FadeInOnLoad`
  - [x] Card hover photos load only once a card plays; `fetchPriority` on the first hero still; hero clips at CRF 30 (desktop 11 → 8.5 MB, phone 4.4 → 3.0 MB)
  - [x] `hi.mp4` 1.1 MB → 251 KB; merch loop loads only near view; cache headers (fonts 1 year; hero, images, videos 1 week); unused files kept as options (deleting them wouldn't speed anything up: no page downloads them); Inter was already resume-only
  - [x] Phone-sized photo copies (`scripts/build-image-sizes.py`, 42 → 16 MB for phones); dadalab originals capped at 2560px; merch photos resized through `/_next/image` (merch page 2.9 → 0.5 MB on a phone)
- [x] **(Claude)** New favicon (2026-11-07): the logo's "a" over the blurred blue of `dadalab2`, like the phone menu's background
- [x] **(Claude)** Optional: recapture Figma (done 2026-11-04: new row "V3 — current build (2026-11-04)" on "V3 (2026)", old 10-27 row moved to an archive page; changed since: sticky back link, Merry Jane and The World Misses You as single sequences, header spacing, phone hero, merch product pages)

## 4. Supporting

**Public email: `hello@abhi.work`** (free: Porkbun forward + Gmail "Send mail as"). Decided 2026-11-04: it goes to a **new Gmail used only for this**, not either login inbox. Public mail attracts phishing; in a separate inbox, anything claiming to be the bank or YouTube is fake by definition.
- [x] Create the new Gmail (done 2026-11-04): never used as a login anywhere else; its own strong password and 2FA; add it to the Gmail app on the phone
- [x] Porkbun → domain → Email: forward `hello@abhi.work` to the new Gmail (MX `fwd1`/`fwd2.porkbun.com` live 2026-11-04)
- [x] New Gmail → Settings → Accounts → "Send mail as" → add `hello@abhi.work` (works 2026-11-04: replies show only `hello@abhi.work`)
      SMTP `smtp.resend.com`, port 465 (SSL), user `resend`, password: a dedicated Resend API key
- [x] Confirm the verification code (arrives through the forward)
- [x] **(Claude)** Swap the site's visible email to `hello@abhi.work` (done 2026-11-04, `EMAIL` in `app/data/v3.js` and the resume page's contact line in `app/resume/Resume.js`) (`EMAIL` in `app/data/v3.js`; now only shown on the resume page)
- [x] Old sponsorship Gmail → Settings → Forwarding and POP/IMAP: forward to the new Gmail, archive Gmail's copy; reply from `hello@` so sponsors move over (no auto-reply: it confirms the address to spammers)
- [x] Then retire the old sponsorship account without deleting it (done 2026-11-05) (deleting stops the forward for good and the address can never be reissued): sign out everywhere, 2FA on, recovery email set to the new Gmail, sign in once a year (Google deletes accounts after 2 years without a sign-in). Consider deleting in a year or two, once nothing useful comes through
- [x] Update the YouTube business inquiries email and the Instagram contact button to `hello@abhi.work`
- [x] Rename the public email from `hello@` to `hi@abhi.work` (shorter, and echoes the Say hi page); `hello@` goes away, it was never given out (all done, confirmed 2026-11-07)
  - [x] Porkbun: change the `hello` forward to `hi` (or delete `hello` and add `hi`); test (done, confirmed 2026-11-06)
  - [x] Gmail "Send mail as": add `hi@abhi.work` (same Resend SMTP), verify, make default, then delete `hello@abhi.work` from the list
  - [x] **(Claude)** Swap the site from `hello@` to `hi@` (`EMAIL` in `app/data/v3.js`, `app/resume/Resume.js`; 2026-11-05, commit once `hi@` works)
  - [x] Update any place `hello@` was entered (YouTube business email, Instagram contact button, the old sponsorship account's forward if it points at `hello@`) and the resume PDF
- [ ] Optional: point `CONTACT_TO_EMAIL` (Vercel) at `hi@abhi.work`, so contact form mail lands in the same inbox
- [x] Update the resume PDF and re-export

**Login email security** (the two login addresses, financial and YouTube, are currently public)
- [ ] 2FA with an authenticator app on financial and YouTube accounts
- [x] Once `hello@` exists, stop giving out the login addresses; remove them from bios, sites and old profiles
- [ ] Best: move financial accounts to a fresh address that's never been shared

**Phone check** (on the real phone, after deploying): all done and working, 2026-11-04
- [x] Card deck pushes up smoothly mid-flick (needs iOS 26; older iOS shows one title at a time)
- [x] Inverting header reads well over photos in Safari (fixed bar, `mix-blend-mode: difference`)
- [x] The menu
- [x] Walk every page: hero, About, contact form (real send), Say hi, galleries, music, The World Misses You, Resume, merch → checkout
- [x] Text yourself link previews (add `?v=2` to beat iMessage's cache)

**Housekeeping**
- [ ] Small decisions: LED experiments footage; reshoot the Say hi desk video (still shows V2); darken the top of the merch backdrop? (the nav and "← Merch" are hard to read over the bright sunset)
