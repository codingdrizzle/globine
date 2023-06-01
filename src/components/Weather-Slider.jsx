import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, } from "swiper";
import { MdTimer } from 'react-icons/md'
import { FaSnowflake } from 'react-icons/fa'
import { CiTempHigh } from 'react-icons/ci'
import { BsCloudRainFill } from 'react-icons/bs'
import { getWeatherIcon } from '../helpers/Map-Weather-Icon'
import { GiNightSky, GiHeavyRain, GiSnowing } from 'react-icons/gi'
import { BsFillSunFill } from 'react-icons/bs'


const WeatherSlider = ({ hourly }) => {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                modules={[Pagination, Autoplay]}
                scrollbar={true}
                initialSlide={0}
                className="h-[260px] w-[95%] md:w-full"
                autoplay={{
                    delay: 5000, // Delay between slides in milliseconds
                    disableOnInteraction: false, // Disable autoplay on user interaction
                    pauseOnMouseEnter: true
                }}
            >
                {
                    hourly.map((item, index) => (
                        <SwiperSlide key={index} className={'flex flex-col rounded-xl relative hover:cursor-pointer'}>
                            <h1 className="absolute -top-7 text-lg font-semibold flex justify-center items-center text-[#00036b]"><MdTimer className="text-2xl" /><span>{item.time.split(' ')[1]}</span></h1>
                            <div className="w-full flex flex-col p-3 space-y-2">
                                <div className="flex justify-around items-center overflow-hidden">
                                    <span className="flex flex-wrap">
                                        {getWeatherIcon(item?.condition?.text, 40)}
                                    </span>
                                    <h1 className='text-xl font-medium flex flex-wrap overflow-ellipsis whitespace-nowrap hover:overflow-visible'>{item?.condition?.text}</h1>
                                </div>
                                <div className="flex flex-wrap justify-around items-center">
                                    <h1 className='text-xl font-medium flex items-center gap-1'><GiHeavyRain color="#9ac0e6" size={25} />{item?.chance_of_rain} %</h1>
                                    <h1 className='text-xl font-medium flex items-center gap-1'><FaSnowflake color="#9ac0e6" size={25} />{item?.chance_of_snow} %</h1>
                                </div>
                                <div className="flex flex-wrap justify-around items-center">
                                    <h1 className='text-xl font-medium flex items-center gap-1'><BsCloudRainFill color="#9ac0e6" size={25} />{item?.will_it_rain === 1 ? 'High' : 'Low'}</h1>
                                    <h1 className='text-xl font-medium flex items-center gap-1'><GiSnowing color="#9ac0e6" size={25} />{item?.will_it_snow === 1 ? 'High' : 'Low'}</h1>
                                </div>
                                <div className="flex flex-wrap justify-around items-center">
                                    <h1 className='text-xl font-medium flex items-center gap-1'><CiTempHigh color="#b04b2c" size={25} />{item?.temp_c} °C</h1>
                                    <h1 className='text-xl font-medium flex items-center gap-1'><CiTempHigh color="#f200ff" size={25} id='fahrenheit' />{item?.chance_of_snow} °F</h1>
                                </div>
                                <div className="flex flex-wrap justify-center items-center">
                                    <h1 className='text-xl font-medium flex items-center gap-1'>
                                        {
                                            item.is_day === 0 ?
                                                <span className='flex items-center gap-1 text-base'><GiNightSky size={20} color='#00036b' /> Night-time</span> :
                                                <span className='flex items-center gap-1 text-base'><BsFillSunFill size={20} color='#FDB813' /> Day-time</span>
                                        }
                                    </h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="flex items-start justify-center gap-4  w-[95%] md:w-full mx-auto flex-col md:flex-row md:justify-start md:items-center">
                <h1 className="text-base font-semibold bg-blue-300/20  p-3 rounded-lg flex items-center justify-center">Legend</h1>
                <div className="grid grid-cols-3 md:flex md:flex-wrap gap-2 md:flex-row w-full">
                    <span className="flex gap-1"><GiHeavyRain color="#9ac0e6" size={25} />Chances of Rainfall</span>
                    <span className="flex gap-1"><FaSnowflake color="#9ac0e6" size={25} />Chances of Snowfall</span>
                    <span className="flex gap-1"><BsCloudRainFill color="#9ac0e6" size={25} />Will it Rain</span>
                    <span className="flex gap-1"><GiSnowing color="#9ac0e6" size={25} />Will it Snow</span>
                    <span className="flex gap-1"><CiTempHigh color="#b04b2c" size={25} /><CiTempHigh color="#f200ff" size={25} id='fahrenheit' />Temperature</span>
                </div>
            </div>
        </>
    );
}

export default WeatherSlider;