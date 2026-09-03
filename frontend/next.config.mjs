/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Allow the dev server to serve its own chunks to devices on the LAN, so the
   * site can be checked on a phone at http://192.168.x.x:3000.
   */
  allowedDevOrigins: ["192.168.29.241"],

  /**
   * Verification builds can be pointed at a throwaway directory
   * (NEXT_BUILD_DIR=.next-verify next build) so they never overwrite the chunks
   * a running `next dev` is serving.
   */
  distDir: process.env.NEXT_BUILD_DIR || ".next",
};

export default nextConfig;
