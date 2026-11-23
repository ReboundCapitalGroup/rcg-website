import type { Bi, County } from './types'

/**
 * Florida county guides. Statewide rules (checked Nov 2026):
 * - Mortgage foreclosure is judicial. The Clerk of Court runs the sale online and holds any surplus (Fla. Stat. 45.031, 45.032).
 * - The owner of record files a claim with the Clerk in the foreclosure case; unclaimed surplus is later reported to the
 *   Florida Department of Financial Services as unclaimed property (45.032).
 * - Tax deed sales are also run by the Clerk; the Clerk mails a Notice of Surplus and claims are made on the statutory form
 *   within a short window (197.582). Unclaimed tax deed surplus leaves the Clerk's hands after that.
 * No exact deadlines on the page (site rule).
 */

const NOV: Bi = { en: 'November 2026', es: 'noviembre de 2026' }

const fl = {
  sale: { en: 'Judicial foreclosure, sold online by the Clerk', es: 'Ejecución judicial, venta en línea por el Secretario' } as Bi,
  claim: (clerk: string, clerkEs: string): Bi[] => [
    {
      en: `In Florida, the owner of record when the foreclosure was filed is generally the one entitled to the surplus. The claim is filed with the ${clerk} in the same foreclosure case, using the owner’s claim form Florida law provides, with ID and proof of ownership. If a lender, HOA or other lienholder also claims the money, the judge decides who gets paid first.`,
      es: `En Florida, por lo general tiene derecho al sobrante quien era el dueño registrado cuando se presentó la ejecución. El reclamo se presenta ante el ${clerkEs} en el mismo caso de ejecución, con el formulario de reclamo del dueño que establece la ley de Florida, identificación y prueba de propiedad. Si un prestamista, una HOA u otro acreedor también reclama el dinero, el juez decide a quién se le paga primero.`,
    },
    {
      en: 'Surplus from a tax deed sale works differently. The Clerk mails a Notice of Surplus to the people listed in the tax deed file, and claims are made on the statutory claim form within a short window. Liens are paid first, then the former owner.',
      es: 'El sobrante de una venta por impuestos (tax deed) funciona distinto. El Secretario envía un Aviso de Sobrante a las personas que aparecen en el expediente, y los reclamos se hacen con el formulario oficial dentro de un plazo corto. Primero se pagan los gravámenes y luego al antiguo dueño.',
    },
  ],
  unclaimed: {
    en: 'Money nobody claims does not stay with the Clerk forever. Unclaimed foreclosure surplus is reported to the Florida Department of Financial Services as unclaimed property, where it can still be claimed but with more paperwork. Tax deed surplus that goes unclaimed also leaves the Clerk’s account. The sooner you act, the simpler the claim.',
    es: 'El dinero que nadie reclama no se queda para siempre con el Secretario. Los fondos excedentes de ejecución que no se reclaman se reportan al Departamento de Servicios Financieros de Florida como propiedad no reclamada, donde todavía se pueden reclamar pero con más papeleo. El sobrante de una venta por impuestos que nadie reclama también sale de la cuenta del Secretario. Mientras antes actúe, más sencillo es el reclamo.',
  } as Bi,
  srcStatutes: [
    { label: 'Florida Statutes 45.032, disbursement of surplus funds after judicial sale', url: 'https://www.flsenate.gov/Laws/Statutes/2023/45.032' },
    { label: 'Florida Statutes 197.582, surplus from tax deed sales', url: 'https://m.flsenate.gov/statutes/197.582' },
  ],
}

const faqSelf = (office: string, officeEs: string) => ({
  q: { en: 'Can I claim the surplus myself?', es: '¿Puedo reclamar el sobrante yo mismo?' },
  a: {
    en: `Yes. Florida lets owners file their own claim with the ${office}. Many people hire help because the forms, liens and court steps are easy to get wrong. If you work with us, the claim is filed through our network of licensed attorneys and you pay nothing unless money is recovered.`,
    es: `Sí. Florida permite que los dueños presenten su propio reclamo ante el ${officeEs}. Muchas personas buscan ayuda porque es fácil equivocarse con los formularios, los gravámenes y los pasos del tribunal. Si trabaja con nosotros, el reclamo se presenta a través de nuestra red de abogados con licencia y no paga nada a menos que se recupere dinero.`,
  },
})

const faqHeirs = (county: string, countyEs: string) => ({
  q: { en: `The owner died. Can the family claim surplus in ${county}?`, es: `El dueño falleció. ¿La familia puede reclamar el sobrante en ${countyEs}?` },
  a: {
    en: 'Usually, yes. The estate or the heirs can claim, but the court will want proof of who has the right to act, which often means a probate case or a summary administration first. We coordinate that with the claim so the money is not lost while the estate is being set up.',
    es: 'Por lo general, sí. La herencia o los herederos pueden reclamar, pero el tribunal pedirá prueba de quién tiene derecho a actuar, lo que muchas veces significa abrir primero una sucesión o una administración sumaria. Coordinamos eso junto con el reclamo para que el dinero no se pierda mientras se organiza la herencia.',
  },
})

