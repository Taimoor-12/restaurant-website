'use client'

import { cn } from '@/lib/utils/cn'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Button, ButtonLink } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const reducedMotion = useReducedMotion()

  const parallaxVariants = {
    initial: { y: 0 },
    scroll: (progress: number) => ({
      y: progress * (reducedMotion ? 0 : 100),
    }),
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ willChange: reducedMotion ? 'auto' : 'transform' }}
        className="absolute inset-0 z-0"
        variants={parallaxVariants}
      >
        <Image
          src="/images/hero/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AB//2Q=="
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/70" aria-hidden="true" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl text-center">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.8, ease: 'easeOut' }}
            className="text-display-xl heading-display text-cream text-balance"
          >
            Golden Dragon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.8, delay: 0.15, ease: 'easeOut' }}
            className="mt-6 text-body-lg text-cream/90 max-w-2xl mx-auto"
          >
            Authentic Chinese cuisine in a modern setting. Handcrafted flavors, time-honored techniques, unforgettable dining.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <ButtonLink
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[48px] px-8"
            >
              Reserve a Table
              <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="/menu"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[48px] px-8 border-cream/50 text-cream hover:bg-white/10"
            >
              View Menu
            </ButtonLink>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reducedMotion ? 0.01 : 1, delay: 1.2, ease: 'easeOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60"
          aria-hidden="true"
        >
          <span className="text-caption uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: reducedMotion ? 0.01 : 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-cream/40"
          />
        </motion.div>
      </div>
    </section>
  )
}