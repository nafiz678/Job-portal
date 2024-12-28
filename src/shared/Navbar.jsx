import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import jobLogo from "../assets/logoJobPortal.png"
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const Navbar = () => {
    const { user, loader, signOutUser } = useContext(AuthContext)


    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/allJobs"}>All Jobs</NavLink></li>
        <li><NavLink to={"/myApplications"}>My Applications</NavLink></li>
        <li><NavLink to={"/addJob"}>Add a Job</NavLink></li>
        <li><NavLink to={"/myPostedJobs"}>My Posted Jobs</NavLink></li>
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
        <div className="navbar z-50">
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
                        className={`menu menu-sm gap-3 dropdown-content bg-blue-200 rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                        {user ?
                            <div className=' flex items-center flex-row-reverse justify-between gap-2 mr-4'>
                                <li onClick={handleSignOut}><Button>Logout</Button></li>
                                <img referrerPolicy='no-referrer' className='w-10 h-10 rounded-full' src={user.photoURL} alt="Profile" />
                            </div>
                            :
                            ""
                        }
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/myApplications"}>My Applications</NavLink></li>
                        <li><NavLink to={"/addJob"}>Add a Job</NavLink></li>
                        {user ?
                            ""
                            :
                            <>
                                <li>
                                    <NavLink to={"/register"} className="mr-4">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/signin"} className="mr-4">Sign In</NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                <Link to={"/"} className="text-xl flex items-center justify-center">
                    <img className='w-16' src={jobLogo} alt="" />
                    <h2 className='hidden md:inline-block'>Job Portal</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {loader ?
                    ""
                    :
                    user
                        ?
                        <div  className=' hidden md:flex items-center gap-2 mr-4'>
                            <Button onClick={handleSignOut}>Logout</Button>
                            <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="Profile" />
                        </div>
                        :
                        <div className='hidden md:inline-block'>
                            <Link to={"/register"} className='mr-2'>
                                <Button>Register</Button>
                            </Link>
                            <Link to={"/signin"} className="mr-4">
                                <Button className={""} >Sign In</Button>
                            </Link>
                        </div>
                }
                <div>
                    <ModeToggle></ModeToggle>
                </div>

            </div>
        </div>
    );
};

export default Navbar;