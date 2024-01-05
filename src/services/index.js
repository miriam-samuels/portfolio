// comments show minimal information
// check docs for more information

import React, { useContext, useEffect, useState } from 'react'
import { collection, doc, setDoc, getDocs, getDoc, addDoc, query, where } from "firebase/firestore";
import { db } from './firebase/config'


const MainContext = React.createContext(null)

export function useMain() {
    const mainConsumer = useContext(MainContext)
    return mainConsumer
}

function MainProvider({ children }) {
    const [msg, setMsg] = useState([])
    const [isLoading, setIsLoading] = useState({ id: 0, status: false, message: "" })



    // function to set user feedbck
    const setMessage = (state, message) => {
        const newMsg = { index: (msg.length - 1), state, message }
        setMsg([newMsg, ...msg])
        clearMsg(msg.length - 1)
    }

    // function to toggle loader  
    const changeLoadingState = (id, status, message) => {
        setIsLoading({ id, status, message })
    }

    // function to remove a particular message from message array
    const clearMsg = (idx) => {
        setTimeout(() => {
            setMsg(msg.filter((item) => item.index !== idx))
        }, 5000)
    }

    // function to get a user 
    const getUser = async (key, value) => {
        changeLoadingState(1, true, "checking")
        let result;
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/userinfo/johndoe`, {
                method: "GET",
            })
            result = await res.json()
            if (result.status) {
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

    // function to create and continuosly update a user in db
    const setUser = async (user) => {
        changeLoadingState(1, true, "updating...")
        let result;
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/userinfo/${user?.siteId}`, {
                method: "PUT",
                body: JSON.stringify(user)
            })
            result = await res.json()
            if (result.status) {
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

    // get all available themes
    const getThemes = async () => {
        changeLoadingState(1, true, "fetching themes")
        let result;
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/theme/all`, {
                method: "GET",
            })
            result = await res.json()
            if (result.status) {
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

    // get all user routes
    const getRoutes = async () => {
        changeLoadingState(1, true, "fetching routes")
        let result;
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/routes`, {
                method: "GET",
            })
            result = await res.json()
            if (result.status) {
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
        getUser,
        setUser,
        setMessage,
        changeLoadingState,
        getThemes,
        getRoutes,
        isLoading,
        msg,
    }
    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider