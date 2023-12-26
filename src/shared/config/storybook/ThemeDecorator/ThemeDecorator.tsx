import { type Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import { type StoryFn } from '@storybook/react'
import { ThemeProvider } from '@/app/providers/ThemeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent/>
      </div>
    </ThemeProvider>
  )
}
