import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Rebound Capital Group',
  description: 'User agreement and terms governing your use of Rebound Capital Group LLC services and website.',
}

const sections = [
  {
    n: '01',
    title: 'Introduction',
    body: [
      'Welcome to Rebound Capital Group LLC ("Rebound Capital Group," "we," "our," or "us"). This User Agreement ("Agreement") outlines the terms that govern your use of our website and services related to surplus-fund and asset-recovery assistance ("Service").',
      'By using our website or working with us, you acknowledge that you have read, understood, and agree to be bound by this Agreement. If you have questions about any part of this Agreement, feel free to contact us.',
      'Our services will not be provided until a signed service agreement is in place between you and Rebound Capital Group LLC.',
    ],
  },
  {
    n: '02',
    title: 'Relationship Between Rebound Capital Group LLC and User',
    body: [
      'Rebound Capital Group LLC assists individuals in locating and recovering surplus funds. We do not guarantee eligibility for surplus funds or the successful recovery of any claim.',
    ],
    subsections: [
      {
        heading: 'No Attorney-Client Relationship',
        body: 'Using our website or services does not create an attorney-client relationship. We are not a law firm and do not provide legal advice, legal representation, or legal opinions.',
      },
    ],
  },
  {
    n: '03',
    title: 'Confidentiality',
    body: [
      'We take reasonable steps to protect the information you provide. However, we cannot guarantee confidentiality due to factors beyond our control such as:',
    ],
    list: [
      'technology failures,',
      'unauthorized third-party access,',
      'or information voluntarily shared by the User.',
    ],
    footer: 'Do not submit highly sensitive or incriminating information unless specifically required for your claim.',
  },
  {
    n: '04',
    title: 'Indemnification',
    body: [
      'You agree to indemnify, defend, and hold harmless Rebound Capital Group LLC, its officers, employees, and affiliates from any claims, damages, losses, liabilities, or expenses (including attorney fees) arising out of:',
    ],
    list: [
      'your use of our Service,',
      'your violation of this Agreement,',
      'your violation of applicable laws,',
      'or your misuse of any part of the Service.',
    ],
    footer: 'We reserve the right to assume the exclusive defense of any matter subject to indemnification.',
  },
  {
    n: '05',
    title: 'Communications and Data',
    body: [
      'Rebound Capital Group LLC is not responsible for:',
    ],
    list: [
      'loss of data,',
      'accidental deletion,',
      'system outages,',
      'network errors,',
      'corrupted files,',
      'or any interruption of Service.',
    ],
  },
  {
    n: '06',
    title: 'Rights Reserved by Rebound Capital Group LLC',
    body: ['We reserve the right to:'],
    list: [
      'release User information in accordance with our Privacy Policy,',
      'comply with subpoenas or legal obligations,',
      'deny or terminate service to any User who violates this Agreement,',
      'terminate access for any reason at our discretion.',
    ],
  },
  {
    n: '07',
    title: 'Modifications to This Agreement',
    body: [
      'We may update or revise this Agreement at any time. Changes will be posted on our website, and continued use of the Service constitutes acceptance of the updated terms.',
    ],
  },
  {
    n: '08',
    title: 'Proprietary Rights',
    body: [
      'All content, branding, design, data, logos, and materials on the Service are owned by Rebound Capital Group LLC and protected under copyright, trademark, and intellectual-property laws.',
      'You may not:',
    ],
    list: [
      'copy, reproduce, distribute, or modify any content,',
      'create derivative works,',
      'or use our materials for commercial purposes',
    ],
    footer: 'without our written permission.',
  },
  {
    n: '09',
    title: 'Disclaimer of Warranties',
    body: [
      'You agree that you use the Service at your own risk. The Service is provided "as is" and "as available," without warranties of any kind, including:',
    ],
    list: [
      'merchantability,',
      'fitness for a particular purpose,',
      'non-infringement,',
      'accuracy,',
      'uninterrupted or error-free operation.',
    ],
  },
  {
    n: '10',
    title: 'Limitation of Liability',
    body: ['Rebound Capital Group LLC is not liable for:'],
    list: [
      'direct, indirect, incidental, special, or consequential damages,',
      'loss of data or profits,',
      'service interruptions,',
      'unauthorized access,',
      'inaccuracies or errors,',
      'delays or failures in processing,',
      'or any damages connected to your use or inability to use the Service.',
    ],
    footer: 'This limitation applies even if we have been advised of possible damages.',
  },
  {
    n: '11',
    title: 'Arbitration Agreement',
    body: [
      'Any dispute arising from this Agreement or our services will be resolved through binding arbitration under the rules of the American Arbitration Association (AAA).',
      'Arbitration will occur individually, not as part of a class action.',
      'Venue will be Miami-Dade County, Florida.',
      'Either party may seek temporary relief from a court in Miami-Dade County before arbitration is completed.',
    ],
  },
  {
    n: '12',
    title: 'General Terms',
    body: [
      'This Agreement incorporates our Privacy Policy. It represents the entire understanding between you and Rebound Capital Group LLC.',
    ],
    list: [
      'Florida law governs this Agreement.',
      'Failure to enforce any part does not waive our rights.',
      'If any part is invalid, the remainder still applies.',
      'Claims related to the Service must be filed within one (1) year.',
    ],
  },
]

