import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { toEs } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Recuperación de Activos de Fideicomisos | RCG',
  description: 'Recupere fondos excedentes y activos no reclamados a nombre de un fideicomiso. Rebound Capital Group ayuda a los fideicomisarios a presentar el reclamo a través de nuestra red de abogados con licencia, sin costo por adelantado.',
  alternates: { canonical: '/es/servicios/recuperacion-de-fideicomisos' },
}

export default function FideicomisosPage() {
  return (
    <ServicePage
      lang="es"
      slug="trust-recovery"
      image="/img/home-miami-beach.webp"
      imagePos="60% 60%"
      serviceName="Recuperación de fideicomisos"
      badge="Fideicomisos y beneficiarios · $0 por adelantado"
      h1Lead="Recuperación de"
      h1Accent="fideicomisos."
      answer="El dinero a nombre de un fideicomiso, como el sobrante de la venta de una propiedad, cuentas inactivas y pagos de seguros, puede quedar sin reclamar cuando los fideicomisarios no saben que existe o cómo reclamarlo. Por lo general el fideicomisario puede recuperarlo para los beneficiarios. Nosotros lo encontramos y presentamos el reclamo a través de nuestra red de abogados con licencia. $0 por adelantado."
      ctaLabel="Revisar un fideicomiso gratis"
      sections={[
        {
          tag: 'Para quién es',
          title: 'Los activos de un fideicomiso se pueden recuperar.',
          points: ['Fideicomisarios y cofideicomisarios', 'Beneficiarios', 'Fideicomisarios sucesores', 'Fideicomisos revocables e irrevocables'],
          body: (
            <>
              <p>Cuando una propiedad a nombre de un fideicomiso se vende en una subasta por ejecución o por impuestos, cualquier sobrante le pertenece al fideicomiso. Cuando un fideicomiso tiene cuentas bancarias inactivas, pagos de seguros sin cobrar u otros activos entregados al estado, el fideicomisario puede recuperarlos para los beneficiarios.</p>
              <p>Los reclamos de fideicomisos necesitan documentos que muestren cómo está constituido el fideicomiso, la autoridad del fideicomisario para actuar y el interés de los beneficiarios. Sin ellos, los reclamos muchas veces se niegan o se atrasan en el tribunal.</p>
              <p>RCG trabaja con abogados de nuestra red que manejan asuntos de fideicomisos para preparar los documentos correctos y presentar el reclamo por los fideicomisarios y beneficiarios. Para dinero de una empresa cerrada, vea <Link href={toEs('/services/business-asset-recovery')}>recuperación de activos empresariales</Link>.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'Situaciones comunes',
        title: 'Situaciones que manejamos.',
        items: [
          { title: 'Sobrante a nombre de un fideicomiso', desc: 'Una propiedad escriturada a un fideicomiso que luego se ejecutó puede haber dejado un sobrante a nombre del fideicomiso. El fideicomisario puede reclamarlo.' },
          { title: 'Propiedad no reclamada de un fideicomiso', desc: 'Las cuentas y pólizas inactivas de un fideicomiso se entregan al estado. Los fideicomisarios pueden recuperarlas.' },
          { title: 'Fideicomisarios sucesores', desc: 'Cuando el fideicomisario original fallece o renuncia, ayudamos al sucesor a encontrar y recuperar activos que se pasaron por alto.' },
          { title: 'Fideicomisos terminados', desc: 'Los fideicomisos que ya terminaron pueden haber dejado activos con el estado o un tribunal. Muchas veces todavía se pueden recuperar.' },
        ],
      }}
      faqs={[
        { q: '¿Quién puede reclamar dinero a nombre de un fideicomiso?', a: 'Por lo general el fideicomisario actual, en nombre de los beneficiarios. Si el fideicomisario falleció o renunció, un fideicomisario sucesor puede tomar su lugar.' },
        { q: '¿Cuánto cuesta?', a: 'Nada por adelantado. Nuestros honorarios salen solo de lo que recuperamos.' },
      ]}
      related={[
        { href: '/services/business-asset-recovery', label: 'Activos de empresas', desc: 'Dinero de una LLC o corporación cerrada.' },
        { href: '/services/estate-recovery', label: 'Recuperación para herederos', desc: 'Dinero que dejó un ser querido.' },
        { href: '/services/unclaimed-property', label: 'Propiedad no reclamada', desc: 'Cuentas, cheques y depósitos que guarda el estado.' },
      ]}
      ctaTitle="Puede haber dinero a nombre del fideicomiso."
      ctaText="Buscamos en registros judiciales y bases de datos del estado con el nombre del fideicomiso y sus propiedades sin costo. Si hay activos, presentamos el reclamo por el fideicomisario y los beneficiarios."
    />
  )
}
