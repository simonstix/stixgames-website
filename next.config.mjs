/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tile-composer/documentation/:slug*",
        destination: "https://docs.stixgames.com/tile-composer",
        permanent: true,
      },
      {
        source: "/grassshader/documentation/:slug*",
        destination: "https://docs.stixgames.com/directx-11-grass-shader",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
