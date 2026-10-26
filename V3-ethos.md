# abhi.work V3 — design ethos

A living record of how V3 should look and feel, why, and what we've learned getting here. Updated as the design is refined. For scope, pages and content, see `V3_HANDOFF.md`.

## The goal

V3 should feel **alive, immersive and unmistakably Abhi**. A visitor should get who he is before reading a word: a creative who builds, with a decade of music, film photography, installations and car videos behind him, who also engineers for a living.

Two jobs, in order:
1. A portfolio and running archive of his best work, in every medium.
2. A quiet signal, to small and boutique businesses, that he can bring a brand to life online. It states the capability plainly and points to contact. It never says "hire me", "clients" or "services".

## The aesthetic: brutalist, dark, and moving

- **Brutalist.** Flat surfaces, hard edges, plain lines, square corners. The interface is a grid of type and rules, not a set of objects.
- **Dark base.** Near-black `#0E0E0E` everywhere, with light type. His photos are low-key and glow on dark.
- **The work is loud; the interface is calm.** Photography and video supply the drama. Everything else stays quiet so it doesn't compete.
- **Motion with purpose.** Things move to show state or to guide (a slideshow, a sweep on hover, an eased scroll to a project). They don't move to decorate.

### What we don't do
- **No 3D or depth effects:** no drop shadows, gradient "lighting" or rounded card shapes. Tried on the featured-work cards and rejected: "my aesthetic is brutalist and this 3d stuff looks weird."
- **No decorative color:** no per-card tints. Tried, sampled from each project's lead photo, and rejected. Color comes from the photos, not the UI.
- **No generic-template moves:** no sterile white minimalism, no effects that don't come from his own work, no text fighting busy imagery.

## Learnings from V1 and V2

| | What worked | What didn't | What V3 takes |
|---|---|---|---|
| **V1** | A full-screen slideshow that moved on its own. It conveyed his world instantly and felt full of life. Playful, signature hover (a bar sweeping behind menu links). | Less structure and restraint; readability suffered. | The atmosphere and the motion: an auto-advancing hero, and V1's menu sweep reborn as the card hover. |
| **V2** | Discipline: clear hierarchy, quiet interface, readable text. Its own type system (Akzidenz-Grotesk + Nimbus Sans). The dotted Say hi button. | Overcorrected into sterile. Light mode and no full-bleed imagery turned his photography into thumbnails on a blank page. | The type, the restraint, the dotted line, the 0.7s color fades. |
| **Data** | — | ~60–70% of visitors lost per extra click. | The homepage carries the whole story. Most visitors never click in, so each project row explains itself. |

**V3 = V1's atmosphere with V2's discipline.**

## Principles, and the decisions behind them

### Type: V2's own fonts, not new ones
The site keeps the typefaces it already has, so V3 feels like an evolution of him, not a reskin.

| Role | Font | Why |
|---|---|---|
| Headlines, card titles, footer links | Nimbus Sans Bold Italic | V2's nav-link voice. Bold and slanted, it carries energy without decoration. Card titles are in capitals, matching V2's nav. |
| Body text | Akzidenz-Grotesk Light Extended at faux bold (700) | V2's body exactly. Only the Light face exists, so the browser thickens it; that's part of V2's look and we kept it. |
| Logo, nav, labels, type/year, captions | Akzidenz-Grotesk Light Extended (true light) | Quiet, wide spaced capitals for the interface layer. |
| Buttons | Arial | V2's Say hi button never set a font, so it rendered in the browser's default. Kept for continuity. |

Tried and dropped: Akzidenz Light (regular width) for card titles, in mixed case and then in capitals. It read as too faint against the work.

