import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
    baseURL: "https://job-portal-server-sigma-seven.vercel.app",
    withCredentials: true
})

const useAxios = () => {

    const {signOutUser} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response
        },error=>{
            if(error.status === 401 || error.status === 403)
            {
                signOutUser()
                .then(res=>{
                    navigate("/signIn")
                    console.log(res)
                })
                .catch(err=> {
                    console.log(err)
                })
            }
            return Promise.reject(error)
        } )
    }, [])

    return axiosInstance;
};

export default useAxios;


/**
 * 
 * axios: get, post, put/patch, delete ---> easier
 * interceptor
 * 
 */