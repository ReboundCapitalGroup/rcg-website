import type { Metadata } from 'next'
import ServicesView from '@/components/views/ServicesView'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Servicios: Ayuda con Ejecución Hipotecaria, Fondos Excedentes y Propiedad No Reclamada | RCG',
  description: 'Ayuda antes de la subasta y recuperación de fondos excedentes, sobrantes de ventas por impuestos, propiedad no reclamada y bienes de herencias después. Reclamos presentados a través de nuestra red de abogados con licencia. $0 por adelantado.',
  alternates: { canonical: '/es/servicios' },
}

export default function ServiciosPage() {
  return <ServicesView lang="es" />
}
