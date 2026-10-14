import { useEffect, useState } from 'react'

import {
  applyTheme,
  getInitialTheme,
  type Theme,
  THEME_STORAGE_KEY,
} from '../theme'

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    applyTheme(theme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Ignore quota / private-mode failures.
    }
  }, [theme])

  function setTheme(next: Theme) {
    setThemeState(next)
  }

  function toggleTheme() {
    setThemeState((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return { theme, setTheme, toggleTheme }
}
