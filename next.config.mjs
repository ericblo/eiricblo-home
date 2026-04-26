/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // Baltic Way
      {
        source: '/balticway',
        destination: 'https://v0-baltic-way-visualization.vercel.app/balticway',
      },
      {
        source: '/balticway/:path*',
        destination: 'https://v0-baltic-way-visualization.vercel.app/balticway/:path*',
      },
      // The Best People
      {
        source: '/thebestpeople',
        destination: 'https://<your-thebestpeople-deployment>.vercel.app/thebestpeople',
      },
      {
        source: '/thebestpeople/:path*',
        destination: 'https://<your-thebestpeople-deployment>.vercel.app/thebestpeople/:path*',
      },
    ]
  },
}

export default nextConfig
