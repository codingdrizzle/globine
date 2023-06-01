import React from 'react'
import { BsFillSunriseFill, BsMoonStarsFill } from 'react-icons/bs'
import { GiSunset, GiEvilMoon } from 'react-icons/gi'
import { RiMoonFoggyFill } from 'react-icons/ri'
import { FaCloudMoon } from 'react-icons/fa'
import { MdTimer } from 'react-icons/md'

const WeatherAstro = ({ astro }) => {
    return (
        <div className='w-[95%] md:w-full mx-auto px-[10px] flex flex-col md:flex-row gap-12'>
            {/*<div className=' w-full md:w-[50%] flex flex-col h-full gap-3'>
                <div className="flex w-full items-center">
                    <h1 className="text-medium font-semibold text-xl flex items-center gap-3"><BsMoonStarsFill color='#00036b' className='text-[40px] md:text-[60px]' />Moon Phase</h1>
                    <span className='font-extrabold mx-5 text-2xl'>:</span>
                    <h1 className="text-medium font-semibold text-lg flex justify-center">{astro.moon_phase}</h1>
                </div>
                <div className="flex w-full items-center">
                    <h1 className="text-medium font-semibold text-xl flex items-center gap-3"><GiEvilMoon color='#00036b' className='text-[40px] md:text-[60px]' />Moon Illumination</h1>
                    <span className='font-extrabold mx-5 text-2xl'>:</span>
                    <h1 className="text-medium font-semibold text-lg flex justify-center">{astro.moon_illumination}%</h1>
                </div>
                <div className="flex w-full items-center ml-[52px] md:ml-[70px]">
                    {
                        astro.is_sun_up === 1 ? <h1 className="text-medium font-semibold text-lg flex justify-center">Sun is up ✅</h1> : ''
                    }
                    {
                        astro.is_moon_up === 1 ? <h1 className="text-medium font-semibold text-lg flex justify-center">Moon is up ✅</h1> : ''
                    }
                </div>
            </div>*/}
            <div className='grid grid-cols-2 grid-rows-2 w-full md:w-[50%]'>
                <div className="w-full h-full border-[#00036b] flex flex-col p-3">
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <BsFillSunriseFill size={50} color='#ffbd00' />
                        <h1 className="text-medium font-semibold text-2xl">Sunrise</h1>
                    </div>
                    <div className='flex items-center justify-center text-2xl gap-1'>
                        <MdTimer color="#00036b" size={30} />
                        <span className='text-2xl'>{astro.sunrise}</span>
                    </div>
                </div>
                <div className="w-full h-full border-l-[2px] border-[#00036b] flex flex-col p-3">
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <GiSunset size={50} color='#566394' />
                        <h1 className="text-medium font-semibold text-2xl">Sunset</h1>
                    </div>
                    <div className='flex items-center justify-center text-2xl gap-1'>
                        <MdTimer color="#00036b" size={30} />
                        <span className='text-2xl'>{astro.moonrise}</span>
                    </div>
                </div>
                <div className="w-full h-full border-t-[2px] border-[#00036b] flex flex-col p-3">
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <RiMoonFoggyFill size={50} color='#b6cce3' />
                        <h1 className="text-medium font-semibold text-2xl">Moonrise</h1>
                    </div>
                    <div className='flex items-center justify-center text-2xl gap-1'>
                        <MdTimer color="#00036b" size={30} />
                        <span className='text-2xl'>{astro.moonrise}</span>
                    </div>
                </div>
                <div className="w-full h-full border-l-[2px] border-t-[2px] border-[#00036b] flex flex-col p-3">
                    <div className='flex flex-col items-center justify-center gap-1'>
                        <FaCloudMoon size={50} color='#566394' />
                        <h1 className="text-medium font-semibold text-2xl">Moonset</h1>
                    </div>
                    <div className='flex items-center justify-center text-2xl gap-1'>
                        <MdTimer color="#00036b" size={30} />
                        <span className='text-2xl'>{astro.moonrise}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherAstro