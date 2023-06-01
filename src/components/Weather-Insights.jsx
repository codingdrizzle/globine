import React from 'react'
import WeatherAstro from './Weather-Astro'
import WeatherSlider from './Weather-Slider'

const WeatherInsights = ({ forecast }) => {
    return (
        <div className='w-screen md:w-full py-10 flex flex-col gap-7'>
            <div>
                <h1 className=' w-[95%] md:w-full mx-auto my-2 px-[10px] text-[#2f74db] font-semibold text-lg'>Astro</h1>
                <WeatherAstro astro={forecast.astro} />
            </div>
            <div>
                <h1 className=' w-[95%] md:w-full mx-auto my-1 px-[10px] text-[#2f74db] font-semibold text-lg'>Hourly</h1>
                <WeatherSlider hourly={forecast.hourly_update} />
            </div>
        </div>
    )
}

export default WeatherInsights