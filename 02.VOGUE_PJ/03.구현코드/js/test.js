// 테스트 JS
console.log("%c　👩\n  👗\n","font-size:100px;text-align:center")
console.log("%cd","font-size:100px;background-image:linear-gradient(to bottom,blue,blue 50%,yellow 51%,yellow);padding-left:100px;padding-right:100px;line-height:1.5;color:transparent",'pray for Ukraine')
// console.log("%c●","font-size:130px;color:red;padding-left:100px;padding-right:100px;border:1px solid black;line-height:1.5;")
import aespa from './com.js'
import stayc from './dom.js'
// 부드러운 스크롤 모듈
import  {startSS, setpos } from "./smoothScroll23.js";
// 부드러운 스크롤 적용 //////////
startSS();

const top=stayc.qs('.toparea')
top.innerHTML=aespa.toparea
const foot=stayc.qs('.footarea')
foot.innerHTML=aespa.footarea
top.innerHTML+=aespa.mobtn
top.parentElement.innerHTML+=aespa.mobx
const hide=$('.mainarea section')
// const hide=stayc.qsa('.mainarea section')
hide.each((m,n)=>{
    if (m!=0) {
        n.classList.add('scAct')
    }
    // if (m.style.top==window.innerHeight/2) {
    //     m.classList.add('on')
    // }
})
$(window).scroll(()=>{
    let tp=$(window).scrollTop()
    hide.each((p,l)=>{
        if (stayc.getBCR(l)<window.innerHeight*3/4) {
            l.classList.add('on')
        }
    })
    if (tp>100) {
        // 
        $('#toparea').addClass('on')
    }else $('#toparea').removeClass('on')
    if (tp>300) {
        // 
        $('.tbtn').addClass('on')
    }else $('.tbtn').removeClass('on')
})
$('.tbtn').click((p)=>{
    p.preventDefault()
    setpos(0)
})
$('.hbtn').click(()=>{$('#mobx').slideToggle(300)})
$('.sbtn').click(()=>{$('.mos').slideToggle(300)})