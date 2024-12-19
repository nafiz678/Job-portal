import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }

    const updateUser = (info) => {
        return updateProfile(auth.currentUser, info)
    }

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);


            if(currentUser?.email)
            {
                const user = {email: currentUser.email}

                axios.post("https://job-portal-server-sigma-seven.vercel.app/jwt", user, {withCredentials: true})
                .then(res=>{
                    console.log(res)
                    setLoader(false)
                }) 
            } else{
                axios.post("https://job-portal-server-sigma-seven.vercel.app/logout", {}, {withCredentials: true})
                .then(res=>{
                    console.log("logout: ",res.data)
                    setLoader(false);
                })
            }
            


            console.log("State Captured", currentUser)

        })

        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        loader,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUser,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;