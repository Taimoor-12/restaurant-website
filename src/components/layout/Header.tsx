'use client'

import { cn } from '@/lib/utils/cn'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Navigation } from './Navigation'
import { Button, ButtonLink } from '@/components/ui/Button'
import { LogoWithText } from '@/components/ui/Logo'

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
            <LogoWithText size="md" />
          </Link>

          {/* Navigation + CTA */}
          <Navigation />

          {/* Mobile CTA Button */}
          <div className="hidden md:flex">
            <ButtonLink href="/contact" variant="primary" size="sm">
              Reserve a Table
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  )
}