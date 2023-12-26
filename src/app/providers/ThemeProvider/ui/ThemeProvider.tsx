import type React from 'react'
import {type FC, useMemo, useState} from 'react'
import {Theme, THEME_LOCALSTORAGE_KEY, ThemeContext} from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  children: React.ReactNode
  initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
  
  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])
  
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
