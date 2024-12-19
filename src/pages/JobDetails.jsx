import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData()
    const { title, company, company_logo, _id, applicationDeadline, responsibilities, requirements, description, status, location, salaryRange } = data
    return (
        <div className="min-h-screen p-6">
            {/* Header Section */}

            <div className="max-w-4xl mx-auto  shadow-md rounded-lg p-6 border">
                <div className="flex items-center justify-between ">
                    <div>
                        <h1 className="text-2xl font-bold ">
                            {title}
                        </h1>
                        <p className=" mt-1">{company} • {location}</p>
                    </div>
                    <div className="text-right">
                        <span className="text-sm text-gray-500">4 minutes ago</span>
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <span className="text-sm bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
                        Fulltime
                    </span>
                    <span className="ml-2 text-sm bg-green-100 text-green-500 px-2 py-1 rounded-full">
                        Salary: {salaryRange.min}-{salaryRange.max} <span className='uppercase'>{salaryRange.currency}</span>
                    </span>
                </div>
            </div>

            {/* Job Description Section */}
            <div className="max-w-4xl mx-auto  shadow-md rounded-lg mt-6 p-6 border">
                <h2 className="text-xl font-semibold ">Job Description</h2>
                <p className=" mt-3">
                    {description}
                </p>
                <h2 className="text-xl font-semibold mt-6 ">Job Responsibilities</h2>
                <ul className=" mt-3">
                    {responsibilities?.map((response, idx) => <li key={idx} className='list-disc ml-5'>{response}</li>)}
                </ul>
            </div>

            {/* Required Skills Section */}
            <div className="max-w-4xl mx-auto  shadow-md rounded-lg mt-6 p-6 border">
                <h2 className="text-xl font-semibold ">Required Skills</h2>
                <div className="flex flex-wrap gap-2 mt-4">
                    {requirements?.map((req,idx) =>
                        <span key={idx} className="text-sm bg-gray-400 text-gray-800 px-3 py-1 rounded-full">
                            {req}
                        </span>)}
                </div>
            </div>

            {/* Company Info Section */}
            <div className="max-w-4xl flex items-center justify-between mx-auto border shadow-md rounded-lg mt-6 p-6">
                <div>
                    <h2 className="text-xl font-semibold ">Company Info</h2>
                    <p className=" mt-3">
                        <strong>Company:</strong> {company}
                    </p>
                    <p className="">
                        <strong>Location:</strong> {location}
                    </p>
                    <p className="">
                        <strong>Website:</strong>{" "}
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {company}
                        </a>
                    </p>
                </div>
                <div className='h-28 w-auto'>
                <img className='w-full h-full'  src={company_logo} alt="" />
                </div>
            </div>

            {/* Apply Button Section */}
            <div className="max-w-4xl mx-auto border shadow-md rounded-lg mt-6 p-6 flex justify-center">
                <Link to={`/jobApply/${_id}`} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                    Apply Now
                </Link>
            </div>
        </div>
    );
};

export default JobDetails;