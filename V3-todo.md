# abhi.work V3 — to-do

Open items before launch. Items marked **(Claude)** are build tasks; the rest need Abhi. Design reasoning lives in `V3-ethos.md`.

The main jobs: **content**, **the Fourthwall domain move**, and **launching** (merge and deploy). Design and layout are final. The rest supports them.

## 1. Content

**Hero montage** (final: 24 desktop slides, 21 phone slides, 3 s each; compressed into `public/hero/`, ~18 MB. To change them: reorder at http://localhost:3000/dev/hero, run `python3 scripts/build-hero.py`, commit `public/hero/`)

**Smaller copy**
- [ ] Say hi's share image still shows the V2 site: replace it after reshooting the Say hi desk video (Housekeeping), cropping a frame at http://localhost:3000/dev/og. The other 12 share images are final (2026-11-03)

## 2. Fourthwall domain move (merch launch)

The code is done: the custom storefront lives at `abhi.work/merch`, the checkout link reads its domain from `FOURTHWALL_CHECKOUT_DOMAIN` (`app/lib/fourthwall.js`), and `next.config.js` already holds the `shop.abhi.work` redirects. What's left is settings and DNS, **in this order**: Fourthwall's checkout currently lives at `shop.abhi.work`, so it has to move to `checkout.abhi.work` *before* `shop.abhi.work` is pointed at this site, or checkout breaks in between.

**A. Get the env vars onto previews**
1. [x] Vercel → Settings → Environment Variables: add the **Preview** scope to `FOURTHWALL_STOREFRONT_TOKEN`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`; redeploy (all three set for Production, Preview and Development, checked 2026-11-04)

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
- [x] **Archive V2 and V1** (2026-11-04). Both are Vercel projects with **no Git connection**, so they never rebuild or send failure emails. Each was deployed once from the CLI, from a `git archive` of its branch plus a `vercel.json` that sends `X-Robots-Tag: noindex`.
      - **`v2.abhi.work`** (project `v2.abhi.work`): `master` c68f7b8, which is `v2` (pushed). Its `vercel.json` also sets `framework: nextjs`. DNS: Porkbun `A v2 76.76.21.21`.
      - **`v1.abhi.work`** (project `v1.abhi.work`, formerly `portfolio`): the `v1` branch. Its `vercel.json` also sets `NODE_OPTIONS=--openssl-legacy-provider` (its webpack 4 fails on Node 24) and `outputDirectory: dist`.
      - **To update either one:** export its branch again, add the same `vercel.json`, and run `vercel deploy --prod`. Link by project ID (write `.vercel/project.json`), not by name: `vercel link --project <name>` quietly creates a new project when no project has that name.
- [ ] Merge `v3` into `master` and deploy to production (abhi.work)
- [ ] Right after: test the old V2 links still land somewhere (`/music`, `/software`, `/photo`, `/published` and a few V2 project URLs), and the 404 page
- [ ] **(Claude)** Performance pass once the final hero clips are in: page weight on a phone connection, Lighthouse, image sizes
- [ ] **(Claude)** Optional: recapture Figma (changed since: sticky back link, Merry Jane and The World Misses You as single sequences, header spacing, phone hero, merch product pages)

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
- [ ] Small decisions: LED experiments footage; reshoot the Say hi desk video (still shows V2); darken the top of the merch backdrop? (the nav and "← Merch" are hard to read over the bright sunset)
