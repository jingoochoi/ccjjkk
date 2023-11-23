import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Navigation,Keyboard,Autoplay } from 'swiper/modules';
import './css/swps.css';
export function Swps(p) {
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
            
            <Swiper
            ref={mymy}
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                navigation={{clickable:true}}
                keyboard={true}
                loop={true}
                autoplay={{
                    delay:3000,
                    disableOnInteraction:false
                }}
                modules={[Pagination,Navigation,Keyboard,Autoplay]}
                className="mySwiper"
            >
                
                
                <SwiperSlide><img src={"./images/sub/"+p.cat+"/banner/ban1.png"} alt="men banner" /></SwiperSlide>
                <SwiperSlide><img src={"./images/sub/"+p.cat+"/banner/ban2.png"} alt="men banner" /></SwiperSlide>
                <SwiperSlide><img src={"./images/sub/"+p.cat+"/banner/ban3.png"} alt="men banner" /></SwiperSlide>
                
                
            </Swiper>
            <button className='stop' style={{cursor:'pointer'}} onClick={next}>o</button>
            <button onClick={ft}>testo</button>
        </>
    )
}