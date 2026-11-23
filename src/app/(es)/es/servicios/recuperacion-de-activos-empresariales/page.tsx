import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { toEs } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Recuperación de Activos de Empresas, LLC y Fideicomisos | RCG',
  description: 'Recupere activos no reclamados a nombre de empresas, LLC disueltas y fideicomisos. Rebound Capital Group presenta el reclamo a través de nuestra red de abogados con licencia, sin costo por adelantado.',
  alternates: { canonical: '/es/servicios/recuperacion-de-activos-empresariales' },
}

export default function ActivosEmpresarialesPage() {
  return (
    <ServicePage
      lang="es"
      slug="business-asset-recovery"
      image="/img/aerial-intersection.webp"
      imagePos="50% 50%"
      serviceName="Recuperación de activos de LLC y empresas"
      badge="Empresas y fideicomisos · $0 por adelantado"
      h1Lead="Recuperación de activos"
      h1Accent="de LLC y empresas."
      answer="Cuando una LLC o corporación cierra, el dinero a su nombre no pasa automáticamente a los dueños. Los sobrantes de ventas de propiedades, las cuentas de negocio inactivas y los reembolsos sin cobrar pueden quedarse años en tribunales y agencias del estado. Muchas veces los antiguos socios y directivos todavía pueden reclamarlos. Nosotros encontramos los fondos y presentamos el reclamo a través de nuestra red de abogados con licencia. $0 por adelantado."
      ctaLabel="Revisar mi empresa gratis"
      sections={[
        {
          tag: 'Para quién es',
          title: 'Disuelta no significa perdida.',
          points: ['Antiguos socios de LLC', 'Directivos de corporaciones', 'Socios de sociedades', 'Herederos y sucesores del negocio'],
          body: (
            <>
              <p>Cuando una empresa se disuelve, se revoca administrativamente o simplemente deja de operar, el dinero a su nombre no pasa automáticamente a los dueños. Los sobrantes de ventas de propiedades, las cuentas de negocio no reclamadas y otros activos recuperables muchas veces se quedan en sistemas judiciales o bases de datos del estado mucho después de que cierra el negocio.</p>
              <p>Los antiguos directivos, socios y principales por lo general conservan el derecho a reclamar estos fondos, pero hay que demostrar la legitimación, documentar cómo estaba constituido el negocio y presentar el reclamo por el proceso correcto.</p>
              <p>RCG maneja la recuperación de activos empresariales a través de abogados de nuestra red que conocen el derecho de sociedades y los documentos que estos reclamos necesitan. Para fondos a nombre de un fideicomiso, vea <Link href={toEs('/services/trust-recovery')}>recuperación de fideicomisos</Link>.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'Situaciones comunes',
        title: 'Situaciones que manejamos.',
        items: [
          { title: 'LLC disuelta o inactiva', desc: 'Los fondos excedentes, la propiedad no reclamada y los depósitos judiciales de una empresa disuelta los pueden recuperar sus antiguos socios o directivos.' },
          { title: 'Propiedad vendida a nombre de un negocio', desc: 'Los fondos excedentes y sobrantes por impuestos de una propiedad a nombre de una LLC, corporación o sociedad le pertenecen a ese negocio, y luego a sus antiguos principales.' },
          { title: 'Cuentas de negocio inactivas', desc: 'Las cuentas de cheques, ahorro y comercio de un negocio que quedan inactivas se entregan al estado, igual que las cuentas personales.' },
          { title: 'Cheques y reembolsos de negocio sin cobrar', desc: 'Reembolsos de proveedores, depósitos de servicios y pagos de seguros emitidos a un negocio y nunca cobrados los guarda el estado.' },
        ],
      }}
      steps={[
        { title: 'Encontramos el activo', desc: 'Buscamos en registros judiciales y bases de datos del estado con el nombre del negocio, sus variaciones y los nombres de directivos o socios.' },
        { title: 'Revisamos el negocio', desc: 'Consultamos los registros estatales para confirmar la estructura, el estado de disolución y quién tiene derecho a reclamar.' },
        { title: 'Los abogados presentan', desc: 'Los abogados de nuestra red preparan el reclamo, demuestran la legitimación y lo presentan ante el tribunal o la agencia correcta.' },
        { title: 'Usted recibe su dinero', desc: 'Los fondos aprobados van al antiguo directivo, socio o principal autorizado. Nuestros honorarios salen solo de lo recuperado.' },
      ]}
      faqs={[
        { q: '¿Puedo reclamar dinero que se le debe a mi LLC cerrada?', a: 'Muchas veces sí. Por lo general los antiguos socios y directivos pueden reclamar fondos a nombre de un negocio disuelto, una vez que demuestran que tienen derecho a actuar por él.' },
        { q: '¿Qué documentos se necesitan?', a: 'Por lo general los registros estatales del negocio, prueba de su función en él y su identificación. Le decimos exactamente qué exige su estado.' },
        { q: '¿Cuánto cuesta?', a: 'Nada por adelantado. Nuestros honorarios salen solo de lo que recuperamos.' },
      ]}
      related={[
        { href: '/services/trust-recovery', label: 'Recuperación de fideicomisos', desc: 'Dinero a nombre de un fideicomiso.' },
        { href: '/services/unclaimed-property', label: 'Propiedad no reclamada', desc: 'Cuentas, cheques y depósitos que guarda el estado.' },
        { href: '/services/foreclosure-surplus', label: 'Fondos excedentes de ejecución', desc: 'Dinero que sobra después de una venta por ejecución.' },
      ]}
      ctaTitle="¿Su negocio dejó dinero?"
      ctaText="Buscamos en registros judiciales y bases de datos del estado con el nombre de su negocio sin costo. Si hay fondos, nos encargamos de todo el proceso."
    />
  )
}
