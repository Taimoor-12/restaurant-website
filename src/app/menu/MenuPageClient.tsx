'use client'

import { useState } from 'react'
import { MenuCategory } from '@/components/menu/MenuCategory'
import { DishCard } from '@/components/menu/DishCard'
import { getDishesByCategory, type Category, categoryLabels } from '@/lib/data/dishes'
import { generateMenuJsonLd } from '@/lib/data/restaurant'

export function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('appetizers')
  const dishes = getDishesByCategory(activeCategory)

  const menuJsonLd = generateMenuJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <main id="main-content">
        {/* Page Hero */}
        <section className="section-py bg-cream" aria-labelledby="menu-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h1 id="menu-heading" className="text-display-xl heading-display text-balance">
                Our Menu
              </h1>
              <p className="mt-4 text-body-lg text-charcoal-light">
                Crafted with premium ingredients and traditional techniques. Explore our selection of
                Cantonese classics and Sichuan specialties.
              </p>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <MenuCategory
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Dish Grid */}
        <section className="section-py bg-white" aria-labelledby={`${activeCategory}-heading`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id={`${activeCategory}-heading`}
              className="sr-only"
            >
              {categoryLabels[activeCategory]} Dishes
            </h2>
            <div
              className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
              aria-label={`${categoryLabels[activeCategory]} dishes`}
            >
              {dishes.map((dish, index) => (
                <DishCard key={dish.id} dish={dish} index={index} layout="grid" />
              ))}
            </div>

            {dishes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-charcoal-light">No dishes available in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}