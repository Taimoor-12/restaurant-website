'use client'

import { cn } from '@/lib/utils/cn'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Navigation } from './Navigation'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-subtle border-b border-border'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-charcoal hover:text-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded-sm"
            aria-label="Golden Dragon - Home"
          >
            <span className="font-heading text-heading-md font-semibold tracking-tight">
              Golden Dragon
            </span>
            <span className="hidden sm:inline-block w-px h-6 bg-border mx-2" aria-hidden="true" />
            <span className="hidden sm:inline text-body-sm text-charcoal/60 font-medium">
              Authentic Chinese Cuisine
            </span>
          </Link>

          {/* Navigation + CTA */}
          <Navigation />

          {/* Mobile CTA Button */}
          <div className="hidden md:flex">
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}