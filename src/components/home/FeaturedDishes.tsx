'use client'

import { cn } from '@/lib/utils/cn'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { formatPrice } from '@/lib/utils/formatPrice'
import { getFeaturedDishes, dietaryIcons, dietaryLabels } from '@/lib/data/dishes'
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter, CardPrice } from '@/components/ui/Card'
import type { Dish } from '@/lib/data/dishes'

interface FeaturedDishesProps {
  dishes?: Dish[]
  maxItems?: number
}

export function FeaturedDishes({ dishes: customDishes, maxItems = 4 }: FeaturedDishesProps) {
  const reducedMotion = useReducedMotion()
  const dishes = customDishes || getFeaturedDishes().slice(0, maxItems)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0.01 : 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="section-py bg-cream" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0.01 : 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <h2 id="featured-heading" className="text-display-md heading-display text-balance">
            Featured Dishes
          </h2>
          <p className="mt-4 text-body-lg text-charcoal-light">
            Our chef's signature creations — handcrafted with premium ingredients and generations of culinary wisdom.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
          aria-label="Featured dishes"
        >
          {dishes.map((dish, index) => (
            <motion.article
              key={dish.id}
              variants={itemVariants}
              role="listitem"
              className="group"
            >
              <Card hover padding="none">
                <CardImage
                  src={dish.image}
                  alt={dish.name}
                  width={400}
                  height={225}
                  priority={index < 2}
                  className="aspect-video sm:aspect-[4/3]"
                />
                <CardContent className="p-5 sm:p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3" aria-label="Dietary information">
                    {dish.dietary.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          'badge-base inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-caption font-medium',
                          tag === 'vegetarian' || tag === 'vegan' ? 'bg-green-100 text-green-700' :
                          tag === 'spicy' ? 'bg-red-100 text-red-700' :
                          tag === 'nuts' ? 'bg-amber-100 text-amber-700' :
                          tag === 'gluten-free' ? 'bg-blue-100 text-blue-700' :
                          tag === 'signature' ? 'bg-amber-100 text-amber-700' :
                          'bg-charcoal/10 text-charcoal/70'
                        )}
                        title={dietaryLabels[tag]}
                      >
                        {dietaryIcons[tag]}
                        <span className="hidden sm:inline">{dietaryLabels[tag]}</span>
                      </span>
                    ))}
                  </div>
                  <CardTitle as="h3" className="text-heading-md group-hover:text-amber transition-colors">
                    {dish.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {dish.description}
                  </CardDescription>
                  <CardFooter>
                    <CardPrice price={dish.price} />
                    {dish.popular && (
                      <span className="badge-base bg-amber/10 text-amber-hover flex items-center gap-1">
                        <span className="text-base">⭐</span>
                        <span className="hidden sm:inline">Popular</span>
                      </span>
                    )}
                  </CardFooter>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0.01 : 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
          <a href="/menu" className="btn-ghost text-charcoal hover:text-amber inline-flex items-center gap-2">
            View Full Menu
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

