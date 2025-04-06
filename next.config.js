/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        hostname: "gom5q4u851.ufs.sh",
        protocol: "https",
        pathname: "/**",
      },
    ],
  },
};

export default config;
