import type { Bi, County } from './types'

/**
 * Colorado county guides. Statewide rules (checked Nov 2026):
 * - Most foreclosures are run by the county Public Trustee (C.R.S. 38-38). The Public Trustee holds any overbid.
 * - Unclaimed overbid moves to the State Treasurer (Great Colorado Payback) after a holding period.
 */

const NOV: Bi = { en: 'November 2026', es: 'noviembre de 2026' }

const co = {
  sale: { en: 'Public Trustee foreclosure (non-judicial)', es: 'Ejecución por el Public Trustee (no judicial)' } as Bi,
  how: {
    en: 'In Colorado, the lender asks the county Public Trustee to start the foreclosure, and the Public Trustee runs the sale. If the winning bid is more than the lender’s debt and costs, the extra is called an overbid. The Public Trustee holds it, then pays it to junior lienholders who file to redeem or claim, and finally to the owner.',
    es: 'En Colorado, el prestamista pide al Public Trustee (fideicomisario público) del condado que inicie la ejecución, y el Public Trustee hace la venta. Si la oferta ganadora supera la deuda del prestamista y los costos, el excedente se llama overbid. El Public Trustee lo guarda, luego paga a los acreedores posteriores que lo reclamen y, al final, al dueño.',
  } as Bi,
  state: {
    en: 'Overbid that is not claimed is sent to the Colorado State Treasurer after a holding period, where it is listed with the Great Colorado Payback unclaimed property program. It can still be claimed there.',
    es: 'El overbid que nadie reclama se envía al Tesorero del Estado de Colorado después de un período, donde aparece en el programa de propiedad no reclamada Great Colorado Payback. Todavía se puede reclamar allí.',
  } as Bi,
  src: [
    { label: 'Colorado State Treasurer, Great Colorado Payback (unclaimed property)', url: 'https://colorado.findyourunclaimedproperty.com/' },
    { label: 'Colorado Public Trustees’ Association', url: 'https://www.cpta.org/' },
  ],
}

const faqFree = {
  q: { en: 'Can I claim the overbid myself?', es: '¿Puedo reclamar el overbid yo mismo?' },
  a: {
    en: 'Yes. Owners can claim directly with the Public Trustee or the State Treasurer. Many people get help when there are liens, heirs or an estate involved. If you work with us, the claim is filed through our network of licensed attorneys and you pay nothing unless money is recovered.',
    es: 'Sí. Los dueños pueden reclamar directamente al Public Trustee o al Tesorero del Estado. Muchas personas buscan ayuda cuando hay gravámenes, herederos o una herencia. Si trabaja con nosotros, el reclamo se presenta a través de nuestra red de abogados con licencia y no paga nada a menos que se recupere dinero.',
  },
}

const faqHeirs = {
  q: { en: 'The owner died. Who can claim?', es: 'El dueño falleció. ¿Quién puede reclamar?' },
  a: {
    en: 'The estate, through its personal representative, or the heirs with the right paperwork. If no probate case was opened, one may be needed first. We can explain the steps for free.',
    es: 'La herencia, por medio de su representante personal, o los herederos con los papeles correctos. Si no se abrió una sucesión, puede ser necesario abrirla primero. Le explicamos los pasos gratis.',
  },
}

const faqOther = {
  q: { en: 'What about homes sold for unpaid taxes?', es: '¿Y las casas vendidas por impuestos atrasados?' },
  a: {
    en: 'Colorado changed its tax lien and treasurer’s deed laws after the U.S. Supreme Court’s Tyler v. Hennepin County decision, so owners can now recover excess value in more cases. Tell us about your situation and we will check what applies.',
    es: 'Colorado cambió sus leyes de gravámenes fiscales y escrituras del tesorero después del fallo Tyler v. Hennepin County de la Corte Suprema de EE. UU., así que ahora los dueños pueden recuperar el valor excedente en más casos. Cuéntenos su situación y revisamos qué aplica.',
  },
}

