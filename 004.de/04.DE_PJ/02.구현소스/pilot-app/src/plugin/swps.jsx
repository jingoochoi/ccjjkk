import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Navigation,Keyboard } from 'swiper/modules';
import './css/swps.css';
export function Swps() {
    const mymy=useRef(null)
    const next=()=>{
        mymy.current.swiper.slideNext()
    }
    let mygo='swiper'
    let mydo=useRef('gallery')
    const ft=()=>{
        mygo='스와이퍼'
        mydo.current='갤러리'
        // console.log(mygo,mydo)
    }
    return(
        <>
            <h1>{mygo+mydo}</h1>
            <Swiper
            ref={mymy}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={{clickable:true}}
                keyboard={true}
                loop={true}
                modules={[Pagination,Navigation,Keyboard]}
                className="mySwiper"
            >
                
                {/* super */}
                <SwiperSlide></SwiperSlide>
                {/* bat */}
                <SwiperSlide></SwiperSlide>
                {/* wonder */}
                <SwiperSlide></SwiperSlide>
                {/* aqua */}
                <SwiperSlide></SwiperSlide>
                {/* nmj */}
                <SwiperSlide></SwiperSlide>
            </Swiper>
            <button className='stop' style={{cursor:'pointer'}} onClick={next}>o</button>
            <button onClick={ft}>testo</button>
        </>
    )
}