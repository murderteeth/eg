const BASE_URL = 'https://cdn.jsdelivr.net/gh/yearn/tokenAssets@main/'

export function getChainIconUrl(chainId: number) {
  return `${BASE_URL}chains/${chainId}/logo.svg`
}

export function getTokenIconUrl(chainId: number, address: string) {
  return `${BASE_URL}tokens/${chainId}/${address.toLowerCase()}/logo.svg`
}