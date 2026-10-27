// The site's one eased scroll (card clicks on the home page, the name in the nav
// back to the top), run through Lenis when it's there so it shares its smoothing
const easeInOutQuint = (t) => (t < 0.5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2);

export function scrollToY(target, immediate = false) {
  if (window.lenis) {
    // Lenis caches the page height; after navigating from a shorter page its
    // scroll limit is stale and would clamp the jump short
    window.lenis.resize();
    window.lenis.scrollTo(target, immediate ? { immediate: true } : { duration: 1.6, easing: easeInOutQuint });
  } else {
    window.scrollTo({ top: target, behavior: immediate ? 'auto' : 'smooth' });
  }
}
