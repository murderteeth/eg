import { create } from 'zustand'
import { mainnet } from 'viem/chains'

type ChainsStore = {
  selectedChains: Set<number>
  toggleChain: (chainId: number) => void
  clearAll: () => void
  selectAll: (chainIds: number[]) => void
}

export const useChainsStore = create<ChainsStore>((set) => ({
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

export function useChains() {
  const { selectedChains, toggleChain, clearAll, selectAll } = useChainsStore()
  return {
    selectedChains,
    toggleChain,
    clearAll,
    selectAll,
    isSelected: (chainId: number) => selectedChains.has(chainId),
  }
}