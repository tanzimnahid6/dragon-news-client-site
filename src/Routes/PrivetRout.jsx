import React, { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

const PrivetRout = ({ children }) => {
  const { user ,loading,setLoading} = useContext(AuthContext)
  const location = useLocation()
  //   console.log(location);
  if(loading){
    return <div><h1>Loading.......</h1></div>
  }
  else if (user) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivetRout
