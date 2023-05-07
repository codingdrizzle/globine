import React from 'react'
import { HiFilter } from 'react-icons/hi'
import { MdArrowDropDown } from 'react-icons/md'

const FilteredBy = ({ handleFiterSelect }) => {
  return (
      <div className="relative w-full md:w-auto flex justify-between items-center space-x-2">
          <span className='flex justify-center items-center text-base'><HiFilter size={25} color={'#031a57'}/>Filtered by</span>
          <select onChange={(e) => handleFiterSelect(e)} class="appearance-none border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none bg-transparent focus:border-gray-500">
              <option value={'All'}>All</option>
              <option value={'Africa'}>Africa</option>
              <option value={'Americas'}>Americas</option>
              <option value={'Asia'}>Asia</option>
              <option value={'Europe'}>Europe</option>
              <option value={'Oceania'}>Oceania</option>
          </select>
          <span className="absolute top-0 left-[87%] mt-2 ml-2 text-gray-400"><MdArrowDropDown size={25}/></span>
      </div>

  )
}

export default FilteredBy