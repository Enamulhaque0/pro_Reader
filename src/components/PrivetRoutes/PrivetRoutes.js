import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const PrivetRoutes = ({children}) => {
    const location = useLocation()

    const {user,loader} = useContext(AuthContext)
if(loader){
    return <div className="flex items-center justify-center space-x-2 mt-16">
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
    <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
  </div>
}
    if(user && user.uid){
        return children
    }
    

    return <Navigate to="/login"state={{from: location}} replace></Navigate>
};


export default PrivetRoutes;