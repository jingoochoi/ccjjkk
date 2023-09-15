// 큐브 애니2 JS //////////////

/************************************* 
    [구현내용]
    - 휠에 따라 기본기능은 막고 큐브를 회전하는 속성인 로테와이를 이용한 큐브회전적용
    

*************************************/
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
console.log("%c🦸‍♂️MOVING🦸‍♀️","color:red;background-color:pink;line-height:2;padding:30px;font-size:30px")
const deg=40
let sts=0
let num=0
const time=300
const cube=domFn.qs('.cube')
domFn.addEvt(window,'wheel',wft)
function wft() {
    if (sts==1) {
        return sts
    }
    sts=1
    setTimeout(() => {
        sts=0
    }, time);
    // console.log('b')
    let dt=event.wheelDelta
    if (dt<0) {
        num--
    }
    if (dt>0) {
        num++
    }
    cube.style.transform=`rotateY(${deg*num}deg)`
}