import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const token = window.localStorage.getItem('token');
    let location = useLocation();

    if(!token) {
        return <Navigate to="/signin" state={{ from: location}} replace />
    }
 return children
  
};

export default ProtectedRoute;