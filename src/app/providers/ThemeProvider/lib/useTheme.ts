import {useContext} from 'react'
import {Theme, THEME_LOCALSTORAGE_KEY, ThemeContext} from './ThemeContext'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { setTheme, theme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme?.(newTheme)
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme)
  }

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme
  }
}
