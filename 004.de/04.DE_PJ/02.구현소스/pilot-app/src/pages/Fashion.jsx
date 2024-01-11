// 남성패션 서브페이지 컨텐츠 컴포넌트

import { useContext, useEffect, useRef, useState } from "react"
import '../css/fashion.css'
import { Swps } from "../plugin/swps"
import $ from 'jquery'
import { pcon } from "../modules/pilotContext"
import { Newlist } from "../modules/Newlist"
import { Item } from "../modules/Item"
import { scrolled, setpos, startSS } from "../func/smoothScroll230"
export function Fashion(p){
    const mycon=useContext(pcon)
    useEffect(()=>{
        document.addEventListener('mousewheel', scrolled, {
            passive: false
        })
        document.addEventListener('DOMMouseScroll', scrolled, {
            passive: false
        })
        setpos(0)
        $('html,body').css({overflow:'visible',overflowX:'hidden'})
        $('#logo a').click(()=>mycon.chgPgName('main'))
        $('#bgbx').slideUp(300)
        return(()=>{
            document.removeEventListener('mousewheel', scrolled, {
                passive: false
            })
            document.removeEventListener('DOMMouseScroll', scrolled, {
                passive: false
            })
            setpos(0)
        })
    },[])
    const acat=useRef(null)
     // 카테고리가 변경시에만 위로이동!
    if (p.cat !== acat.current) setpos(0);
    
    // 이전카테고리 업데이트
    acat.current = p.cat;
    const [prdt,setPrdt]=useState('m1')
    const ctem=(a)=>{
        setPrdt(a)
        $('#bgbx').slideDown(300)
    }
    return(
        <>
            <section id="ban" className="page">
                <Swps cat={mycon.pgName}></Swps>
            </section>
            <section id="c1" className={"cont c1 "+mycon.pgName+""}>
                <Newlist cat={mycon.pgName} ft={ctem}></Newlist>
            </section>
            <div id="bgbx"><Item cat={p.cat} good={prdt}></Item></div>
            <section id="c2" className={"cont c2 "+mycon.pgName+""}></section>
            <section id="c3" className="cont c3"></section>
            <section id="c4" className="cont c4"></section>
        </>
    )

} //////// MenSub 컴포넌트 ///////