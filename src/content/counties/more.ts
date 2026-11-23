import type { Bi, County } from './types'

/**
 * Single-county states (checked Nov 2026): Tennessee (Davidson), California (Los Angeles), Texas (Harris),
 * Nevada (Clark), Michigan (Wayne). No exact deadlines on the page (site rule).
 */

const NOV: Bi = { en: 'November 2026', es: 'noviembre de 2026' }

const selfFaq = (how: Bi) => ({
  q: { en: 'Can I claim it myself?', es: '¿Puedo reclamarlo yo mismo?' },
  a: {
    en: `Yes. ${how.en} Many people get help because the paperwork and liens are easy to get wrong. If you work with us, the claim is filed through our network of licensed attorneys and you pay nothing unless money is recovered.`,
    es: `Sí. ${how.es} Muchas personas buscan ayuda porque es fácil equivocarse con el papeleo y los gravámenes. Si trabaja con nosotros, el reclamo se presenta a través de nuestra red de abogados con licencia y no paga nada a menos que se recupere dinero.`,
  },
})

const heirsFaq = {
  q: { en: 'The owner passed away. Can the family claim?', es: 'El dueño falleció. ¿La familia puede reclamar?' },
  a: {
    en: 'Usually, yes, with proof of who can act for the estate. That can mean a probate case or an heirship affidavit first. We coordinate it with the claim so nothing is lost while the estate is sorted out.',
    es: 'Por lo general, sí, con prueba de quién puede actuar por la herencia. Eso puede requerir primero una sucesión o una declaración de herederos. Lo coordinamos junto con el reclamo para que no se pierda nada mientras se resuelve la herencia.',
  },
}

const fastFaq = (en: string, es: string) => ({
  q: { en: 'Is there a deadline?', es: '¿Hay una fecha límite?' },
  a: { en, es },
})

