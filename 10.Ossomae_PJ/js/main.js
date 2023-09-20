// 옷소매 갤러리 JS - main.js
import dom from "./dom.js";
console.log("%c🤴🧡","background-color:pink;line-height:2;padding:30px;font-size:30px")
const abtn=dom.qsa('.abtn')
const gbx=dom.qs('.gbx')
abtn.forEach(a=>{
    dom.addEvt(a,'click',clft)
})
function clft() {
    // console.log(this)
    let sts=0
    if (sts==1) {
        return sts
    }
    sts=1
    setTimeout(() => {
        sts=0
    }, 3000);
    let rb=this.classList.contains('rb')
    if (rb) {
        gbx.appendChild(dom.qsaEl(gbx,'div')[0])
    }else gbx.insertBefore(dom.qsaEl(gbx,'div')[dom.qsaEl(gbx,'div').length-1],dom.qsaEl(gbx,'div')[0])
}
dom.addEvt(document,'keydown',kdft)
function kdft() {
    let sts=0
    if (sts==1) {
        return sts
    }
    sts=1
    setTimeout(() => {
        sts=0
    }, 3000);
    if (event.key=='ArrowRight') {
        gbx.appendChild(dom.qsaEl(gbx,'div')[0])
    }
    if (event.key=='ArrowLeft') {
        gbx.insertBefore(dom.qsaEl(gbx,'div')[dom.qsaEl(gbx,'div').length-1],dom.qsaEl(gbx,'div')[0])
    }
}
// setInterval(() => {
//     gbx.appendChild(dom.qsaEl(gbx,'div')[0])
// }, 3000);
const go=function () {
    gbx.appendChild(dom.qsaEl(gbx,'div')[0])
}
let autoi,autot
const auto=function () {
    autoi=setInterval(go,3000)
}
auto()
const clear=function () {
    clearInterval(autoi)
    clearTimeout(autot)
    autot=setTimeout(auto,10000)
}
clear()
abtn.forEach(a=>dom.addEvt(a,'click',clear))
dom.addEvt(document,'keydown',clear)
