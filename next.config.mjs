/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "fakestoreapi.com", // 🔹 Rasmlar joylashgan domenni kiriting
        }, ],
    },
};

export default nextConfig;