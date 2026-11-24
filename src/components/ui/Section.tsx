'use client'

import { cn } from '@/lib/utils/cn'
import type { ReactNode, HTMLAttributes } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  variant?: 'default' | 'narrow' | 'full'
  background?: 'cream' | 'cream-dark' | 'white' | 'charcoal' | 'amber'
  className?: string
}

const variantClasses = {
  default: 'py-16 sm:py-20 lg:py-24 xl:py-28',
  narrow: 'py-12 sm:py-16 lg:py-20',
  full: 'py-20 sm:py-24 lg:py-32 xl:py-36',
}

const backgroundClasses = {
  cream: 'bg-cream',
  'cream-dark': 'bg-cream-dark',
  white: 'bg-white',
  charcoal: 'bg-charcoal text-cream',
  amber: 'bg-amber text-white',
}

export function Section({
  children,
  variant = 'default',
  background = 'cream',
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(variantClasses[variant], backgroundClasses[background], className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}