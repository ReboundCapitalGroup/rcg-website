import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { toEs } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Recuperación de Fondos para Herederos y Herencias | RCG',
  description: 'Recupere fondos excedentes que se le debían a un dueño fallecido, para su herencia o sus herederos. Rebound Capital Group coordina la sucesión y presenta el reclamo a través de nuestra red de abogados con licencia, sin costo por adelantado.',
  alternates: { canonical: '/es/servicios/recuperacion-de-herencias' },
}

export default function RecuperacionHerenciasPage() {
  return (
    <ServicePage
      lang="es"
      slug="estate-recovery"
      image="/img/desk-files.webp"
      imagePos="50% 60%"
      serviceName="Recuperación para herederos"
      badge="Herederos y herencias · $0 por adelantado"
      h1Lead="Recuperación para"
      h1Accent="herederos."
      answer="Cuando el dueño de una propiedad fallece antes de reclamar dinero que se le debía, ese dinero no desaparece. Por lo general los herederos y la herencia todavía pueden recuperar fondos excedentes, sobrantes por impuestos y propiedad no reclamada. Nosotros encontramos los fondos, identificamos a los herederos y manejamos el reclamo a través de nuestra red de abogados con licencia. $0 por adelantado."
      ctaHref="/free-review?type=estate"
      ctaLabel="Revisar una herencia gratis"
      sections={[
        {
          tag: 'Para quién es',
          title: 'Los fondos no mueren con el dueño.',
          points: ['Herederos y beneficiarios', 'Representantes de la herencia', 'Cónyuges sobrevivientes', 'Hijos adultos'],
          body: (
            <>
              <p>Los fondos excedentes de ejecuciones o ventas por impuestos, la propiedad no reclamada que guarda el estado y otro dinero recuperable no desaparecen cuando fallece el dueño original. Según las leyes de la mayoría de los estados, los herederos y la herencia conservan el derecho a reclamarlos.</p>
              <p>El proceso es más complejo que un reclamo normal. Requiere documentar bien la herencia, identificar a los herederos legítimos y, en algunos casos, abrir una sucesión. Sin el proceso correcto, los reclamos muchas veces se niegan o se atrasan.</p>
              <p>RCG trabaja con abogados de herencias de nuestra red en cada caso de herederos. Revisamos la herencia, preparamos el papeleo y presentamos el reclamo correctamente. Cuando el tribunal exige una sucesión, vea <Link href={toEs('/services/probate-assistance')}>ayuda con sucesiones para herederos</Link>.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'Situaciones comunes',
        title: 'Situaciones que manejamos.',
        items: [
          { title: 'El dueño falleció', desc: 'El dinero que se le debía a un dueño fallecido todavía lo pueden recuperar los herederos o la herencia por el proceso legal correcto.' },
          { title: 'No hubo testamento ni sucesión', desc: 'Muchas familias nunca abren una sucesión. Eso no termina el derecho a reclamar. Buscamos el camino correcto para su situación.' },
          { title: 'Hay varios herederos', desc: 'Los reclamos con varios herederos requieren documentar la parte de cada uno y su consentimiento. Los abogados de nuestra red lo coordinan.' },
          { title: 'La propiedad se vendió hace años', desc: 'Los fondos pueden quedar sin reclamar por años. Aunque la venta haya sido hace mucho, el dinero podría recuperarse según el estado y el tipo de reclamo.' },
        ],
      }}
      steps={[
        { title: 'Encontramos los fondos', desc: 'Buscamos en registros judiciales y bases de datos del estado dinero relacionado con el antiguo dueño y sus propiedades.' },
        { title: 'Revisamos la herencia', desc: 'Revisamos el testamento, el acta de defunción, los registros de sucesión y el historial de escrituras para elegir el camino correcto.' },
        { title: 'Los abogados presentan', desc: 'Los abogados de nuestra red preparan y presentan el reclamo, y trabajan con el tribunal de sucesiones si hace falta.' },
        { title: 'Los herederos cobran', desc: 'Los fondos aprobados se reparten entre los herederos. Nuestros honorarios salen solo de lo recuperado.' },
      ]}
      faqs={[
        { q: '¿Los herederos pueden reclamar fondos excedentes?', a: 'Por lo general, sí. Cuando el dueño falleció, la herencia o los herederos legales pueden reclamar el dinero con el papeleo correcto.' },
        { q: '¿Tenemos que abrir una sucesión?', a: 'A veces. Muchos tribunales exigen que alguien tenga autoridad legal sobre la herencia antes de liberar los fondos. Coordinamos la sucesión cuando hace falta.' },
        { q: '¿Cuánto cuesta?', a: 'Nada por adelantado. Nuestros honorarios salen solo de lo que recuperamos. Si no recuperamos nada, la familia no debe nada.' },
      ]}
      related={[
        { href: '/services/probate-assistance', label: 'Ayuda con sucesiones', desc: 'Cuando el tribunal exige una sucesión antes de liberar los fondos.' },
        { href: '/services/foreclosure-surplus', label: 'Fondos excedentes de ejecución', desc: 'Dinero que sobra después de una venta por ejecución.' },
        { href: '/services/unclaimed-property', label: 'Propiedad no reclamada', desc: 'Cuentas, cheques y depósitos que guarda el estado.' },
      ]}
      ctaTitle="¿Cree que un ser querido dejó dinero?"
      ctaText="Buscamos en registros judiciales y bases de datos del estado dinero relacionado con el antiguo dueño. Si existe un reclamo, nos encargamos de todo el proceso sin costo por adelantado."
    />
  )
}
