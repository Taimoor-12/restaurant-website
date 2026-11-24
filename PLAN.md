# Chinese Restaurant Website - Implementation Plan

## Context
Building a modern, minimal Chinese restaurant website with Next.js 14+ (App Router) + Tailwind CSS + TypeScript. The site needs three core pages: Home, Menu, and Contact — with a clean, contemporary aesthetic featuring lots of whitespace, refined typography, and subtle animations.

---

## Tech Stack
- **Framework**: Next.js 14+ (App Router, Server Components)
- **Styling**: Tailwind CSS v3.4+
- **Language**: TypeScript (strict mode)
- **Animations**: Framer Motion (subtle, respectful of `prefers-reduced-motion`)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Image Optimization**: Next.js Image component + next/image
- **Deployment**: Vercel (recommended)

---

## Project Structure
```
restaurant-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + metadata + fonts
│   │   ├── page.tsx            # Home page
│   │   ├── menu/
│   │   │   └── page.tsx        # Menu page
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact page
│   │   ├── globals.css         # Tailwind imports + custom styles
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/                 # Reusable primitive components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   └── Input.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedDishes.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── menu/
│   │   │   ├── MenuCategory.tsx
│   │   │   └── DishCard.tsx
│   │   └── contact/
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── data/
│   │   │   ├── dishes.ts       # Menu data (categories, dishes)
│   │   │   └── restaurant.ts   # Restaurant info (hours, address, etc.)
│   │   ├── utils/
│   │   │   ├── cn.ts           # clsx + tailwind-merge helper
│   │   │   └── formatPrice.ts
│   │   └── validations/
│   │       └── contactSchema.ts
│   ├── hooks/
│   │   └── useReducedMotion.ts
│   └── styles/
│       └── animations.css      # Keyframe animations for Framer Motion
├── public/
│   ├── images/
│   │   ├── dishes/             # Dish photos
│   │   └── hero/               # Hero background images
│   └── fonts/                  # Local font files (if self-hosting)
├── .gitignore
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── package.json
└── .eslintrc.json
```

---

## Design System

### Color Palette (Modern Minimal)
```css
/* Primary - Warm neutral with subtle amber accent */
--color-cream: #FAF8F5;           /* Background */
--color-cream-dark: #F0EDE8;      /* Subtle sections */
--color-charcoal: #1A1A1A;        /* Primary text */
--color-charcoal-light: #3D3D3D;  /* Secondary text */
--color-amber: #C9A85A;           /* Accent (CTAs, highlights) */
--color-amber-hover: #B8964E;     /* Hover state */
--color-white: #FFFFFF;
--color-border: #E5E0D8;          /* Dividers, inputs */
--color-error: #C0392B;           /* Form errors */
--color-success: #27AE60;         /* Form success */
```

### Typography
- **Headings**: `Inter` (or `Plus Jakarta Sans`) - weights 400/500/600/700
- **Body**: `Inter` - weights 400/500
- **Scale**: clamp() fluid typography for responsive headings

### Spacing System
- Base: 4px (0.25rem)
- Scale: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32

### Border Radius
- `sm`: 4px (inputs, buttons)
- `md`: 8px (cards)
- `lg`: 16px (hero, modals)
- `full`: 9999px (pills, badges)

### Shadows (Minimal)
- `subtle`: `0 1px 2px rgba(0,0,0,0.04)`
- `card`: `0 4px 12px rgba(0,0,0,0.06)`
- `elevated`: `0 12px 24px rgba(0,0,0,0.08)`

---

## Page Specifications

### 1. Home Page (`/`)
| Section | Component | Details |
|---------|-----------|---------|
| Hero | `Hero` | Full-screen, headline + subheadline + CTA button, subtle parallax background image |
| Featured Dishes | `FeaturedDishes` | 3-4 highlight dishes in a grid, each with image, name, description, price |
| About | `AboutSection` | Restaurant story, 2-column layout (text + image), key stats (years, dishes, customers) |
| CTA | `CTASection` | Reserve/Order button, centered, amber background |

**Animations**: Fade-in-up on scroll (IntersectionObserver), stagger children 100ms

---

### 2. Menu Page (`/menu`)
| Section | Component | Details |
|---------|-----------|---------|
| Hero | `Section` + heading | Page title "Our Menu", subtitle |
| Categories | `MenuCategory` | Tabs or accordion for: Appetizers, Soups, Main Courses, Rice & Noodles, Vegetarian, Drinks |
| Dish Cards | `DishCard` | Image, name, description, price, dietary badges (🌱 vegetarian, 🌶️ spicy, 🥜 contains nuts) |

**Data Structure** (`src/lib/data/dishes.ts`):
```typescript
interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  dietary: DietaryTag[];
  popular?: boolean;
}
```

---

### 3. Contact Page (`/contact`)
| Section | Component | Details |
|---------|-----------|---------|
| Hero | `Section` | "Contact Us" heading |
| Contact Form | `ContactForm` | Name, Email, Phone, Subject (dropdown), Message, Submit |
| Info Cards | `Card` grid | Address, Phone, Email, Hours (3-column on desktop) |
| Map | Embedded Google Maps | Location iframe |
| Social Links | Footer-style | Instagram, Facebook, Google Reviews |

**Form Validation** (Zod):
- Name: required, min 2 chars
- Email: required, valid email
- Phone: optional, valid format
- Subject: required (enum: Reservation, Catering, Feedback, Other)
- Message: required, min 10 chars, max 500

---

## Shared Components

### Header (`Header.tsx`)
- Fixed position, backdrop blur on scroll
- Logo (text + optional icon)
- Navigation links: Home, Menu, Contact
- Mobile: hamburger menu → slide-in drawer
- CTA button: "Reserve a Table" (amber)

### Footer (`Footer.tsx`)
- 4-column grid: About, Quick Links, Contact Info, Social
- Newsletter signup (email input)
- Copyright + legal links

### Button (`Button.tsx`)
Variants: `primary` (amber), `secondary` (outline), `ghost` (text only)
Sizes: `sm`, `md`, `lg`
Loading state with spinner

### Card (`Card.tsx`)
- Image top, content bottom
- Hover: subtle translateY(-4px) + shadow elevation

---

## Animation Strategy (Framer Motion)
- **Page transitions**: Simple fade (0.3s)
- **Scroll reveals**: `whileInView` with `once: true`, stagger 0.1s
- **Hover/tap**: `whileHover` scale 1.02, `whileTap` scale 0.98
- **Respect `prefers-reduced-motion`**: Disable all non-essential motion

---

## SEO & Accessibility
- **Metadata**: Dynamic per page (title, description, OG tags, Twitter cards)
- **Structured Data**: `Restaurant` + `Menu` + `LocalBusiness` JSON-LD
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA**: Labels on icon buttons, form associations
- **Images**: Alt text, widths/heights, priority on hero
- **Color Contrast**: WCAG AA minimum (4.5:1)

---

## Responsive Breakpoints (Tailwind Default)
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)
- `2xl`: 1536px (max container)

---

## Verification Checklist
- [ ] `npm run dev` starts without errors
- [ ] All 3 pages render correctly at all breakpoints
- [ ] Navigation works (links, mobile drawer)
- [ ] Contact form validates and submits (toast confirmation)
- [ ] Images load optimized (next/image)
- [ ] Animations respect reduced motion
- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Build passes: `npm run build`
- [ ] TypeScript strict mode: no errors
- [ ] ESLint: no warnings
- [ ] Git repository initialized with `.gitignore`
- [ ] Initial commit pushed to GitHub

---

## Future Enhancements (Out of Scope)
- Online ordering with cart + Stripe
- Reservation system integration
- Blog/recipes section
- Multi-language (i18n)
- Admin CMS for menu management