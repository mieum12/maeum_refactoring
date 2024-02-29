/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "*", "k.kakaocdn.net", "phinf.pstatic.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.com"
      }
    ]
  }
};

export default nextConfig;
