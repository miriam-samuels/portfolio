import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase/config.js';
import { useMain } from './index.js';

const AuthContext = React.createContext(null)

export function useAuth() {
    const authConsumer = React.useContext(AuthContext)
    return authConsumer
}

function AuthProvider({ children }) {
    const { changeLoadingState, setMessage, setUser } = useMain()
    const [currentUser, setCurrentUser] = useState(null)


    const signUp = async (email, password, siteId) => {
        changeLoadingState(1, true, "loading")
        let result;
        await setUser({ email, siteId })
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/signup`, {
                method: "POST",
                body: JSON.stringify({ email, password, username: siteId })
            })
            result = await res.json()
            if (result.status) {
                setCurrentUser(result?.data)
                setMessage(true, result?.message)
                changeLoadingState(0, false)
                localStorage.setItem('siteId', siteId)
            } else {
                throw new Error(result?.message);
            }
            return result
        } catch (error) {
            setMessage(false, error.message)
            changeLoadingState(0, false)
        }

        return result
    }
    const signIn = async (email, password) => {
        changeLoadingState(1, true, "loading")
        let result;
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/signin`, {
                method: "POST",
                body: JSON.stringify({ email, password })
            })
            result = await res.json()
            if (result.status) {
                setCurrentUser(result?.data)
                setMessage(true, result?.message)
                changeLoadingState(0, false)
            } else {
                throw new Error(result?.message);
            }
            return result
        } catch (error) {
            setMessage(false, error.message)
            changeLoadingState(0, false)
        }
        return result
    }


    const value = {
        signIn,
        signUp,
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider