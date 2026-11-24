# Chinese Restaurant Website - Phased Implementation Roadmap

## Overview
Modern minimal Chinese restaurant website — Next.js 14 + Tailwind + TypeScript — 3 pages (Home, Menu, Contact)

---

## Phase 0: Project Foundation ✅ COMPLETE
**Goal**: Working dev environment with configured tooling

- [x] Initialize Next.js 14 (App Router, TypeScript, ESLint)
- [x] Configure Tailwind CSS v3.4 with custom design tokens
- [x] Set up folder structure per `PLAN.md`
- [x] Configure TypeScript strict mode, path aliases (`@/*`)
- [x] Add ESLint + Prettier config
- [x] Verify: `npm run dev` starts cleanly at `localhost:3000`
- [ ] Initialize git repository
- [ ] Create `.gitignore` (node_modules, .next, .env*, *.log, .DS_Store)
- [ ] Create initial commit
- [ ] Push to GitHub (create repo, add remote, push)

**Deliverable**: Blank starter page rendering with Tailwind working; version controlled on GitHub

---

## Phase 1: Design System & UI Primitives ✅ COMPLETE
**Goal**: Reusable component library with consistent styling

- [x] `src/lib/utils/cn.ts` — `clsx` + `tailwind-merge` helper
- [x] `src/lib/utils/formatPrice.ts` — currency formatting
- [x] `src/components/ui/Container.tsx` — max-width wrapper, responsive padding
- [x] `src/components/ui/Section.tsx` — semantic section with spacing variants
- [x] `src/components/ui/Button.tsx` — variants (primary/secondary/ghost/outline), sizes, loading state
- [x] `src/components/ui/Card.tsx` — image + content, hover elevation, composable sub-components
- [x] `src/components/ui/Input.tsx` — Input, Textarea, Select with label, error, hint
- [x] `src/hooks/useReducedMotion.ts` — respects `prefers-reduced-motion`
- [x] Global CSS: CSS custom properties for color palette, fluid typography clamp()

**Deliverable**: Reusable component library with consistent styling

---

## Phase 2: Layout Components (Header, Footer, Navigation) ✅ COMPLETE
**Goal**: Shared shell across all pages

- [x] `src/components/layout/Header.tsx`
  - Fixed, backdrop-blur on scroll
  - Logo (text-based, no image dependency)
  - Desktop nav links: Home | Menu | Contact
  - CTA button: "Reserve a Table"
  - Mobile: hamburger → slide-in drawer (Framer Motion)
- [x] `src/components/layout/Navigation.tsx` — extracted nav links + mobile drawer
- [x] `src/components/layout/Footer.tsx`
  - 4-column grid: About, Quick Links, Contact Info, Social/Newsletter
  - Newsletter email input
  - Copyright line
- [x] `src/app/layout.tsx` — updated with Header/Footer, proper main content area

**Deliverable**: All pages share consistent header/footer; mobile menu works

---

## Phase 3: Data Layer & Types ✅ COMPLETE
**Goal**: Type-safe content source for menu + restaurant info

- [x] `src/lib/data/restaurant.ts`
  - Restaurant name, tagline, address, phone, email, hours, social URLs
  - Structured data helpers for JSON-LD (Restaurant, LocalBusiness)
- [x] `src/lib/data/dishes.ts`
  - `Category` type: 'appetizers' | 'soups' | 'mains' | 'rice-noodles' | 'vegetarian' | 'drinks'
  - `DietaryTag` type: 'vegetarian' | 'vegan' | 'spicy' | 'nuts' | 'gluten-free' | 'signature'
  - `Dish` interface + 28 sample dishes with images, prices, dietary tags
  - Helpers: `getDishesByCategory`, `getFeaturedDishes`, `getPopularDishes`, `getDishById`, `getAllCategories`
  - Category labels, order, dietary labels/icons
- [x] `src/lib/validations/contactSchema.ts` — Zod schema for contact form with subject enum

**Deliverable**: Type-safe data imports, no `any` types

---

## Phase 4: Home Page (`/`)
**Goal**: Polished landing page with all sections

- [ ] `src/components/home/Hero.tsx`
  - Full-screen, headline + subheadline + CTA
  - Background image (Next.js Image, `priority`, `fill`)
  - Subtle parallax on scroll (Framer Motion)
