export type Category =
  | 'appetizers'
  | 'soups'
  | 'mains'
  | 'rice-noodles'
  | 'vegetarian'
  | 'drinks'

export type DietaryTag =
  | 'vegetarian'
  | 'vegan'
  | 'spicy'
  | 'nuts'
  | 'gluten-free'
  | 'signature'

export interface Dish {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: Category
  dietary: DietaryTag[]
  popular?: boolean
  featured?: boolean
}

export const categoryLabels: Record<Category, string> = {
  appetizers: 'Appetizers',
  soups: 'Soups',
  mains: 'Main Courses',
  'rice-noodles': 'Rice & Noodles',
  vegetarian: 'Vegetarian',
  drinks: 'Drinks',
}

export const categoryOrder: Category[] = [
  'appetizers',
  'soups',
  'mains',
  'rice-noodles',
  'vegetarian',
  'drinks',
]

export const dietaryLabels: Record<DietaryTag, string> = {
  vegetarian: 'Vegetarian',
  vegan: 'Vegan',
  spicy: 'Spicy',
  nuts: 'Contains Nuts',
  'gluten-free': 'Gluten-Free',
  signature: "Chef's Signature",
}

export const dietaryIcons: Record<DietaryTag, string> = {
  vegetarian: '🌱',
  vegan: '🌿',
  spicy: '🌶️',
  nuts: '🥜',
  'gluten-free': '🌾',
  signature: '⭐',
}

