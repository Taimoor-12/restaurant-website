import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Golden Dragon | Authentic Chinese Cuisine',
    template: '%s | Golden Dragon',
  },
  description: 'Experience authentic Chinese flavors in a modern setting. From handcrafted dim sum to sizzling wok classics, every dish tells a story.',
  keywords: ['Chinese restaurant', 'dim sum', 'peking duck', 'chinese food', 'fine dining', 'takeout'],
  authors: [{ name: 'Golden Dragon' }],
  creator: 'Golden Dragon',
  publisher: 'Golden Dragon',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://goldendragon.example.com',
    siteName: 'Golden Dragon',
    title: 'Golden Dragon | Authentic Chinese Cuisine',
    description: 'Experience authentic Chinese flavors in a modern setting.',
    images: [
      {
        url: '/images/hero/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Golden Dragon Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golden Dragon | Authentic Chinese Cuisine',
    description: 'Experience authentic Chinese flavors in a modern setting.',
    images: ['/images/hero/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAF8F5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-cream text-charcoal">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}