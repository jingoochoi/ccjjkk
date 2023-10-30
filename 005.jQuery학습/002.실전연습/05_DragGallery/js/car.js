$(()=>{
    for (let i = 0; i < 50; i++) {
        $('.cbx').append(`<img src="./360view/country${i+1}.jpg" alt="car">`)
    }
    $('.cbx').find('img').hide().first().show()
    let drag=0
    let pt=0
    let prtt=0
    $('.cbx').on('mousemove touchmove',e=>{
        if (prtt) {
            return
        }
        prtt=1
        setTimeout(() => {
            prtt=0
        }, 100/2);
        if (drag) {
            let drts=pt-(e.pageX||e.changedTouches[0].pageX)<0?0:1
            // console.log(drts)
            rttc(drts)
            // $('.cbx').css({cursor:'grabbing'})
        }
        pt=(e.pageX||e.changedTouches[0].pageX)
    })
    $('.cbx').on('mousedown touchstart',e=>{
        drag=1
        pt=(e.pageX||e.changedTouches[0].pageX)
        $('.cbx').css({cursor:'grabbing'})
    })
    $('.cbx').on('mouseup mouseout touchend',e=>{
        drag=0
        $('.cbx').css({cursor:'grab'})
        
    })
    let frnb=0
    const cimg=$('.cbx').find('img')//'img:visible'=visible img,:hidden=hidden img
    const rttc=a=>{
        cimg.eq(frnb).hide()
        if (a) {
            frnb++
            if (frnb==50) {
                frnb=0
            }
        }else{
            frnb--
            if (frnb<0) {
                frnb=49
            }
        }
        cimg.eq(frnb).show()
    }
})