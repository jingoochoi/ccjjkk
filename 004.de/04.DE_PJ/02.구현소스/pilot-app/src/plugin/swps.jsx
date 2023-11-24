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
    const make=(nb)=>{
        let temp=[]
        for (let x = 0; x < nb; x++) {
            temp[x]=
            <SwiperSlide><img src={"./images/sub/"+p.cat+"/banner/ban"+(x+1)+".png"} alt="men banner" /></SwiperSlide>
        }
        return temp
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
                
                
                {make(p.cat=='style'?5:3)}
                
                
                
            </Swiper>
            
        </>
    )
}