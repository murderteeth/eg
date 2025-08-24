import { ReactNode, useCallback } from 'react'
import { cn } from '../../lib/cn'
import Card from '../elements/Card'
import { useHoverCard } from './useHoverCard'

interface HoverCardProps {
  hoverCardId: string
  trigger: ReactNode
  className?: string
  cardClassName?: string
  wrapperClassName?: string
  children: ReactNode
  alignRight?: boolean
  onHoverStart?: () => void
  onHoverEnd?: () => void
}

const triggerClassName = cn(`
  relative h-8 px-8 py-5
  flex items-center justify-center gap-2
  bg-secondary-800 text-secondary-300 text-2xl
  rounded-primary cursor-default
  drop-shadow-4 drop-shadow-secondary-600/60
  transform -skew-x-20

  group-hover:bg-black
  group-hover:text-primary-50
  `)

export function HoverCardTrigger({ className, children }: { className?: string, children: ReactNode }) {
  return <div className={cn(triggerClassName, className)}>
    <span className="transform skew-x-20">{children}</span>
  </div>
}

export function HoverCard({ hoverCardId, trigger, className, cardClassName, wrapperClassName, children, alignRight = false, onHoverStart, onHoverEnd }: HoverCardProps) {
  const { isOpen, openHoverCard, closeHoverCard } = useHoverCard(hoverCardId)

  const handleHoverStart = useCallback(() => {
    onHoverStart?.()
    openHoverCard()
  }, [onHoverStart, openHoverCard])

  const handleHoverEnd = useCallback(() => {
    onHoverEnd?.()
    closeHoverCard()
  }, [onHoverEnd, closeHoverCard])

  return <div data-open={isOpen} className={cn('relative group pointer-events-auto', className)} 
    onMouseEnter={handleHoverStart}
    onMouseLeave={handleHoverEnd}>
    {trigger}
    <div className={cn('p-4 group-data-[open=false]:hidden group-hover:block absolute z-10000', alignRight ? '-right-6' : '-left-6', wrapperClassName)}>
      <Card className={cn('border border-secondary-800/8', cardClassName)}>
        {children}
      </Card>
    </div>
  </div>
}