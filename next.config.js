/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {},
  // shop.abhi.work was the old Fourthwall storefront. Once its DNS points at this
  // site, old links land on /merch, and product links on the same product.
  async redirects() {
    const shop = [{ type: 'host', value: 'shop.abhi.work' }];
    return [
      { source: '/products/:slug', has: shop, destination: 'https://abhi.work/merch/:slug', permanent: true },
      { source: '/:path*', has: shop, destination: 'https://abhi.work/merch', permanent: true },
    ];
  },
};

module.exports = nextConfig;
