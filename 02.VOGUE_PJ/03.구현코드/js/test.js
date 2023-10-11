// 테스트 JS
console.log("%c　👩\n  👗\n","font-size:100px;text-align:center")
import aespa from './com.js'
import stayc from './dom.js'
// 부드러운 스크롤 모듈
import startSS from "./smoothScroll23.js";
// 부드러운 스크롤 적용 //////////
startSS();
const top=stayc.qs('.toparea')
top.innerHTML=aespa.toparea
const foot=stayc.qs('.footarea')
foot.innerHTML=aespa.footarea