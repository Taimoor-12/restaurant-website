'use client'

import { cn } from '@/lib/utils/cn'
import type { InputHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  hint?: string
  fullWidth?: boolean
}

export const Input = ((props, ref) => {
  const { label, error, hint, fullWidth = true, className, id, ...inputProps } = props
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
      <label htmlFor={inputId} className="label-base">
        {label}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={cn('input-base', error && 'border-error focus:border-error focus:ring-error/20', className)}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        {...inputProps}
      />
      {error && (
        <p id={`${inputId}-error`} className="error-text" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-body-sm text-charcoal/50">
          {hint}
        </p>
      )}
    </div>
  )
}) as ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>

Input.displayName = 'Input'

interface TextareaProps extends Omit<InputProps, 'type'> {
  rows?: number
}

export const Textarea = ((props, ref) => {
  const { label, error, hint, fullWidth = true, className, id, rows = 4, ...textareaProps } = props
  const textareaId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
      <label htmlFor={textareaId} className="label-base">
        {label}
      </label>
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        className={cn('input-base resize-y min-h-[100px]', error && 'border-error focus:border-error focus:ring-error/20', className)}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
        {...textareaProps}
      />
      {error && (
        <p id={`${textareaId}-error`} className="error-text" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${textareaId}-hint`} className="text-body-sm text-charcoal/50">
          {hint}
        </p>
      )}
    </div>
  )
}) as ForwardRefExoticComponent<TextareaProps & RefAttributes<HTMLTextAreaElement>>

Textarea.displayName = 'Textarea'

interface SelectProps extends Omit<InputProps, 'type'> {
  options: { value: string; label: string }[]
  placeholder?: string
}

export const Select = ((props, ref) => {
  const { label, error, hint, fullWidth = true, className, id, options, placeholder, ...selectProps } = props
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
      <label htmlFor={selectId} className="label-base">
        {label}
      </label>
      <select
        ref={ref}
        id={selectId}
        className={cn('input-base select-base', error && 'border-error focus:border-error focus:ring-error/20', className)}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
        {...selectProps}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${selectId}-error`} className="error-text" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${selectId}-hint`} className="text-body-sm text-charcoal/50">
          {hint}
        </p>
      )}
    </div>
  )
}) as ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLSelectElement>>

Select.displayName = 'Select'