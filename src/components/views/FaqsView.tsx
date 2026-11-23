import Link from 'next/link'
import h from '@/components/home/home.module.css'
import sv from '@/components/service.module.css'
import FaqBrowser from '@/components/faq/FaqBrowser'
import { L, type Lang } from '@/lib/i18n'

const EN = [
  {
    label: 'Getting Started',
    items: [
      { q: 'Do I need to contact you first, or do you reach out to me?', a: 'Both. We monitor court and agency records and contact people when we identify funds connected to their name. We also welcome people who come to us directly to check whether anything is owed to them. Either way, the process starts the same.' },
      { q: 'Is there any cost to get started?', a: 'None. The initial search and claim review are free. We only get paid if we successfully recover funds on your behalf.' },
      { q: 'What information do I need to provide?', a: 'Typically your full legal name, any prior addresses connected to a property, and basic identification. We walk you through exactly what is needed once we confirm a claim exists.' },
      { q: 'What if I am not sure whether I have a claim?', a: 'That is what the free review is for. Contact us and we will search your name and any connected properties, then tell you what we find, including when the answer is that nothing is there.' },
    ],
  },
  {
    label: 'The Recovery Process',
    items: [
      { q: 'How long does the process take?', a: 'It varies widely by court, agency, and state. A straightforward, uncontested claim can move in a matter of weeks to a few months. Cases involving probate, competing liens, dissolved entities, or deceased claimants take longer, and some courts simply move slowly.' },
      { q: 'Do I need to hire my own attorney?', a: 'No. Attorneys in our network are part of the process on every claim. You do not need to retain separate counsel or appear in court.' },
      { q: 'What happens after I sign the agreement?', a: 'We take it from there. Our team files the claim, manages correspondence with the court or agency, responds to any objections, and tracks every deadline. We keep you updated at each major stage.' },
      { q: 'What if there are other parties claiming the same funds?', a: 'Competing claims are common in foreclosure and estate matters. Attorneys in our network handle objections and disputes as part of the recovery process, and we tell you early if a claim looks contested.' },
      { q: 'What if I already tried to claim my funds and was unsuccessful?', a: 'A prior failed attempt does not disqualify a claim in most cases. Contact us anyway. We may be able to identify what went wrong and pursue recovery through the correct process.' },
    ],
  },
  {
    label: 'Fees and Payment',
    items: [
      { q: 'How do you get paid?', a: 'Strictly on contingency. We take a percentage of what we recover. If we do not recover anything, you pay nothing. There are no upfront fees, retainers, or out-of-pocket costs at any point.' },
      { q: 'What percentage do you take?', a: 'Our fee depends on the claim type, the state, and the complexity of the case. We disclose the exact percentage clearly in the agreement before you sign anything.' },
      { q: 'How do I receive my funds?', a: 'It depends on the case and the jurisdiction. In some matters the court or agency pays out to each party at the same time, and in others the recovered funds come to us first and we then pay your share. We explain how payment will work in your case before you sign.' },
      { q: 'Are recovered funds taxable?', a: 'It depends on the type of funds and your own situation. Some recoveries are returns of your own money and others are not treated that way, so ask a tax professional about your specific case. We are not able to give tax advice.' },
    ],
  },
  {
    label: 'Deadlines and Eligibility',
    items: [
      { q: 'Is there a deadline to claim my funds?', a: 'Yes, in many cases. Deadlines vary by state and claim type, and some are measured in months while others run for years. Some states hold unclaimed property indefinitely, while court-held surplus can be moved or lost to the owner if nobody claims it. If you have been notified of surplus funds or think you may have a claim, contact us as soon as possible.' },
      { q: 'What if the original property owner has passed away?', a: 'Heirs and estate representatives are often entitled to surplus funds. We work with estate attorneys and help identify and coordinate the documentation needed to recover on behalf of an estate, which commonly includes a death certificate, proof of relationship, and probate paperwork.' },
      { q: 'Can I claim funds from a property I no longer own?', a: 'Yes. Surplus funds from a foreclosure or tax sale belong to the former owner at the time of the sale, regardless of what happened to the property afterward.' },
      { q: 'What states do you operate in?', a: 'Rebound Capital Group serves homeowners nationwide. Claims are filed through our network of licensed attorneys in the state where the funds are held. Contact us anytime, 24/7, to discuss your situation.' },
    ],
  },
  {
    label: 'Claim Types',
    items: [
      { q: 'What types of claims do you handle?', a: 'Foreclosure surplus funds, tax deed overages, excess proceeds, state-held unclaimed property, estate and heir recovery, and business or LLC asset recovery.' },
      { q: 'What is foreclosure surplus?', a: 'When a property sells at a foreclosure sale for more than the amount owed on the mortgage or judgment, plus costs and valid liens, the excess belongs to the former owner. Courts or court officers hold these funds until they are claimed, and in some places unclaimed amounts are eventually turned over to the state.' },
      { q: 'What is a tax deed overage?', a: 'When a property is sold at a tax deed sale for more than the taxes and costs owed, the surplus belongs to the former owner. Depending on the state, the funds are held by the county, the court, or another agency until claimed.' },
      { q: 'What is unclaimed property?', a: 'Dormant bank accounts, uncashed checks, insurance payouts, utility deposits, and other financial assets that have been turned over to state treasury agencies after a period of inactivity. States collectively hold billions of dollars in unclaimed property.' },
    ],
  },
  {
    label: 'Making an Informed Choice',
    items: [
      { q: 'Can I claim my surplus funds myself?', a: 'In many cases, yes. Owners are allowed to pursue their own funds. The catch is that the process differs by court and state, often involves a formal motion or application, and has deadlines that are easy to miss. We handle the paperwork, the attorneys, the court, and the deadlines so you do not have to. Whether to do it yourself or hire help is your decision, and you should compare terms either way.' },
      { q: 'How can I tell if an offer to recover my funds is legitimate?', a: 'Ask who they are, whether licensed attorneys are involved, and what exactly they will charge, in writing. Be cautious about anyone who asks for money upfront, pressures you to sign quickly, or wants bank details before there is an agreement. You can also confirm that funds actually exist by contacting the county clerk or court in the case, or by searching the state treasury unclaimed property site.' },
      { q: 'Why do I keep getting calls and letters about surplus funds?', a: 'Surplus and overage cases are public court and county records, so many companies monitor them and contact former owners. Not all of them work the same way or charge the same fees. Read any agreement carefully before signing, and feel free to ask us any question about how we compare.' },
    ],
  },
]

