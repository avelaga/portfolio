# abhi.work V3 — design ethos

A living record of how V3 should look and feel, why, and what we've learned getting here. Updated as the design is refined. For scope, pages and content, see `V3_HANDOFF.md`.

## The goal

V3 should feel **alive, immersive and unmistakably Abhi**. A visitor should get who he is before reading a word: a creative who builds, with a decade of music, film photography, installations and car videos behind him, who also engineers for a living.

Two jobs, in order:
1. A portfolio and running archive of his best work, in every medium.
2. A quiet signal, to small and boutique businesses, that he can bring a brand to life online. It states the capability plainly and points to contact. It never says "hire me", "clients" or "services".

## Voice: a mature artist, written for everyone

The site should read like a mature artist's: understated, specific and confident enough to let the work speak. He isn't a full-time artist, but that is the mindset and the look the site cultivates.

**Who arrives, often without context:**
- YouTube viewers clicking through from the car videos
- Small businesses who heard about him and want to know if he can help with their brand or site
- Recruiters, from LinkedIn and his resume
- Reddit and the wider internet, from things he builds and shares (the Say hi LED, a design-feedback thread that sent thousands of visitors)

**So the copy must not alienate any of them by leaning toward one:**
- **Not commercial.** No agency or services language ("bring brands to life", "under one roof", "hire me"). Capability shows through the work.
- **Not generic.** No taglines or LinkedIn-speak; nothing any other portfolio could say.
- **Not showing off.** No stat-dropping ("used by millions"), no credential lists, no listing identities (the "bodybuilder, engineer, radio DJ" bio problem).
- **Authentic.** Plain first person, in his own voice: say what he does and what he cares about, then get out of the way.

**The home intro is the model:** no name headline and nothing over the montage, which speaks for itself; one plain sentence sits beneath it, before the work: "I make records, photographs, light installations and software in Austin. Lately, I'm rebuilding a car." It says what he is without reaching to prove anything. It replaced "A creative who builds." (a tagline), a credentials sentence ending in "used by millions" (showing off), and "I bring brands to life online… under one roof" (agency pitch). The hero has no buttons at all: the linked words in the intro are the way in, and About is in the nav. Nor is there a call to action at the bottom: the featured work simply ends, then the footer. The "Have something in mind? Let's make it." strip and its "About and contact" button were removed as a landing-page closer; this is a portfolio for people who want to learn more, not a funnel. Each thing he makes links to it (records → Indulgent, photographs → portfolio, light installations → The World Misses You, software → resume, rebuilding a car → YouTube), with only a faint underline. The name is only the small mark in the nav (see below).

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

**How Abhi sees it (2026-10-26):** V3 is V1's true successor. V1 was his first site: the instincts were right (full-bleed work, dark, motion, the menu sweep) but the execution was amateur, without consistency or thought behind the details. V2 was a side experiment in web design that led him to the brutalist language he still uses. V3 is everything coming together: V1's dark full-bleed atmosphere and its sweep hover, V2's brutalist lines and type, and the dot grid for depth. When a new idea comes up, the test is whether it fits that lineage, not whether it's new.

## Principles, and the decisions behind them

### Type: V2's own fonts, not new ones
The site keeps the typefaces it already has, so V3 feels like an evolution of him, not a reskin.

