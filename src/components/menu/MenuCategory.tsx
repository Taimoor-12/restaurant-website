'use client'

import { cn } from '@/lib/utils/cn'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { getAllCategories, categoryLabels, type Category } from '@/lib/data/dishes'
import { useState } from 'react'

interface MenuCategoryProps {
  onCategoryChange: (category: Category) => void
  activeCategory: Category
}

export function MenuCategory({ onCategoryChange, activeCategory }: MenuCategoryProps) {
  const reducedMotion = useReducedMotion()
  const categories = getAllCategories()
  const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null)

  const scrollToActive = () => {
    if (scrollRef && typeof window !== 'undefined') {
      const activeButton = scrollRef.querySelector('[data-active="true"]')
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', inline: 'center' })
      }
    }
  }

  return (
    <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-border px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Menu categories">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={setScrollRef}
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.3 }}
          className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-4 -mx-4 sm:mx-0 sm:pb-0 sm:px-4"
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              role="tab"
              aria-selected={activeCategory === category}
              aria-controls={`panel-${category}`}
              id={`tab-${category}`}
              data-active={activeCategory === category}
              className={cn(
                'flex-shrink-0 px-4 py-2.5 sm:px-6 sm:py-3 text-body-sm sm:text-body font-medium rounded-full transition-all duration-200 ease-out',
                'whitespace-nowrap',
                activeCategory === category
                  ? 'bg-amber text-white shadow-card'
                  : 'text-charcoal/70 hover:text-charcoal hover:bg-cream-dark'
              )}
              whileHover={{ scale: reducedMotion ? 1 : 1.02 }}
              whileTap={{ scale: reducedMotion ? 1 : 0.98 }}
            >
              {categoryLabels[category]}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}