export const TENNESSEE: County[] = [
  {
    slug: 'davidson',
    state: 'tennessee',
    name: { en: 'Davidson County', es: 'el condado de Davidson' },
    short: 'Davidson',
    cities: ['Nashville', 'Antioch', 'Madison', 'Hermitage', 'Goodlettsville'],
    blurb: { en: 'Nashville, where tax sale excess is held by the Chancery Court.', es: 'Nashville, donde el excedente de ventas por impuestos lo guarda el Chancery Court.' },
    checked: NOV,
    glance: {
      sale: { en: 'Trustee’s sale for mortgages; court sale for taxes', es: 'Venta del fideicomisario por hipotecas; venta judicial por impuestos' },
      holder: { en: 'Clerk & Master of the Chancery Court (tax sales)', es: 'Clerk & Master del Chancery Court (ventas por impuestos)' },
      auction: { en: 'Delinquent tax sales by the Clerk & Master', es: 'Ventas por impuestos atrasados del Clerk & Master' },
    },
    intro: {
      en: 'Davidson County and Nashville share a metro government. Home values have climbed fast there, so when a home is sold over unpaid property taxes or a mortgage, the sale can bring in far more than what was owed.',
      es: 'El condado de Davidson y Nashville comparten un gobierno metropolitano. Los valores de vivienda han subido rápido allí, así que cuando una casa se vende por impuestos atrasados o por una hipoteca, la venta puede dejar mucho más de lo que se debía.',
    },
    sections: [
      {
        title: { en: 'Tax sales and the Chancery Court.', es: 'Ventas por impuestos y el Chancery Court.' },
        body: [
          {
            en: 'Delinquent property tax sales in Davidson County are handled through the Chancery Court, and the Clerk & Master conducts them. When a tax sale brings in more than the taxes, interest and costs, the excess stays with the Clerk & Master in the court case. The former owner or other interested parties ask for it with a motion to claim excess sale proceeds under Tennessee law.',
            es: 'Las ventas por impuestos atrasados en el condado de Davidson pasan por el Chancery Court, y las hace el Clerk & Master. Cuando una venta por impuestos deja más que los impuestos, intereses y costos, el excedente se queda con el Clerk & Master en el caso. El antiguo dueño u otros interesados lo piden con una moción para reclamar el excedente de la venta (motion to claim excess sale proceeds) según la ley de Tennessee.',
          },
        ],
      },
      {
        title: { en: 'Mortgage foreclosures.', es: 'Ejecuciones hipotecarias.' },
        body: [
          {
            en: 'Most Tennessee mortgages use a deed of trust, so foreclosure is a trustee’s sale outside of court. If the sale brings in more than the debt, the trustee must pay the surplus to junior lienholders and then the former owner. When it is unclear who is entitled, the trustee may deposit the money with a court.',
            es: 'La mayoría de las hipotecas en Tennessee usan una escritura de fideicomiso, así que la ejecución es una venta del fideicomisario fuera del tribunal. Si la venta deja más que la deuda, el fideicomisario debe pagar el sobrante a los acreedores posteriores y luego al antiguo dueño. Cuando no está claro a quién le corresponde, el fideicomisario puede depositar el dinero en un tribunal.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: 'How do I know if money is waiting?', es: '¿Cómo sé si hay dinero esperando?' },
        a: {
          en: 'For tax sales, the Chancery Court case shows the sale price and the amount held. For trustee’s sales, the trustee’s records show the bid. Send us the address and we will check both for free.',
          es: 'En ventas por impuestos, el caso del Chancery Court muestra el precio de venta y el monto guardado. En ventas del fideicomisario, los registros del fideicomisario muestran la oferta. Envíenos la dirección y revisamos ambos gratis.',
        },
      },
      selfFaq({ en: 'Owners can file a motion in the Chancery Court case.', es: 'Los dueños pueden presentar una moción en el caso del Chancery Court.' }),
      heirsFaq,
      fastFaq(
        'Yes. Tennessee limits how long excess from a tax sale is held for claimants before it can be paid elsewhere. Act fast once you learn of a sale.',
        'Sí. Tennessee limita cuánto tiempo se guarda el excedente de una venta por impuestos para los reclamantes antes de que pueda destinarse a otro lugar. Actúe rápido en cuanto sepa de una venta.',
      ),
    ],
    sources: [
      { label: 'Davidson County Chancery Court, Clerk & Master', url: 'https://chanceryclerkandmaster.nashville.gov/' },
      { label: 'Tennessee Code 67-5-2702, excess proceeds from tax sales', url: 'https://law.justia.com/codes/tennessee/title-67/chapter-5/part-27/section-67-5-2702/' },
    ],
    meta: {
      title: { en: 'Davidson County (Nashville) Surplus & Excess Sale Proceeds | RCG', es: 'Excedentes de ventas en Davidson (Nashville) | RCG' },
      description: {
        en: 'Nashville home sold for taxes or at a trustee’s sale? Tax sale excess is held by the Chancery Court Clerk & Master. How to claim, heirs, and free help. $0 upfront.',
        es: '¿Su casa en Nashville se vendió por impuestos o en una venta del fideicomisario? El excedente de impuestos lo guarda el Clerk & Master del Chancery Court. Cómo reclamar, herederos y ayuda gratis.',
      },
    },
  },
]

export const CALIFORNIA: County[] = [
  {
    slug: 'los-angeles',
    state: 'california',
    name: { en: 'Los Angeles County', es: 'el condado de Los Ángeles' },
    short: 'Los Angeles',
    cities: ['Los Angeles', 'Long Beach', 'Santa Clarita', 'Glendale', 'Lancaster', 'Palmdale', 'Pomona'],
    blurb: { en: 'The nation’s largest county, with tax-sale excess claimed through the Treasurer and Tax Collector.', es: 'El condado más grande del país, con excedentes de ventas por impuestos reclamados ante el Tesorero y Recaudador.' },
    checked: NOV,
    glance: {
      sale: { en: 'Trustee’s sale for mortgages; tax auction for taxes', es: 'Venta del fideicomisario por hipotecas; subasta por impuestos' },
      holder: { en: 'The trustee (mortgage) or the Treasurer and Tax Collector (tax)', es: 'El fideicomisario (hipoteca) o el Tesorero y Recaudador (impuestos)' },
      auction: { en: 'Tax auctions held online', es: 'Subastas por impuestos en línea' },
    },
    intro: {
      en: 'Los Angeles County has the highest home values of any large county in the country, so even a small debt can lead to a sale that leaves a large surplus. Who holds the money depends on whether the home was sold by a mortgage trustee or at a tax auction.',
      es: 'El condado de Los Ángeles tiene los valores de vivienda más altos entre los condados grandes del país, así que hasta una deuda pequeña puede llevar a una venta que deja un sobrante grande. Quién guarda el dinero depende de si la casa la vendió un fideicomisario hipotecario o una subasta por impuestos.',
    },
    sections: [
      {
        title: { en: 'Mortgage foreclosures (trustee’s sales).', es: 'Ejecuciones hipotecarias (ventas del fideicomisario).' },
        body: [
          {
            en: 'Most California foreclosures are trustee’s sales under a deed of trust. If the sale brings in more than the debt, the trustee must send notice to everyone with a possible claim and pay the surplus to junior lienholders and then the former owner. Claims go to the trustee, and if the trustee cannot decide, it can deposit the money with the court (Civil Code 2924j).',
            es: 'La mayoría de las ejecuciones en California son ventas del fideicomisario bajo una escritura de fideicomiso. Si la venta deja más que la deuda, el fideicomisario debe avisar a todos los que podrían reclamar y pagar el sobrante a los acreedores posteriores y luego al antiguo dueño. Los reclamos se envían al fideicomisario, y si este no puede decidir, puede depositar el dinero en el tribunal (Código Civil 2924j).',
          },
        ],
      },
      {
        title: { en: 'Tax auctions.', es: 'Subastas por impuestos.' },
        body: [
          {
            en: 'Homes sold for unpaid property taxes are sold by the Los Angeles County Treasurer and Tax Collector, now at online auctions. After a tax sale, parties of interest receive notice and can file a claim for excess proceeds with the Treasurer and Tax Collector (Revenue and Taxation Code 4675). The office is in the Kenneth Hahn Hall of Administration, 500 W Temple Street.',
            es: 'Las casas vendidas por impuestos atrasados las vende el Tesorero y Recaudador de Impuestos del condado de Los Ángeles, ahora en subastas en línea. Después de una venta por impuestos, las partes interesadas reciben aviso y pueden presentar un reclamo de excedentes ante el Tesorero y Recaudador (Código de Ingresos e Impuestos 4675). La oficina está en el Kenneth Hahn Hall of Administration, 500 W Temple Street.',
          },
          {
            en: 'California limits how someone can be paid for helping with a tax-sale excess claim, and requires a written assignment in a set form. We follow those rules.',
            es: 'California limita cómo se le puede pagar a alguien por ayudar con un reclamo de excedentes de una venta por impuestos, y exige una cesión por escrito en un formato establecido. Seguimos esas reglas.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: 'How do I know which kind of sale it was?', es: '¿Cómo sé qué tipo de venta fue?' },
        a: {
          en: 'A trustee’s deed upon sale is recorded after a mortgage foreclosure; a tax deed is recorded after a tax sale. Send us the address and we will check the recorded documents for free.',
          es: 'Después de una ejecución hipotecaria se registra un trustee’s deed upon sale; después de una venta por impuestos se registra una escritura fiscal (tax deed). Envíenos la dirección y revisamos los documentos registrados gratis.',
        },
      },
      selfFaq({ en: 'Owners can send a claim to the trustee, or file a tax-sale claim with the Treasurer and Tax Collector.', es: 'Los dueños pueden enviar un reclamo al fideicomisario o presentar un reclamo de venta por impuestos ante el Tesorero y Recaudador.' }),
      heirsFaq,
      fastFaq(
        'Yes. Tax-sale excess claims have a set claim period after notice, and trustees only hold surplus for a limited time before depositing it elsewhere. Act fast.',
        'Sí. Los reclamos de excedentes de ventas por impuestos tienen un plazo después del aviso, y los fideicomisarios solo guardan el sobrante por un tiempo limitado antes de depositarlo en otro lugar. Actúe rápido.',
      ),
    ],
    sources: [
      { label: 'Los Angeles County Treasurer and Tax Collector, excess proceeds', url: 'https://ttc.lacounty.gov/excess-proceeds/' },
      { label: 'California Revenue and Taxation Code 4675', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=4675.&lawCode=RTC' },
      { label: 'California Civil Code 2924j', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=2924j.&lawCode=CIV' },
    ],
    meta: {
      title: { en: 'Los Angeles County Foreclosure & Tax Sale Excess Proceeds | RCG', es: 'Excedentes de ejecución y ventas por impuestos en Los Ángeles | RCG' },
      description: {
        en: 'LA County home sold at a trustee’s sale or tax auction? Learn who holds the surplus, how to claim excess proceeds from the Treasurer and Tax Collector, and get free help.',
        es: '¿Su casa en el condado de Los Ángeles se vendió en una venta del fideicomisario o una subasta por impuestos? Quién guarda el sobrante, cómo reclamar ante el Tesorero y Recaudador, y ayuda gratis.',
      },
    },
  },
]

export const TEXAS: County[] = [
  {
    slug: 'harris',
    state: 'texas',
    name: { en: 'Harris County', es: 'el condado de Harris' },
    short: 'Harris',
    cities: ['Houston', 'Pasadena', 'Baytown', 'Katy', 'Humble', 'Tomball'],
    blurb: { en: 'Houston, with monthly sales and tax excess held by the District Clerk.', es: 'Houston, con ventas mensuales y excedentes de impuestos guardados por el Secretario de Distrito.' },
    checked: NOV,
    glance: {
      sale: { en: 'Trustee’s sale for mortgages; sheriff or constable sale for taxes', es: 'Venta del fideicomisario por hipotecas; venta del sheriff o alguacil por impuestos' },
      holder: { en: 'Harris County District Clerk (tax sales)', es: 'Secretario de Distrito del condado de Harris (ventas por impuestos)' },
      auction: { en: 'First Tuesday of the month, Bayou City Event Center', es: 'Primer martes del mes, Bayou City Event Center' },
    },
    intro: {
      en: 'Harris County, home to Houston, holds foreclosure and tax sales on the first Tuesday of each month. When a tax sale brings in more than the taxes owed, the excess is paid into the registry of the District Clerk and waits for a claim.',
      es: 'El condado de Harris, donde está Houston, hace ventas por ejecución y por impuestos el primer martes de cada mes. Cuando una venta por impuestos deja más que los impuestos adeudados, el excedente se deposita en el registro del Secretario de Distrito y espera un reclamo.',
    },
    sections: [
      {
        title: { en: 'How sales work in Harris County.', es: 'Cómo son las ventas en el condado de Harris.' },
        body: [
          {
            en: 'Texas sales happen on the first Tuesday of the month. In Harris County, tax sales are held at the Bayou City Event Center, 9401 Knight Road in Houston. Mortgage foreclosures are trustee’s sales at the place the county designates.',
            es: 'En Texas las ventas se hacen el primer martes del mes. En el condado de Harris, las ventas por impuestos son en el Bayou City Event Center, 9401 Knight Road, Houston. Las ejecuciones hipotecarias son ventas del fideicomisario en el lugar que designa el condado.',
          },
        ],
      },
      {
        title: { en: 'Who holds the money.', es: 'Quién guarda el dinero.' },
        body: [
          {
            en: 'After a tax sale, the excess is paid into the registry of the court and held by the Harris County District Clerk. The former owner or a lienholder files a petition in the tax suit asking the court to release it (Texas Tax Code 34.04). Texas puts limits on assigning the right to these funds, which protects owners.',
            es: 'Después de una venta por impuestos, el excedente se deposita en el registro del tribunal y lo guarda el Secretario de Distrito del condado de Harris. El antiguo dueño o un acreedor presenta una petición en el caso de impuestos pidiendo al tribunal que lo libere (Código Tributario de Texas 34.04). Texas limita la cesión del derecho a estos fondos, lo que protege a los dueños.',
          },
          {
            en: 'After a mortgage trustee’s sale, the trustee pays any surplus to junior lienholders and then the former owner. Texas homestead and HOA cases often leave surplus because the debt is small compared with the home’s value.',
            es: 'Después de una venta hipotecaria del fideicomisario, el fideicomisario paga el sobrante a los acreedores posteriores y luego al antiguo dueño. Los casos de vivienda familiar (homestead) y de HOA en Texas muchas veces dejan sobrante porque la deuda es pequeña comparada con el valor de la casa.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: 'My HOA foreclosed on my Houston home. Could there be surplus?', es: 'Mi HOA ejecutó mi casa en Houston. ¿Puede haber sobrante?' },
        a: {
          en: 'Yes. HOA debts are often a few thousand dollars, so an HOA sale can leave a real surplus. Texas also gives owners a right to redeem after some HOA sales. We check both for free.',
          es: 'Sí. Las deudas de HOA muchas veces son de unos pocos miles de dólares, así que una venta de la HOA puede dejar un sobrante real. Texas también da a los dueños un derecho de redención después de algunas ventas de HOA. Revisamos ambos gratis.',
        },
      },
      selfFaq({ en: 'Owners can file a petition for excess proceeds in the tax suit.', es: 'Los dueños pueden presentar una petición de excedentes en el caso de impuestos.' }),
      heirsFaq,
      fastFaq(
        'Yes. Tax-sale excess is held for claimants only for a limited time before it can go to the taxing units. Act fast.',
        'Sí. El excedente de una venta por impuestos se guarda para los reclamantes solo por un tiempo limitado antes de que pueda pasar a las entidades fiscales. Actúe rápido.',
      ),
    ],
    sources: [
      { label: 'Harris County District Clerk', url: 'https://www.hcdistrictclerk.com/' },
      { label: 'Texas Tax Code 34.04, excess proceeds', url: 'https://statutes.capitol.texas.gov/Docs/TX/htm/TX.34.htm#34.04' },
    ],
    meta: {
      title: { en: 'Harris County (Houston) Foreclosure & Tax Sale Excess Proceeds | RCG', es: 'Excedentes de ejecución y ventas por impuestos en Harris (Houston) | RCG' },
      description: {
        en: 'Houston home sold at a tax sale or trustee’s sale? Tax excess is held by the Harris County District Clerk. How the petition works, HOA cases, heirs, and free help.',
        es: '¿Su casa en Houston se vendió en una venta por impuestos o del fideicomisario? El excedente de impuestos lo guarda el Secretario de Distrito de Harris. Cómo funciona la petición, casos de HOA, herederos y ayuda gratis.',
      },
    },
  },
]

export const NEVADA: County[] = [
  {
    slug: 'clark',
    state: 'nevada',
    name: { en: 'Clark County', es: 'el condado de Clark' },
    short: 'Clark',
    cities: ['Las Vegas', 'Henderson', 'North Las Vegas', 'Paradise', 'Spring Valley', 'Enterprise'],
    blurb: { en: 'Las Vegas, with HOA and tax sales that often leave excess.', es: 'Las Vegas, con ventas de HOA y por impuestos que muchas veces dejan excedente.' },
    checked: NOV,
    glance: {
      sale: { en: 'Trustee’s sale for mortgages and HOA liens; tax sale by the Treasurer', es: 'Venta del fideicomisario por hipotecas y HOA; venta por impuestos del Tesorero' },
      holder: { en: 'The trustee (mortgage, HOA) or the Clark County Treasurer (tax)', es: 'El fideicomisario (hipoteca, HOA) o el Tesorero del condado de Clark (impuestos)' },
      auction: { en: 'Trustee’s sales at a county-designated location', es: 'Ventas del fideicomisario en un lugar designado por el condado' },
    },
    intro: {
      en: 'Clark County covers Las Vegas and Henderson. Nevada HOAs can foreclose on their liens, and Clark County sells tax-delinquent property, so surplus comes up often. Who holds it depends on the kind of sale.',
      es: 'El condado de Clark abarca Las Vegas y Henderson. En Nevada las HOA pueden ejecutar sus gravámenes, y el condado de Clark vende propiedades con impuestos atrasados, así que los sobrantes son comunes. Quién los guarda depende del tipo de venta.',
    },
    sections: [
      {
        title: { en: 'Mortgage and HOA sales.', es: 'Ventas hipotecarias y de HOA.' },
        body: [
          {
            en: 'Most Nevada foreclosures, including HOA lien foreclosures, are trustee’s sales outside of court. If the sale brings in more than the debt, the trustee pays the surplus to junior lienholders and then the former owner. HOA sales often leave the most, since the HOA lien is small compared with the home’s value.',
            es: 'La mayoría de las ejecuciones en Nevada, incluidas las de gravámenes de HOA, son ventas del fideicomisario fuera del tribunal. Si la venta deja más que la deuda, el fideicomisario paga el sobrante a los acreedores posteriores y luego al antiguo dueño. Las ventas de HOA muchas veces dejan más, porque el gravamen de la HOA es pequeño comparado con el valor de la casa.',
          },
        ],
      },
      {
        title: { en: 'Tax sales.', es: 'Ventas por impuestos.' },
        body: [
          {
            en: 'When the Clark County Treasurer sells tax trust property, excess proceeds are held for the former owner. The claim is made in writing to the Treasurer within a limited period (NRS 361.610). Nevada caps what a recovery service can charge for these claims at 10%.',
            es: 'Cuando el Tesorero del condado de Clark vende propiedad en fideicomiso fiscal, los excedentes se guardan para el antiguo dueño. El reclamo se hace por escrito al Tesorero dentro de un período limitado (NRS 361.610). Nevada pone un tope de 10% a lo que un servicio de recuperación puede cobrar por estos reclamos.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: 'My HOA sold my house. Is there money left?', es: 'Mi HOA vendió mi casa. ¿Queda dinero?' },
        a: {
          en: 'Often, yes. The HOA only needed to collect its lien and costs. If the sale brought in more, the extra goes to junior lienholders and then to you. We check the trustee’s deed and sale records for free.',
          es: 'Muchas veces, sí. La HOA solo necesitaba cobrar su gravamen y costos. Si la venta dejó más, el excedente va a los acreedores posteriores y luego a usted. Revisamos la escritura del fideicomisario y los registros de la venta gratis.',
        },
      },
      selfFaq({ en: 'Owners can send a claim to the trustee, or a written claim to the Treasurer for tax sales.', es: 'Los dueños pueden enviar un reclamo al fideicomisario, o un reclamo por escrito al Tesorero en ventas por impuestos.' }),
      heirsFaq,
      fastFaq(
        'Yes. Tax-sale excess must be claimed within a limited period, and trustees will not hold surplus forever. Act fast.',
        'Sí. El excedente de una venta por impuestos debe reclamarse dentro de un período limitado, y los fideicomisarios no guardan el sobrante para siempre. Actúe rápido.',
      ),
    ],
    sources: [
      { label: 'Clark County Treasurer', url: 'https://www.clarkcountynv.gov/government/elected_officials/county_treasurer/' },
      { label: 'Nevada Revised Statutes 361.610', url: 'https://www.leg.state.nv.us/nrs/nrs-361.html#NRS361Sec610' },
    ],
    meta: {
      title: { en: 'Clark County (Las Vegas) Foreclosure & Tax Sale Excess Proceeds | RCG', es: 'Excedentes de ejecución y ventas por impuestos en Clark (Las Vegas) | RCG' },
      description: {
        en: 'Las Vegas or Henderson home sold at an HOA, mortgage or tax sale? Learn who holds the surplus, how to claim it, Nevada’s 10% fee cap, and get free help.',
        es: '¿Su casa en Las Vegas o Henderson se vendió en una venta de HOA, hipotecaria o por impuestos? Quién guarda el sobrante, cómo reclamarlo, el tope de 10% de Nevada y ayuda gratis.',
      },
    },
  },
]

export const MICHIGAN: County[] = [
  {
    slug: 'wayne',
    state: 'michigan',
    name: { en: 'Wayne County', es: 'el condado de Wayne' },
    short: 'Wayne',
    cities: ['Detroit', 'Dearborn', 'Livonia', 'Westland', 'Taylor', 'Canton'],
    blurb: { en: 'Detroit, where tax foreclosure remaining proceeds require an early form.', es: 'Detroit, donde los fondos restantes de ejecuciones por impuestos requieren un formulario temprano.' },
    checked: NOV,
    glance: {
      sale: { en: 'Tax foreclosure by the Treasurer; mortgage foreclosure by advertisement', es: 'Ejecución por impuestos del Tesorero; ejecución hipotecaria por anuncio' },
      holder: { en: 'Wayne County Treasurer (tax), then the Circuit Court', es: 'Tesorero del condado de Wayne (impuestos), luego el Tribunal de Circuito' },
      auction: { en: 'Treasurer’s online tax auction; sheriff’s sale for mortgages', es: 'Subasta en línea del Tesorero; venta del sheriff por hipotecas' },
    },
    intro: {
      en: 'Wayne County, home to Detroit, has more tax foreclosures than anywhere else in Michigan. Since 2021, owners can recover the “remaining proceeds” when a tax-foreclosed home sells for more than the taxes owed, but they must act early.',
      es: 'El condado de Wayne, donde está Detroit, tiene más ejecuciones por impuestos que cualquier otro lugar de Michigan. Desde 2021, los dueños pueden recuperar los “fondos restantes” (remaining proceeds) cuando una casa ejecutada por impuestos se vende por más de lo que se debía, pero deben actuar temprano.',
    },
    sections: [
      {
        title: { en: 'Tax foreclosure remaining proceeds.', es: 'Fondos restantes de ejecuciones por impuestos.' },
        body: [
          {
            en: 'After the Michigan Supreme Court’s Rafaeli decision, Michigan changed its law so former owners can claim what is left after a tax-foreclosed property is sold. The process has two steps: first, file Form 5743 (Notice of Intention to Claim Interest) with the Wayne County Treasurer by the deadline set in the law, which comes early, often before the property is even sold. Then, after the sale, file a motion in the Third Circuit Court to claim the remaining proceeds.',
            es: 'Después del fallo Rafaeli de la Corte Suprema de Michigan, el estado cambió su ley para que los antiguos dueños puedan reclamar lo que queda después de vender una propiedad ejecutada por impuestos. El proceso tiene dos pasos: primero, presentar el Formulario 5743 (aviso de intención de reclamar) ante el Tesorero del condado de Wayne dentro del plazo que fija la ley, que llega temprano, muchas veces antes de que la propiedad se venda. Luego, después de la venta, presentar una moción en el Tercer Tribunal de Circuito para reclamar los fondos restantes.',
          },
          {
            en: 'The Wayne County Treasurer’s office is at 400 Monroe Street, 5th Floor, in Detroit. Missing the first step can cost the claim, so this is the one place where acting early matters most.',
            es: 'La oficina del Tesorero del condado de Wayne está en 400 Monroe Street, 5.º piso, Detroit. Si se pierde el primer paso, se puede perder el reclamo, así que aquí es donde más importa actuar temprano.',
          },
        ],
      },
      {
        title: { en: 'Mortgage foreclosures.', es: 'Ejecuciones hipotecarias.' },
        body: [
          {
            en: 'Most Michigan mortgage foreclosures are “by advertisement,” ending in a sheriff’s sale. If the sale brings in more than the debt, the surplus goes to junior lienholders and then the former owner, and it is claimed through the sheriff or the circuit court.',
            es: 'La mayoría de las ejecuciones hipotecarias en Michigan son “por anuncio” y terminan en una venta del sheriff. Si la venta deja más que la deuda, el sobrante va a los acreedores posteriores y luego al antiguo dueño, y se reclama a través del sheriff o del tribunal de circuito.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: 'My home was foreclosed for taxes in Detroit. Is it too late?', es: 'Ejecutaron mi casa por impuestos en Detroit. ¿Es demasiado tarde?' },
        a: {
          en: 'Maybe not. It depends on whether Form 5743 was filed in time and when the property sold. Some owners from older foreclosures also have rights under court decisions. Call us and we will check your case for free.',
          es: 'Tal vez no. Depende de si se presentó el Formulario 5743 a tiempo y de cuándo se vendió la propiedad. Algunos dueños de ejecuciones más antiguas también tienen derechos por fallos judiciales. Llámenos y revisamos su caso gratis.',
        },
      },
      selfFaq({ en: 'Owners can file Form 5743 and the court motion themselves.', es: 'Los dueños pueden presentar ellos mismos el Formulario 5743 y la moción en el tribunal.' }),
      heirsFaq,
      fastFaq(
        'Yes, and in Michigan it comes early. The first form is due well before the money is ready to be paid. Contact us as soon as you learn of a tax foreclosure.',
        'Sí, y en Michigan llega temprano. El primer formulario vence mucho antes de que el dinero esté listo para pagarse. Contáctenos en cuanto sepa de una ejecución por impuestos.',
      ),
    ],
    sources: [
      { label: 'Wayne County Treasurer', url: 'https://www.waynecountymi.gov/Government/Elected-Officials/Treasurer' },
      { label: 'Michigan Department of Treasury, Form 5743', url: 'https://www.michigan.gov/taxes/property/forms/forfeiture-foreclosure-forms' },
      { label: 'Michigan General Property Tax Act, MCL 211.78t', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-211-78t' },
    ],
    meta: {
      title: { en: 'Wayne County (Detroit) Tax Foreclosure Remaining Proceeds | RCG', es: 'Fondos restantes de ejecuciones por impuestos en Wayne (Detroit) | RCG' },
      description: {
        en: 'Detroit home lost to tax foreclosure? You may be owed the remaining proceeds. How Form 5743 and the Circuit Court claim work in Wayne County, and free help. $0 upfront.',
        es: '¿Perdió una casa en Detroit por impuestos? Le pueden deber los fondos restantes. Cómo funcionan el Formulario 5743 y el reclamo en el tribunal en el condado de Wayne, y ayuda gratis.',
      },
    },
  },
]