- [ ] `src/components/home/FeaturedDishes.tsx`
  - Grid (1 col mobile → 2 tablet → 3-4 desktop)
  - 3-4 dishes from `dishes.ts` (marked `featured: true`)
  - Each: image, name, description, price, dietary badges
  - Staggered fade-in-up on scroll
- [ ] `src/components/home/AboutSection.tsx`
  - 2-column: story text + image
  - Stats row: Years serving • Signature dishes • Happy customers
- [ ] `src/components/home/CTASection.tsx`
  - Centered, amber background, white text
  - "Reserve a Table" button → scrolls to contact or links to `/contact`
- [ ] `src/app/page.tsx` — compose sections, add JSON-LD `Restaurant` structured data

**Deliverable**: Beautiful home page, responsive, animated, accessible

---

## Phase 5: Menu Page (`/menu`)
**Goal**: Browseable, filterable menu with categories

- [ ] `src/components/menu/MenuCategory.tsx`
  - Tab list (horizontal scroll on mobile) or accordion
  - Active category highlighted (amber underline)
  - Keyboard navigable
- [ ] `src/components/menu/DishCard.tsx`
  - Image (left on desktop, top on mobile), name, description, price
  - Dietary badges (icons + tooltips)
  - "Popular" star badge
  - Hover elevation
- [ ] `src/app/menu/page.tsx`
  - Hero: "Our Menu" + subtitle
  - Category tabs → filtered dish grid
  - JSON-LD `Menu` + `MenuSection` structured data

**Deliverable**: Full menu page, category filtering works, all dishes display

---

## Phase 6: Contact Page (`/contact`)
**Goal**: Functional contact form + location info

- [ ] `src/components/contact/ContactForm.tsx`
  - React Hook Form + Zod resolver
  - Fields: Name, Email, Phone, Subject (select), Message
  - Validation messages inline
  - Submit → toast success (simulate API, no backend yet)
  - Loading state on button
- [ ] `src/app/contact/page.tsx`
  - Hero: "Contact Us"
  - 2-col desktop: Form (left) | Info cards + Map (right)
  - Info cards: Address, Phone, Email, Hours (icons + text)
  - Embedded Google Maps iframe (placeholder coords)
  - JSON-LD `LocalBusiness` structured data

**Deliverable**: Working form with validation, info displayed, map renders

---

## Phase 7: Polish & Accessibility
**Goal**: Production-ready quality

- [ ] **Animations**: Verify all Framer Motion respects `useReducedMotion`
- [ ] **SEO**: Per-page metadata (title, description, OG, Twitter), sitemap.xml, robots.txt
- [ ] **Structured Data**: Validate JSON-LD with Google Rich Results Test
- [ ] **Accessibility**:
  - Heading hierarchy (h1 → h2 → h3)
  - Focus visible states on all interactive elements
  - ARIA labels on icon-only buttons
  - Form labels associated correctly
  - Color contrast ≥ 4.5:1
  - Skip link in Header
- [ ] **Images**: All `next/image` with width/height, alt text, priority on heroes
- [ ] **Performance**: Dynamic imports for heavy components, font optimization

**Deliverable**: Lighthouse > 90 across all categories

---

## Phase 8: Build Verification & Deploy Prep
**Goal**: Clean production build

- [ ] `npm run build` — no TypeScript errors, no ESLint warnings
- [ ] `npm run start` — production server works
- [ ] Test all 3 pages at mobile/tablet/desktop breakpoints
- [ ] Verify contact form submission flow
- [ ] Create `.env.example` for any future API keys
- [ ] Document deploy steps (Vercel recommended)

**Deliverable**: Deployable Next.js app

---

## Summary Timeline (Estimated)

| Phase | Est. Time | Dependencies |
|-------|-----------|--------------|
| 0: Foundation | 15 min | — |
| 1: UI Primitives | 30 min | Phase 0 |
| 2: Layout | 30 min | Phase 1 |
| 3: Data Layer | 20 min | Phase 0 |
| 4: Home Page | 45 min | Phases 1,2,3 |
| 5: Menu Page | 45 min | Phases 1,3 |
| 6: Contact Page | 45 min | Phases 1,2,3 |
| 7: Polish/a11y | 30 min | Phases 4,5,6 |
| 8: Build/Deploy | 15 min | Phase 7 |
| **Total** | **~4.5 hrs** | — |

---

## Next Step
**Ready to start Phase 0?** I'll initialize the Next.js project with all configuration.