// The link arrows: → stays on the site, ↗ leaves it (opens in a new tab).
// iOS draws ↗ as an emoji unless it's followed by U+FE0E, which asks for the
// plain text glyph, so always use this rather than typing the arrow.
export const EXTERNAL_ARROW = '↗︎';
