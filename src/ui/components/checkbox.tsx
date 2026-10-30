'use client'

import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'
import { Checkbox as CheckboxPrimitive } from 'radix-ui'

import { cn } from '../../utils'

import { CheckIcon } from './icons/check'

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(function Checkbox({ className, ...props }, ref) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'peer flex h-4.5 w-4.5 shrink-0 cursor-pointer items-center justify-center rounded-md border transition-colors outline-none',
        'focus-visible:ring-1 focus-visible:ring-midground/30',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=unchecked]:border-midground/20 data-[state=unchecked]:bg-background',
        'data-[state=unchecked]:hover:border-midground/30',
        'data-[state=checked]:border-brand data-[state=checked]:bg-brand data-[state=checked]:text-brand-foreground',
        'data-[state=indeterminate]:border-brand data-[state=indeterminate]:bg-brand data-[state=indeterminate]:text-brand-foreground',
        className
      )}
      ref={ref}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <CheckIcon className="h-3 w-3 text-midground" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
