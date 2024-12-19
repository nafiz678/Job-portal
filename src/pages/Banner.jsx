import React from 'react';
import { motion } from "motion/react"
import { easeIn, easeInOut } from 'motion';
import banner from "../assets/image.jpg"


const Banner = () => {
    return (
        <div className="hero  min-h-96">
            <div className="hero-content justify-center flex-col lg:flex-row-reverse">
                <div className='w-[40%] hidden md:block'>
                    <motion.img
                        initial={{
                            
                            
                        }}
                        animate={{
                            y: [0,10,0],
                            animation: easeInOut

                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,

                        }}
                        src="https://img.freepik.com/free-vector/team-business-people-putting-hands-up-together_74855-19906.jpg"
                        className="max-w-sm w-80 rounded-t-3xl border border-b-8 border-blue-600 border-l-8 rounded-br-3xl shadow-2xl" />
                    <motion.img
                        initial={{
                            x: 170,
                            y: -40,

                            
                        }}
                        animate={{
                            x: [160, 173, 160],
                            animation: easeInOut

                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,

                        }}
                        src={banner}
                        className="max-w-sm w-80 rounded-t-3xl border border-b-8 border-blue-600 border-l-8 rounded-br-3xl shadow-2xl" />
                </div>
                <div className='md:w-[50%]'>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ 
                            y: -50,
                            // color: ["blue"],
                            opacity: 1,
                            animation: easeIn
                         }}
                        transition={{
                            duration: 0.5,
                            // repeat: ,Infinity
                            delay: 0.2
                        }}
                        className="text-5xl font-bold">Latest <motion.span
                        animate = {{color: ["#ecff33", "#33ffe3"]}}
                        transition={{duration: 0.8, repeat: Infinity}}
                        >Jobs</motion.span> For You!</motion.h1>
                    <p className="py-6 -mt-12">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;