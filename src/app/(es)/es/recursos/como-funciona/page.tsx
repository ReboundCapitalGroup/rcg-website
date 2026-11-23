import type { Metadata } from 'next'
import HowItWorksView from '@/components/views/HowItWorksView'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Cómo Funciona la Recuperación de Fondos Excedentes | RCG',
  description: 'Cómo funciona: encontramos el dinero que se le debe, lo reclamamos a través de nuestra red de abogados con licencia y usted recibe su pago. Sin costo por adelantado. Solo cobramos cuando usted cobra.',
  alternates: { canonical: '/es/recursos/como-funciona' },
}

export default function ComoFuncionaPage() {
  return <HowItWorksView lang="es" />
}
