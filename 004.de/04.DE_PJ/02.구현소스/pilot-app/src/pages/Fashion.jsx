// 남성패션 서브페이지 컨텐츠 컴포넌트

import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react"
import '../css/fashion.css'
import { Swps } from "../plugin/swps"
import $ from 'jquery'
import { pcon } from "../modules/pilotContext"
import { Newlist } from "../modules/Newlist"
import { Item } from "../modules/Item"
import { scrolled, setpos, startSS } from "../func/smoothScroll230"
import { Parallax } from "react-parallax";
import { gnbData } from "../data/gnb"
// import { FashionIntro } from "../modules/FashionIntro";
export function Fashion(p){
    const mycon=useContext(pcon)
    useEffect(()=>{
        document.addEventListener('mousewheel', scrolled, {
            passive: false
        })
        document.addEventListener('DOMMouseScroll', scrolled, {
            passive: false
        })
        // setpos(0)
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
     useLayoutEffect(()=>{
        // if (p.cat !== acat.current) setpos(0);
        setpos(0)
        window.scrollTo(0,0)
        $('#bgbx').hide()
    },[p.cat])
    
    // 이전카테고리 업데이트
    acat.current = p.cat;
    const [prdt,setPrdt]=useState('m1')
    const ctem=(a)=>{
        setPrdt(a)
        $('#bgbx').slideDown(300)
    }
    // let cat=p.cat
    return(
        <>
            <section id="ban" className="page">
                <Swps cat={mycon.pgName}></Swps>
            </section>
            <section id="c1" className={"cont c1 "+mycon.pgName+""}>
                <Newlist cat={mycon.pgName} ft={ctem}></Newlist>
            </section>
            <div id="bgbx"><Item cat={p.cat} good={prdt}></Item></div>
            <section id="c2" className="cont">
            <Parallax className="c2" bgImage={"./images/sub/"+p.cat+"/02.special.png"} bgImageAlt="the cat" strength={200}>
            <h2 className="c2tit">2024 {gnbData[p.cat][1]}</h2>
            </Parallax>
            </section>
            <section id="c3" className="cont c3"></section>
            <section id="c4" className="cont c4"></section>
        </>
    )

} //////// MenSub 컴포넌트 ///////