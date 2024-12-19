import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerAnimation from "../assets/Animation - 1733895200830.json"
import AuthContext from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    // const from = location.pathname || "/"


    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signInUser(email, password)
            .then(res => {
                console.log(res.user)

                const user = { email: res.user.email }
                axios.post(`https://job-portal-server-sigma-seven.vercel.app/jwt`, user,{withCredentials: true} )
                .then(res=>{
                    console.log(res)
                })


                navigate(location.state || "/")
            })
            .catch(error => console.log(error.message))
    }


    return (
        <div className='flex gap-16 justify-center items-center md:p-10 bg-base-300 rounded-lg my-10'>
            <div className="my-10 flex items-center justify-center ">
                <div className="w-full md:max-w-md bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
                        Login to Your Job Portal Account
                    </h2>
                    <form onSubmit={handleSignIn} className="space-y-6">

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-950 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg duration-500 transition
                            hover:-translate-y-[2px] hover:shadow-lg  ease-in-out "
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Lottie className='w-1/4 hidden md:block' animationData={registerAnimation} loop={true}  ></Lottie>
        </div>
    );
};

export default SignIn;