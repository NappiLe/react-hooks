import {useContext} from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import Button from "react-bootstrap/Button"
import { AuthContext } from "../contexts/AuthContext"

function Navbar() {
    const {theme} = useContext(ThemeContext)
    const {auth, setAuth} = useContext(AuthContext)

    const {isLightTheme, light, dark} = theme
    const style = isLightTheme ? light : dark

    return (
        <div className="navbar" style={style}>
            <h1>My Hooks App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    
                    { auth ? (
                            <>
                                <p>You are logged in</p>
                                <Button variant="light" onClick={() => setAuth(false)}>Logout</Button>
                            </>
                        )
                        :  
                            <Button variant="light" onClick={() => setAuth(true)}>Login</Button>
                    }
                </li>
            </ul>
        </div>
    )
}

export default Navbar
