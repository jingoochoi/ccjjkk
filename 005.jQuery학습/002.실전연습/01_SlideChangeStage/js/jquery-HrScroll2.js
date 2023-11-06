// 제이쿼리로 구현한 가로방향 스크롤 JS : jquery-HrScroll.js

// 로딩구역없이 함수로 구현함! /////
let nb=0
let whnb=0
$('html,body').on('wheel',(e)=>{
    if (whnb==1) {
        return whnb
    }
    whnb=1
    setTimeout(() => {
        whnb=0
    }, 1000);
    if (event.wheelDelta<0) {
        // console.log(event.wheelDelta)
        nb++
        if (nb>6) {
            nb=6
        }
    }
    else if (event.wheelDelta>0) {
        nb--
        if (nb<0) {
            nb=0
        }
    }
    // console.log(nb)
    $('html,body').stop().animate({scrollLeft:$(window).width()*nb},1000,'linear')//stop()이전 애니메이션 지우고 마지막 애니만 마무리
})