import { type ButtonHTMLAttributes, forwardRef, useMemo } from 'react'
import { cn } from '../../lib/cn'

export type ThemeName = 'default' | 'disabled' | 'busy' | 'error'
export type Hierarchy = 'primary' | 'secondary'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  theme?: ThemeName
  h?: Hierarchy
}

function buttonClassName(props: ButtonProps) {
  const { className, theme, h } = props
  const busy = theme === 'busy'
  const isPrimary = h !== 'secondary'
  
  return cn(`
    relative h-8 px-8 py-5 flex items-center justify-center
    text-2xl tracking-wide
    drop-shadow-4 drop-shadow-black
    
    ${isPrimary ? `
      bg-[var(--button-primary-bg)]
      text-[var(--button-primary-text)]
      border-[var(--button-primary-border)]
      hover:bg-[var(--button-primary-bg-hover)]
      active:bg-[var(--button-primary-bg-active)]
    ` : `
      bg-[var(--button-secondary-bg)]
      text-[var(--button-secondary-text)]
      border-[var(--button-secondary-border)]
      hover:bg-[var(--button-secondary-bg-hover)]
      active:bg-[var(--button-secondary-bg-active)]
    `}
    
    ${theme === 'error' ? `
      bg-red-500 text-red-50 border-red-500
      hover:bg-red-400 active:bg-red-300
    ` : ''}

    border

    disabled:bg-[var(--button-disabled-bg)]
    disabled:text-[var(--button-disabled-text)]
    disabled:hover:text-[var(--button-disabled-text)]
    disabled:border-[var(--button-disabled-border)]
    disabled:cursor-default
    disabled:drop-shadow-none
    disabled:pointer-events-none

    data-[theme=error]:drop-shadow-none

    cursor-pointer rounded-primary whitespace-nowrap
    ${(busy || theme === 'error') && 'pointer-events-none'}
    ${`theme-${theme ?? 'default'}`}
    ${className}`)
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, theme, h, children, ...props }, ref) => {
  const busy = useMemo(() => theme === 'busy', [theme])
  return (
    <button data-theme={theme} data-h={h} ref={ref} {...props} className={buttonClassName({ className, theme, h })}>
      {!busy && children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button