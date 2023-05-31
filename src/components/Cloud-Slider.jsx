import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

const CloudSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    useEffect(() => {
        if (activeIndex === 2) {
            // Reached the last slide, reset to the first slide
            setTimeout(() => {
                setActiveIndex(0);
            }, 2500);
        }
    }, [activeIndex]);

    return (
        <>
            <Swiper
                effect={"fade"}

                centeredSlides={true}
                autoplay={{
                    delay: 300000,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, EffectFade]}
                scrollbar={false}
                className="w-full h-full absolute z-0"
                onSlideChange={handleSlideChange}
                initialSlide={activeIndex}
            >
                <SwiperSlide className="object-cover bg-no-repeat bg-center slide1 h-full">
                    <div class="absolute inset-0 bg-white opacity-80"></div>
                </SwiperSlide>
                <SwiperSlide className="object-cover bg-no-repeat bg-center slide2 h-full">
                    <div class="absolute inset-0 bg-white opacity-80"></div>
                </SwiperSlide>
                <SwiperSlide className="object-cover bg-no-repeat bg-center slide3 h-full">
                    <div class="absolute inset-0 bg-white opacity-80"></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default CloudSlider;
