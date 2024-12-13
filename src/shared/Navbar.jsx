import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import jobLogo from "../assets/logoJobPortal.png"

const Navbar = () => {
    const { user, loader, signOutUser } = useContext(AuthContext)


    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/contactUs"}>About</NavLink></li>
    </>


    const handleSignOut = () => {
        signOutUser()
            .then(res => {
                console.log("Successfully sign out")
            })
            .catch(err => {
                console.log(err.message)
            })
    }





    return (
        <div className="navbar bg-base-100 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm gap-3 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-xl flex items-center justify-center">
                    <img className='w-16' src={jobLogo} alt="" />
                    <h2>Job Portal</h2>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user
                        ?
                        <button onClick={handleSignOut} className='btn'>Log Out</button>
                        :
                        <div>
                            <Link to={"/register"} className='btn mr-2'>Register</Link>
                            <Link to={"/signin"} className="btn">Sign In</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;