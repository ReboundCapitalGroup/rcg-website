export const metadata = { title: 'Free Claim Review | Rebound Capital Group', description: 'Get a free surplus funds claim review from Rebound Capital Group. No upfront fees. We recover foreclosure surplus, tax deed overages, and unclaimed property nationwide.' }
export default function Contact() {
  return (
    <div style={{ background:'var(--bg)', minHeight:'100vh', padding:'80px 40px' }}>
      <div className="max-w-[600px] mx-auto">
        <div className="section-tag">// free claim review</div>
        <h1 className="section-title mb-3">Check If You&apos;re Owed Money.</h1>
        <p className="text-[14px] leading-relaxed mb-10" style={{ color:'var(--mid)' }}>Fill out the form below and our team will review your case within 24 hours. Zero cost, zero obligation.</p>
        <form className="flex flex-col gap-5" style={{ border:'1px solid var(--rcgline)', padding:'32px', background:'var(--bg2)' }}>
          {['Full Name','Email Address','Phone Number','Property Address (if applicable)'].map(f => (
            <div key={f}>
              <label className="block text-[10px] tracking-[1.5px] uppercase mb-2" style={{ fontFamily:'var(--mono)', color:'var(--mid)' }}>{f}</label>
              <input className="w-full px-4 py-3 text-[13px] outline-none" style={{ background:'var(--bg)', border:'1px solid var(--rcgline)', color:'var(--bright)', fontFamily:'var(--sans)' }} />
            </div>
          ))}
          <div>
            <label className="block text-[10px] tracking-[1.5px] uppercase mb-2" style={{ fontFamily:'var(--mono)', color:'var(--mid)' }}>Tell Us About Your Situation</label>
            <textarea rows={4} className="w-full px-4 py-3 text-[13px] outline-none resize-none" style={{ background:'var(--bg)', border:'1px solid var(--rcgline)', color:'var(--bright)', fontFamily:'var(--sans)' }} />
          </div>
          <button type="submit" className="btn-metal text-white font-bold tracking-wide uppercase py-4 cursor-pointer" style={{ fontFamily:'var(--sans)', fontSize:'13px' }}>Submit Free Claim Review</button>
          <p className="text-[9px] text-center" style={{ fontFamily:'var(--mono)', color:'var(--dim)' }}>No upfront fees. 100% contingency. We only get paid when you do.</p>
        </form>
      </div>
    </div>
  )
}
