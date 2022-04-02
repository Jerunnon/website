/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com']
  },
 /*  i18n: {
    locales: ['de-DE, en'],
    defaultLocale: 'de-DE',
    localeDetection: false
  },
  trailingSlash: true */
}

module.exports = nextConfig
