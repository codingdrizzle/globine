import React from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorWizard = ({src, message, revert}) => {
    const navigate = useNavigate();
  return (
      <div className='w-full h-auto p-8 flex flex-col justify-center items-center object-contain space-y-3 md:space-y-5'>
        <h1 className='animate-pulse text-gray-400 text-3xl md:text-6xl font-medium'>{message}</h1>
        <img src={src} alt="" className='w-full h-auto lg:w-1/3 lg:h-auto'/>
          <button onClick={() => navigate(0)} className='cursor-pointer bg-[#3786FB]/95 py-3 px-7 text-white rounded'>{revert}</button>
    </div>
  )
}

export default ErrorWizard