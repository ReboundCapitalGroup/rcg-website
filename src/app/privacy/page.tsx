import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Rebound Capital Group',
  description: 'How Rebound Capital Group LLC collects, uses, stores, and protects your information during the surplus-fund recovery process.',
}

export default function PrivacyPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* Grid overlay */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.04) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '880px', margin: '0 auto', padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,40px)' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)' }}>
          <Link href="/" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>Home</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: 'var(--mid)' }}>Privacy Policy</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '48px', paddingBottom: '32px', borderBottom: '1px solid rgba(74,95,212,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
            <div style={{ width: '30px', height: '1px', background: 'rgba(74,95,212,0.4)' }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--rcg2)' }}>
              // Legal
            </span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,5vw,56px)', color: '#fff', letterSpacing: '-2px', lineHeight: 1.05, margin: '0 0 16px' }}>
            Privacy
            <br />
            <span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Policy.</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--mid)', lineHeight: 1.75, marginTop: '20px', maxWidth: '620px' }}>
            Rebound Capital Group LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, communicate with us, or work with us during the surplus-fund recovery process.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginTop: '14px' }}>
            By using our website or services, you agree to the terms of this Privacy Policy.
          </p>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginTop: '20px' }}>
            Last Updated: April 22, 2026
          </p>
        </div>

        {/* Section 01: Information We Collect */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>01 /</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Information We Collect
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '20px' }}>
              We may collect the following information:
            </p>

            <div style={{ marginBottom: '24px', padding: '18px 22px', background: 'rgba(30,40,127,0.08)', borderLeft: '2px solid var(--rcg2)' }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px', fontWeight: 700 }}>
                Personal Information
              </div>
              <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, margin: '0 0 10px' }}>
                Provided directly by you, including:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Name', 'Phone number', 'Email address', 'Mailing address', 'Property information', 'Case-related documents', 'Identification documents (if required for verification)'].map((item, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: '8px', padding: '4px 0', fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--rcg2)', fontSize: '10px' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '18px 22px', background: 'rgba(30,40,127,0.08)', borderLeft: '2px solid var(--rcg2)' }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px', fontWeight: 700 }}>
                Automatically Collected Information
              </div>
              <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, margin: '0 0 10px' }}>
                When you visit our website:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['IP address', 'Browser type', 'Device type', 'Pages visited', 'Cookies or tracking technologies (for analytics and security)'].map((item, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: '8px', padding: '4px 0', fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--rcg2)', fontSize: '10px' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 02: How We Use Your Information */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>02 /</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              How We Use Your Information
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>We use your information to:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 20px' }}>
              {[
                'Verify your identity and eligibility for surplus-fund recovery',
                'Contact you regarding your claim',
                'Prepare documents, filings, and communications with county/state agencies',
                'Connect you with attorneys, if needed',
                'Improve our website and service quality',
                'Comply with legal or regulatory obligations',
              ].map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Space Mono',monospace", fontSize: '11px' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: '#fff', fontWeight: 700, lineHeight: 1.8, padding: '14px 18px', background: 'rgba(30,40,127,0.15)', borderLeft: '3px solid var(--rcg2)', margin: 0 }}>
              We do NOT sell or rent your information to third parties.
            </p>
          </div>
        </section>

        {/* Section 03: How We Share Your Information */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>03 /</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              How We Share Your Information
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '20px' }}>
              Your information may only be shared with:
            </p>

            <div style={{ marginBottom: '24px', padding: '18px 22px', background: 'rgba(30,40,127,0.08)', borderLeft: '2px solid var(--rcg2)' }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px', fontWeight: 700 }}>
                Authorized Third Parties
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Attorneys assisting with your claim', 'Notaries', 'County or state government offices', 'Court clerks or legal agencies', 'Secure skip-tracing systems (only when legally necessary)'].map((item, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: '8px', padding: '4px 0', fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--rcg2)', fontSize: '10px' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, marginTop: '12px', fontStyle: 'italic' }}>
                We share only the minimum information required to complete your claim.
              </p>
            </div>

            <div style={{ padding: '18px 22px', background: 'rgba(30,40,127,0.08)', borderLeft: '2px solid var(--rcg2)' }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px', fontWeight: 700 }}>
                Legal Requirements
              </div>
              <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, margin: '0 0 10px' }}>
                We may share information if required by:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Court order', 'Law enforcement', 'State or federal regulations'].map((item, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: '8px', padding: '4px 0', fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--rcg2)', fontSize: '10px' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 04: How We Protect Your Information */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>04 /</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              How We Protect Your Information
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              We use industry-standard security measures, including:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 20px' }}>
              {['Encrypted storage', 'Secure document handling', 'Limited internal access', 'Verified attorney and notary partners'].map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Space Mono',monospace", fontSize: '11px' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, fontStyle: 'italic' }}>
              Although we take strong precautions, no system can guarantee 100% protection.
            </p>
          </div>
        </section>

        {/* Section 05: Your Rights */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>05 /</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Your Rights
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              Depending on your state, you may have the right to:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 20px' }}>
              {['Request copies of your information', 'Request corrections', 'Request deletion of non-essential data', 'Withdraw consent for communication'].map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Space Mono',monospace", fontSize: '11px' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8 }}>
              You can contact us anytime at{' '}
              <a href="mailto:contact@reboundcapitalgroup.com" style={{ color: '#c8d8ff', textDecoration: 'none', borderBottom: '1px solid rgba(74,95,212,0.4)' }}>
                contact@reboundcapitalgroup.com
              </a>
              {' '}or{' '}
              <a href="tel:+13055634920" style={{ color: '#c8d8ff', textDecoration: 'none', borderBottom: '1px solid rgba(74,95,212,0.4)' }}>
                (305) 563-4920
              </a>
              .
            </p>
          </div>
        </section>

        {/* Section 06: Data Retention */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>06 /</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Data Retention
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              We retain records only for as long as needed to:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 20px' }}>
              {['Complete your surplus-fund claim', 'Maintain lawful business documentation', 'Comply with state retention requirements'].map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Space Mono',monospace", fontSize: '11px' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8 }}>
              Once no longer required, documents are securely deleted.
            </p>
          </div>
        </section>

        {/* Section 07: Cookies and Tracking */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>07 /</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Cookies and Tracking
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              Our website may use cookies for:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 20px' }}>
              {['Security', 'Analytics', 'Improving website performance'].map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Space Mono',monospace", fontSize: '11px' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8 }}>
              You may disable cookies through your browser settings.
            </p>
          </div>
        </section>

        {/* Section 08: Children's Privacy */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>08 /</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Children&apos;s Privacy
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              Our services are not intended for individuals under 18.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8 }}>
              We do not knowingly collect information from minors.
            </p>
          </div>
        </section>

        {/* Section 09: Updates */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>09 /</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Updates to This Policy
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              We may update this Privacy Policy at any time.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8 }}>
              Changes will be reflected with an updated &quot;Last Updated&quot; date.
            </p>
          </div>
        </section>

        {/* Contact block */}
        <div style={{ marginTop: '40px', padding: 'clamp(28px,4vw,40px)', background: 'var(--bg2)', border: '1px solid rgba(74,95,212,0.25)', borderTop: '2px solid var(--rcg2)' }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px' }}>
            // Contact Us
          </div>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 10px' }}>
            Questions about this Privacy Policy?
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7, marginBottom: '20px' }}>
            If you have any questions, concerns, or requests regarding this Privacy Policy, reach out to us:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '24px' }}>
            <div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '6px' }}>Entity</div>
              <div style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                Rebound Capital Group LLC
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '6px' }}>Address</div>
              <div style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                407 Lincoln Road Suite 6H<br />
                Miami Beach, FL 33139
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '6px' }}>Phone</div>
              <a href="tel:+13055634920" style={{ fontSize: '13px', color: '#c8d8ff', textDecoration: 'none', lineHeight: 1.6 }}>
                (305) 563-4920
              </a>
            </div>
            <div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '6px' }}>Email</div>
              <a href="mailto:contact@reboundcapitalgroup.com" style={{ fontSize: '13px', color: '#c8d8ff', textDecoration: 'none', lineHeight: 1.6, wordBreak: 'break-all' }}>
                contact@reboundcapitalgroup.com
              </a>
            </div>
          </div>
        </div>

        {/* Related links */}
        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(74,95,212,0.1)', display: 'flex', gap: '24px', flexWrap: 'wrap', fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          <Link href="/terms" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Terms of Service</Link>
          <Link href="/contact" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Contact Us</Link>
          <Link href="/" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Back to Home</Link>
        </div>

      </div>
    </div>
  )
}
