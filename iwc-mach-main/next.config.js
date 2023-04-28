/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    protocol: 'https',
    domains: ['publish-p104103-e979259.adobeaemcloud.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/]
      },
      
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
