import React from 'react'
import {BsSearch} from 'react-icons/bs'

const SearchBar = ({ searchTrigger }) => {
    return (
        <div className='relative'>
            <input type="search" placeholder='Search' className='w-full md:w-auto p-2 rounded-md border border-[#d8dae5] hover:border-[#8F95B2] focus:outline-[#3786FB] focus:ring-[#75a9f7] focus:ring' onChange={(e) => searchTrigger(e)} />
            <span className="absolute top-1 left-[80%] mt-2 ml-2 text-gray-400"><BsSearch/></span>
        </div>
    )
}

export default SearchBar