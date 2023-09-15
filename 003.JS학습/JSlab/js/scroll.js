// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////
  console.log("%c🎬MOVIE🎥","color:red;background-image:linear-gradient(to bottom right,red,orange,yellow,green,blue,darkblue,violet);line-height:2;padding:30px;font-size:30px")
let bgnum=0;
let stswl=0;
let totalpg=7;
setTimeout(() => {
    window.scrollTo(0,0)//reset when f5
}, 10);
domFn.addEvt(window,'wheel',wlfn)
// window.addEventListener('wheel',wlfn)
domFn.addEvt(window,'DOMContentLoaded',ldfn)
// window.addEventListener('DOMContentLoaded',ldfn)
function ldfn() {
    // console.log('l')
    totalpg=domFn.qsa('.page').length
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
    chgmenu()
}
const gnbli=domFn.qsa('.gnb li')
const indli=domFn.qsa('.indic li')
function chgmenu() {
    // console.log(bgnum)
    const comf=function (a) {
        
    }
    gnbli.forEach((a,b)=>{
        if (b==bgnum) {
            a.classList.add('on')
        }else a.classList.remove('on')
    })
    indli.forEach((a,b)=>{
        if (b==bgnum) {
            a.classList.add('on')
        }else a.classList.remove('on')
    })
}
/* 모바일 이벤트처리
    
    [ 모바일 터치 스크린에서 사용하는 이벤트 종류 ]
    1. touchstart - 손가락이 화면에 닿을때 발생
    2. touchend - 손가락이 화면에서 떨어질때 발생
    3. touchmove - 손가락이 화면에 닿은채로 움직일때 발생
    
    [ 화면터치 이벤트관련 위치값 종류 ]
    1. screenX, screenY : 디바이스 화면을 기준한 x,y 좌표
    2. clientX, clientY : 브라우저 화면을 기준한 x,y 좌표(스크롤미포함)
    3. pageX, pageY : 스크롤을 포함한 브라우저 화면을 기준한 x,y 좌표 */
window.addEventListener('touchstart',tsft)
window.addEventListener('touchend',teft)
let postart=0;let posend=0;
function tsft(e) {
    // console.log('b')
    postart=e.touches[0].screenY
    // console.log(postart)
}
function teft(e) {
    // console.log('b')
    posend=e.changedTouches[0].screenY
    // console.log(posend)
    let minus=postart-posend
    // console.log(minus)
    if (minus==0) {
        return
    }
    mvpg(minus>0?1:0)
    function mvpg(direction) {
        // console.log(direction)
        if(direction==1) bgnum++;
        else bgnum--;

        // 한계수체크(양끝페이지고정!)
        if(bgnum<0) bgnum=0;
        if(bgnum==totalpg) bgnum = totalpg-1;
        window.scrollTo(0,window.innerHeight*bgnum);
    }
}