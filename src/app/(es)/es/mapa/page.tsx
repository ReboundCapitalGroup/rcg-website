import type { Metadata } from 'next'
import MapView from '@/components/map/MapView'

export const metadata: Metadata = {
  title: 'Mapa de Fondos y Propiedad No Reclamada por Estado | Rebound Capital Group',
  description: 'Los estados de EE. UU. guardan cerca de $70 mil millones en propiedad no reclamada. Vea lo que guarda su estado y pida una revisión gratis a Rebound Capital Group. $0 por adelantado.',
  alternates: { canonical: '/es/mapa' },
}

export default function MapaPage() {
  return <MapView lang="es" />
}
