// 패럴렉스 PJ JS - main.js
import {startSS,setpos} from "./smoothScroll20.js";
import domi from "./dom.js"
console.log("%c👳‍♂️LOVE IN ASIA🧕","color:red;background-color:pink;line-height:2;padding:30px;font-size:30px")
startSS()
// parallax=when scroll, same direction but different speed for each element
// need the setting of range
// use .getBoundingClientRect().top
// also use scroll event
setTimeout(() => {
    window.scrollTo(0,0)
    // pos=0
    setpos(0)
}, 10);
domi.addEvt(window,'mouseup',()=>{
    setpos(window.scrollY)
})
domi.addEvt(window,'keyup',()=>{
    setpos(window.scrollY)
})
const txt=domi.qsa('.txt')
const icon=domi.qsa('.icon')
// console.log(txt,icon)
domi.addEvt(window,'scroll',scrft)
function scrft() {
    txt.forEach(a=>{move(domi.getBCR(a),a,'200')})
    icon.forEach(a=>{move(domi.getBCR(a),a,'100')})
}
function move(a,b,c) {
    // console.log(a,b,c)
    if (a<window.innerHeight&&a>-200) {
        let x=c-(a*c/window.innerHeight)
        // console.log(x)
        b.style.transform=`translateY(${-x}px)`
    }
}