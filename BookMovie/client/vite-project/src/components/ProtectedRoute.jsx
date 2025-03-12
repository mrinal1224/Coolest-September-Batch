import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function ProtectedRoute({children}) {
   const naviagte = useNavigate()

  useEffect(()=>{
     if(localStorage.getItem('token')){
        naviagte('/')
     }
     else{
         naviagte('/login')
     }
  }, [])

  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute