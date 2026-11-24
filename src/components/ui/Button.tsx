'use client'

import { cn } from '@/lib/utils/cn'
import { Loader2 } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: ReactNode
  fullWidth?: boolean
}

const variantClasses = {
  primary: 'bg-amber text-white hover:bg-amber-hover active:bg-amber-hover/90',
  secondary: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white active:bg-charcoal/90',
  ghost: 'text-charcoal hover:bg-charcoal/5 active:bg-charcoal/10',
  outline: 'border-2 border-amber text-amber hover:bg-amber hover:text-white active:bg-amber/90',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-body-sm gap-1.5',
  md: 'px-6 py-3 text-body-lg gap-2',
  lg: 'px-8 py-4 text-heading-sm gap-2',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      className={cn(
        'btn-base inline-flex items-center justify-center',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      )}
      <span className={cn(loading && 'opacity-0')}>{children}</span>
    </button>
  )
}

/* Link styled as button - for navigation CTAs */
export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: Omit<ButtonProps, 'loading' | 'fullWidth' | 'disabled' | 'onClick'> & { href: string }) {
  return (
    <a
      href={href}
      className={cn(
        'btn-base inline-flex items-center justify-center',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}