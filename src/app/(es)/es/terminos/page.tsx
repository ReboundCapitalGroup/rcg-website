import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos de Servicio | Rebound Capital Group',
  description: 'Acuerdo de usuario y términos de servicio de Rebound Capital Group LLC para nuestro sitio web y nuestros servicios de recuperación de fondos excedentes.',
  alternates: { canonical: '/es/terminos' },
}

const sections = [
  {
    n: '01',
    title: 'Introducción',
    body: [
      'Bienvenido a Rebound Capital Group LLC ("Rebound Capital Group", "nosotros" o "nuestro"). Este Acuerdo de Usuario ("Acuerdo") establece los términos que rigen el uso de nuestro sitio web y de nuestros servicios de asistencia para la recuperación de fondos excedentes y activos ("Servicio").',
      'Al usar nuestro sitio web o trabajar con nosotros, usted reconoce que ha leído y entendido este Acuerdo y acepta quedar obligado por él. Si tiene preguntas sobre cualquier parte de este Acuerdo, no dude en contactarnos.',
      'No prestaremos nuestros servicios hasta que exista un acuerdo de servicio firmado entre usted y Rebound Capital Group LLC.',
    ],
  },
  {
    n: '02',
    title: 'Relación entre Rebound Capital Group LLC y el usuario',
    body: [
      'Rebound Capital Group LLC ayuda a las personas a localizar y recuperar fondos excedentes. No garantizamos el derecho a fondos excedentes ni el éxito en la recuperación de ningún reclamo.',
    ],
    subsections: [
      {
        heading: 'No existe relación abogado-cliente',
        body: 'El uso de nuestro sitio web o de nuestros servicios no crea una relación abogado-cliente. No somos un bufete de abogados y no ofrecemos asesoría legal, representación legal ni opiniones legales.',
      },
    ],
  },
  {
    n: '03',
    title: 'Confidencialidad',
    body: [
      'Tomamos medidas razonables para proteger la información que usted nos da. Sin embargo, no podemos garantizar la confidencialidad debido a factores fuera de nuestro control, como:',
    ],
    list: [
      'fallas tecnológicas,',
      'acceso no autorizado de terceros,',
      'o información que el usuario comparta voluntariamente.',
    ],
    footer: 'No envíe información muy delicada o comprometedora a menos que sea específicamente necesaria para su reclamo.',
  },
  {
    n: '04',
    title: 'Indemnización',
    body: [
      'Usted acepta indemnizar, defender y eximir de responsabilidad a Rebound Capital Group LLC, sus directivos, empleados y afiliados frente a cualquier reclamo, daño, pérdida, responsabilidad o gasto (incluidos honorarios de abogados) que surja de:',
    ],
    list: [
      'su uso de nuestro Servicio,',
      'su incumplimiento de este Acuerdo,',
      'su incumplimiento de las leyes aplicables,',
      'o su mal uso de cualquier parte del Servicio.',
    ],
    footer: 'Nos reservamos el derecho de asumir la defensa exclusiva de cualquier asunto sujeto a indemnización.',
  },
  {
    n: '05',
    title: 'Comunicaciones y datos',
    body: [
      'Rebound Capital Group LLC no es responsable de:',
    ],
    list: [
      'pérdida de datos,',
      'borrado accidental,',
      'caídas del sistema,',
      'errores de red,',
      'archivos dañados,',
      'o cualquier interrupción del Servicio.',
    ],
  },
  {
    n: '06',
    title: 'Derechos reservados por Rebound Capital Group LLC',
    body: ['Nos reservamos el derecho de:'],
    list: [
      'divulgar información del usuario de acuerdo con nuestra Política de privacidad,',
      'cumplir con citaciones u obligaciones legales,',
      'negar o terminar el servicio a cualquier usuario que incumpla este Acuerdo,',
      'terminar el acceso por cualquier motivo, a nuestra discreción.',
    ],
  },
  {
    n: '07',
    title: 'Cambios a este Acuerdo',
    body: [
      'Podemos actualizar o modificar este Acuerdo en cualquier momento. Los cambios se publicarán en nuestro sitio web, y el uso continuo del Servicio constituye la aceptación de los términos actualizados.',
    ],
  },
  {
    n: '08',
    title: 'Derechos de propiedad',
    body: [
      'Todo el contenido, la marca, el diseño, los datos, los logotipos y los materiales del Servicio son propiedad de Rebound Capital Group LLC y están protegidos por las leyes de derechos de autor, marcas y propiedad intelectual.',
      'Usted no puede:',
    ],
    list: [
      'copiar, reproducir, distribuir ni modificar ningún contenido,',
      'crear obras derivadas,',
      'ni usar nuestros materiales con fines comerciales',
    ],
    footer: 'without our written permission.',
  },
  {
    n: '09',
    title: 'Exclusión de garantías',
    body: [
      'Usted acepta que usa el Servicio bajo su propio riesgo. El Servicio se ofrece "tal cual" y "según disponibilidad", sin garantías de ningún tipo, incluidas:',
    ],
    list: [
      'comerciabilidad,',
      'idoneidad para un fin determinado,',
      'no infracción,',
      'exactitud,',
      'funcionamiento ininterrumpido o sin errores.',
    ],
  },
  {
    n: '10',
    title: 'Limitación de responsabilidad',
    body: ['Rebound Capital Group LLC no es responsable de:'],
    list: [
      'daños directos, indirectos, incidentales, especiales o consecuentes,',
      'pérdida de datos o ganancias,',
      'interrupciones del servicio,',
      'acceso no autorizado,',
      'inexactitudes o errores,',
      'demoras o fallas en el procesamiento,',
      'ni ningún daño relacionado con el uso o la imposibilidad de usar el Servicio.',
    ],
    footer: 'This limitation applies even if we have been advised of possible damages.',
  },
  {
    n: '11',
    title: 'Acuerdo de arbitraje',
    body: [
      'Cualquier disputa que surja de este Acuerdo o de nuestros servicios se resolverá mediante arbitraje vinculante conforme a las reglas de la American Arbitration Association (AAA).',
      'El arbitraje será individual, no como parte de una demanda colectiva.',
      'La sede será el condado de Miami-Dade, Florida.',
      'Cualquiera de las partes puede solicitar una medida provisional ante un tribunal del condado de Miami-Dade antes de que concluya el arbitraje.',
    ],
  },
  {
    n: '12',
    title: 'Términos generales',
    body: [
      'Este Acuerdo incorpora nuestra Política de privacidad. Representa el entendimiento completo entre usted y Rebound Capital Group LLC.',
    ],
    list: [
      'Este Acuerdo se rige por las leyes de Florida.',
      'No hacer cumplir alguna parte no implica renunciar a nuestros derechos.',
      'Si alguna parte no es válida, el resto sigue vigente.',
      'Los reclamos relacionados con el Servicio deben presentarse dentro de un (1) año.',
    ],
  },
  {
    n: '13',
    title: 'Consentimiento para llamadas, mensajes de texto y correo electrónico',
    body: [
      'Al enviar un formulario en nuestro sitio web, llamarnos o escribirnos, firmar un acuerdo con nosotros o darnos de otra forma su número de teléfono o correo electrónico, usted acepta que Rebound Capital Group LLC y su equipo le contacten sobre su consulta, su reclamo y nuestros servicios por llamada, mensaje de texto (SMS y MMS), correo de voz y correo electrónico, enviados manualmente o con tecnología automatizada, incluidos mensajes pregrabados o de voz artificial. Este consentimiento sigue vigente hasta que usted nos pida que paremos.',
      'Aceptar recibir mensajes de texto es opcional y no es una condición para usar nuestros servicios. La frecuencia de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para dejar de recibir mensajes de texto o HELP para obtener ayuda. Para dejar de recibir llamadas o correos, díganoslo en una llamada, responda a cualquier correo o envíenos un mensaje en reboundcapitalgroup.com/es/contacto.',
      'Las llamadas pueden grabarse con fines de calidad, capacitación y registro. Los operadores móviles no son responsables de mensajes demorados o no entregados. Consulte nuestra Política de privacidad para saber cómo manejamos su número de teléfono y su consentimiento para mensajes.',
    ],
  },
]

