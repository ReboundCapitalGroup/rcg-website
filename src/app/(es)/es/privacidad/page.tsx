import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Rebound Capital Group',
  description: 'Cómo Rebound Capital Group LLC recopila, usa, guarda y protege su información durante el proceso de recuperación de fondos excedentes.',
  alternates: { canonical: '/es/privacidad' },
}

export default function PrivacidadPage() {
  return (
    <div style={{ ['--bg' as string]: '#F9F8F6', ['--bg2' as string]: '#ffffff', ['--mid' as string]: '#3a4360', ['--dim' as string]: '#6b7390', ['--rcg2' as string]: '#1E287F', background: 'var(--bg)', color: '#121829', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '880px', margin: '0 auto', padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,40px)' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)' }}>
          <Link href="/es" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>Inicio</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: 'var(--mid)' }}>Política de privacidad</span>
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
            Política de
            <br />
            <span style={{ backgroundImage: 'linear-gradient(180deg, #3a60b8 0%, #2a48a0 55%, #1E287F 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>privacidad.</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--mid)', lineHeight: 1.75, marginTop: '20px', maxWidth: '620px' }}>
            Rebound Capital Group LLC (&quot;nosotros&quot; o &quot;nuestro&quot;) se compromete a proteger su privacidad. Esta Política de privacidad explica cómo recopilamos, usamos, guardamos y protegemos su información cuando visita nuestro sitio web, se comunica con nosotros o trabaja con nosotros durante el proceso de recuperación de fondos excedentes.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginTop: '14px' }}>
            Al usar nuestro sitio web o nuestros servicios, usted acepta los términos de esta Política de privacidad.
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)', marginTop: '20px' }}>
            Última actualización: 25 de octubre de 2026
          </p>
        </div>

        {/* Section 01: Information We Collect */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>01 /</div>
            <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Información que recopilamos
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '20px' }}>
              Podemos recopilar la siguiente información:
            </p>

            <div style={{ marginBottom: '24px', padding: '18px 22px', background: 'rgba(30,40,127,0.08)', borderLeft: '2px solid var(--rcg2)' }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px', fontWeight: 700 }}>
                Información personal
              </div>
              <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, margin: '0 0 10px' }}>
                Proporcionada directamente por usted, incluidos:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Nombre', 'Número de teléfono', 'Correo electrónico', 'Dirección postal', 'Información de la propiedad', 'Documentos relacionados con el caso', 'Documentos de identificación (si se requieren para verificación)'].map((item, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: '8px', padding: '4px 0', fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--rcg2)', fontSize: '10px' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ padding: '18px 22px', background: 'rgba(30,40,127,0.08)', borderLeft: '2px solid var(--rcg2)' }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px', fontWeight: 700 }}>
                Información recopilada automáticamente
              </div>
              <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, margin: '0 0 10px' }}>
                Cuando visita nuestro sitio web:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Dirección IP', 'Tipo de navegador', 'Tipo de dispositivo', 'Páginas visitadas', 'Cookies o tecnologías de seguimiento (para análisis y seguridad)'].map((item, i) => (
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
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>02 /</div>
            <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Cómo usamos su información
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>Usamos su información para:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 20px' }}>
              {[
                'Verificar su identidad y su derecho a recuperar fondos excedentes',
                'Contactarle sobre su reclamo',
                'Preparar documentos, trámites y comunicaciones con agencias del condado o del estado',
                'Ponerle en contacto con abogados, si hace falta',
                'Mejorar nuestro sitio web y la calidad del servicio',
                'Cumplir con obligaciones legales o regulatorias',
              ].map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '11px' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: '#0d1322', fontWeight: 700, lineHeight: 1.8, padding: '14px 18px', background: 'rgba(30,40,127,0.15)', borderLeft: '3px solid var(--rcg2)', margin: 0 }}>
              NO vendemos ni alquilamos su información a terceros.
            </p>
          </div>
        </section>

        {/* Section 03: How We Share Your Information */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>03 /</div>
            <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Cómo compartimos su información
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '20px' }}>
              Su información solo puede compartirse con:
            </p>

            <div style={{ marginBottom: '24px', padding: '18px 22px', background: 'rgba(30,40,127,0.08)', borderLeft: '2px solid var(--rcg2)' }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px', fontWeight: 700 }}>
                Terceros autorizados
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Abogados que ayudan con su reclamo', 'Notarios', 'Oficinas de gobierno del condado o del estado', 'Secretarios de tribunales o agencias legales', 'Sistemas seguros de localización de personas (solo cuando sea legalmente necesario)'].map((item, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: '8px', padding: '4px 0', fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--rcg2)', fontSize: '10px' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, marginTop: '12px', fontStyle: 'italic' }}>
                Compartimos solo la información mínima necesaria para completar su reclamo.
              </p>
            </div>

            <div style={{ padding: '18px 22px', background: 'rgba(30,40,127,0.08)', borderLeft: '2px solid var(--rcg2)' }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px', fontWeight: 700 }}>
                Requisitos legales
              </div>
              <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, margin: '0 0 10px' }}>
                Podemos compartir información si lo exige:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Una orden judicial', 'Las autoridades', 'Regulaciones estatales o federales'].map((item, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: '8px', padding: '4px 0', fontSize: '13px', color: 'var(--mid)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--rcg2)', fontSize: '10px' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 04: Phone Calls, Text Messages, and Email */}
        <section id="communications" style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>04 /</div>
            <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Llamadas, mensajes de texto y correo electrónico
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '16px' }}>
              Cuando envía un formulario en nuestro sitio web, nos llama o escribe, firma un acuerdo con nosotros o nos da de otra forma su número de teléfono o correo electrónico, usted acepta que Rebound Capital Group LLC y su equipo le contacten sobre su consulta, su reclamo y nuestros servicios. Esto puede incluir llamadas, mensajes de texto (SMS y MMS), correo de voz y correo electrónico, enviados manualmente o con tecnología automatizada, incluidos mensajes pregrabados o de voz artificial, al número o dirección que usted nos dio. Este consentimiento sigue vigente hasta que usted nos pida que paremos.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '16px' }}>
              Aceptar recibir mensajes de texto es opcional y no es una condición para usar nuestros servicios.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 20px' }}>
              {[
                'La frecuencia de los mensajes varía según su consulta o reclamo.',
                'Pueden aplicarse tarifas de mensajes y datos.',
                'Para dejar de recibir mensajes de texto, responda STOP en cualquier momento. Responda HELP para obtener ayuda, o llame al 305-563-4920.',
                'Para dejar de recibir llamadas o correos, díganoslo en una llamada, responda a cualquier correo o envíenos un mensaje en reboundcapitalgroup.com/es/contacto. Atenderemos su solicitud dentro del plazo que exige la ley.',
                'Las llamadas pueden grabarse con fines de calidad, capacitación y registro.',
                'Los operadores móviles no son responsables de mensajes demorados o no entregados.',
              ].map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '11px' }}>→</span>
                  <span>{item.split(/\b(STOP|HELP)\b/).map((part, j) => (part === 'STOP' || part === 'HELP') ? <strong key={j} style={{ color: '#0d1322' }}>{part}</strong> : part)}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8 }}>
              No compartiremos información móvil con terceros ni afiliados con fines de mercadeo o promoción. Los datos de suscripción y el consentimiento para mensajes de texto no se compartirán con ningún tercero. Solo podemos compartir su número con los proveedores que entregan nuestras llamadas y mensajes, como nuestro proveedor de telecomunicaciones.
            </p>
          </div>
        </section>

        {/* Section 05: How We Protect Your Information */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>05 /</div>
            <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Cómo protegemos su información
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              Usamos medidas de seguridad estándar de la industria, entre ellas:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 20px' }}>
              {['Almacenamiento cifrado', 'Manejo seguro de documentos', 'Acceso interno limitado', 'Abogados y notarios aliados verificados'].map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '11px' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, fontStyle: 'italic' }}>
              Aunque tomamos precauciones estrictas, ningún sistema puede garantizar una protección del 100%.
            </p>
          </div>
        </section>

        {/* Section 06: Your Rights */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>06 /</div>
            <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Sus derechos
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              Según su estado, usted puede tener derecho a:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 20px' }}>
              {['Solicitar copias de su información', 'Solicitar correcciones', 'Solicitar que se borren los datos no esenciales', 'Retirar su consentimiento para comunicaciones'].map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '11px' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8 }}>
              Puede contactarnos en cualquier momento a través de nuestro{' '}
              <Link href="/es/contacto" style={{ color: '#2f3856', textDecoration: 'none', borderBottom: '1px solid rgba(74,95,212,0.4)' }}>
                formulario de contacto
              </Link>
              {' '}o al{' '}
              <a href="tel:+13055634920" style={{ color: '#2f3856', textDecoration: 'none', borderBottom: '1px solid rgba(74,95,212,0.4)' }}>
                (305) 563-4920
              </a>
              .
            </p>
          </div>
        </section>

        {/* Section 07: Data Retention */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>07 /</div>
            <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Conservación de datos
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              Conservamos los registros solo el tiempo necesario para:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 20px' }}>
              {['Completar su reclamo de fondos excedentes', 'Mantener la documentación legal del negocio', 'Cumplir con los requisitos estatales de conservación'].map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '11px' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8 }}>
              Cuando ya no se necesitan, los documentos se eliminan de forma segura.
            </p>
          </div>
        </section>

        {/* Section 08: Cookies and Tracking */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>08 /</div>
            <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Cookies y seguimiento
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              Nuestro sitio web puede usar cookies para:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 20px' }}>
              {['Seguridad', 'Análisis', 'Mejorar el rendimiento del sitio web'].map((item, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: '8px', padding: '6px 0', fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--rcg2)', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '11px' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8 }}>
              Puede desactivar las cookies en la configuración de su navegador.
            </p>
          </div>
        </section>

        {/* Section 09: Children's Privacy */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>09 /</div>
            <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Privacidad de menores
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              Nuestros servicios no están dirigidos a personas menores de 18 años.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8 }}>
              No recopilamos a sabiendas información de menores de edad.
            </p>
          </div>
        </section>

        {/* Section 10: Updates */}
        <section style={{ marginBottom: '56px', paddingBottom: '40px', borderBottom: '1px solid rgba(74,95,212,0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '16px', alignItems: 'baseline', marginBottom: '24px' }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--rcg2)' }}>10 /</div>
            <h2 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontWeight: 400, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', lineHeight: 1.25, margin: 0 }}>
              Cambios a esta política
            </h2>
          </div>

          <div style={{ paddingLeft: 'clamp(0px,4vw,72px)' }}>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, marginBottom: '12px' }}>
              Podemos actualizar esta Política de privacidad en cualquier momento.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8 }}>
              Los cambios se reflejarán con una nueva fecha de &quot;Última actualización&quot;.
            </p>
          </div>
        </section>

        {/* Contact block */}
        <div style={{ marginTop: '40px', padding: 'clamp(28px,4vw,40px)', background: 'var(--bg2)', border: '1px solid rgba(74,95,212,0.25)', borderTop: '2px solid var(--rcg2)' }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--rcg2)', marginBottom: '10px' }}>
            // Contáctenos
          </div>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d1322', letterSpacing: '-0.5px', margin: '0 0 10px' }}>
            ¿Preguntas sobre esta Política de privacidad?
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.7, marginBottom: '20px' }}>
            Si tiene preguntas, inquietudes o solicitudes sobre esta Política de privacidad, contáctenos:
          </p>

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
          <Link href="/es/terminos" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Términos de servicio</Link>
          <Link href="/es/contacto" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Contáctenos</Link>
          <Link href="/es" style={{ color: 'var(--rcg2)', textDecoration: 'none' }}>→ Volver al inicio</Link>
        </div>

      </div>
    </div>
  )
}
