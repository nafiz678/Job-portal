import Loader from '@/components/Loader';
import AuthContext from '@/context/AuthContext';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loader)
    {
        return <div className='flex justify-center items-center min-h-screen'> 
            <Loader></Loader>
        </div>
    }
    

    if(user)
    {
        return children
    }

    return <Navigate to={`/signin`} state={location?.pathname} ></Navigate>
};

export default PrivetRoute;