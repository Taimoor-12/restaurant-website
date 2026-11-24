'use client'

import { cn } from '@/lib/utils/cn'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter, CardPrice } from '@/components/ui/Card'
import { dietaryIcons, dietaryLabels, type Dish, type DietaryTag } from '@/lib/data/dishes'

interface DishCardProps {
  dish: Dish
  index?: number
  layout?: 'grid' | 'list'
}

export function DishCard({ dish, index = 0, layout = 'grid' }: DishCardProps) {
  const reducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0.01 : 0.5, delay: reducedMotion ? 0 : index * 0.05, ease: 'easeOut' },
    },
  }

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group"
    >
      <Card hover={layout === 'grid'} padding="none" className={cn(
        layout === 'list' ? 'flex flex-col sm:flex-row' : ''
      )}>
        {layout === 'grid' ? (
          <>
            <CardImage
              src={dish.image}
              alt={dish.name}
              priority={index < 4}
              aspectRatio="video"
              className="sm:aspect-[4/3]"
            />
            <CardContent className="p-5 sm:p-6">
              <DishBadges dish={dish} />
              <CardTitle as="h3" className="text-heading-md group-hover:text-amber transition-colors">
                {dish.name}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {dish.description}
              </CardDescription>
              <CardFooter>
                <CardPrice price={dish.price} />
                {dish.popular && <PopularBadge />}
              </CardFooter>
            </CardContent>
          </>
        ) : (
          <>
            <CardImage
              src={dish.image}
              alt={dish.name}
              priority={index < 4}
              aspectRatio="4/3"
              className="w-full sm:w-[200px] flex-shrink-0"
            />
            <CardContent className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <DishBadges dish={dish} />
                <CardTitle as="h3" className="text-heading-md group-hover:text-amber transition-colors">
                  {dish.name}
                </CardTitle>
                <CardDescription>
                  {dish.description}
                </CardDescription>
              </div>
              <CardFooter>
                <div className="flex items-center justify-between gap-4 w-full">
                  <CardPrice price={dish.price} />
                  {dish.popular && <PopularBadge />}
                </div>
              </CardFooter>
            </CardContent>
          </>
        )}
      </Card>
    </motion.article>
  )
}

function DishBadges({ dish }: { dish: Dish }) {
  return (
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
  )
}

function PopularBadge() {
  return (
    <span className="badge-base bg-amber/10 text-amber-hover flex items-center gap-1">
      <span className="text-base">⭐</span>
      <span className="hidden sm:inline">Popular</span>
    </span>
  )
}