// 인트로 페이지 JS - intro.js
const myvid=document.querySelector('#myvid')
// timeupdate event
myvid.addEventListener('timeupdate',function () {
    // console.log('b')
    let stop=myvid.paused//pause=true
    if (stop) {
        location.href='main.html'
    }
})
