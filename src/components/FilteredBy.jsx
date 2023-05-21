import React from 'react'
import { HiFilter } from 'react-icons/hi'
import { MdArrowDropDown } from 'react-icons/md'

const FilteredBy = ({ handleFiterSelect }) => {
  return (
      <div className="relative w-full md:w-auto flex justify-between items-center space-x-2">
          <span className='flex justify-center items-center text-base'><HiFilter size={25} color={'#3786FB'}/>Filtered by</span>
          <select onChange={(e) => handleFiterSelect(e)} class="appearance-none py-2 px-4 pr-8 rounded leading-tight bg-transparent border border-[#d8dae5] hover:border-[#8F95B2] focus:outline-[#3786FB] focus:ring-[#75a9f7] focus:ring cursor-pointer">
              <option value={'All'}>All</option>
              <option value={'Africa'}>Africa</option>
              <option value={'Americas'}>Americas</option>
              <option value={'Asia'}>Asia</option>
              <option value={'Europe'}>Europe</option>
              <option value={'Oceania'}>Oceania</option>
          </select>
          <span className="absolute top-0 left-[83%] mt-2 ml-2 text-gray-400"><MdArrowDropDown size={25}/></span>
      </div>

  )
}

export default FilteredBy