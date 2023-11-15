import { createContext,useContext } from "react";

const themeContext = createContext({
    themeMode : "ligt",
    lightMode : () =>{},
    darkMode : () =>{},
})

export  const ThemeProvider = themeContext.Provider;
export default function useTheme () {
    return useContext(themeContext)
}

