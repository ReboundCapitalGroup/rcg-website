import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { toEs } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Ayuda con Sucesiones para Herederos: Reclame Fondos que Dejó un Familiar | RCG',
  description: '¿Un familiar falleció antes de reclamar fondos excedentes o propiedad no reclamada? Muchas veces los herederos todavía pueden recuperarlos. Coordinamos la sucesión y el reclamo a través de nuestra red de abogados con licencia. Revisión gratis.',
  alternates: { canonical: '/es/servicios/ayuda-con-sucesiones' },
}

const p = { margin: 0 }

export default function AyudaSucesionesPage() {
  return (
    <ServicePage
      lang="es"
      slug="probate-assistance"
      image="/img/signing.webp"
      imagePos="50% 70%"
      serviceName="Ayuda con sucesiones para herederos"
      badge="Herederos · Herencias · Todo el país"
      h1Lead="Ayuda con sucesiones"
      h1Accent="para herederos."
      answer="Cuando alguien fallece antes de reclamar fondos excedentes o propiedad no reclamada, el dinero no desaparece. Por lo general sus herederos todavía pueden recuperarlo, pero muchas veces el tribunal exige primero una sucesión (probate). Nosotros encontramos los fondos, identificamos a los herederos y coordinamos la sucesión y el reclamo a través de nuestra red de abogados con licencia. La primera revisión es gratis."
      ctaHref="/free-review?type=estate"
      ctaLabel="Revisión gratis"
      sections={[
        {
          tag: 'Por qué una sucesión',
          title: 'Por qué los herederos muchas veces necesitan una sucesión primero',
          points: ['Apertura de la herencia', 'Representante personal', 'Identificación de herederos', 'Presentación del reclamo'],
          body: (
            <>
              <p style={p}>
                Los tribunales y agencias del estado pagan los fondos excedentes y la propiedad no reclamada a la persona que tiene derecho legal a ellos. Cuando el dueño falleció, por lo general esa es la herencia, y alguien tiene que recibir autoridad legal para actuar por ella. En la mayoría de los estados eso ocurre mediante una sucesión, en la que el tribunal nombra a un representante personal (a veces llamado albacea o administrador).
              </p>
              <p style={p}>
                Muchas familias nunca abren una sucesión porque parecía que no había nada que heredar. Luego una ejecución o venta por impuestos deja un sobrante, o aparece una cuenta vieja como propiedad no reclamada, y de pronto la herencia importa.
              </p>
            </>
          ),
        },
        {
          tag: 'Tipos de sucesión',
          title: 'Sencilla o formal: depende del estado y del monto',
          body: (
            <>
              <p style={p}>
                La mayoría de los estados ofrecen un proceso más corto para herencias pequeñas, muchas veces llamado administración sumaria o declaración jurada de herencia pequeña. Las herencias más grandes, las que tienen un testamento disputado o las que tienen varios herederos pueden necesitar una sucesión formal. Los límites de dinero y los pasos cambian en cada estado.
              </p>
              <p style={p}>
                Nuestra red de abogados con licencia en el estado donde están los fondos decide qué camino aplica, abre la herencia si hace falta y presenta el reclamo de fondos excedentes o propiedad no reclamada al mismo tiempo, para que no se pierda el plazo del reclamo mientras se organiza la herencia.
              </p>
            </>
          ),
        },
        {
          tag: 'Qué reunir',
          title: 'Documentos que suelen ayudar',
          points: ['Acta de defunción', 'Testamento, si lo hay', 'Prueba de parentesco', 'Contacto de otros herederos'],
          body: (
            <>
              <p style={p}>
                No necesita tenerlo todo antes de llamarnos. Los documentos comunes son el acta de defunción, el testamento si existe y una prueba de su parentesco (por ejemplo, actas de nacimiento o de matrimonio). Si hay hermanos u otros herederos, sus nombres y datos de contacto ayudan, porque por ley los fondos por lo general se reparten.
              </p>
              <p style={p}>
                Si los fondos vienen de una ejecución o venta por impuestos, vea <Link href={toEs('/services/foreclosure-surplus')} style={{ color: '#8fb0ff' }}>fondos excedentes de ejecución</Link> y <Link href={toEs('/services/tax-deed-surplus')} style={{ color: '#8fb0ff' }}>sobrantes de ventas por impuestos</Link>. Para cuentas viejas y dinero en manos del estado, vea <Link href={toEs('/services/unclaimed-property')} style={{ color: '#8fb0ff' }}>propiedad no reclamada</Link>.
              </p>
            </>
          ),
        },
      ]}
      steps={[
        { title: 'Díganos quién falleció', desc: 'Su nombre, el condado o estado donde estaba la propiedad o la cuenta, y su parentesco.' },
        { title: 'Encontramos los fondos', desc: 'Confirmamos si hay dinero retenido y cuánto, sin costo para usted.' },
        { title: 'Sucesión si hace falta', desc: 'Un abogado con licencia de nuestra red abre la herencia cuando el tribunal lo exige.' },
        { title: 'Reclamo y pago', desc: 'Se presenta el reclamo y los fondos se pagan a la herencia o a los herederos según indique el tribunal. $0 por adelantado.' },
      ]}
      faqs={[
        { q: 'Mi papá o mi mamá falleció antes de reclamar fondos excedentes. ¿Todavía puedo recibirlos?', a: 'Por lo general, sí. Los fondos excedentes y la propiedad no reclamada pasan a la herencia, y los herederos pueden reclamarlos, muchas veces después de abrir una sucesión. Los plazos siguen aplicando, así que conviene empezar pronto.' },
        { q: '¿Siempre necesito una sucesión para reclamar el dinero?', a: 'No siempre. Algunos estados permiten una declaración jurada de herencia pequeña o un proceso más corto para montos menores. Nuestra red de abogados con licencia en el estado donde están los fondos le dirá qué camino aplica.' },
        { q: '¿Y si hay varios herederos?', a: 'Por lo general el dinero se reparte entre los herederos según indique la ley del estado o el testamento. Tener los nombres y datos de contacto de los demás herederos ayuda a que el proceso avance más rápido.' },
        { q: '¿Cuánto cuesta?', a: 'La primera revisión es gratis. La recuperación de fondos excedentes y propiedad no reclamada se hace por contingencia, así que no hay costo por adelantado. Cualquier honorario de un abogado de sucesiones se explica antes de empezar.' },
        { q: '¿Rebound Capital Group es un bufete de abogados?', a: 'No. Rebound Capital Group no es un bufete de abogados y no da asesoría legal. Las sucesiones y los reclamos se manejan a través de nuestra red de abogados con licencia.' },
      ]}
      related={[
        { href: '/services/estate-recovery', label: 'Recuperación para herederos', desc: 'Cómo encontramos fondos que se le debían a un familiar fallecido.' },
        { href: '/services/foreclosure-surplus', label: 'Fondos excedentes de ejecución', desc: 'Dinero que sobra después de una venta por ejecución.' },
        { href: '/services/time-extensions', label: 'Extensión de tiempo', desc: 'Más tiempo antes de una venta por ejecución o un desalojo.' },
      ]}
      ctaTitle="¿Está resolviendo los asuntos de un ser querido?"
      ctaText="Díganos quién falleció y dónde vivía. Revisamos gratis si hay dinero retenido para la herencia."
    />
  )
}
