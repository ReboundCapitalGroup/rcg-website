import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { toEs } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Ayuda con Ejecución Hipotecaria Antes de la Subasta | RCG',
  description: '¿Enfrenta una ejecución hipotecaria? Opciones antes de la subasta para conservar su casa o proteger su capital: extensión de tiempo, oferta en efectivo, asunción de hipoteca y más. Revisión gratis, llame o escriba 24/7.',
  alternates: { canonical: '/es/servicios/ayuda-ejecucion-hipotecaria' },
}

export default function AyudaEjecucionPage() {
  return (
    <ServicePage
      lang="es"
      slug="foreclosure-solutions"
      image="/img/front-door.webp"
      imagePos="50% 60%"
      band={{ src: '/img/aerial-gulf-coast.webp', title: 'Vale la pena proteger su capital.', text: 'Mientras la casa no se haya vendido en subasta, por lo general todavía hay margen para actuar.' }}
      serviceName="Ayuda con ejecución hipotecaria"
      badge="Antes de la subasta · Proteja su capital"
      h1Lead="Ayuda con su ejecución"
      h1Accent="antes de la subasta."
      answer="Si su casa está en proceso de ejecución hipotecaria pero todavía no se ha vendido, probablemente tiene más opciones de las que cree. Según su caso, un abogado podría posponer la venta, un comprador podría asumir su hipoteca, o usted podría vender primero y quedarse con su capital. La primera revisión es gratis, y mientras antes nos contacte, más opciones tiene."
      ctaHref="/free-review?type=pre_foreclosure"
      ctaLabel="Ver mis opciones gratis"
      sections={[
        {
          tag: 'Antes de la subasta',
          title: 'Opciones que protegen su capital.',
          points: ['Plan antes de la venta', 'Protección del capital', 'Más tiempo', 'Revisión gratis'],
          body: (
            <>
              <p>La mayoría de los propietarios en ejecución creen que solo pueden pelear una batalla perdida o irse sin nada. Casi nunca es así. Mientras la casa no se haya vendido en subasta, por lo general hay margen para actuar, y vale la pena proteger el capital que usted construyó.</p>
              <p>Según su caso, podríamos conseguirle una oferta en efectivo antes de la venta, ponerle en contacto con un comprador calificado que asuma su hipoteca, o con un abogado que pueda pedir más tiempo. El objetivo siempre es el mismo: que usted conserve más de lo que es suyo.</p>
              <p>Y si la venta ya ocurrió, la historia no termina ahí. Cuando una casa se vende por más de lo que se debía, el sobrante le pertenece al antiguo dueño. Vea <Link href={toEs('/services/foreclosure-surplus')}>fondos excedentes de ejecución</Link>.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'Sus opciones',
        title: 'Caminos antes de la venta.',
        items: [
          { tag: 'Más tiempo', title: 'Extensión de tiempo', desc: 'Un abogado de nuestra red podría posponer la venta mientras usted trabaja en una modificación del préstamo, una venta, el traspaso de la hipoteca y más.', href: '/services/time-extensions', linkLabel: 'Ver extensión de tiempo' },
          { tag: 'Vender primero', title: 'Oferta en efectivo', desc: 'Venda la casa tal como está antes de la subasta y quédese con su capital en vez de perderlo en la venta.', href: '/services/cash-offer', linkLabel: 'Ver oferta en efectivo' },
          { tag: 'Traspasarla', title: 'Asunción de hipoteca', desc: 'En algunos casos un comprador calificado puede asumir su hipoteca actual, y la casa nunca llega a subasta.', href: '/services/mortgage-assumptions', linkLabel: 'Ver asunción de hipoteca' },
          { tag: '¿Ya se vendió?', title: 'Reclame el sobrante', desc: 'Si la subasta ya ocurrió y la casa se vendió por más de lo que usted debía, el sobrante sigue siendo suyo.', href: '/services/foreclosure-surplus', linkLabel: 'Revisar fondos excedentes' },
        ],
      }}
      faqs={[
        { q: 'Todavía no he perdido la casa. ¿Me pueden ayudar?', a: 'Sí. Antes de la venta es cuando hay más opciones. Podríamos conseguirle una oferta en efectivo, una asunción de hipoteca o ponerle en contacto con un abogado que pueda pedir más tiempo.' },
        { q: '¿Cuánto cuesta revisar mis opciones?', a: 'Nada. Revisamos su situación y le explicamos los caminos realistas sin costo. Usted decide qué hacer después.' },
        { q: '¿Qué tan rápido tengo que actuar?', a: 'Lo antes posible. Una vez que hay fecha de venta, el margen se reduce rápido. Mientras antes nos contacte, más opciones quedan.' },
        { q: '¿Y si ninguna opción funciona?', a: 'Si la venta sigue adelante y la casa se vende por más de lo que se debía, el sobrante le pertenece a usted, y le ayudamos a recuperarlo.' },
      ]}
      related={[
        { href: '/services/time-extensions', label: 'Extensión de tiempo', desc: 'Posponer la venta o conseguir más tiempo antes del desalojo.' },
        { href: '/services/cash-offer', label: 'Oferta en efectivo antes de la venta', desc: 'Venda antes de la subasta y conserve su capital.' },
        { href: '/services/foreclosure-surplus', label: '¿Ya se vendió? Reclame el sobrante', desc: 'El sobrante de la venta puede ser suyo.' },
      ]}
      ctaTitle="¿Todavía en proceso de ejecución?"
      ctaText="Mientras antes hablemos, más opciones tiene. Cuéntenos en qué punto está y le explicamos cada camino realista, sin costo."
    />
  )
}
