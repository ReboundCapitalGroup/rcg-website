import type { Bi, County } from './types'

/**
 * Maryland county guides (checked Nov 2026):
 * - Foreclosure is done through the circuit court even under a power of sale (Md. Rules 14-200 series). The sale is
 *   reported to the court, ratified, and referred to a court auditor, whose report sets the distribution and any surplus.
 * - Surplus is claimed by exception or motion in the circuit court case. Maryland also regulates "foreclosure surplus"
 *   acquisitions and assistance, so the page says RCG follows Maryland's rules.
 */

const NOV: Bi = { en: 'November 2026', es: 'noviembre de 2026' }

const md = {
  sale: { en: 'Foreclosure through the circuit court', es: 'Ejecución a través del tribunal de circuito' } as Bi,
  holder: (c: string, ces: string): Bi => ({ en: `${c} Circuit Court, after the auditor’s report`, es: `Tribunal de Circuito de ${ces}, después del informe del auditor` }),
  how: {
    en: 'Every Maryland foreclosure goes through the circuit court, even when the loan has a power of sale. After the auction, the trustee reports the sale, the court ratifies it, and the case goes to a court auditor. The auditor’s report lists what was paid to the lender, costs, taxes and other liens, and shows any surplus left for the former owner.',
    es: 'Toda ejecución en Maryland pasa por el tribunal de circuito, aunque el préstamo tenga poder de venta. Después de la subasta, el fideicomisario reporta la venta, el tribunal la ratifica y el caso pasa a un auditor del tribunal. El informe del auditor indica lo que se pagó al prestamista, los costos, los impuestos y otros gravámenes, y muestra cualquier sobrante para el antiguo dueño.',
  } as Bi,
  claim: {
    en: 'The former owner, heirs or junior lienholders claim the surplus in the same circuit court case, usually by filing a claim or exception before the auditor’s report is approved, or a motion for the surplus after. Once the court ratifies the audit, the trustee pays out according to it.',
    es: 'El antiguo dueño, los herederos o los acreedores posteriores reclaman el sobrante en el mismo caso del tribunal de circuito, por lo general presentando un reclamo o una objeción antes de que se apruebe el informe del auditor, o una moción para el sobrante después. Cuando el tribunal ratifica la auditoría, el fideicomisario paga según ella.',
  } as Bi,
  note: {
    en: 'Maryland regulates businesses that help owners recover foreclosure surplus, and it limits what they can charge. Rebound Capital Group follows Maryland’s rules, and you can always claim the surplus yourself in the court case.',
    es: 'Maryland regula a las empresas que ayudan a los dueños a recuperar sobrantes de ejecución y limita lo que pueden cobrar. Rebound Capital Group sigue las reglas de Maryland, y usted siempre puede reclamar el sobrante por su cuenta en el caso judicial.',
  } as Bi,
  src: [
    { label: 'Maryland Courts, foreclosure (Maryland Rules 14-200 series)', url: 'https://www.mdcourts.gov/legalhelp/foreclosure' },
    { label: 'Maryland Commissioner of Financial Regulation, foreclosure resources', url: 'https://labor.maryland.gov/finance/consumers/frforeclosure.shtml' },
  ],
}

const faqs = (c: string, ces: string) => [
  {
    q: { en: `How do I know if my ${c} sale left surplus?`, es: `¿Cómo sé si mi venta en ${ces} dejó sobrante?` },
    a: {
      en: 'The auditor’s report in the court case shows it. Maryland Judiciary Case Search lists the filings, and the report itself is in the court file. Send us the address or case number and we will check for free.',
      es: 'Lo muestra el informe del auditor en el caso. Maryland Judiciary Case Search muestra los documentos presentados, y el informe está en el expediente del tribunal. Envíenos la dirección o el número de caso y lo revisamos gratis.',
    },
  },
  {
    q: { en: 'Can I claim it myself?', es: '¿Puedo reclamarlo yo mismo?' },
    a: {
      en: 'Yes. Owners can file in the case on their own. Many people get help because the timing around the auditor’s report matters. If you work with us, the claim is filed through our network of licensed attorneys and you pay nothing unless money is recovered.',
      es: 'Sí. Los dueños pueden presentar en el caso por su cuenta. Muchas personas buscan ayuda porque los tiempos alrededor del informe del auditor importan. Si trabaja con nosotros, el reclamo se presenta a través de nuestra red de abogados con licencia y no paga nada a menos que se recupere dinero.',
    },
  },
  {
    q: { en: 'The owner passed away. Can the family claim?', es: 'El dueño falleció. ¿La familia puede reclamar?' },
    a: {
      en: 'Yes, through the estate. The Register of Wills in the county handles estates, and a personal representative may need to be appointed first. We coordinate that with the claim.',
      es: 'Sí, a través de la herencia. El Register of Wills (registro de testamentos) del condado maneja las herencias, y puede ser necesario nombrar primero a un representante personal. Lo coordinamos junto con el reclamo.',
    },
  },
  {
    q: { en: 'Is there a deadline?', es: '¿Hay una fecha límite?' },
    a: {
      en: 'Yes, in practice. Claims are easiest before or soon after the auditor’s report is ratified, and money left unclaimed can move to the state as unclaimed property. Act fast.',
      es: 'Sí, en la práctica. Los reclamos son más fáciles antes o poco después de que se ratifica el informe del auditor, y el dinero sin reclamar puede pasar al estado como propiedad no reclamada. Actúe rápido.',
    },
  },
]

