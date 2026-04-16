/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'betanews.com' },
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'www.shutterstock.com' },
      { protocol: 'https', hostname: 't4.ftcdn.net' },
      { protocol: 'https', hostname: 'infraon.io' },
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'kce.ac.in' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com' },
      { protocol: 'https', hostname: 't3.ftcdn.net' },
    ],
  }
};

export default nextConfig;
