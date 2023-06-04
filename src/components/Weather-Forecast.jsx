import React from 'react'
import { getWeatherIcon } from '../helpers/Map-Weather-Icon'
import { getWindDirection } from '../helpers/Wind-Direction'
import { GiNightSky } from 'react-icons/gi'
import { MdLocationPin } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
import { CiTempHigh } from 'react-icons/ci'
import { MdWaterDrop } from 'react-icons/md'
import { SiTailwindcss } from 'react-icons/si'

const WeatherForecast = ({ weather, country, capital }) => {
    return (
        <div className='relative w-full h-[700px] rounded-lg md:h-96 custom-bg mb-5 md:m-0 md:mt-1'>
                <div className=" absolute inset-0 bg-white opacity-70 w-full h-full"></div>
            <div className='absolute top-0 z-20 flex flex-col md:flex-row w-full h-full '>
                <div className='flex flex-col justify-around h-full items-center md:flex-[5]'>
                        <div className='flex flex-col justify-center items-center w-full'>
                            {getWeatherIcon(weather?.condition?.text, 100)}<h1 className='text-3xl font-medium'>{weather?.condition?.text}</h1>
                        </div>
                    <div className='flex flex-col justify-center items-center space-y-3'>
                        <h1 className='text-2xl font-medium'>{
                            weather.is_day === 0 ?
                                <span className='flex items-center gap-1'><GiNightSky size={30} color='#00036b' /> Night-time</span> :
                                <span className='flex items-center gap-1'><BsFillSunFill size={30} color='#FDB813' /> Day-time</span>
                        }</h1>
                        <h1 className='text-xl flex items-center gap-1'><MdLocationPin size={30} />{`${capital}, ${country}`}</h1>
                    </div>
                </div>
                <div className='flex justify-start items-center flex-col md:flex-row md:flex-[5]'>
                    <div className='flex flex-row py-4 md:p-0 md:flex-col justify-around h-full items-center w-full md:flex-[3] bg-[rgba(255,80,68,0.05)]'>
                        <div className='flex flex-col justify-center items-center w-full'>
                            <CiTempHigh size={80} color='#b04b2c' /><h1 className='text-xl font-medium'>Temperature</h1>
                        </div>
                        <div className='flex flex-col justify-around items-center w-full space-y-3'>
                            <h3 className='text-2xl font-semibold flex justify-center items-center w-full'>{weather.temp_c} °C</h3>
                            <h3 className='text-2xl font-semibold flex justify-center items-center w-full'>{weather.temp_f} °F</h3>
                        </div>
                    </div>
                    <div className='flex flex-row py-4 md:p-0 md:flex-col justify-around h-full items-center w-full md:flex-[3] bg-[rgba(86,196,255,0.1)]'>
                        <div className='flex flex-col justify-center items-center w-full'>
                            <MdWaterDrop size={60} color='#1b95e0' className='md:my-4' /><h1 className='text-xl font-medium'>Humidity</h1>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <h3 className='text-2xl font-semibold flex justify-center items-center'>{weather.humidity} %</h3>
                        </div>
                    </div>
                    <div className='flex flex-row py-4 md:p-0 md:flex-col justify-around h-full items-center w-full md:flex-[4] bg-[rgba(140,255,169,0.1)]'>
                        <div className='flex flex-col justify-center items-center w-full'>
                            <SiTailwindcss size={60} color='#00036b' className='md:my-5' /><h1 className='text-xl font-medium text-center'>Wind Direction</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <h3 className='text-2xl font-semibold flex justify-center items-center'>{weather.wind_direction}</h3>
                            <h3 className='text-lg font-medium flex justify-center items-center'>{getWindDirection(weather.wind_direction)}</h3>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default WeatherForecast