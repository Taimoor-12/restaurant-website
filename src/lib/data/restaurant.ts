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