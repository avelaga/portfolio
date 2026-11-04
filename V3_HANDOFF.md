# abhi.work V3 — handoff brief

Context from a design-planning session (Oct 25, 2026). This is the agreed direction for V3 of abhi.work. Nothing has been implemented yet.

## First task in the repo
- Create a new branch `v3` off `master`. Don't implement anything yet.

## Creative direction, and why
**The feeling to aim for: alive, immersive, unmistakably Abhi.** A visitor should feel who he is before reading a word.

Why this direction:
- **Lean back into the creative background.** His edge, for hiring managers and small businesses alike, is that he isn't a template engineer. He has a decade of music, film photography, installations and now car videos, and some of those assets have real visual impact. A sterile site hides the very thing that makes him different. Using his own work as the material of the site is what makes it unique.
- **V2 overcorrected.** V2 deliberately cleaned things up: it removed full-bleed background images and moved to light mode as a "clear canvas." That fixed real problems (contrast, clutter, structure), but parts of it now feel sterile. His photography became thumbnails on a blank page instead of the environment.
- **V1 had the feeling he wants back.** V1's homepage was a full-screen slideshow that transitioned on its own between striking images. It conveyed his world without any scrolling, made a strong impression on people, and set him apart from template sites. Seeing the site move on its own made it feel vibrant and full of life.
- **Motion is now his medium.** His current creative outlet is video (the car YouTube channel), so moving action clips in the hero are the most honest picture of who he is today, not just decoration.
- **V3 = V1's atmosphere with V2's discipline.** Keep V2's restraint: clear hierarchy, generous spacing, a quiet interface, readable text. Let the photography and video supply the drama. The interface should stay calm and confident so the work can be loud.
- **Show, don't list.** Every medium on the site is evidence for one thesis, "a creative who builds," rather than a separate identity. The site should make the range feel like one person, not several half-identities.

What to avoid: anything that reads as a generic portfolio template, sterile white minimalism, decorative effects that don't come from his own work, and busy layouts where text fights the imagery.

## Who the site is for, and what it must do
1. **Creative portfolio and running archive** of Abhi's best work across every medium: music, photography, installations, video, YouTube, editorial. Music and photography have been on hold for years; that's fine. The site preserves and displays that work.
2. **Quietly signal brand + web capability** for small and boutique businesses (word-of-mouth clients, e.g. Track Dog Racing). He has no client portfolio yet, keeps a full-time job, and the site is on his resume, so the copy states capabilities directly but stays vague about freelance vs employment and points to contact. No "hire me", "clients" or "services" language.
3. **Be distinctive and feel like him.** Not templated, not sterile. He will hand-design the visuals himself.

Identity: a hybrid creative + engineer, not a pure artist site. Throughline: making people feel things through storytelling on the internet, whatever the medium.

Key data point: V2 analytics showed ~60–70% of visitors lost per extra click, so the homepage must carry the whole story.

## Information architecture (decided)
Three pages. Every nav link must open a different page, never scroll within the current one. No top-level Contact link.

- **Home**
  - Hero (see "Hero slideshow" below) with the intro.
  - **Featured work**: the entire curated archive in one scroll, in his chosen order (strongest and most varied first). Label it "Featured work", not "Archive".
  - Call to action near the bottom linking to the About page.
- **About**: long-form bio (important for his identity), disciplines, selected credits, and a **contact form on the same page**.
- **Say hi**: standalone page for the existing button that lights an LED on his real desk (pressed daily; keep it).
- **Project pages**: one per featured entry, reached by clicking an entry. Not in the nav.
- **Nav**: About, Say hi. Name/logo links home.
- **Secondary links** (footer, small spaced caps, V2's two-tier style): YouTube, Instagram, Spotify, Merch (shop.abhi.work, his Fourthwall store), Resume.

## Intro copy (chosen)
- Headline: **A creative who builds.**
- Supporting line: "I'm Abhi, based in Austin. I've released albums, shot for magazines, exhibited installations, and engineered design systems used by millions."
- Capability line: "I bring brands to life online, with design, engineering and direction under one roof."
- Buttons: "Get in touch" (to the About page's contact form) and "More about me" (to About).

## Featured work rows
One project per row. Each row: one large lead image plus 2–3 smaller images on one side; tag, year, title, a short paragraph, and a link on the other. Sides may alternate. Most visitors won't click in, so each row should explain the project on its own.

Current entries (order is a draft):
1. Miami Vice Cocaine Dream — 2018–19 — photo series
2. Track Dog Racing — 2026 — client (website rebuild + marketing; once it ships). Client entries get a distinct tag.
3. YouTube + merch — 2025–now — car channel (totaled-car rebuild, supercharger build) with the merch shop; 3 favorite videos inside
4. Indulgent — 2015–present — solo music project; plays every instrument, directs album art; albums Toxic and No Drive Will Take Me Home plus singles
5. Editorial work — fashion editorial, magazine publications incl. a Spark Magazine cover
6. The World Misses You — 2021 — weather-reactive LED installation, exhibited at DadaLab, Austin (earlier LED experiments fold into this page)
7. Merry Jane and the Fondas — 2018–19 — drums; studio EP with Jackie Venson; official SXSW showcase
8. User Void — 2019 — photo series
9. Live drumming — 2022–23 — Caladan and Shivering Demons, multi-camera show footage
10. Photo portfolio

Kept off the homepage: the portraits page (a pitching tool, linked from elsewhere), Velaga Advisors (his dad's business; he's not proud of the UI, possible quiet case study later), the resume (footer).

## Visual direction
- **Dark base** for the whole site (near-black, e.g. #0E0E0E, light type). His photos are low-key and glow on dark; V2's light mode felt sterile.
- **Immersive, alive, atmospheric** like V1 (archived at v1.abhi.work), with V2's restraint in type and structure.
- Photos are the environment for big moments (hero, About hero, Say hi). Content and body text sit on calm solid surfaces. Idea to explore: tint each featured row with a dark color sampled from its own photos.
- Contrast rules learned from past experiments: avoid mid-tone saturated photos (bright reds, yellow-greens) behind text, blur and darken backgrounds, keep one protected text zone with a scrim, prefer heavier type over thin, never put photos behind photos.

## Hero slideshow
Full-viewport, edge-to-edge, auto-advancing (V1's slideshow made a big impact). Planned 7–10 assets:
- Several ~5s **video** action clips from his car YouTube videos (sparks while cutting the car open, pulling the engine, the supercharger running)
- Favorite horizontal **film photos** (strong candidates: house at night, Lord's boxing gym, red bedroom with LED strand, Miami Vice kitchen/garage)
- 1–2 recent **music performance** video clips
- 1 **LED installation** video clip (unused footage; also belongs on The World Misses You page)

Guidelines: draft order car clip → film photo → music clip → LED clip → alternate the rest, spreading car clips out. Muted, looping, inline video; poster frames; load only the first slide up front; a few MB per clip at 1080p; pause control; reduced-motion users get a static frame; per-slide focal points for mobile crops; keep sparks and bright areas away from the text zone. Optional small caption per slide linking to that project's row.

Assets are not finalized yet. Remind Abhi to pull the action video clips when finalizing.

## References
- Figma file "abhi.work", page **V3 (2026)**: three side-by-side versions (light wireframe, photo hero, dark base) plus a "Project row" component. Page V2 (2022) holds the original wireframes and earlier photo-background experiments.
- Live V2: abhi.work. Portfolio photos: abhi.work/portfolio (images at /images/photos/portfolio/p1–p20.webp). V1: v1.abhi.work.
- Abhi will hand-design the final visuals. Treat the wireframes as structure, not a visual spec.
