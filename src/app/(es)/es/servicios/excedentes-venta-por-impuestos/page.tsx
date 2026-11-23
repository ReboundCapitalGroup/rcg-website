import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { toEs } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Recuperación de Sobrantes de Ventas por Impuestos (Tax Deed) | RCG',
  description: 'Recupere el sobrante cuando una propiedad se vende en subasta por impuestos por más de lo que se debía. Rebound Capital Group presenta el reclamo sin costo por adelantado.',
  alternates: { canonical: '/es/servicios/excedentes-venta-por-impuestos' },
}

export default function ExcedentesImpuestosPage() {
  return (
    <ServicePage
      lang="es"
      slug="tax-deed-surplus"
      image="/img/aerial-small-town.webp"
      imagePos="50% 50%"
      serviceName="Sobrantes de ventas por impuestos"
      badge="Después de la subasta · $0 por adelantado"
      h1Lead="Sobrantes de ventas"
      h1Accent="por impuestos."
      answer="Cuando una propiedad se vende en una subasta por impuestos (tax deed) por más de los impuestos, multas y cargos que se debían, el sobrante, llamado overage o excess proceeds, le pertenece al antiguo dueño. El condado lo guarda hasta que se reclama, y hay plazos. Nosotros lo encontramos y presentamos el reclamo a través de nuestra red de abogados con licencia. $0 por adelantado."
      ctaHref="/free-review?type=tax_deed"
      ctaLabel="Revisar mi propiedad gratis"
      sections={[
        {
          tag: 'Qué es',
          title: 'Un sobrante que se le debe a usted.',
          points: ['Fondos en el condado', 'Se debe después de pagar impuestos', 'Con fecha límite', '$0 por adelantado'],
          body: (
            <>
              <p>Cuando un condado vende una propiedad en una subasta por impuestos para cobrar impuestos atrasados, las ofertas muchas veces superan con creces lo que se debía. Primero se pagan los impuestos atrasados, las multas y los cargos. Lo que queda es el sobrante, y por ley le pertenece al antiguo dueño.</p>
              <p>El condado guarda estos fondos, y la mayoría de los antiguos dueños nunca recibe un aviso claro de que hay dinero esperando. Si no se presenta un reclamo a tiempo, los fondos pueden pasar al condado o al estado.</p>
              <p>RCG vigila los registros de ventas por impuestos en todo el país. Cuando encontramos un sobrante a su nombre, nos encargamos de todo el reclamo a través de nuestra red de abogados con licencia. Para casas perdidas ante un prestamista, vea <Link href={toEs('/services/foreclosure-surplus')}>fondos excedentes de ejecución</Link>.</p>
            </>
          ),
        },
      ]}
      steps={[
        { title: 'La propiedad se vende', desc: 'Por impuestos atrasados, el condado vende la propiedad en una subasta por impuestos.' },
        { title: 'Se genera un sobrante', desc: 'Si la oferta ganadora supera los impuestos y cargos, la diferencia le pertenece al antiguo dueño.' },
        { title: 'El condado lo guarda', desc: 'El sobrante se queda con el condado hasta que se reclama o vence el plazo.' },
        { title: 'Presentamos el reclamo', desc: 'Verificamos el reclamo y lo presentamos a través de nuestra red de abogados con licencia.' },
        { title: 'Usted recibe su dinero', desc: 'Cuando el condado aprueba el reclamo, los fondos se le entregan. Nuestros honorarios salen solo de lo recuperado.' },
      ]}
      faqs={[
        { q: '¿En qué se diferencia un sobrante por impuestos de los fondos excedentes de una ejecución?', a: 'Los fondos excedentes de una ejecución vienen de una venta que inició un prestamista. Un sobrante por impuestos viene de una venta que inició el condado por impuestos atrasados. En ambos casos queda dinero que le pertenece al antiguo dueño.' },
        { q: '¿Cuánto tiempo tengo para reclamar un sobrante por impuestos?', a: 'Los plazos varían según el estado y el condado, y algunos son cortos. Contáctenos en cuanto crea que puede haber un sobrante.' },
        { q: '¿Y si yo debía impuestos atrasados de la propiedad?', a: 'Los impuestos atrasados se pagan primero con la venta. El sobrante es lo que queda después de todos los impuestos y cargos, y ese monto le pertenece a usted.' },
        { q: '¿Los herederos pueden reclamar un sobrante por impuestos?', a: 'Sí. Si el antiguo dueño falleció, los herederos o la herencia pueden tener derecho a él. Coordinamos estos reclamos, incluida la sucesión cuando el tribunal la exige.' },
      ]}
      related={[
        { href: '/services/foreclosure-surplus', label: 'Fondos excedentes de ejecución', desc: '¿Perdió la casa ante un prestamista? Revise si sobró dinero.' },
        { href: '/services/probate-assistance', label: 'Ayuda con sucesiones', desc: 'Cuando el dueño falleció, los herederos muchas veces necesitan una sucesión primero.' },
        { href: '/map', label: 'Mapa de fondos no reclamados', desc: 'Vea lo que su estado podría guardar a su nombre.' },
      ]}
      ctaTitle="¿Su propiedad se vendió por impuestos?"
      ctaText="Si su propiedad se vendió en una subasta por impuestos, puede haber dinero esperando a su nombre. Buscamos gratis y solo cobramos cuando recuperamos."
    />
  )
}
