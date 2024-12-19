import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProviderContext } from './theme-provider';

const HotJobCard = ({ job }) => {
    const { theme} = useContext(ThemeProviderContext)

    const { title, company, company_logo, applicationDeadline, requirements, description, status, location, salaryRange } = job


    return (
        <div className={` hover:text-[#111111] group  shadow-lg rounded-lg px-4 pb-5 pt-3 space-y-4 hover:-translate-y-[5px] hover:shadow-lg duration-500 transition  ease-in-out border ${theme === "dark" ? "hover:bg-orange-200 " : ""}`}>
            {/* Header Section */}
            <div className="flex items-center pt-5 pb-2 relative">
                <img
                    src={company_logo}
                    alt="Company Logo"
                    className="w-16 pr-4 h-12 rounded-full"
                />
                <div>
                    <h3 className="text-lg hover:text-[#3c65f5] transition duration-300 cursor-pointer  font-semibold">{company}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1"><img src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/location.dac4c399.svg" alt="" />{location}</p>
                </div>
                <div className=" text-green-500">
                    <img className='absolute top-0 right-0' src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/flash.aea6c8a8.svg" alt="" />
                </div>
            </div>

            {/* Job Details */}
            <div>
                <h2 className="text-lg font-bold hover:text-[#3c65f5] transition duration-300 cursor-pointer">{title}</h2>
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <span className='capitalize badge text-green-400 mt-1'>{status}</span>
                    {/* <span>.</span> */}
                    <span>Deadline: {applicationDeadline}</span>
                </div>
            </div>

            {/* Job Description */}
            <p className={` text-sm text-gray-500`}>{description.slice(0,50)}...</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 h-16">
                {requirements?.map((require, idx )=> 
                <span key={idx} className="bg-[#eff3fc] h-[45%] text-gray-500 hover:text-[#3c65f5] duration-300 cursor-pointer text-sm px-3 py-1 rounded-lg">{require}</span>)}
            </div>

            {/* Footer */}
            <div className="flex flex-col  justify-start">
                <span className="text-blue-500 text-xl font-bold mb-3">
                    Salary: {salaryRange.min}-{salaryRange.max} <span className='capitalize'>{salaryRange.currency}</span>
                </span>
                <Link to={`/jobs/${job._id}`} className="bg-blue-100 text-center  text-[#3c65f5] group-hover:bg-blue-500 group-hover:text-white transition hover:bg-blue-500  text-sm px-4 py-2 rounded-md duration-400">
                    Apply Now
                </Link>
            </div>
        </div>
    );
};

export default HotJobCard;