// 남성패션 서브페이지 컨텐츠 컴포넌트

import { useContext, useEffect, useState } from "react"
import '../css/fashion.css'
import { Swps } from "../plugin/swps"
import $ from 'jquery'
import { pcon } from "../modules/pilotContext"
import { Newlist } from "../modules/Newlist"
import { Item } from "../modules/Item"
export function Fashion(p){
    const mycon=useContext(pcon)
    useEffect(()=>{
        $('html,body').css({overflow:'visible',overflowX:'hidden'})
        $('#logo a').click(()=>mycon.chgPgName('main'))
        $('#bgbx').slideUp(300)
    },[])
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