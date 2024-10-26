/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.ophim.live",
        port: "",
        pathname: "/uploads/movies/**",
      },
    ],
  },
};

export default nextConfig;
