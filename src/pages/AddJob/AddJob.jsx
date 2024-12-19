import { ThemeProviderContext } from '@/components/theme-provider';
import AuthContext from '@/context/AuthContext';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddJob = () => {
    const navigate = useNavigate()
    const { theme } = useContext(ThemeProviderContext)
    const {user} = useContext(AuthContext)




    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));
        const { min, max, currency, requirements, responsibilities, ...rest } = formData;

        const job = ({
            ...rest,
            salaryRange: { min, max, currency },
            requirements: requirements.split(',').map(s => s.trim()),
            responsibilities: responsibilities.split(',').map(s => s.trim()),
        });
        console.log(job)

        fetch("https://job-portal-server-sigma-seven.vercel.app/jobs", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Apply Successful",
                        text: "Application submitted successfully",
                        icon: "success",
                        timer: 1500,
                    });
                    navigate("/myPostedJobs")
                }
            })

    };


    return (
        <form className={`max-w-3xl mx-auto p-6 border-2 transition shadow-md rounded-xl`} onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-4">Job Form</h1>

            {/* Job Title */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="title">Job Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className=" text-white w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                />
            </div>

            {/* location */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    className=" text-black w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                />
            </div>

            {/* job type */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="jobType">Job Type</label>
                <select
                    id="jobType"
                    name="jobType"
                    className="w-full text-black px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                    defaultValue={"Select Job Type"}
                >
                    <option value="" disabled>Select Job Type</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">Full Time</option>
                    <option value="On-site">Part Time</option>
                </select>
            </div>

            {/* category */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="jobType">Category</label>
                <select
                    id="category"
                    name="category"
                    className="w-full text-black px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                >
                    <option disabled>Select category</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Teaching">Teaching</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Management">Management</option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                </select>
            </div>

            {/* deadline */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="applicationDeadline">Application Deadline</label>
                <input
                    type="date"
                    id="applicationDeadline"
                    name="applicationDeadline"
                    className=" text-black w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                />
            </div>

            {/* salary */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Salary Range</label>
                <div className="grid grid-cols-3 gap-2">
                    <input
                        type="number"
                        name="min"
                        placeholder="Min"
                        className=" text-black px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                    />
                    <input
                        type="number"
                        name="max"
                        placeholder="Max"
                        className=" text-black px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                    />
                    <select
                        id="currency"
                        name="currency"
                        className="w-full text-black px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                    >
                        <option value="" disabled>Currency</option>
                        <option value="USD">USD</option>
                        <option value="BDT">BDT</option>
                        <option value="EUR">EUR</option>
                        <option value="JPY">JPY</option>
                        <option value="GBP">GBP</option>
                        <option value="AUD">AUD</option>
                        <option value="CAD">CAD</option>
                        <option value="CHF">CHF</option>
                        <option value="CNY">CNY</option>
                        <option value="INR">INR</option>
                        <option value="MXN">MXN</option>
                        <option value="RUB">RUB</option>
                        <option value="BRL">BRL</option>
                        <option value="ZAR">ZAR</option>
                        <option value="SGD">SGD</option>
                        <option value="HKD">HKD</option>
                        <option value="KRW">KRW</option>
                        <option value="TRY">TRY</option>
                        <option value="AED">AED</option>
                    </select>
                </div>
            </div>

            {/* description */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    className="w-full text-black px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                />
            </div>

            {/* Company name */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="company">Company Name</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    className=" text-black w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                />
            </div>

            {/* Requirements */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="requirements">Requirements (comma-separated)</label>
                <input
                    type="text"
                    id="requirements"
                    name="requirements"
                    className=" text-black w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                />
            </div>

            {/* Responsibilities */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="responsibilities">Responsibilities (comma-separated)</label>
                <input
                    type="text"
                    id="responsibilities"
                    name="responsibilities"
                    className=" text-black w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                />
            </div>

            {/* Status
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="status">Status</label>
                <select
                    id="status"
                    name="status"
                    className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div> */}

            {/* HR Email */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="hrEmail">HR Email</label>
                <input
                    type="email"
                    id="hr_email"
                    name="hr_email"
                    defaultValue={user?.email}
                    readOnly
                    className=" text-black w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                />
            </div>

            {/* HR name */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="hrName">HR Name</label>
                <input
                    type="text"
                    id="hr-name"
                    name="hr-name"
                    
                    className="w-full text-black px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                />
            </div>

            {/* Company logo */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="companyLogo">Company Logo URL</label>
                <input
                    type="text"
                    id="company_logo"
                    name="company_logo"
                    className=" text-black w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring"
                />
            </div>

            <button
                type="submit"
                className="w-full text-white py-2 px-4 rounded  bg-blue-950 hover:bg-blue-500 transition font-bold hover:-translate-y-[2px] hover:shadow-lg duration-500 ease-in-out"
            >
                Submit
            </button>
        </form>
    );
};

export default AddJob;