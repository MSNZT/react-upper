import {createContext} from "react";

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark'
}

export interface ThemeContext {
	theme?: Theme,
	setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContext>({});

export const THEME_LOCALSTORAGE_KEY = 'theme';