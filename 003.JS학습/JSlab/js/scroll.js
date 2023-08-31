let bgnum=0;
let stswl=0;
window.addEventListener('wheel',wlfn)
function wlfn(e) {
    // console.log('f')
    if (stswl) {
        return
    }//ban a lot of wheel
    stswl=1;//ban a lot of wheel
    setTimeout(() => {
        stswl=0
    }, 800);//ban a lot of wheel
    let delta=e.wheelDelta//wheel direction(-=down,+=up)
    // console.log(delta)
    if(delta<0)bgnum++
    else bgnum--
    if(bgnum<0)bgnum=0
    if(bgnum>6)bgnum=6
    // console.log(bgnum)
    window.scrollTo(0,window.innerHeight*bgnum)
}