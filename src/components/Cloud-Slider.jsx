import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import cloud1 from '../assets/cloudy.jpg'
import cloud2 from '../assets/sky.jpg'
import cloud3 from '../assets/skies.jpg'

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

const CloudSlider = () => {
    return (
        <>
            <Swiper
                effect={'fade'}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={false}
                modules={[Autoplay, EffectFade,]}
                scrollbar={false}
                className="w-full h-1/2 absolute z-0"
            >
                <SwiperSlide className="h-96 object-contain dimmer"><img src={cloud1} alt="Cloud" /></SwiperSlide>
                <SwiperSlide className="h-96 object-contain dimmer"><img src={cloud2} alt="Cloud" /></SwiperSlide>
                <SwiperSlide className="h-96 object-contain dimmer"><img src={cloud3} alt="Cloud" /></SwiperSlide>
            </Swiper>
        </>
    );
}


export default CloudSlider;