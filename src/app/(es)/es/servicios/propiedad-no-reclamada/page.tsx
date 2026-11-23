import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { toEs } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Recuperación de Propiedad No Reclamada en Todo el País | RCG',
  description: 'Recupere propiedad no reclamada en los 50 estados: cuentas inactivas, cheques sin cobrar, pagos de seguros y más. Rebound Capital Group presenta el reclamo sin costo por adelantado.',
  alternates: { canonical: '/es/servicios/propiedad-no-reclamada' },
}

export default function PropiedadNoReclamadaPage() {
  return (
    <ServicePage
      lang="es"
      slug="unclaimed-property"
      image="/img/sunset-waterway.webp"
      imagePos="45% 50%"
      serviceName="Propiedad no reclamada"
      badge="Los 50 estados · $0 por adelantado"
      h1Lead="Propiedad"
      h1Accent="no reclamada."
      answer="Cuando un banco, una aseguradora o una empresa no puede localizar al dueño de una cuenta, un cheque o un depósito, el dinero se entrega al estado como propiedad no reclamada. Cada estado lo guarda hasta que el dueño o sus herederos lo reclaman. Buscamos en los registros estatales de todo el país y manejamos el reclamo por usted. $0 por adelantado."
      ctaHref="/free-review?type=unclaimed_property"
      ctaLabel="Buscar fondos no reclamados gratis"
      stats={[
        { val: '$70B+', label: 'En manos de los estados' },
        { val: '1 de cada 10', label: 'Personas en EE. UU. tiene fondos no reclamados' },
        { val: 'Los 50', label: 'Estados donde buscamos' },
      ]}
      sections={[
        {
          tag: 'Qué es',
          title: 'Su nombre puede estar ya en una lista.',
          points: ['Cuentas bancarias', 'Seguros', 'Cheques sin cobrar', 'Reembolsos y depósitos'],
          body: (
            <>
              <p>Cuentas bancarias inactivas, pagos de seguros, cheques de nómina sin cobrar, depósitos de servicios, dividendos y reembolsos terminan en manos del estado cuando no se puede localizar al dueño. El estado guarda el dinero, muchas veces por años, hasta que alguien presenta un reclamo correcto.</p>
              <p>Buscamos en los registros de propiedad no reclamada de los 50 estados usando su nombre, direcciones anteriores y negocios relacionados. Cuando encontramos una coincidencia, la confirmamos, preparamos el papeleo y damos seguimiento al reclamo hasta el pago.</p>
              <p>¿Quiere ver primero lo que guarda su estado? Empiece con el <Link href={toEs('/map')}>mapa de fondos no reclamados</Link>.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'Qué buscamos',
        title: 'Todo tipo de dinero no reclamado.',
        items: [
          { tag: 'Seguros', title: 'Seguros', desc: 'Beneficios de pólizas, beneficios por fallecimiento, anualidades vencidas y reembolsos de primas.' },
          { tag: 'Banca', title: 'Cuentas bancarias', desc: 'Cuentas de cheques y de ahorro, certificados de depósito vencidos, cheques de gerencia y cheques de proveedores.' },
          { tag: 'Valores', title: 'Inversiones', desc: 'Dividendos no reclamados, acciones y pagos por desmutualización.' },
          { tag: 'Jubilación', title: 'Cuentas de jubilación', desc: 'IRA tradicionales y Roth, pensiones y reparto de utilidades.' },
          { tag: 'Otros', title: 'Reembolsos y créditos', desc: 'Saldos a favor, reembolsos, depósitos de servicios y cheques varios.' },
          { tag: 'Tribunales e impuestos', title: 'Fondos judiciales y de impuestos', desc: 'Sobrantes de ejecuciones y ventas por impuestos que terminaron en manos del estado.' },
        ],
      }}
      steps={[
        { title: 'Buscamos', desc: 'Buscamos en los registros estatales de propiedad no reclamada de todo el país con su nombre y direcciones anteriores. Solo Florida guarda más de $2 mil millones en fondos no reclamados.' },
        { title: 'Confirmamos', desc: 'Verificamos la coincidencia, el monto y qué estado guarda el dinero.' },
        { title: 'Presentamos', desc: 'Preparamos y presentamos el reclamo con los documentos que exige el estado.' },
        { title: 'Usted recibe su dinero', desc: 'Cuando el estado aprueba el reclamo, el dinero se le entrega. La mayoría de los reclamos se resuelven en 60 a 120 días, según el estado y el tipo de reclamo.' },
      ]}
      faqs={[
        { q: '¿Qué es la propiedad no reclamada?', a: 'Dinero que una empresa no pudo devolverle a su dueño, como una cuenta bancaria vieja, un cheque sin cobrar o un depósito. Después de un tiempo sin actividad se entrega al estado, que lo guarda hasta que alguien lo reclama.' },
        { q: '¿Los herederos pueden reclamar propiedad no reclamada?', a: 'Sí. Si el dueño falleció, por lo general los herederos o la herencia pueden reclamarla con los documentos correctos.' },
        { q: '¿Cuánto tarda un reclamo?', a: 'La mayoría de los reclamos se resuelven en 60 a 120 días, según el estado y el tipo de reclamo. Los reclamos de herederos o empresas pueden tardar más.' },
      ]}
      related={[
        { href: '/map', label: 'Mapa de fondos no reclamados', desc: 'Vea lo que guarda cada estado y cómo funcionan los reclamos allí.' },
        { href: '/services/state-unclaimed-funds', label: 'Fondos retenidos por el estado', desc: 'Dinero en manos de tribunales, condados y agencias del estado.' },
        { href: '/services/estate-recovery', label: 'Recuperación para herederos', desc: 'Reclame el dinero que dejó un ser querido.' },
      ]}
      ctaTitle="Su nombre puede estar ya en el sistema."
      ctaText="Buscamos en los registros de los 50 estados sin costo. Si hay dinero esperando a su nombre, presentamos el reclamo y lo recuperamos por contingencia."
    />
  )
}
