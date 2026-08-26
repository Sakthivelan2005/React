import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({isLogin, children}) => {

    if(isLogin){
        return children
    }
    else{
        return <Navigate to={'/'} />
    }
}