| Role | Font | Why |
|---|---|---|
| Headlines, card titles, footer links | Nimbus Sans Bold Italic | V2's nav-link voice. Bold and slanted, it carries energy without decoration. Card titles are in capitals, matching V2's nav. |
| Body text | Akzidenz-Grotesk Light Extended at faux bold (700) | V2's body exactly. Only the Light face exists, so the browser thickens it; that's part of V2's look and we kept it. |
| The name: nav-bar logo only | Basteleur Moonlight (Velvetyne, libre) | The one exception to "V2's fonts". A Helvetica-clone name looked like a template. A reworked medieval serif, artist-made and a little strange, kept small: the one odd detail, like Tom Sachs's handwritten logo. |
| Nav, labels, type/year, captions | Akzidenz-Grotesk Light Extended (true light) | Quiet, wide spaced capitals for the interface layer. |
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
- **Only the title bars stack.** Cards are taller than many screens, so sticking whole cards hid their content (first seen on phones, then on normal laptop windows). Now only the title bars stick and stack, and each card's content scrolls beneath so it can be read in full. Every title stays in the stack; the bars get thinner on short windows so the whole stack never takes more than about half the screen. (A 5-bar cap was tried first, but cards sharing the last slot read as missing.) On wider screens the description holds beside the photos until they pass.
- **The header never moves.** From V2's phone header: the name, nav and MENU stay fixed at the top of every page with no background, inverting (`mix-blend-mode: difference`) against whatever passes beneath, light over dark, dark over light. No hide-on-scroll-down / reveal-on-scroll-up: it caused animation glitches and Abhi didn't like it. The home card stack starts just below the header.
- **One bright title at a time.** With many bars stacked, the screen is mostly titles and it's hard to know where to look. The bar of the card being read stays white; every bar stacked above it fades to gray (0.7s), so the eye lands on the current card. Bars still below, not yet stacked, stay white.
- **Clear title bars.** The stack's bars have no background, so the dot grid runs through them. A small scroll script trims card content as it passes under the stack, and trims a bar when a later one takes its slot, so nothing shows through. On touch devices the bars are solid instead: momentum scrolling outruns any script, and content flashed through on fast flicks.
- **Phone menu: V2's, not a hamburger.** A plain "MENU" word opens big stacked italic links between hairlines, with the current page inverted (white bar, black text) and the social links small beneath. The name in the header gets bigger since the links are gone.
- **No side margin for photos on phones.** Cards, photos and videos run edge to edge (V2's mobile layout); text keeps a 16px inset. The home intro shrinks so the montage stays the main event.
- **Reduced motion:** sweeps become instant; the slideshow holds a still frame.

### Project pages: photo collections
- **They work as V2's do.** The photo pages (Miami Vice, User Void, Editorial, Photo portfolio, Portraits) keep V2's exact photo sequence and layout engine. Each photo gets a full-screen-tall slot with its own width cap and left, center or right alignment; some photos pair up across a row; each fades in as it loads; on phones they stack edge to edge. The sequencing was hand-composed, and it works, so V3 doesn't touch it.
- **Pure black, not off-black.** The collections sit on `#000` instead of the site's `#0E0E0E`, so the photos glow with no gray cast around them. The off-black read as dull behind full-size prints.
- **V3 only reskins them.** They get the dark page, V3 header and footer, and a left-aligned intro. The title uses the same voice as the card you clicked in from, Nimbus Bold Italic capitals, at page scale, with the same "PHOTO · YEAR" line. The artist statement is in the V2 body font, word for word from V2. The book carousels stay.
- **Getting back is one click, to where you were.** Leaving the home page remembers the scroll position, and the project page's back link returns there exactly: to the top (labelled "← Home") if you came from the intro, or to the same spot in the stack ("← Featured work"). With nothing remembered (arrived from search or a shared link), it lands on that project's card. That's the 60–70%-loss-per-click lesson applied in reverse: don't make people re-find their place.

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
- **Policies come from Fourthwall, not our copy.** Each product's returns terms come through the API (they differ: the sticker pack ships from me), and Terms, Privacy, Returns & FAQ and Support link to Fourthwall's pages as the Merchant of Record. Those links sit on the right of the one footer bar, not in a second footer. The cart repeats the one line people must see before paying: made to order, no returns or exchanges.
- **The car is the backdrop.** Like the old Fourthwall shop, `/merch` sits on a fixed, blurred photo of the Miata at sunset (darkened toward the bottom for legibility), and ends with the rebuild: a muted 15s loop cut from the channel's footage that opens the video on YouTube. Self-hosted instead of a YouTube embed, which forces captions and a paid-promotion badge onto muted autoplay.
- **The token stays server-side.** Every catalog and cart call goes through the site's own `/api/cart`.

### About
- **V2's offset grid, carried over.** About is the one page about him rather than the work, so it shows him from several sides at once: on stage, at the drums and in a portrait. The bio sits on a 12-column grid. On row 1 the photo, justified bio and tall photo all align at the bottom, so their tops stagger. On row 2 the portrait is pushed in one column. The unevenness is the point: it reads as composed, not templated. The bio keeps V2's justified block but at 14px with looser line spacing and hyphenation. V2's 12px faux-bold wide type was too hard to read on dark, and the bio is the page's most important text. On phones everything stacks in one column, as in V2.
- **No disciplines list, no credits list.** Listing five disciplines reads like an eight-things Instagram bio: saying you're everything dilutes all of it, and it splits him into categories when the thesis is one person. The site shows the range (montage, card stack, bio) instead of listing it. Credits stripped of context read as name-dropping to a mixed audience of YouTube viewers, recruiters and small businesses, so each lives on its own project page, where it means something (SXSW and Jackie Venson on Merry Jane, the Spark cover on Editorial, Dadageek on The World Misses You). The one focused claim left on About is the offer itself, in the contact section.
- **Influences: bare words, in the grid.** Names listed one per line in the About grid beside the portrait, where the links used to be, set exactly like those links (body font, 12px, muted). No links, images, explanations or ties to projects; the mix itself says where he comes from. The list is a first brainstorm, to be refined down.

### Say hi
- **V2's words, untouched.** The page copy is his, verbatim and lowercase: "say hi to me in realtime", the welcome line, the HELLO button and the status messages (only V2's "recieved" typo was fixed). V3 changes only the frame (type, colors, dotted button). Don't rewrite or add copy here.
- **The desk clip is always square.**

### Contact
- **One open line, not a pitch.** The contact section asks "Interested in working together?" and nothing more, with no "Contact" label. It reads equally well to a recruiter, a small business or a collaborator, and it stays vague about job versus freelance. The earlier "Brand, web and digital direction for small and boutique businesses" read as a services tagline, which the brief rules out. The hero's capability line already does the quiet signalling.

- **The form actually sends.** It posts to the site's own `/api/contact`, which emails Abhi through Resend with the sender as reply-to, so a reply goes straight back. Visitors never leave the page or need a mail app. A hidden honeypot field and a per-sender limit keep spam out; Cloudflare Turnstile is the next step if needed. If sending fails, the visitor sees why and still has the email address.

### Old links keep working
- **Every V2 URL still resolves.** Pages that kept their place keep their URL: home, About, Say hi, Resume, Miami Vice, User Void, Editorial, Portfolio, Portraits. The ones that moved (V2's single `/music` page became three, `/software` became The World Misses You) get permanent redirects in `next.config.js`, so old links, bookmarks and search results land in the right place. V3's own URLs follow the new structure rather than V2's.

### Utility pages
- **Resume:** V2's resume stays a white sheet, on purpose. It mirrors the downloadable PDF and prints cleanly. In V3 it sits on the dark base like a document on a desk, under the V3 header, with a dotted "Download PDF" button. Printing hides everything but the sheet.
- **404:** the V3 hero type ("Lost?") with V2's line kept ("It looks like you're lost :("), and two ways back.
- **Portraits** isn't a featured card, so its back link says "← Home".

### The hero
- A full-screen, auto-advancing slideshow of his own work: car-build clips, film photos, live music, the LED installation. Video is his medium now, so motion is the most honest picture of him.
- Order rhythm: car → photo → music → LED, with car clips spread out.
- Contrast rules: avoid bright, saturated mid-tones behind text; keep sparks and bright areas out of the text zone; use a scrim for one protected text area; prefer heavier type over thin.

## Open questions
- Figma uses stand-in fonts because the real ones aren't available there: Arimo for Nimbus Sans and Arial; Lexend Exa Light for the interface layer; Lexend Exa Regular for the faux-bold body.
- Lines elsewhere on the page are still solid; whether they should all be dotted is undecided.
- Hero assets aren't final; the supercharger-running clip is still missing.

## Change log
- **2026-10-27: Phone menu decided: fluid color (menu2).** Each time the menu opens, a still from the hero montage (a photo or a clip's poster frame, never the same twice in a row) is blurred 28px and darkened to 42% until it's only light and color, like Apple's fluid-color backgrounds, with the page's dot grid lifted on top and the links above that. Chosen over menu1 (the pause screen: the page blurred away under the grid, clean but the same every time) and menu3 (a lightly blurred portfolio photo with no grid, which showed off the photography but competed with the links). Vivid stills glow the most; darker ones come out nearly black. The live switch used to compare them is removed.
- **2026-10-27 (experiment, on):** The phone menu's backdrop shows a random film photo from the photo portfolio (the 20 in `portfolioImages`), different each time it opens, blurred 6px and darkened to 40%, so the photo still shows through softly while the links stay the clearest thing; no dot grid in the menu (tried: grid lifted over the blur, then a 28px blur that reduced the photo to color; Abhi preferred the photo more visible and the grid gone). Stills only, never video: the menu is a wayfinding moment, so nothing moves behind the choices, and other pages don't load clips just for a background. Echoes V1, whose menu sat over the slideshow.
- **2026-10-27:** On phones the card title bar holds only the title, so long ones ("Miami Vice Cocaine Dream", "Merry Jane and the Fondas") no longer cut off with "…". The type and year move into the card as a small label above the description (progressive disclosure: the stacked bar's job is to name the card; the details come once you're in it). Desktop keeps both in the bar.
- **2026-10-27:** The footer has no top line any more: it pressed against the last photo on phone gallery pages and added one more rule to a page already full of lines (the stacked bars). Spacing does the separating (the footer's own padding, no extra margin), and the links are centered on desktop as a symmetrical closing mark, which matches the edge-to-edge spread on phones. Centering is the one deliberate break from the site's left alignment, for the end of the page only.
- **2026-10-27:** Card link labels are one consistent word: "View →" on every card that opens a page on the site, and "YouTube ↗" on the YouTube card (the destination's own name). Replaced the per-card wordings ("View the series", "Listen"…), which varied for no reason, and "Listen" promised audio but opened a page; Abhi preferred consistency over specificity. Arrows tell you where a link lands: → stays on the site, ↗ leaves it (the YouTube card, and "Watch on YouTube" on the merch page). The whole card body now opens its link (a friend kept clicking photos and descriptions), with the link brightening on hover; the title bar still brings a stacked card back into view. The nav name scrolls back to the top on the home page.
- **2026-10-27:** Closing the phone menu keeps the dot grid lifted until the blurred backdrop has faded out, so the dots no longer dim under it and pop back.
- **2026-10-27:** The montage is now a little shorter than the screen (104px short on desktop, 84px on phones), so the first line of the intro sentence peeks in at the bottom. It fixes the "illusion of completeness" (a full-screen hero with nothing crossing the bottom edge reads as the whole page) without a scroll arrow, which is a template cliché. The work still takes over the screen.
- **2026-10-26:** The phone menu shows the dot grid over its blur. The menu is now two layers (blurred backdrop, then the links), and while it's open the page's own animated grid canvas is lifted between them, so the menu carries the same texture as the page instead of going flat.
- **2026-10-26:** Phone footer links spread edge to edge with even gaps on one line (wrapping only under 350px wide). Fixed the open menu flashing earlier cards: locking scroll with `overflow: hidden` on both `<html>` and `<body>` made the body its own scroll box, so the sticky bars re-anchored and jumped; now only `<html>` is locked.
- **2026-10-26:** Phone header controls sized for thumbs: MENU, CLOSE and Cart go from 13px to 15px type, and each gets an invisible ~48px tap area (padding offset by negative margin, so the bar looks the same). They had been 15px-tall targets, well under Apple's 44pt minimum; V2's MENU went the other way (30px type in a 120px box). The full "Cart (0)" label now shows down to 350px wide.
- **2026-10-26:** **Phones get a three-bar deck instead of the full stack.** On a phone the full stack didn't fit (eight bars plus the header covered over half the screen), and on a real iPhone the sticky bars didn't keep up with momentum scrolling: nothing seemed to stack on the way down, then everything was stacked on the way back up. Now the stack fills three slots; each new card's bar slides into the bottom slot and pushes the deck up one, and the top bar slides under the strip behind the header while its title shrinks and fades. It runs as scroll-driven CSS animations (keyframes measured from the layout in `useStackDeck`, Home.js), so it moves with the scroll itself rather than reacting after it. Phones without scroll-driven animations (before Safari 26) get plain push-up titles instead: one bar at a time, pushed away by the next, like iOS list headers. Desktop keeps the full stack.
- **2026-10-26:** V2's phone header, on every screen size: the bar (name, nav, MENU) stays fixed for the whole page with no background and inverts (`mix-blend-mode: difference`) against whatever passes beneath it, so it reads light over dark and dark over light, and adds depth without a blur panel. Replaces the frosted reveal-on-scroll-up bar, which is now deleted entirely (it caused animation bugs, and Abhi didn't like the hide/reveal). The home card stack now starts below the bar (78px desktop, 75px phone) instead of at the very top, and on phones the top stuck bar fills the strip behind the header so cards don't show above the stack. Trade-offs to judge on a real phone: busy photos can make the inverted type noisy, and the stack has ~75px less reading room.
- **2026-10-26:** Abhi noticed the montage-only landing is nearly V1's: full-bleed work, nothing competing with it, which is what he loved about V1 ("the work just showed itself off… it looks so nice, mature"). V3 keeps that and fixes V1's flaw: there you had to open a menu to go anywhere; here you simply scroll into the sentence and the work. Guard this: don't add headlines, buttons or overlays back onto the montage.
- **2026-10-26:** Nothing overlaps the montage now except the small nav and the caption: the intro sentence moved out of the hero to just beneath it, so the footage speaks for itself and the words are found on the first scroll. The heavy left-side darkening behind the old text is gone; only light shades at the top and bottom remain.
- **2026-10-26:** **No big name on the home hero.** The giant name over a full-bleed slideshow with a tagline is the portfolio-template layout, and it felt self-important ("almost like I'm a narcissist"). Research across ~25 artist sites (Meyerowitz, Tillmans, Kander, Harley Weir, Tyler Mitchell, Arsham, Eliasson, Turrell, Sugimoto…): fine artists and photographers set their name small (13–22px), plain, top-left, and let the work lead; only musicians make the name a big wordmark, as era-specific album art. So the hero is now the slideshow plus the one intro sentence at a larger size, the name lives only in the nav (Basteleur Moonlight, small, always visible), and the page h1 "Abhi Velaga" is visually hidden for search and screen readers.
- **2026-10-26:** The name (home hero and nav-bar logo) is set in **Basteleur Moonlight** (Keussel, Velvetyne; libre, self-hosted). Nimbus Sans read as a Helvetica default, the Squarespace look. Trialled ~50 faces on the live hero: Abhi ruled out the popular display faces (Panchang, Clash, Syne), formal scripts and rough metal blackletters, and kept being drawn to reworked medieval / blackletter forms. Basteleur is that, made modern and quiet: unmistakably artist-made, still readable small. It's used only for the name; everything else stays Akzidenz and Nimbus, so the name is the one hand-made moment on the page. Nav logo is now mixed case, not tracked caps.
- **2026-10-26:** Figma now mirrors the code through captures ("V3 — current build" row), not hand-redrawn frames. The code is the source of truth, so captures can't drift; the old dark wireframes are marked superseded.
- **2026-10-26:** Home section label "Featured work" → "Portfolio": plain and clear without the template phrasing. Removing it entirely risked confusing people for the sake of minimalism. Back links read "← Portfolio". The divider line above it is gone.
- **2026-10-26:** Stacked title bars above the current card dim to gray; only the card being read stays bright.
- **2026-10-26:** Fast flicks on phones showed content through the clear title bars (the masking script lagged momentum scrolling). Touch devices now get solid bars with no script; desktop keeps clear bars, with the mask updated in the same frame as the scroll.
- **2026-10-26:** Footer trimmed to YouTube, Instagram, Spotify and Resume: the "abhi.work" note (a wireframe leftover) and Merch (now a top-level nav link) are gone. Merch pages still show their policy links on the right.
- **2026-10-26:** Old-link audit: every V2 URL works. `/music`, `/software`, `/photo` and `/published` are now permanent (308) redirects in `next.config.js`, replacing temporary redirect pages.
- **2026-10-26:** Removed the hero's Pause button; the montage just plays, with its caption. Reduced-motion visitors still get a still frame.
- **2026-10-26:** Removed the hero's "About" button too; the home page has no call-to-action buttons.
- **2026-10-26:** Removed the home page's closing call to action ("Have something in mind? Let's make it." / "About and contact").
- **2026-10-26:** Back links return to exactly where the visitor left the home page (hero or mid-stack), labelled "← Home" or "← Featured work" to match. Direct visits still land on the project's card.
- **2026-10-26:** Home intro words link to their work; the header name is hidden over the home hero.
- **2026-10-26:** Home intro rewritten (option A): name as headline, one plain line about what he makes, one "About" button. The tagline, credentials line, capability pitch and "Get in touch" button are gone; the home page title is now just "Abhi Velaga".
- **2026-10-26:** Added the Voice section: write as a mature artist for a mixed audience (YouTube, small businesses, recruiters, Reddit), never commercial, generic or showy.
- **2026-10-26:** Merch: removed the "Shop" tag line, added the old shop's blurred Miata backdrop, and added a rebuild video banner (self-hosted loop linking to YouTube) at the bottom.
- **2026-10-26:** The contact form sends for real: `/api/contact` emails through Resend, with a honeypot and rate limit, plus sending, sent and error states. It replaces the `mailto:` handoff.
- **2026-10-26:** Contact copy reduced to one line, "Interested in working together?", replacing the services-style headline and the client-intake helper text.
- **2026-10-26:** About bio split across the grid. The personal half (who he is, what he's made, the storytelling throughline) sits in row 1 between the photos; the career half (Biorce, Visa, UT Austin) sits in row 2 beside the portrait, where the links were. Both halves use identical type.
- **2026-10-26:** All 9 titles stack again. The 5-bar cap hid cards under the last slot. Bar height now adapts to the window (60px down to 34px; 46px down to 30px on phones) so the stack stays within about half the screen.
- **2026-10-26:** Influences hidden (commented out in `About.js`) while the idea is reconsidered. The list stays in `app/data/v3.js`.
- **2026-10-26:** Influences moved into the About offset grid, replacing the four links (email, @abhi.film, GitHub, LinkedIn). Email remains in the contact section.
- **2026-10-26:** Influences section added to About, between the bio and contact. It holds seven placeholder band names until the real list is in.
- **2026-10-26:** Say hi uses V2's copy word for word: title, subtitle, HELLO button, and the status and error messages. Rewritten copy and the invented "how it works" line removed. The desk video is always a perfect square.
- **2026-10-26:** Removed the About page's Disciplines and Selected credits section. About now goes straight from the photo grid and bio to contact.
- **2026-10-26:** V2 leftovers removed: the old sidebar navbar and about 1,250 lines of unused V2 CSS. What V3 still reuses from V2 now lives in `app/styles/photos.scss`: the photo layout, the image fade-in, the book carousels and the page fade-in.
- **2026-10-26:** Title bars are transparent again (scroll-based masking), and the revealed header is frosted with a Gaussian blur.
- **2026-10-26:** The title-bar-only stack now applies at every size, since whole-card stacking also cut off content on normal laptop windows. The header reveals on scroll up.
- **2026-10-26:** Phone fixes. Phone styles were wrongly limited to screens of 400px or less, so 402–430px iPhones got desktop margins and type. Also: photos edge to edge on phones, a compact home intro, a V2-style MENU overlay, and a phone version of the card stack where only the title bars stack, so every card can be read in full.
- **2026-10-25:** Merch policies. Fourthwall's Shipping & returns, Terms, Privacy and Support links sit in the merch footer bar; each product shows its own returns terms from the API, with a link to the full policy; the cart notes no returns. Old shop.abhi.work policy links redirect to the checkout domain.
- **2026-10-25:** Link previews redone. Every page has a title, a description and a 1200×630 JPG preview (`public/og/`), set through one helper (`app/lib/meta.js`). Home is now titled "A creative who builds", and Portraits' broken preview image is fixed. Merch's preview is the two shirt cutouts on the site's dark background.
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
