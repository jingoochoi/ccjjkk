import dom from "./dom.js";
// console.log(dom)
const simg=dom.qsa('.simg')
// console.log(simg)
simg.forEach(a=>{
    dom.addEvt(a,'mouseover',function () {
        let ir=dom.qsaEl(a,'img')[1]
        let tp=ir.src
        // console.log(ir)
        ir.src=tp.replace('.png','_on.png')
        // console.log(ir)
        a.style.color='red'
    })
    dom.addEvt(a,'mouseout',function () {
        let ir=dom.qsaEl(a,'img')[1]
        let tp=ir.src
        ir.src=tp.replace('_on.png','.png')
    })
})