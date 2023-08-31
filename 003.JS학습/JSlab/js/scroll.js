let bgnum=0;
window.addEventListener('wheel',wlfn)
function wlfn(e) {
    // console.log('f')
    let delta=e.wheelDelta//wheel direction(-=down,+=up)
    // console.log(delta)
    if(delta<0)bgnum++
    else bgnum--
    if(bgnum<0)bgnum=0
    if(bgnum>6)bgnum=6
    // console.log(bgnum)
    window.scrollTo(0,window.innerHeight*bgnum)
}