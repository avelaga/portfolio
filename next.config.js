const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Local tools (/dev/hero, /dev/cards and their save routes) are page.dev.js
  // and route.dev.js files, which only the dev server treats as routes, so
  // production builds leave them out entirely
  pageExtensions: phase === PHASE_DEVELOPMENT_SERVER ? ['dev.js', 'js', 'jsx'] : ['js', 'jsx'],
  // Lets a phone on the home network open the dev server (http://<Mac's IP>:3000);
  // Next 16 otherwise blocks its dev scripts on any address but localhost
  allowedDevOrigins: ['192.168.*.*'],
  sassOptions: {},
  // Merch photos come from Fourthwall at 1920px and can't be resized there, so
  // they're resized by Next's image optimizer instead (app/lib/merchImage.js)
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'imgproxy.fourthwall.dev' }],
  },
  // Browser caching for the site's own media (production only: on the dev server
  // a rebuilt hero keeps its file names, so a cached copy would hide the change).
  // Fonts never change, so a year. Photos and clips can be replaced under the
  // same name (a re-cropped photo, a rebuilt hero), so a week: a returning
  // visitor might see the old one for up to that long. Share images (/og) are left
  // out, since link previews are fetched fresh anyway.
  async headers() {
    if (phase === PHASE_DEVELOPMENT_SERVER) return [];
    const week = 'public, max-age=604800, stale-while-revalidate=86400';
    return [
      { source: '/fonts/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      ...['hero', 'images', 'videos'].map((dir) => ({
        source: `/${dir}/:path*`,
        headers: [{ key: 'Cache-Control', value: week }],
      })),
    ];
  },
  // shop.abhi.work was the old Fourthwall storefront. Once its DNS points at this
  // site, old links land on /merch, and product links on the same product.
  async redirects() {
    const shop = [{ type: 'host', value: 'shop.abhi.work' }];
    // Fourthwall's policy pages and support form move with checkout
    const checkout = `https://${process.env.FOURTHWALL_CHECKOUT_DOMAIN || 'checkout.abhi.work'}`;
    return [
      // V2 URLs that moved in V3: keep old links working, permanently
      { source: '/music', destination: '/music/indulgent', permanent: true },
      { source: '/software', destination: '/the-world-misses-you', permanent: true },
      { source: '/photo', destination: '/portfolio', permanent: true },
      { source: '/published', destination: '/editorial', permanent: true },
      { source: '/pages/:slug', has: shop, destination: `${checkout}/pages/:slug`, permanent: true },
      { source: '/contact', has: shop, destination: `${checkout}/contact`, permanent: true },
      { source: '/products/:slug', has: shop, destination: 'https://abhi.work/merch/:slug', permanent: true },
      { source: '/:path*', has: shop, destination: 'https://abhi.work/merch', permanent: true },
    ];
  },
});

module.exports = nextConfig;
