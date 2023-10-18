import aespa from './dom.js'
console.log("%c🐧펭하~","font-size:30px")
const atbt=$('.act button')
const btns=$('.btns')
const line=$('.lineper')
const lbar=line.find('.lbar')
let ltxt=line.find('.ltxt b')
// console.log(atbt)
// .one('event',function)-act event only 'one' time
atbt.one('click',function () {
    // console.log($(this).html())
    if ($(this).html()=='팽수1') {
        dgdd(0,30)
        dgdd(1,100)
        dgdd(2,60)
        dgdd(3,90)
    }
    if ($(this).html()=='팽수2') {
        let nb=ltxt.html()
        const prgr=function () {
            nb++
            ltxt.html(nb)
            lbar.css({width:nb+'%'})
            if (nb==100) {
                // console.log('😀')
                // $('#myaud').get(0).play()//jq
                // document.querySelector('#myaud').play()//js
                $('#myaud')[0].play()
            }
            setTimeout(() => {
                if (nb<100) {
                    prgr()
                }
            }, 30);
        }
        prgr()
    }
})
function dgdd(p,q) {
    let ptxt=btns.eq(p).find('.ptxt')
    let nb=ptxt.html()
    nb++
    ptxt.html(nb)
    btns.eq(p).find('.c1').css({strokeDashoffset:300*(100-nb)/100+'%'})
    setTimeout(() => {
        // 
        if (nb<q) {
            dgdd(p,q)
        }
    }, 30);
}