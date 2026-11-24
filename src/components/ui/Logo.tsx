'use client'

import { cn } from '@/lib/utils/cn'
import type { SVGAttributes } from 'react'

interface LogoProps extends SVGAttributes<SVGSVGElement> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'white' | 'amber'
  className?: string
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
}

const colorClasses = {
  default: 'text-charcoal',
  white: 'text-white',
  amber: 'text-amber',
}

export function Logo({ size = 'md', variant = 'default', className, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('flex-shrink-0', sizeClasses[size], colorClasses[variant], className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <defs>
        <linearGradient id="dragonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A85A" />
          <stop offset="100%" stopColor="#B8964E" />
        </linearGradient>
      </defs>
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="url(#dragonGradient)"
        strokeWidth="2"
        opacity="0.3"
      />
      {/* Dragon body - stylized S-curve */}
      <path
        d="M30 70 Q35 55 50 55 Q65 55 70 45 Q75 35 60 30 Q45 25 30 35 Q20 45 25 60"
        fill="none"
        stroke="url(#dragonGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dragon head */}
      <path
        d="M68 42 Q73 38 75 40 Q77 43 72 45 Q70 44 68 42"
        fill="url(#dragonGradient)"
      />
      {/* Dragon eye */}
      <circle cx="71" cy="41" r="1.5" fill="#1A1A1A" />
      {/* Dragon whisker */}
      <path
        d="M73 43 Q78 42 80 41"
        fill="none"
        stroke="url(#dragonGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Pearl/flame */}
      <ellipse
        cx="35"
        cy="65"
        rx="4"
        ry="5"
        fill="url(#dragonGradient)"
        opacity="0.9"
      />
      <ellipse
        cx="35"
        cy="65"
        rx="2"
        ry="2.5"
        fill="#FAF8F5"
        opacity="0.6"
      />
    </svg>
  )
}

/* Text + Logo combined for header */
export function LogoWithText({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const textSize = {
    sm: 'text-body-sm',
    md: 'text-heading-md',
    lg: 'text-heading-lg',
  }

  return (
    <div className={cn('flex items-center gap-2', className)} aria-hidden="true">
      <Logo size={size} variant="default" />
      <span className={cn('font-heading font-semibold tracking-tight hidden sm:inline', textSize[size])}>
        Golden Dragon
      </span>
    </div>
  )
}