export default function TerminosPage() {
  return (
    <div style={{ ['--bg' as string]: '#F9F8F6', ['--bg2' as string]: '#ffffff', ['--mid' as string]: '#3a4360', ['--dim' as string]: '#6b7390', ['--rcg2' as string]: '#1E287F', background: 'var(--bg)', color: '#121829', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '880px', margin: '0 auto', padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,40px)' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)' }}>
          <Link href="/es" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>Inicio</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: 'var(--mid)' }}>Términos de servicio</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '48px', paddingBottom: '32px', borderBottom: '1px solid rgba(74,95,212,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
            <div style={{ width: '30px', height: '1px', background: 'rgba(74,95,212,0.4)' }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--rcg2)' }}>
              // Legal
            </span>
          </div>
          <h1 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(32px,5vw,56px)', color: '#0d1322', letterSpacing: '0', lineHeight: 1.05, margin: '0 0 16px' }}>
            Acuerdo de usuario <span style={{ color: 'var(--dim)' }}>y</span>
            <br />
            <span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Términos de servicio.</span>
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginTop: '20px' }}>
            Última actualización: 25 de octubre de 2026
          </p>
        </div>

        {/* Sections */}
        {sections.map((s) => (
          <section key={s.n} style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>

            {/* Section header */}
            <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>
                {s.n} /
              </div>
              <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
                {s.title}
              </h2>
            </div>

            {/* Body paragraphs */}
            <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
              {s.body.map((p, i) => (
                <p key={i} style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '14px' }}>
                  {p.split(/\b(STOP|HELP)\b/).map((part, j) => (part === 'STOP' || part === 'HELP') ? <strong key={j} style={{ color: '#0d1322' }}>{part}</strong> : part)}
                </p>
              ))}

              {/* Subsections */}
              {s.subsections && s.subsections.map((sub, i) => (
                <div key={i} style={{ marginTop: '20px', padding: '18px 22px', background: 'rgba(30,40,127,0.08)', borderLeft: '2px solid var(--rcg2)' }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '8px', fontWeight: 700 }}>
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
                      <span style={{ color: 'var(--rcg2)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '11px' }}>→</span>
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
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px' }}>
            // Contacto
          </div>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', margin: '0 0 18px' }}>
            ¿Preguntas sobre este Acuerdo?
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '24px' }}>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '6px' }}>Entidad</div>
              <div style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                Rebound Capital Group LLC
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '6px' }}>Dirección</div>
              <div style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                Miami Beach, FL
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '6px' }}>Teléfono</div>
              <a href="tel:+13055634920" style={{ fontSize: '13px', color: '#2f3856', textDecoration: 'none', lineHeight: 1.6 }}>
                (305) 563-4920
              </a>
            </div>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '6px' }}>Mensaje</div>
              <Link href="/es/contacto" style={{ fontSize: '13px', color: '#2f3856', textDecoration: 'none', lineHeight: 1.6 }}>
                Envíenos un mensaje
              </Link>
            </div>
          </div>
        </div>

        {/* Related links */}
        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(74,95,212,0.1)', display: 'flex', gap: '24px', flexWrap: 'wrap', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          <Link href="/es/privacidad" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Política de privacidad</Link>
          <Link href="/es/contacto" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Contáctenos</Link>
          <Link href="/es" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Volver al inicio</Link>
        </div>

      </div>
    </div>
  )
}
