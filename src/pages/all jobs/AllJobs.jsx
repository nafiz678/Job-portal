import HotJobCard from '@/components/HotJobCard';
import Loader from '@/components/Loader';
import useDebounced from '@/hooks/useDebounced';
import useJobs from '@/hooks/useJobs';
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const AllJobs = () => {
    const [AscSort, setAscSort] = useState(false)
    const [DscSort, setDscSort] = useState(false)
    const [minSalary, setMinSalary] = useState("")
    const [maxSalary, setMaxSalary] = useState("")

    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("")
    const search = useDebounced(searchQuery, 1000);
    const { jobs, loading } = useJobs(AscSort, DscSort, search, minSalary, maxSalary)

    // useEffect(() => {
    //     if (search) {
    //         console.log('Searching for:', search);
    //         // Call your search API here
    //     }
    // }, [search]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleAscSort = () => {
        setAscSort(!AscSort)
        setDscSort(false)
        setIsOpen(false)
    }
    const handleDscSort = () => {
        setDscSort(!DscSort)
        setAscSort(false)
        setIsOpen(false)
    }

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <h2 className="py-5 text-4xl font-bold text-center bg-gradient-to-r from-blue-800 via-steelblue-700 to-gray-500 bg-clip-text text-transparent">
                All Jobs Here
            </h2>
            <div className='w-11/12 mx-auto gap-8 bg-gray-100 py-5 p-3 flex items-center  rounded-lg justify-end transition-all duration-300 ease-in-out'>

                <div className='relative w-full max-w-xs'>
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='input text-black w-full max-w-xl' type="text" name="" placeholder='Search jobs by location' id="" />
                    <Search className='absolute right-3 top-3'></Search>
                </div>

                {/* filtering min salary and max salary */}
                <div className='flex gap-3 flex-col'>
                    <input
                        onChange={(e) => setMinSalary(e.target.value)}
                        className='input text-black max-w-sm' type="text" name="" placeholder='Min salary' id="" />
                    <input
                        onChange={(e) => setMaxSalary(e.target.value)}
                        className='input text-black  max-w-sm' type="text" name="" placeholder='Min salary' id="" />
                </div>

                {/* Sorting methods */}
                <div className="relative inline-block text-left mr-4">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sort By
                        <svg
                            className={`w-5 h-5 ml-2 -mr-1 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    <div
                        className={`absolute right-0 left-0 z-10 w-52 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transform transition-all duration-300 ease-in-out ${isOpen
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                            }`}
                    >
                        <div className="py-1">
                            <button
                                onClick={() => handleAscSort()}
                                className={`block px-4 py-2 text-sm text-gray-700
                                transition-all duration-300 ease-linear 
                                 hover:bg-orange-200 hover:text-gray-800 w-full text-left
                                ${AscSort ? "bg-blue-100 text-blue-800" : ""}   `}
                            >
                                {AscSort == true ? "Sorted by Ascending Order" : "Sort By Ascending Order"}

                            </button>
                            <button
                                onClick={() => handleDscSort()}
                                className={`block px-4 py-2 text-sm text-gray-700 
                                  transition-all duration-300 ease-linear  hover:bg-orange-200 hover:text-gray-800 w-full text-left
                                    ${DscSort ? "bg-blue-100 text-blue-800" : ""}   `}
                            >
                                {DscSort == true ? "Sorted by Descending Order" : "Sort By Descending Order"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id='container' className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-10'>
                {
                    jobs?.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;