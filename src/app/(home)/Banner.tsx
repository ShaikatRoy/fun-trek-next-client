"use client";

import React from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // This already includes styles for navigation
import SwiperCore from 'swiper';

SwiperCore.use([Pagination, Navigation]);

const Banner = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
        >
            <SwiperSlide>
                <div 
                    className="bg-cover bg-center h-screen flex items-center justify-center text-white"
                    style={{ backgroundImage: 'url(https://i.ibb.co/1M6rhkT/pexels-photo-9302783.jpg)' }}
                >
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Welcome to Summer Camp!</h2>
                        <p className="mb-4">Join us for an unforgettable summer experience.</p>
                        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Learn More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div 
                    className="bg-cover bg-center h-screen flex items-center justify-center text-white"
                    style={{ backgroundImage: 'url(https://i.ibb.co/CMGZrrZ/pexels-photo-8083376.jpg)' }}
                >
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Exciting Activities Await!</h2>
                        <p className="mb-4">From hiking to arts & crafts, theres something for everyone.</p>
                        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">View Activities</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div 
                    className="bg-cover bg-center h-screen flex items-center justify-center text-white"
                    style={{ backgroundImage: 'url(https://i.ibb.co/jJ8GXQF/pexels-photo-8083819.jpg)' }}
                >
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Register Now and Join the Fun!</h2>
                        <p className="mb-4">Spaces are limited. Secure your spot today.</p>
                        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Register</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
