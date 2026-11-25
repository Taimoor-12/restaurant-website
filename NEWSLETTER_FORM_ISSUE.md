# Newsletter Form Issue Analysis

## Current Code
```tsx
<form className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 items-stretch sm:items-center">
  <input className="w-full sm:w-[280px] lg:w-[320px] px-4 py-4 ..." />
  <button className="btn-primary px-6 py-4 whitespace-nowrap touch-target flex-shrink-0">Subscribe</button>
</form>
```

## Issues Identified

### 1. Mobile (≤640px) - `flex-col` + `items-stretch`
- ✅ Stacked vertically
- ✅ Both full-width
- ⚠️ Gap only `gap-2` (8px) - tight for touch targets

### 2. Tablet (640-1024px) - `sm:flex-row` + `sm:items-center`
- ❌ Input fixed at `w-[280px]`, button fixed → doesn't use available space
- ❌ At 768px viewport: 280 + 12 + ~120 = 412px used, 356px empty
- ❌ Input should flex to fill space minus button

### 3. Desktop (1024px+) - `lg:flex-row` + `items-center`
- ❌ Input fixed at `w-[320px]`, same problem
- ❌ At 1440px: 320 + 16 + ~120 = 456px used, ~984px empty
- ❌ Wastes huge horizontal space

### 4. Root Cause
Fixed pixel widths (`w-[280px]`, `w-[320px]`) instead of flexible sizing with `max-width` constraints.

## Desired Behavior

| Breakpoint | Layout | Input Width | Button | Gap |
|------------|--------|-------------|--------|-----|
| Mobile (≤640px) | Stacked | 100% | 100% | 12px (gap-3) |
| Tablet (640-1024px) | Side-by-side | `flex-1` with `max-w-[400px]` | Fixed | 12px |
| Desktop (1024px+) | Side-by-side | `flex-1` with `max-w-[450px]` | Fixed | 16px |

## Proposed Solution

```tsx
<form className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch">
  <input className="w-full sm:max-w-[400px] lg:max-w-[450px] flex-1 px-4 py-4 ..." />
  <button className="btn-primary px-6 py-4 whitespace-nowrap touch-target flex-shrink-0">Subscribe</button>
</form>
```

Key changes:
1. `flex-1` on input (not `w-full` with fixed widths)
2. `max-w-[...]` for reasonable max widths
3. Consistent `gap-3 sm:gap-4` 
4. `items-stretch` always (mobile: full width, desktop: equal height)
5. Button always `flex-shrink-0`