/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  output: "standalone",
  distDir: "build",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