export const MARYLAND: County[] = [
  {
    slug: 'prince-georges',
    state: 'maryland',
    name: { en: 'Prince George’s County', es: 'el condado de Prince George’s' },
    short: 'Prince George’s',
    cities: ['Bowie', 'Upper Marlboro', 'Laurel', 'College Park', 'Hyattsville', 'Largo'],
    blurb: { en: 'Maryland’s busiest foreclosure county, next to Washington, D.C.', es: 'El condado con más ejecuciones de Maryland, junto a Washington, D.C.' },
    checked: NOV,
    glance: { sale: md.sale, holder: md.holder('Prince George’s County', 'Prince George’s'), auction: { en: 'Auction by the trustee, usually at the courthouse', es: 'Subasta del fideicomisario, por lo general en el tribunal' } },
    intro: {
      en: 'Prince George’s County has long had one of the highest foreclosure rates in Maryland. When a sale there brings in more than the debt, a court auditor works out the surplus and the circuit court decides who gets it.',
      es: 'El condado de Prince George’s ha tenido por mucho tiempo una de las tasas de ejecución más altas de Maryland. Cuando una venta allí deja más que la deuda, un auditor del tribunal calcula el sobrante y el tribunal de circuito decide a quién le corresponde.',
    },
    sections: [
      { title: { en: 'Who holds the money in Prince George’s.', es: 'Quién guarda el dinero en Prince George’s.' }, body: [md.how, { en: 'Cases are heard in the Circuit Court for Prince George’s County in Upper Marlboro.', es: 'Los casos se ven en el Tribunal de Circuito del condado de Prince George’s, en Upper Marlboro.' }] },
      { title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' }, body: [md.claim] },
    ],
    note: md.note,
    faqs: faqs('Prince George’s', 'Prince George’s'),
    sources: [{ label: 'Circuit Court for Prince George’s County', url: 'https://www.princegeorgescourts.org/' }, ...md.src],
    meta: {
      title: { en: 'Prince George’s County Foreclosure Surplus Funds | RCG', es: 'Fondos excedentes de ejecución en Prince George’s | RCG' },
      description: {
        en: 'Prince George’s County, MD home sold at foreclosure? The court auditor’s report sets the surplus and the circuit court pays it out. How to claim, heirs, free help.',
        es: '¿Su casa en Prince George’s, Maryland se vendió en una ejecución? El informe del auditor fija el sobrante y el tribunal lo paga. Cómo reclamar, herederos y ayuda gratis.',
      },
    },
  },
  {
    slug: 'montgomery',
    state: 'maryland',
    name: { en: 'Montgomery County', es: 'el condado de Montgomery' },
    short: 'Montgomery',
    cities: ['Rockville', 'Silver Spring', 'Gaithersburg', 'Bethesda', 'Germantown', 'Wheaton'],
    blurb: { en: 'High home values in the D.C. suburbs, so surplus can be large.', es: 'Valores altos en los suburbios de D.C., así que el sobrante puede ser grande.' },
    checked: NOV,
    glance: { sale: md.sale, holder: md.holder('Montgomery County', 'Montgomery'), auction: { en: 'Auction by the trustee, usually at the courthouse', es: 'Subasta del fideicomisario, por lo general en el tribunal' } },
    intro: {
      en: 'Montgomery County has some of the highest home values in Maryland. When a foreclosure sale there goes over the debt, the surplus can be large, and the circuit court decides who receives it after a court auditor’s report.',
      es: 'El condado de Montgomery tiene algunos de los valores de vivienda más altos de Maryland. Cuando una venta por ejecución allí supera la deuda, el sobrante puede ser grande, y el tribunal de circuito decide quién lo recibe después del informe de un auditor del tribunal.',
    },
    sections: [
      { title: { en: 'Who holds the money in Montgomery County.', es: 'Quién guarda el dinero en el condado de Montgomery.' }, body: [md.how, { en: 'Cases are heard in the Circuit Court for Montgomery County at 50 Maryland Avenue in Rockville.', es: 'Los casos se ven en el Tribunal de Circuito del condado de Montgomery, 50 Maryland Avenue, Rockville.' }] },
      { title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' }, body: [md.claim] },
    ],
    note: md.note,
    faqs: faqs('Montgomery County', 'el condado de Montgomery'),
    sources: [{ label: 'Circuit Court for Montgomery County', url: 'https://www.montgomerycountymd.gov/cct/' }, ...md.src],
    meta: {
      title: { en: 'Montgomery County, MD Foreclosure Surplus Funds | RCG', es: 'Fondos excedentes de ejecución en Montgomery, Maryland | RCG' },
      description: {
        en: 'Rockville, Silver Spring or Gaithersburg home sold at foreclosure? The auditor’s report sets the surplus and the circuit court pays it out. How to claim, heirs, free help.',
        es: '¿Su casa en Rockville, Silver Spring o Gaithersburg se vendió en una ejecución? El informe del auditor fija el sobrante y el tribunal lo paga. Cómo reclamar, herederos y ayuda gratis.',
      },
    },
  },
]
