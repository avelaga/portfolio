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
      { source: '/pages/:slug', has: shop, destination: `${checkout}/pages/:slug`, permanent: true },
      { source: '/contact', has: shop, destination: `${checkout}/contact`, permanent: true },
      { source: '/products/:slug', has: shop, destination: 'https://abhi.work/merch/:slug', permanent: true },
      { source: '/:path*', has: shop, destination: 'https://abhi.work/merch', permanent: true },
    ];
  },
};

module.exports = nextConfig;
