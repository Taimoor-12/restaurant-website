import { Metadata } from 'next'
import { MenuPageClient } from './MenuPageClient'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore our full menu of authentic Chinese dishes — from dim sum and soups to sizzling wok specialties and hand-pulled noodles.',
  openGraph: {
    title: 'Menu | Golden Dragon',
    description: 'Explore our full menu of authentic Chinese dishes — from dim sum and soups to sizzling wok specialties and hand-pulled noodles.',
    images: ['/images/hero/og-image.jpg'],
  },
}

export default function MenuPage() {
  return <MenuPageClient />
}