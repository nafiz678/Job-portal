import useAuth from '@/hooks/useAuth';
import React, { useEffect, useState } from 'react';
import "./myapp.css"
import { Button } from '@/components/ui/button';
import Loader from '@/components/Loader';
import axios from 'axios';
import useAxios from '@/hooks/useAxios';

const MyApplication = () => {
    const [jobs, setJobs] = useState([])
    const { user } = useAuth()
    const [loader, setLoader] = useState(true)
    const axiosInstance = useAxios()

    useEffect(() => {

        // fetch(`https://job-portal-server-sigma-seven.vercel.app/job-applications?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setJobs(data)
        //         setLoader(false)
        //     })

        // axios.get(`https://job-portal-server-sigma-seven.vercel.app/job-applications?email=${user.email}`, {withCredentials: true})
        // .then(res=>{
        //     setJobs(res.data)
        //     setLoader(false)
        // })

        // axios.get(`https://job-portal-server-sigma-seven.vercel.app/job-applications?email=${user.email}` ,{withCredentials: true})
        // .then(res=> {
        //     setLoader(false)
        //     setJobs(res.data)
        // })

        axiosInstance.get(`/job-applications?email=${user.email}`)
        .then(res=>{
            setJobs(res.data)
            setLoader(false)
        })


    }, [user.email])
    console.log(jobs)


    return (
        loader 
        ?
        <Loader></Loader>
        :
        jobs.length > 0 ?
        <div className="overflow-x-auto">
            <table className="tablee">
                {/* head */}
                <thead>
                    <tr>
                        <th className='text-gray-500 font-semibold'>Company</th>
                        <th className='text-gray-500 font-semibold'>Job</th>
                        <th className='text-gray-500 font-semibold'>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        jobs.map((job) =>
                            <tr key={job._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle bg-white h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.company}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job.title}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{job.jobType}</span>
                                </td>
                                <td>{job.deadline}</td>
                                <th>
                                    <Button size={"sm"}>Delete</Button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
                {/* foot */}
                {/* <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot> */}
            </table>
        </div>
        :
        <div>
            <h2 className='text-3xl lg:text-5xl text-blue-500 text-center flex items-center justify-center my-10 font-bold' >No data available</h2>
        </div>
    );
};

export default MyApplication;