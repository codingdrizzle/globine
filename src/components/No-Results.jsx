import React from 'react'
import noResult from '../assets/no-results.jpg'
import sad from '../assets/sad.gif'

const NoSearchResults = () => {
    return (
        <div className='w-full h-auto p-8 flex flex-col justify-center items-center object-contain space-y-5'>
            <h1 className='animate-pulse text-gray-400 text-2xl md:text-4xl font-medium flex flex-col justify-center items-center'>
                <span>Sorry!</span>
                <div className='flex flex-col md:flex-row justify-start items-center'>
                    <span>No Search Results</span>
                    <img src={sad} alt="" width={50} />
                </div>
            </h1>
            <img src={noResult} alt="" className='w-full h-auto md:w-1/2 lg:w-1/4 lg:h-auto' />
        </div>

    )
}

export default NoSearchResults