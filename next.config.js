/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  output: "export",
  distDir: "build",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  target: "serverless",
};

module.exports = nextConfig;
