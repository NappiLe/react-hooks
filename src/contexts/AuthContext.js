import {createContext, useState} from "react"

export const AuthContext= createContext()

const AuthContextProvider = ({children}) => {
    // State
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // Context data
    const authContextData = {
        auth: isAuthenticated,
        setAuth: setIsAuthenticated
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider