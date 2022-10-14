/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // wordpress graphql server
    // https://www.wpgraphql.com/
    wordpressQlServer: process.env.NEXT_PUBLIC_WORDPRESSQL_SERVER
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.pixabay.com"],
  },
  basePath: "",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
};

module.exports = nextConfig;
