import {classNames} from '@/shared/lib/classNames/classNames'

import {Button, ButtonTheme} from '@/shared/ui/Button/ui/Button'
import {useTheme} from '@/app/providers/ThemeProvider'
import {Theme} from '@/app/providers/ThemeProvider/lib/ThemeContext'

import ThemeDark from '@/shared/assets/icons/theme-dark.svg'
import ThemeLight from '@/shared/assets/icons/theme-light.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
    </Button>
  )
}
