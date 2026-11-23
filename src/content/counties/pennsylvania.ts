import type { Bi, County } from './types'

/**
 * Pennsylvania county guides (checked Nov 2026):
 * - Mortgage foreclosure is judicial; the property is sold at sheriff's sale. The sheriff files a schedule of distribution,
 *   and any excess is paid to the people entitled to it, ending with the owner (Pa.R.C.P. 3136).
 * - Philadelphia and Montgomery County sheriff sales are held online on Bid4Assets.
 */

const NOV: Bi = { en: 'November 2026', es: 'noviembre de 2026' }

const pa = {
  sale: { en: 'Judicial foreclosure, sheriff’s sale', es: 'Ejecución judicial, venta del sheriff' } as Bi,
  how: {
    en: 'In Pennsylvania, the lender sues in the Court of Common Pleas, and after judgment the sheriff sells the property. The sheriff then prepares a schedule of distribution showing who gets paid from the sale. If there is money left after the lender, taxes, costs and other liens, it is excess that belongs to the former owner.',
    es: 'En Pennsylvania, el prestamista demanda en el Court of Common Pleas, y después de la sentencia el sheriff vende la propiedad. Luego el sheriff prepara un plan de reparto (schedule of distribution) que muestra a quién se le paga con la venta. Si queda dinero después del prestamista, los impuestos, los costos y otros gravámenes, ese excedente le pertenece al antiguo dueño.',
  } as Bi,
  src: [{ label: 'Pennsylvania Rules of Civil Procedure, Rule 3136 (distribution of sale proceeds)', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/231/chapter3100/s3136.html' }],
}

const faqs = (c: string, ces: string) => [
  {
    q: { en: `How do I know if my ${c} sale left excess?`, es: `¿Cómo sé si mi venta en ${ces} dejó excedente?` },
    a: {
      en: 'The sale results show the winning bid, and the sheriff’s schedule of distribution shows how it was paid out. If the bid was higher than the debt and costs, there may be excess. Send us the address and we will check for free.',
      es: 'Los resultados de la venta muestran la oferta ganadora, y el plan de reparto del sheriff muestra cómo se pagó. Si la oferta fue mayor que la deuda y los costos, puede haber excedente. Envíenos la dirección y lo revisamos gratis.',
    },
  },
  {
    q: { en: 'Can I claim it myself?', es: '¿Puedo reclamarlo yo mismo?' },
    a: {
      en: 'Yes. Owners can file the sheriff’s claim forms themselves. Many people get help because liens and title questions are common. If you work with us, the claim is filed through our network of licensed attorneys and you pay nothing unless money is recovered.',
      es: 'Sí. Los dueños pueden presentar ellos mismos los formularios de reclamo del sheriff. Muchas personas buscan ayuda porque los gravámenes y los problemas de título son comunes. Si trabaja con nosotros, el reclamo se presenta a través de nuestra red de abogados con licencia y no paga nada a menos que se recupere dinero.',
    },
  },
  {
    q: { en: 'The owner passed away. Can heirs claim?', es: 'El dueño falleció. ¿Los herederos pueden reclamar?' },
    a: {
      en: 'Yes, with proof from the Register of Wills of who can act for the estate. Homes passed down without a probate case are common in Pennsylvania, and we can help sort out the paperwork.',
      es: 'Sí, con prueba del Register of Wills (registro de testamentos) de quién puede actuar por la herencia. En Pennsylvania es común que las casas pasen a la familia sin una sucesión, y podemos ayudar a ordenar los papeles.',
    },
  },
  {
    q: { en: 'Is there a deadline?', es: '¿Hay una fecha límite?' },
    a: {
      en: 'Do not wait. Unclaimed excess can eventually be turned over to the Pennsylvania Treasury as unclaimed property. Act fast.',
      es: 'No espere. El excedente no reclamado puede terminar entregado al Tesoro de Pennsylvania como propiedad no reclamada. Actúe rápido.',
    },
  },
]

export const PENNSYLVANIA: County[] = [
  {
    slug: 'philadelphia',
    state: 'pennsylvania',
    name: { en: 'Philadelphia County', es: 'el condado de Filadelfia' },
    short: 'Philadelphia',
    cities: ['Philadelphia'],
    blurb: { en: 'Sheriff’s sales held online, with excess claimed through the Sheriff’s Office.', es: 'Ventas del sheriff en línea, con excedentes reclamados en la Oficina del Sheriff.' },
    checked: NOV,
    glance: {
      sale: pa.sale,
      holder: { en: 'Philadelphia Sheriff’s Office', es: 'Oficina del Sheriff de Filadelfia' },
      auction: { en: 'Online on Bid4Assets', es: 'En línea en Bid4Assets' },
    },
    intro: {
      en: 'Philadelphia is both a city and a county. Its sheriff sells homes for mortgage foreclosures and for unpaid city taxes, and when a sale brings in more than what was owed, the excess is claimed through the Sheriff’s Office.',
      es: 'Filadelfia es ciudad y condado a la vez. Su sheriff vende casas por ejecuciones hipotecarias y por impuestos municipales atrasados, y cuando una venta deja más de lo que se debía, el excedente se reclama en la Oficina del Sheriff.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Philadelphia.', es: 'Quién guarda el dinero en Filadelfia.' },
        body: [
          pa.how,
          {
            en: 'In Philadelphia, both mortgage sales and tax sales are run by the Sheriff’s Office, and claims for excess are made on the Sheriff’s claim forms. The Sheriff’s Office is at 100 S Broad Street, 5th Floor.',
            es: 'En Filadelfia, tanto las ventas hipotecarias como las ventas por impuestos las hace la Oficina del Sheriff, y los reclamos de excedente se hacen con los formularios del Sheriff. La Oficina del Sheriff está en 100 S Broad Street, 5.º piso.',
          },
        ],
      },
      {
        title: { en: 'How sales work in Philadelphia.', es: 'Cómo son las ventas en Filadelfia.' },
        body: [
          {
            en: 'Philadelphia sheriff’s sales are held online on Bid4Assets. Many Philadelphia rowhouses are owned outright by long-time families, so a tax sale can leave a large excess compared with the small tax debt.',
            es: 'Las ventas del sheriff de Filadelfia se hacen en línea en Bid4Assets. Muchas casas adosadas de Filadelfia son de familias de muchos años y están pagadas, así que una venta por impuestos puede dejar un excedente grande comparado con la deuda pequeña de impuestos.',
          },
        ],
      },
    ],
    faqs: faqs('Philadelphia', 'Filadelfia'),
    sources: [
      { label: 'Philadelphia Sheriff’s Office', url: 'https://phillysheriff.com/' },
      { label: 'Bid4Assets, Philadelphia sheriff sales', url: 'https://www.bid4assets.com/philadelphia' },
      ...pa.src,
    ],
    meta: {
      title: { en: 'Philadelphia Sheriff Sale Excess Funds: How to Claim | RCG', es: 'Fondos excedentes de ventas del sheriff en Filadelfia | RCG' },
      description: {
        en: 'Philadelphia home sold at a mortgage or tax sheriff’s sale? Excess is claimed through the Sheriff’s Office. How it works, heirs, and free help. $0 upfront.',
        es: '¿Su casa en Filadelfia se vendió en una venta del sheriff por hipoteca o impuestos? El excedente se reclama en la Oficina del Sheriff. Cómo funciona, herederos y ayuda gratis. $0 por adelantado.',
      },
    },
  },
  {
    slug: 'montgomery',
    state: 'pennsylvania',
    name: { en: 'Montgomery County', es: 'el condado de Montgomery' },
    short: 'Montgomery',
    cities: ['Norristown', 'Lansdale', 'Pottstown', 'King of Prussia', 'Abington', 'Lower Merion'],
    blurb: { en: 'Philadelphia’s northwest suburbs, with sheriff’s sales online.', es: 'Suburbios al noroeste de Filadelfia, con ventas del sheriff en línea.' },
    checked: NOV,
    glance: {
      sale: pa.sale,
      holder: { en: 'Montgomery County Sheriff, per the schedule of distribution', es: 'Sheriff del condado de Montgomery, según el plan de reparto' },
      auction: { en: 'Online on Bid4Assets', es: 'En línea en Bid4Assets' },
    },
    intro: {
      en: 'Montgomery County covers the suburbs northwest of Philadelphia, with strong home values. When a sheriff’s sale there brings in more than the debt, the excess is paid out under the sheriff’s schedule of distribution, ending with the former owner.',
      es: 'El condado de Montgomery abarca los suburbios al noroeste de Filadelfia, con valores de vivienda altos. Cuando una venta del sheriff allí deja más que la deuda, el excedente se paga según el plan de reparto del sheriff, terminando con el antiguo dueño.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Montgomery County.', es: 'Quién guarda el dinero en el condado de Montgomery.' },
        body: [
          pa.how,
          {
            en: 'Foreclosures are filed in the Montgomery County Court of Common Pleas in Norristown, and the Montgomery County Sheriff runs the sales online on Bid4Assets.',
            es: 'Las ejecuciones se presentan en el Court of Common Pleas del condado de Montgomery, en Norristown, y el Sheriff del condado de Montgomery hace las ventas en línea en Bid4Assets.',
          },
        ],
      },
    ],
    faqs: faqs('Montgomery County', 'el condado de Montgomery'),
    sources: [
      { label: 'Montgomery County Sheriff’s Office', url: 'https://www.montgomerycountypa.gov/1188/Sheriffs-Office' },
      { label: 'Bid4Assets, Montgomery County sheriff sales', url: 'https://www.bid4assets.com/montgomerycountypasheriffsales' },
      ...pa.src,
    ],
    meta: {
      title: { en: 'Montgomery County, PA Sheriff Sale Excess Funds | RCG', es: 'Fondos excedentes de ventas del sheriff en Montgomery, PA | RCG' },
      description: {
        en: 'Norristown, Lansdale or King of Prussia home sold at sheriff’s sale? The excess is paid under the sheriff’s schedule of distribution. How to claim, heirs, free help.',
        es: '¿Su casa en Norristown, Lansdale o King of Prussia se vendió en una venta del sheriff? El excedente se paga según el plan de reparto del sheriff. Cómo reclamar, herederos y ayuda gratis.',
      },
    },
  },
]
