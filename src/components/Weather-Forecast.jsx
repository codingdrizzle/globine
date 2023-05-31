import React, { useEffect } from 'react'
import { getWeatherIcon } from '../helpers/Map-Weather-Icon'
import CloudSlider from './Cloud-Slider'
import { GiNightSky } from 'react-icons/gi'
import { MdLocationPin } from 'react-icons/md'
import CircleProgressBar from './Progress-Humidity'

const WeatherForecast = ({ weather, country, capital }) => {
    useEffect(() => {
        console.log(weather)
    })
    return (
        <div className='relative w-full h-96 mt-1'>
            <CloudSlider />
            <div className='absolute top-0 z-20 flex flex-col sm:flex-row w-full h-full'>
                <div className='flex flex-col justify-start items-center bg-[rgba(86,196,255,0.1)] flex-[3.33]'>
                    <div className='w-[80%] h-auto flex flex-col justify-center items-center border-b-[2px] border-[#c0e0ff] pb-10'>
                        {getWeatherIcon(weather?.condition?.text)}
                        <h1 className='text-3xl font-medium'>{weather?.condition?.text}</h1>
                    </div>
                    <div className='w-[90%] h-auto flex flex-col justify-center items-center border-b-[1px] pt-10 space-y-5'>
                        <h1 className='text-2xl font-medium'>{weather.is_day === 0 ? <span className='flex items-center gap-1'><GiNightSky size={30} color='#00036b' /> Night-time</span> : 'Day-time'}</h1>
                        <h1 className='text-xl flex items-center gap-1'><MdLocationPin size={30} />{`${capital}, ${country}`}</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center  bg-[rgba(255,80,68,0.1)] flex-[3.33]'>
                    {/*<CircleProgressBar progress={weather.humidity} />*/}
                    <div className="radial-progress" style={{"--value":70}}>70%</div>
                    {weather.humidity}
                    {weather.temp_c}
                    {weather.temp_f}
                    {weather.wind_direction}
                </div>
            </div>
        </div>
    )
}

export default WeatherForecast