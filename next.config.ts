/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  async redirects() {
    return [
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/user-agreement', destination: '/terms', permanent: true },
      { source: '/foreclosure-consulting', destination: '/services/foreclosure-surplus', permanent: true },
      { source: '/services/probate-time-extensions', destination: '/services/probate-assistance', permanent: true },
      { source: '/services/surplus-funds', destination: '/services/foreclosure-surplus', permanent: true },
      { source: '/services/excess-proceeds', destination: '/services/foreclosure-surplus', permanent: true },
      { source: '/resources/state-laws', destination: '/states', permanent: true },
    ];
  },
}
export default nextConfig