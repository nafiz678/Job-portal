import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplication = () => {
    const applications = useLoaderData()
    console.log(applications)


    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id)

        const data = {
            status: e.target.value
        }

        fetch(`https://job-portal-server-sigma-seven.vercel.app/job-applications/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Status",
                        text: "Status updated successfully",
                        icon: "success",
                        timer: 1500,
                    });
                }
            })
    }





    return (
        <div className="overflow-x-auto">
            <h2 className='text-4xl font-semibold'>Applications For this job: {applications.length}</h2>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Links</th>
                        <th>Update Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {applications.map((application, idx) =>
                        <tr key={application._id}>
                            <th>{idx + 1}</th>
                            <td>{application.name}</td>
                            <td>{application.applicant_email}</td>
                            <td className='inline-flex items-center justify-center gap-1'>

                                <a target='_blank' className='inline-flex items-center gap-1 px-2 py-1 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all' href={application.linkedIn}>linked In</a>

                                <a target='_blank' className='inline-flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 transition-all' href={application.github}>Github</a>

                                <a target='_blank' className='inline-flex items-center gap-1 px-2 py-1 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition-all' href={application.resume}>Resume</a>
                            </td>
                            <td>
                                <select
                                    onChange={(e) => handleStatusUpdate(e, application._id)}
                                    defaultValue={application.status || "Change Status"}
                                    className="select select-bordered select-xs w-full max-w-xs">
                                    <option disabled >Change Status</option>
                                    <option>Under Review</option>
                                    <option>Set Interview</option>
                                    <option>Hired</option>
                                    <option>Rejected</option>
                                </select>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ViewApplication;