import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { MdTimer } from 'react-icons/md'
import { getWeatherIcon } from '../helpers/Map-Weather-Icon'

const WeatherSlider = ({ hourly }) => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="h-48"
            >
                {
                    hourly.map((item, key) => (
                        <SwiperSlide key={key} className="flex flex-col rounded-xl relative">
                            <h1 className="absolute -top-7 text-lg font-semibold flex justify-center items-center text-[#00036b]"><MdTimer className="text-2xl"/><span>{item.time.split(' ')[1]}</span></h1>
                            {item.chance_of_rain}
                            <div className="w-full flex">
                                <div className="flex flex-wrap">
                                    {getWeatherIcon(item?.condition?.text, 50)}
                                    <h1 className='text-xl font-medium'>{item?.condition?.text}</h1>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))

                }
            </Swiper>
        </>
    );
}

export default WeatherSlider;