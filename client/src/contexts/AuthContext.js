import React, { createContext } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [loginState, setLoginState] = useState({
        isLoggedIn: false
    })

    const toggleAuth = () => {
        setLoginState({ isLoggedIn: !loginState.isLoggedIn })
    }

    return (
        <AuthContext.Provider value={{ ...loginState, toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;