# abhi.work V3 — to-do

Open items before launch. Items marked **(Claude)** are build tasks; the rest need Abhi. Design reasoning lives in `V3-ethos.md`.

The main jobs: **content**, **the Fourthwall domain move**, and **launching** (merge and deploy). Design and layout are final. The rest supports them.

## 1. Content

**Hero montage** (25 slides from `picks`, compressed into `public/hero/`; 13 clips trimmed to 4s, ~30 MB folder)
- [ ] Review the order and trims; say which clips should start later than their first 4 seconds
- [ ] Trim the set down? 25 slides is a 1 min 40 s loop; most visitors see the first 3–5
- [ ] Vertical (9:16) phone versions: export any you want framed by hand into `v3-assets/hero/picks/mobile/`, named like the slide (e.g. `indulgent-1.mp4`, `house-at-night.webp`), then **(Claude)** runs `scripts/build-hero-mobile.py`. Phones already get an automatic centre crop of every slide (720×1280; clips total 8.6 MB vs 20 MB landscape)
- [ ] Hero slideshow captions, once the slides are final (`heroSlides` in `app/data/v3.js`); keep them hidden on phones?

**Project cards** (`app/data/v3.js`)
- [ ] Each card's slideshow photos (`lead` + `images`): pick for the card's shape (3:2 on desktop, 4:5 on phones, so shots that survive a taller crop; square album covers lose their edges) and for how well they feature the project; any number of photos works
- [ ] The 9 card descriptions and years; add years to the Editorial and Photo portfolio cards

**Smaller copy**
- [ ] Merch subtitle
- [ ] The 13 link-preview descriptions (each page's `page.js`)
- [ ] Influences: keep or drop (hidden in `app/about/About.js`; list in `app/data/v3.js`)

## 2. Fourthwall domain move (merch launch)

The code is done: the custom storefront lives at `abhi.work/merch`, the checkout link reads its domain from `FOURTHWALL_CHECKOUT_DOMAIN` (`app/lib/fourthwall.js`), and `next.config.js` already holds the `shop.abhi.work` redirects. What's left is settings and DNS, **in this order**: Fourthwall's checkout currently lives at `shop.abhi.work`, so it has to move to `checkout.abhi.work` *before* `shop.abhi.work` is pointed at this site, or checkout breaks in between.

**A. Get the env vars onto previews**
1. [ ] Vercel → Settings → Environment Variables: add the **Preview** scope to `FOURTHWALL_STOREFRONT_TOKEN`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`; redeploy

**B. Move Fourthwall's checkout to `checkout.abhi.work`**
2. [ ] Email support@fourthwall.com first: you're switching the shop domain and running a custom storefront (ask about anything that breaks)
3. [ ] Fourthwall → Settings → Domain: change the custom domain from `shop.abhi.work` to `checkout.abhi.work`
4. [ ] Porkbun → DNS: add the `checkout` record Fourthwall gives you; wait until Fourthwall shows it connected
5. [ ] Vercel: set `FOURTHWALL_CHECKOUT_DOMAIN=checkout.abhi.work` (Production and Preview); redeploy, so the site's Checkout button goes to the new domain
6. [ ] Fourthwall theme: "Clean Frame", dark (it's what people see during checkout)

**C. Redirect `shop.abhi.work` to the new storefront**
7. [ ] Vercel → Domains: add `shop.abhi.work` to this project
8. [ ] Porkbun → DNS: change the `shop` record to Vercel's CNAME (replacing Fourthwall's); the redirects in `next.config.js` then take over:
      `shop.abhi.work` → `abhi.work/merch`, `/products/:slug` → `/merch/:slug`, `/pages/*` and `/contact` → `checkout.abhi.work`

**D. Verify and announce**
9. [ ] One real order, refunded: checkout on `checkout.abhi.work`, where it lands after paying, the confirmation email, the support form
10. [ ] Test old links: `shop.abhi.work`, a product, `/pages/returns-faq`
11. [ ] Update the shop link in the Instagram and YouTube bios to `abhi.work/merch`

## 3. Launch

Design and layout are final. Launching is its own step: everything lives on the `v3` branch.
- [ ] Commit the latest batch and push `v3`; check the Vercel preview (env vars from 2A in place)
- [ ] **Before merging, archive V2 at `v2.abhi.work`**, set up the same way as `v1.abhi.work`:
      fast-forward the `v2` branch to `master` (what's live today; the existing `v2` branch is from Feb 2025 and is already in `master`'s history, so nothing is lost), push it, then in Vercel assign `v2.abhi.work` to the `v2` branch and add its record in Porkbun like `v1`'s.
      **(Claude)** `noindex` the archive so Google doesn't treat it as a duplicate of abhi.work: a `vercel.json` on the `v2` branch sending `X-Robots-Tag: noindex` on every page
- [ ] **(Claude)** Same for `v1.abhi.work`: checked 2026-10-27, it's currently indexable (no robots header, no robots meta tag, no real `robots.txt`); add the same `vercel.json` to the `v1` branch and redeploy
- [ ] Merge `v3` into `master` and deploy to production (abhi.work)
- [ ] Right after: test the old V2 links still land somewhere (`/music`, `/software`, `/photo`, `/published` and a few V2 project URLs), and the 404 page
- [ ] **(Claude)** Performance pass once the final hero clips are in: page weight on a phone connection, Lighthouse, image sizes
- [ ] **(Claude)** Optional: recapture Figma (changed since: sticky back link, Merry Jane and The World Misses You as single sequences, header spacing)

## 4. Supporting

**Public email: `hello@abhi.work`** (free: Porkbun forward + Gmail "Send mail as")
- [ ] Porkbun → domain → Email: forward `hello@abhi.work` to the Gmail you read
- [ ] Gmail → Settings → Accounts → "Send mail as" → add `hello@abhi.work`
      SMTP `smtp.resend.com`, port 465 (SSL), user `resend`, password: a dedicated Resend API key
- [ ] Confirm the verification code (arrives through the forward)
- [ ] **(Claude)** Swap the site's visible email to `hello@abhi.work` (`EMAIL` in `app/data/v3.js`; now only shown on the resume page)
- [ ] Update the resume PDF and re-export
- [ ] Keep login emails (financial, YouTube) off anything public; 2FA (authenticator app) on financial and YouTube accounts

**Phone check** (on the real phone, after deploying)
- [ ] Card deck pushes up smoothly mid-flick (needs iOS 26; older iOS shows one title at a time)
- [ ] Inverting header reads well over photos in Safari (fixed bar, `mix-blend-mode: difference`)
- [ ] The menu
- [ ] Walk every page: hero, About, contact form (real send), Say hi, galleries, music, The World Misses You, Resume, merch → checkout
- [ ] Text yourself link previews (add `?v=2` to beat iMessage's cache)

**Housekeeping**
- [ ] Small decisions: LED experiments footage; reshoot the Say hi desk video (still shows V2)
