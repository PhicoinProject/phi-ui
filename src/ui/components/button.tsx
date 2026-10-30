import { cva, type VariantProps } from 'class-variance-authority'
import { cloneElement } from 'react'

import { cn } from '../../utils'

import { Typography } from './typography'

// Modern, rounded controls: no bevel shadows, no inverting press filter.
const PRESS = 'active:scale-[0.98] transition-[background-color,border-color,color,transform] duration-150'

const buttonVariants = cva(
  [
    'group relative grid cursor-pointer grid-cols-[auto_1fr_auto] items-center rounded-md font-sans',
    'leading-none font-semibold tracking-normal',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50',
    'disabled:pointer-events-none disabled:opacity-45'
  ],
  {
    compoundVariants: [
      // ── invert × outlined matrix (default surface, no ghost/destructive) ──
      {
        class: `bg-brand text-brand-foreground hover:bg-brand-hover ${PRESS}`,
        destructive: false,
        ghost: false,
        invert: false,
        outlined: false
      },
      {
        class: `bg-midground/10 text-midground hover:bg-midground/15 ${PRESS}`,
        destructive: false,
        ghost: false,
        invert: true,
        outlined: false
      },
      {
        class: `border border-midground/25 hover:border-midground/40 hover:bg-midground/5 ${PRESS}`,
        destructive: false,
        ghost: false,
        invert: false,
        outlined: true
      },
      {
        class: `border border-midground/15 hover:bg-midground/5 ${PRESS}`,
        destructive: false,
        ghost: false,
        invert: true,
        outlined: true
      },
      // ── ghost: no chrome, hover bg only ──
      {
        class: 'rounded-md bg-transparent text-current hover:bg-midground/10 shadow-none',
        destructive: false,
        ghost: true
      },
      {
        class:
          'rounded-md bg-transparent text-destructive hover:bg-destructive/10 shadow-none',
        destructive: true,
        ghost: true
      },
      // ── solid destructive ──
      {
        class: `bg-destructive text-destructive-foreground hover:bg-destructive/90 ${PRESS}`,
        destructive: true,
        ghost: false,
        outlined: false
      },
      // ── outlined destructive ──
      {
        class:
          'border border-destructive/40 bg-transparent text-destructive hover:bg-destructive/10 shadow-none',
        destructive: true,
        ghost: false,
        outlined: true
      }
    ],
    defaultVariants: {
      destructive: false,
      ghost: false,
      invert: false,
      outlined: false,
      size: 'default'
    },
    variants: {
      destructive: { true: '' },
      ghost: { true: '' },
      invert: { true: '' },
      outlined: { true: 'text-midground bg-transparent' },
      size: {
        default: 'h-9 px-4 text-sm',
        icon: 'p-2 aspect-square grid-cols-1 place-items-center [&>svg]:size-4',
        sm: 'h-8 px-3.5 text-xs [&>svg]:size-3.5',
        xs: 'p-1 aspect-square grid-cols-1 place-items-center [&>svg]:size-3.5'
      }
    }
  }
)

const IconSlot = ({
  icon,
  side
}: {
  icon: React.ReactNode
  side: 'left' | 'right'
}) => (
  <>
    <span className="w-5" />

    <span
      className={cn(
        'absolute top-1/2 -translate-y-1/2',
        side === 'left' ? 'left-3' : 'right-3'
      )}
    >
      {typeof icon === 'object'
        ? cloneElement(icon as React.ReactElement<any>, {
            className: 'size-3.5'
          })
        : icon}
    </span>
  </>
)

export const Button = ({
  children,
  className,
  destructive,
  ghost,
  invert,
  outlined,
  prefix,
  size,
  suffix,
  ...props
}: ButtonProps) => (
  <Typography
    as="button"
    className={cn(
      buttonVariants({ destructive, ghost, invert, outlined, size }),
      className
    )}
    {...props}
  >
    {prefix && <IconSlot icon={prefix} side="left" />}
    {children}
    {suffix && <IconSlot icon={suffix} side="right" />}
  </Typography>
)

interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      'prefix' | 'suffix'
    >,
    VariantProps<typeof buttonVariants> {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}
