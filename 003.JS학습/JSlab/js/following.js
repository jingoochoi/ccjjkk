window.addEventListener('DOMContentLoaded',ldft)
const qs=x=>document.querySelector(x)
const qa=x=>document.querySelectorAll(x)
function ldft() {
    // console.log('b')
    const contbox=qs('.contbox')
    // console.log(contbox)
    let hcode=''
    for(let i=1;i<=50;i++){
        hcode+=`
        <div>
        <img src="../images/dress/${i}.jpg" alt="dress">
        <a href="#" class="link">your dress</a>
        </div>
        `
    }
    // console.log(hcode)
    contbox.innerHTML=hcode
    const mover=qs('.mover')
    // console.log(mover)

    //mover box center
    // let gap=mover.clientWidth/2
    // console.log(gap)

    document.body.onmousemove=function (e) {
        mover.style.top=e.pageY+'px'
        mover.style.left=e.pageX+'px'
        /*★[[ 이벤트발생시 위치값 ]]★
        1. clientX, clientY
        -> 현재 보이는 브라우저 화면이 기준
        -> mainly used for fixed position

        2. offsetX, offsetY
        -> 이벤트 대상이 기준
        -> in case that special box get location from parent box

        3. pageX, pageY
        -> 전체 문서를 기준(스크롤 화면을 포함)
        -> mainly used for absolute position

        4. screenX, screenY
        -> 모니터 화면을 기준*/
    }
    document.body.onmouseenter=function () {
        mover.style.opacity='1'
    }
    document.body.onmouseleave=function () {
        mover.style.opacity='0'
    }
    const link=qa('.link')
    link.forEach(e=>{
        e.onmouseenter=function () {
            mover.style.transform='scale(2)'
        }
        e.onmouseleave=function () {
            mover.style.transform='scale(1)'
        }
    })
}