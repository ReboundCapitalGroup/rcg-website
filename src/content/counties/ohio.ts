import type { Bi, County } from './types'

/**
 * Ohio county guides. Statewide rules (checked Nov 2026):
 * - Mortgage and tax foreclosures are judicial, in the Court of Common Pleas. The sheriff sells the property, now online at
 *   {county}.sheriffsaleauction.ohio.gov.
 * - Excess proceeds are paid into the Clerk of Courts and held for the person entitled to them (ORC 2329.44). After notice,
 *   unclaimed money is handled under ORC 2335.34 and 2335.35 and can end up with the county or the state.
 */

const NOV: Bi = { en: 'November 2026', es: 'noviembre de 2026' }

const oh = {
  sale: { en: 'Judicial foreclosure, sheriff’s sale online', es: 'Ejecución judicial, venta del sheriff en línea' } as Bi,
  claim: (court: string, courtEs: string): Bi => ({
    en: `To get the excess, someone with a right to it asks the ${court} to release it, usually with a motion in the foreclosure case. The judge looks at who owned the property, which liens are still unpaid and who else has a claim, then orders the Clerk to pay. Lienholders like a second mortgage, the county treasurer or a judgment creditor can claim before the former owner.`,
    es: `Para obtener el excedente, alguien con derecho a él le pide al ${courtEs} que lo libere, por lo general con una moción en el caso de ejecución. El juez revisa quién era el dueño, qué gravámenes siguen sin pagar y quién más reclama, y luego ordena al Secretario que pague. Acreedores como una segunda hipoteca, el tesorero del condado o un acreedor judicial pueden cobrar antes que el antiguo dueño.`,
  }),
  unclaimed: {
    en: 'Excess that nobody asks for does not stay in the case forever. After notice, Ohio law lets unclaimed court money move out of the Clerk’s account, and getting it back after that takes more paperwork. The sooner a claim is filed, the simpler it is.',
    es: 'El excedente que nadie pide no se queda en el caso para siempre. Después del aviso, la ley de Ohio permite que el dinero judicial no reclamado salga de la cuenta del Secretario, y recuperarlo después requiere más papeleo. Mientras antes se presente el reclamo, más sencillo es.',
  } as Bi,
  src: [
    { label: 'Ohio Revised Code 2329.44, excess proceeds from judicial sales', url: 'https://codes.ohio.gov/ohio-revised-code/section-2329.44' },
    { label: 'Ohio Revised Code 2335.34, unclaimed court money', url: 'https://codes.ohio.gov/ohio-revised-code/section-2335.34' },
  ],
}

const faqSelf = {
  q: { en: 'Can I file for the excess myself?', es: '¿Puedo pedir el excedente yo mismo?' },
  a: {
    en: 'Yes, an owner can ask the court directly. Many people get help because the motion, the lien review and the court hearing are easy to get wrong. If you work with us, the claim is filed through our network of licensed attorneys and you pay nothing unless money is recovered.',
    es: 'Sí, un dueño puede pedirlo directamente al tribunal. Muchas personas buscan ayuda porque es fácil equivocarse con la moción, la revisión de gravámenes y la audiencia. Si trabaja con nosotros, el reclamo se presenta a través de nuestra red de abogados con licencia y no paga nada a menos que se recupere dinero.',
  },
}

const faqHeirs = {
  q: { en: 'The owner passed away. Can the family claim?', es: 'El dueño falleció. ¿La familia puede reclamar?' },
  a: {
    en: 'Usually, yes. The estate or the heirs can claim, but the court needs proof of who can act for the estate, which often means opening a probate case first. We handle that together with the claim.',
    es: 'Por lo general, sí. La herencia o los herederos pueden reclamar, pero el tribunal necesita prueba de quién puede actuar por la herencia, lo que muchas veces significa abrir primero una sucesión. Manejamos eso junto con el reclamo.',
  },
}

const faqDeadline = {
  q: { en: 'How long do I have?', es: '¿Cuánto tiempo tengo?' },
  a: {
    en: 'Not forever. Once notice runs, unclaimed excess can be moved out of the case and the claim gets harder. Act fast if you think money may be owed.',
    es: 'No para siempre. Cuando pasa el plazo del aviso, el excedente no reclamado puede salir del caso y el reclamo se complica. Actúe rápido si cree que le pueden deber dinero.',
  },
}

