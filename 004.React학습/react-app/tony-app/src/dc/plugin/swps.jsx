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
    return(
        <>
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
                <SwiperSlide><img src="https://static.dc.com/2023-02/Char_WhosWho_Superman_20190116_5c3fc71f524f38.28405711.jpg?w=160" alt="superman" /><span style={{position:'absolute',top:'50%',left:'50%',zIndex:333,transform:'translate(-50%,-50%)',fontSize:'100px'}}>🧡</span><img src="https://static.dc.com/dc/files/default_images/ThumbChar_192x291_LoisLane_5512f378116274.27335253.jpg?w=160" alt="lane"  /></SwiperSlide>
                {/* bat */}
                <SwiperSlide><img src="https://static.dc.com/2023-02/Char_WhosWho_Batman_20190116_5c3fc4b40faf04.59002472.jpg?w=160" alt="batman" /><span style={{position:'absolute',top:'50%',left:'50%',zIndex:333,transform:'translate(-50%,-50%)',fontSize:'100px'}}>🧡</span><img src="https://static.dc.com/dc/files/default_images/Char_Thumb_TaliaAlGhul_609c370c758536.07522458.jpg?w=160" alt="talia"  /></SwiperSlide>
                {/* wonder */}
                <SwiperSlide><img src="https://static.dc.com/2023-02/Char_WhosWho_WonderWoman_20190116_5c3fc6aa51d124.25659603.jpg?w=160" alt="wonderwoman" /><span style={{position:'absolute',top:'50%',left:'50%',zIndex:333,transform:'translate(-50%,-50%)',fontSize:'100px'}}>🧡</span><img src="https://static.dc.com/dc/files/default_images/Char_Thumb_SteveTrevor_5c5a354ceb4ea5.47082880.jpg?w=160" alt="steve"  /></SwiperSlide>
                {/* aqua */}
                <SwiperSlide><img src="https://static.dc.com/2023-02/Char_WhosWho_Aquaman_5c411a95e710b9.62155274.jpg?w=160" alt="aquaman" /><span style={{position:'absolute',top:'50%',left:'50%',zIndex:333,transform:'translate(-50%,-50%)',fontSize:'100px'}}>🧡</span><img src="https://static.dc.com/dc/files/default_images/Char_Thumb_Mera_5c1025fd865c39.56911247.jpg?w=160" alt="mera"  /></SwiperSlide>
                {/* nmj */}
                <SwiperSlide><img src="https://static.dc.com/2023-02/Char_WhosWho_Flash_20190116_5c3fcadbc6a963.74676553.jpg?w=160" alt="flash" /><span style={{position:'absolute',top:'50%',left:'50%',zIndex:333,transform:'translate(-50%,-50%)',fontSize:'100px'}}>🤝</span><img src="https://static.dc.com/2023-02/Char_WhosWho_Cyborg_20190116_5c3fcd9048a1a2.67778180.jpg?w=160" alt="cyborg"  /></SwiperSlide>
            </Swiper>
            <button className='stop' style={{cursor:'pointer'}} onClick={next}>o</button>
        </>
    )
}