const ES = [
  {
    label: 'Para empezar',
    items: [
      { q: '¿Tengo que contactarlos yo, o ustedes me contactan?', a: 'Las dos cosas. Vigilamos registros de tribunales y agencias, y contactamos a las personas cuando encontramos fondos relacionados con su nombre. También atendemos a quienes nos contactan directamente para revisar si se les debe algo. De cualquier forma, el proceso empieza igual.' },
      { q: '¿Cuesta algo empezar?', a: 'Nada. La búsqueda inicial y la revisión del reclamo son gratis. Solo cobramos si logramos recuperar fondos en su nombre.' },
      { q: '¿Qué información necesito dar?', a: 'Por lo general su nombre legal completo, direcciones anteriores relacionadas con una propiedad e identificación básica. Una vez que confirmamos que existe un reclamo, le indicamos exactamente qué se necesita.' },
      { q: '¿Y si no estoy seguro de tener un reclamo?', a: 'Para eso es la revisión gratis. Contáctenos y buscamos su nombre y las propiedades relacionadas, y le decimos lo que encontramos, incluso cuando la respuesta es que no hay nada.' },
    ],
  },
  {
    label: 'El proceso de recuperación',
    items: [
      { q: '¿Cuánto tarda el proceso?', a: 'Varía mucho según el tribunal, la agencia y el estado. Un reclamo sencillo y sin disputa puede avanzar en semanas o pocos meses. Los casos con sucesión, gravámenes en competencia, empresas disueltas o reclamantes fallecidos tardan más, y algunos tribunales simplemente son lentos.' },
      { q: '¿Necesito contratar a mi propio abogado?', a: 'No. Los abogados de nuestra red participan en cada reclamo. No necesita contratar a otro abogado ni ir a la corte.' },
      { q: '¿Qué pasa después de firmar el acuerdo?', a: 'Nosotros nos encargamos. Nuestro equipo presenta el reclamo, maneja la correspondencia con el tribunal o la agencia, responde a cualquier objeción y vigila cada plazo. Le mantenemos informado en cada etapa importante.' },
      { q: '¿Y si otras personas reclaman los mismos fondos?', a: 'Los reclamos en competencia son comunes en ejecuciones y herencias. Los abogados de nuestra red manejan objeciones y disputas como parte del proceso, y le avisamos temprano si un reclamo parece disputado.' },
      { q: '¿Y si ya intenté reclamar mis fondos y no lo logré?', a: 'En la mayoría de los casos, un intento fallido no descalifica el reclamo. Contáctenos de todas formas. Puede que podamos ver qué salió mal y buscar la recuperación por el proceso correcto.' },
    ],
  },
  {
    label: 'Honorarios y pago',
    items: [
      { q: '¿Cómo cobran ustedes?', a: 'Únicamente por contingencia. Tomamos un porcentaje de lo que recuperamos. Si no recuperamos nada, usted no paga nada. No hay pagos por adelantado, anticipos ni gastos de su bolsillo en ningún momento.' },
      { q: '¿Qué porcentaje cobran?', a: 'Nuestros honorarios dependen del tipo de reclamo, el estado y la complejidad del caso. Indicamos el porcentaje exacto con claridad en el acuerdo antes de que firme cualquier cosa.' },
      { q: '¿Cómo recibo mis fondos?', a: 'Depende del caso y de la jurisdicción. En algunos casos el tribunal o la agencia le paga a cada parte al mismo tiempo, y en otros los fondos recuperados llegan primero a nosotros y luego le pagamos su parte. Le explicamos cómo funcionará el pago en su caso antes de que firme.' },
      { q: '¿Los fondos recuperados pagan impuestos?', a: 'Depende del tipo de fondos y de su situación. Algunas recuperaciones son devolución de su propio dinero y otras no se tratan así, así que consulte a un profesional de impuestos sobre su caso. Nosotros no podemos dar asesoría fiscal.' },
    ],
  },
  {
    label: 'Plazos y requisitos',
    items: [
      { q: '¿Hay una fecha límite para reclamar mis fondos?', a: 'Sí, en muchos casos. Los plazos varían según el estado y el tipo de reclamo: algunos se miden en meses y otros duran años. Algunos estados guardan la propiedad no reclamada indefinidamente, mientras que los sobrantes en manos de un tribunal pueden trasladarse o perderse para el dueño si nadie los reclama. Si le avisaron de fondos excedentes o cree que podría tener un reclamo, contáctenos lo antes posible.' },
      { q: '¿Y si el dueño original de la propiedad falleció?', a: 'Muchas veces los herederos y representantes de la herencia tienen derecho a los fondos excedentes. Trabajamos con abogados de herencias y ayudamos a identificar y coordinar los documentos necesarios para recuperar en nombre de la herencia, que por lo general incluyen el acta de defunción, prueba de parentesco y documentos de sucesión.' },
      { q: '¿Puedo reclamar fondos de una propiedad que ya no es mía?', a: 'Sí. Los fondos excedentes de una ejecución o venta por impuestos le pertenecen a quien era el dueño al momento de la venta, sin importar lo que pasó después con la propiedad.' },
      { q: '¿En qué estados trabajan?', a: 'Rebound Capital Group ayuda a propietarios en todo el país. Los reclamos se presentan a través de nuestra red de abogados con licencia en el estado donde están los fondos. Contáctenos a cualquier hora, 24/7, para hablar de su situación.' },
    ],
  },
  {
    label: 'Tipos de reclamo',
    items: [
      { q: '¿Qué tipos de reclamos manejan?', a: 'Fondos excedentes de ejecuciones, sobrantes de ventas por impuestos, excedentes de ventas judiciales, propiedad no reclamada que guarda el estado, recuperación para herencias y herederos, y recuperación de activos de empresas o LLC.' },
      { q: '¿Qué son los fondos excedentes de una ejecución?', a: 'Cuando una propiedad se vende en una venta por ejecución por más de lo que se debía de la hipoteca o la sentencia, más los costos y gravámenes válidos, el sobrante le pertenece al antiguo dueño. Los tribunales o sus funcionarios guardan esos fondos hasta que alguien los reclama, y en algunos lugares los montos no reclamados terminan pasando al estado.' },
      { q: '¿Qué es un sobrante de venta por impuestos?', a: 'Cuando una propiedad se vende en una venta por impuestos (tax deed) por más de los impuestos y costos que se debían, el sobrante le pertenece al antiguo dueño. Según el estado, los fondos los guarda el condado, el tribunal u otra agencia hasta que se reclaman.' },
      { q: '¿Qué es la propiedad no reclamada?', a: 'Cuentas bancarias inactivas, cheques sin cobrar, pagos de seguros, depósitos de servicios públicos y otros bienes financieros que se entregan al tesoro del estado después de un tiempo sin actividad. Entre todos, los estados guardan miles de millones de dólares en propiedad no reclamada.' },
    ],
  },
  {
    label: 'Para decidir bien',
    items: [
      { q: '¿Puedo reclamar mis fondos excedentes yo mismo?', a: 'En muchos casos, sí. Los dueños pueden reclamar sus propios fondos. El problema es que el proceso cambia según el tribunal y el estado, muchas veces requiere una moción o solicitud formal, y tiene plazos fáciles de perder. Nosotros nos encargamos del papeleo, los abogados, el tribunal y los plazos para que usted no tenga que hacerlo. Hacerlo usted mismo o contratar ayuda es su decisión, y en cualquier caso le conviene comparar condiciones.' },
      { q: '¿Cómo sé si una oferta para recuperar mis fondos es legítima?', a: 'Pregunte quiénes son, si participan abogados con licencia y cuánto le van a cobrar exactamente, por escrito. Tenga cuidado con quien le pida dinero por adelantado, le presione para firmar rápido o quiera sus datos bancarios antes de tener un acuerdo. También puede confirmar que los fondos existen contactando al secretario del condado o al tribunal del caso, o buscando en el sitio de propiedad no reclamada del tesoro de su estado.' },
      { q: '¿Por qué recibo tantas llamadas y cartas sobre fondos excedentes?', a: 'Los casos de sobrantes son registros públicos de tribunales y condados, así que muchas empresas los vigilan y contactan a los antiguos dueños. No todas trabajan igual ni cobran lo mismo. Lea con cuidado cualquier acuerdo antes de firmar, y con gusto le respondemos cualquier pregunta sobre cómo nos comparamos.' },
    ],
  },
]

