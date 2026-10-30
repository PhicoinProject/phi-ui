import { cn } from '../../utils'

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-md border border-midground/15 border-b-midground/30 bg-midground/5 px-3.5 py-1 font-sans text-sm transition-colors placeholder:text-text-tertiary',
        'placeholder:text-midground/50',
        'focus-visible:outline-none focus-visible:border-b-2 focus-visible:border-b-brand focus-visible:bg-background-base',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}

