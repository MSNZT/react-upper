import {Theme} from "@/app/providers/ThemeProvider/lib/ThemeContext";
import {StoryFn} from "@storybook/react";
import {ThemeProvider} from "@/app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent/>
      </div>
    </ThemeProvider>
  )
}