export const COLORADO: County[] = [
  {
    slug: 'denver',
    state: 'colorado',
    name: { en: 'Denver County', es: 'el condado de Denver' },
    short: 'Denver',
    cities: ['Denver'],
    blurb: { en: 'City and County of Denver, sales run by the Denver Public Trustee.', es: 'Ciudad y condado de Denver, ventas a cargo del Public Trustee de Denver.' },
    checked: NOV,
    glance: {
      sale: co.sale,
      holder: { en: 'Denver Public Trustee, then the State Treasurer', es: 'Public Trustee de Denver, luego el Tesorero del Estado' },
      auction: { en: 'Online auction', es: 'Subasta en línea' },
    },
    intro: {
      en: 'Denver is a combined city and county, and its foreclosures are run by the Denver Public Trustee. When a home sells for more than the debt, the overbid is held by the Public Trustee and later by the State Treasurer until it is claimed.',
      es: 'Denver es una ciudad y condado combinados, y sus ejecuciones las maneja el Public Trustee de Denver. Cuando una casa se vende por más de la deuda, el overbid lo guarda el Public Trustee y después el Tesorero del Estado hasta que se reclama.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Denver.', es: 'Quién guarda el dinero en Denver.' },
        body: [
          co.how,
          {
            en: 'The Denver Public Trustee’s office is at 200 W 14th Avenue in downtown Denver. Sales are held online on the Denver auction site, and the results show the winning bid for each case.',
            es: 'La oficina del Public Trustee de Denver está en 200 W 14th Avenue, en el centro de Denver. Las ventas se hacen en línea en el sitio de subastas de Denver, y los resultados muestran la oferta ganadora de cada caso.',
          },
        ],
      },
      { title: { en: 'If the money was not claimed.', es: 'Si el dinero no se reclamó.' }, body: [co.state] },
    ],
    faqs: [faqFree, faqHeirs, faqOther],
    sources: [
      { label: 'Denver Public Trustee', url: 'https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Public-Trustee' },
      { label: 'Denver online foreclosure auctions', url: 'https://denver.realforeclose.com/' },
      ...co.src,
    ],
    meta: {
      title: { en: 'Denver Foreclosure Overbid (Surplus Funds): How to Claim | RCG', es: 'Overbid (fondos excedentes) de ejecución en Denver: cómo reclamarlos | RCG' },
      description: {
        en: 'Denver home sold at a Public Trustee foreclosure sale? The overbid is held by the Public Trustee, then the State Treasurer. How to claim it, heirs, and free help.',
        es: '¿Su casa en Denver se vendió en una venta del Public Trustee? El overbid lo guarda el Public Trustee y luego el Tesorero del Estado. Cómo reclamarlo, herederos y ayuda gratis.',
      },
    },
  },
  {
    slug: 'arapahoe',
    state: 'colorado',
    name: { en: 'Arapahoe County', es: 'el condado de Arapahoe' },
    short: 'Arapahoe',
    cities: ['Aurora', 'Centennial', 'Englewood', 'Littleton', 'Greenwood Village'],
    blurb: { en: 'Aurora and the southern Denver suburbs.', es: 'Aurora y los suburbios del sur de Denver.' },
    checked: NOV,
    glance: {
      sale: co.sale,
      holder: { en: 'Arapahoe County Public Trustee, then the State Treasurer', es: 'Public Trustee de Arapahoe, luego el Tesorero del Estado' },
      auction: { en: 'Public Trustee sale, listed on the county site', es: 'Venta del Public Trustee, publicada en el sitio del condado' },
    },
    intro: {
      en: 'Arapahoe County covers Aurora, Centennial, Englewood and Littleton. Its foreclosures are handled by the Arapahoe County Public Trustee, who holds any overbid until it is claimed or sent to the State Treasurer.',
      es: 'El condado de Arapahoe abarca Aurora, Centennial, Englewood y Littleton. Sus ejecuciones las maneja el Public Trustee del condado de Arapahoe, que guarda cualquier overbid hasta que se reclama o se envía al Tesorero del Estado.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Arapahoe.', es: 'Quién guarda el dinero en Arapahoe.' },
        body: [
          co.how,
          {
            en: 'The Arapahoe County Public Trustee publishes upcoming sales and results on the county website. Each foreclosure has a Public Trustee number that ties the sale, the bid and any overbid together.',
            es: 'El Public Trustee del condado de Arapahoe publica las próximas ventas y los resultados en el sitio web del condado. Cada ejecución tiene un número del Public Trustee que relaciona la venta, la oferta y cualquier overbid.',
          },
        ],
      },
      { title: { en: 'If the money was not claimed.', es: 'Si el dinero no se reclamó.' }, body: [co.state] },
    ],
    faqs: [
      {
        q: { en: 'I live in Aurora. Is my case in Arapahoe County?', es: 'Vivo en Aurora. ¿Mi caso es del condado de Arapahoe?' },
        a: {
          en: 'Maybe. Aurora spreads across Arapahoe, Adams and Douglas counties, and the foreclosure is handled by the Public Trustee of the county where the home sits. We can confirm it from the address.',
          es: 'Tal vez. Aurora se extiende por los condados de Arapahoe, Adams y Douglas, y la ejecución la maneja el Public Trustee del condado donde está la casa. Lo confirmamos con la dirección.',
        },
      },
      faqFree,
      faqHeirs,
    ],
    sources: [
      { label: 'Arapahoe County Public Trustee', url: 'https://www.arapahoeco.gov/your_county/county_departments/public_trustee/index.php' },
      ...co.src,
    ],
    meta: {
      title: { en: 'Arapahoe County Foreclosure Overbid (Surplus Funds) | RCG', es: 'Overbid (fondos excedentes) de ejecución en Arapahoe | RCG' },
      description: {
        en: 'Aurora, Centennial or Littleton home sold at a Public Trustee sale? The overbid is held by the Arapahoe County Public Trustee. How to claim, heirs, and free help.',
        es: '¿Su casa en Aurora, Centennial o Littleton se vendió en una venta del Public Trustee? El overbid lo guarda el Public Trustee de Arapahoe. Cómo reclamar, herederos y ayuda gratis.',
      },
    },
  },
  {
    slug: 'el-paso',
    state: 'colorado',
    name: { en: 'El Paso County', es: 'el condado de El Paso' },
    short: 'El Paso',
    cities: ['Colorado Springs', 'Fountain', 'Monument', 'Manitou Springs', 'Security-Widefield'],
    blurb: { en: 'Colorado Springs, with online sales on Wednesdays.', es: 'Colorado Springs, con ventas en línea los miércoles.' },
    checked: NOV,
    glance: {
      sale: co.sale,
      holder: { en: 'El Paso County Public Trustee, then the State Treasurer', es: 'Public Trustee de El Paso, luego el Tesorero del Estado' },
      auction: { en: 'Online, Wednesdays at 10:00 a.m.', es: 'En línea, los miércoles a las 10:00 a.m.' },
    },
    intro: {
      en: 'El Paso County, home to Colorado Springs, is the most populous county in Colorado. Its Public Trustee runs foreclosure sales online and holds any overbid until it is claimed or sent to the State Treasurer.',
      es: 'El condado de El Paso, donde está Colorado Springs, es el más poblado de Colorado. Su Public Trustee hace las ventas por ejecución en línea y guarda cualquier overbid hasta que se reclama o se envía al Tesorero del Estado.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in El Paso County.', es: 'Quién guarda el dinero en el condado de El Paso.' },
        body: [
          co.how,
          {
            en: 'The El Paso County Public Trustee is at 1675 Garden of the Gods Road in Colorado Springs. Sales are held online on Wednesdays at 10:00 a.m.',
            es: 'El Public Trustee del condado de El Paso está en 1675 Garden of the Gods Road, Colorado Springs. Las ventas se hacen en línea los miércoles a las 10:00 a.m.',
          },
          {
            en: 'Colorado Springs has a large military population. Service members and veterans have extra foreclosure protections, and military families who moved away often do not know an overbid is waiting.',
            es: 'Colorado Springs tiene una gran población militar. Los miembros del servicio y veteranos tienen protecciones adicionales contra ejecuciones, y las familias militares que se mudaron muchas veces no saben que hay un overbid esperando.',
          },
        ],
      },
      { title: { en: 'If the money was not claimed.', es: 'Si el dinero no se reclamó.' }, body: [co.state] },
    ],
    faqs: [
      {
        q: { en: 'We moved out of state. Can we still claim?', es: 'Nos mudamos a otro estado. ¿Todavía podemos reclamar?' },
        a: {
          en: 'Yes. The claim is made by mail or online with the Public Trustee or the State Treasurer. You do not need to be in Colorado.',
          es: 'Sí. El reclamo se hace por correo o en línea con el Public Trustee o el Tesorero del Estado. No necesita estar en Colorado.',
        },
      },
      faqFree,
      faqHeirs,
    ],
    sources: [
      { label: 'El Paso County Public Trustee', url: 'https://publictrustee.elpasoco.com/' },
      ...co.src,
    ],
    meta: {
      title: { en: 'El Paso County (Colorado Springs) Foreclosure Overbid | RCG', es: 'Overbid de ejecución en El Paso (Colorado Springs) | RCG' },
      description: {
        en: 'Colorado Springs home sold at a Public Trustee sale? The overbid is held by the El Paso County Public Trustee. How to claim, military families, heirs, and free help.',
        es: '¿Su casa en Colorado Springs se vendió en una venta del Public Trustee? El overbid lo guarda el Public Trustee de El Paso. Cómo reclamar, familias militares, herederos y ayuda gratis.',
      },
    },
  },
]