export default function TermsPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* Grid overlay */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'linear-gradient(rgba(74,95,212,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(74,95,212,0.04) 1px,transparent 1px)', backgroundSize: '52px 52px', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '880px', margin: '0 auto', padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,40px)' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontFamily: "'Space Mono',monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)' }}>
          <Link href="/" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>Home</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: 'var(--mid)' }}>Terms of Service</span>
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
            User Agreement <span style={{ color: 'var(--dim)' }}>&amp;</span>
            <br />
            <span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Terms of Service.</span>
          </h1>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginTop: '20px' }}>
            Last Updated: April 22, 2026
          </p>
        </div>

        {/* Sections */}
        {sections.map((s) => (
          <section key={s.n} style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>

            {/* Section header */}
            <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>
                {s.n} /
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
                {s.title}
              </h2>
            </div>

            {/* Body paragraphs */}
            <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
              {s.body.map((p, i) => (
                <p key={i} style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '14px' }}>
                  {p}
                </p>
              ))}

              {/* Subsections */}
              {s.subsections && s.subsections.map((sub, i) => (
                <div key={i} style={{ marginTop: '20px', padding: '18px 22px', background: 'rgba(30,40,127,0.08)', borderLeft: '2px solid var(--rcg2)' }}>
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '8px', fontWeight: 700 }}>
                    {sub.heading}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, margin: 0 }}>
                    {sub.body}
                  </p>
                </div>
              ))}

              {/* List */}
              {s.list && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0' }}>
                  {s.list.map((item, i) => (
                    <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', alignItems: 'baseline', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                      <span style={{ color: 'var(--rcg2)', fontFamily: "'Space Mono',monospace", fontSize: '11px' }}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Footer text */}
              {s.footer && (
                <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginTop: '14px' }}>
                  {s.footer}
                </p>
              )}
            </div>
          </section>
        ))}

        {/* Contact block */}
        <div style={{ marginTop: '40px', padding: 'clamp(28px,4vw,40px)', background: 'var(--bg2)', border: '1px solid rgba(74,95,212,0.25)', borderTop: '2px solid var(--rcg2)' }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px' }}>
            // Contact
          </div>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 18px' }}>
            Questions about this Agreement?
          </h3>

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
          <Link href="/privacy" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Privacy Policy</Link>
          <Link href="/contact" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Contact Us</Link>
          <Link href="/" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Back to Home</Link>
        </div>

      </div>
    </div>
  )
}
