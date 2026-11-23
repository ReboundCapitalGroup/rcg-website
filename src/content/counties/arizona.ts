import type { Bi, County } from './types'

/**
 * Arizona county guides (checked Nov 2026):
 * - Most foreclosures are trustee sales under a deed of trust (A.R.S. 33-801 and following).
 * - The trustee deposits excess proceeds with the County Treasurer through a civil action, and claimants apply to the
 *   Superior Court for release (A.R.S. 33-812).
 */

const NOV: Bi = { en: 'November 2026', es: 'noviembre de 2026' }

const az = {
  sale: { en: 'Trustee’s sale (non-judicial)', es: 'Venta del fideicomisario (no judicial)' } as Bi,
  how: {
    en: 'Most Arizona homes are financed with a deed of trust, so foreclosure is done by a trustee’s sale instead of a lawsuit. If the winning bid is higher than the debt and costs, the trustee pays the excess to the County Treasurer and files a civil action in Superior Court so the court can decide who gets it.',
    es: 'La mayoría de las casas en Arizona se financian con una escritura de fideicomiso (deed of trust), así que la ejecución se hace con una venta del fideicomisario en lugar de una demanda. Si la oferta ganadora supera la deuda y los costos, el fideicomisario deposita el excedente con el Tesorero del Condado y presenta una acción civil en el Tribunal Superior para que el juez decida a quién le corresponde.',
  } as Bi,
  claim: {
    en: 'To get the money, the former owner, an heir or a junior lienholder files an application for release of excess proceeds in that Superior Court case. Liens are paid in order of priority, and whatever is left goes to the owner. A judge has to approve the release before the Treasurer pays.',
    es: 'Para obtener el dinero, el antiguo dueño, un heredero o un acreedor posterior presenta una solicitud de liberación de excedentes (application for release of excess proceeds) en ese caso del Tribunal Superior. Los gravámenes se pagan por orden de prioridad, y lo que sobra es para el dueño. Un juez tiene que aprobar la liberación antes de que pague el Tesorero.',
  } as Bi,
  src: [{ label: 'Arizona Revised Statutes 33-812, disbursal of trustee sale proceeds', url: 'https://www.azleg.gov/ars/33/00812.htm' }],
}

const faqs = (county: string, countyEs: string) => [
  {
    q: { en: `How do I find out if excess is being held in ${county}?`, es: `¿Cómo sé si hay excedente guardado en ${countyEs}?` },
    a: {
      en: 'The trustee’s civil action in Superior Court lists the amount deposited with the Treasurer. Searching it yourself can be hard because the case is filed under the trustee’s name. Send us the address and we will check for free.',
      es: 'La acción civil del fideicomisario en el Tribunal Superior indica el monto depositado con el Tesorero. Buscarlo usted mismo puede ser difícil porque el caso está a nombre del fideicomisario. Envíenos la dirección y lo revisamos gratis.',
    },
  },
  {
    q: { en: 'Can I file the application myself?', es: '¿Puedo presentar la solicitud yo mismo?' },
    a: {
      en: 'Yes. The court has forms for it. Many people get help because liens and service on other claimants are easy to get wrong. If you work with us, the claim is filed through our network of licensed attorneys and you pay nothing unless money is recovered.',
      es: 'Sí. El tribunal tiene formularios para eso. Muchas personas buscan ayuda porque es fácil equivocarse con los gravámenes y con la notificación a otros reclamantes. Si trabaja con nosotros, el reclamo se presenta a través de nuestra red de abogados con licencia y no paga nada a menos que se recupere dinero.',
    },
  },
  {
    q: { en: 'The owner passed away. Can heirs claim?', es: 'El dueño falleció. ¿Los herederos pueden reclamar?' },
    a: {
      en: 'Yes, with proof of who can act for the estate. That may mean a probate case or a small estate affidavit first, depending on the amount. We coordinate it with the claim.',
      es: 'Sí, con prueba de quién puede actuar por la herencia. Eso puede requerir primero una sucesión o una declaración jurada de herencia pequeña, según el monto. Lo coordinamos junto con el reclamo.',
    },
  },
  {
    q: { en: 'Is there a time limit?', es: '¿Hay un límite de tiempo?' },
    a: {
      en: 'Do not wait. Money that sits unclaimed can eventually be treated as unclaimed property, and the longer it sits the harder the paperwork. Act fast.',
      es: 'No espere. El dinero que queda sin reclamar puede terminar tratado como propiedad no reclamada, y mientras más tiempo pasa, más difícil es el papeleo. Actúe rápido.',
    },
  },
]

