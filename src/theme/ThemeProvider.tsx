import React, {FC, useMemo, useState} from "react";
import {Theme, THEME_LOCALSTORAGE_KEY, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
	children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	
	const defaultProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme
	}), [theme])
	
	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}
export default ThemeProvider;