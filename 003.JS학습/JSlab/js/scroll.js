let bgnum=0;
let stswl=0;
let totalpg=7;
setTimeout(() => {
    window.scrollTo(0,0)//reset when f5
}, 10);

window.addEventListener('wheel',wlfn)
window.addEventListener('DOMContentLoaded',ldfn)
const qs=x=>document.querySelector(x)
const qa=x=>document.querySelectorAll(x)
function ldfn() {
    // console.log('l')
    totalpg=qa('.page').length
}
function wlfn(e) {
    // console.log('f')
    if (stswl) {
        return
    }//ban a lot of wheel
    stswl=1;//ban a lot of wheel
    setTimeout(() => {
        stswl=0
    }, 100);//ban a lot of wheel
    let delta=e.wheelDelta//wheel direction(-=down,+=up)
    // console.log(delta)
    if(delta<0)bgnum++
    else bgnum--
    if(bgnum<0)bgnum=0
    if(bgnum==totalpg)bgnum=totalpg-1
    // console.log(bgnum)
    window.scrollTo(0,window.innerHeight*bgnum)
}