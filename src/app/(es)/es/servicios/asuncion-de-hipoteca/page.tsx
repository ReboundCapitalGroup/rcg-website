import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { toEs } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Asunción de Hipoteca para Evitar la Ejecución | RCG',
  description: 'Una asunción de hipoteca le permite traspasar su préstamo y evitar la ejecución. Rebound Capital Group le pone en contacto con compradores calificados y apoya la aprobación del prestamista.',
  alternates: { canonical: '/es/servicios/asuncion-de-hipoteca' },
}

export default function AsuncionDeHipotecaPage() {
  return (
    <ServicePage
      lang="es"
      slug="mortgage-assumptions"
      image="/img/aerial-suburb-lakes.webp"
      imagePos="45% 50%"
      serviceName="Asunción de hipoteca"
      badge="Antes de la subasta · Red de compradores"
      h1Lead="Asunción de"
      h1Accent="hipoteca."
      answer="Una asunción de hipoteca permite que un comprador calificado asuma su préstamo actual, con la aprobación del prestamista, para que la casa nunca llegue a una subasta por ejecución. Muchos préstamos FHA, VA y USDA se pueden asumir; la mayoría de los préstamos convencionales no. Revisamos su préstamo y le ponemos en contacto con compradores de nuestra red."
      ctaHref="/free-review?type=pre_foreclosure"
      ctaLabel="Ver si mi préstamo califica"
      sections={[
        {
          tag: 'Qué es',
          title: 'Una alternativa a la ejecución.',
          points: ['Evita la subasta', 'Protege su crédito', 'Compradores calificados', 'Sin costo para usted'],
          body: (
            <>
              <p>En una asunción de hipoteca, un comprador calificado toma su lugar en el préstamo actual y sigue haciendo los pagos con los términos originales. Para un propietario que enfrenta una ejecución, puede ser una alternativa a perder la casa en subasta y recibir todo el golpe a su crédito de una ejecución completa.</p>
              <p>No todos los préstamos se pueden asumir. Los préstamos FHA, VA y USDA por lo general sí, con la aprobación del prestamista, mientras que la mayoría de los convencionales no. Revisamos su tipo de préstamo y le ponemos en contacto con compradores de nuestra red que manejan asunciones.</p>
              <p>Si la venta por ejecución ya ocurrió, todavía podrían deberle fondos excedentes. Vea <Link href={toEs('/services/foreclosure-surplus')}>fondos excedentes de ejecución</Link>.</p>
            </>
          ),
        },
      ]}
      steps={[
        { title: 'Revisamos su préstamo', desc: 'Tipo de préstamo, saldo y términos, para ver si una asunción es posible.' },
        { title: 'Buscamos un comprador', desc: 'Si lo es, le ponemos en contacto con un comprador calificado de nuestra red.' },
        { title: 'El prestamista aprueba', desc: 'El comprador presenta su solicitud ante su prestamista. Le ayudamos a coordinar el papeleo.' },
        { title: 'El préstamo se traspasa', desc: 'Una vez aprobado, el préstamo y el título pasan al comprador y se evita la subasta.' },
      ]}
      faqs={[
        { q: '¿Mi hipoteca se puede asumir?', a: 'Los préstamos FHA, VA y USDA por lo general sí, con la aprobación del prestamista. La mayoría de los convencionales no. Envíenos los detalles de su préstamo y lo revisamos.' },
        { q: '¿El prestamista tiene que aprobarlo?', a: 'Sí. El comprador tiene que calificar con su prestamista antes de que se pueda traspasar el préstamo.' },
        { q: '¿Y si mi préstamo no se puede asumir?', a: 'Otras opciones podrían funcionar, como una venta en efectivo antes de la subasta o pedir más tiempo. Vea ayuda y opciones ante una ejecución.' },
      ]}
      related={[
        { href: '/services/foreclosure-solutions', label: 'Ayuda y opciones ante una ejecución', desc: 'Todas las opciones antes de la subasta, en un solo lugar.' },
        { href: '/services/cash-offer', label: 'Oferta en efectivo antes de la venta', desc: 'Venda tal como está antes de la subasta.' },
        { href: '/services/time-extensions', label: 'Extensión de tiempo', desc: 'Más tiempo mientras se aprueba la asunción.' },
      ]}
      ctaTitle="¿Enfrenta una ejecución?"
      ctaText="Contáctenos antes de la fecha de venta. Revisamos su préstamo, le explicamos sus opciones y le ponemos en contacto con la ayuda adecuada, ya sea una asunción, una oferta en efectivo u otra cosa."
    />
  )
}
