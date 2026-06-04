/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  async redirects() {
    return [
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/user-agreement', destination: '/terms', permanent: true },
      { source: '/foreclosure-consulting', destination: '/services/foreclosure-surplus', permanent: true },
    ];
  },
}
export default nextConfig