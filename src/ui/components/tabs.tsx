'use client'

import {
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
  useState
} from 'react'

import { cn } from '../../utils'

export function Tabs({ children, className, defaultValue }: TabsProps) {
  const [active, setActive] = useState(defaultValue)

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {children(active, setActive)}
    </div>
  )
}

export function TabsList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex h-10 items-center justify-start gap-1 rounded-md bg-midground/5 p-1 text-text-secondary',
        className
      )}
      {...props}
    />
  )
}

export function TabsTrigger({
  active,
  className,
  value: _value,
  ...props
}: TabsTriggerProps) {
  return (
    <button
      className={cn(
        'relative inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md px-3.5',
        'font-sans text-sm font-medium transition-all cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40',
        active
          ? 'bg-midground/15 text-midground'
          : 'text-text-secondary hover:text-midground',
        className
      )}
      type="button"
      {...props}
    />
  )
}

interface TabsProps {
  children: (active: string, setActive: (value: string) => void) => ReactNode
  className?: string
  defaultValue: string
}

interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean
  value: string
}
