import React from 'react'
import { Dna } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='h-[100%] w-[100%] col-span-1 flex justify-center items-center'>
          <Dna
              visible={true}
              height="120"
              width="120"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
          />
    </div>
  )
}

export default Loader