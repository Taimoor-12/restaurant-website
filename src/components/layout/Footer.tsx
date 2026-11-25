'use client'

import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Clock } from 'lucide-react'

const restaurantInfo = {
  name: 'Golden Dragon',
  tagline: 'Authentic Chinese cuisine in a modern setting. Handcrafted flavors, time-honored techniques.',
  address: '128 Dragon Lane, Chinatown District',
  city: 'San Francisco, CA 94108',
  phone: '(415) 555-0188',
  email: 'hello@goldendragon.example.com',
  hours: [
    { days: 'Mon - Thu', hours: '11:00 AM - 10:00 PM' },
    { days: 'Fri - Sat', hours: '11:00 AM - 11:00 PM' },
    { days: 'Sunday', hours: '12:00 PM - 9:00 PM' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram, ariaLabel: 'Follow us on Instagram' },
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook, ariaLabel: 'Follow us on Facebook' },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter, ariaLabel: 'Follow us on Twitter' },
  ],
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Contact', href: '/contact' },
  { label: 'Reservations', href: '/contact#reservations' },
]

const newsletterInfo = {
  title: 'Stay Updated',
  description: 'Join our newsletter for seasonal menu updates and special offers.',
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-4">
          {/* About Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-heading-md font-semibold tracking-tight"
              aria-label="Golden Dragon - Home"
            >
              {restaurantInfo.name}
            </Link>
            <p className="mt-4 text-body text-cream/70 max-w-xs">
              {restaurantInfo.tagline}
            </p>
            <div className="mt-6 flex gap-4" role="list" aria-label="Social media links">
              {restaurantInfo.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-cream/70 hover:bg-amber hover:text-white transition-colors touch-target"
                >
                  <social.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <nav aria-labelledby="quick-links-heading">
            <h2 id="quick-links-heading" className="heading-card font-semibold text-cream">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-3 lg:space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-cream/70 hover:text-amber transition-colors touch-target py-1.5 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info Column */}
          <address className="not-italic" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="heading-card font-semibold text-cream">
              Contact Us
            </h2>
            <div className="mt-4 space-y-4 lg:space-y-3 text-body text-cream/70">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p>{restaurantInfo.address}</p>
                  <p>{restaurantInfo.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber shrink-0" aria-hidden="true" />
                <a href={`tel:${restaurantInfo.phone.replace(/\D/g, '')}`} className="hover:text-amber transition-colors touch-target py-1.5 block">
                  {restaurantInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber shrink-0" aria-hidden="true" />
                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-amber transition-colors touch-target py-1.5 block">
                  {restaurantInfo.email}
                </a>
              </div>
            </div>
          </address>

          {/* Hours + Newsletter Column */}
          <div>
            <h2 id="hours-heading" className="heading-card font-semibold text-cream">
              Hours
            </h2>
            <dl className="mt-4 space-y-3 text-body text-cream/70" aria-labelledby="hours-heading">
              {restaurantInfo.hours.map((item, index) => (
                <div key={index} className="flex justify-between gap-4">
                  <dt className="font-medium">{item.days}</dt>
                  <dd className="text-cream/60">{item.hours}</dd>
                </div>
              ))}
            </dl>

            {/* Newsletter */}
            <div className="mt-8 pt-6 border-t border-white/10" aria-labelledby="newsletter-heading">
              <h2 id="newsletter-heading" className="heading-card font-semibold text-cream">
                {newsletterInfo.title}
              </h2>
              <p className="mt-2 text-body-sm text-cream/60">{newsletterInfo.description}</p>
              <form className="mt-4 flex flex-col sm:flex-row lg:flex-row gap-2 sm:gap-3 lg:gap-4" role="search" aria-label="Newsletter signup">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-[280px] lg:min-w-[320px] px-4 py-4 bg-white/5 border border-white/10 rounded-sm text-cream placeholder:text-cream/40 focus:border-amber focus:ring-2 focus:ring-amber/20 focus:outline-none transition-all touch-target"
                  aria-describedby="newsletter-email-hint"
                />
                <button
                  type="submit"
                  className="btn-primary px-6 py-4 whitespace-nowrap touch-target"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
              <p id="newsletter-email-hint" className="mt-2 text-caption text-cream/50">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-cream/50 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 text-body-sm text-cream/50">
            <Link href="/privacy" className="hover:text-amber transition-colors touch-target py-1">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber transition-colors touch-target py-1">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-amber transition-colors touch-target py-1">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}