export const OHIO: County[] = [
  {
    slug: 'cuyahoga',
    state: 'ohio',
    name: { en: 'Cuyahoga County', es: 'el condado de Cuyahoga' },
    short: 'Cuyahoga',
    cities: ['Cleveland', 'Parma', 'Lakewood', 'Euclid', 'Cleveland Heights', 'Strongsville'],
    blurb: { en: 'Cleveland and its suburbs, Ohio’s largest foreclosure docket.', es: 'Cleveland y sus suburbios, el mayor volumen de ejecuciones de Ohio.' },
    checked: NOV,
    glance: {
      sale: oh.sale,
      holder: { en: 'Cuyahoga County Clerk of Courts', es: 'Secretario de Tribunales del condado de Cuyahoga' },
      auction: { en: 'Online sheriff’s sale only', es: 'Venta del sheriff solo en línea' },
    },
    intro: {
      en: 'Cuyahoga County, home to Cleveland, has one of the busiest foreclosure dockets in Ohio. When a sheriff’s sale brings in more than the judgment, the excess is paid into the Clerk of Courts and waits there until someone with a right to it asks the court to release it.',
      es: 'El condado de Cuyahoga, donde está Cleveland, tiene uno de los volúmenes de ejecuciones más altos de Ohio. Cuando una venta del sheriff deja más que la sentencia, el excedente se deposita con el Secretario de Tribunales y espera allí hasta que alguien con derecho pida al tribunal que lo libere.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Cuyahoga.', es: 'Quién guarda el dinero en Cuyahoga.' },
        body: [
          {
            en: 'Foreclosures are filed in the Cuyahoga County Court of Common Pleas. After the sheriff’s sale is confirmed, the sale money is distributed under the court’s order and any excess is held by the Clerk of Courts at the Justice Center, 1200 Ontario Street in Cleveland. Many cases go through a court magistrate, who reviews the distribution.',
            es: 'Las ejecuciones se presentan en el Court of Common Pleas del condado de Cuyahoga. Después de que se confirma la venta del sheriff, el dinero se reparte según la orden del tribunal y el excedente lo guarda el Secretario de Tribunales en el Justice Center, 1200 Ontario Street, Cleveland. Muchos casos pasan por un magistrado del tribunal, que revisa el reparto.',
          },
        ],
      },
      {
        title: { en: 'How sales work in Cuyahoga.', es: 'Cómo son las ventas en Cuyahoga.' },
        body: [
          {
            en: 'Cuyahoga sheriff’s sales are held online only, on the state’s sheriff sale auction site for the county. If a property does not sell at the first sale, it can be offered again at a lower minimum. Tax foreclosures can also go through the county Board of Revision or the land bank, and those cases usually do not leave surplus.',
            es: 'Las ventas del sheriff en Cuyahoga se hacen solo en línea, en el sitio estatal de subastas del sheriff para el condado. Si una propiedad no se vende en la primera venta, se puede volver a ofrecer con un mínimo más bajo. Las ejecuciones por impuestos también pueden pasar por la Junta de Revisión del condado o el banco de tierras, y esos casos casi nunca dejan sobrante.',
          },
        ],
      },
      {
        title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' },
        body: [
          oh.claim('Court of Common Pleas', 'Court of Common Pleas'),
          {
            en: 'In Cuyahoga, this is usually done with a Motion to Distribute or a similar motion asking the court to release the excess held by the Clerk.',
            es: 'En Cuyahoga, esto por lo general se hace con una Motion to Distribute (moción para repartir) u otra moción similar que pide al tribunal liberar el excedente que guarda el Secretario.',
          },
          oh.unclaimed,
        ],
      },
    ],
    faqs: [
      {
        q: { en: 'How do I know if my Cuyahoga sale left excess?', es: '¿Cómo sé si mi venta en Cuyahoga dejó excedente?' },
        a: {
          en: 'The docket shows the sale price, the confirmation entry and the distribution. If the sale brought more than the judgment, costs and taxes, the difference is the excess. Send us the address or case number and we will check for free.',
          es: 'El expediente muestra el precio de venta, la orden de confirmación y el reparto. Si la venta dejó más que la sentencia, los costos y los impuestos, la diferencia es el excedente. Envíenos la dirección o el número de caso y lo revisamos gratis.',
        },
      },
      faqSelf,
      faqHeirs,
      faqDeadline,
    ],
    sources: [
      { label: 'Cuyahoga County Clerk of Courts', url: 'https://cp.cuyahogacounty.gov/' },
      { label: 'Cuyahoga County sheriff sales (online)', url: 'https://cuyahoga.sheriffsaleauction.ohio.gov/' },
      ...oh.src,
    ],
    meta: {
      title: { en: 'Cuyahoga County (Cleveland) Sheriff Sale Excess Funds | RCG', es: 'Fondos excedentes de ventas del sheriff en Cuyahoga (Cleveland) | RCG' },
      description: {
        en: 'Cleveland or Cuyahoga County home sold at sheriff’s sale? The excess is held by the Clerk of Courts. How the motion to distribute works, heirs, and free help. $0 upfront.',
        es: '¿Su casa en Cleveland o el condado de Cuyahoga se vendió en una venta del sheriff? El excedente lo guarda el Secretario de Tribunales. Cómo se pide, herederos y ayuda gratis. $0 por adelantado.',
      },
    },
  },
  {
    slug: 'franklin',
    state: 'ohio',
    name: { en: 'Franklin County', es: 'el condado de Franklin' },
    short: 'Franklin',
    cities: ['Columbus', 'Dublin', 'Westerville', 'Grove City', 'Reynoldsburg', 'Hilliard'],
    blurb: { en: 'Columbus and central Ohio, with sheriff’s sales online on Fridays.', es: 'Columbus y el centro de Ohio, con ventas del sheriff en línea los viernes.' },
    checked: NOV,
    glance: {
      sale: oh.sale,
      holder: { en: 'Franklin County Clerk of Courts', es: 'Secretario de Tribunales del condado de Franklin' },
      auction: { en: 'Online, generally Fridays', es: 'En línea, por lo general los viernes' },
    },
    intro: {
      en: 'Franklin County covers Columbus and much of central Ohio. When a sheriff’s sale there brings in more than what was owed, the excess is held by the Clerk of Courts until the right person asks the court for it.',
      es: 'El condado de Franklin abarca Columbus y gran parte del centro de Ohio. Cuando una venta del sheriff allí deja más de lo que se debía, el excedente lo guarda el Secretario de Tribunales hasta que la persona correcta lo pida al tribunal.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Franklin County.', es: 'Quién guarda el dinero en el condado de Franklin.' },
        body: [
          {
            en: 'Foreclosures are filed in the Franklin County Court of Common Pleas in downtown Columbus. After the court confirms the sale, it orders the money paid out and the excess is held by the Clerk of Courts at 373 S High Street.',
            es: 'Las ejecuciones se presentan en el Court of Common Pleas del condado de Franklin, en el centro de Columbus. Después de que el tribunal confirma la venta, ordena el pago y el excedente lo guarda el Secretario de Tribunales en 373 S High Street.',
          },
        ],
      },
      {
        title: { en: 'How sales work in Franklin County.', es: 'Cómo son las ventas en el condado de Franklin.' },
        body: [
          {
            en: 'The Franklin County Sheriff holds foreclosure sales online, generally on Fridays starting in the morning, on the state’s sheriff sale auction site. The appraised value and minimum bid are posted before the sale. Columbus home values have grown, so older loans and tax cases can leave real excess.',
            es: 'El Sheriff del condado de Franklin hace las ventas por ejecución en línea, por lo general los viernes desde la mañana, en el sitio estatal de subastas del sheriff. El valor de tasación y la oferta mínima se publican antes de la venta. Los valores en Columbus han subido, así que préstamos viejos y casos de impuestos pueden dejar un excedente real.',
          },
        ],
      },
      { title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' }, body: [oh.claim('Court of Common Pleas', 'Court of Common Pleas'), oh.unclaimed] },
    ],
    faqs: [
      {
        q: { en: 'The sale is scheduled but has not happened. Can you still help?', es: 'La venta está programada pero no ha ocurrido. ¿Pueden ayudar?' },
        a: {
          en: 'Yes. Before the sale we can explain your options, and if the home has equity we make sure you know what to watch for after the sale so any excess is claimed quickly.',
          es: 'Sí. Antes de la venta le explicamos sus opciones, y si la casa tiene capital le decimos qué vigilar después de la venta para que cualquier excedente se reclame rápido.',
        },
      },
      faqSelf,
      faqHeirs,
      faqDeadline,
    ],
    sources: [
      { label: 'Franklin County Clerk of Courts', url: 'https://clerk.franklincountyohio.gov/' },
      { label: 'Franklin County sheriff sales (online)', url: 'https://franklin.sheriffsaleauction.ohio.gov/' },
      ...oh.src,
    ],
    meta: {
      title: { en: 'Franklin County (Columbus) Sheriff Sale Excess Funds | RCG', es: 'Fondos excedentes de ventas del sheriff en Franklin (Columbus) | RCG' },
      description: {
        en: 'Columbus or Franklin County home sold at sheriff’s sale? The excess is held by the Clerk of Courts. How claims work, heirs, and free help. $0 upfront.',
        es: '¿Su casa en Columbus o el condado de Franklin se vendió en una venta del sheriff? El excedente lo guarda el Secretario de Tribunales. Cómo reclamar, herederos y ayuda gratis. $0 por adelantado.',
      },
    },
  },
  {
    slug: 'hamilton',
    state: 'ohio',
    name: { en: 'Hamilton County', es: 'el condado de Hamilton' },
    short: 'Hamilton',
    cities: ['Cincinnati', 'Norwood', 'Cheviot', 'Forest Park', 'Sharonville'],
    blurb: { en: 'Cincinnati, where sheriff’s sales moved fully online in 2024.', es: 'Cincinnati, donde las ventas del sheriff pasaron a ser en línea en 2024.' },
    checked: NOV,
    glance: {
      sale: oh.sale,
      holder: { en: 'Hamilton County Clerk of Courts', es: 'Secretario de Tribunales del condado de Hamilton' },
      auction: { en: 'Online since January 2024', es: 'En línea desde enero de 2024' },
    },
    intro: {
      en: 'Hamilton County, home to Cincinnati, moved its sheriff’s sales online at the start of 2024. When a sale brings in more than the debt, the excess goes to the Clerk of Courts and waits for a claim.',
      es: 'El condado de Hamilton, donde está Cincinnati, pasó sus ventas del sheriff a internet a principios de 2024. Cuando una venta deja más que la deuda, el excedente va al Secretario de Tribunales y espera un reclamo.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Hamilton County.', es: 'Quién guarda el dinero en el condado de Hamilton.' },
        body: [
          {
            en: 'Foreclosures are filed in the Hamilton County Court of Common Pleas. Once the sale is confirmed, the court orders the distribution and the excess stays with the Clerk of Courts at the Hamilton County Courthouse, 1000 Main Street in Cincinnati.',
            es: 'Las ejecuciones se presentan en el Court of Common Pleas del condado de Hamilton. Cuando se confirma la venta, el tribunal ordena el reparto y el excedente queda con el Secretario de Tribunales en el Hamilton County Courthouse, 1000 Main Street, Cincinnati.',
          },
        ],
      },
      {
        title: { en: 'How sales work in Hamilton County.', es: 'Cómo son las ventas en el condado de Hamilton.' },
        body: [
          {
            en: 'Since January 1, 2024, Hamilton County sheriff’s sales are held online on the state’s sheriff sale auction site. Online bidding brings more buyers than the old in-person sales did, which can push prices above the judgment and leave excess for the former owner.',
            es: 'Desde el 1 de enero de 2024, las ventas del sheriff del condado de Hamilton se hacen en línea en el sitio estatal de subastas del sheriff. Las pujas en línea atraen más compradores que las antiguas ventas en persona, lo que puede subir los precios por encima de la sentencia y dejar excedente para el antiguo dueño.',
          },
        ],
      },
      { title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' }, body: [oh.claim('Court of Common Pleas', 'Court of Common Pleas'), oh.unclaimed] },
    ],
    faqs: [
      {
        q: { en: 'Does the county keep the excess if I do nothing?', es: '¿El condado se queda con el excedente si no hago nada?' },
        a: {
          en: 'It can end up out of your reach. After notice, unclaimed court money can be moved to the county or the state, where it takes more paperwork to get back. Claiming early is simpler.',
          es: 'Puede quedar fuera de su alcance. Después del aviso, el dinero judicial no reclamado puede pasar al condado o al estado, donde recuperarlo requiere más papeleo. Reclamar temprano es más sencillo.',
        },
      },
      faqSelf,
      faqHeirs,
      faqDeadline,
    ],
    sources: [
      { label: 'Hamilton County Clerk of Courts', url: 'https://www.courtclerk.org/' },
      { label: 'Hamilton County sheriff sales (online)', url: 'https://hamilton.sheriffsaleauction.ohio.gov/' },
      ...oh.src,
    ],
    meta: {
      title: { en: 'Hamilton County (Cincinnati) Sheriff Sale Excess Funds | RCG', es: 'Fondos excedentes de ventas del sheriff en Hamilton (Cincinnati) | RCG' },
      description: {
        en: 'Cincinnati or Hamilton County home sold at sheriff’s sale? The excess is held by the Clerk of Courts. How claims work, heirs, and free help. $0 upfront.',
        es: '¿Su casa en Cincinnati o el condado de Hamilton se vendió en una venta del sheriff? El excedente lo guarda el Secretario de Tribunales. Cómo reclamar, herederos y ayuda gratis. $0 por adelantado.',
      },
    },
  },
]