### Lines and edges
- **One content width, 1360px, except the hero.** On a big or ultra-wide monitor everything readable stays in a centered 1360px column (1440px with margins): text, cards, grids, galleries. Backgrounds, divider lines and the dot grid still run edge to edge, so the page never looks boxed in. The home hero montage stays fully full-bleed because it's cinematic; only its text and controls line up with the column. Divider lines are the exception to edge-to-edge: they belong to the content, so they stop at the column's edges too. Where a line sits on a section, that section's gutter is a margin, not padding.
- **One line style: 1px dotted**, from V2's Say hi button. Used on button outlines and the card dividers.
- **Square everything.** No border radius.
- **Alignment is sacred.** Text lines up on one left edge across the page: intro, "Featured work" label, card titles. When an effect needed breathing room (the hover bar), we let the effect bleed into the page margin rather than indent the text. Indenting the cards looked "all offset."

### Labels say what things are, not where they sit
- Removed the wireframe's numbered chapters ("01 — Intro", "02 — Featured work") because they made no sense to a visitor. Plain labels stay only where they name content ("Featured work", "Disciplines", "Selected credits").
- Project type and year are a quiet line of spaced capitals ("PHOTO · 2018–19"), not boxed tags. Boxes looked like buttons.
- Client work gets a white "● CLIENT" so it stands out without a different shape.

