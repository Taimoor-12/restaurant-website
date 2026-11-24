'use client'

import { cn } from '@/lib/utils/cn'
import { X, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/contact', label: 'Contact' },
] as const

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const reducedMotion = useReducedMotion()

  const transition = reducedMotion
    ? { duration: 0.01 }
    : { type: 'spring', damping: 25, stiffness: 300 }

  return (
    <nav className="flex items-center gap-8" role="navigation" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6" role="menubar">
        {navLinks.map((link) => (
          <li key={link.href} role="none">
            <Link
              href={link.href}
              role="menuitem"
              className={cn(
                'font-medium text-body-sm transition-colors duration-200',
                pathname === link.href
                  ? 'text-amber'
                  : 'text-charcoal/70 hover:text-charcoal'
              )}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-sm text-charcoal hover:bg-charcoal/5 transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0.01 : 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={transition}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-elevated z-50 md:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="heading-card font-semibold text-charcoal">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-1 rounded-sm text-charcoal hover:bg-charcoal/5 transition-colors"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <ul className="flex-1 py-6 px-6 space-y-4" role="menubar">
                {navLinks.map((link) => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block font-medium text-body-lg transition-colors',
                        pathname === link.href
                          ? 'text-amber'
                          : 'text-charcoal hover:text-amber'
                      )}
                      aria-current={pathname === link.href ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="p-6 border-t border-border">
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Reserve a Table
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}