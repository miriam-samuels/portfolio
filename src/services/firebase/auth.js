import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './config';
import { useMain } from '../index.js';

const AuthContext = React.createContext(null)

export function useAuth() {
    const authConsumer = React.useContext(AuthContext)
    return authConsumer
}

function AuthProvider({ children }) {
    const { changeLoadingState, setMessage, setUser } = useMain()
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
        })
    }, [])


    const signUp = async (email, password, siteId) => {
        changeLoadingState(1, true, "loading")
        let result;
        await setUser({ email, siteId })
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                result = userCredential.user;
                setCurrentUser(result)
                setMessage(true, "account succesfully created")
                changeLoadingState(0, false)
            })
            .catch((error) => {
                const errorMessage = error.message;
                result = false
                setMessage(false, errorMessage)
                changeLoadingState(0, false)
            });
        return result
    }
    const signIn = (email, password) => {
        changeLoadingState(1, true, "loading")
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setMessage(true, "user succesfully signed in")
                setCurrentUser(user)
                changeLoadingState(0, false)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setMessage(false, errorMessage)
                changeLoadingState(0, false)
            });
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