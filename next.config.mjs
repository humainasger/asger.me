import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-dd5d56a9e24b49dc8047c16de8fdc88d.r2.dev",
      },
    ],
  },
};

export default withNextIntl(nextConfig);