export const ARIZONA: County[] = [
  {
    slug: 'maricopa',
    state: 'arizona',
    name: { en: 'Maricopa County', es: 'el condado de Maricopa' },
    short: 'Maricopa',
    cities: ['Phoenix', 'Mesa', 'Chandler', 'Glendale', 'Scottsdale', 'Gilbert'],
    blurb: { en: 'Phoenix metro, where excess is deposited with the County Treasurer.', es: 'Área de Phoenix, donde el excedente se deposita con el Tesorero del Condado.' },
    checked: NOV,
    glance: {
      sale: az.sale,
      holder: { en: 'Maricopa County Treasurer, released by Superior Court order', es: 'Tesorero del condado de Maricopa, liberado por orden del Tribunal Superior' },
      auction: { en: 'Trustee’s sale at a location named in the notice', es: 'Venta del fideicomisario en el lugar que indica el aviso' },
    },
    intro: {
      en: 'Maricopa County covers Phoenix and most of the metro area. When a trustee’s sale there brings in more than the loan, the excess is deposited with the Maricopa County Treasurer and stays there until the Superior Court orders it released.',
      es: 'El condado de Maricopa abarca Phoenix y la mayor parte del área metropolitana. Cuando una venta del fideicomisario allí deja más que el préstamo, el excedente se deposita con el Tesorero del condado de Maricopa y se queda allí hasta que el Tribunal Superior ordena liberarlo.',
    },
    sections: [
      { title: { en: 'Who holds the money in Maricopa.', es: 'Quién guarda el dinero en Maricopa.' }, body: [az.how] },
      {
        title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' },
        body: [
          az.claim,
          {
            en: 'The Superior Court of Arizona in Maricopa County publishes self-service forms for excess proceeds claims. The application is filed in the trustee’s civil case, and other people with a possible claim must get notice.',
            es: 'El Tribunal Superior de Arizona en el condado de Maricopa publica formularios de autoservicio para reclamar excedentes. La solicitud se presenta en el caso civil del fideicomisario, y las demás personas con un posible reclamo deben recibir aviso.',
          },
        ],
      },
    ],
    faqs: faqs('Maricopa', 'Maricopa'),
    sources: [
      { label: 'Superior Court of Arizona in Maricopa County, excess proceeds forms', url: 'https://superiorcourt.maricopa.gov/llrc/' },
      { label: 'Maricopa County Treasurer', url: 'https://treasurer.maricopa.gov/' },
      ...az.src,
    ],
    meta: {
      title: { en: 'Maricopa County (Phoenix) Trustee Sale Excess Proceeds | RCG', es: 'Excedentes de ventas del fideicomisario en Maricopa (Phoenix) | RCG' },
      description: {
        en: 'Phoenix-area home sold at a trustee’s sale? Excess proceeds are deposited with the Maricopa County Treasurer and released by court order. How to claim, heirs, free help.',
        es: '¿Su casa en el área de Phoenix se vendió en una venta del fideicomisario? Los excedentes se depositan con el Tesorero de Maricopa y se liberan por orden judicial. Cómo reclamar, herederos y ayuda gratis.',
      },
    },
  },
  {
    slug: 'pima',
    state: 'arizona',
    name: { en: 'Pima County', es: 'el condado de Pima' },
    short: 'Pima',
    cities: ['Tucson', 'Marana', 'Oro Valley', 'Sahuarita', 'South Tucson'],
    blurb: { en: 'Tucson and southern Arizona.', es: 'Tucson y el sur de Arizona.' },
    checked: NOV,
    glance: {
      sale: az.sale,
      holder: { en: 'Pima County Treasurer, released by Superior Court order', es: 'Tesorero del condado de Pima, liberado por orden del Tribunal Superior' },
      auction: { en: 'Trustee’s sale at a location named in the notice', es: 'Venta del fideicomisario en el lugar que indica el aviso' },
    },
    intro: {
      en: 'Pima County covers Tucson and much of southern Arizona. When a trustee’s sale brings in more than the debt, the excess is deposited with the Pima County Treasurer until the Superior Court orders it paid out.',
      es: 'El condado de Pima abarca Tucson y gran parte del sur de Arizona. Cuando una venta del fideicomisario deja más que la deuda, el excedente se deposita con el Tesorero del condado de Pima hasta que el Tribunal Superior ordena pagarlo.',
    },
    sections: [
      { title: { en: 'Who holds the money in Pima.', es: 'Quién guarda el dinero en Pima.' }, body: [az.how] },
      {
        title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' },
        body: [
          az.claim,
          {
            en: 'In Pima County, the application is filed with the Superior Court at 110 W Congress Street in Tucson, in the civil case the trustee opened when it deposited the money.',
            es: 'En el condado de Pima, la solicitud se presenta en el Tribunal Superior, 110 W Congress Street, Tucson, en el caso civil que abrió el fideicomisario al depositar el dinero.',
          },
        ],
      },
    ],
    faqs: faqs('Pima', 'Pima'),
    sources: [
      { label: 'Arizona Superior Court in Pima County', url: 'https://www.sc.pima.gov/' },
      { label: 'Pima County Treasurer', url: 'https://www.to.pima.gov/' },
      ...az.src,
    ],
    meta: {
      title: { en: 'Pima County (Tucson) Trustee Sale Excess Proceeds | RCG', es: 'Excedentes de ventas del fideicomisario en Pima (Tucson) | RCG' },
      description: {
        en: 'Tucson home sold at a trustee’s sale? Excess proceeds are deposited with the Pima County Treasurer and released by Superior Court order. How to claim, heirs, free help.',
        es: '¿Su casa en Tucson se vendió en una venta del fideicomisario? Los excedentes se depositan con el Tesorero de Pima y se liberan por orden del Tribunal Superior. Cómo reclamar, herederos y ayuda gratis.',
      },
    },
  },
]
