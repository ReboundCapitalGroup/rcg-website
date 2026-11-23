import type { Metadata } from 'next'
import ResultsView from '@/components/views/ResultsView'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Reseñas de Clientes y Resultados | Rebound Capital Group',
  description: 'Lo que dicen los clientes de Rebound Capital Group. Reseñas de Google de propietarios y herederos a quienes ayudamos a recuperar fondos excedentes y otros fondos. Más de $2M recuperados.',
  alternates: { canonical: '/es/recursos/resenas' },
}

export default function ResenasPage() {
  return <ResultsView lang="es" />
}
