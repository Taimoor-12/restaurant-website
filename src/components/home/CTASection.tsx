'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ButtonLink } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="section-py bg-amber" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0.01 : 0.8, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 id="cta-heading" className="text-display-md heading-display text-white text-balance">
            Ready for an Unforgettable Meal?
          </h2>
          <p className="mt-5 text-body-lg text-white/90">
            Reserve your table today and experience the flavors that have made Golden Dragon a San Francisco
            institution for over 28 years.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink
              href="/contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-h-[48px] px-8 border-white text-white hover:bg-white/10"
            >
              Reserve a Table
              <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="/menu"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto min-h-[48px] px-8 text-white hover:bg-white/10"
            >
              Explore the Menu
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  )
}