const COPY = {
  en: { home: 'Home', crumb: 'FAQs', crumbs: 'Breadcrumb', eyebrow: 'Questions and answers', h1a: 'Straight answers,', h1b: 'no fine print.',
    closeH: 'Still have questions?', closeP: 'Call or text any time and a real person will answer, in English or Spanish. Checking for a claim is free.', review: 'Get a free review', call: 'Call 305-563-4920' },
  es: { home: 'Inicio', crumb: 'Preguntas frecuentes', crumbs: 'Ruta de navegación', eyebrow: 'Preguntas y respuestas', h1a: 'Respuestas claras,', h1b: 'sin letra pequeña.',
    closeH: '¿Todavía tiene preguntas?', closeP: 'Llame o escriba a cualquier hora y le contestará una persona real, en español o en inglés. Revisar si tiene un reclamo es gratis.', review: 'Revisión gratis', call: 'Llame al 305-563-4920' },
}

export default function FaqsView({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  const to = (href: string) => L(lang, href)
  const categories = lang === 'es' ? ES : EN
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: categories.flatMap((c) => c.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } }))),
  }
  return (
    <div className={h.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
      <div className={h.wrap} style={{ paddingTop: 28, paddingBottom: 40 }}>
        <div role="navigation" aria-label={t.crumbs} className={sv.crumbs}>
          <Link href={to('/')}>{t.home}</Link> <span aria-hidden="true">/</span> <span className={sv.crumbNow}>{t.crumb}</span>
        </div>
        <div className={`${sv.heroText} ${sv.heroCenter}`}>
          <div className={h.eyebrow} style={{ marginBottom: 12 }}>{t.eyebrow}</div>
          <h1 className={sv.h1} style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}>{t.h1a} <em className={h.gradText}>{t.h1b}</em></h1>
        </div>
      </div>
      <div className={h.wrap} style={{ paddingBottom: 40 }}>
        <FaqBrowser categories={categories} />
      </div>
      <section className={h.closing}>
        <div className={h.closingFade} aria-hidden="true" />
        <div className={`${h.wrap} ${h.closingInner}`}>
          <h2 className={h.closingH}>{t.closeH}</h2>
          <p>{t.closeP}</p>
          <div className={h.btnRow}>
            <Link href={to('/free-review')} className={`${h.btnPrimary} ${h.btnLg}`}>{t.review} <span aria-hidden="true">→</span></Link>
            <a href="tel:+13055634920" className={`${h.btnOutline} ${h.btnLg}`}>{t.call}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
