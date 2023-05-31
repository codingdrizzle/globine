import React from 'react'
import WeatherSlider from './Weather-Slider'

const WeatherInsights = ({ forecast }) => {
    return (
        <div className='w-full py-10'>
            <WeatherSlider hourly={forecast.hourly_update}/>
        </div>
    )
}

export default WeatherInsights