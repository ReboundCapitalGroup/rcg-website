import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { toEs } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Recuperación de Fondos Excedentes de Ejecución Hipotecaria | Sin Costo por Adelantado | RCG',
  description: 'Recupere los fondos excedentes que guarda el tribunal después de que su propiedad se vendió en subasta por más de lo que usted debía. Rebound Capital Group presenta el reclamo sin costo por adelantado.',
  alternates: { canonical: '/es/servicios/fondos-excedentes-ejecucion' },
}

export default function FondosExcedentesPage() {
  return (
    <ServicePage
      lang="es"
      slug="foreclosure-surplus"
      image="/img/aerial-gulf-coast.webp"
      imagePos="40% 60%"
      band={{ src: '/img/aerial-suburb-lakes.webp', title: 'Dinero olvidado, en cada condado.', text: 'Cada semana hay ventas por ejecución en todo el país. Cuando una casa se vende por más de lo que se debía, el sobrante es del dueño.' }}
      serviceName="Fondos excedentes de ejecución"
      badge="Después de la subasta · $0 por adelantado"
      h1Lead="Fondos excedentes"
      h1Accent="de su ejecución."
      answer="Cuando una casa en ejecución se vende en subasta por más de lo que se debía, el dinero que sobra, llamado fondos excedentes, le pertenece al antiguo dueño. Lo guarda el tribunal o el condado hasta que alguien lo reclama, y hay plazos. Nosotros lo encontramos y presentamos el reclamo a través de nuestra red de abogados con licencia. $0 por adelantado."
      ctaHref="/free-review?type=foreclosure"
      ctaLabel="Revisar mi propiedad gratis"
      sections={[
        {
          tag: 'Qué es',
          title: 'Dinero que el tribunal guarda para usted.',
          points: ['Fondos en el tribunal', 'Suyos por ley', 'Con fecha límite', '$0 por adelantado'],
          body: (
            <>
              <p>Cuando un prestamista ejecuta una hipoteca y la propiedad se vende en subasta, el precio de venta muchas veces supera lo que se debía de la hipoteca y otros gravámenes. Ese sobrante se llama fondos excedentes. Según las leyes de la mayoría de los estados, ese dinero le pertenece al antiguo dueño.</p>
              <p>La mayoría de los antiguos dueños nunca recibe un aviso claro de que existen fondos excedentes. El dinero puede quedarse mucho tiempo con el secretario del tribunal, y si nadie lo reclama puede pasar al estado. Para entonces el reclamo es más difícil, y a veces el plazo ya se cerró.</p>
              <p>Según el estado y el tipo de venta, el mismo dinero puede llamarse fondos excedentes, sobrantes, excess proceeds u overbid. Sin importar el nombre, es lo que queda después de pagar la deuda y los costos. Para casas vendidas por impuestos atrasados, vea <Link href={toEs('/services/tax-deed-surplus')}>sobrantes de ventas por impuestos</Link>.</p>
              <p>RCG vigila las ejecuciones en todo el país. Cuando hay fondos excedentes a su nombre, le contactamos, presentamos el reclamo a través de nuestra red de abogados con licencia y recuperamos sus fondos sin costo por adelantado.</p>
            </>
          ),
        },
      ]}
      steps={[
        { title: 'La propiedad se vende', desc: 'La casa se vende en una subasta por ejecución, muchas veces por más de la hipoteca y los gravámenes.' },
        { title: 'Se genera un sobrante', desc: 'La diferencia entre el precio de venta y la deuda total le pertenece al antiguo dueño, no al prestamista.' },
        { title: 'El tribunal lo guarda', desc: 'El sobrante se queda con el secretario del tribunal del condado donde ocurrió la venta hasta que se reclama.' },
        { title: 'Presentamos el reclamo', desc: 'Confirmamos los fondos y presentamos el reclamo a través de nuestra red de abogados con licencia.' },
        { title: 'Usted recibe su dinero', desc: 'Cuando el tribunal aprueba el reclamo, los fondos se le entregan. Nuestros honorarios salen solo de lo recuperado.' },
      ]}
      faqs={[
        { q: '¿Cuánto tiempo tengo para reclamar fondos excedentes de una ejecución?', a: 'Depende del estado y del tipo de venta, y algunos plazos son cortos. Los fondos no reclamados pueden pasar al estado. Contáctenos en cuanto crea que puede haber un sobrante.' },
        { q: '¿Y si la propiedad tenía varios gravámenes?', a: 'Los gravámenes se pagan en orden de prioridad con el dinero de la venta. Lo que queda después de pagarlos le pertenece al antiguo dueño. Los abogados de nuestra red revisan los gravámenes en cada caso.' },
        { q: '¿Puedo reclamar si pasé por una bancarrota?', a: 'Posiblemente. La bancarrota puede complicar un reclamo, pero no lo descarta automáticamente. Contáctenos y revisamos su situación.' },
        { q: '¿Y si otra persona también reclama los fondos?', a: 'Los reclamos en competencia ocurren. Los abogados de nuestra red manejan las disputas y objeciones como parte de la recuperación, sin costo adicional para usted.' },
      ]}
      related={[
        { href: '/services/tax-deed-surplus', label: 'Sobrantes de ventas por impuestos', desc: '¿Se vendió por impuestos atrasados? El sobrante también puede ser suyo.' },
        { href: '/services/estate-recovery', label: 'Recuperación para herederos', desc: '¿El dueño falleció? Por lo general los herederos todavía pueden reclamarlo.' },
        { href: '/services/time-extensions', label: 'Más tiempo antes del desalojo', desc: '¿Necesita tiempo para mudarse después de la venta? Un abogado podría ayudarle.' },
      ]}
      ctaTitle="¿Cree que puede haber fondos excedentes?"
      ctaText="Buscamos su nombre y las propiedades relacionadas con usted. Si hay fondos excedentes, presentamos el reclamo y nos encargamos de todo. No paga nada a menos que recuperemos."
    />
  )
}
