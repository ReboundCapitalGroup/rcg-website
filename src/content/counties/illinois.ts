import type { Bi, County } from './types'

/**
 * Cook County, Illinois (checked Nov 2026):
 * - Foreclosure is judicial (Illinois Mortgage Foreclosure Law, 735 ILCS 5/15-1512). Sales are run by the sheriff or by a
 *   private selling officer such as The Judicial Sales Corporation.
 * - Surplus is held for the court (deposited with the Clerk of the Circuit Court or held by the selling officer) and paid out
 *   on a Petition for Turnover of Surplus Funds in the Chancery Division.
 */

const NOV: Bi = { en: 'November 2026', es: 'noviembre de 2026' }

export const ILLINOIS: County[] = [
  {
    slug: 'cook',
    state: 'illinois',
    name: { en: 'Cook County', es: 'el condado de Cook' },
    short: 'Cook',
    cities: ['Chicago', 'Cicero', 'Evanston', 'Arlington Heights', 'Schaumburg', 'Oak Lawn'],
    blurb: { en: 'Chicago and its suburbs, handled in the Chancery Division.', es: 'Chicago y sus suburbios, en la División de Chancery.' },
    checked: NOV,
    glance: {
      sale: { en: 'Judicial foreclosure in the Chancery Division', es: 'Ejecución judicial en la División de Chancery' },
      holder: { en: 'Held for the court, paid on a petition for turnover', es: 'Guardado para el tribunal, se paga con una petición de entrega' },
      auction: { en: 'Sheriff or a private selling officer', es: 'El sheriff o un oficial de venta privado' },
    },
    intro: {
      en: 'Cook County has the largest foreclosure court in Illinois. When a home sells for more than the judgment, the surplus is held for the court until someone with a right to it files a petition and a judge orders it paid.',
      es: 'El condado de Cook tiene el tribunal de ejecuciones más grande de Illinois. Cuando una casa se vende por más de la sentencia, el sobrante se guarda para el tribunal hasta que alguien con derecho presenta una petición y un juez ordena pagarlo.',
    },
    sections: [
      {
        title: { en: 'Who holds the money in Cook County.', es: 'Quién guarda el dinero en el condado de Cook.' },
        body: [
          {
            en: 'Mortgage foreclosures are heard in the Chancery Division of the Circuit Court of Cook County, at the Richard J. Daley Center in downtown Chicago. After the sale, the court enters an order approving it. Any surplus is either deposited with the Clerk of the Circuit Court or held by the selling officer for the court.',
            es: 'Las ejecuciones hipotecarias se ven en la División de Chancery del Tribunal de Circuito del condado de Cook, en el Richard J. Daley Center, en el centro de Chicago. Después de la venta, el tribunal emite una orden que la aprueba. El sobrante se deposita con el Secretario del Tribunal de Circuito o lo guarda el oficial de venta para el tribunal.',
          },
        ],
      },
      {
        title: { en: 'How sales work in Cook County.', es: 'Cómo son las ventas en el condado de Cook.' },
        body: [
          {
            en: 'Cook County is different from most places: many sales are run by private selling officers, such as The Judicial Sales Corporation, instead of the sheriff. The order approving the sale and the selling officer’s report show the sale price, what was paid out and whether a surplus remains.',
            es: 'El condado de Cook es distinto a la mayoría de lugares: muchas ventas las hacen oficiales de venta privados, como The Judicial Sales Corporation, en lugar del sheriff. La orden que aprueba la venta y el informe del oficial muestran el precio, lo que se pagó y si queda sobrante.',
          },
        ],
      },
      {
        title: { en: 'How to claim it.', es: 'Cómo reclamarlo.' },
        body: [
          {
            en: 'The former owner, an heir or a junior lienholder files a Petition for Turnover of Surplus Funds in the foreclosure case, with notice to the other parties. The judge decides who has priority, and then orders the money paid. A second mortgage, condo association or judgment creditor can be paid before the owner.',
            es: 'El antiguo dueño, un heredero o un acreedor posterior presenta una Petition for Turnover of Surplus Funds (petición de entrega de fondos excedentes) en el caso de ejecución, con aviso a las otras partes. El juez decide quién tiene prioridad y luego ordena el pago. Una segunda hipoteca, la asociación de condominio o un acreedor judicial pueden cobrar antes que el dueño.',
          },
          {
            en: 'Money that sits unclaimed for a long time can be turned over to the Illinois State Treasurer as unclaimed property. It can still be claimed there, with more paperwork.',
            es: 'El dinero que queda mucho tiempo sin reclamar puede entregarse al Tesorero del Estado de Illinois como propiedad no reclamada. Todavía se puede reclamar allí, con más papeleo.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: 'My condo association foreclosed. Is that the same?', es: 'Mi asociación de condominio ejecutó. ¿Es lo mismo?' },
        a: {
          en: 'Not always. In Illinois many condo associations use an eviction-style case in the municipal courts instead of a foreclosure, and those cases usually do not create a sale surplus. A mortgage or lien foreclosure in Chancery can. We check which one you had.',
          es: 'No siempre. En Illinois muchas asociaciones de condominio usan un caso tipo desalojo en los tribunales municipales en lugar de una ejecución, y esos casos por lo general no generan sobrante. Una ejecución de hipoteca o gravamen en Chancery sí puede. Revisamos cuál fue su caso.',
        },
      },
      {
        q: { en: 'Can I file the petition myself?', es: '¿Puedo presentar la petición yo mismo?' },
        a: {
          en: 'Yes. Cook County has a self-help center in the Daley Center. Many people get help because priority fights with lienholders are common. If you work with us, the claim is filed through our network of licensed attorneys and you pay nothing unless money is recovered.',
          es: 'Sí. El condado de Cook tiene un centro de autoayuda en el Daley Center. Muchas personas buscan ayuda porque las disputas de prioridad con acreedores son comunes. Si trabaja con nosotros, el reclamo se presenta a través de nuestra red de abogados con licencia y no paga nada a menos que se recupere dinero.',
        },
      },
      {
        q: { en: 'The owner passed away. Can the family claim?', es: 'El dueño falleció. ¿La familia puede reclamar?' },
        a: {
          en: 'Usually, yes, through the estate. If no estate was opened, the Cook County Probate Division or a small estate affidavit may be needed first. We coordinate it with the petition.',
          es: 'Por lo general, sí, a través de la herencia. Si no se abrió una, puede ser necesario acudir primero a la División de Sucesiones del condado de Cook o usar una declaración jurada de herencia pequeña. Lo coordinamos con la petición.',
        },
      },
      {
        q: { en: 'Is there a deadline?', es: '¿Hay una fecha límite?' },
        a: {
          en: 'There is no reason to wait, and money that sits unclaimed can be moved to the State Treasurer. Act fast once you know a sale happened.',
          es: 'No hay razón para esperar, y el dinero sin reclamar puede pasar al Tesorero del Estado. Actúe rápido en cuanto sepa que hubo una venta.',
        },
      },
    ],
    sources: [
      { label: 'Circuit Court of Cook County, Chancery Division', url: 'https://www.cookcountycourt.org/division/chancery-division' },
      { label: 'Clerk of the Circuit Court of Cook County', url: 'https://www.cookcountyclerkofcourt.org/' },
      { label: 'Illinois Mortgage Foreclosure Law, 735 ILCS 5/15-1512', url: 'https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=073500050K15-1512' },
      { label: 'Illinois State Treasurer, unclaimed property', url: 'https://icash.illinoistreasurer.gov/' },
    ],
    meta: {
      title: { en: 'Cook County (Chicago) Foreclosure Surplus Funds: How to Claim | RCG', es: 'Fondos excedentes de ejecución en Cook (Chicago): cómo reclamarlos | RCG' },
      description: {
        en: 'Chicago or Cook County home sold at a foreclosure sale? Surplus is paid out on a Petition for Turnover in the Chancery Division. How it works, heirs, and free help. $0 upfront.',
        es: '¿Su casa en Chicago o el condado de Cook se vendió en una ejecución? El sobrante se paga con una petición de entrega en la División de Chancery. Cómo funciona, herederos y ayuda gratis. $0 por adelantado.',
      },
    },
  },
]
