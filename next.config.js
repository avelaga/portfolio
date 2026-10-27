/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {},
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
};

module.exports = nextConfig;
