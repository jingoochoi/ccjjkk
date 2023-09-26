import dd from './dom.js'
console.log("%c📆","font-size:30px")
// console.log(dd)
let tt=dd.qsa('.tt')
const day=['日','月','火','水','木','金','土']
setInterval(() => {
    show()
}, 1000);
show()
function show() {
    const today=new Date()
    // 
    tt[0].innerHTML=today.getFullYear()
    tt[1].innerHTML=today.getMonth()+1
    tt[2].innerHTML=today.getDate()
    tt[3].innerHTML=day[today.getDay()]
    tt[4].innerHTML=today.getHours()>11?'오후':'오전'
    tt[5].innerHTML=today.getHours()>12?today.getHours()-12:today.getHours()
    tt[6].innerHTML=today.getMinutes()
    tt[7].innerHTML=today.getSeconds()
}
// setTimeout(() => {
//     location.reload()
// }, 1000);
