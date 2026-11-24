import { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { FeaturedDishes } from '@/components/home/FeaturedDishes'
import { AboutSection } from '@/components/home/AboutSection'
import { CTASection } from '@/components/home/CTASection'
import { generateRestaurantJsonLd, generateLocalBusinessJsonLd } from '@/lib/data/restaurant'

export const metadata: Metadata = {
  title: 'Authentic Chinese Cuisine',
  description: 'Experience authentic Chinese flavors in a modern setting. From handcrafted dim sum to sizzling wok classics, every dish tells a story.',
  openGraph: {
    title: 'Golden Dragon | Authentic Chinese Cuisine',
    description: 'Experience authentic Chinese flavors in a modern setting. From handcrafted dim sum to sizzling wok classics, every dish tells a story.',
    images: ['/images/hero/og-image.jpg'],
  },
}

export default function HomePage() {
  const restaurantJsonLd = generateRestaurantJsonLd()
  const localBusinessJsonLd = generateLocalBusinessJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <main id="main-content">
        <Hero />
        <FeaturedDishes />
        <AboutSection />
        <CTASection />
      </main>
    </>
  )
}