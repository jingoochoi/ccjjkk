import { banData } from "../data/bann";
import '../../css/banner.css'
import { useEffect } from "react";
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
function sld1() {
    let cl=0
    let nb=0
    $('.abtn').click(function () {
        if (cl) {
            return
        }
        cl=1
        setTimeout(() => {
            cl=0
        }, 1000);
        if ($(this).is('.rb')) {
            $('.slider').animate({left:'-100%'},300,'linear',()=>{
                $('.slider').append($('.slider').find('li').first()).css({left:0})
            })
            nb++
            if (nb>$('.indic li').length-1) {
                nb=0
                $('.indic').find('li').first().addClass('on')
            }
            $('.indic').find('li').eq(nb).addClass('on').siblings().removeClass('on')
        }
        if ($(this).is('.lb')) {
            $('.slider').prepend($('.slider').find('li').last()).css({left:'-100%'}).animate({left:0},300,'linear')
            $('.indic').find('li.on').removeClass('on').prev().addClass('on')
            nb--
            if (nb<0) {
                nb=$('.indic li').length-1
                $('.indic').find('li').last().addClass('on')
            }
            $('.indic').find('li').eq(nb).addClass('on').siblings().removeClass('on')
        }
    })
} 
export function Bann(p) {
    useEffect(()=>{
        sld1()
    })
    const make=(d)=>d.map((a,b)=><li key={b}><img src={a.src} alt="img" /></li>)
    return(
        <div className="banner">
            <ul className="slider">
                {make(banData[p.ctgr])}
            </ul>
            {(banData[p.ctgr].length>1)&&
            <>
                <button className="abtn lb">◀</button>
                <button className="abtn rb">▶</button>
                <ol className="indic">
                    {banData[p.ctgr].map((w,o)=><li key={o} className={o==0?'on':''}></li>)}
                </ol>
            </>}
        </div>
    )
}