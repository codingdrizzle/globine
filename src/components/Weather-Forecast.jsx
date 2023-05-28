import React, { useEffect } from 'react'
import CloudSlider from './Cloud-Slider'

const WeatherForecast = ({ weather }) => {
    useEffect(() => {
        console.log(weather)
    })
    return (
        <div className='relative w-full h-full'>
            <CloudSlider />
            <div className='absolute top-0 z-20'>
                Weather Forecast

            </div>
            <img src={weather?.condition?.icon} alt="" />
        </div>
    )
}

export default WeatherForecast