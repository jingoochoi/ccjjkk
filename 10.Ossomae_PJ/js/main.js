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
    let rb=this.classList.contains('rb')
    if (rb) {
        gbx.appendChild(dom.qsaEl(gbx,'div')[0])
    }else gbx.insertBefore(dom.qsaEl(gbx,'div')[dom.qsaEl(gbx,'div').length-1],dom.qsaEl(gbx,'div')[0])
}