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
let key1=location.href
svl1()
function svl1(){
    try {
    if (key1.indexOf('?')==-1) {
        throw 'error'
    }
    if (key1.indexOf('=')==-1) {
        throw 'error'
    }
    } catch (e) {
        alert(e)
        location.href='index.html'
    }
    key1=key1.split('?')[1].split('=')[1]
    key1=decodeURIComponent(key1)
}