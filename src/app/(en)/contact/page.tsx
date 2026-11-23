import type { Metadata } from 'next'
import ContactView from '@/components/contact/ContactView'

export const metadata: Metadata = {
  title: 'Contact Us | Rebound Capital Group',
  description: 'Contact Rebound Capital Group. Call or text 24/7 at 305-563-4920, or send our team a message. Based in Miami Beach, FL, helping homeowners and heirs in all 50 states.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return <ContactView lang="en" />
}
