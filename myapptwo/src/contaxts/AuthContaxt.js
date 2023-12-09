import React, { createContext, useContext, useReducer } from 'react'

const AuthContaxt = createContext()
const initialState = { isAuth: false }

const reducer = (state, { type }) => {
    switch (type) {
        case "Login":
            return Object.assign({}, { isAuth: true })
        case "Logout":
            return Object.assign({}, { isAuth: false })
        default:
            return state
    }
}
export default function AuthContaxtProvider(props) {
const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthContaxt.Provider value={{...state, dispatch}}>
            {props.children}
        </AuthContaxt.Provider>
    )
}

export const useAuthContaxt = () => useContext(AuthContaxt)