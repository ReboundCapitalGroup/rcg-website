import type { Metadata } from 'next'
import BlogView from '@/components/views/BlogView'

export const metadata: Metadata = {
  title: 'Blog de Recuperación de Fondos Excedentes | Rebound Capital Group',
  description: 'Guías en lenguaje sencillo sobre ejecuciones, fondos excedentes y reclamos. Próximamente de Rebound Capital Group.',
  robots: { index: false, follow: true },
}

export default function BlogEsPage() {
  return <BlogView lang="es" />
}
