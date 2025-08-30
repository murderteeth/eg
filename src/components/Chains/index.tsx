import { useMemo, memo } from 'react'
import { PiFireSimpleFill } from 'react-icons/pi'
import { cn } from '../../lib/cn'
import { chains } from '../../lib/chains'
import { HoverCard, HoverCardTrigger } from '../HoverCard'
import FlyInFromBottom from '../motion/FlyInFromBottom'
import ChainIcon from '../ChainIcon'
import { useChains } from './useChains'
import { useMounted } from '../../hooks/useMounted'

const ChainItem = memo(({ chainId }: { chainId: number }) => {
  const { toggleChain, isSelected } = useChains()
  const chain = chains[chainId]
  const selected = isSelected(chainId)
  
  return (
    <button
      onClick={() => toggleChain(chainId)}
      className={cn(
        'group/icon w-full px-4 py-3 flex items-center',
        'hover:bg-[var(--button-secondary-bg-hover)] transition-colors',
        'active:bg-[var(--button-secondary-bg-active)]',
        'text-left text-xl cursor-pointer',
        'text-[var(--foreground)]'
      )}
    >
      <div className="relative w-8 h-8 overflow-hidden rounded-lg">
        <ChainIcon 
          chainId={chainId} 
          size={32}
          className="group-hover/icon:scale-200 group-hover/icon:rotate-12 transition-all duration-200"
        />
      </div>
      <span className="flex-1 ml-4">{chain?.name || `Chain ${chainId}`}</span>
      {selected && (
        <div className="w-3 h-3 rounded-full bg-[var(--button-secondary-border)]" />
      )}
    </button>
  )
})

export function Chains() {
  const { selectedChains, clearAll, selectAll } = useChains()
  const mounted = useMounted()
  
  const chainIds = useMemo(() => Object.keys(chains).map(Number), [])
  const selectedArray = useMemo(() => chainIds.filter(id => selectedChains.has(id)), [selectedChains, chainIds])
  const allSelected = useMemo(() => selectedArray.length === chainIds.length, [selectedArray.length, chainIds.length])
  
  const handleToggleAll = () => {
    if (selectedArray.length === chainIds.length) {
      clearAll()
    } else {
      selectAll(chainIds)
    }
  }
  
  return (
    <div className="relative select-none">
      {allSelected && (
        <FlyInFromBottom _key="all-chains-indicator" className="absolute -top-6 left-0 ml-2">
          <div className="flex items-center gap-1 text-sm italic">
            <PiFireSimpleFill />
            All chains
          </div>
        </FlyInFromBottom>
      )}
      <HoverCard 
        hoverCardId="chains-selector"
        trigger={
          <HoverCardTrigger 
            className="w-80 justify-start"
            onClick={handleToggleAll}
          >
            <span className="flex items-center w-full">
              {selectedArray.length === 0 && 'Select chains..'}
              {selectedArray.length === 1 && (
                <>
                  <FlyInFromBottom _key={`chain-${selectedArray[0]}`} parentMounted={mounted}>
                    <ChainIcon chainId={selectedArray[0]} size={40} bgClassName="drop-shadow-2" />
                  </FlyInFromBottom>
                  <span className="ml-4">{chains[selectedArray[0]]?.name || 'Unknown'}</span>
                </>
              )}
              {selectedArray.length > 1 && (
                <div className="flex items-center">
                  {selectedArray.map((chainId, index) => (
                    <div 
                      key={chainId} 
                      className="relative"
                      style={{ marginLeft: index === 0 ? 0 : -16 }}
                    >
                      <FlyInFromBottom _key={`chain-${chainId}`} parentMounted={mounted}>
                        <ChainIcon chainId={chainId} size={40} bgClassName="drop-shadow-2" />
                      </FlyInFromBottom>
                    </div>
                  ))}
                </div>
              )}
            </span>
          </HoverCardTrigger>
        }
        cardClassName="p-0 w-80 max-h-96 overflow-y-auto"
      >
        <div>
          {chainIds.map((chainId) => (
            <ChainItem key={chainId} chainId={chainId} />
          ))}
        </div>
      </HoverCard>
    </div>
  )
}