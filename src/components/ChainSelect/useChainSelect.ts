import { create } from 'zustand'
import { mainnet } from 'viem/chains'

type ChainSelectStore = {
  selectedChains: Set<number>
  toggleChain: (chainId: number) => void
  clearAll: () => void
  selectAll: (chainIds: number[]) => void
}

export const useChainSelectStore = create<ChainSelectStore>((set) => ({
  selectedChains: new Set([mainnet.id]),
  toggleChain: (chainId: number) =>
    set((state) => {
      const newSet = new Set(state.selectedChains)
      if (newSet.has(chainId)) {
        newSet.delete(chainId)
      } else {
        newSet.add(chainId)
      }
      return { selectedChains: newSet }
    }),
  clearAll: () => set({ selectedChains: new Set() }),
  selectAll: (chainIds: number[]) => set({ selectedChains: new Set(chainIds) }),
}))

export function useChainSelect() {
  const { selectedChains, toggleChain, clearAll, selectAll } = useChainSelectStore()
  return {
    selectedChains,
    toggleChain,
    clearAll,
    selectAll,
    isSelected: (chainId: number) => selectedChains.has(chainId),
  }
}