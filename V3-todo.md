# abhi.work V3 — to-do

Open items before launch. Items marked **(Claude)** are build tasks; the rest need Abhi. Design reasoning lives in `V3-ethos.md`.

## 1. Hero montage
- [ ] Pick the final 7–10 slides; note in/out times in `v3-assets/hero/notes.md`
- [ ] Pull the supercharger-running clip
- [ ] **(Claude)** Cut and compress clips (~5s, 1–3 MB, poster frames, 720p phone versions, phone crop centers)

## 2. Content review
- [x] Hero headline and intro (`app/Home.js`): done, option A
- [ ] Choose each card's slideshow photos (`lead` + `images` in `app/data/v3.js`): pick for the card's shape (3:2 on desktop, 4:5 on phones, so landscape shots that survive a taller crop; square album covers lose their edges) and for how well they feature the project; any number of photos works
- [ ] The 9 card descriptions and years (`app/data/v3.js`); add years to the Editorial and Photo portfolio cards (link labels done: "View" / "YouTube")
- [x] Contact form wording: label "Message"; placeholder "Say hello, ask about something you saw here, or tell me what you're working on" (email placeholder no longer a studio address)
- [ ] Hero slideshow captions: rewrite once the slides are final (`heroSlides` in `app/data/v3.js`); they're also hidden on phones, keep it that way?
- [ ] Merch subtitle
- [ ] The 13 link-preview descriptions (each page's `page.js`)
- [ ] The World Misses You: are the rain and twinkle loop captions swapped?
- [ ] Influences: keep or drop (hidden in `app/about/About.js`; list in `app/data/v3.js`)

## 3. Public email: `hello@abhi.work` (free: Porkbun forward + Gmail "Send mail as")
- [ ] Porkbun → domain → Email: forward `hello@abhi.work` to the Gmail you read
- [ ] Gmail → Settings → Accounts → "Send mail as" → add `hello@abhi.work`
      SMTP `smtp.resend.com`, port 465 (SSL), user `resend`, password: a dedicated Resend API key
- [ ] Confirm the verification code (arrives through the forward)
- [ ] **(Claude)** Swap the site's visible email to `hello@abhi.work` (`EMAIL` in `app/data/v3.js`; now only shown on the resume page)
- [ ] Update the resume PDF and re-export
- [ ] Keep login emails (financial, YouTube) off anything public; 2FA (authenticator app) on financial and YouTube accounts

## 4. Phone check (on the real phone, after deploying)
- [ ] Card stack on the phone: three-bar deck pushes up smoothly mid-flick (needs iOS 26; older iOS shows one title at a time)
- [x] Stacked titles cut off on phones: type and year moved out of the phone title bar, into the card
- [ ] Inverting header reads well over photos in Safari (fixed bar, `mix-blend-mode: difference`)
- [ ] MENU overlay
- [ ] Walk every page: hero, About, contact form (real send), Say hi, galleries, music, The World Misses You, Resume, merch → checkout
- [ ] Text yourself link previews (add `?v=2` to beat iMessage's cache)

## 5. Merch launch (in order)
1. [ ] Vercel: add the **Preview** scope to `FOURTHWALL_STOREFRONT_TOKEN`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`; redeploy
2. [ ] Email support@fourthwall.com before the domain change
3. [ ] Fourthwall → Settings → Domain: switch to `checkout.abhi.work`
4. [ ] Porkbun: add the `checkout` record; wait for it to connect
5. [ ] Vercel: `FOURTHWALL_CHECKOUT_DOMAIN=checkout.abhi.work` (Production and Preview); redeploy
6. [ ] Vercel → Domains: add `shop.abhi.work`; point its Porkbun record at Vercel's CNAME
7. [ ] Fourthwall theme: "Clean Frame", dark
8. [ ] One real order, refunded: where checkout lands after paying, the confirmation email, the support form
9. [ ] Test old links: shop home, a product, `/pages/returns-faq`
10. [ ] Update the shop link in the Instagram and YouTube bios

## 6. Still to build
- [ ] YouTube and merch project page (needs Abhi's 3 favorite videos)
- [x] Contact form: real send tested and working (add Cloudflare Turnstile only if spam gets through)
- [ ] **(Claude)** Recapture Figma: the 2026-10-26 "current build" row predates the montage-only hero, Basteleur name, fixed inverting header, the deck (phone and desktop), the photo-beside-text cards with hover pop, the fluid-color menu, the centered footer, and the About page with the form in the grid

## 7. Housekeeping
- [x] Accent color: decided against; the interface stays grayscale on dark (trial removed)
- [x] Project cards: one large photo beside the text, hover slideshow (always cycling on phones); trial switch and the other styles removed
- [x] Phone menu: fluid color (menu2); switch and the other two styles removed
- [x] Hero-name typeface: Basteleur Moonlight (self-hosted), also on the nav-bar name; trial picker removed
- [ ] **Commit and push** the latest batch (7 files uncommitted since `c4b02a0`)
- [ ] Small decisions: LED experiments footage; reshoot the Say hi desk video (still shows V2)
