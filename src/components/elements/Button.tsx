import { type ButtonHTMLAttributes, forwardRef, useMemo } from 'react'
import { cn } from '../../lib/cn'

export type ThemeName = 'default' | 'disabled' | 'busy' | 'error'
export type Hierarchy = 'primary' | 'secondary'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  theme?: ThemeName
  h?: Hierarchy
}

export function buttonClassName(props: ButtonProps) {
  const { className, theme, h } = props
  const busy = theme === 'busy'
  const bg = theme === 'error' ? 'bg-red-500' : h === 'secondary' ? 'bg-secondary-800' : 'bg-primary-500'
  const text = theme === 'error' ? 'text-red-50' : h === 'secondary' ? 'text-secondary-300' : 'text-primary-950'
  return cn(`
    relative h-8 px-8 py-5 flex items-center justify-center
    ${bg} text-2xl ${text} tracking-wide
    drop-shadow-4 drop-shadow-black

    hover:bg-primary-400 data-[h=secondary]:hover:bg-secondary-700

    active:bg-primary-200 data-[h=secondary]:active:bg-secondary-600

    border data-[h=secondary]:border-secondary-600 border-primary-300

    disabled:bg-secondary-800
    disabled:text-secondary-600
    disabled:hover:text-secondary-600
    disabled:border-secondary-600
    disabled:cursor-default
    disabled:drop-shadow-none
    disabled:pointer-events-none

    data-[theme=error]:drop-shadow-none
    data-[theme=error]:border-red-500

    transform -skew-x-20

    cursor-pointer rounded-primary whitespace-nowrap
    ${(busy || theme === 'error') && 'pointer-events-none'}
    ${`theme-${theme ?? 'default'}`}
    ${className}`)
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, theme, h, children, ...props }, ref) => {
  const busy = useMemo(() => theme === 'busy', [theme])
  return (
    <button data-theme={theme} data-h={h} ref={ref} {...props} className={buttonClassName({ className, theme, h })}>
      <span className="transform skew-x-20">
        {!busy && children}
      </span>
    </button>
  )
})

Button.displayName = 'Button'

export default Button