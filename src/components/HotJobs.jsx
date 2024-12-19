import HotJobCard from './HotJobCard';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import axios from 'axios';

const HotJobs =() => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://job-portal-server-sigma-seven.vercel.app/jobs`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false)
            })
            
        // axios.get("https://job-portal-server-sigma-seven.vercel.app/jobs")
        //         .then(res=>{
        //             setJobs(res.data)
        //         })


    }, [])


console.log(jobs)

    return (
        <div>
            {loading ?
                <Loader></Loader>
                :
                <div id='container' className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-10'>
                    {
                        jobs?.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                    }
                </div>
            }
        </div>
    );
};

export default HotJobs;