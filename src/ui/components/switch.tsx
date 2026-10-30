'use client'

import { type ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '../../utils'

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { checked, className, disabled, id, onCheckedChange, ...props },
  ref
) {
  return (
    <button
      aria-checked={checked}
      className={cn(
        'peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-midground/30',
        'disabled:cursor-not-allowed disabled:opacity-50',
        checked
          ? 'bg-brand border-brand'
          : 'bg-background border-midground/20',
        className
      )}
      disabled={disabled}
      id={id}
      onClick={() => onCheckedChange(!checked)}
      ref={ref}
      role="switch"
      type="button"
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          'pointer-events-none block h-[18px] w-[18px] rounded-full shadow-sm transition-transform',
          checked
            ? 'translate-x-[22px] bg-white'
            : 'translate-x-[2px] bg-midground/50'
        )}
      />
    </button>
  )
})

interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}
