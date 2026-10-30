'use client'

import { type ReactNode } from 'react'

import { cn } from '../../utils'

export function Segmented<T extends string>({
  className,
  onChange,
  options,
  size = 'sm',
  value
}: SegmentedProps<T>) {
  return (
    <div
      className={cn(
        'inline-flex gap-0.5 rounded-md bg-midground/5 p-0.5',
        className
      )}
      role="radiogroup"
    >
      {options.map(opt => {
        const active = opt.value === value

        return (
          <button
            aria-checked={active}
            className={cn(
              'rounded-md font-sans font-medium',
              'transition-colors cursor-pointer whitespace-nowrap',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40',
              size === 'sm' && 'h-7 px-2.5 text-xs',
              size === 'md' && 'h-8 px-3 text-xs',
              active
                ? 'bg-brand text-brand-foreground'
                : 'text-text-secondary hover:bg-midground/10 hover:text-midground'
            )}
            key={opt.value}
            onClick={() => onChange(opt.value)}
            role="radio"
            type="button"
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

export function FilterGroup({ children, className, label }: FilterGroupProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="font-sans text-xs font-medium text-text-tertiary">
        {label}
      </span>

      {children}
    </div>
  )
}

interface FilterGroupProps {
  children: ReactNode
  className?: string
  label: string
}

interface SegmentedOption<T extends string> {
  label: string
  value: T
}

interface SegmentedProps<T extends string> {
  className?: string
  onChange: (value: T) => void
  options: SegmentedOption<T>[]
  size?: 'md' | 'sm'
  value: T
}
