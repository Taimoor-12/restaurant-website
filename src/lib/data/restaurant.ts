export const restaurant = {
  name: 'Golden Dragon',
  tagline: 'Authentic Chinese Cuisine',
  description: 'Experience authentic Chinese flavors in a modern setting. From handcrafted dim sum to sizzling wok classics, every dish tells a story.',
  address: {
    street: '128 Dragon Lane',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94108',
    country: 'US',
    full: '128 Dragon Lane, San Francisco, CA 94108, US',
  },
  phone: '+1-415-555-0188',
  email: 'hello@goldendragon.example.com',
  url: 'https://goldendragon.example.com',
  logo: 'https://goldendragon.example.com/images/logo.png',
  image: 'https://goldendragon.example.com/images/hero/og-image.jpg',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Apple Pay, Google Pay',
  hours: [
    { dayOfWeek: 'Monday', opens: '11:00', closes: '22:00' },
    { dayOfWeek: 'Tuesday', opens: '11:00', closes: '22:00' },
    { dayOfWeek: 'Wednesday', opens: '11:00', closes: '22:00' },
    { dayOfWeek: 'Thursday', opens: '11:00', closes: '22:00' },
    { dayOfWeek: 'Friday', opens: '11:00', closes: '23:00' },
    { dayOfWeek: 'Saturday', opens: '11:00', closes: '23:00' },
    { dayOfWeek: 'Sunday', opens: '12:00', closes: '21:00' },
  ],
  social: {
    instagram: 'https://instagram.com/goldendragon',
    facebook: 'https://facebook.com/goldendragon',
    twitter: 'https://twitter.com/goldendragon',
  },
  geo: {
    latitude: 37.7946,
    longitude: -122.4078,
  },
  servesCuisine: 'Chinese',
  menuUrl: 'https://goldendragon.example.com/menu',
  reservationUrl: 'https://goldendragon.example.com/contact',
} as const

export type Restaurant = typeof restaurant

// Helper to format hours for display
export function formatHours(hours: Restaurant['hours']): string {
  const dayGroups: Record<string, { opens: string; closes: string }[]> = {}

  hours.forEach((h) => {
    const key = `${formatTime(h.opens)} - ${formatTime(h.closes)}`
    if (!dayGroups[key]) dayGroups[key] = []
    dayGroups[key].push(h)
  })

  return Object.entries(dayGroups)
    .map(([time, days]) => {
      const dayNames = days.map((d) => d.dayOfWeek.slice(0, 3))
      const dayRange = dayNames.length > 1 ? `${dayNames[0]} - ${dayNames[dayNames.length - 1]}` : dayNames[0]
      return `${dayRange}: ${time}`
    })
    .join('; ')
}

function formatTime(time24: string): string {
  const [hours] = time24.split(':')
  const h = parseInt(hours, 10)
  if (h === 0) return '12:00 AM'
  if (h < 12) return `${h}:00 AM`
  if (h === 12) return '12:00 PM'
  return `${h - 12}:00 PM`
}

// JSON-LD Structured Data generators
export function generateRestaurantJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    description: restaurant.description,
    url: restaurant.url,
    logo: restaurant.logo,
    image: restaurant.image,
    telephone: restaurant.phone,
    email: restaurant.email,
    priceRange: restaurant.priceRange,
    currenciesAccepted: restaurant.currenciesAccepted,
    paymentAccepted: restaurant.paymentAccepted,
    servesCuisine: restaurant.servesCuisine,
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city,
      addressRegion: restaurant.address.state,
      postalCode: restaurant.address.zipCode,
      addressCountry: restaurant.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurant.geo.latitude,
      longitude: restaurant.geo.longitude,
    },
    openingHoursSpecification: restaurant.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    menu: restaurant.menuUrl,
    hasMenu: {
      '@type': 'Menu',
      '@id': `${restaurant.url}/menu#menu`,
    },
    sameAs: Object.values(restaurant.social),
  }
}

export function generateLocalBusinessJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: restaurant.name,
    description: restaurant.description,
    url: restaurant.url,
    logo: restaurant.logo,
    image: restaurant.image,
    telephone: restaurant.phone,
    email: restaurant.email,
    priceRange: restaurant.priceRange,
    currenciesAccepted: restaurant.currenciesAccepted,
    paymentAccepted: restaurant.paymentAccepted,
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city,
      addressRegion: restaurant.address.state,
      postalCode: restaurant.address.zipCode,
      addressCountry: restaurant.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurant.geo.latitude,
      longitude: restaurant.geo.longitude,
    },
    openingHoursSpecification: restaurant.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: Object.values(restaurant.social),
  }
}

export function generateMenuJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': `${restaurant.url}/menu#menu`,
    name: 'Our Menu',
    description: 'Complete menu of authentic Chinese dishes at Golden Dragon',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Appetizers',
        description: 'Start your meal with our handcrafted appetizers',
        hasMenuItem: {
          '@type': 'MenuItem',
          name: 'Crispy Spring Rolls',
          description: 'Hand-rolled crispy wrappers filled with cabbage, carrots, glass noodles, and shiitake mushrooms.',
          offers: { '@type': 'Offer', price: '8.00', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'MenuSection',
        name: 'Soups',
        description: 'Traditional Chinese soups made fresh daily',
        hasMenuItem: {
          '@type': 'MenuItem',
          name: 'Hot & Sour Soup',
          description: 'Classic Sichuan soup with tofu, bamboo shoots, wood ear mushrooms, and egg ribbons.',
          offers: { '@type': 'Offer', price: '7.00', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'MenuSection',
        name: 'Main Courses',
        description: 'Sizzling wok classics and signature dishes',
        hasMenuItem: {
          '@type': 'MenuItem',
          name: 'Peking Duck',
          description: 'Crispy-skinned roasted duck served with thin pancakes, scallions, cucumber, and hoisin sauce.',
          offers: { '@type': 'Offer', price: '38.00', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'MenuSection',
        name: 'Rice & Noodles',
        description: 'Wok-fried rice and hand-pulled noodle specialties',
        hasMenuItem: {
          '@type': 'MenuItem',
          name: 'Yangzhou Egg Fried Rice',
          description: 'Wok-fried jasmine rice with char siu pork, shrimp, egg, peas, carrots, and scallions.',
          offers: { '@type': 'Offer', price: '14.00', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'MenuSection',
        name: 'Vegetarian',
        description: 'Plant-based dishes with authentic flavors',
        hasMenuItem: {
          '@type': 'MenuItem',
          name: "Buddha's Delight",
          description: 'Assorted seasonal vegetables, tofu, bamboo shoots, wood ear mushrooms, and glass noodles.',
          offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'MenuSection',
        name: 'Drinks',
        description: 'Traditional teas and refreshing beverages',
        hasMenuItem: {
          '@type': 'MenuItem',
          name: 'Jasmine Tea',
          description: 'Premium jasmine green tea, served hot in a traditional ceramic pot.',
          offers: { '@type': 'Offer', price: '4.00', priceCurrency: 'USD' },
        },
      },
    ],
  }
}