const faqDeadline = {
  q: { en: 'Is there a deadline?', es: '¿Hay una fecha límite?' },
  a: {
    en: 'Yes. Florida sets claim windows for both foreclosure and tax deed surplus, and some are short. After that the money moves to the state or the county and the claim gets harder. Reach out as soon as you think money may be owed.',
    es: 'Sí. Florida fija plazos para reclamar los sobrantes de ejecuciones y de ventas por impuestos, y algunos son cortos. Después el dinero pasa al estado o al condado y el reclamo se complica. Contáctenos en cuanto crea que le pueden deber dinero.',
  },
}

export const FLORIDA: County[] = [
  {
    slug: 'miami-dade',
    state: 'florida',
    name: { en: 'Miami-Dade County', es: 'el condado de Miami-Dade' },
    short: 'Miami-Dade',
    cities: ['Miami', 'Hialeah', 'Miami Gardens', 'Homestead', 'Miami Beach', 'Kendall'],
    blurb: { en: 'Florida’s busiest foreclosure court, including condo and HOA cases.', es: 'El tribunal de ejecuciones más activo de Florida, incluidos casos de condominios y HOA.' },
    checked: NOV,
    glance: {
      sale: fl.sale,
      holder: { en: 'Miami-Dade Clerk of the Court and Comptroller', es: 'Secretario del Tribunal y Contralor de Miami-Dade' },
      auction: { en: 'Online auction run by the Clerk', es: 'Subasta en línea del Secretario' },
    },
    intro: {
      en: 'When a home in Miami-Dade sells at a foreclosure or tax deed auction for more than what was owed, the difference is held by the Clerk of the Court and Comptroller until the person entitled to it files a claim. Here is how that works in Miami-Dade, and how to get the money back.',
      es: 'Cuando una casa en Miami-Dade se vende en una subasta por ejecución o por impuestos por más de lo que se debía, la diferencia la guarda el Secretario del Tribunal y Contralor hasta que la persona con derecho presente un reclamo. Así funciona en Miami-Dade y así se recupera el dinero.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Miami-Dade.', es: 'Quién guarda el dinero en Miami-Dade.' },
        body: [
          {
            en: 'Foreclosure cases in Miami-Dade are heard by the Eleventh Judicial Circuit. After the sale, the Clerk of the Court and Comptroller pays what the final judgment says, including the lender, costs and valid liens, and keeps any remaining surplus in the court registry under the case number. The Clerk’s main office is in the Dade County Courthouse at 73 W Flagler Street in downtown Miami.',
            es: 'Los casos de ejecución en Miami-Dade los ve el Undécimo Circuito Judicial. Después de la venta, el Secretario del Tribunal y Contralor paga lo que indica la sentencia final, incluidos el prestamista, los costos y los gravámenes válidos, y guarda el sobrante en el registro del tribunal bajo el número del caso. La oficina principal del Secretario está en el Dade County Courthouse, 73 W Flagler Street, en el centro de Miami.',
          },
          {
            en: 'The same Clerk runs Miami-Dade’s tax deed sales for homes sold over unpaid property taxes, and holds tax deed surplus until it is claimed.',
            es: 'El mismo Secretario hace las ventas por impuestos (tax deed) de Miami-Dade para casas vendidas por impuestos atrasados, y guarda ese sobrante hasta que se reclama.',
          },
        ],
      },
      {
        title: { en: 'How sales work in Miami-Dade.', es: 'Cómo son las ventas en Miami-Dade.' },
        body: [
          {
            en: 'Foreclosure auctions are held online through the Clerk’s RealForeclose auction site, not on the courthouse steps. Bidders post a deposit and bid on the case number. Condo associations and HOAs foreclose often in Miami-Dade, and those sales can leave surplus too, since the association’s lien is usually much smaller than the value of the unit.',
            es: 'Las subastas por ejecución se hacen en línea en el sitio RealForeclose del Secretario, no en las escaleras del tribunal. Los postores dejan un depósito y pujan por número de caso. En Miami-Dade las asociaciones de condominio y HOA ejecutan con frecuencia, y esas ventas también pueden dejar sobrantes, porque el gravamen de la asociación suele ser mucho menor que el valor de la unidad.',
          },
        ],
      },
      { title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' }, body: [...fl.claim('Miami-Dade Clerk', 'Secretario de Miami-Dade'), fl.unclaimed] },
    ],
    faqs: [
      faqSelf('Miami-Dade Clerk', 'Secretario de Miami-Dade'),
      {
        q: { en: 'My condo was foreclosed by the association. Could there be surplus?', es: 'La asociación ejecutó mi condominio. ¿Puede haber sobrante?' },
        a: {
          en: 'Yes, and it happens often in Miami-Dade. An association foreclosure only has to cover the association’s lien and costs. If the unit sells for more, the extra goes to the court registry, subject to the mortgage and other liens. We check the final judgment and the certificate of disbursements to see what is left.',
          es: 'Sí, y pasa a menudo en Miami-Dade. Una ejecución de la asociación solo tiene que cubrir el gravamen de la asociación y los costos. Si la unidad se vende por más, el excedente va al registro del tribunal, sujeto a la hipoteca y otros gravámenes. Revisamos la sentencia final y el certificado de desembolsos para ver qué queda.',
        },
      },
      faqHeirs('Miami-Dade', 'Miami-Dade'),
      faqDeadline,
    ],
    sources: [
      { label: 'Miami-Dade Clerk of the Court and Comptroller', url: 'https://www.miamidadeclerk.gov/' },
      { label: 'Miami-Dade online foreclosure auctions (RealForeclose)', url: 'https://www.miamidade.realforeclose.com/' },
      ...fl.srcStatutes,
    ],
    meta: {
      title: { en: 'Miami-Dade Foreclosure Surplus Funds: How to Claim | RCG', es: 'Fondos excedentes de ejecución en Miami-Dade: cómo reclamarlos | RCG' },
      description: {
        en: 'Your Miami-Dade home sold at foreclosure or tax deed auction? The surplus is held by the Clerk of the Court and Comptroller. How claims work, who can file, and free help. $0 upfront.',
        es: '¿Su casa en Miami-Dade se vendió en una subasta por ejecución o por impuestos? El sobrante lo guarda el Secretario del Tribunal y Contralor. Cómo reclamar, quién puede hacerlo y ayuda gratis. $0 por adelantado.',
      },
    },
  },
  {
    slug: 'broward',
    state: 'florida',
    name: { en: 'Broward County', es: 'el condado de Broward' },
    short: 'Broward',
    cities: ['Fort Lauderdale', 'Hollywood', 'Pembroke Pines', 'Miramar', 'Coral Springs', 'Pompano Beach'],
    blurb: { en: 'Heavy HOA and condo foreclosure activity across the county.', es: 'Mucha actividad de ejecuciones de HOA y condominios en todo el condado.' },
    checked: NOV,
    glance: {
      sale: fl.sale,
      holder: { en: 'Broward County Clerk of Courts', es: 'Secretario de Tribunales del condado de Broward' },
      auction: { en: 'Online auction run by the Clerk', es: 'Subasta en línea del Secretario' },
    },
    intro: {
      en: 'Broward has thousands of condo and HOA communities, and foreclosures there often leave money behind. When a property sells for more than the debt, the Broward County Clerk of Courts holds the surplus until the right person claims it.',
      es: 'Broward tiene miles de comunidades de condominios y HOA, y las ejecuciones allí muchas veces dejan dinero. Cuando una propiedad se vende por más de la deuda, el Secretario de Tribunales del condado de Broward guarda el sobrante hasta que lo reclama la persona correcta.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Broward.', es: 'Quién guarda el dinero en Broward.' },
        body: [
          {
            en: 'Broward foreclosures go through the Seventeenth Judicial Circuit in Fort Lauderdale. After the auction, the Clerk of Courts pays out what the final judgment orders and holds the remainder in the court registry. The main courthouse is at 201 SE 6th Street in Fort Lauderdale.',
            es: 'Las ejecuciones de Broward pasan por el Decimoséptimo Circuito Judicial en Fort Lauderdale. Después de la subasta, el Secretario de Tribunales paga lo que ordena la sentencia final y guarda el resto en el registro del tribunal. El tribunal principal está en 201 SE 6th Street, Fort Lauderdale.',
          },
          {
            en: 'Tax deed sales in Broward are also handled by the Clerk, who keeps any tax deed surplus and sends notice to the people with an interest in the property.',
            es: 'Las ventas por impuestos en Broward también las maneja el Secretario, que guarda el sobrante y envía aviso a las personas con interés en la propiedad.',
          },
        ],
      },
      {
        title: { en: 'Why Broward cases leave surplus.', es: 'Por qué en Broward quedan sobrantes.' },
        body: [
          {
            en: 'Many Broward foreclosures are started by condominium and homeowners associations over unpaid dues, not by the mortgage lender. Those judgments are small compared with the value of the home, so a competitive online auction can leave a real surplus. If a first mortgage is still on the property, the numbers change, which is why every case needs the final judgment and the certificate of disbursements checked.',
            es: 'Muchas ejecuciones en Broward las inician asociaciones de condominio y de propietarios por cuotas atrasadas, no el prestamista hipotecario. Esas sentencias son pequeñas comparadas con el valor de la casa, así que una subasta en línea con varios postores puede dejar un sobrante real. Si todavía hay una primera hipoteca sobre la propiedad, los números cambian, y por eso en cada caso hay que revisar la sentencia final y el certificado de desembolsos.',
          },
        ],
      },
      { title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' }, body: [...fl.claim('Broward Clerk of Courts', 'Secretario de Tribunales de Broward'), fl.unclaimed] },
    ],
    faqs: [
      {
        q: { en: 'How do I know if my Broward sale left surplus?', es: '¿Cómo sé si mi venta en Broward dejó un sobrante?' },
        a: {
          en: 'The Clerk files a certificate of sale and a certificate of disbursements in the case. If the winning bid was higher than what the judgment required, the difference shows as surplus. Send us the address or case number and we will check it for free.',
          es: 'El Secretario presenta en el caso un certificado de venta y un certificado de desembolsos. Si la oferta ganadora fue mayor que lo que exigía la sentencia, la diferencia aparece como sobrante. Envíenos la dirección o el número de caso y lo revisamos gratis.',
        },
      },
      faqSelf('Broward Clerk of Courts', 'Secretario de Tribunales de Broward'),
      faqHeirs('Broward', 'Broward'),
      faqDeadline,
    ],
    sources: [
      { label: 'Broward County Clerk of Courts', url: 'https://www.browardclerk.org/' },
      { label: 'Broward online foreclosure auctions (RealForeclose)', url: 'https://broward.realforeclose.com/' },
      ...fl.srcStatutes,
    ],
    meta: {
      title: { en: 'Broward County Foreclosure Surplus Funds: How to Claim | RCG', es: 'Fondos excedentes de ejecución en Broward: cómo reclamarlos | RCG' },
      description: {
        en: 'Lost a Broward home or condo at foreclosure or tax deed sale? The Clerk of Courts holds any surplus. How claims work in Broward, HOA cases, heirs, and free help. $0 upfront.',
        es: '¿Perdió una casa o condominio en Broward en una venta por ejecución o por impuestos? El Secretario de Tribunales guarda el sobrante. Cómo reclamar en Broward, casos de HOA, herederos y ayuda gratis. $0 por adelantado.',
      },
    },
  },
  {
    slug: 'palm-beach',
    state: 'florida',
    name: { en: 'Palm Beach County', es: 'el condado de Palm Beach' },
    short: 'Palm Beach',
    cities: ['West Palm Beach', 'Boca Raton', 'Boynton Beach', 'Delray Beach', 'Jupiter', 'Wellington'],
    blurb: { en: 'Higher home values mean larger surplus when a sale goes over the debt.', es: 'Valores altos de vivienda significan sobrantes más grandes cuando una venta supera la deuda.' },
    checked: NOV,
    glance: {
      sale: fl.sale,
      holder: { en: 'Palm Beach County Clerk & Comptroller', es: 'Secretario y Contralor del condado de Palm Beach' },
      auction: { en: 'Online auction, generally Monday to Thursday', es: 'Subasta en línea, por lo general de lunes a jueves' },
    },
    intro: {
      en: 'Home values in Palm Beach County are among the highest in Florida, so when a foreclosure or tax deed sale goes over the debt, the surplus can be large. The Clerk & Comptroller holds it until the person entitled to it files a claim.',
      es: 'Los valores de vivienda en el condado de Palm Beach están entre los más altos de Florida, así que cuando una venta por ejecución o por impuestos supera la deuda, el sobrante puede ser grande. El Secretario y Contralor lo guarda hasta que la persona con derecho presente un reclamo.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Palm Beach.', es: 'Quién guarda el dinero en Palm Beach.' },
        body: [
          {
            en: 'Foreclosures are heard by the Fifteenth Judicial Circuit. The Palm Beach County Clerk & Comptroller runs the sale, pays out the final judgment, and holds what is left in the court registry. The main courthouse is at 205 N Dixie Highway in West Palm Beach.',
            es: 'Las ejecuciones las ve el Decimoquinto Circuito Judicial. El Secretario y Contralor del condado de Palm Beach hace la venta, paga la sentencia final y guarda lo que queda en el registro del tribunal. El tribunal principal está en 205 N Dixie Highway, West Palm Beach.',
          },
        ],
      },
      {
        title: { en: 'How sales work in Palm Beach.', es: 'Cómo son las ventas en Palm Beach.' },
        body: [
          {
            en: 'The Clerk conducts foreclosure sales online, generally Monday through Thursday at 10:00 a.m., except holidays. Bidding opens as soon as a case appears on the auction calendar. Tax deed sales for unpaid property taxes are also run by the Clerk online, and any tax deed surplus is noticed to the owner and lienholders.',
            es: 'El Secretario hace las ventas por ejecución en línea, por lo general de lunes a jueves a las 10:00 a.m., excepto feriados. Las pujas se abren en cuanto el caso aparece en el calendario de subastas. Las ventas por impuestos atrasados también las hace el Secretario en línea, y cualquier sobrante se notifica al dueño y a los acreedores.',
          },
          {
            en: 'With higher property values, a single sale can leave tens of thousands of dollars or more, especially when the foreclosure was over a small HOA lien or an older mortgage with a low balance.',
            es: 'Con valores de propiedad más altos, una sola venta puede dejar decenas de miles de dólares o más, sobre todo cuando la ejecución fue por un gravamen pequeño de la HOA o por una hipoteca vieja con poco saldo.',
          },
        ],
      },
      { title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' }, body: [...fl.claim('Palm Beach County Clerk', 'Secretario del condado de Palm Beach'), fl.unclaimed] },
    ],
    faqs: [
      {
        q: { en: 'Someone offered to buy my right to the surplus. Should I sell it?', es: 'Alguien me ofreció comprar mi derecho al sobrante. ¿Debo venderlo?' },
        a: {
          en: 'Be careful. Florida law puts limits on buying or assigning someone’s right to foreclosure surplus and requires specific disclosures. Ask how much they will pay you compared with the full amount in the registry, in writing, before signing anything.',
          es: 'Tenga cuidado. La ley de Florida pone límites a la compra o cesión del derecho de una persona a los fondos excedentes de ejecución y exige divulgaciones específicas. Pregunte por escrito cuánto le pagarán comparado con el monto total en el registro antes de firmar cualquier cosa.',
        },
      },
      faqSelf('Palm Beach County Clerk', 'Secretario del condado de Palm Beach'),
      faqHeirs('Palm Beach', 'Palm Beach'),
      faqDeadline,
    ],
    sources: [
      { label: 'Palm Beach County Clerk & Comptroller, foreclosure sales', url: 'https://www.mypalmbeachclerk.com/departments/courts/foreclosures/general-information' },
      ...fl.srcStatutes,
    ],
    meta: {
      title: { en: 'Palm Beach County Foreclosure Surplus Funds: How to Claim | RCG', es: 'Fondos excedentes de ejecución en Palm Beach: cómo reclamarlos | RCG' },
      description: {
        en: 'Palm Beach County home sold at foreclosure or tax deed auction? The Clerk & Comptroller holds the surplus. How the online sales and claims work, heirs, and free help. $0 upfront.',
        es: '¿Su casa en Palm Beach se vendió en una subasta por ejecución o por impuestos? El Secretario y Contralor guarda el sobrante. Cómo funcionan las ventas en línea y los reclamos, herederos y ayuda gratis. $0 por adelantado.',
      },
    },
  },
  {
    slug: 'hillsborough',
    state: 'florida',
    name: { en: 'Hillsborough County', es: 'el condado de Hillsborough' },
    short: 'Hillsborough',
    cities: ['Tampa', 'Brandon', 'Riverview', 'Plant City', 'Temple Terrace'],
    blurb: { en: 'Tampa Bay’s largest county, with sales held online every weekday.', es: 'El condado más grande de Tampa Bay, con ventas en línea cada día hábil.' },
    checked: NOV,
    glance: {
      sale: fl.sale,
      holder: { en: 'Hillsborough County Clerk of Court & Comptroller', es: 'Secretario del Tribunal y Contralor del condado de Hillsborough' },
      auction: { en: 'Online, every weekday at 10:00 a.m.', es: 'En línea, cada día hábil a las 10:00 a.m.' },
    },
    intro: {
      en: 'Hillsborough County, home to Tampa, runs foreclosure auctions online every weekday. When a sale brings in more than the judgment, the Clerk of Court & Comptroller holds the surplus until it is claimed.',
      es: 'El condado de Hillsborough, donde está Tampa, hace subastas por ejecución en línea cada día hábil. Cuando una venta deja más que la sentencia, el Secretario del Tribunal y Contralor guarda el sobrante hasta que se reclama.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Hillsborough.', es: 'Quién guarda el dinero en Hillsborough.' },
        body: [
          {
            en: 'Foreclosures are heard by the Thirteenth Judicial Circuit. The Clerk of Court & Comptroller conducts the sale under Chapter 45 of the Florida Statutes, pays the amounts in the final judgment, and keeps the surplus in the court registry. The Clerk’s customer service center is in the George E. Edgecomb Courthouse at 800 E Twiggs Street in Tampa.',
            es: 'Las ejecuciones las ve el Decimotercer Circuito Judicial. El Secretario del Tribunal y Contralor hace la venta según el Capítulo 45 de los Estatutos de Florida, paga lo que indica la sentencia final y guarda el sobrante en el registro del tribunal. El centro de atención del Secretario está en el George E. Edgecomb Courthouse, 800 E Twiggs Street, Tampa.',
          },
        ],
      },
      {
        title: { en: 'How sales work in Hillsborough.', es: 'Cómo son las ventas en Hillsborough.' },
        body: [
          {
            en: 'Sales are held online every weekday, Monday through Friday, at 10:00 a.m. on the Clerk’s RealForeclose site. The list of properties set for sale is public, and each sale is tied to a case number you can look up. Tax deed auctions for unpaid property taxes are run separately by the Clerk.',
            es: 'Las ventas se hacen en línea cada día hábil, de lunes a viernes, a las 10:00 a.m. en el sitio RealForeclose del Secretario. La lista de propiedades a la venta es pública, y cada venta está ligada a un número de caso que se puede consultar. Las subastas por impuestos atrasados las hace el Secretario por separado.',
          },
        ],
      },
      { title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' }, body: [...fl.claim('Hillsborough Clerk', 'Secretario de Hillsborough'), fl.unclaimed] },
    ],
    faqs: [
      {
        q: { en: 'Where can I look up my Hillsborough case?', es: '¿Dónde busco mi caso en Hillsborough?' },
        a: {
          en: 'The Clerk’s online case search shows the final judgment, the certificate of sale and the certificate of disbursements, and the RealForeclose site shows sale results. If reading the docket is confusing, send us the address and we will check it for free.',
          es: 'La búsqueda de casos en línea del Secretario muestra la sentencia final, el certificado de venta y el certificado de desembolsos, y el sitio RealForeclose muestra los resultados de las ventas. Si leer el expediente es confuso, envíenos la dirección y lo revisamos gratis.',
        },
      },
      faqSelf('Hillsborough Clerk', 'Secretario de Hillsborough'),
      faqHeirs('Hillsborough', 'Hillsborough'),
      faqDeadline,
    ],
    sources: [
      { label: 'Hillsborough County Clerk of Court & Comptroller, foreclosure sales', url: 'https://hillsclerk.com/court-services/foreclosure-sales' },
      { label: 'Hillsborough online foreclosure auctions (RealForeclose)', url: 'https://www.hillsborough.realforeclose.com/' },
      ...fl.srcStatutes,
    ],
    meta: {
      title: { en: 'Hillsborough County (Tampa) Foreclosure Surplus Funds | RCG', es: 'Fondos excedentes de ejecución en Hillsborough (Tampa) | RCG' },
      description: {
        en: 'Tampa or Hillsborough County home sold at a foreclosure or tax deed sale? The Clerk holds the surplus. How weekday online sales and claims work, and free help. $0 upfront.',
        es: '¿Su casa en Tampa o el condado de Hillsborough se vendió en una venta por ejecución o por impuestos? El Secretario guarda el sobrante. Cómo funcionan las ventas en línea y los reclamos, y ayuda gratis. $0 por adelantado.',
      },
    },
  },
  {
    slug: 'orange',
    state: 'florida',
    name: { en: 'Orange County', es: 'el condado de Orange' },
    short: 'Orange',
    cities: ['Orlando', 'Apopka', 'Winter Park', 'Ocoee', 'Winter Garden'],
    blurb: { en: 'Orlando and Central Florida, including many timeshare and HOA cases.', es: 'Orlando y el centro de Florida, con muchos casos de tiempo compartido y HOA.' },
    checked: NOV,
    glance: {
      sale: fl.sale,
      holder: { en: 'Orange County Clerk of Courts', es: 'Secretario de Tribunales del condado de Orange' },
      auction: { en: 'Online auction run by the Clerk', es: 'Subasta en línea del Secretario' },
    },
    intro: {
      en: 'Orange County covers Orlando and much of Central Florida. When a home sells at a foreclosure or tax deed auction for more than the debt, the Orange County Clerk of Courts holds the surplus until the owner, an heir or a lienholder claims it.',
      es: 'El condado de Orange abarca Orlando y gran parte del centro de Florida. Cuando una casa se vende en una subasta por ejecución o por impuestos por más de la deuda, el Secretario de Tribunales del condado de Orange guarda el sobrante hasta que lo reclama el dueño, un heredero o un acreedor.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Orange County.', es: 'Quién guarda el dinero en el condado de Orange.' },
        body: [
          {
            en: 'Foreclosures are heard by the Ninth Judicial Circuit. The Orange County Clerk of Courts conducts the sale, disburses what the final judgment orders, and keeps the surplus in the court registry. The Clerk’s main office is in the Orange County Courthouse at 425 N Orange Avenue in downtown Orlando.',
            es: 'Las ejecuciones las ve el Noveno Circuito Judicial. El Secretario de Tribunales del condado de Orange hace la venta, desembolsa lo que ordena la sentencia final y guarda el sobrante en el registro del tribunal. La oficina principal del Secretario está en el Orange County Courthouse, 425 N Orange Avenue, en el centro de Orlando.',
          },
        ],
      },
      {
        title: { en: 'What is different in Orange County.', es: 'Qué es distinto en el condado de Orange.' },
        body: [
          {
            en: 'Orange County has a large number of HOA communities and timeshare properties, and both show up often on the foreclosure docket. An HOA foreclosure over unpaid dues can leave surplus when the home is worth much more than the lien. Timeshare foreclosures rarely leave meaningful surplus, so we focus on homes and condos.',
            es: 'El condado de Orange tiene muchas comunidades con HOA y propiedades de tiempo compartido, y ambas aparecen con frecuencia en los casos de ejecución. Una ejecución de la HOA por cuotas atrasadas puede dejar un sobrante cuando la casa vale mucho más que el gravamen. Las ejecuciones de tiempo compartido casi nunca dejan un sobrante importante, así que nos enfocamos en casas y condominios.',
          },
        ],
      },
      { title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' }, body: [...fl.claim('Orange County Clerk of Courts', 'Secretario de Tribunales del condado de Orange'), fl.unclaimed] },
    ],
    faqs: [
      {
        q: { en: 'My HOA foreclosed. Is the mortgage paid from the surplus?', es: 'Mi HOA ejecutó. ¿La hipoteca se paga con el sobrante?' },
        a: {
          en: 'Often the buyer at an HOA sale takes the property subject to the first mortgage, so the mortgage is not paid from the sale. Other junior liens can claim the surplus, though. We review the judgment and the liens to see what is truly yours.',
          es: 'Muchas veces el comprador en una venta de la HOA se queda con la propiedad sujeta a la primera hipoteca, así que la hipoteca no se paga con la venta. Pero otros gravámenes posteriores sí pueden reclamar el sobrante. Revisamos la sentencia y los gravámenes para ver qué es realmente suyo.',
        },
      },
      faqSelf('Orange County Clerk of Courts', 'Secretario de Tribunales del condado de Orange'),
      faqHeirs('Orange County', 'el condado de Orange'),
      faqDeadline,
    ],
    sources: [
      { label: 'Orange County Clerk of Courts', url: 'https://www.myorangeclerk.com/' },
      ...fl.srcStatutes,
    ],
    meta: {
      title: { en: 'Orange County (Orlando) Foreclosure Surplus Funds | RCG', es: 'Fondos excedentes de ejecución en el condado de Orange (Orlando) | RCG' },
      description: {
        en: 'Orlando or Orange County home sold at foreclosure or tax deed auction? The Clerk of Courts holds the surplus. HOA cases, heirs, how to claim, and free help. $0 upfront.',
        es: '¿Su casa en Orlando o el condado de Orange se vendió en una subasta por ejecución o por impuestos? El Secretario de Tribunales guarda el sobrante. Casos de HOA, herederos, cómo reclamar y ayuda gratis. $0 por adelantado.',
      },
    },
  },
  {
    slug: 'duval',
    state: 'florida',
    name: { en: 'Duval County', es: 'el condado de Duval' },
    short: 'Duval',
    cities: ['Jacksonville', 'Jacksonville Beach', 'Atlantic Beach', 'Neptune Beach', 'Baldwin'],
    blurb: { en: 'Jacksonville’s consolidated city-county government and courts.', es: 'Gobierno y tribunales consolidados de la ciudad y el condado de Jacksonville.' },
    checked: NOV,
    glance: {
      sale: fl.sale,
      holder: { en: 'Duval County Clerk of Courts', es: 'Secretario de Tribunales del condado de Duval' },
      auction: { en: 'Online auction run by the Clerk', es: 'Subasta en línea del Secretario' },
    },
    intro: {
      en: 'Duval County and the City of Jacksonville share one consolidated government. Foreclosure and tax deed sales there are run by the Duval County Clerk of Courts, which also holds any surplus until it is claimed.',
      es: 'El condado de Duval y la ciudad de Jacksonville comparten un gobierno consolidado. Las ventas por ejecución y por impuestos allí las hace el Secretario de Tribunales del condado de Duval, que también guarda cualquier sobrante hasta que se reclama.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Duval.', es: 'Quién guarda el dinero en Duval.' },
        body: [
          {
            en: 'Foreclosures are heard by the Fourth Judicial Circuit. The Duval County Clerk of Courts runs the online sale, pays out the final judgment, and holds the surplus in the court registry. The Clerk is in the Duval County Courthouse at 501 W Adams Street in downtown Jacksonville.',
            es: 'Las ejecuciones las ve el Cuarto Circuito Judicial. El Secretario de Tribunales del condado de Duval hace la venta en línea, paga la sentencia final y guarda el sobrante en el registro del tribunal. El Secretario está en el Duval County Courthouse, 501 W Adams Street, en el centro de Jacksonville.',
          },
        ],
      },
      {
        title: { en: 'What is different in Duval.', es: 'Qué es distinto en Duval.' },
        body: [
          {
            en: 'Jacksonville has many older homes owned for decades with little or no mortgage left. When one of those goes to a tax deed sale over unpaid property taxes, the surplus can be most of the home’s value. Many of those owners have passed away, so heir claims are common in Duval.',
            es: 'En Jacksonville hay muchas casas viejas que llevan décadas con el mismo dueño y casi sin hipoteca. Cuando una de ellas llega a una venta por impuestos atrasados, el sobrante puede ser la mayor parte del valor de la casa. Muchos de esos dueños ya fallecieron, así que los reclamos de herederos son comunes en Duval.',
          },
        ],
      },
      { title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' }, body: [...fl.claim('Duval Clerk of Courts', 'Secretario de Tribunales de Duval'), fl.unclaimed] },
    ],
    faqs: [
      {
        q: { en: 'My grandmother’s house was sold for taxes. Can we claim the surplus?', es: 'La casa de mi abuela se vendió por impuestos. ¿Podemos reclamar el sobrante?' },
        a: {
          en: 'Possibly, yes. Heirs of a deceased owner can claim tax deed surplus, but the Clerk will need proof of who the heirs are, which can mean opening a probate or summary administration. Tell us her name and the address and we will check what is being held.',
          es: 'Posiblemente, sí. Los herederos de una dueña fallecida pueden reclamar el sobrante de una venta por impuestos, pero el Secretario pedirá prueba de quiénes son los herederos, lo que puede significar abrir una sucesión o una administración sumaria. Díganos su nombre y la dirección y revisamos qué se está guardando.',
        },
      },
      faqSelf('Duval Clerk of Courts', 'Secretario de Tribunales de Duval'),
      faqDeadline,
      {
        q: { en: 'Do you charge anything upfront?', es: '¿Cobran algo por adelantado?' },
        a: {
          en: 'No. The search is free and our fee comes only from what is recovered. If nothing is recovered, you owe nothing.',
          es: 'No. La búsqueda es gratis y nuestros honorarios salen solo de lo que se recupera. Si no se recupera nada, no debe nada.',
        },
      },
    ],
    sources: [
      { label: 'Duval County Clerk of Courts', url: 'https://www.duvalclerk.com/' },
      { label: 'Duval online foreclosure auctions (RealForeclose)', url: 'https://duval.realforeclose.com/' },
      ...fl.srcStatutes,
    ],
    meta: {
      title: { en: 'Duval County (Jacksonville) Foreclosure Surplus Funds | RCG', es: 'Fondos excedentes de ejecución en Duval (Jacksonville) | RCG' },
      description: {
        en: 'Jacksonville or Duval County home sold at foreclosure or tax deed sale? The Clerk of Courts holds the surplus. Heir claims, how to file, and free help. $0 upfront.',
        es: '¿Su casa en Jacksonville o el condado de Duval se vendió en una venta por ejecución o por impuestos? El Secretario de Tribunales guarda el sobrante. Reclamos de herederos, cómo presentar y ayuda gratis. $0 por adelantado.',
      },
    },
  },
  {
    slug: 'pinellas',
    state: 'florida',
    name: { en: 'Pinellas County', es: 'el condado de Pinellas' },
    short: 'Pinellas',
    cities: ['St. Petersburg', 'Clearwater', 'Largo', 'Pinellas Park', 'Dunedin', 'Tarpon Springs'],
    blurb: { en: 'Dense, older housing on the Gulf coast with many long-time owners.', es: 'Vivienda densa y antigua en la costa del Golfo, con muchos dueños de largo plazo.' },
    checked: NOV,
    glance: {
      sale: fl.sale,
      holder: { en: 'Pinellas County Clerk of the Circuit Court and Comptroller', es: 'Secretario del Tribunal de Circuito y Contralor de Pinellas' },
      auction: { en: 'Online auction run by the Clerk', es: 'Subasta en línea del Secretario' },
    },
    intro: {
      en: 'Pinellas is Florida’s most densely populated county, with St. Petersburg and Clearwater and many homes owned for decades. When a foreclosure or tax deed sale there goes over the debt, the Clerk of the Circuit Court and Comptroller holds the surplus until it is claimed.',
      es: 'Pinellas es el condado más densamente poblado de Florida, con St. Petersburg y Clearwater y muchas casas con el mismo dueño por décadas. Cuando una venta por ejecución o por impuestos allí supera la deuda, el Secretario del Tribunal de Circuito y Contralor guarda el sobrante hasta que se reclama.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Pinellas.', es: 'Quién guarda el dinero en Pinellas.' },
        body: [
          {
            en: 'Foreclosures are heard by the Sixth Judicial Circuit. The Pinellas County Clerk of the Circuit Court and Comptroller conducts the sale, disburses the final judgment, and holds the surplus in the court registry. The Clerk’s main office is at 315 Court Street in Clearwater.',
            es: 'Las ejecuciones las ve el Sexto Circuito Judicial. El Secretario del Tribunal de Circuito y Contralor de Pinellas hace la venta, desembolsa la sentencia final y guarda el sobrante en el registro del tribunal. La oficina principal del Secretario está en 315 Court Street, Clearwater.',
          },
        ],
      },
      {
        title: { en: 'What is different in Pinellas.', es: 'Qué es distinto en Pinellas.' },
        body: [
          {
            en: 'Pinellas has a high share of long-time and retired owners, and homes that were paid off years ago. When property taxes fall behind on a paid-off home, a tax deed sale can leave a large surplus. After recent hurricanes, some owners have also fallen behind and lost homes that still had real equity.',
            es: 'Pinellas tiene muchos dueños jubilados o de largo plazo, y casas que se terminaron de pagar hace años. Cuando los impuestos se atrasan en una casa pagada, una venta por impuestos puede dejar un sobrante grande. Después de los huracanes recientes, algunos dueños también se atrasaron y perdieron casas que todavía tenían capital.',
          },
        ],
      },
      { title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' }, body: [...fl.claim('Pinellas Clerk', 'Secretario de Pinellas'), fl.unclaimed] },
    ],
    faqs: [
      {
        q: { en: 'The home was paid off and sold for taxes. How much could be left?', es: 'La casa estaba pagada y se vendió por impuestos. ¿Cuánto podría quedar?' },
        a: {
          en: 'When there is no mortgage, the surplus is roughly the winning bid minus the taxes, interest and costs, and minus any other liens. On a paid-off home that can be most of the sale price. We confirm the exact figure from the Clerk’s records for free.',
          es: 'Cuando no hay hipoteca, el sobrante es más o menos la oferta ganadora menos los impuestos, intereses y costos, y menos cualquier otro gravamen. En una casa pagada eso puede ser la mayor parte del precio de venta. Confirmamos la cifra exacta en los registros del Secretario sin costo.',
        },
      },
      faqSelf('Pinellas Clerk', 'Secretario de Pinellas'),
      faqHeirs('Pinellas', 'Pinellas'),
      faqDeadline,
    ],
    sources: [
      { label: 'Pinellas County Clerk of the Circuit Court and Comptroller', url: 'https://www.mypinellasclerk.gov/' },
      ...fl.srcStatutes,
    ],
    meta: {
      title: { en: 'Pinellas County Foreclosure & Tax Deed Surplus Funds | RCG', es: 'Fondos excedentes de ejecución y por impuestos en Pinellas | RCG' },
      description: {
        en: 'St. Petersburg or Clearwater home sold at foreclosure or tax deed auction? The Pinellas Clerk holds the surplus. How to claim, heirs, paid-off homes, and free help. $0 upfront.',
        es: '¿Su casa en St. Petersburg o Clearwater se vendió en una subasta por ejecución o por impuestos? El Secretario de Pinellas guarda el sobrante. Cómo reclamar, herederos, casas pagadas y ayuda gratis. $0 por adelantado.',
      },
    },
  },
]
