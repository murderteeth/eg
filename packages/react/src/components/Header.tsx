import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '../lib/cn'

export type HeaderProps = HTMLAttributes<HTMLElement> & {
  className?: string
} 

function headerClassName(props: HeaderProps) {
  const { className } = props
  return cn(`
    px-8 w-full min-h-20 sticky top-0 z-10 
    flex items-center justify-between 
    border-b border-interactive-secondary-border backdrop-blur-lg
    
    ${className}
  `)
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={headerClassName({ className })}
        {...props}
      >
        {children}
      </header>
    )
  }
)

Header.displayName = 'Header'

export default Header