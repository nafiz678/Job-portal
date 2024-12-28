import axios from 'axios';
import React, { useEffect, useState } from 'react';



const useJobs = (AscSort, DscSort, search, minSalary, maxSalary) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://job-portal-server-sigma-seven.vercel.app/jobs?ascSort=${AscSort}&dscSort=${DscSort}&search=${search}&min=${minSalary}&max=${maxSalary}`)
        .then(res=> {
            setJobs(res.data)
            setLoading(false)
        })
     }, [AscSort, DscSort, search, minSalary, maxSalary])


    return {jobs, loading};
};

export default useJobs;