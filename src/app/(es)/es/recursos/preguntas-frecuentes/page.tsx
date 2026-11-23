import type { Metadata } from 'next'
import FaqsView from '@/components/views/FaqsView'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre Fondos Excedentes | Rebound Capital Group',
  description: 'Respuestas sobre la recuperación de fondos excedentes: plazos, requisitos, honorarios y cómo funciona el proceso. Rebound Capital Group solo cobra si se recuperan fondos.',
  alternates: { canonical: '/es/recursos/preguntas-frecuentes' },
}

export default function PreguntasPage() {
  return <FaqsView lang="es" />
}
