import { useContext, createContext } from "react";

// createContext
export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
})

// ContextProvider
export const ThemeProvider = ThemeContext.Provider

// useContext
export default function useTheme() {
  return useContext(ThemeContext)
}