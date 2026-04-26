/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

async rewrites() {
  return [
    {
      source: '/balticway',
      destination: 'https://v0-baltic-way-visualization.vercel.app/balticway',
    },
    {
      source: '/balticway/:path*',
      destination: 'https://v0-baltic-way-visualization.vercel.app/balticway/:path*',
    },
  ]
}
