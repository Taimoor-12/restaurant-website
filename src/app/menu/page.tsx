import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore our full menu of authentic Chinese dishes — from dim sum and soups to sizzling wok specialties and hand-pulled noodles.',
}

export default function MenuPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <section className="section-py container-custom">
        <h1 className="text-display-xl heading-display text-balance">
          Our Menu
        </h1>
        <p className="mt-4 text-body-lg text-charcoal-light max-w-2xl">
          Crafted with premium ingredients and traditional techniques.
        </p>
      </section>
    </main>
  )
}