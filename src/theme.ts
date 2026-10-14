export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'coding-cheat-sheet-theme'
const LEGACY_THEME_STORAGE_KEY = 'fe-cheat-sheet-theme'

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function readStoredTheme(): Theme | null {
  try {
    const stored =
      localStorage.getItem(THEME_STORAGE_KEY) ??
      localStorage.getItem(LEGACY_THEME_STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
}

export function getInitialTheme(): Theme {
  return readStoredTheme() ?? getSystemTheme()
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.style.colorScheme = theme
}
