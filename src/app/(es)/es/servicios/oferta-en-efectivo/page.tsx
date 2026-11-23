import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { toEs } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Oferta en Efectivo Antes de la Ejecución | Rebound Capital Group',
  description: 'Reciba una oferta en efectivo por su propiedad antes de la subasta por ejecución. Rebound Capital Group le pone en contacto con compradores para que venda tal como está y conserve su capital.',
  alternates: { canonical: '/es/servicios/oferta-en-efectivo' },
}

export default function OfertaEnEfectivoPage() {
  return (
    <ServicePage
      lang="es"
      slug="cash-offer"
      image="/img/home-miami-beach.webp"
      imagePos="40% 60%"
      serviceName="Oferta en efectivo antes de la venta"
      badge="Antes de la subasta · Venda tal como está"
      h1Lead="Oferta en efectivo"
      h1Accent="antes de la subasta."
      answer="Si está atrasado en los pagos y quiere vender antes de la venta por ejecución, un comprador en efectivo de nuestra red podría comprar su casa tal como está. Sin reparaciones, sin publicar la casa, sin comisiones de agentes. Vender primero puede detener la ejecución y permitirle quedarse con el capital que le quede."
      ctaHref="/free-review?type=pre_foreclosure"
      ctaLabel="Pedir una oferta en efectivo"
      sections={[
        {
          tag: 'Para quién es',
          title: 'Venda antes de la subasta.',
          points: ['Sin reparaciones', 'Cierre rápido', 'Detiene la ejecución', 'Sin comisiones de agentes'],
          body: (
            <>
              <p>Cuando está atrasado en los pagos y se acerca una subasta, vender antes de la fecha de venta suele ser la mejor forma de proteger el capital que le queda y evitar el daño duradero a su crédito de una ejecución completa. Una venta en efectivo puede cerrar en días en vez de meses.</p>
              <p>RCG trabaja con una red de compradores en efectivo e inversionistas que compran casas tal como están en pre-ejecución. Sin reparaciones, sin comisiones de agentes, sin casas abiertas. Si los números funcionan, le ponemos en contacto con un comprador rápido y le acompañamos desde la oferta hasta el cierre.</p>
              <p>Si la ejecución ya ocurrió, todavía podrían deberle fondos excedentes de la venta. Vea <Link href={toEs('/services/foreclosure-surplus')}>fondos excedentes de ejecución</Link>.</p>
            </>
          ),
        },
      ]}
      steps={[
        { title: 'Comparta los detalles', desc: 'Su dirección, el saldo del préstamo y la fecha de venta. Vemos si una venta antes de la subasta es realista.' },
        { title: 'Conozca a un comprador', desc: 'Si califica, le ponemos en contacto con un comprador en efectivo de nuestra red que puede cerrar a su ritmo.' },
        { title: 'Oferta y contrato', desc: 'El comprador hace una oferta en efectivo. Si la acepta, se firma el contrato y empieza el cierre.' },
        { title: 'Cierre y siga adelante', desc: 'La hipoteca se paga con la venta y usted recibe el capital que quede. La ejecución se detiene.' },
      ]}
      faqs={[
        { q: '¿Puedo vender mi casa si ya está en ejecución?', a: 'Muchas veces sí, siempre que la subasta no haya ocurrido. Mientras antes empiece, más realista es vender antes de la fecha de subasta.' },
        { q: '¿Tengo que hacer reparaciones?', a: 'No. Los compradores de nuestra red compran las casas tal como están.' },
        { q: '¿Y si debo más de lo que vale la casa?', a: 'En ese caso una venta en efectivo podría no funcionar, pero otras opciones sí. Cuéntenos su situación y le explicamos qué es realista.' },
      ]}
      related={[
        { href: '/services/foreclosure-solutions', label: 'Ayuda y opciones ante una ejecución', desc: 'Todas las opciones antes de la subasta, en un solo lugar.' },
        { href: '/services/mortgage-assumptions', label: 'Asunción de hipoteca', desc: 'Que un comprador calificado asuma el préstamo.' },
        { href: '/services/time-extensions', label: 'Extensión de tiempo', desc: 'Más tiempo para cerrar una venta antes de la subasta.' },
      ]}
      ctaTitle="¿Quiere vender antes de la subasta?"
      ctaText="Mientras antes nos contacte, más opciones hay. Envíenos los detalles de la propiedad y le decimos si es posible vender antes de la subasta."
    />
  )
}
