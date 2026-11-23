import type { Metadata } from 'next'
import StatesView from '@/components/views/StatesView'

export const metadata: Metadata = {
  title: 'Ayuda con Ejecuciones y Fondos Excedentes por Estado | Rebound Capital Group',
  description: 'Ayuda con ejecuciones hipotecarias y recuperación de fondos excedentes en todo el país. Elija su estado para ver las leyes locales, el proceso de reclamo y los condados que cubrimos.',
  alternates: { canonical: '/es/estados' },
}

export default function EstadosPage() {
  return <StatesView lang="es" />
}
