import Link from 'next/link'
export default function Page() {
  return (
    <div style={{ background:'var(--bg)', minHeight:'100vh', padding:'80px 40px' }}>
      <div className="max-w-[900px] mx-auto">
        <div className="section-tag">// rcg</div>
        <h1 className="section-title mb-4">Coming Soon</h1>
        <p style={{ color:'var(--mid)', fontSize:'14px', lineHeight:1.7 }}>This page is currently being built. In the meantime, <Link href="/contact" style={{ color:'var(--rcg2)' }}>contact us for a free claim review</Link> or <Link href="/" style={{ color:'var(--rcg2)' }}>return home</Link>.</p>
      </div>
    </div>
  )
}
