import { cn } from '../../lib/cn'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string
  header?: ReactNode
}

export function cardClassName(props: CardProps) {
  const { className } = props
  return cn(`relative rounded-primary p-6 flex flex-col gap-3 drop-shadow-6 drop-shadow-black
    bg-secondary-800 text-primary-50 outline-0 outline-secondary-400/40 ${className}`)
}

export function CardHeader({ className, children }: { className?: string, children: ReactNode }) {
  return <div className={cn('w-full px-6 py-3 flex items-center gap-2 tracking-wide rounded-t-primary', className)}>
    {children}
  </div>
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, header, className, ...props }, ref) => {
  return <div ref={ref} className={cardClassName({ className })} {...props}>
    {header && <div className="-mt-6 -mx-6 flex items-center gap-2">
      {header}
    </div>}
    {children}
  </div>
})

Card.displayName = 'Card'

export default Card