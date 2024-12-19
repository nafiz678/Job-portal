import useAuth from '@/hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        fetch(`https://job-portal-server-sigma-seven.vercel.app/jobss?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])



    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Count</th>
                        <th>Application</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        jobs.map((job, idx) =>
                            <tr key={job._id} className="hover">
                                <th>{idx+1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplications/${job._id}`} className='btn btn-sm btn-link'>View Application</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyPostedJobs;