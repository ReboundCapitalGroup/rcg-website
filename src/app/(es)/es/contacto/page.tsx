import type { Metadata } from 'next'
import ContactView from '@/components/contact/ContactView'

export const metadata: Metadata = {
  title: 'Contacto | Rebound Capital Group',
  description: 'Contacte a Rebound Capital Group. Llame o escriba 24/7 al 305-563-4920 o envíenos un mensaje. Hablamos español. Con sede en Miami Beach, FL, ayudamos a propietarios y herederos en los 50 estados.',
  alternates: { canonical: '/es/contacto' },
}

export default function ContactoPage() {
  return <ContactView lang="es" />
}
