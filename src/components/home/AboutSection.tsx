'use client'

import { cn } from '@/lib/utils/cn'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function AboutSection() {
  const reducedMotion = useReducedMotion()

  const stats = [
    { value: '28', label: 'Years Serving', suffix: '+' },
    { value: '150+', label: 'Signature Dishes' },
    { value: '50K+', label: 'Happy Customers' },
  ] as const

  return (
    <section className="section-py bg-white" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: reducedMotion ? 0.01 : 0.8, ease: 'easeOut' }}
            className="relative aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/hero/about-image.jpg"
              alt="Golden Dragon restaurant interior with modern Chinese decor"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AB//2Q=="
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: reducedMotion ? 0.01 : 0.8, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="max-w-xl mx-auto lg:mx-0">
              <span className="inline-block px-3 py-1 rounded-full bg-amber/10 text-amber-hover text-body-sm font-medium mb-4">
                Our Story
              </span>
              <h2 id="about-heading" className="text-display-md heading-display text-balance mb-6">
                A Legacy of Flavor,<br /> Reimagined for Today
              </h2>
              <div className="space-y-5 text-body-lg text-charcoal-light leading-relaxed">
                <p>
                  Founded in 1996 in San Francisco's historic Chinatown, Golden Dragon began as a modest family
                  restaurant serving hand-pulled noodles and dim sum to locals who knew authentic flavor when
                  they tasted it.
                </p>
                <p>
                  Today, we honor that legacy by blending time-honored Cantonese and Sichuan techniques with
                  contemporary presentation. Every dish that leaves our kitchen tells a story — of recipes
                  passed down through generations, of ingredients sourced from trusted local farms and
                  specialty importers, and of a commitment to quality that has never wavered.
                </p>
                <p>
                  Whether you're joining us for a celebratory banquet, a quick lunch, or a quiet dinner for two,
                  you'll experience the same dedication to craft that has made us a neighborhood institution
                  for over two decades.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: reducedMotion ? 0.01 : 0.6, delay: 0.3, ease: 'easeOut' }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
              role="list"
              aria-label="Restaurant statistics"
            >
              {stats.map((stat, index) => (
                <article
                  key={stat.label}
                  role="listitem"
                  className="text-center p-4 sm:p-6 bg-cream rounded-lg"
                >
                  <div className="font-heading font-bold text-display-sm text-charcoal">
                    {stat.value}
                    <span className="font-normal text-heading-sm">{stat.suffix || ''}</span>
                  </div>
                  <div className="mt-1 text-body-sm text-charcoal-light font-medium">
                    {stat.label}
                  </div>
                </article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}