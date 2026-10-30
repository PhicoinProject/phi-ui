import { cn } from '../../utils'

/**
 * Themeable card primitive. Themes can restyle every card by setting CSS
 * custom properties:
 *
 *   --component-card-clip-path
 *   --component-card-border-image
 *   --component-card-background
 *   --component-card-box-shadow
 *
 * All are optional — unset vars compute to their CSS initial value.
 */
const CARD_STYLE: React.CSSProperties = {
  background: 'var(--component-card-background)',
  borderImage: 'var(--component-card-border-image)',
  boxShadow: 'var(--component-card-box-shadow)',
  clipPath: 'var(--component-card-clip-path)'
}

export function Card({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-midground/[0.08] bg-midground/[0.04] text-midground w-full shadow-[0_2px_4px_rgba(0,0,0,0.12)]',
        className
      )}
      style={{ ...CARD_STYLE, ...style }}
      {...props}
    />
  )
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1.5 p-5 pb-3',
        className
      )}
      {...props}
    />
  )
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'font-sans text-base font-semibold tracking-normal',
        className
      )}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('font-mondwest text-xs text-midground/60', className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4', className)} {...props} />
}
