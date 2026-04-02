import Link from 'next/link'
export default function Page() {
  return (
    <div style={{ background:'var(--bg)', minHeight:'100vh', padding:'80px 40px' }}>
      <div className="max-w-[900px] mx-auto">
        <div className="section-tag">// services</div>
        <h1 className="section-title mb-4">Service Detail</h1>
        <p style={{ color:'var(--mid)', fontSize:'14px', lineHeight:1.7 }}>Full service page coming soon. <Link href="/contact" style={{ color:'var(--rcg2)' }}>Get a free claim review now.</Link></p>
      </div>
    </div>
  )
}
