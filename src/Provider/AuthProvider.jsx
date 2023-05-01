import React, { useEffect, useState } from "react"
import { createContext } from "react"
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"
import app from "../_firebase.congif"
export const AuthContext = createContext(null)

const auth = getAuth(app)


//send context api data
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  //user observations  ======================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])
  //create user with email and password
const createUser = (email, password) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
}

//sign in user with email and password
const signInUser = (email, password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}
//signOut User
const logOut = () => {
  setLoading(true)
  return signOut(auth)
}
  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    loading,
    setLoading,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
