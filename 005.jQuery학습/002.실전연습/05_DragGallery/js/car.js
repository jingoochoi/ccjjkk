$(()=>{
    for (let i = 0; i < 50; i++) {
        $('.cbx').append(`<img src="./360view/country${i+1}.jpg" alt="car">`)
    }
    $('.cbx').find('img').hide().first().show()
    let drag=0
    let pt=0
    let prtt=0
    $('.cbx').on('mousemove',e=>{
        if (drag) {
            let drts=pt-e.pageX<0?0:1
            // console.log(drts)
            rttc(drts)
        }
    })
    $('.cbx').on('mousedown',e=>{
        drag=1
        pt=e.pageX
    })
    $('.cbx').on('mouseup',e=>{
        drag=0
        
    })
    let frnb=0
    const rttc=a=>{
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
    }
})