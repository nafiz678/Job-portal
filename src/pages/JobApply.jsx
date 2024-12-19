import AuthContext from '@/context/AuthContext';
import useAuth from '@/hooks/useAuth';
import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const JobApply = () => {
    const data = useLoaderData()
    const { user } = useAuth()
    const navigate = useNavigate()
    console.log(user)



    const handleSubmit = async(e) => {
        e.preventDefault();

        const form = e.target
        const linkedIn = form.linkedIn.value
        const name = form.name.value
        const github = form.github.value
        const resume = form.resume.value
        const coverLetter = form.coverLetter.value
        // const formData = { linkedIn, name, userEmail, github, resume, coverLetter }
        // console.log(formData)

        const jobApplication = {
            job_id: data._id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume,
            coverLetter,
            name,
        }


        await fetch("https://job-portal-server-sigma-seven.vercel.app/job-applications", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId)
                {
                    Swal.fire({
                        title: "Apply Successful",
                        text: "Application submitted successfully",
                        icon: "success",
                        timer: 1500,
                    });
                      navigate("/myApplications")
                }
            })

    };


    return (
        <div className="min-h-screen bg-gray-50 rounded-xl my-10 p-6">
            <div className="max-w-3xl mx-auto my-8 bg-white shadow-md rounded-lg p-6">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Apply for {data.title}
                </h1>
                <p className="text-gray-600 mb-6">
                    Please fill out the form below to apply for this position. Fields
                    marked with <span className="text-red-500">*</span> are required.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={user.displayName}
                            readOnly
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Linked In URL <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="url"
                            id="linkedIn"
                            name="linkedIn"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your Linked In URL"
                        />
                    </div>

                    {/* Github repo */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Github <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="url"
                            id="github"
                            name="github"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your Github repo URL"
                        />
                    </div>

                    {/* Resume Upload */}
                    <div>
                        <label
                            htmlFor="resume"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Upload Resume <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="url"
                            id="resume"
                            placeholder='Enter your resume URL'
                            name="resume"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"

                        />
                    </div>

                    {/* User Email */}
                    <div>
                        <label
                            htmlFor="resume"
                            className="block text-sm font-medium text-gray-700"
                        >
                            User Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="userEmail"
                            value={user.email}
                            readOnly
                            disabled
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"

                        />
                    </div>

                    {/* Cover Letter */}
                    <div>
                        <label
                            htmlFor="coverLetter"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Cover Letter
                        </label>
                        <textarea
                            id="coverLetter"
                            name="coverLetter"
                            rows="5"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write a brief cover letter (optional)"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;