import type { Metadata } from 'next'
import AboutView from '@/components/views/AboutView'

export const metadata: Metadata = {
  title: 'Sobre Rebound Capital Group | Ayuda con Ejecuciones y Recuperación de Fondos',
  description: 'Rebound Capital Group ayuda a propietarios que enfrentan una ejecución hipotecaria y recupera fondos excedentes, sobrantes de ventas por impuestos y propiedad no reclamada para antiguos dueños y herederos. Miami Beach, FL. Sin costo por adelantado.',
  alternates: { canonical: '/es/nosotros' },
}

export default function NosotrosPage() {
  return <AboutView lang="es" />
}
