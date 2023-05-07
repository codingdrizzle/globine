import React from 'react'
import {BsSearch} from 'react-icons/bs'

const SearchBar = ({ searchTrigger }) => {
    return (
        <div className='relative'>
            <input type="text" placeholder='Search' className='w-full md:w-auto border-[1px] p-2 focus:outline-0 focus:border-blue-950 rounded-md' onChange={(e) => searchTrigger(e)} />
            <span className="absolute top-1 left-[85%] mt-2 ml-2 text-gray-400"><BsSearch/></span>
        </div>
    )
}

export default SearchBar