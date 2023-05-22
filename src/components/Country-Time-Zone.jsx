import React from 'react'
import AnalogueTimeClock from './Analogue-Clock'
import DigitalTimeClock from './Digital-Clock'
import {MdDateRange} from 'react-icons/md'
import { RiCheckboxMultipleFill } from 'react-icons/ri'
import { GoSettings } from 'react-icons/go'
import { FiGlobe } from 'react-icons/fi'
import { FaGlobeAfrica } from 'react-icons/fa'
import { TbLetterSpacing } from 'react-icons/tb'

const CountryTimeZone = ({ timezone }) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const getFullDate = () => {
         const rawDate= timezone?.datetime?.split('T')[0]
        const dating = rawDate.split('-')
        const monthIndex = dating[1][0] === '0' ? dating[1][1] : dating[1]
         return `${dating[2]} ${months[monthIndex-1]}, ${dating[0]}`
    }

    return (
        <div className='w-full flex flex-col items-center md:flex-row'>
            <div className='flex flex-col justify-center items-center relative w-full'>
                <AnalogueTimeClock />
                <DigitalTimeClock />
            </div>
            <div className='flex flex-col space-y-3 justify-center w-full bg-blue-400/10 p-4 md:bg-transparent rounded-lg'>
                <h1 className='w-[70%] md:w-full mx-auto text-lg md:text-xl flex items-center space-x-2'><RiCheckboxMultipleFill size={27} color={'#3786FB'} /><span><b>Day : </b>{days[timezone?.day_of_week-1]}</span></h1>
                <h1 className='w-[70%] md:w-full mx-auto text-lg md:text-xl flex items-center space-x-2'><MdDateRange size={27} color={'#3786FB'}/><span><b>Date : </b>{getFullDate()}</span></h1>
                <h1 className='w-[70%] md:w-full mx-auto text-lg md:text-xl flex items-center space-x-2'><GoSettings size={27} color={'#3786FB'} /><span><b>Offset : </b>{timezone?.utc_offset}</span></h1>
                <h1 className='w-[70%] md:w-full mx-auto text-lg md:text-xl flex items-center space-x-2'><FiGlobe size={27} color={'#3786FB'} /><span><b>Zone : </b>{timezone?.zone_name ? timezone?.zone_name : 'N/A'}</span></h1>
                <h1 className='w-[70%] md:w-full mx-auto text-lg md:text-xl flex items-center space-x-2'><TbLetterSpacing size={27} color={'#3786FB'} /><span><b>Zone Initials : </b>{timezone?.abbreviation ? timezone?.abbreviation : 'N/A'}</span></h1>
                <h1 className='w-[70%] md:w-full mx-auto text-lg md:text-xl flex items-center space-x-2'><FaGlobeAfrica size={27} color={'#3786FB'} /><span><b>Zone Region : </b>{timezone?.timezone}</span></h1>
            </div>
        </div>
    )
}

export default CountryTimeZone;