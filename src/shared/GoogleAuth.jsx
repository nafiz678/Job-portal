import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const GoogleAuth = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const googleLogIn = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user)
                navigate("/")
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div>
            <button onClick={googleLogIn} className='w-full bg-blue-950 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:-translate-y-[2px] hover:shadow-lg duration-200 ease-in-out '>Google</button>
        </div>
    );
};

export default GoogleAuth;
