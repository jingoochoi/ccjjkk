// 남성패션 서브페이지 컨텐츠 컴포넌트

import { useContext, useEffect } from "react"
import '../css/fashion.css'
import { Swps } from "../plugin/swps"
import $ from 'jquery'
import { pcon } from "../modules/pilotContext"
export function Fashion(p){
    const mycon=useContext(pcon)
    useEffect(()=>{
        $('html,body').css({overflow:'visible'})
        $('#logo a').click(()=>mycon.chgPgName('main'))
    },[])
    return(
        <>
            <section id="ban" className="page">
                <Swps cat={mycon.pgName}></Swps>
            </section>
            <section id="c1" className="cont c1 men"></section>
            <div className="bgbx"></div>
            <section id="c2" className="cont c2 men"></section>
            <section id="c3" className="cont c3"></section>
            <section id="c4" className="cont c4"></section>
        </>
    )

} //////// MenSub 컴포넌트 ///////