export const LANG = {
  EN: 'en',
  FI: 'fi',
} as const

export type Lang = typeof LANG[keyof typeof LANG]