### Interaction
- **Nav:** capitals, muted gray fading to white over 0.7s on hover, V2's timing. The current page is white and underlined.
- **Buttons:** one shared component. A dotted border, a 0.7s background fade, pink while sending (from V2's Say hi).
- **Featured work as a stacking accordion:** each project card sticks under the one before it, so the titles pile up like a deck as you scroll. The stack lets go all at once at the end rather than collapsing card by card.
- **Card hover:** an invert sweeps left to right across the title bar and eases back on leave (V1's menu sweep, made brutalist: square, black/white difference). It runs on V1's own curve (`ease`), 1.1s in and 0.7s out, unhurried so it glides rather than snaps. It's driven by JavaScript, not a CSS transition: browsers cut an interrupted transition's reverse short, so a quick hover's bar used to vanish instead of easing out. Now every move starts from wherever the bar is, and leaving always gets its full ease-out.
- **Card click:** scrolls to that card with a clearly eased in-out curve (1.6s), through the site's existing smooth scroller.
- **Entrances (from V2):** every page fades in over 2.5s, and photos fade in over 1s as each one loads, so nothing pops in half-drawn.
- **Reduced motion:** sweeps become instant; the slideshow holds a still frame.

### Project pages: photo collections
- **They work as V2's do.** The photo pages (Miami Vice, User Void, Editorial, Photo portfolio, Portraits) keep V2's exact photo sequence and layout engine. Each photo gets a full-screen-tall slot with its own width cap and left, center or right alignment; some photos pair up across a row; each fades in as it loads; on phones they stack edge to edge. The sequencing was hand-composed, and it works, so V3 doesn't touch it.
- **Pure black, not off-black.** The collections sit on `#000` instead of the site's `#0E0E0E`, so the photos glow with no gray cast around them. The off-black read as dull behind full-size prints.
- **V3 only reskins them.** They get the dark page, V3 header and footer, and a left-aligned intro. The title uses the same voice as the card you clicked in from, Nimbus Bold Italic capitals, at page scale, with the same "PHOTO · YEAR" line. The artist statement is in the V2 body font, word for word from V2. The book carousels stay.
- **Getting back is one click.** "← Featured work" returns to that project's card, already in its stacked spot on the home page. That's the 60–70%-loss-per-click lesson applied in reverse: don't make people re-find their place.

### Project pages: music
- **One page per home card, not per band and not one combined page.** The pages are Indulgent, Merry Jane and the Fondas, and Live drumming. Live drumming covers Caladan and Shivering Demons, which are too thin on their own. A click lands on exactly what was clicked, instead of somewhere down a long page (the click-loss lesson again). V2's `/music` now redirects to Indulgent.
- **V2's content, V3's frame.** Each page keeps V2's text, photos, releases and show videos word for word. V2's layout carries over: wide 16:9 photos, side-by-side pairs, a release-cover grid and a two-column video grid. Sub-sections (Releases, Caladan, Live…) use the same title bar as the home cards, with the title on the left, the role and years on the right, and a dotted line on top, so a project page reads as a card opened up.
- **Shared shell.** Photo and music pages use one intro: back link, title, "TYPE · YEAR" line, subtitle and statement.

### Project pages: The World Misses You
- **V2's Software page, renamed for what it is.** It's now `/the-world-misses-you`, and `/software` redirects there. Same text, photos and exhibition video as V2.
- **Motion where the work moves.** An installation that animates is shown animating: three short muted loops from previously unreleased footage (rain, twinkle, opening night). They sit in an "In motion" section, so you see the rain and twinkle the text describes. Reduced-motion visitors get still frames.
- **Shared blocks.** Music and installation pages build from one set of blocks: titled sections, wide photo, photo pair, text, releases, videos and loops.

### Merch
- **On the site, not a separate shop.** `/merch` uses Fourthwall's Storefront API for products and the cart, styled with V3's own pieces: dotted lines, the invert on the selected size, the wide-caps meta line and the dotted button. Only payment leaves for Fourthwall's hosted checkout, which lives on shop.abhi.work.
- **In the top nav.** Merch is the one place a visitor can act beyond reading, so it earns a top-level link: About, Merch, Say hi. It has no "← Featured work" link.
- **Cutouts float.** The first photo of each product is a transparent PNG, shown on the page itself with no frame or backing. On hover the grid swaps to the worn or lifestyle photo.
- **The token stays server-side.** Every catalog and cart call goes through the site's own `/api/cart`.

### About
- **V2's offset grid, carried over.** About is the one page about him rather than the work, so it shows him from several sides at once: on stage, at the drums and in a portrait. The bio sits on a 12-column grid. On row 1 the photo, justified bio and tall photo all align at the bottom, so their tops stagger. On row 2 the portrait is pushed in one column. The unevenness is the point: it reads as composed, not templated. The bio keeps V2's justified block but at 14px with looser line spacing and hyphenation. V2's 12px faux-bold wide type was too hard to read on dark, and the bio is the page's most important text. On phones everything stacks in one column, as in V2.
- **Links only where they add something.** The list beside the portrait holds only what the nav and footer don't already cover: email, the photo Instagram (@abhi.film), GitHub and LinkedIn. The main Instagram, YouTube, Resume and Merch were dropped as duplicates. GitHub and LinkedIn sit next to the bio for hiring managers.

### Utility pages
- **Resume:** V2's resume stays a white sheet, on purpose. It mirrors the downloadable PDF and prints cleanly. In V3 it sits on the dark base like a document on a desk, under the V3 header, with a dotted "Download PDF" button. Printing hides everything but the sheet.
- **404:** the V3 hero type ("Lost?") with V2's line kept ("It looks like you're lost :("), and two ways back.
- **Portraits** isn't a featured card, so its back link says "← Home".

### The hero
- A full-screen, auto-advancing slideshow of his own work: car-build clips, film photos, live music, the LED installation. Video is his medium now, so motion is the most honest picture of him.
- Order rhythm: car → photo → music → LED, with car clips spread out.
- Contrast rules: avoid bright, saturated mid-tones behind text; keep sparks and bright areas out of the text zone; use a scrim for one protected text area; prefer heavier type over thin.

## Open questions
- The stacked card titles get cut off on phones ("MIAMI VICE COC…"). Leading idea: move the type and year out of the phone header.
- Figma uses stand-in fonts because the real ones aren't available there: Arimo for Nimbus Sans and Arial; Lexend Exa Light for the interface layer; Lexend Exa Regular for the faux-bold body.
- Lines elsewhere on the page are still solid; whether they should all be dotted is undecided.
- Hero assets aren't final; the supercharger-running clip is still missing.

## Change log
- **2026-10-25:** The footer line and About's section lines now stop at the content column instead of running the full screen width.
- **2026-10-25:** Site-wide max content width of 1360px, centered, for big and ultra-wide screens. The hero video stays full-bleed.
- **2026-10-25:** About bio readability: 12px → 14px, line height 1.2 → 1.45, hyphenation on, still justified.
- **2026-10-25:** About links cut to email, @abhi.film, GitHub and LinkedIn, dropping footer duplicates. The site email is now abhinav.velaga@gmail.com everywhere, replacing the old UT address.
- **2026-10-25:** About page uses V2's offset grid again: the live photo, justified bio and tall drum photo staggered on one row, then the portrait offset one column with V2's link list beside it. This replaces the single-portrait layout.
- **2026-10-25:** Domain plan for merch. Fourthwall gets `checkout.abhi.work`, for checkout only. `shop.abhi.work` points at this site, which redirects it in `next.config.js`, with old product links going to the matching `/merch/` page. The checkout domain is set by `FOURTHWALL_CHECKOUT_DOMAIN`.
- **2026-10-25:** Merch moved onto the site at `/merch`, built on Fourthwall's Storefront API: product grid, product pages with size picker, a cart drawer in V3's style, and Fourthwall's hosted checkout on shop.abhi.work. Merch joins the top nav (About, Merch, Say hi), replacing the brief's two-link nav. The product cutouts are transparent PNGs shown with no backing color.
- **2026-10-25:** Resume and 404 moved onto V3; Portraits' back link now says "← Home". Figma brought up to date: About and Say hi without background photos, Track Dog Racing hidden, and new dark frames for Miami Vice (photo), Indulgent (music), The World Misses You, Resume and 404.
- **2026-10-25:** Track Dog Racing card hidden (commented out in `app/data/v3.js`) until the client site ships. Featured work is down to 9 cards.
- **2026-10-25:** The World Misses You page built from V2's Software page, plus three loops cut from unreleased Dadageek footage. `/software` redirects to it. The music blocks became general project blocks.
- **2026-10-25:** Music pages built: Indulgent, Merry Jane and the Fondas, and Live drumming, from V2's Music page. `/music` redirects to Indulgent. Fixed "← Featured work" landing on the wrong spot: a stale scroll limit from the previous page cut the jump short.
- **2026-10-25:** Restored V2's entrance animations, which V3 had dropped: every page fades in over 2.5s, and each project and portrait photo fades in over 1s as it loads.
- **2026-10-25:** Same for Say hi: removed its red-bedroom background photo. Only the home hero now uses a photo as background.
- **2026-10-25:** Removed the blurred boxing-gym background photo from the About page, as an experiment. The portrait and bio now sit on the plain dark base with the dot grid.
- **2026-10-25:** V2's animated dot grid is back on every V3 page, with light dots for the dark base. The featured cards are now transparent so the grid runs through them. Each card is trimmed where the next one covers it, so the stack still hides what's underneath.
- **2026-10-25:** Photo collection pages switched to pure black (`#000`); the rest of the site stays `#0E0E0E`.
- **2026-10-25:** First project pages. The five photo collections move to V3, keeping V2's photo layout and behavior exactly, with a V3 intro and a "← Featured work" link back to their card in the stack.
- **2026-10-25:** Figma brought in line with the build:
  - The Project row component is now a title bar (bold italic capitals, dotted top line) over a body row.
  - The dark pages use the body-font stand-in.
  - A new "Featured work — interactions (dark)" frame documents the stacking accordion and the hover invert, which static frames can't show.
- **2026-10-25:** Card hover sweep rebuilt in JavaScript so quick hovers ease out instead of vanishing. Slowed to 1.1s in / 0.7s out on V1's `ease` curve, after ease-out curves felt like they came in too quickly.
- **2026-10-25:** Document created. Captures the decisions to date: dark brutalist base, V2 fonts, dotted lines, removed chapter labels, plain-text tags, stacking accordion, V1-style invert hover with bleed, eased card scroll. Records the rejected experiments: per-card tints, gradient/shadow/rounded cards, Akzidenz Light titles.
