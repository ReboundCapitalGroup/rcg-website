import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Recuperación de Fondos Retenidos por el Estado | RCG',
  description: 'Recupere dinero en manos de tribunales, condados y agencias del estado: fondos excedentes de ejecuciones, sobrantes por impuestos, depósitos judiciales y propiedad no reclamada. Rebound Capital Group presenta el reclamo sin costo por adelantado.',
  alternates: { canonical: '/es/servicios/fondos-retenidos-por-el-estado' },
}

export default function FondosRetenidosPage() {
  return (
    <ServicePage
      lang="es"
      slug="state-unclaimed-funds"
      image="/img/aerial-miami.webp"
      imagePos="50% 60%"
      serviceName="Fondos retenidos por el estado"
      badge="Tribunales, condados y estados · $0 por adelantado"
      h1Lead="Fondos retenidos"
      h1Accent="por el estado."
      answer="Los tribunales, condados y agencias del estado guardan dinero que les pertenece a particulares: sobrantes de ejecuciones y ventas por impuestos, depósitos judiciales y propiedad no reclamada. El gobierno solo lo guarda, y por lo general hay un plazo para reclamarlo. Nosotros lo encontramos y presentamos el reclamo a través de nuestra red de abogados con licencia. $0 por adelantado."
      ctaHref="/free-review?type=unclaimed_property"
      ctaLabel="Empezar búsqueda gratis"
      sections={[
        {
          tag: 'Qué es',
          title: 'Dinero en manos del gobierno, esperando que alguien lo reclame.',
          points: ['Sobrantes en tribunales', 'Depósitos en el condado', 'Propiedad no reclamada estatal', 'Con fecha límite'],
          body: (
            <>
              <p>Los fondos retenidos por el estado incluyen cualquier dinero que una oficina de gobierno guarda para un particular. Eso incluye el dinero que guardan los secretarios del condado después de una ejecución o venta por impuestos, el dinero depositado en tribunales durante un caso, y las cuentas inactivas entregadas al estado bajo las leyes de propiedad no reclamada.</p>
              <p>Lo que tienen en común: por ley el dinero le pertenece a alguien, el gobierno solo lo guarda, y por lo general hay un plazo después del cual el reclamo se complica o se pierde.</p>
              <p>RCG encuentra y recupera todo tipo de fondos retenidos por el estado a través de nuestra red de abogados con licencia. Si un tribunal, condado o agencia del estado le debe dinero, lo encontramos y lo reclamamos.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'Tipos que recuperamos',
        title: 'Lo que recuperamos.',
        items: [
          { title: 'Fondos excedentes de ejecución', desc: 'Dinero que sobra después de una venta por ejecución, guardado por el secretario del condado hasta que el antiguo dueño lo reclama.', href: '/services/foreclosure-surplus', linkLabel: 'Más sobre fondos excedentes' },
          { title: 'Sobrantes de ventas por impuestos', desc: 'Dinero que sobra después de una venta por impuestos, guardado por el condado. Por ley les corresponde a los antiguos dueños.', href: '/services/tax-deed-surplus', linkLabel: 'Más sobre sobrantes por impuestos' },
          { title: 'Excedentes de ventas judiciales', desc: 'Las ventas por partición, sucesión o sentencia pueden dejar excedentes que el tribunal guarda hasta que se reclaman.', href: '/free-review', linkLabel: 'Preguntar por excedentes' },
          { title: 'Depósitos judiciales sin reclamar', desc: 'Dinero depositado en un tribunal durante un caso o acuerdo que nunca se cobró.', href: '/free-review', linkLabel: 'Empezar búsqueda gratis' },
          { title: 'Propiedad no reclamada del estado', desc: 'Cuentas bancarias, seguros, dividendos y reembolsos entregados al estado.', href: '/services/unclaimed-property', linkLabel: 'Ver tipos de propiedad no reclamada' },
        ],
      }}
      faqs={[
        { q: '¿Qué son los fondos retenidos por el estado?', a: 'Cualquier dinero que un tribunal, condado o agencia del estado guarda para un particular, como fondos excedentes de ejecuciones, sobrantes por impuestos, depósitos judiciales y propiedad no reclamada.' },
        { q: '¿Hay una fecha límite?', a: 'Por lo general sí, y depende del tipo de fondos y del estado. Mientras antes revise, mejor.' },
        { q: '¿Cuánto cuesta?', a: 'Nada por adelantado. Nuestros honorarios salen solo de lo que recuperamos.' },
      ]}
      related={[
        { href: '/map', label: 'Mapa de fondos no reclamados', desc: 'Vea lo que guarda cada estado y cómo funcionan los reclamos allí.' },
        { href: '/services/unclaimed-property', label: 'Propiedad no reclamada', desc: 'Cuentas, cheques y depósitos que guarda el estado.' },
        { href: '/services/foreclosure-surplus', label: 'Fondos excedentes de ejecución', desc: 'Dinero que sobra después de una venta por ejecución.' },
      ]}
      ctaTitle="Puede haber dinero esperando a su nombre."
      ctaText="Buscamos en registros judiciales, sistemas de condados y bases de datos del estado sin costo. Si una oficina de gobierno guarda dinero para usted, lo encontramos, lo reclamamos y lo recuperamos."
    />
  )
}
