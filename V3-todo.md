# abhi.work V3 — to-do

Open items before launch. Items marked **(Claude)** are build tasks; the rest need Abhi. Design reasoning lives in `V3-ethos.md`.

The main jobs: **content**, **the Fourthwall domain move**, and **launching** (merge and deploy). Design and layout are final. The rest supports them.

## 1. Content

**Hero montage** (final: 24 desktop slides, 21 phone slides, 3 s each; compressed into `public/hero/`, ~18 MB. To change them: reorder at http://localhost:3000/dev/hero, run `python3 scripts/build-hero.py`, commit `public/hero/`)

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
- [x] **(Claude)** Performance pass: audited 2026-11-04 (Lighthouse mobile scores 71–95, CLS 0 everywhere, the hero memory fix confirmed working). Fixes, awaiting Abhi's pick:
  - [ ] Quick: card slideshows load hover photos only when a card starts playing (`CardSlideshow.js`); Inter font only on the resume (`app/resume/page.js`); `fetchPriority="high"` on the first hero still, and lower-bitrate hero clips in `build-hero.py`; re-encode `hi.mp4` at ~540px; load the merch `rebuild-loop.mp4` only near view; cache headers for `/fonts` (1 year) and `/hero`, `/images`, `/videos` (~1 week); delete ~16 unused files in `/public`
  - [ ] Design call: the first image on each page loads eagerly and skips the JS fade (`FadeInOnLoad.js`), the cause of 10–15 s LCP on Photo portfolio, Indulgent, The World Misses You, About and merch
  - [ ] Later: smaller photo sizes for phones (`srcset`), and shrink the dadalab originals (up to 4964px); smaller merch photos from Fourthwall (`next/image` or a sized API URL)
- [x] **(Claude)** Optional: recapture Figma (done 2026-11-04: new row "V3 — current build (2026-11-04)" on "V3 (2026)", old 10-27 row moved to an archive page; changed since: sticky back link, Merry Jane and The World Misses You as single sequences, header spacing, phone hero, merch product pages)

## 4. Supporting

**Public email: `hello@abhi.work`** (free: Porkbun forward + Gmail "Send mail as"). Decided 2026-11-04: it goes to a **new Gmail used only for this**, not either login inbox. Public mail attracts phishing; in a separate inbox, anything claiming to be the bank or YouTube is fake by definition.
- [x] Create the new Gmail (done 2026-11-04): never used as a login anywhere else; its own strong password and 2FA; add it to the Gmail app on the phone
- [x] Porkbun → domain → Email: forward `hello@abhi.work` to the new Gmail (MX `fwd1`/`fwd2.porkbun.com` live 2026-11-04)
- [x] New Gmail → Settings → Accounts → "Send mail as" → add `hello@abhi.work` (works 2026-11-04: replies show only `hello@abhi.work`)
      SMTP `smtp.resend.com`, port 465 (SSL), user `resend`, password: a dedicated Resend API key
- [x] Confirm the verification code (arrives through the forward)
- [x] **(Claude)** Swap the site's visible email to `hello@abhi.work` (done 2026-11-04, `EMAIL` in `app/data/v3.js` and the resume page's contact line in `app/resume/Resume.js`) (`EMAIL` in `app/data/v3.js`; now only shown on the resume page)
- [ ] Optional: point `CONTACT_TO_EMAIL` (Vercel) at `hello@abhi.work`, so contact form mail lands in the same inbox
- [ ] Update the resume PDF and re-export

**Login email security** (the two login addresses, financial and YouTube, are currently public)
- [ ] 2FA with an authenticator app on financial and YouTube accounts
- [ ] Once `hello@` exists, stop giving out the login addresses; remove them from bios, sites and old profiles
- [ ] Best: move financial accounts to a fresh address that's never been shared

**Phone check** (on the real phone, after deploying): all done and working, 2026-11-04
- [x] Card deck pushes up smoothly mid-flick (needs iOS 26; older iOS shows one title at a time)
- [x] Inverting header reads well over photos in Safari (fixed bar, `mix-blend-mode: difference`)
- [x] The menu
- [x] Walk every page: hero, About, contact form (real send), Say hi, galleries, music, The World Misses You, Resume, merch → checkout
- [x] Text yourself link previews (add `?v=2` to beat iMessage's cache)

**Housekeeping**
- [ ] Small decisions: LED experiments footage; reshoot the Say hi desk video (still shows V2); darken the top of the merch backdrop? (the nav and "← Merch" are hard to read over the bright sunset)
