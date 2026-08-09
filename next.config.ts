import type { NextConfig } from "next";

/**
 * GitHub Pages project site:
 *   https://bryanxbt.github.io/bryanxbt
 *
 * Local dev keeps basePath empty (http://localhost:3456).
 * CI sets GITHUB_PAGES=true so paths resolve under /bryanxbt.
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "bryanxbt";

const basePath = isGithubPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Available at build time for <Image> / resume links under project Pages
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