export const dishes: Dish[] = [
  // Appetizers
  {
    id: 'spring-rolls',
    name: 'Crispy Spring Rolls',
    description: 'Hand-rolled crispy wrappers filled with cabbage, carrots, glass noodles, and shiitake mushrooms. Served with sweet chili dipping sauce.',
    price: 8,
    image: '/images/dishes/spring-rolls.jpg',
    category: 'appetizers',
    dietary: ['vegetarian', 'vegan'],
    popular: true,
  },
  {
    id: 'dumplings-steamed',
    name: 'Steamed Pork Dumplings',
    description: 'Delicate hand-folded wrappers filled with seasoned ground pork, ginger, scallions, and napa cabbage. Served with soy-vinegar dipping sauce.',
    price: 12,
    image: '/images/dishes/steamed-dumplings.jpg',
    category: 'appetizers',
    dietary: [],
    popular: true,
    featured: true,
  },
  {
    id: 'crab-rangoon',
    name: 'Cream Cheese Wontons',
    description: 'Crispy wonton wrappers filled with cream cheese, lump crab meat, scallions, and a hint of garlic. Served with sweet and sour sauce.',
    price: 10,
    image: '/images/dishes/crab-rangoon.jpg',
    category: 'appetizers',
    dietary: [],
  },
  {
    id: 'edamame',
    name: 'Salted Edamame',
    description: 'Steamed young soybeans tossed with sea salt and a touch of sesame oil.',
    price: 6,
    image: '/images/dishes/edamame.jpg',
    category: 'appetizers',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
  },
  {
    id: 'bbq-pork-buns',
    name: 'Char Siu Bao',
    description: 'Fluffy steamed buns filled with sweet and savory Cantonese-style BBQ pork.',
    price: 11,
    image: '/images/dishes/char-siu-bao.jpg',
    category: 'appetizers',
    dietary: [],
    popular: true,
  },

  // Soups
  {
    id: 'hot-sour-soup',
    name: 'Hot & Sour Soup',
    description: 'Classic Sichuan soup with tofu, bamboo shoots, wood ear mushrooms, egg ribbons, and white pepper in a tangy broth.',
    price: 7,
    image: '/images/dishes/hot-sour-soup.jpg',
    category: 'soups',
    dietary: ['vegetarian', 'spicy', 'gluten-free'],
    popular: true,
  },
  {
    id: 'wonton-soup',
    name: 'Wonton Soup',
    description: 'Delicate pork and shrimp wontons in clear chicken broth with bok choy, scallions, and sesame oil.',
    price: 8,
    image: '/images/dishes/wonton-soup.jpg',
    category: 'soups',
    dietary: [],
  },
  {
    id: 'corn-chowder',
    name: 'Sweet Corn & Crab Chowder',
    description: 'Creamy sweet corn chowder enriched with lump crab meat, egg whites, and scallions.',
    price: 9,
    image: '/images/dishes/corn-chowder.jpg',
    category: 'soups',
    dietary: ['gluten-free'],
  },
  {
    id: 'egg-drop-soup',
    name: 'Egg Drop Soup',
    description: 'Silky chicken broth with delicate egg ribbons, scallions, and white pepper.',
    price: 6,
    image: '/images/dishes/egg-drop-soup.jpg',
    category: 'soups',
    dietary: ['vegetarian', 'gluten-free'],
  },

  // Main Courses
  {
    id: 'peking-duck',
    name: 'Peking Duck (Half)',
    description: 'Crispy-skinned roasted duck served with thin pancakes, scallions, cucumber, and hoisin sauce. Carved tableside.',
    price: 38,
    image: '/images/dishes/peking-duck.jpg',
    category: 'mains',
    dietary: ['signature'],
    featured: true,
    popular: true,
  },
  {
    id: 'kung-pao-chicken',
    name: 'Kung Pao Chicken',
    description: 'Wok-seared chicken with dried chilies, Sichuan peppercorns, peanuts, bell peppers, and scallions in a savory sauce.',
    price: 18,
    image: '/images/dishes/kung-pao-chicken.jpg',
    category: 'mains',
    dietary: ['spicy', 'nuts'],
    popular: true,
  },
  {
    id: 'mapo-tofu',
    name: 'Mapo Tofu',
    description: 'Silken tofu braised in fermented chili bean paste, ground pork, Sichuan peppercorns, and chili oil. Authentically numbing and spicy.',
    price: 16,
    image: '/images/dishes/mapo-tofu.jpg',
    category: 'mains',
    dietary: ['spicy'],
    featured: true,
  },
  {
    id: 'sweet-sour-pork',
    name: 'Sweet & Sour Pork',
    description: 'Crispy battered pork tenderloin with bell peppers, onions, and pineapple in a tangy sweet and sour sauce.',
    price: 17,
    image: '/images/dishes/sweet-sour-pork.jpg',
    category: 'mains',
    dietary: [],
  },
  {
    id: 'beef-broccoli',
    name: 'Beef & Broccoli',
    description: 'Tender sliced flank steak stir-fried with fresh broccoli, ginger, garlic in a savory brown sauce.',
    price: 19,
    image: '/images/dishes/beef-broccoli.jpg',
    category: 'mains',
    dietary: ['gluten-free'],
  },
  {
    id: 'salt-pepper-shrimp',
    name: 'Salt & Pepper Shrimp',
    description: 'Crispy fried shrimp tossed with jalapeños, garlic, scallions, and five-spice salt.',
    price: 22,
    image: '/images/dishes/salt-pepper-shrimp.jpg',
    category: 'mains',
    dietary: ['spicy', 'gluten-free'],
    popular: true,
  },
  {
    id: 'lemon-chicken',
    name: 'Lemon Chicken',
    description: 'Crispy chicken breast with a glossy lemon sauce, toasted sesame seeds, and scallions.',
    price: 17,
    image: '/images/dishes/lemon-chicken.jpg',
    category: 'mains',
    dietary: [],
  },

  // Rice & Noodles
  {
    id: 'egg-fried-rice',
    name: 'Yangzhou Egg Fried Rice',
    description: 'Wok-fried jasmine rice with char siu pork, shrimp, egg, peas, carrots, and scallions.',
    price: 14,
    image: '/images/dishes/egg-fried-rice.jpg',
    category: 'rice-noodles',
    dietary: [],
    popular: true,
    featured: true,
  },
  {
    id: 'chicken-fried-rice',
    name: 'Chicken Fried Rice',
    description: 'Jasmine rice stir-fried with diced chicken, egg, onions, peas, and carrots.',
    price: 13,
    image: '/images/dishes/chicken-fried-rice.jpg',
    category: 'rice-noodles',
    dietary: [],
  },
  {
    id: 'vegetable-fried-rice',
    name: 'Vegetable Fried Rice',
    description: 'Jasmine rice with mixed vegetables, egg, shiitake mushrooms, and scallions.',
    price: 12,
    image: '/images/dishes/vegetable-fried-rice.jpg',
    category: 'rice-noodles',
    dietary: ['vegetarian'],
  },
  {
    id: 'beef-chow-fun',
    name: 'Beef Chow Fun',
    description: 'Wide rice noodles stir-fried with marinated flank steak, bean sprouts, scallions, and soy sauce.',
    price: 16,
    image: '/images/dishes/beef-chow-fun.jpg',
    category: 'rice-noodles',
    dietary: ['gluten-free'],
    popular: true,
  },
  {
    id: 'singapore-noodles',
    name: 'Singapore Curry Noodles',
    description: 'Thin rice vermicelli with shrimp, char siu pork, egg, bell peppers, onions, and curry powder.',
    price: 15,
    image: '/images/dishes/singapore-noodles.jpg',
    category: 'rice-noodles',
    dietary: ['spicy'],
  },
  {
    id: 'dan-dan-noodles',
    name: 'Dan Dan Noodles',
    description: 'Wheat noodles in spicy sesame-peanut sauce with ground pork, preserved mustard greens, and scallions.',
    price: 14,
    image: '/images/dishes/dan-dan-noodles.jpg',
    category: 'rice-noodles',
    dietary: ['spicy', 'nuts', 'signature'],
    featured: true,
  },
  {
    id: 'lo-mein',
    name: 'Vegetable Lo Mein',
    description: 'Egg noodles tossed with napa cabbage, carrots, bell peppers, mushrooms, and scallions in a light soy sauce.',
    price: 12,
    image: '/images/dishes/lo-mein.jpg',
    category: 'rice-noodles',
    dietary: ['vegetarian'],
  },

  // Vegetarian
  {
    id: 'buddha-delight',
    name: "Buddha's Delight",
    description: 'Assorted seasonal vegetables, tofu, bamboo shoots, wood ear mushrooms, and glass noodles in a savory brown sauce.',
    price: 15,
    image: '/images/dishes/buddha-delight.jpg',
    category: 'vegetarian',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    popular: true,
  },
  {
    id: 'eggplant-garlic',
    name: 'Eggplant in Garlic Sauce',
    description: 'Braised Japanese eggplant with garlic, ginger, fermented bean paste, and scallions.',
    price: 14,
    image: '/images/dishes/eggplant-garlic.jpg',
    category: 'vegetarian',
    dietary: ['vegetarian', 'vegan'],
    featured: true,
  },
  {
    id: 'kung-pao-cauliflower',
    name: 'Kung Pao Cauliflower',
    description: 'Crispy cauliflower florets with dried chilies, Sichuan peppercorns, peanuts, and bell peppers.',
    price: 13,
    image: '/images/dishes/kung-pao-cauliflower.jpg',
    category: 'vegetarian',
    dietary: ['vegetarian', 'vegan', 'spicy', 'nuts'],
  },
  {
    id: 'mapo-tofu-veg',
    name: 'Vegetarian Mapo Tofu',
    description: 'Silken tofu in fermented chili bean sauce with shiitake mushrooms, Sichuan peppercorns, and chili oil.',
    price: 14,
    image: '/images/dishes/mapo-tofu-veg.jpg',
    category: 'vegetarian',
    dietary: ['vegetarian', 'vegan', 'spicy', 'gluten-free'],
  },
  {
    id: 'stir-fry-greens',
    name: 'Garlic Stir-Fried Greens',
    description: 'Seasonal Chinese greens (bok choy or gai lan) stir-fried with garlic, ginger, and oyster sauce.',
    price: 12,
    image: '/images/dishes/stir-fry-greens.jpg',
    category: 'vegetarian',
    dietary: ['vegetarian', 'gluten-free'],
  },

  // Drinks
  {
    id: 'jasmine-tea',
    name: 'Jasmine Tea (Pot)',
    description: 'Premium jasmine green tea, served hot in a traditional ceramic pot.',
    price: 4,
    image: '/images/dishes/jasmine-tea.jpg',
    category: 'drinks',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
  },
  {
    id: 'oolong-tea',
    name: 'Oolong Tea (Pot)',
    description: 'Traditional tieguanyin oolong tea, served hot.',
    price: 5,
    image: '/images/dishes/oolong-tea.jpg',
    category: 'drinks',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
  },
  {
    id: 'plum-juice',
    name: 'Sour Plum Drink',
    description: 'Refreshing house-made sour plum juice (suanmeitang) with osmanthus flowers.',
    price: 4,
    image: '/images/dishes/plum-juice.jpg',
    category: 'drinks',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    popular: true,
  },
  {
    id: 'soy-milk',
    name: 'Hot Soy Milk',
    description: 'Freshly made sweetened soy milk, served warm.',
    price: 3,
    image: '/images/dishes/soy-milk.jpg',
    category: 'drinks',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
  },
  {
    id: 'tsingtao',
    name: 'Tsingtao Beer',
    description: 'Classic Chinese lager, 330ml bottle.',
    price: 6,
    image: '/images/dishes/tsingtao.jpg',
    category: 'drinks',
    dietary: [],
  },
  {
    id: 'coconut-water',
    name: 'Young Coconut Water',
    description: 'Fresh young Thai coconut, served chilled.',
    price: 5,
    image: '/images/dishes/coconut-water.jpg',
    category: 'drinks',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
  },
]

// Helper functions
export function getDishesByCategory(category: Category): Dish[] {
  return dishes.filter((dish) => dish.category === category)
}

export function getFeaturedDishes(): Dish[] {
  return dishes.filter((dish) => dish.featured)
}

export function getPopularDishes(): Dish[] {
  return dishes.filter((dish) => dish.popular)
}

export function getDishById(id: string): Dish | undefined {
  return dishes.find((dish) => dish.id === id)
}

export function getAllCategories(): Category[] {
  return categoryOrder
}