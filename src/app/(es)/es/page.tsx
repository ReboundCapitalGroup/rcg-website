import type { Metadata } from 'next'
import HomeView from '@/components/views/HomeView'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Ayuda con Ejecución Hipotecaria y Fondos Excedentes | $0 por Adelantado | RCG',
  description: '¿Enfrenta una ejecución hipotecaria o ya perdió su casa en una subasta? Rebound Capital Group ayuda a propietarios en todo el país con opciones antes de la venta y fondos excedentes después. $0 por adelantado. Hablamos español, 24/7.',
  alternates: { canonical: '/es' },
}

export default function InicioEs() {
  return <HomeView lang="es" />
}
