import { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeConTextProvider = ({children}) => {
    // State
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: {
            background: 'rgb(240, 240, 240)',
            color: 'black'
        },
        dark :{
            background: 'rgb(39, 39, 39)',
            color: 'white'
        }
    })

    // Context data
    const themeContextData = {
        theme,
        setTheme,
    } 

    // Return provider
    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeConTextProvider