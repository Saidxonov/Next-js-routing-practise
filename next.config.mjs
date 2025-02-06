/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
