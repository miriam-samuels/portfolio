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
    const [routes, setRoutes] = useState(null)
    const [msg, setMsg] = useState([])
    const [isLoading, setIsLoading] = useState({ id: 0, status: false, message: "" })


    useEffect(() => {
        if (routes === null) getRoutes()
    }, [routes])


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

    // function to get all routes
    const getRoutes = async () => {
        let docs = []
        try {
            const querySnapshot = await getDocs(collection(db, "routes"))
            querySnapshot.forEach((doc) => {
                docs.push({ docId: doc.id, ...doc.data() })
            })
            setRoutes(docs)
            changeLoadingState(0, false)
        } catch (error) {
            setMessage(true, "something went wrong")
            changeLoadingState(0, false)
        }
    }

    // function to get a particular route
    const getRoute = async (siteId) => {
        changeLoadingState(1, true, "checking")
        let result;
        try {
            const docSnap = await getDoc(doc(db, "routes", `${siteId}`));
            console.log(docSnap.exists());
            if (docSnap.exists()) {
                setMessage(true, "site id already exists");
                changeLoadingState(0, false, "");
                result = true
            } else {
                changeLoadingState(0, false, "");
                result = false
            }
        } catch (e) {
            setMessage(true, "something went wrong")
            changeLoadingState(0, false)
        }
        return result
    }

    // function to create and continuosly update a user in db
    const setUser = async (user) => {
        let result;
        changeLoadingState(1, true, "updating...")
        try {
            await setDoc(doc(db, "users", `${user?.email}&id=${user?.siteId}`), { ...user }, { merge: true });
            result = true;
        } catch (e) {
            setMessage(true, "failed to update user details")
            result = false;
        }
        changeLoadingState(0, false, "")
        return result
    }

    // function to add a new route
    const addRoute = async (route) => {
        setIsLoading({ id: 1, status: true })
        try {
            await setDoc(doc(db, "routes", route?.siteId), { ...route });
        } catch (e) {
            console.error("Error adding document: ", e);
            setIsLoading({ id: 0, status: false })
        }
    }

    const getUsers = async (email) => {
        changeLoadingState(1, true)
        let docs = []
        try {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                docs.push({ docId: doc.id, ...doc.data() })
            })
            changeLoadingState(0, false)
        } catch (e) {
            console.error("Error adding document: ", e);
            setMessage(true, "couldn't find docs")
            changeLoadingState(0, false)
        }
        return docs
    }

    const getUser = async (key, value) => {
        changeLoadingState(1, true, "checking")
        let result;
        try {
            const q = query(collection(db, "users"), where(key, "==", value));
            const docSnap = await getDocs(q)
            docSnap.forEach((doc) => {
                const userDoc = doc.data()
                if (userDoc[key] === value) {
                    setMessage(true, "user already exists")
                    changeLoadingState(0, false)
                    result = { docId: doc.id, ...userDoc }
                } else result = false
            })
        } catch (e) {
            result = "something went wrong"
            setMessage(true, result)
            changeLoadingState(0, false)
        }
        changeLoadingState(0, false)
        return result
    }

    const value = {
        getRoutes,
        getUsers,
        getUser,
        getRoute,
        setUser,
        setMessage,
        changeLoadingState,
        isLoading,
        routes,
        msg,
    }
    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider