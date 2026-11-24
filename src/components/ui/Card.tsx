'use client'

import { cn } from '@/lib/utils/cn'
import Image from 'next/image'
import type { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'default' | 'lg'
}

const paddingClasses = {
  none: '',
  default: 'p-6',
  lg: 'p-8',
}

export function Card({
  children,
  className,
  hover = true,
  padding = 'default',
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'card-base bg-white rounded-md overflow-hidden',
        hover && 'hover:shadow-elevated hover:-translate-y-1 transition-all duration-350',
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  aspectRatio?: 'video' | 'square' | '4/3' | '16/9'
}

export function CardImage({ src, alt, width, height, className, priority = false, aspectRatio = 'video' }: CardImageProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-video',
  }

  return (
    <div className={cn('relative w-full overflow-hidden', aspectClasses[aspectRatio], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-350 hover:scale-105"
        priority={priority}
      />
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('flex flex-col gap-3', className)}>{children}</div>
}

interface CardTitleProps {
  children: ReactNode
  className?: string
  as?: 'h2' | 'h3' | 'h4'
}

export function CardTitle({ children, className, as: Component = 'h3' }: CardTitleProps) {
  return (
    <Component className={cn('heading-card text-lg font-semibold text-charcoal', className)}>
      {children}
    </Component>
  )
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return <p className={cn('text-body text-charcoal-light', className)}>{children}</p>
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn('flex items-center justify-between gap-4 pt-2 border-t border-border', className)}>{children}</div>
}

interface CardPriceProps {
  price: number
  className?: string
}

export function CardPrice({ price, className }: CardPriceProps) {
  return (
    <span className={cn('font-heading font-semibold text-charcoal text-heading-sm', className)}>
      ${price}
    </span>
  )
}