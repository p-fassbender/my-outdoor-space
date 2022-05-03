import React, { createContext, useContext } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [state, setState] = useState({
        isLoggedIn: false
    })

    toggleAuth = () => {
        setState({ isLoggedIn: !state.isLoggedIn })
    }

    return (
        <AuthContext.Provider value={{ ...state, toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;