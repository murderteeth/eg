import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/cn'

export type Variant = 'accent' | 'primary' | 'secondary' | 'error' | 'busy'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  variant?: Variant
}

function buttonClassName(props: ButtonProps) {
  const { className, variant } = props
  const busy = variant === 'busy'
  
  return cn(`
    relative h-8 px-8 py-5 flex items-center justify-center
    text-2xl tracking-wide
    drop-shadow-4 drop-shadow-black
    border cursor-pointer rounded-primary whitespace-nowrap

    data-[variant=accent]:bg-[var(--button-accent-bg)]
    data-[variant=accent]:text-[var(--button-accent-text)]
    data-[variant=accent]:border-[var(--button-accent-border)]
    data-[variant=accent]:hover:bg-[var(--button-accent-bg-hover)]
    data-[variant=accent]:active:bg-[var(--button-accent-bg-active)]
    
    data-[variant=primary]:bg-[var(--button-primary-bg)]
    data-[variant=primary]:text-[var(--button-primary-text)]
    data-[variant=primary]:border-[var(--button-primary-border)]
    data-[variant=primary]:hover:bg-[var(--button-primary-bg-hover)]
    data-[variant=primary]:active:bg-[var(--button-primary-bg-active)]
    
    data-[variant=secondary]:bg-[var(--button-secondary-bg)]
    data-[variant=secondary]:text-[var(--button-secondary-text)]
    data-[variant=secondary]:border-[var(--button-secondary-border)]
    data-[variant=secondary]:hover:bg-[var(--button-secondary-bg-hover)]
    data-[variant=secondary]:active:bg-[var(--button-secondary-bg-active)]
    
    data-[variant=error]:bg-red-500
    data-[variant=error]:text-red-50
    data-[variant=error]:border-red-500
    data-[variant=error]:hover:bg-red-400
    data-[variant=error]:active:bg-red-300
    data-[variant=error]:drop-shadow-none
    data-[variant=error]:pointer-events-none

    data-[variant=busy]:text-transparent
    data-[variant=busy]:border-[var(--button-secondary-border)]
    
    disabled:bg-[var(--button-disabled-bg)]
    disabled:text-[var(--button-disabled-text)]!
    disabled:border-[var(--button-disabled-border)]
    disabled:cursor-default
    disabled:drop-shadow-none
    disabled:pointer-events-none
    
    data-[variant=busy]:pointer-events-none
    
    ${busy && 'pointer-events-none'}
    ${className}`)
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'secondary', children, ...props }, ref) => {
  // const busy = useMemo(() => variant === 'busy', [variant]) // inject skeleton
  return (
    <button data-variant={variant} ref={ref} {...props} className={buttonClassName({ className, variant })}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button