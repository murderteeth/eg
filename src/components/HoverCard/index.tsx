import { useCallback } from 'react'
import type { ReactNode } from 'react'
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
  flex items-center gap-2
  bg-secondary-800 text-secondary-300 text-2xl
  rounded-primary cursor-pointer
  drop-shadow-4 drop-shadow-secondary-600/60

  group-hover:bg-secondary-700
  group-hover:text-primary-50
  active:bg-secondary-600
  `)

export function HoverCardTrigger({ className, children, onClick }: { className?: string, children: ReactNode, onClick?: () => void }) {
  return <div className={cn(triggerClassName, className)} onClick={onClick}>
    {children}
  </div>
}

export function HoverCard({ hoverCardId, trigger, className, cardClassName, wrapperClassName, children, onHoverStart, onHoverEnd }: HoverCardProps) {
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
    <div className={cn('px-5 -ml-5 py-4 group-data-[open=false]:hidden group-hover:block absolute z-10000', wrapperClassName)}>
      <Card className={cn('border border-secondary-800/8', cardClassName)}>
        {children}
      </Card>
    </div>
  </div>
}