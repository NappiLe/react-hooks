import {useContext} from 'react'
import Button from "react-bootstrap/Button"
import { ThemeContext } from '../contexts/ThemeContext'

export const ToggleButton = () => {
    const {setTheme, theme} = useContext(ThemeContext)

    const {isLightTheme, light, dark} = theme

    const style = isLightTheme ? light: dark
    
    const handleSetTheme = () => {
        setTheme({
            ...theme, 
            isLightTheme: !theme.isLightTheme
        })
    }

    return (
        <div className="toggle-btn" ><Button variant="light" onClick={handleSetTheme} style={style}>Toggle Theme</Button></div>
    )
}
