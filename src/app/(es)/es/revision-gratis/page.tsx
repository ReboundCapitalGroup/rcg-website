import type { Metadata } from 'next'
import FreeReview from '@/components/review/FreeReview'

export const metadata: Metadata = {
  title: 'Revisión Gratis de Fondos Excedentes | Rebound Capital Group',
  description: 'Revisión gratis de su caso. Buscamos dinero que se le deba después de una ejecución hipotecaria, venta por impuestos o herencia, y presentamos el reclamo a través de nuestra red de abogados con licencia. Sin costo por adelantado.',
  alternates: { canonical: '/es/revision-gratis' },
}

export default function RevisionGratisPage() {
  return <FreeReview />
}
